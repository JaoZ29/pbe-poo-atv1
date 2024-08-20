"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor(tamanho, quantidadeDeLivros, capacidadeDePessoas) {
        this.tamanho = tamanho;
        this.quantidadeDeLivros = quantidadeDeLivros;
        this.capacidadeDePessoas = capacidadeDePessoas;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(tamanho) {
        this.tamanho = tamanho;
    }
    getQuantidadeDeLivros() {
        return this.quantidadeDeLivros;
    }
    setQuantidadeDeLivros(quantidadeDeLivros) {
        this.quantidadeDeLivros = quantidadeDeLivros;
    }
    getCapacidadeDePessoas() {
        return this.capacidadeDePessoas;
    }
    setCapacidadeDePessoas(capacidadeDePessoas) {
        this.capacidadeDePessoas = capacidadeDePessoas;
    }
    estudar() {
        console.log(`Estudando na biblioteca com capacidade para ${this.capacidadeDePessoas} pessoas.`);
    }
    jogar() {
        console.log(`Jogando na biblioteca com ${this.quantidadeDeLivros} livros.`);
    }
}
exports.Biblioteca = Biblioteca;
//# sourceMappingURL=Biblioteca.js.map