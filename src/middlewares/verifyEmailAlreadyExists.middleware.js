import users from "../database";

const verifyEmailAvailability = (req, res, next) => {
  try {
    const { email } = req.body;
    const user = users.find((user) => user.email === email);
    if (user) {
      throw new Error("Email inserido já existe");
    }
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default verifyEmailAvailability;
