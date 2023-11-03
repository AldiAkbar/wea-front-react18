import { IoSearchSharp } from 'react-icons/io5'
import { BsTrash } from 'react-icons/bs'
import { BiSolidArrowFromBottom, BiSolidArrowToBottom } from 'react-icons/bi'
import AddContacts from './AddContacts'
import { useEffect, useState } from 'react'

const Contacts = () => {
    const [searchText, setSearchText] = useState('');
    const [showAddContacts, setShowAddContacts] = useState(false);
    const [registerContacts, setRegisterContacts] = useState([]);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [contactToDeleteIndex, setContactToDeleteIndex] = useState(null);
    const [showDeleteAllConfirmation, setShowDeleteAllConfirmation] = useState(false);
    const [error, setError] = useState("");

    const handleOnClose = () => setShowAddContacts(false);

    const handleSaveNumber = (newContact) => {
        setRegisterContacts([...registerContacts, newContact]);
    setShowAddContacts(false);
      };

      const handleSearch = (event) => {
        setSearchText(event.target.value);
        setError("");
      };

      const handleDelete = () => {
        if (contactToDeleteIndex !== null) {
          const updatedContacts = [...registerContacts];
          updatedContacts.splice(contactToDeleteIndex, 1);
          setRegisterContacts(updatedContacts);
    
          setContactToDeleteIndex(null);
          setShowDeleteConfirmation(false);
        }
      };

      const toggleDeleteAllConfirmation = () => {
        if(registerContacts.length > 0) {
          setShowDeleteAllConfirmation(!showDeleteAllConfirmation);
        } else {
          setError('Tidak ada kontak yang tersimpan.');
        }
      };
    
      const handleDeleteAll = () => {
        setRegisterContacts([]);
        toggleDeleteAllConfirmation();
      };

      useEffect(() => {
        localStorage.setItem("registerContacts", JSON.stringify(registerContacts));
      }, [registerContacts]);
    
      useEffect(() => {
        const savedData = localStorage.getItem("registerContacts");
        if (savedData) {
          setRegisterContacts(JSON.parse(savedData));
        }
      }, []);


  return (
    <div className="relative w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[850px] max-h-[600px] bg-white dark:bg-gray-300 text-lg rounded-lg mx-auto">
        <div className='p-4 mb-5'>
        <div className="flex flex-col xl:flex-row justify-evenly">
          <div className='flex gap-2 mb-2 md:gap-0 justify-between lg:justify-evenly xl:justify-start xl:gap-3'>
          <button className='w-20 xl:w-24 flex gap-1 items-center bg-red-600 text-white py-2 px-4 rounded-lg'
                    onClick={toggleDeleteAllConfirmation}>
                    <BsTrash className='text-xl' />
                    All
            </button>
            <div className='flex gap-3 items-center py-2 px-3 border-2 border-gray-400 rounded-lg'>
                <IoSearchSharp className='text-xl'/>
                <input type="text" className='border-2 border-gray-300 focus:outline-none pl-2 w-32 sm:w-56'
                        placeholder=' Cari kontak...'
                        value={searchText}
                        onChange={handleSearch}
                        />
            </div>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-0 lg:flex lg:justify-evenly xl:mb-2 xl:gap-3'>
              <button onClick={() => setShowAddContacts(true)} className='w-32 sm:w-[120px] bg-blue-600 text-white py-2 rounded-lg'>
                Add Contact
              </button>
              <button className='w-32 sm:w-[118px] flex gap-1 items-center justify-center bg-green-500 text-white py-2 px-2 rounded-lg'>
                    <BiSolidArrowToBottom className='text-xl' />
                    Import
              </button>
              <button className='w-32 sm:w-[118px] flex gap-1 items-center justify-center bg-yellow-500 text-white py-2 rounded-lg'>
                    <BiSolidArrowFromBottom className='text-xl' />
                    Export
              </button>

          </div>
            
           
        </div>
        {error && <p className="text-red-500 absolute ">{error}</p>}
        <AddContacts onClose={handleOnClose} onSave={handleSaveNumber} visible={showAddContacts}/>
        </div>
        <div className='w-full px-2 h-[450px] border-2 overflow-y-scroll'>
            <div className='flex text-xl font-bold border-2'>
                <h1 className='py-2 w-[40%]'>Name</h1>
                <h1 className='py-2 w-[60%]'>Number Whatsapp</h1>
            </div>
            {registerContacts
            .filter((kontak) =>
            kontak.nama.toLowerCase().includes(searchText.toLowerCase()))
            .map((kontak, index) => (
                <div key={index} className='w-full'>
                <div className='flex text-lg text-gray-700 dark:text-gray-800 border-2'>
                    <h2 className='py-2 ml-2 w-[40%]'>{kontak.nama}</h2>
                    <h2 className='py-2 w-[50%]'>{kontak.kontak}</h2>
                    <div className='text-red-500 w-[10%] flex items-center justify-center'>
                        <BsTrash 
                            onClick={() => {
                                setContactToDeleteIndex(index);
                                setShowDeleteConfirmation(true);
                              }}/>
                    </div>
                </div>
            </div>
            ))}
        </div>
        {showDeleteConfirmation && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-gray-200 dark:bg-gray-400 p-6 rounded-lg text-xl font-semibold border dark:border-gray-200">
              <h1 className='pb-4'>Apakah Anda yakin ingin menghapus kontak ini?</h1>
              <div className='flex gap-3 justify-end'>
                <button className='bg-gray-500 px-6 py-1 text-white border rounded-xl' onClick={handleDelete}>Ya</button>
                <button className='bg-gray-500 px-3 p-1 text-white border rounded-xl' onClick={() => setShowDeleteConfirmation(false)}>Tidak</button>
              </div>
            
            </div>
          </div>
        )}

        {showDeleteAllConfirmation && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-gray-200 dark:bg-gray-400 p-6 rounded-lg text-xl font-semibold border dark:border-gray-200">
              <h1 className='pb-4'>Apakah Anda yakin ingin menghapus semua kontak?</h1>
              <div className='flex gap-3 justify-end'>
                <button className='bg-gray-500 px-6 py-1 text-white border rounded-xl' onClick={handleDeleteAll}>Ya</button>
                <button className='bg-gray-500 px-3 p-1 text-white border rounded-xl' onClick={toggleDeleteAllConfirmation}>Tidak</button>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default Contacts