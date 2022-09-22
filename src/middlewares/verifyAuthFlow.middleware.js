import users from "../database";
import findUserByTokenUtil from "../utilities/findUserByToken.util";
import verifyAdmAuthMiddleware from "./verifyAdmAuth.middleware";

const verifyAuthFlowMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { uuid } = req.params;
    const actingUser = findUserByTokenUtil(authorization);
    const targetUser = users.find((user) => user.uuid === uuid);

    if (!actingUser.isAdm && actingUser.uuid !== targetUser.uuid) {
      throw new Error("Sem autorização");
    }

    if (actingUser.isAdm) {
      verifyAdmAuthMiddleware(req, res, next);
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default verifyAuthFlowMiddleware;
