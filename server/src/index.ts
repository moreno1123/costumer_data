import { config } from 'dotenv';
config();

import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Costumer from './models/Costumers';
import discount from "./data/discount.json";
import price from "./data/base_price.json";

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

app.put('/costumers/:id', async (req: Request, res: Response) => {
  const costumerId = req.params.id
  const updateCostumer = ({
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email, 
    city: req.body.city,
    birthdate: req.body.birthdate
  });
  const updatedCostumer = await Costumer.findByIdAndUpdate(costumerId, updateCostumer);
  res.json(updatedCostumer)
})

app.delete('/costumers/:id', async (req: Request, res: Response) => {
  const costumerId = req.params.id
  const costumer = await Costumer.findByIdAndDelete(costumerId)
  res.json(costumer)
})

app.post('/insurance', async (req: Request, res: Response) => {
  const city = req.body.city
  const birthdate = req.body.birthdate

  const amount = () => {
    for(let i = 0;i<price.length;i++){
      if(price[i].city === city){
        return price[i].amount;
      }
    } 
  }

  function getAge (birthdate:string) {
    const birth = new Date(birthdate)
    const now = new Date()
    const diff = new Date(now.valueOf() - birth.valueOf())
    return Math.abs(diff.getFullYear() - 1970)
  }
  const age = getAge(birthdate) 


  const discountPercentage = () => {
    for(let i = 0;i<discount.length;i++){
      if(discount[i].age.length > 4){
        const first_value = Number(discount[i].age.substring(0,2))
        const second_value = Number(discount[i].age.substring(3,6))
        if (age > first_value && age < second_value) {
          return discount[i].discount;
        }
      }else{
        const first_value = Number(discount[i].age.charAt(0))
        const second_value = Number(discount[i].age.substring(2,4))
        if (age > first_value && age < second_value) {
          return discount[i].discount;
        }
      }
    } 
  }

  const insurancePrice = () => {
    const percentage = Number(discountPercentage()) / 100
    const amount_number = Number(amount())
    const minus = amount_number * percentage

    return amount_number - minus
  }

  res.json(insurancePrice())
})

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`)
  app.listen(PORT);
});

