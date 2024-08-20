export class ArCondicionado {
    private voltagem: number;
    private material: string;
    private marca: string;

    // Construtor
    public constructor(voltagem: number, material: string, marca: string) {
        this.voltagem = voltagem;
        this.material = material;
        this.marca = marca;
    }

    // Métodos Get e Set
    public getVoltagem(): number {
        return this.voltagem;
    }

    public setVoltagem(voltagem: number): void {
        this.voltagem = voltagem;
    }

    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(material: string): void {
        this.material = material;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    // Métodos específicos
    public esquentar(): void {
        console.log(`Esquentando o ambiente com o ar condicionado da marca ${this.marca} de voltagem ${this.voltagem}V.`);
    }

    public esfriar(): void {
        console.log(`Esfriando o ambiente com o ar condicionado feito de ${this.material}.`);
    }
}
