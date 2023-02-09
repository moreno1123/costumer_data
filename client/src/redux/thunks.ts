import { createAsyncThunk } from "@reduxjs/toolkit"

export type InstanceData = {
  _id: String, 
  name: String,
  lastname: String,
  email: String, 
  city: String,
  birthdate: String,
  __v: String
}

export type DataInstance = {data: Array<InstanceData>}
export type SingleDataInstance = {data: InstanceData}

export const fetchCostumers = createAsyncThunk(
  "data/fetchCostumers",
  async () => {
    const response = await fetch('http://localhost:5001/costumers');
    return response.json()
  }
);

export const fetchCostumer = createAsyncThunk<any, any, any>(
  "data/fetchCostumer",
  async (id) => {
    const response = await fetch(`http://localhost:5001/costumers/${id}`);
    return response.json()
  }
);

export const deleteCostumer = createAsyncThunk<any, any, any>(
  "data/deleteCostumer",
  async (id) => {
    const response = await fetch(`http://localhost:5001/costumers/${id}`, { method: 'DELETE' });
    return response.json()
  }
);

export const createCostumer = createAsyncThunk<any, any, any>(
  "data/createCostumer",
  async ({name, lastname, email, city, birthdate}) => {
    const response = await fetch('http://localhost:5001/', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name, lastname, email, city, birthdate
      }),
    });
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