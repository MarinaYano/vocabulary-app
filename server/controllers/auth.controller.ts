import { Request, Response } from "express";


export const login = async (req: Request, res: Response) => {
  try {
    const {username, password, } = req.body;
  } catch (error) {
    
  }
};

export const signup = (req: Request, res: Response) => {
  console.log("Signup ")
};

export const logout = (req: Request, res: Response) => {
  console.log("Logout ")
};