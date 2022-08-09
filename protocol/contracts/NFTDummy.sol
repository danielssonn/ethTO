// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {AxelarExecutable} from '@axelar-network/axelar-utils-solidity/contracts/executables/AxelarExecutable.sol';
import {IAxelarGateway} from '@axelar-network/axelar-utils-solidity/contracts/interfaces/IAxelarGateway.sol';
import {StringToAddress, AddressToString} from '@axelar-network/axelar-utils-solidity/contracts/StringAddressUtils.sol';
import {IERC20} from '@axelar-network/axelar-cgp-solidity/contracts/interfaces/IERC20.sol';
import {IAxelarGasService} from '@axelar-network/axelar-cgp-solidity/contracts/interfaces/IAxelarGasService.sol';

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/utils/Base64.sol';
import '@openzeppelin/contracts/utils/Strings.sol';

contract NFTDummy is ERC721, ERC721Holder, AxelarExecutable {
    using StringToAddress for string;
    using AddressToString for address;
    using Strings for uint256;

    error AlreadyInitialized();

    event NFTSent(
        uint256 indexed _tokenId,
        string indexed _destinationChain,
        address indexed _destinationAdress
    );

    event NFTMinted(uint256 token);

    mapping(uint256 => bytes) public original; //abi.encode(originaChain, operator, tokenId);
    string public chainName; //To check if we are the source chain.
    IAxelarGasService public gasReceiver;
    IAxelarGateway _gateway;


    using Counters for Counters.Counter;
    Counters.Counter private _totalMinted;
    string public baseURI;
    uint256 immutable mintingChainHash;

    bool public executed;

    constructor(string memory baseURI_, string memory _mintingChain) ERC721('Dummy NFT', 'DFT') {
        baseURI = baseURI_;
        mintingChainHash = uint256(keccak256(abi.encodePacked(_mintingChain)));
    }


    function mint() public returns (uint256) {
        require(
                mintingChainHash == uint256(keccak256(abi.encodePacked(chainName))),
                "Not allowed to mint on this chain"
                );
        uint256 tokenId = _totalMinted.current();

        _safeMint(msg.sender, tokenId);

        emit NFTMinted(tokenId);

        return tokenId;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            tokenId <= _totalMinted.current(),
            "Token hasn't been minted yet."
        );

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "Dodo #',
                        tokenId.toString(),
                        '", "description": "The dumbest NFT around, guaranteed!", "image": "',
                        baseURI,
                        '/',
                        tokenId.toString(),
                        '.json"}'
                    )
                )
            )
        );

        return string(abi.encodePacked('data:application/json;base64,', json));
    }

    function init(
        string memory chainName_,
        address gateway_,
        address gasReceiver_
    ) external {
        if (
            address(gateway()) != address(0) ||
            address(gasReceiver) != address(0)
        ) revert AlreadyInitialized();
        gasReceiver = IAxelarGasService(gasReceiver_);
        _gateway = IAxelarGateway(gateway_);
        chainName = chainName_;
    }

    function gateway() public view override returns (IAxelarGateway) {
        return _gateway;
    }

    //The main function users will interract with.
    function sendNFT(
        uint256 tokenId,
        string memory destinationChain,
        address destinationAddress
    ) external payable {

        _burn(tokenId);

        //Create the payload.
        bytes memory payload = abi.encode(
            chainName,
            tokenId,
            destinationAddress
        );
        string memory stringAddress = address(this).toString();
        //Pay for gas. We could also send the contract call here but then the sourceAddress will be that of the gas receiver which is a problem later.
        gasReceiver.payNativeGasForContractCall{value: msg.value}(
            address(this),
            destinationChain,
            stringAddress,
            payload,
            msg.sender
        );


        emit NFTSent(tokenId, chainName, destinationAddress);

        //Call the remote contract.
        gateway().callContract(destinationChain, stringAddress, payload);
    }

    //This is automatically executed by Axelar Microservices since gas was payed for.
    function _execute(
        string calldata, /*sourceChain*/
        string calldata sourceAddress,
        bytes calldata payload
    ) internal override {
        executed = true;

        //Check that the sender is another token linker.
        // require(sourceAddress.toAddress() == address(this), 'NOT_A_LINKER');
        //Decode the payload.
        (
            string memory originalChain,
            uint256 tokenId,
            address destinationAddress
        ) = abi.decode(payload, (string, uint256, address));

        //If this is the original chain then we give the NFT locally.
        if (keccak256(bytes(originalChain)) == keccak256(bytes(chainName))) {
            transferFrom(
                address(this),
                destinationAddress,
                tokenId
            );
            //Otherwise we need to mint a new one.
        } else {

            _safeMint(destinationAddress, tokenId);
        }
    }
}
