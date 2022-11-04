pragma solidity ^0.8.13;

contract StructLibro{

    struct Libro{
       string titulo;
       string autor;
       uint256 paginas;
       uint8 bookid;
    }

    Libro[] public libros;

    function setLibro(string memory _title, string memory _author, uint256 _pages, uint8 _bookid) public {
        Libro memory _thisLibro;
        _thisLibro.titulo = _title;
        _thisLibro.autor = _author;
        _thisLibro.paginas = _pages;
        _thisLibro.bookid = _bookid;
        libros.push(_thisLibro);
    }


    function getLibro() public view returns(string memory, string memory, uint256, uint8){
        Libro storage libro = libros[0];
        return (libro.titulo, libro.autor, libro.paginas, libro.bookid);
    }
}