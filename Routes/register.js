import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../model/userreg.js'; 

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, phno, password, confirmpassword } = req.body;

  if (password !== confirmpassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      phno,
      password: hashedPassword,
      confirmpassword:hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

export default router;
