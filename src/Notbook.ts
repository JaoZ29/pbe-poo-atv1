export class Notebook {
    private processador: string;
    private sistema: string;
    private armazenamento: number;

    public constructor(processador: string, sistema: string, armazenamento: number) {
        this.processador = processador;
        this.sistema = sistema;
        this.armazenamento = armazenamento;
    }

    public getProcessador(): string {
        return this.processador;
    }

    public setProcessador(processador: string): void {
        this.processador = processador;
    }

    public getSistema(): string {
        return this.sistema;
    }

    public setSistema(sistema: string): void {
        this.sistema = sistema;
    }

    public getArmazenamento(): number {
        return this.armazenamento;
    }

    public setArmazenamento(armazenamento: number): void {
        this.armazenamento = armazenamento;
    }

    public jogar(): void {
        console.log(`Jogando no notebook com processador ${this.processador}.`);
    }

    public assistir(): void {
        console.log(`Assistindo no notebook com sistema ${this.sistema}.`);
    }
}
