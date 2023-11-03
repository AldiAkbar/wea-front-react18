import { useState } from 'react';
import {RxCross2} from 'react-icons/rx'
import {BiSolidImageAdd} from 'react-icons/bi'


export default function Modal ({ visible, onClose }) {
    const [selectedMessageType, setSelectedMessageType] = useState('');
    const [selectKeywoardType, setSelectKeywoardType] = useState('');
    const [selectedSenderType, setSelectedSenderType] = useState('');

    if (!visible) return null;


    const handleFormSubmit = (event) => {
        event.preventDefault();
    }
    const handleMessageTypeChange = (event) => {
        setSelectedMessageType(event.target.value);
    };
    const handlekeyWoardTypeChange = (event) => {
        setSelectKeywoardType(event.target.value);
    }
    const handleSenderTypeChange = (event) => {
        setSelectedSenderType(event.target.value);
    };

  return (
    <div
        className="fixed inset-0 bg-black/70 flex justify-center items-center z-10 overflow-y-scroll pt-44">
            <div className="bg-white p-5 rounded-xl max-w-screen-lg w-full mx-10">
                <div className="flex justify-between mx-3 text-xl text-gray-700">
                    <p>Add Auto Reply</p>
                    <RxCross2 onClick={onClose} className="text-2xl"/>
                </div>
                <hr className="my-2 border-2"/>
                <form className="mx-4 text-lg" onSubmit={handleFormSubmit}>
                    <div className="flex flex-col py-2">
                        <label>Whatsapp Account</label>
                        <input
                            className="border p-2 rounded text-lg placeholder:text-slate-400
                            focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
                            type="text"
                            name="text"
                        />
                    </div>
                    <label>Type keyword</label>
                    <div className='flex gap-4 m-2 text-gray-600'>
                        <div className='flex gap-1'>
                            <input 
                            type="checkbox" 
                            value="equal"
                            checked={selectKeywoardType === 'equal'}
                            onChange={handlekeyWoardTypeChange}
                            className='w-4'
                            />
                            <p>Equal</p>
                        </div>
                        <div className='flex gap-1'>
                            <input 
                            type="checkbox"
                            value="contains"
                            checked={selectKeywoardType === 'contains'}
                            onChange={handlekeyWoardTypeChange}
                            className='w-4'
                            />
                            <p>Contains</p>
                        </div>  
                    </div>
                    <label>Only reply when sender is</label>
                    <div className='flex gap-4 m-2 text-gray-600'>
                        <div className='flex gap-1'>
                            <input
                            type="checkbox" 
                            value="group"
                            checked={selectedSenderType === 'group'}
                            onChange={handleSenderTypeChange}
                            className='w-4'
                            />
                            <p>Group</p>
                        </div>
                        <div className='flex gap-1'>
                            <input 
                            type="checkbox" 
                            value="personal"
                            checked={selectedSenderType === 'personal'}
                            onChange={handleSenderTypeChange}
                            className='w-4'
                            />
                            <p>Personal</p>
                        </div>  
                        <div className='flex gap-1'>
                            <input
                            type="checkbox" 
                            value="all"
                            checked={selectedSenderType === 'all'}
                            onChange={handleSenderTypeChange}
                            className='w-4'
                            />
                            <p>All</p>
                        </div>  
                    </div>
                    <div className="flex flex-col py-2">
                        <label>Keyword</label>
                        <input
                            className="border p-2 rounded text-lg placeholder:text-slate-400
                            focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
                            type="text"
                            name="text"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label>Type Reply</label>
                        <select name="Type Reply"
                                onChange={handleMessageTypeChange}
                                value={selectedMessageType}
                                className='border text-lg text-slate-800 p-2 rounded placeholder:text-slate-400
                            focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500'>
                            <option value="" className='bg-slate-600 text-white'>Select One</option>
                            <option value="text">Text Message</option>
                            <option value="image">Image Message</option>
                            <option value="button">Button Message</option>
                            <option value="template">Template Message</option>
                            <option value="list">List Message</option>
                    </select>
                    </div>
                    {selectedMessageType === 'text' && (
                        <div className='flex flex-col'>
                            <h1 className='py-2'>Text Message</h1>
                            <textarea name="text" id="" rows="4"
                            className="border border-gray-300 p-3 rounded text-lg placeholder:text-slate-400
                            focus:outline-none" />
                        </div>
                        )}
                    {selectedMessageType === 'image' && (
                        <div className='flex flex-col'>
                            <h1 className='py-2'>Image</h1>
                            <div className='flex'>
                                <button className='flex bg-blue-600 text-white py-2 px-4 rounded-l-lg'>
                                    <BiSolidImageAdd size={26}/>Choose
                                </button>
                                <input type="text" className='w-auto border border-gray-300 p-2 rounded text-lg placeholder:text-slate-400
                                    focus:outline-none text-gray-700'/>
                            </div>
                            <h1 className='py-2'>Caption</h1>
                            <textarea name="text" id="" rows="2"
                            className="border border-gray-300 p-3 rounded text-lg placeholder:text-slate-400
                            focus:outline-none text-gray-700" />
                        </div>
                        )}
                    {selectedMessageType === 'button' && (
                        <div className='flex flex-col'>
                            <h1 className='py-2'>Message</h1>
                            <textarea name="text" id="" rows="2"
                            className="border border-gray-300 p-3 rounded text-lg placeholder:text-slate-400
                            focus:outline-none text-gray-700" />
                            <h2 className='py-2'>Footer message *optional</h2>
                            <input type="text" className='border border-gray-300 p-2 rounded text-lg placeholder:text-slate-400
                                focus:outline-none text-gray-700'/>
                            <h2 className='py-2'>Image *optional</h2>
                            <div className='flex'>
                                <button className='flex bg-blue-600 text-white py-2 px-4 rounded-l-lg'>
                                    <BiSolidImageAdd size={26}/>Choose
                                </button>
                                <input type="text" className='w-auto border border-gray-300 p-2 rounded text-lg placeholder:text-slate-400
                            focus:outline-none text-gray-700'/>
                            </div>
                            <div className='flex gap-3 my-4'>
                                <button className='bg-blue-600 px-3 py-1 rounded-lg text-white'>Add Button</button>
                                <button className='bg-orange-600 px-3 py-1 rounded-lg text-white'>Reduce Button</button>
                            </div>
                           
                        </div>
                        )}
                    {selectedMessageType === 'template' && (
                        <div className='flex flex-col'>
                            <h1 className='py-2'>Message</h1>
                            <textarea name="text" id="" rows="2"
                            className="border border-gray-300 p-3 rounded text-lg placeholder:text-slate-400
                            focus:outline-none text-gray-700" />
                            <h2 className='py-2'>Footer message *optional</h2>
                            <input type="text" className='border border-gray-300 p-2 rounded text-lg placeholder:text-slate-400
                                focus:outline-none text-gray-700'/>
                            <h2 className='py-2'>Image *optional</h2>
                            <div className='flex'>
                                <button className='flex bg-blue-600 text-white py-2 px-4 rounded-l-lg'>
                                    <BiSolidImageAdd size={26}/>Choose
                                </button>
                                <input type="text" className='w-auto border border-gray-300 p-2 rounded text-lg placeholder:text-slate-400
                            focus:outline-none text-gray-700'/>
                            </div>
                            <h2 className='pb-1'>Template Button <span className='text-gray-500'> *Minimum 1 template button</span></h2>
                            <div className='flex gap-3 my-2'>
                                <button className='bg-blue-600 px-3 py-1 rounded-lg text-white'>Add Button</button>
                                <button className='bg-orange-600 px-3 py-1 rounded-lg text-white'>Reduce Button</button>
                            </div>
                            <div className='text-[17px] text-gray-600'>
                                <p>Template = Button Link or button call message,</p>
                                <p>if you want to send Call button you can fill like this : call|YourText|Yournumber</p>
                                <p>if you want to send Link button, you can fill like this : url|YourText|YourLink</p>
                                <p>type only have two value, url and call !</p>
                            </div>
                            <label className='text-lg'>Template 1</label>
                            <input
                            type="text"
                            defaultValue="type|text|linkornumber"
                            className='border border-gray-300 p-2 rounded text-lg placeholder:text-slate-400
                                focus:outline-none text-gray-700'/>
                        </div>
                        )}
                        {selectedMessageType === 'list' && (
                        <div className='flex flex-col'>
                            <h1 className='py-2'>Message</h1>
                            <textarea name="text" id="" rows="2"
                            className="border border-gray-300 p-3 rounded text-lg placeholder:text-slate-400
                            focus:outline-none text-gray-700" />
                            <h2 className='py-2'>Button</h2>
                            <input type="text" className='border border-gray-300 p-2 rounded text-lg placeholder:text-slate-400
                            focus:outline-none text-gray-700'/>
                            <h2 className='py-2'>Name List</h2>
                            <input type="text" className='border border-gray-300 p-2 rounded text-lg placeholder:text-slate-400
                            focus:outline-none text-gray-700'/>
                            <h2 className='py-2'>Title List</h2>
                            <input type="text" className='border border-gray-300 p-2 rounded text-lg placeholder:text-slate-400
                            focus:outline-none text-gray-700'/>
                            <div className='flex gap-3 my-2'>
                                <button className='bg-blue-600 px-3 py-1 rounded-lg text-white'>Add List</button>
                                <button className='bg-orange-600 px-3 py-1 rounded-lg text-white'>Reduce List</button>
                            </div>
                        </div>
                        )}
                    <hr className="my-2 border-2"/>
                    <div className='flex gap-2 justify-end'>
                        <button className="border px-4 rounded-lg w-40px mt-5 mb-2 py-2 bg-blue-600 hover:bg-blue-500 text-white">
                        Add
                        </button>
                        <button
                        onClick={onClose}
                        className="border px-3 rounded-lg w-40px mt-5 mb-2 py-2 bg-gray-500 hover:bg-gray-500 text-white">
                        Close
                        </button>
                    </div>
                    
                </form>
            </div>
    </div>
  )
}
