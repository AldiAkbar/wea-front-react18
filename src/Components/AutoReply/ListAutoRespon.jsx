
import { IoSearchSharp } from 'react-icons/io5'
import { FaEye } from 'react-icons/fa6'
import { BsTrash } from 'react-icons/bs'
import { useState } from 'react'

const ListAutoRespon = () => {
    const [statusCheck, setStatusCheck] = useState(true);
    const [quotedCheck, setQuotedCheck] = useState(true);
    const [halaman, setHalaman] = useState(1);

    const toggleStatusCheck = () => {
        setStatusCheck(!statusCheck);
    }
    const toggleQuoteCheck = () => {
        setQuotedCheck(!quotedCheck);
    }

    const handlePreviousClick = () => {
        setHalaman((state) => Math.max(state - 1, 1));
      };
    
      const handleNextClick = () => {
        setHalaman((state) => state + 1);
      };

  return (
    <div className='max-w-[1450px] mx-auto p-4 border-4 shadow-xl rounded-lg bg-gray-100 dark:bg-gray-500'>
        <div className='flex flex-col md:flex-row justify-between ml-16 xl:ml-0'>
            <h1 className='text-2xl p-2 font-medium text-gray-700 dark:text-gray-200 mt-2'>Lists auto respond for</h1>
            <div className='flex gap-3 items-center py-2 px-2'>
                <IoSearchSharp className='text-3xl text-gray-700 dark:text-gray-200'/>
                <input type="text" className='border-2 border-gray-300 focus:outline-none p-2'
                        placeholder='Cari'
                        />
            </div>
        </div>
        <div className="my-10 ml-16 xl:ml-0 overflow-x-auto">
            <table className="w-full table-auto mx-auto text-xl">
                <thead>
                <tr className="bg-gray-300 border-2 border-gray-400 text-gray-800">
                            <th className="w-[20%] md:w-[15%] lg:w-[15%] xl:w-[20%] px-4 py-2">KeyWord</th>
                            <th className="w-[30%] md:w-[30%] lg:w-[25%] xl:w-[25%] px-4 py-2">Details</th>
                            <th className="w-[10%] md:w-[10%] lg:w-[10%] xl:w-[10%] px-4 py-2">Status</th>
                            <th className="w-[10%] md:w-[10%] lg:w-[10%] xl:w-[10%] px-4 py-2">Quoted</th>
                            <th className="w-[10%] md:w-[10%] lg:w-[10%] xl:w-[10%] px-4 py-2">Type</th>
                            <th className="w-[20%] md:w-[15%] lg:w-[10%] xl:w-[10%] px-4 py-2">Action</th>
                        </tr>
                </thead>
                <tbody>
                    <tr
                    className="text-xl border-b-2 border-gray-300">
                        <td className="px-3 py-1 ">
                        <input
                            type="text"
                            className='w-full border border-gray-300 p-2 rounded-lg text-lg
                                focus:outline-none text-gray-700 my-2'/>
                        </td>
                        <td className='pl-3 py-3 flex flex-col gap-1'>
                            <h3 className='text-gray-800 dark:text-gray-100'>Will respond if Keyword <span className='bg-green-500 text-white
                            text-sm py-1 px-2 rounded-lg'>Equel</span></h3>
                            <h3 className='text-gray-800 dark:text-gray-100'>& when the sender is <span className='bg-yellow-500 text-white
                            text-sm py-1 px-3 rounded-lg'>All</span></h3>
                        </td>
                        <td>
                            <div className='flex justify-center'>
                                <div className='flex flex-col lg:flex-row gap-2 items-center'>
                                <label htmlFor="toggle-switch" className='pt-1'>
                                    <input
                                        checked={!statusCheck}
                                        onChange={toggleStatusCheck}
                                        type="checkbox" id='toggle-switch'
                                        className='cursor-pointer h-5 w-10 rounded-full appearance-none bg-zinc-200 border-2 border-blue-300
                                         checked:bg-blue-500 transition duration-500 relative'/>
                                    </label>
                                    <p className='text-gray-800 dark:text-gray-100'>{statusCheck ? 'Unactive' : 'Active'}</p>
                                </div> 
                            </div>
                        </td>
                        <td>
                        <div className='flex justify-center'>
                                <div className='flex flex-col lg:flex-row gap-2 items-center'>
                                <label htmlFor="toggle-switch" className='pt-1'>
                                    <input
                                        checked={!quotedCheck}
                                        onChange={toggleQuoteCheck}
                                        type="checkbox" id='toggle-switch'
                                        className='cursor-pointer h-5 w-10 rounded-full appearance-none bg-zinc-200 border-2 border-blue-300
                                         checked:bg-blue-500 transition duration-500 relative'/>
                                    </label>
                                    <p className='text-gray-800 dark:text-gray-100'>{quotedCheck ? 'No' : 'Yes'}</p>
                                </div> 
                            </div>
                        </td>
                        <td className="text-center text-gray-800 dark:text-gray-100">Text</td>
                        <td>
                            <div className="flex justify-evenly">
                                <button className="bg-blue-600 text-white p-2 my-2 rounded-lg border border-gray-200"><FaEye/></button>
                                <button className="bg-red-500 text-white p-2 my-2 rounded-lg border border-gray-200"><BsTrash/></button>
                            </div>
                        </td>  
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='flex justify-end'>
            <button className='bg-gray-300 text-gray-800 border border-gray-400 py-2 px-3 rounded-l-xl' onClick={handlePreviousClick}>Previous</button>
            <p className='bg-blue-400 text-white py-2 px-4'>{halaman}</p>
            <button className='bg-gray-300 text-gray-800 border border-gray-400 py-2 px-6 rounded-r-xl' onClick={handleNextClick}>Next</button>
        </div>
        <div>
        </div>

    </div>
  )
}

export default ListAutoRespon