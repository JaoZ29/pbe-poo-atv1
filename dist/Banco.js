"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
class Banco {
    // Construtor
    constructor(tamanho, material, peso) {
        this.tamanho = tamanho;
        this.material = material;
        this.peso = peso;
    }
    // Métodos Get e Set
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(tamanho) {
        this.tamanho = tamanho;
    }
    getMaterial() {
        return this.material;
    }
    setMaterial(material) {
        this.material = material;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(peso) {
        this.peso = peso;
    }
    // Métodos específicos
    sentar() {
        console.log(`Sentando no banco feito de ${this.material} com tamanho de ${this.tamanho} metros.`);
    }
    descansar() {
        console.log(`Descansando no banco que pesa ${this.peso} kg.`);
    }
}
exports.Banco = Banco;
//# sourceMappingURL=Banco.js.map