"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicicleta = void 0;
class Bicicleta {
    constructor(aro, quadro, peso) {
        this.aro = aro;
        this.quadro = quadro;
        this.peso = peso;
    }
    getAro() {
        return this.aro;
    }
    setAro(aro) {
        this.aro = aro;
    }
    getQuadro() {
        return this.quadro;
    }
    setQuadro(quadro) {
        this.quadro = quadro;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(peso) {
        this.peso = peso;
    }
    pedalar() {
        console.log(`Pedalando na bicicleta com aro ${this.aro}.`);
    }
    manobrar() {
        console.log(`Fazendo manobras com a bicicleta de quadro ${this.quadro}.`);
    }
}
exports.Bicicleta = Bicicleta;
//# sourceMappingURL=Bicicleta.js.map