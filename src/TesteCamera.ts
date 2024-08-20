// Importar a classe Camera
import { Camera } from './Camera';

const camera1: Camera = new Camera('Plástico', 'Alta', 'Canon');
const camera2: Camera = new Camera('Metal', 'Média', 'Nikon');

camera1.gravar();    
camera2.fotografar(); 
