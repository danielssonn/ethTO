const { expect } = require("chai");
const { ethers } = require("hardhat")



describe("NFTMarket setup", function () {

    before(async function () {
        NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
        nftMarket = await NFTMarket.deploy()

    })

    it("Should do things ...", async function () {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();


    });



});