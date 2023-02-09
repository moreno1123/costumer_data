import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CostumerSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  city: String,
  birthdate: String
});

const CostumerModel = mongoose.model("Costumer", CostumerSchema);

export default CostumerModel;
