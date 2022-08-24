import { Router } from 'express';
import { Request, Response } from 'express';
import ValidarDadosUser from "../Controllers/validacao";
import { Ilogin } from "../interface";

 const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const dados: Ilogin = req.body;
  const dadosValidos =  await ValidarDadosUser.validar(dados)
  res.json(dadosValidos).status(201);
})


router.get('/', async (req: Request, res: Response) => {
  res.send('Dados validos');
})

export default router;