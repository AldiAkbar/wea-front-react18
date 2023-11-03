import Navbar from "../Components/Navbar"
import { FaWhatsapp } from 'react-icons/fa'
import { BsTrash } from 'react-icons/bs'
import AddPhonebook from "../Components/PhoneBook/AddPhonebook"
import Contacts from "../Components/PhoneBook/Contacts"
import Head from "../Components/Head"



const PhoneBook = () => {
  
  return (
    <div>
        <Head />
        <Navbar />
        <div className=" bg-slate-100 dark:bg-gray-400 lg:h-screen">
            <div className="max-w-[1400px] mx-auto">
              <h1 className="py-5 text-4xl font-medium text-center dark:text-gray-50">Phone Book</h1>
              <div className="flex flex-col lg:flex-row gap-2 my-5 ml-36 md:ml-44 lg:ml-10 text-lg justify-start">
                <button className="bg-blue-400 text-white py-1 px-2 rounded-md border w-[270px]">
                  <div className="flex gap-1 items-center">
                    Fetch From Selected Device
                    <FaWhatsapp size={21}/>
                  </div>
                </button>
                <button className="bg-gray-500 text-white p-1 px-2 rounded-md border w-[182px]">
                  <div className="flex gap-1 items-center">
                    Clear Phonebook
                    <BsTrash />
                  </div> 
                </button>
              </div>
              <div className="flex flex-col lg:flex-row mx-auto justify-center">
                <AddPhonebook />
                <Contacts />
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default PhoneBook