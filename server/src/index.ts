import { config } from 'dotenv';
config();

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

import Costumer from './models/Costumers';

const PORT = 5000;

const app = express();
app.use(express.json())

app.post('/', async (req: Request, res: Response) => {
  const newCostumer = new Costumer({
    name: req.body.name,
    lastname: req.body.lastname,
    city: req.body.city,
    birthdate: req.body.birthdate,
  });
  const createdCostumer = await newCostumer.save();
  res.json(createdCostumer)
})

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`)
  app.listen(PORT);
});

