import loginService from "../services/login.service";

const loginController = (req, res) => {
  try {
    const { email, password } = req.body;
    const token = loginService(email, password);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default loginController;
