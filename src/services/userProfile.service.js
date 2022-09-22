import findUserByTokenUtil from "../utilities/findUserByToken.util";

const userProfileService = (token) => {
  const user = findUserByTokenUtil(token);
  const userSafe = {
    name: user.name,
    email: user.email,
    uuid: user.uuid,
    isAdm: user.isAdm,
    createdOn: user.createdOn,
    updatedOn: user.updatedOn,
  };
  return userSafe;
};

export default userProfileService;
