const estudante_controller = require("../controllers/Estudante.js");

let nextID = 1;

const model = (body, id = nextID++) => {
    if(body.nome != "" &&
        body.nome != undefined &&
        body.matricula != "" &&
        body.matricula != undefined &&
        body.curso != "" &&
        body.curso != undefined &&
        body.ano != 0
    ) {
        return {
            id,
            nome: body.nome,
            matricula: body.matricula,
            curso: body.curso,
            ano: body.ano
        }
    }
}

module.exports = model;