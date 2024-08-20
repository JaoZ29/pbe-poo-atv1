// Importar a classe ArCondicionado
import { ArCondicionado } from './ArCondicionado';

const arCondicionado1: ArCondicionado = new ArCondicionado(220, 'Plástico', 'LG');
const arCondicionado2: ArCondicionado = new ArCondicionado(110, 'Metal', 'Samsung');

arCondicionado1.esquentar(); 
arCondicionado2.esfriar();   
