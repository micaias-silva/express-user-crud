import users from "../database";

const updateUserDataService = (uuid, data) => {
  const userIdx = users.findIndex((user) => user.uuid === uuid);
  const updatedTime = new Date(Date.now()).toISOString();
  if (userIdx === -1) {
    throw new Error("User not found");
  }
  const user = { ...users[userIdx], ...data, updatedOn: updatedTime };
  const userSafe = {
    name: user.name,
    email: user.email,
    uuid: user.uuid,
    isAdm: user.isAdm,
    createdOn: user.createdOn,
    updatedOn: user.updatedOn,
  };
  users[userIdx] = user;

  return userSafe;
};

export default updateUserDataService;
