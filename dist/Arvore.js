"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arvore = void 0;
class Arvore {
    // Construtor
    constructor(tamanho, especie, idade) {
        this.tamanho = tamanho;
        this.especie = especie;
        this.idade = idade;
    }
    // Métodos Get e Set
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(tamanho) {
        this.tamanho = tamanho;
    }
    getEspecie() {
        return this.especie;
    }
    setEspecie(especie) {
        this.especie = especie;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    // Métodos específicos
    realizarFotosintese() {
        console.log(`A árvore da espécie ${this.especie} está realizando a fotossíntese.`);
    }
    fazerSombra() {
        console.log(`A árvore de ${this.tamanho} metros está fazendo sombra.`);
    }
}
exports.Arvore = Arvore;
//# sourceMappingURL=Arvore.js.map