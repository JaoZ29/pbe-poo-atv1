// Importar a classe Extintor
import { Extintor } from './Extintor';

const extintor1: Extintor = new Extintor('ABC', 25, 2);
const extintor2: Extintor = new Extintor('CO2', 50, 5);

extintor1.proteger();
extintor2.apagarFogo(); 