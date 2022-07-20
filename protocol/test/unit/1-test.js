const { expect } = require("chai");
const { ethers } = require("hardhat")



describe("SomeContract setup", function () {

    before(async function () {
        SomeContract = await hre.ethers.getContractFactory("SomeContract");
        someContract = await SomeContract.deploy()

    })

    it("Should do things ...", async function () {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();


    });



});