import { useState } from 'react'
import { AiOutlineLogout, AiOutlineSetting } from 'react-icons/ai'
import {CgMenuGridR} from 'react-icons/cg'
import {RiSendPlane2Fill} from 'react-icons/ri'

function ChatMenu() {
    return (
        <div className='flex justify-end relative bg-white'>
        <div className='w-28 flex flex-col bg-white dark:bg-gray-500 border-2 rounded-md shadow-lg absolute'>
            <div className='flex h-10 w-full justify-between px-3 items-center dark:text-gray-50'>
                <AiOutlineSetting />Setting
            </div>
            <hr className='border-2'/>
            <div className='flex h-10 w-full justify-between px-3 items-center dark:text-gray-50'>
                <AiOutlineLogout />LogOut
            </div>
        </div>
        </div>
    )
}

export default function Message (props) {
    const [showMenu, setShowMenu] = useState(false);
    const [pesan, setPesan] = useState([]);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const scrollToBottomPsn = () => {
        let docH = document.body.scrollHeight
        console.info(docH)
        window.scrollTo(0, docH)
    }

    const handlePesan = (e) => {
        e.preventDefault()
        let psn = e.target.pesan.value
        if(!psn){
            return
        }
        e.target.pesan.value = ""
        setPesan([
            {
                id : Date.now(),
                pesan : psn,
                // createdAt : Date.now(),
            },
            ...pesan
        ])

        scrollToBottomPsn()
    }

  return (
    <div className="ml-16 md:ml-0 w-[300px] sm:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[1000px] flex flex-col 2xl:mt-[25px] rounded-xl overflow-hidden">
        <header className="h-16 px-3 flex items-center justify-between bg-gray-300
        dark:bg-gray-500">
            <div className="flex gap-5 items-center">
                <img src={props.userImage} alt="avatar" className="w-10 h-10 rounded-full"/>
                <h1 className="text-xl dark:text-gray-50">{props.userName}</h1>
            </div>
            <CgMenuGridR className='text-2xl dark:text-gray-100' onClick={toggleMenu}/>
        </header>
        {showMenu && <ChatMenu/>}
        <div className="w-full h-[460px] flex flex-col bg-white dark:bg-gray-300 py-4 px-3 gap-3 overflow-y-scroll bg-fixed"
        style={{ flexDirection: 'column-reverse'}}>
           {pesan.map((e) => {
            return (
                <div className='w-auto p-3 bg-gray-200 flex flex-col rounded-lg shadow-md
                max-w-[40%] ml-auto' key={e.id}>
                    <p className='text-'>{e.pesan}</p>
                </div>
            )
           })} 
            
        </div>

        <form className="h-16 flex px-2 items-center bg-gray-300 dark:bg-gray-500 gap-2" onSubmit={handlePesan}>
            <input type="text" className="w-full rounded-full bg-white h-10 flex-1 focus:outline-none pl-6"
            id='pesan'/>
            <button className="bg-sky-500 text-white p-3 rounded-full text-lg">
                <RiSendPlane2Fill/>
            </button>
        </form>
    </div>
  )
}