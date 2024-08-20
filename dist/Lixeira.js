"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lixeira = void 0;
class Lixeira {
    // Construtor
    constructor(tamanho, material, cor) {
        this.tamanho = tamanho;
        this.material = material;
        this.cor = cor;
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
    getCor() {
        return this.cor;
    }
    setCor(cor) {
        this.cor = cor;
    }
    // Métodos específicos
    armazenarLixo() {
        console.log(`Armazenando lixo na lixeira de cor ${this.cor} feita de ${this.material}.`);
    }
    conscientizacaoAmbiental() {
        console.log(`Promovendo a conscientização ambiental com a lixeira de tamanho ${this.tamanho} litros.`);
    }
}
exports.Lixeira = Lixeira;
//# sourceMappingURL=Lixeira.js.map