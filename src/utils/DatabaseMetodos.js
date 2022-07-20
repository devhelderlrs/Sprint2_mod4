import { Database } from "../infra/Database.js";

class DatabaseMetodos{
    static listarTodoOBanco(){
        return Database;
    }

    static listarTodosUsuarios(){
        return Database.Usuarios;
    }

    static listarTarefas(){
        return Database.Tarefas;
    }

    static gerarDicas(){
        let x = Math.random() * Database.Dicas.length;
        x = Math.floor(x);
        console.log(x)
        return Database.Dicas.length >= 1 ? Database.Dicas[x] : Database.Dicas;
    }

    static inserirUsuario(usuario){
        Database.Usuarios = [...Database.Usuarios, usuario];
        return Database.Usuarios;
    }

    static inserirTarefa(tarefa){
        Database.Tarefas = [...Database.Tarefas, tarefa];
        return Database.Tarefas;
    }

    static inserirDica(dica){
        Database.Dicas = [...Database.Dicas, dica];
        return Database.Dicas;
    }
}

export default DatabaseMetodos;