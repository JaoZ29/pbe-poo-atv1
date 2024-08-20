// Importar a classe Lixeira
import { Lixeira } from './Lixeira';

const lixeira1: Lixeira = new Lixeira(100, 'Plástico', 'Verde');
const lixeira2: Lixeira = new Lixeira(60, 'Metal', 'Cinza');

lixeira1.armazenarLixo();
lixeira2.conscientizacaoAmbiental();
