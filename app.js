const express = require('express');
const app = express();
const usuariosRoutes = require('./routes/usuarios');
// const postagensRoutes = require('./routes/postagens');
// const comentariosRoutes = require('./routes/comentarios');


app.use(express.json());
app.use('/usuario', usuariosRoutes);
// app.use('/postagens', postagensRoutes);
// app.use('/comentarios', comentariosRoutes);

app.get("/", async (req, res) => {
    res.send("Hello World");

});


app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});