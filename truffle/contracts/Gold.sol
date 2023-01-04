// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

// let ins = await Gold.deployed()
// (await ins.balanceOf(accounts[0])).toString()
// await ins.transfer(accounts[1],1)
contract Gold is ERC20, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    constructor() ERC20("Gold", "GLD") {
        super._grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        super._mint(msg.sender, 50000 * 10**decimals());
    }

    function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
        super._mint(to, amount);
    }

    function burn(address from, uint256 amount) public onlyRole(BURNER_ROLE) {
        super._burn(from, amount);
    }
}
