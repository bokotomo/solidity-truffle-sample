// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

// let ins = await Items.deployed()
//  (await ins.balanceOf(accounts[0],3)).toString()
contract Items is ERC1155 {
    uint256 public constant GOLD = 0;
    uint256 public constant SILVER = 1;
    uint256 public constant THORS_HAMMER = 2;
    uint256 public constant SWORD = 3;
    uint256 public constant SHIELD = 4;

    constructor() ERC1155("https://game.example/api/item/{id}.json") {
        super._mint(msg.sender, GOLD, 10**18, "");
        super._mint(msg.sender, SILVER, 10**27, "");
        super._mint(msg.sender, THORS_HAMMER, 1, "");
        super._mint(msg.sender, SWORD, 10**9, "");
        super._mint(msg.sender, SHIELD, 10**9, "");
    }
}
