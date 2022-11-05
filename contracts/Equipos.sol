pragma solidity ^0.8.13;

contract Equipos{

    struct Player{
        uint256 number;
        address jersey;
    }

    mapping(uint256 => Player) count;

    uint contador=0;
    
    function setPlayers(address _equipo) public{
        address jersey = msg.sender;
        require(contador <16, "Solo se adminten 16 equipos");
        count[contador] = Player(contador, jersey);
        contador +=1;
    }
    function getEquipo(uint256 _number) public view returns(address){
        require(_number >= 0 && _number <=15, "Numero ingresado no es valido");
        return(count[_number].jersey);
    }

}