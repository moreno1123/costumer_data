import { config } from 'dotenv';
config();

import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import Costumer from './models/Costumers';

const PORT = 5001;

const allowedOrigins = [`http://127.0.0.1:${PORT}`];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

const app = express();

app.use(cors(options));
app.use(express.json())

app.get('/', cors(), async (req: Request, res: Response) => {
  const costumers = await Costumer.find();
  res.json(costumers);
})

app.post('/', cors(), async (req: Request, res: Response) => {
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

