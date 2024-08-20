// Importar a classe PlantaDeEtanol
import { PlantaDeEtanol } from './PlantaDeEtanol';

const planta1: PlantaDeEtanol = new PlantaDeEtanol('Aço', 100, 'Verde');
const planta2: PlantaDeEtanol = new PlantaDeEtanol('Plástico', 50, 'Amarelo');

planta1.produzirEtanol(); 
planta2.armazenarEtanol();  
