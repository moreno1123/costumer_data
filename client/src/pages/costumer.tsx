import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Costumer(){

  const { id } = useParams();
  const [data, setData] = useState(Object);

  useEffect(() => {
    async function fetchCostumer(){
      const response = await fetch(`http://localhost:5001/costumers/${id}`);
      const costumer = await response.json();
      setData(costumer);
      console.log(costumer)
    }
    fetchCostumer();
  }, [])

  return(
    <div className="App">
      <div className="flex flex-col gap-4">
        <p><span className="font-bold">First name:</span> {data.name}</p>
        <p><span className="font-bold">Last name:</span> {data.lastname}</p>
        <p><span className="font-bold">E-mail:</span> {data.email}</p>
        <p><span className="font-bold">City:</span> {data.city}</p>
        <p><span className="font-bold">Birthdate:</span> {data.birthdate}</p>
        <p><span className="font-bold">Insurance price: </span><button>Calculate insurance price</button></p>
        <button>Edit</button>
        <button>delete</button>
      </div>
    </div>
  )
}