export class Extintor {
    private tipo: string;
    private tamanho: number;
    private capacidadeArmazenamento: number;

    // Construtor
    public constructor(tipo: string, tamanho: number, capacidadeArmazenamento: number) {
        this.tipo = tipo;
        this.tamanho = tamanho;
        this.capacidadeArmazenamento = capacidadeArmazenamento;
    }

    // Métodos Get e Set
    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(tamanho: number): void {
        this.tamanho = tamanho;
    }

    public getCapacidadeArmazenamento(): number {
        return this.capacidadeArmazenamento;
    }

    public setCapacidadeArmazenamento(capacidadeArmazenamento: number): void {
        this.capacidadeArmazenamento = capacidadeArmazenamento;
    }

    // Métodos específicos
    public proteger(): void {
        console.log(`Protegendo contra incêndios com o extintor de tipo ${this.tipo}.`);
    }

    public apagarFogo(): void {
        console.log(`Apagando fogo com o extintor de tamanho ${this.tamanho} e capacidade de ${this.capacidadeArmazenamento} litros.`);
    }
}
