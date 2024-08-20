"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sapo = void 0;
class Sapo {
    constructor(tamanho, especie, cor) {
        this.tamanho = tamanho;
        this.especie = especie;
        this.cor = cor;
    }
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
    getCor() {
        return this.cor;
    }
    setCor(cor) {
        this.cor = cor;
    }
    pular() {
        console.log(`O sapo da espécie ${this.especie} está pulando.`);
    }
    comerInsetos() {
        console.log(`O sapo da espécie ${this.especie} está comendo insetos.`);
    }
}
exports.Sapo = Sapo;
//# sourceMappingURL=Sapo.js.map