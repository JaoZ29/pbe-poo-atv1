export class Bicicleta {
    private aro: number;
    private quadro: string;
    private peso: number;

    public constructor(aro: number, quadro: string, peso: number) {
        this.aro = aro;
        this.quadro = quadro;
        this.peso = peso;
    }

    public getAro(): number {
        return this.aro;
    }

    public setAro(aro: number): void {
        this.aro = aro;
    }

    public getQuadro(): string {
        return this.quadro;
    }

    public setQuadro(quadro: string): void {
        this.quadro = quadro;
    }

    public getPeso(): number {
        return this.peso;
    }

    public setPeso(peso: number): void {
        this.peso = peso;
    }

    public pedalar(): void {
        console.log(`Pedalando na bicicleta com aro ${this.aro}.`);
    }

    public manobrar(): void {
        console.log(`Fazendo manobras com a bicicleta de quadro ${this.quadro}.`);
    }
}
