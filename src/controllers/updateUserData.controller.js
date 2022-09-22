import updateUserDataService from "../services/updateUserData.service";

const updateUserDataController = (req, res) => {
  try {
    const data = req.body;
    const { uuid } = req.params;
    const patchedUser = updateUserDataService(uuid, data);
    return res.status(201).json(patchedUser);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default updateUserDataController;
