import { config } from 'dotenv';
config();

import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import insurance from './lib/calculateInsurance';

import Costumer from './models/Costumers';

const PORT = 5001;

const app = express();

app.use(cors());
app.use(express.json())

app.get('/costumers', async (req: Request, res: Response) => {
  const costumers = await Costumer.find();
  res.json(costumers);
})

app.get('/costumers/:id', async (req: Request, res: Response) => {
  const costumerId = req.params.id
  const costumer = await Costumer.findById(costumerId)
  res.json(costumer)
})

app.post('/', async (req: Request, res: Response) => {
  const newCostumer = new Costumer({
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email, 
    city: req.body.city,
    birthdate: req.body.birthdate
  });
  const createdCostumer = await newCostumer.save();
  res.json(createdCostumer)
})

app.delete('/costumers/:id', async (req: Request, res: Response) => {
  const costumerId = req.params.id
  const costumer = await Costumer.findByIdAndDelete(costumerId)
  res.json(costumer)
})

app.post('/insurance', async (req: Request, res: Response) => {
  const city = req.body.city
  const birthdate = req.body.birthdate
  res.json(city + birthdate)
})

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`)
  app.listen(PORT);
});

