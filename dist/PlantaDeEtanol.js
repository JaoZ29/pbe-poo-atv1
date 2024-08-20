"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantaDeEtanol = void 0;
class PlantaDeEtanol {
    constructor(material, tamanho, cor) {
        this.material = material;
        this.tamanho = tamanho;
        this.cor = cor;
    }
    getMaterial() {
        return this.material;
    }
    setMaterial(material) {
        this.material = material;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(tamanho) {
        this.tamanho = tamanho;
    }
    getCor() {
        return this.cor;
    }
    setCor(cor) {
        this.cor = cor;
    }
    produzirEtanol() {
        console.log(`Produzindo etanol com a planta de material ${this.material}.`);
    }
    armazenarEtanol() {
        console.log(`Armazenando etanol na planta de cor ${this.cor}.`);
    }
}
exports.PlantaDeEtanol = PlantaDeEtanol;
//# sourceMappingURL=PlantaDeEtanol.js.map