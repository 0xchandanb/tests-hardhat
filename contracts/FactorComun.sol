pragma solidity ^0.8.13;

contract FactorComun{
    event Evento(uint numero1, uint numero2,  uint resul);
    function factorComunMasAlto(uint _num1, uint _num2) public returns(uint){
        uint res = 0;
        while(_num2 != 0){
            res = _num2;
            _num2 = _num1 % _num2;
            _num1 = res;
        }
        emit Evento(_num1, _num2, res);
        return res;
    }
}