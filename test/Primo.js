const { expect } = require("chai");
const { ethers } = require("hardhat");

let ContractFactory;
let ContractInstance;

describe("Primo contract test", function(){
    it("Should deployed the contract", async function(){
        ContractFactory = await ethers.getContractFactory("EsPrimo");
        ContractInstance = await ContractFactory.deploy();
        await ContractInstance.deployed();
    })


    describe("Prime number test", function(){
        it("Should return if the number is prime or not", async function(){
            let n = 7;
            let resul = 1;
            expect(await ContractInstance.esPrimo(n)).to.equal(2);
        })
    })

})
