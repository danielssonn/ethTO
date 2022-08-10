// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/utils/Base64.sol';
import '@openzeppelin/contracts/utils/Strings.sol';

contract NFTDummy is ERC721 {
    using Strings for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _totalMinted;

    string public baseURI;

    constructor(string memory baseURI_) ERC721('Dummy NFT', 'DFT') {
        baseURI = baseURI_;
    }

    function mint() public {
        uint256 tokenId = _totalMinted.current();

        _safeMint(msg.sender, tokenId);

        _totalMinted.increment();
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
}
