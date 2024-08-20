// Importar a classe Bicicleta
import { Bicicleta } from './Bicicleta';

const bicicleta1: Bicicleta = new Bicicleta(26, 'Alumínio', 12);
const bicicleta2: Bicicleta = new Bicicleta(28, 'Aço', 15);

bicicleta1.pedalar(); 
bicicleta2.manobrar(); 
