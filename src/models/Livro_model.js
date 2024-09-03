const livro_controller = require("../controllers/Livro.js");

let nextID = 1;

const model = (body, id = nextID++) => {
    if(body.titulo != "" &&
        body.titulo != undefined &&
        body.autor != "" && 
        body.autor != undefined &&
        body.ano <= 2024 &&
        body.ano > 0 &&
        body.genero != "" &&
        body.genero != undefined
    ){
        return {
            id,
            titulo: body.titulo,
            autor: body.autor,
            ano: body.ano,
            genero: body.genero
        }
    }
}

module.exports = model;