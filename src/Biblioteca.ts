export class Biblioteca {
    private tamanho: number;
    private quantidadeDeLivros: number;
    private capacidadeDePessoas: number;

    public constructor(tamanho: number, quantidadeDeLivros: number, capacidadeDePessoas: number) {
        this.tamanho = tamanho;
        this.quantidadeDeLivros = quantidadeDeLivros;
        this.capacidadeDePessoas = capacidadeDePessoas;
    }

    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(tamanho: number): void {
        this.tamanho = tamanho;
    }

    public getQuantidadeDeLivros(): number {
        return this.quantidadeDeLivros;
    }

    public setQuantidadeDeLivros(quantidadeDeLivros: number): void {
        this.quantidadeDeLivros = quantidadeDeLivros;
    }

    public getCapacidadeDePessoas(): number {
        return this.capacidadeDePessoas;
    }

    public setCapacidadeDePessoas(capacidadeDePessoas: number): void {
        this.capacidadeDePessoas = capacidadeDePessoas;
    }

    public estudar(): void {
        console.log(`Estudando na biblioteca com capacidade para ${this.capacidadeDePessoas} pessoas.`);
    }

    public jogar(): void {
        console.log(`Jogando na biblioteca com ${this.quantidadeDeLivros} livros.`);
    }
}
