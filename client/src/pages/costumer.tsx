import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddCostumerModal from "../components/addCostumer_modal"
import DeleteCostumerModal from "../components/deleteCostumer_modal"
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "../redux/slices/addEditModalSlice";
import { toggleDeleteChangeAction } from "../redux/slices/deleteModalSlice";

export default function Costumer(){

  const stateEdit:boolean = useSelector((state:any) => state.appEdit.toggleModal)
  const stateDelete:boolean = useSelector((state:any) => state.appDelete.toggleDeleteModal)
  const dispatch = useDispatch()

  const onUpdateEdit = () => {
    dispatch(toggleChangeAction())
  }

  const onUpdateDelete = () => {
    dispatch(toggleDeleteChangeAction())
  }

  const { id } = useParams();
  const [data, setData] = useState(Object);

  useEffect(() => {
    async function fetchCostumer(){
      const response = await fetch(`http://localhost:5001/costumers/${id}`);
      const costumer = await response.json();
      setData(costumer);
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
        <button onClick={onUpdateEdit}>Edit</button>
        <button onClick={onUpdateDelete}>delete</button>
      </div>
      {stateEdit ? <AddCostumerModal/> : <></>}
      {stateDelete ? <DeleteCostumerModal/> : <></>}
    </div>
  )
}