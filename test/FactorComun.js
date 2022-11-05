const { expect } = require("chai");
const { ethers } = require("hardhat");

let ContractFactory;
let ContractInstance;

describe("FactorComun", function(){
    it("Should deployed the contract", async function(){
        ContractFactory = await ethers.getContractFactory("FactorComun");
        ContractInstance = await ContractFactory.deploy();
        await ContractInstance.deployed();
    })


    describe("Result test", function(){
        it("Should do the MCD with 2 arguments", async function(){
            const factor = await ContractInstance.factorComunMasAlto(60, 75);
            await factor.wait();
            console.dir(factor);
        })
    })

})