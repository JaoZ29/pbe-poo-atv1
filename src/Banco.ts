 export class Banco {
    private tamanho: number;
    private material: string;
    private peso: number;

    // Construtor
    public constructor(tamanho: number, material: string, peso: number) {
        this.tamanho = tamanho;
        this.material = material;
        this.peso = peso;
    }

    // Métodos Get e Set
    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(tamanho: number): void {
        this.tamanho = tamanho;
    }

    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(material: string): void {
        this.material = material;
    }

    public getPeso(): number {
        return this.peso;
    }

    public setPeso(peso: number): void {
        this.peso = peso;
    }

    // Métodos específicos
    public sentar(): void {
        console.log(`Sentando no banco feito de ${this.material} com tamanho de ${this.tamanho} metros.`);
    }

    public descansar(): void {
        console.log(`Descansando no banco que pesa ${this.peso} kg.`);
    }
}