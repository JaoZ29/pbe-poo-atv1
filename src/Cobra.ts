export class Cobra {
    private especie: string;
    private cor: string;
    private tamanho: number;

    public constructor(especie: string, cor: string, tamanho: number) {
        this.especie = especie;
        this.cor = cor;
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

    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(tamanho: number): void {
        this.tamanho = tamanho;
    }

    public envenenar(): void {
        console.log(`A cobra da espécie ${this.especie} está envenenando sua presa.`);
    }

    public engolir(): void {
        console.log(`A cobra da espécie ${this.especie} está engolindo sua presa.`);
    }
}
