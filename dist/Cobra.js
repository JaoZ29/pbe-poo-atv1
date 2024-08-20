"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cobra = void 0;
class Cobra {
    constructor(especie, cor, tamanho) {
        this.especie = especie;
        this.cor = cor;
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
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(tamanho) {
        this.tamanho = tamanho;
    }
    envenenar() {
        console.log(`A cobra da espécie ${this.especie} está envenenando sua presa.`);
    }
    engolir() {
        console.log(`A cobra da espécie ${this.especie} está engolindo sua presa.`);
    }
}
exports.Cobra = Cobra;
//# sourceMappingURL=Cobra.js.map