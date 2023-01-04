const ConvertLib = artifacts.require("ConvertLib");
const Gold = artifacts.require("Gold");
const Items = artifacts.require("Items");
const MetaCoin = artifacts.require("MetaCoin");
const RentalItem = artifacts.require("RentalItem");
const UserItem = artifacts.require("UserItem");
const LevelItem = artifacts.require("LevelItem");

/**
 * デプロイ
 */
module.exports = function (deployer) {
  // コイン
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  // コイン ERC20
  deployer.deploy(Gold);

  // アイテム ERC721
  deployer.deploy(UserItem);
  // 貸し借り可能アイテム ERC4907
  deployer.deploy(RentalItem);
  // 独自：レベル付きアイテム ERC721
  deployer.deploy(LevelItem);

  // 複数アイテム ERC1155
  deployer.deploy(Items);
};
