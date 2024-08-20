"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicroOndas = void 0;
class MicroOndas {
    // Construtor
    constructor(marca, potencia, tamanho) {
        this.marca = marca;
        this.potencia = potencia;
        this.tamanho = tamanho;
    }
    // Métodos Get e Set
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getPotencia() {
        return this.potencia;
    }
    setPotencia(potencia) {
        this.potencia = potencia;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(tamanho) {
        this.tamanho = tamanho;
    }
    // Métodos específicos
    esquentarComida() {
        console.log(`Esquentando comida com o micro-ondas da marca ${this.marca} e potência de ${this.potencia}W.`);
    }
    cozinharComida() {
        console.log(`Cozinhando comida no micro-ondas de tamanho ${this.tamanho} litros.`);
    }
}
exports.MicroOndas = MicroOndas;
//# sourceMappingURL=Microondas.js.map