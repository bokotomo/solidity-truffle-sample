// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./ConvertLib.sol";

// let ins = await MetaCoin.deployed()
contract MetaCoin {
    mapping(address => uint256) balances;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    constructor() {
        balances[tx.origin] = 10000;
    }

    // 送金
    function sendCoin(address receiver, uint256 amount)
        public
        returns (bool sufficient)
    {
        if (balances[msg.sender] < amount) return false;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Transfer(msg.sender, receiver, amount);
        return true;
    }

    // 残高eth
    function getBalanceInEth(address addr) public view returns (uint256) {
        return ConvertLib.convert(getBalance(addr), 2);
    }

    // 残高
    function getBalance(address addr) public view returns (uint256) {
        return balances[addr];
    }
}
