import DicaModel from "../models/DicaModel.js";
import DatabaseMetodos from "../utils/DatabaseMetodos.js";

class Dicas{
    static rotas(app){
        app.get("/tips", (req, res)=>{
            const response = DatabaseMetodos.gerarDicas()
            res.status(200).json(response)
        })

        app.post("/create", (req, res)=>{
            const dica = new DicaModel(...Object.values(req.body));
            const response = DatabaseMetodos.inserirDica(dica);
            res.status(200).json(response);
        })
    }
}

export default Dicas;