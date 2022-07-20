import TarefaModel from "../models/TarefaModel.js";
// import ValidacoesService from "../services/ValidacoesService.js";
import DatabaseMetodos from "../utils/DatabaseMetodos.js";

class Tarefas{
    static rotas(app){
        app.get("/tarefas", (req,res)=>{
            const response = DatabaseMetodos.listarTarefas();
            res.status(200).json(response);
        })

        app.post("/tarefas", (req, res)=>{
                const tarefa = new TarefaModel(...Object.values(req.body));
                const response = DatabaseMetodos.criarTarefa(tarefa);
                res.status(201).json(response);
        })
    }
}


export default Tarefas;

// const isValid = ValidacoesService.validaNome(req.body.nome)

            // if(isValid){
            //     const tarefa = new TarefaModel(...Object.values(req.body))
            //     const response = DatabaseMetodos.criarTarefa(tarefa)
            //     res.status(201).json(response)
            // } else {
            //     res.status(400).send("Erro")
            // }