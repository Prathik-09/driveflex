// index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; 
import registerRoute from './Routes/register.js';
import loginRoute from './Routes/login.js';
import homeRoute from './Routes/home.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://prathikpatilofcl00:Driveflex123@cluster0.1iqwc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.log(err));

// Use routes
app.use('/register', registerRoute);
app.use('/login', loginRoute); // Ensure the import matches the export name
app.use('/home', homeRoute);

app.listen(8000, () => {
  console.log(`Server running on port 8000`);
});
