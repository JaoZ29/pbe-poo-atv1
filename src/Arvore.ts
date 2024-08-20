export class Arvore {
    private tamanho: number;
    private especie: string;
    private idade: number;

    // Construtor
    public constructor(tamanho: number, especie: string, idade: number) {
        this.tamanho = tamanho;
        this.especie = especie;
        this.idade = idade;
    }

    // Métodos Get e Set
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

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }

    // Métodos específicos
    public realizarFotosintese(): void {
        console.log(`A árvore da espécie ${this.especie} está realizando a fotossíntese.`);
    }

    public fazerSombra(): void {
        console.log(`A árvore de ${this.tamanho} metros está fazendo sombra.`);
    }
}
