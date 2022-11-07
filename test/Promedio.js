const {ethers} = require("hardhat");
const {expect} = require("chai");

let ContractFactory;
let ContractInstance;

describe("Test Promedio Contract", function(){
    it("Should deploy the smart contract", async function(){
        ContractFactory = await ethers.getContractFactory("Promedio");
        ContractInstance = await ContractFactory.deploy();
        await ContractInstance.deployed();
    })

    describe("Promedio Test", function(){
        it("Should returns the average of three numbers", async function(){
            let a = 9;
            let b = 7; 
            let c= 10;
            const prom = parseInt((a+b+c)/3);
            
            expect( await ContractInstance.promedio(a,b,c)).to.equal(prom);
        })
    })
})