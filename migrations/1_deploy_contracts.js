const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const UserItem = artifacts.require("UserItem");
const Gold = artifacts.require("Gold");
const Items = artifacts.require("Items");

module.exports = function (deployer) {
  // コイン
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);

  // アイテム
  deployer.deploy(UserItem);

  // 複数アイテム
  deployer.deploy(Items);

  // コイン
  deployer.deploy(Gold);
};
