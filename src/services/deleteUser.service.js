import users from "../database";

const deleteUserService = (uuid) => {
  const user = users.find((user) => user.uuid === uuid);

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  users.splice(user, 1);

  return "Usuário deletado";
};

export default deleteUserService;
