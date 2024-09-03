const express = require("express")
const app = express()
const port = 3500

const livro_router = require("./routes/Livro_route.js")
const estudante_router = require("./routes/Estudante_route.js")
const aluguel_router = require("./routes/Aluguel_route.js")

app.use(express.json())

app.use("/livro", livro_router);
app.use("/estudante", estudante_router);
app.use("/aluguel", aluguel_router);

app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})