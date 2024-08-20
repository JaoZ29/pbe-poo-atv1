export class Casaco {
    private cor: string;
    private marca: string;
    private tecido: string;

    public constructor(cor: string, marca: string, tecido: string) {
        this.cor = cor;
        this.marca = marca;
        this.tecido = tecido;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(cor: string): void {
        this.cor = cor;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getTecido(): string {
        return this.tecido;
    }

    public setTecido(tecido: string): void {
        this.tecido = tecido;
    }

    public vestir(): void {
        console.log(`Vestindo o casaco da marca ${this.marca}.`);
    }

    public manterTemperaturaCorporal(): void {
        console.log(`Mantendo a temperatura corporal com o casaco de tecido ${this.tecido}.`);
    }
}
