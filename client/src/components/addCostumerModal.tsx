import { HiOutlinePlusCircle } from "react-icons/hi";
import { MdOutlineCancel } from 'react-icons/md'
import { toggleEditModal } from "../redux/slices/addEditModalSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { createCostumer, fetchCostumers } from "../redux/thunks"

export default function AddCostumerModal(){

  const state = useAppSelector((state) => state.appEdit.toggleModal)
  const dispatch = useAppDispatch()

  const onUpdate = () => {
    dispatch(toggleEditModal())
  }

  const handleSumbit = (e:any) => {
    e.preventDefault();

    dispatch(createCostumer({
      name: e.target.name.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      city: e.target.city.value,
      birthdate: e.target.birthdate.value
    }));
    dispatch(toggleEditModal());
    dispatch(fetchCostumers());
  }

  const handleParentClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
  };

  return(
    <div className="App">
      <div onClick={onUpdate} className="min-w-full h-full items-center flex justify-center bg-gray-600 bg-opacity-90 absolute top-0">
        <form onClick={(e) => handleParentClick(e)}  onSubmit={handleSumbit} action="" className="border-2 border-gray-900 border-solid mt-6 flex flex-col gap-4 p-4 items-center rounded-xl bg-white">

          <div className="input-type">
            <input autoFocus={true} id="name" type="text" name="firstname" placeholder="FirstName" className="border w-full px-5 py-2 focus:outline-none rounded-md"></input>
          </div>

          <div className="input-type">
            <input id="lastname" type="text" name="lastname" placeholder="Lastname" className="border w-full px-5 py-2 focus:outline-none rounded-md"></input>
          </div>

          <div className="input-type">
            <input id="email" type="text" name="email" placeholder="Email" className="border w-full px-5 py-2 focus:outline-none rounded-md"></input>
          </div>

          <div className="input-type w-full">
            <select name="city" id="city" className="border w-full px-5 py-2 focus:outline-none rounded-md bg-white">
              <option value="Zagreb">Zagreb</option>
              <option value="Split">Split</option>
              <option value="Rijeka">Rijeka</option>
              <option value="Osijek">Osijek</option>
              <option value="Zadar">Zadar</option>
              <option value="other">other</option>
            </select>
          </div>

          <div className="input-type">
            <input id="birthdate" type="date" name="date" placeholder="Date" className="border px-5 py-5 focus:outline-none rounded-md"></input>
          </div>

          <div className="min-w-full flex flex-row justify-evenly">
            <button type="submit" className="flex justify-center text-md w-2/6 bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 border rounded-md transition duration-200">
              Save<span className="px-1"><HiOutlinePlusCircle size={24}></HiOutlinePlusCircle></span>
            </button>

            <button onClick={onUpdate} className="flex justify-center text-md w-2/6 bg-red-600 hover:bg-red-800 text-white px-4 py-2 border rounded-md transition duration-200">
              Cancel<span className="px-1"><MdOutlineCancel size={24}></MdOutlineCancel></span>
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}