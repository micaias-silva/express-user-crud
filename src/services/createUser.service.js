import { hash } from "bcrypt";
import { v4 as uuid } from "uuid";
import users from "../database";

const createUserService = async (name, email, password, isAdm = false) => {
  const now = new Date(Date.now()).toISOString();
  if (!name || !email || !password) {
    throw new Error("name/email/password não podem estar vazios");
  }
  const newUser = {
    name,
    email,
    isAdm,
    uuid: uuid(),
    createdOn: now,
    updatedOn: now,
  };

  users.push({ ...newUser, password: await hash(password, 10) });
  return newUser;
};

export default createUserService;
