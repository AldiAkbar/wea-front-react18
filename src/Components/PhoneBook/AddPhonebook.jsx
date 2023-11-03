import { BsTrash } from 'react-icons/bs'

const AddPhonebook = () => {
  return (
    <div className="w-[300px] sm:w-[400px] md:w-[500px] max-h-[600px] bg-white dark:bg-gray-300 text-lg rounded-lg mx-auto mb-5 lg:mb-0">
        <div className="p-3 mb-5">
        <button className="w-full bg-blue-600 rounded-lg text-center
        text-white py-3 mb-3">+ PhoneBook
        </button>
        <input type="text"
        className="rounded-lg w-full border-4 p-2 focus:outline-slate-400"
        placeholder=" Search phonebook"/>
        </div>
        <div className="w-full h-[380px] border-2 overflow-y-scroll">
            <div className='flex'>
                <div className="w-[80%] text-gray-700 dark:text-gray-800 pl-3 py-2 hover:bg-blue-100 border-2 dark:border-gray-200">
                    <h1>Hura-Hura Badminton</h1>
                    <h1>( ID: 6285123123123@g.us )</h1>
                </div>
                <div className='w-[20%] flex items-center justify-center text-[40px] border-2 dark:border-gray-200 text-red-500'>
                    <BsTrash className='hover:border-2 hover:border-red-400 p-2 rounded-lg'/>
                </div>
            </div>
            <div className='flex'>
                <div className="w-[80%] text-gray-700 dark:text-gray-800 pl-3 py-2 hover:bg-blue-100 border-2 dark:border-gray-200">
                    <h1>Hura-Hura Tennis</h1>
                    <h1>( ID: 6285234567890@g.us )</h1>
                </div>
                <div className='w-[20%] flex items-center justify-center text-[40px] border-2 dark:border-gray-200 text-red-500'>
                    <BsTrash className='hover:border-2 hover:border-red-400 p-2 rounded-lg'/>
                </div>
            </div>
          
            

        </div>
        

    </div>
  )
}

export default AddPhonebook