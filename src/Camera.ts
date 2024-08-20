export class Camera {
    private material: string;
    private qualidade: string;
    private marca: string;

    // Construtor
    public constructor(material: string, qualidade: string, marca: string) {
        this.material = material;
        this.qualidade = qualidade;
        this.marca = marca;
    }

    // Métodos Get e Set
    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(material: string): void {
        this.material = material;
    }

    public getQualidade(): string {
        return this.qualidade;
    }

    public setQualidade(qualidade: string): void {
        this.qualidade = qualidade;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    // Métodos específicos
    public gravar(): void {
        console.log(`Gravando vídeo com a câmera de qualidade ${this.qualidade}.`);
    }

    public fotografar(): void {
        console.log(`Fotografando com a câmera da marca ${this.marca}.`);
    }
}
