const { expect } = require("chai");
const { ethers } = require("hardhat");

let ContractFactory;
let ContractInstance;

describe("StructLibro", function(){
    it("Should deployed the contract", async function(){
         ContractFactory = await ethers.getContractFactory("StructLibro");
         ContractInstance = await ContractFactory.deploy();
        await ContractInstance.deployed();
    })
})

describe("Test Set", function(){
    it("Should set a book", async function(){
        const setLibro = await ContractInstance.setLibro("La odisea", "Homero", 120,4);
        const setLibroRecip = await setLibro.wait();
    })
})
