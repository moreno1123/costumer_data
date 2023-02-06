import Table from "../components/table"
import AddCostumerModal from "../components/addCostumer_modal"
import { HiOutlinePlusCircle } from "react-icons/hi";
import { useState } from "react";

export default function Costumers(){

  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="App">
      <Table />
      <button onClick={() => setIsOpen(true)} className="w-64 p-4 m-auto my-6 rounded-full flex items-center justify-center gap-2 bg-blue-300 hover:bg-blue-500 transition duration-200">add new costumer modal<HiOutlinePlusCircle size={25} className="hover:cursor-pointer"/></button>
      {isOpen && <AddCostumerModal setIsOpen={setIsOpen}/>}
    </div>
  )
}