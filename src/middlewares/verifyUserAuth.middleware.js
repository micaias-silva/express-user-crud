import jwt from "jsonwebtoken";
import users from "../database";
import findUserByTokenUtil from "../utilities/findUserByToken.util";

const verifyUserAuthMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new Error("Token de autenticação ausente");
    }

    findUserByTokenUtil(authorization);

    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default verifyUserAuthMiddleware;
