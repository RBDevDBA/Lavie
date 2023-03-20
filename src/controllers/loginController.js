import { isPasswordValid } from '../configs/crypto';
import { signJwt } from '../configs/jwt';
import { invalidEmailOrPassword } from '../errors/ErrorResponses';
import { findPsicologoByEmail } from '../controllers/psicoController';

export const login = async (req, res, next) => {
  try {
    const { email, senha } = req.body;
    const user = await findPsicologoByEmail(email, true);
    if (!user || !isPasswordValid(senha, user.senha)) {
      return res.status(401).json({ message: invalidEmailOrPassword });
    }
    const Authorization = signJwt({
      id: user.id,
      email: user.email,
      nome: user.nome,
    });
    return res.status(200).json({ Authorization });
  } catch (error) {
    next(error);
  }
};