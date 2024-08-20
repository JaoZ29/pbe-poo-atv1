// Importar a classe Biblioteca
import { Biblioteca } from './Biblioteca';

const biblioteca1: Biblioteca = new Biblioteca(1000, 10000, 200);
const biblioteca2: Biblioteca = new Biblioteca(500, 5000, 100);

biblioteca1.estudar();
biblioteca2.jogar();
