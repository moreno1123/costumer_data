import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineCancel } from 'react-icons/md'
import { useParams } from "react-router-dom";

export default function DeleteCostumerModal({setIsOpenDelete}: any){

  const { id } = useParams();
  
  async function handleDeleteCostumer(){
    await fetch(`http://localhost:5001/costumers/${id}`, {
      method:"DELETE",
    });
  }

  const handleParentClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
  };

  return(
    <div className="App">
      <div onClick={() => setIsOpenDelete(false)} className="min-w-full min-h-screen items-center flex justify-center bg-gray-600 bg-opacity-90 absolute top-0">

        <div onClick={(e) => handleParentClick(e)} className="w-1/2 flex flex-col items-center gap-10 bg-white p-6 rounded-xl border-2 border-gray-900">
          <p className="text-xl">Are you sure you want to delete this user?</p>

          <div className="min-w-full flex flex-row justify-evenly">
            <button onClick={() => {setIsOpenDelete(false); 
                                    handleDeleteCostumer(); 
                                    window.location.href='/';}} 
                                    className="flex justify-center text-md w-2/6 bg-red-500 hover:bg-red-800 text-white px-4 py-2 rounded-md transition duration-200">
              Delete<span className="px-1"><AiOutlineDelete size={24}></AiOutlineDelete></span>
            </button>

            <button onClick={() => setIsOpenDelete(false)} className="flex justify-center text-md w-2/6 hover:bg-gray-300 text-gray-800 px-4 py-2 border border-gray-800 rounded-md transition duration-200">
              Cancel<span className="px-1"><MdOutlineCancel size={24}></MdOutlineCancel></span>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}