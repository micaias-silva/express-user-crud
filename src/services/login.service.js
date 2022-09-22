import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import users from "../database";

const loginService = (email, password) => {
  const user = users.find((user) => user.email === email);
  if (!user) {
    throw new Error("Email/Senha inválidos");
  }
  const passwordMatch = compareSync(password, user.password);
  if (!passwordMatch) {
    throw new Error("Email/Senha inválidos");
  }

  const token = jwt.sign({ email: email }, "SECRET_KEY", { expiresIn: "72h" });
  return token;
};

export default loginService;
