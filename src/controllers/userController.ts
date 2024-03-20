import { Request, Response } from 'express';
import User from '../models/userModel';
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username,email, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('User not found');
    }
    const isPasswordMatch = await compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error('Invalid password');
    }
    const token = sign({ _id: user._id, username: user.username, role: user.role }, 'rahasiaBanget13#', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error : any) {
    res.status(401).json({ message: error.message });
  }
};

export const createAdminRole = async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;
      const hashedPassword = await hash(password, 10);
      const user = new User({ username, email, password:hashedPassword, role: 'admin' });
      await user.save();
      res.status(201).json({ message: 'Admin role created successfully', user });
    } catch (error : any) {
      res.status(400).json({ message: error.message });
    }
  };
