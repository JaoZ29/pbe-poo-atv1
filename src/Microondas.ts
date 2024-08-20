export class MicroOndas {
    private marca: string;
    private potencia: number;
    private tamanho: number;

    // Construtor
    public constructor(marca: string, potencia: number, tamanho: number) {
        this.marca = marca;
        this.potencia = potencia;
        this.tamanho = tamanho;
    }

    // Métodos Get e Set
    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getPotencia(): number {
        return this.potencia;
    }

    public setPotencia(potencia: number): void {
        this.potencia = potencia;
    }

    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(tamanho: number): void {
        this.tamanho = tamanho;
    }

    // Métodos específicos
    public esquentarComida(): void {
        console.log(`Esquentando comida com o micro-ondas da marca ${this.marca} e potência de ${this.potencia}W.`);
    }

    public cozinharComida(): void {
        console.log(`Cozinhando comida no micro-ondas de tamanho ${this.tamanho} litros.`);
    }
}
