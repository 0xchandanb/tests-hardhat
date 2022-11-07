pragma solidity ^0.8.6;

contract EsPrimo{
    
    function esPrimo(uint n) public pure returns(uint){
        if(n==0 || n==1 || n==4){
            return 0;
        }else{
            for (uint x = 2; x < n / 2; x++) {
		        if (n % x == 0){
                    return 0;
                }   
	        }
            return 1;
        }
    }
   
}