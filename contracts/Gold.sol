// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// (await ins.balanceOf(accounts[0])).toString()
// await ins.transfer(accounts[0],1)
contract Gold is ERC20 {
    constructor() ERC20("Gold", "GLD") {
        _mint(msg.sender, 50000 * 10**decimals());
    }
}
