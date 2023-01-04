// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

// let ins = await Gold777.deployed()
contract Gold777 is ERC777 {
    constructor(uint256 initialSupply, address[] memory defaultOperators)
        ERC777("Gold777", "GLD777", defaultOperators)
    {
        _mint(msg.sender, initialSupply, "", "");
    }
}
