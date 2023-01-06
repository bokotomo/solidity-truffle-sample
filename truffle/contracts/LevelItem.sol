// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// 独自コンストラクタ
// トークンにレベルを設定できるコンストラクタ
// ゲームでの強化を楽しむ
// level: tokenのレベル。tokenに対して永続的。
// ownedTokens: 所持しているtoken一覧。この変数は簡易的な発想。
// -------
// let ins = await LevelItem.deployed()
// (await ins.balanceOf(accounts[0])).toString()
// ins.mint(accounts[0])
// (await ins.balanceOf(accounts[0])).toString()
// (await ins.levelOf(0)).toString()
// (await ins.ownedTokensOf(accounts[0]))[0].toString()
// ins.mint(accounts[1])
// (await ins.ownedTokensOf(accounts[1]))
// ins.transferFrom(accounts[0],accounts[1],0)
// (await ins.ownedTokensOf(accounts[1]))
// (await ins.ownedTokensOf(accounts[0]))
contract LevelItem is ERC721 {
    // Mapping from token ID to token level
    mapping(uint256 => uint256) private _level;
    // Mapping from owner to list of owned token IDs
    mapping(address => uint256[]) private _ownedTokens;

    // tokenID用のカウンター
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("LevelItem", "LITM") {}

    /**
     * mint
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

    /**
     * Returns tokenIds
     */
    function ownedTokensOf(address player)
        public
        view
        virtual
        returns (uint256[] memory)
    {
        return _ownedTokens[player];
    }

    /**
     * @dev See {ERC721-_beforeTokenTransfer}.
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 firstTokenId,
        uint256 batchSize
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, firstTokenId, batchSize);

        // Will only trigger during construction. Batch transferring (minting) is not available afterwards.
        if (batchSize > 1)
            revert("LevelItem: consecutive transfers not supported");

        // mint or transfer
        if (to != address(0)) _ownedTokens[to].push(firstTokenId);

        // barn or transfer
        if (from != address(0)) {
            for (uint256 i = 0; i < _ownedTokens[from].length; i++) {
                if (_ownedTokens[from][i] == firstTokenId) {
                    _ownedTokens[from][i] = _ownedTokens[from][
                        _ownedTokens[from].length - 1
                    ];
                    _ownedTokens[from].pop();
                    break;
                }
            }
        }
    }
}
