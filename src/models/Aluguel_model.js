const livro_controller = require("../controllers/Livro.js");
const estudante_controller = require("../controllers/Estudante.js");

let nextID = 1;

const model = (body, id = nextID++) => {
    if( body.dataAluguel != "" &&
        body.dataAluguel != undefined &&
        body.dataDevolucao != "" &&
        body.dataDevolucao != undefined &&
        livro_controller.show(body.livro_id) &&
        estudante_controller.show(body.estudante_id)
    ) {
        return {
            id,
            livro_id: body.livro_id,
            estudante_id: body.estudante_id,
            data_aluguel: body.dataAluguel,
            data_devolucao: body.dataDevolucao 
        }
    }
}

module.exports = model;