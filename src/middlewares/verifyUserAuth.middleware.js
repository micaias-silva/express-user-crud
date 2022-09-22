import jwt from "jsonwebtoken";
import users from "../database";

const verifyUserAuthMiddleware = (req, res, next) => {
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
    });
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default verifyUserAuthMiddleware;
