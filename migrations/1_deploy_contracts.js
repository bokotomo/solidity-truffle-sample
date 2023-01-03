const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const UserItem = artifacts.require("UserItem");
const Gold = artifacts.require("Gold");
const Items = artifacts.require("Items");
const RentalItem = artifacts.require("RentalItem");

/**
 * デプロイ
 */
module.exports = function (deployer) {
  // コイン
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);

  // アイテム ERC721
  deployer.deploy(UserItem);
  // 貸し借り可能アイテム ERC4907
  deployer.deploy(RentalItem);

  // 複数アイテム ERC1155
  deployer.deploy(Items);

  // コイン ERC20
  deployer.deploy(Gold);
};
