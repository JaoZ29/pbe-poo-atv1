"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArCondicionado = void 0;
class ArCondicionado {
    // Construtor
    constructor(voltagem, material, marca) {
        this.voltagem = voltagem;
        this.material = material;
        this.marca = marca;
    }
    // Métodos Get e Set
    getVoltagem() {
        return this.voltagem;
    }
    setVoltagem(voltagem) {
        this.voltagem = voltagem;
    }
    getMaterial() {
        return this.material;
    }
    setMaterial(material) {
        this.material = material;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    // Métodos específicos
    esquentar() {
        console.log(`Esquentando o ambiente com o ar condicionado da marca ${this.marca} de voltagem ${this.voltagem}V.`);
    }
    esfriar() {
        console.log(`Esfriando o ambiente com o ar condicionado feito de ${this.material}.`);
    }
}
exports.ArCondicionado = ArCondicionado;
//# sourceMappingURL=ArCondicionado.js.map