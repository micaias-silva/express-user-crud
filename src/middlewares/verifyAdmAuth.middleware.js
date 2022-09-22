import users from "../database";
import jwt from "jsonwebtoken";
import findUserByTokenUtil from "../utilities/findUserByToken.util";

const verifyAdmAuthMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new Error("Token de autenticação ausente");
    }

    const user = findUserByTokenUtil(authorization);
    if (!user.isAdm) {
      throw new Error("Usuário sem permissão de acesso");
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default verifyAdmAuthMiddleware;
