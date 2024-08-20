// Importar a classe Notebook
import { Notebook } from './Notbook';

const notebook1: Notebook = new Notebook('Intel i5', 'Windows 11', 512);
const notebook2: Notebook = new Notebook('AMD Ryzen 7', 'Linux', 256);

notebook1.jogar(); 
notebook2.assistir();