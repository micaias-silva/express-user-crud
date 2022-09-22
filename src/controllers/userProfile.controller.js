import userProfileService from "../services/userProfile.service";

const userProfileController = (req, res) => {
  try {
    const { authorization } = req.headers;
    const user = userProfileService(authorization);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default userProfileController;
