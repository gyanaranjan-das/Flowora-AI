import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    if (name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: "Name must be atleast 2 characters long",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "password must be atleast 8 characters long",
      });
    }

    const existingUser = await User.findOne({
      email: email.toLoweCase(),
    });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({
      name: name.trime(),
      email: email.toLowerCase(),
      password,
    });

    const token = generateToken(user._id);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Register Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
