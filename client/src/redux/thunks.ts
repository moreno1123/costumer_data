import { createAsyncThunk } from "@reduxjs/toolkit"

const URL = 'http://localhost:5000/'

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

export const fetchCostumers = createAsyncThunk(
  "data/fetchCostumers",
  async () => {
    const response = await fetch(`${URL}costumers`);
    return response.json()
  }
);

export const fetchCostumer = createAsyncThunk<any, any, any>(
  "data/fetchCostumer",
  async (id) => {
    const response = await fetch(`${URL}costumers/${id}`);
    return response.json()
  }
);

export const deleteCostumer = createAsyncThunk<any, any, any>(
  "data/deleteCostumer",
  async (id) => {
    const response = await fetch(`${URL}costumers/${id}`, { method: 'DELETE' });
    return response.json()
  }
);

export const createCostumer = createAsyncThunk<any, any, any>(
  "data/createCostumer",
  async ({name, lastname, email, city, birthdate}) => {
    const response = await fetch(`${URL}`, {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name, lastname, email, city, birthdate
      }),
    });
    return response.json()
  }
);
export const updateCostumer = createAsyncThunk<any, any, any>(
  "data/createCostumer",
  async ({id, name, lastname, email, city, birthdate}) => {
    const response = await fetch(`${URL}costumers/${id}`, {
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name, lastname, email, city, birthdate
      }),
    });
    return response.json()
  }
);

export const getInsurance = createAsyncThunk<any, any, any>(
  "data/getInsurance",
  async ({city, birthdate}) => {
    const response = await fetch(`${URL}insurance`, {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        city, birthdate
      }),
    });
    return response.json()
  }
);
