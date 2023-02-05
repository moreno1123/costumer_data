import { BiPlus } from 'react-icons/bi'

export default function AddCostumer(){

  return(
    <div className="App">
      <div className="min-w-full flex justify-center">
        <form action="" className="border-2 border-gray-500 border-solid mt-6 flex flex-col gap-4 p-4 items-center rounded-xl">

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

          <button className="flex justify-center text-md w-2/6 bg-green-500 hover:bg-green-800 text-white px-4 py-2 border rounded-md transition duration-200">
            Add<span className="px-1"><BiPlus size={24}></BiPlus></span>
          </button>

        </form>
      </div>
    </div>
  )
}