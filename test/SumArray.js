const {expect} = require("chai");
const {ethers} = require("hardhat");

let ContractFactory;
let ContractInstance;

describe("SumaArray", function(){
    it("Should deployed the contract", async function(){
        ContractFactory = await ethers.getContractFactory("SumaArray");
        ContractInstance = await ContractFactory.deploy();
        await ContractInstance.deployed();
    })


    describe("Result test", function(){
        it("Should return the sum of an array", async function(){
            let arr = [1,2,3];
            let resul = 6;
            expect(await ContractInstance.suma(arr, 3)).to.equal(resul);
        })
    })

})