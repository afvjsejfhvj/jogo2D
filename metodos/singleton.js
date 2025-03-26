class Database{
    constructor(){
        if(!Database.instance){ // se nao existe um instancia
            Database.instance = this // cria ela
        } 
        return Database.instance // se tiver retorne ela 
    }
}
const db1 = new Database()
const db2 = new Database()
console.log(db1 === db2)