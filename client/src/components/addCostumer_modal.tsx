import { HiOutlinePlusCircle } from "react-icons/hi";
import { MdOutlineCancel } from 'react-icons/md'

export default function AddCostumerModal({setIsOpen}: any){

  const handleParentClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
  };

  return(
    <div className="App">
      <div onClick={() => setIsOpen(false)} className="min-w-full min-h-screen items-center flex justify-center bg-gray-600 bg-opacity-90 absolute top-0">
        <form onClick={(e) => handleParentClick(e)}  action="" className="border-2 border-gray-900 border-solid mt-6 flex flex-col gap-4 p-4 items-center rounded-xl bg-white">

          <div className="input-type">
            <input type="text" name="firstname" placeholder="FirstName" className="border w-full px-5 py-2 focus:outline-none rounded-md"></input>
          </div>

          <div className="input-type">
            <input type="text" name="lastname" placeholder="Lastname" className="border w-full px-5 py-2 focus:outline-none rounded-md"></input>
          </div>

          <div className="input-type">
            <input type="text" name="email" placeholder="Email" className="border w-full px-5 py-2 focus:outline-none rounded-md"></input>
          </div>

          <div className="input-type">
            <input type="text" name="salary" placeholder="Salary" className="border w-full px-5 py-2 focus:outline-none rounded-md"></input>
          </div>

          <div className="input-type">
            <input type="date" name="date" placeholder="Date" className="border px-5 py-5 focus:outline-none rounded-md"></input>
          </div>

          <div className="min-w-full flex flex-row justify-evenly">
            <button onClick={() => setIsOpen(false)} className="flex justify-center text-md w-2/6 bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 border rounded-md transition duration-200">
              Add<span className="px-1"><HiOutlinePlusCircle size={24}></HiOutlinePlusCircle></span>
            </button>

            <button onClick={() => setIsOpen(false)} className="flex justify-center text-md w-2/6 bg-red-600 hover:bg-red-800 text-white px-4 py-2 border rounded-md transition duration-200">
              Cancel<span className="px-1"><MdOutlineCancel size={24}></MdOutlineCancel></span>
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}