"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importar a classe Banco
const Banco_1 = require("./Banco");
// Instanciar (criar objeto)
const banco1 = new Banco_1.Banco(1, 'Madeira', 10);
const banco2 = new Banco_1.Banco(1, 'Metal', 20);
console.log(banco1.sentar());
console.log(banco2.descansar());
//# sourceMappingURL=TesteBanco.js.map