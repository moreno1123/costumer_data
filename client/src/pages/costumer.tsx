import { useParams } from "react-router-dom";
import { useEffect } from "react";
import AddCostumerModal from "../components/addCostumerModal"
import DeleteCostumerModal from "../components/deleteCostumerModal"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCostumer, getInsurance } from "../redux/thunks"
import { toggleEditModal } from "../redux/slices/addEditModalSlice";
import { toggleDeleteModal } from "../redux/slices/deleteModalSlice";

export default function Costumer(){

  const { id } = useParams();

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.data);
  const insurance = useAppSelector((state) => state.insurance.data);
  const stateEdit:boolean = useAppSelector((state:any) => state.appEdit.toggleModal)
  const stateDelete:boolean = useAppSelector((state:any) => state.appDelete.toggleDeleteModal)

  const onUpdateEdit = () => {
    dispatch(toggleEditModal())
  }

  const onUpdateDelete = () => {
    dispatch(toggleDeleteModal())
  }

  useEffect(() => {
    dispatch(getInsurance({
      city: data.city,
      birthdate: data.birthdate
    }))
    console.log(insurance)
  })

  useEffect(() => {
    dispatch(fetchCostumer(id))
  },[])

  
  const showInsurance = (e:any) => {
    if(insurance){
      const show:any = document.getElementById('insurance')
      show.classList.remove('invisible');
    }
  };

  return(
    <div className="App">
      <div className="flex flex-col gap-4 mt-6 ml-6">
        <p><span className="font-bold">First name:</span> {data.name}</p>
        <p><span className="font-bold">Last name:</span> {data.lastname}</p>
        <p><span className="font-bold">E-mail:</span> {data.email}</p>
        <p><span className="font-bold">City:</span> {data.city}</p>
        <p><span className="font-bold">Birthdate:</span> {data.birthdate}</p>
        <p><span className="font-bold">Insurance price: </span><button onClick={showInsurance} className="ml-4 p-2 border border-black rounded-md hover:bg-gray-300 transition duration-200">Calculate insurance price</button> <span id="insurance" className="ml-4 invisible">{insurance}</span></p>
        <button onClick={onUpdateEdit}>Edit</button>
        <button onClick={onUpdateDelete}>delete</button>
      </div>
      {stateEdit ? <AddCostumerModal/> : <></>}
      {stateDelete ? <DeleteCostumerModal/> : <></>}
    </div>
  )
}