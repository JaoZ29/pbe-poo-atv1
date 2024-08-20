"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computador = void 0;
class Computador {
    // Construtor
    constructor(_processador, _sistema, _armazenamento) {
        this.processador = _processador;
        this.sistema = _sistema;
        this.armazenamento = _armazenamento;
    }
    // Métodos Get e Set
    getProcessador() {
        return this.processador;
    }
    setProcessador(_processador) {
        this.processador = _processador;
    }
    getSistema() {
        return this.sistema;
    }
    setSistema(_sistema) {
        this.sistema = _sistema;
    }
    getArmazenamento() {
        return this.armazenamento;
    }
    setArmazenamento(_armazenamento) {
        this.armazenamento = _armazenamento;
    }
    // Métodos específicos
    estudar() {
        console.log(`Estudando no computador com processador ${this.processador} e sistema ${this.sistema}.`);
    }
    pesquisar() {
        console.log(`Pesquisando informações usando processador ${this.processador}.`);
    }
}
exports.Computador = Computador;
//# sourceMappingURL=Computador.js.map