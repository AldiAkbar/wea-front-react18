import { useEffect, useState } from "react";
import Modal from "./Modal";
import { BsQrCode, BsTrash } from 'react-icons/bs'
import { Link } from "react-router-dom";

const TableData = () => {
    const [showModal, setShowModal] = useState(false);
    const [registerNumbers, setRegisterNumbers] = useState([]);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleOnClose = () => setShowModal(false);

    const handleSaveNumber = (newNumber) => {
        setRegisterNumbers([...registerNumbers, newNumber]);
        localStorage.setItem("registerNumbers", JSON.stringify([...registerNumbers, newNumber]));
        setShowModal(false);
      };

      const handleDeleteNumber = (index) => {
        setDeleteIndex(index);
        setShowDeleteConfirmation(true);
    };

    const handleConfirmDelete = () => {
        if (deleteIndex !== null) {
            const updatedNumbers = [...registerNumbers];
            updatedNumbers.splice(deleteIndex, 1);
            setRegisterNumbers(updatedNumbers);
            localStorage.setItem("registerNumbers", JSON.stringify(updatedNumbers));
        }
        setShowDeleteConfirmation(false);
        setDeleteIndex(null);
    };

      useEffect(() => {
        const savedData = localStorage.getItem("registerNumbers");
        if (savedData) {
            setRegisterNumbers(JSON.parse(savedData));
        }
    }, []);

  return (
    <div className='max-w-[1500px] mx-auto p-4 border-4 dark:border-gray-300 shadow-xl rounded-lg
      bg-white dark:bg-gray-500'>
        <div className='flex justify-between ml-20 2xl:ml-0'>
            <h1 className='text-2xl p-2 font-medium text-gray-700 dark:text-gray-200'>Whatsapp Account</h1>
            <button className='bg-blue-500 text-white py-2 px-4 rounded-lg text-lg'
            onClick={() => setShowModal(true)}>+ Add Device</button>
        </div>
        <Modal onClose={handleOnClose} onSave={handleSaveNumber} visible={showModal}/>
        <div className="my-10 overflow-x-auto ml-20 2xl:ml-0">
            <table className="w-full table-auto mx-auto border-collapse text-xl">
                <thead>
                    <tr className="text-gray-800 bg-gray-300 border-4 border-gray-400">
                    <th className="w-1/6 md:w-1/4 lg:w-1/6 xl:w-1/6 px-4 py-2">Number</th>
                            <th className="w-2/6 md:w-2/4 lg:w-2/6 xl:w-2/6 px-4 py-2">Webhook URL</th>
                            <th className="w-1/6 md:w-1/4 lg:w-1/6 xl:w-1/6 px-4 py-2">Messages Sent</th>
                            <th className="w-1/6 md:w-1/4 lg:w-1/6 xl:w-1/6 px-4 py-2">Status</th>
                            <th className="w-1/6 md:w-1/4 lg:w-1/6 xl:w-1/6 px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                {registerNumbers.map((number, index) => (
                    <tr key={index} className="bg-white text-gray-700 dark:bg-gray-500 dark:text-white text-lg border-b-2 border-gray-300">
                        <td className="px-3 py-1">{number.number}</td>
                        <td className="px-3 py-1">{number.webhook}</td>
                        <td className="text-center">0</td>
                        <td className="text-center">
                            <button className="bg-[#42de09] text-white font-semibold py-1 px-3 rounded-lg">{number.status}</button></td>
                        <td className="px-3 py-2  flex justify-evenly">
                            <button
                            className="bg-blue-700 text-white p-2 my-2 rounded-lg border border-gray-500 dark:border-gray-200">
                                <Link to='/dashboard/scan'><BsQrCode /></Link>
                            </button>
                            <button
                            onClick={() => {handleDeleteNumber(index);
                                            setShowDeleteConfirmation(true)}}
                            className="bg-red-600 text-white p-2 my-2 rounded-lg border border-gray-500 dark:border-gray-200">
                              <BsTrash /></button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            {showDeleteConfirmation && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-10">
            <div className="bg-gray-200 dark:bg-gray-400 p-6 rounded-lg text-xl font-semibold border dark:border-gray-200">
              <h1 className='pb-4'>Apakah Anda yakin ingin menghapus nomor ini?</h1>
              <div className='flex gap-3 justify-end'>
                <button className='bg-gray-500 px-6 py-1 text-white border rounded-xl' onClick={handleConfirmDelete}>Ya</button>
                <button className='bg-gray-500 px-3 p-1 text-white border rounded-xl' onClick={() => setShowDeleteConfirmation(false)}>Tidak</button>
              </div>
            
            </div>
          </div>
        )}
        </div>
    </div>
  )
}

export default TableData