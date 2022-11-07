pragma solidity ^0.8.13;

contract SumaArray{
    function suma(uint[] calldata _array, uint _length) public pure returns(uint){
        uint acc = 0;
        for(uint i=0; i<_length; i++){
            acc += _array[i];
        }
        return acc;
    }
}