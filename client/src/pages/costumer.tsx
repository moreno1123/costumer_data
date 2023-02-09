import { useParams } from "react-router-dom";
import { useEffect } from "react";
import AddCostumerModal from "../components/addCostumer_modal"
import DeleteCostumerModal from "../components/deleteCostumer_modal"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCostumer } from "../redux/thunks"
import { toggleEditModal } from "../redux/slices/addEditModalSlice";
import { toggleDeleteModal } from "../redux/slices/deleteModalSlice";

export default function Costumer(){

  const { id } = useParams();

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.data);
  const stateEdit:boolean = useAppSelector((state:any) => state.appEdit.toggleModal)
  const stateDelete:boolean = useAppSelector((state:any) => state.appDelete.toggleDeleteModal)

  const onUpdateEdit = () => {
    dispatch(toggleEditModal())
  }

  const onUpdateDelete = () => {
    dispatch(toggleDeleteModal())
  }

  useEffect(() => {
    dispatch(fetchCostumer(id))
  },[])

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