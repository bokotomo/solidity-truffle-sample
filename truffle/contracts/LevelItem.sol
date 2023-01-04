// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// 独自コンストラクタ
// トークンにレベルを設定できるコンストラクタ
// ゲームでの強化を楽しむ
// level: tokenのレベル。tokenに対して永続的。
// let ins = await LevelItem.deployed()
// ins.mint(accounts[0])
// (await ins.levelOf(0)).toString()
contract LevelItem is ERC721 {
    // Mapping from token ID to token level
    mapping(uint256 => uint256) private _level;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("LevelItem", "LITM") {}

    /**
     * トークン追加
     */
    function mint(address player) public returns (uint256) {
        uint256 newId = _tokenIds.current();

        super._mint(player, newId);

        _level[newId] = 1;

        _tokenIds.increment();

        return newId;
    }

    /**
     * @dev Sets `_tokenURI` as the tokenURI of `tokenId`.
     *
     * Requirements:
     * - `tokenId` must exist.
     */
    function _addLevel(uint256 tokenId) internal virtual {
        require(_exists(tokenId), "LevelItem: Level set of nonexistent token");
        _level[tokenId] += 1;
    }

    /**
     * Returns the level of the `tokenId`. Does NOT revert if token doesn't exist
     */
    function levelOf(uint256 tokenId) public view virtual returns (uint256) {
        return _level[tokenId];
    }
}
