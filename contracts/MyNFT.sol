// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    uint256 internal tokenId = 0;

    constructor() ERC721("MyNFT", "MNFT") {}

    // add
    function awardItem() external {
        super._mint(msg.sender, tokenId);
        tokenId++;
    }
}
