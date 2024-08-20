"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
class Camera {
    // Construtor
    constructor(material, qualidade, marca) {
        this.material = material;
        this.qualidade = qualidade;
        this.marca = marca;
    }
    // Métodos Get e Set
    getMaterial() {
        return this.material;
    }
    setMaterial(material) {
        this.material = material;
    }
    getQualidade() {
        return this.qualidade;
    }
    setQualidade(qualidade) {
        this.qualidade = qualidade;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    // Métodos específicos
    gravar() {
        console.log(`Gravando vídeo com a câmera de qualidade ${this.qualidade}.`);
    }
    fotografar() {
        console.log(`Fotografando com a câmera da marca ${this.marca}.`);
    }
}
exports.Camera = Camera;
//# sourceMappingURL=Camera.js.map