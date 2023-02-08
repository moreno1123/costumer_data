import { createAsyncThunk } from "@reduxjs/toolkit"

export type InstanceData = {
  _id: Number, 
  name: String,
  lastname: String,
  email: String, 
  city: String,
  birthdate: String
}
export type DataInstance = {data: Array<InstanceData>}

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (): Promise<Array<DataInstance>> => {
    const response = await fetch('http://localhost:5001/costumers');
    return response.json()
  }
);




// export const postData = createAsyncThunk(
//   "type/postData",
//   async (data) => {
//     try {
//       const response = await axios.post("https://reqres.in/api/users", data);
//       // If you want to get something back
//       return response.data;
//     } catch (err) {
//       console.error(err)
//     }
//   }
// );