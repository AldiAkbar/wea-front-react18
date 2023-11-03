import { useState } from "react";
import {RxCross2} from 'react-icons/rx'
import { useNavigate } from "react-router-dom";

export default function Modal ({ visible, onClose, onSave }) {
  const [ nohp, setNohp ] = useState("");
  const [ webhook, setWebhook ] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

    if (!visible) return null;

    const handleFormSubmit = (event) => {
        event.preventDefault();
    
        const enteredNohp = event.target.nohp.value;
        const enteredWebhook = event.target.webhook.value;

        if (!enteredNohp || !enteredWebhook) {
            setError("*Semua data harus diisi.");
            return;
          }
          const newNumber = {
            number: enteredNohp,
            webhook: enteredWebhook,
            status: 'Connected',
          };
          console.log(newNumber)

          onSave(newNumber);
          
          setNohp("");
          setWebhook("");
          onClose();
          navigate('/dashboard/scan');
    };
    const handleInputChange = () => {
        setError("");
      };

  return (
    <div
        className="fixed z-10 inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white dark:bg-gray-500 p-6 rounded w-[400px] border">
                <div className="flex justify-between mx-3 text-xl text-gray-700 dark:text-gray-100">
                    <p>Add Device</p>
                    <RxCross2 onClick={onClose} className="text-2xl"/>
            </div>
            <hr className="my-2 border-2"/>
            <form className="mx-4" onSubmit={handleFormSubmit}>
            <div className="flex flex-col py-2 text-lg">
            <label className="text-gray-700 dark:text-gray-100">Number</label>
            <input
              className="border p-2 rounded text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
              type="number"
              name="nohp"
              placeholder="Masukkan nomor handphone..."
              value={nohp}
              onChange={(e) => {
              setNohp(e.target.value);
              handleInputChange();
            }}
            />
            <p className="text-sm text-red-500">*Use Country Code ( without + )</p>
          </div>
          <div className="flex flex-col py-2 text-lg">
            <label className="text-gray-700 dark:text-gray-100">Link Webhook</label>
            <input
              className="border p-2 rounded text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
              type="text"
              name="webhook"
              placeholder="Masukkan link webhook..."
              value={webhook}
              onChange={(e) => {
              setWebhook(e.target.value);
              handleInputChange();
            }}
            />
            <p className="text-sm text-red-500">*Opsional</p>
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
