import createUserService from "../services/createUser.service";

const createUserController = async (req, res) => {
  try {
    const { name, email, password, isAdm } = req.body;
    const user = await createUserService(name, email, password, isAdm);
    return res.status(201).json({ ...user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default createUserController;
