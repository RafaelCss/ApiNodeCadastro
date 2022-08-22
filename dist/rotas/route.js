"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../server"));
const validacao_1 = __importDefault(require("../validacao"));
server_1.default.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dados = req.body;
    const dadosValidos = yield new validacao_1.default(dados);
    if (dadosValidos) {
        res.send('Dados validos');
    }
}));
server_1.default.get('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Dados validos');
}));