import { Request, Response } from "express";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/generateToken";
import User from "../models/user.model";

export const signup = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username })
    if(user) {
      return res.status(400).json({error: 'Username already exists'})
    }

    // HASH PASSWORD HERE
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const profilePic =  `https://avatar.iran.liara.run/username?username=${username}`
    const newUser = new User({
      username,
      password: hashedPassword,
      avatar: profilePic,
    })
    
    if(newUser) {
      generateTokenAndSetCookie(newUser._id, res);

      await newUser.save()

      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        password: newUser.password,
        avatar: newUser.avatar,
      })
    } else {
      res.status(400).json({ error: "Invalid user data" })
    }

  } catch (error) {
    console.log("Error in signup controller", (error as Error).message)
    res.status(500).json({error: "Internal Server Error"})
  }
};

export const login = (req: Request, res: Response) => {
  console.log("User Login")
};

export const logout = (req: Request, res: Response) => {
  console.log("Logout ")
};