import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const CostumerSchema = new Schema({
  // id: ObjectId,
  name: String,
  lastname: String,
  city: String,
  birthdate: String
});

const CostumerModel = mongoose.model("Costumer", CostumerSchema);

export default CostumerModel;
