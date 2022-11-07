pragma solidity ^0.8.6;

contract Promedio{

    function promedio(uint a, uint b, uint c) public pure returns(uint){
        if(a>0 && b>0 && c>0){
            uint promedioResultado = (a+b+c) / 3;
            return promedioResultado;
        }
    }
}