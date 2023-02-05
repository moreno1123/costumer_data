import Table from "../components/table"
import { HiOutlinePlusCircle } from "react-icons/hi";

export default function Costumers(){

  return(
    <div className="App">
      <Table />
      <a href={'/addCostumer'} className="w-64 p-4 m-auto my-6 rounded-full flex items-center justify-center gap-2 bg-blue-300 hover:bg-blue-500 transition duration-200">add new costumer<HiOutlinePlusCircle size={25} className="hover:cursor-pointer"/></a>
    </div>
  )
}