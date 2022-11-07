const { expect } = require("chai");
const { ethers } = require("hardhat");

let ContractFactory;
let ContractInstance;

let signers = {};

describe("Equipos test", function(){
    it("Should deployed the contract", async function(){
        const [deployer] = await ethers.getSigners();
        signers.deployer = deployer;
        ContractFactory = await ethers.getContractFactory("Equipos");
        ContractInstance = await ContractFactory.deploy();
        await ContractInstance.deployed();
    })


    describe("Set Address", function(){
        it("Should set a address as a team", async function(){
            let setTeam =await ContractInstance.setPlayers(await signers.deployer.address);
            expect(await ContractInstance.getEquipo(0)).to.equal(signers.deployer.address);
        })
    })


})