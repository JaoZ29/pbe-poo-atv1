"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notebook = void 0;
class Notebook {
    constructor(processador, sistema, armazenamento) {
        this.processador = processador;
        this.sistema = sistema;
        this.armazenamento = armazenamento;
    }
    getProcessador() {
        return this.processador;
    }
    setProcessador(processador) {
        this.processador = processador;
    }
    getSistema() {
        return this.sistema;
    }
    setSistema(sistema) {
        this.sistema = sistema;
    }
    getArmazenamento() {
        return this.armazenamento;
    }
    setArmazenamento(armazenamento) {
        this.armazenamento = armazenamento;
    }
    jogar() {
        console.log(`Jogando no notebook com processador ${this.processador}.`);
    }
    assistir() {
        console.log(`Assistindo no notebook com sistema ${this.sistema}.`);
    }
}
exports.Notebook = Notebook;
//# sourceMappingURL=Notbook.js.map