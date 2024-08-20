"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casaco = void 0;
class Casaco {
    constructor(cor, marca, tecido) {
        this.cor = cor;
        this.marca = marca;
        this.tecido = tecido;
    }
    getCor() {
        return this.cor;
    }
    setCor(cor) {
        this.cor = cor;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getTecido() {
        return this.tecido;
    }
    setTecido(tecido) {
        this.tecido = tecido;
    }
    vestir() {
        console.log(`Vestindo o casaco da marca ${this.marca}.`);
    }
    manterTemperaturaCorporal() {
        console.log(`Mantendo a temperatura corporal com o casaco de tecido ${this.tecido}.`);
    }
}
exports.Casaco = Casaco;
//# sourceMappingURL=Casaco.js.map