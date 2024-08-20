export class Sapo {
    private tamanho: number;
    private especie: string;
    private cor: string;

    public constructor(tamanho: number, especie: string, cor: string) {
        this.tamanho = tamanho;
        this.especie = especie;
        this.cor = cor;
    }

    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(tamanho: number): void {
        this.tamanho = tamanho;
    }

    public getEspecie(): string {
        return this.especie;
    }

    public setEspecie(especie: string): void {
        this.especie = especie;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(cor: string): void {
        this.cor = cor;
    }

    public pular(): void {
        console.log(`O sapo da espécie ${this.especie} está pulando.`);
    }

    public comerInsetos(): void {
        console.log(`O sapo da espécie ${this.especie} está comendo insetos.`);
    }
}
