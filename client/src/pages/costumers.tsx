import Table from "../components/table"
import AddCostumerModal from "../components/addCostumer_modal"
import { HiOutlinePlusCircle } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "../redux/slices/addEditModalSlice";

export default function Costumers(){

  const state:boolean = useSelector((state:any) => state.appEdit.toggleModal)
  const dispatch = useDispatch()

  const onUpdate = () => {
    dispatch(toggleChangeAction())
  }

  return(
    <div className="App">
      <Table />
      <button onClick={onUpdate} className="w-64 p-4 m-auto my-6 rounded-full flex items-center justify-center gap-2 bg-blue-300 hover:bg-blue-500 transition duration-200">add new costumer<HiOutlinePlusCircle size={25} className="hover:cursor-pointer"/></button>
      {state ? <AddCostumerModal/> : <></>}
    </div>
  )
}