"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod"); // importação
//criando como se fosse a interface
const estudanteSchema = zod_1.z.object({
    nome: zod_1.z.string()
        .min(3, 'Deve ter no mínimo 3 caracteres')
        .max(50, 'Deve ter no máximo 50 caracteres'),
    email: zod_1.z.string().email()
});
//dando os dados do estudante
let e1 = {
    nome: 'Maria',
    email: 'maria.silva@gmail.com'
};
const resultado = estudanteSchema.safeParse(e1);
if (!resultado.success) {
    resultado.error.errors.forEach(e => console.log(e.message));
}
