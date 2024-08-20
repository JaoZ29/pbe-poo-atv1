// Importar a classe Computador
import { Computador } from './Computador';

const computador1: Computador = new Computador('Intel i7', 'Windows 10', 512);
const computador2: Computador = new Computador('AMD Ryzen 5', 'Ubuntu', 256);

computador1.estudar();   
computador2.pesquisar(); 
