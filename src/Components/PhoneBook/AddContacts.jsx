import { useState } from "react";
import {RxCross2} from 'react-icons/rx'


export default function AddContacts ({ visible, onClose, onSave }) {
  const [ nama, setNama ] = useState("");
  const [ kontak, setKontak ] = useState("");
  const [error, setError] = useState("");
    if (!visible) return null;


    const handleFormSubmit = (event) => {
        event.preventDefault();
    
        const enteredNama = event.target.nama.value;
        const enteredKontak = event.target.kontak.value;

        if (!enteredNama || !enteredKontak) {
            setError("*Semua data harus diisi.");
            return;
          }
          const newContact = {
            nama: enteredNama,
            kontak: enteredKontak,
          };
          console.log(newContact)

          onSave(newContact);
          
          setNama("");
          setKontak("");
          onClose();
    };
    const handleInputChange = () => {
        setError("");
      };

  return (
    <div
        className="fixed inset-0 bg-black/60 flex justify-center items-center z-10">
            <div className="bg-white dark:bg-gray-500 p-6 rounded w-[400px] border">
                <div className="flex justify-between mx-3 text-xl text-gray-700 dark:text-gray-100">
                    <p>Add Contact</p>
                    <RxCross2 onClick={onClose} className="text-2xl"/>
            </div>
            <hr className="my-2 border-2"/>
            <form className="mx-4" onSubmit={handleFormSubmit}>
            <div className="flex flex-col py-2 text-lg">
            <label className="text-gray-700 dark:text-gray-100">Name</label>
            <input
              className="border p-2 rounded text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
              type="text"
              name="nama"
              placeholder="Masukkan nama kontak..."
              value={nama}
              onChange={(e) => {
              setNama(e.target.value);
              handleInputChange();
            }}
            />
          </div>
          <div className="flex flex-col py-2 text-lg">
            <label className="text-gray-700 dark:text-gray-100">Number</label>
            <input
              className="border p-2 rounded text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
              type="number"
              name="kontak"
              placeholder="Masukkan nomor..."
              value={kontak}
              onChange={(e) => {
              setKontak(e.target.value);
              handleInputChange();
            }}
            />
          </div>
          <hr className="my-2 border-2"/>
          <button className="border rounded w-full mt-5 mb-2 py-2 sm:py-3 bg-indigo-600 dark:bg-sky-500 hover:bg-indigo-500 hover:dark:bg-sky-400 text-white">
            Save
          </button>
          {error && <p className="text-red-500">{error}</p>}
          </form>
            </div>
    </div>
  )
}
