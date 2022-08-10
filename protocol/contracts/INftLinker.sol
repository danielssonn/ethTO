// SPDX-License-Identifier: MIT

pragma solidity >=0.8.7 <0.9.0;

interface INftLinker {
    function sendNFT(
        address operator,
        uint256 tokenId,
        string memory destinationChain,
        address destinationAddress
    ) external payable;
}
