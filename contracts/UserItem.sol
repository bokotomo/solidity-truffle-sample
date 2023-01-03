// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// let ins = await UserItem.deployed()
// ins.awardItem(accounts[1], "https://test")
// ins.ownerOf(0)
// ins.tokenURI(0)
contract UserItem is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("UserItem", "UITM") {}

    /**
     * アドレスにアイテムの登録
     */
    function awardItem(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 newItemId = _tokenIds.current();

        super._mint(player, newItemId);
        super._setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();

        return newItemId;
    }

    /**
     * トークンの削除
     */
    function burn(uint256 tokenId) public {
        if (super._exists(tokenId)) revert("UserItem: nonexistent token");
        super._burn(tokenId);
    }
}
