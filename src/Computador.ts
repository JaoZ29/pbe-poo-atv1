 export class Computador {
    private processador: string;
    private sistema: string;
    private armazenamento: number;

    // Construtor
    public constructor(_processador: string,_sistema: string,_armazenamento: number) {
        this.processador =_processador;
        this.sistema =_sistema;
        this.armazenamento =_armazenamento;
    }

    // Métodos Get e Set
    public getProcessador(): string {
        return this.processador;
    }

    public setProcessador(_processador: string): void {
        this.processador =_processador;
    }

    public getSistema(): string {
        return this.sistema;
    }

    public setSistema(_sistema: string): void {
        this.sistema =_sistema;
    }

    public getArmazenamento(): number {
        return this.armazenamento;
    }

    public setArmazenamento(_armazenamento: number): void {
        this.armazenamento =_armazenamento;
    }

    // Métodos específicos
    public estudar(): void {
        console.log(`Estudando no computador com processador ${this.processador} e sistema ${this.sistema}.`);
    }

    public pesquisar(): void {
        console.log(`Pesquisando informações usando processador ${this.processador}.`);
    }
}