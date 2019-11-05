module.exports = {
    get Privado(){return "Privado";},
    get Publico(){ return "Publico";},
    getAll(){
        return [this.Privado,this.Publico]
    }
}