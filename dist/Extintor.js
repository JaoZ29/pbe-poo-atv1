"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Extintor = void 0;
class Extintor {
    // Construtor
    constructor(tipo, tamanho, capacidadeArmazenamento) {
        this.tipo = tipo;
        this.tamanho = tamanho;
        this.capacidadeArmazenamento = capacidadeArmazenamento;
    }
    // Métodos Get e Set
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(tamanho) {
        this.tamanho = tamanho;
    }
    getCapacidadeArmazenamento() {
        return this.capacidadeArmazenamento;
    }
    setCapacidadeArmazenamento(capacidadeArmazenamento) {
        this.capacidadeArmazenamento = capacidadeArmazenamento;
    }
    // Métodos específicos
    proteger() {
        console.log(`Protegendo contra incêndios com o extintor de tipo ${this.tipo}.`);
    }
    apagarFogo() {
        console.log(`Apagando fogo com o extintor de tamanho ${this.tamanho} e capacidade de ${this.capacidadeArmazenamento} litros.`);
    }
}
exports.Extintor = Extintor;
//# sourceMappingURL=Extintor.js.map