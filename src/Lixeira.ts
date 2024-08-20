export class Lixeira {
  private tamanho: number;
  private material: string;
  private cor: string;

  // Construtor
  public constructor(tamanho: number, material: string, cor: string) {
      this.tamanho = tamanho;
      this.material = material;
      this.cor = cor;
  }

  // Métodos Get e Set
  public getTamanho(): number {
      return this.tamanho;
  }

  public setTamanho(tamanho: number): void {
      this.tamanho = tamanho;
  }

  public getMaterial(): string {
      return this.material;
  }

  public setMaterial(material: string): void {
      this.material = material;
  }

  public getCor(): string {
      return this.cor;
  }

  public setCor(cor: string): void {
      this.cor = cor;
  }

  // Métodos específicos
  public armazenarLixo(): void {
      console.log(`Armazenando lixo na lixeira de cor ${this.cor} feita de ${this.material}.`);
  }

  public conscientizacaoAmbiental(): void {
      console.log(`Promovendo a conscientização ambiental com a lixeira de tamanho ${this.tamanho} litros.`);
  }
}
