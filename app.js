import express from "express";
import * as dotenv from "dotenv";
import Usuarios from "./src/controllers/Usuarios.js";
import Tarefas from "./src/controllers/Tarefas.js";
import Dicas from "./src/controllers/Dicas.js";

dotenv.config();

const port =  process.env.PORT || 3000;

const app = express();

app.listen(port, ()=>{
    console.log(`Servidor online no endereço http://localhost:${port}`)
})

app.use(express.json());

Usuarios.rotas(app);
Tarefas.rotas(app);
Dicas.rotas(app);