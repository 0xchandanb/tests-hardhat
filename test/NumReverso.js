const { expect } = require("chai");
const { ethers } = require("hardhat");

let ContractFactory;
let ContractInstance;

describe("NumReverso", function(){
    it("Should deployed the contract", async function(){
        ContractFactory = await ethers.getContractFactory("NumReverso");
        ContractInstance = await ContractFactory.deploy();
        await ContractInstance.deployed();
    })


    describe("Result test", function(){
        it("Should return the reverse of the number", async function(){
            let n = 75;
            let resul = 57;
            expect(await ContractInstance.reverseDigit(n)).to.equal(resul);
        })
    })

})