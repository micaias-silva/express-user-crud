import users from "../database";
import jwt from "jsonwebtoken";

const verifyAdmAuthMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new Error("Token de autenticação ausente");
    }

    const token = authorization.split(" ")[1];

    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
      if (error) {
        throw new Error("Token inválido");
      }
      const user = users.find((user) => user.email === decoded.email);
      if (!user) {
        throw new Error("Token inválido");
      }
      if (user.isAdm === false) {
        throw new Error("Usuário sem permissão de acesso");
      }
    });

    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default verifyAdmAuthMiddleware;
