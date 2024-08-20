"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importar a classe ArCondicionado
const ArCondicionado_1 = require("./ArCondicionado");
// Instanciar (criar objeto)
const arCondicionado1 = new ArCondicionado_1.ArCondicionado(220, 'Plástico', 'LG');
const arCondicionado2 = new ArCondicionado_1.ArCondicionado(110, 'Metal', 'Samsung');
console.log(arCondicionado1.esquentar());
console.log(arCondicionado2.esfriar());
//# sourceMappingURL=TesteArCondicionado.js.map