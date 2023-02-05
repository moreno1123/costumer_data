import { useState, useEffect } from "react";

export default function Table(){

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchCostumers(){
      const response = await fetch('http://localhost:5001/');
      const costumers = await response.json();
      setData(costumers);
      console.log(costumers);
    }
    fetchCostumers();
  }, [])


  return(
    <div className="App">
      <table className="min-w-full table-auto">
        <thead>
            <tr className="bg-gray-800">
              <th className="px-16 py-4">
                <span className="text-gray-200">Name and last name</span>
              </th>
              <th className="px-16 py-4">
                <span className="text-gray-200">Email</span>
              </th>
              <th className="px-16 py-4">
                <span className="text-gray-200">City</span>
              </th>
              <th className="px-16 py-4">
                <span className="text-gray-200">Birthdate</span>
              </th>
              <th className="px-16 py-4">
                <span className="text-gray-200"></span>
              </th>
            </tr>
        </thead>
        <tbody>
          {data.map((costumer) => (              
            <tr className="bh-gray-50 text-center" key={costumer._id}>
              <td className="px-16 py-4">
                <p>{costumer.name} {costumer.lastname}</p>
              </td>
              <td className="px-16 py-4">
                <p>{costumer.email}</p>
              </td>
              <td className="px-16 py-4">
                <p>{costumer.city}</p>
              </td>
              <td className="px-16 py-4">
                <p>{costumer.birthdate}</p>
              </td>
              <td className="px-16 py-4">
                <a className="cursor" href="/"><span className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-800 transition duration-200">gumb</span></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}