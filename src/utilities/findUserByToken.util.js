import users from "../database";
import jwt from "jsonwebtoken";

const findUserByTokenUtil = (authorization) => {
  const token = authorization.split(" ")[1];
  return jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      throw new Error("Invalid Token");
    }
    const user = users.find((user) => user.email === decoded.email);
    if (!user) {
      throw new Error("Invalid Token");
    }
    return user;
  });
};

export default findUserByTokenUtil;
