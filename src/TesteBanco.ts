// Importar a classe Banco
import { Banco } from './Banco';

const banco1: Banco = new Banco(1, 'Madeira', 10);
const banco2: Banco = new Banco(1, 'Metal', 20);

banco1.sentar();   
banco2.descansar(); 
