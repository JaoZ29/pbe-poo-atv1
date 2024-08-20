export class PlantaDeEtanol {
    private material: string;
    private tamanho: number;
    private cor: string;

    public constructor(material: string, tamanho: number, cor: string) {
        this.material = material;
        this.tamanho = tamanho;
        this.cor = cor;
    }

    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(material: string): void {
        this.material = material;
    }

    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(tamanho: number): void {
        this.tamanho = tamanho;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(cor: string): void {
        this.cor = cor;
    }

    public produzirEtanol(): void {
        console.log(`Produzindo etanol com a planta de material ${this.material}.`);
    }

    public armazenarEtanol(): void {
        console.log(`Armazenando etanol na planta de cor ${this.cor}.`);
    }
}
