import { useState } from "react";
import { AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom"
import DarkMode from "./DarkMode";



const HandleLogin = () => {
    const [showOption, setShowOption] = useState(false);
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedInUser"));
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
      setShowOption(!showOption)
  }
    
    const handleLogout = () => {
            setLoggedIn(false);
            localStorage.removeItem("loggedInUser");
            navigate('/');
    }

    function UserOption() {
      return (
          <div className='flex justify-end relative bg-white text-gray-600 dark:text-white'>
          <div className='w-36 flex flex-col bg-white dark:bg-gray-600 border-2 rounded-md shadow-lg absolute top-14 -right-8'>
            <Link to='/setting'>
              <div className='flex h-10 w-full justify-center pr-3 items-center cursor-pointer gap-2'>
                  <AiOutlineSetting />Setting
              </div></Link>
              <hr className='border-1'/>
              <div onClick={() => setShowLogoutConfirm(true)} className='flex h-10 w-full justify-center gap-1 pr-3 items-center cursor-pointer'>
                  <AiOutlineLogout />LogOut
              </div>
              <hr className='border-1'/>
              <div className='flex h- w-full justify-center cursor-pointer'>
                  <DarkMode />
              </div>
          </div>
          </div>
      )
    }
  return (
    <div className="flex text-[14px] lg:text-[20px]">
         {loggedIn ? (
                    <>
                        <img src="avatar.jpg" alt="" onClick={toggleMenu} className="w-10 h-10 bg-gray-400 rounded-full mx-2
                        dark:border dark:border-gray-200 cursor-pointer" />
                    </>
                ) : (
                    <>
                        <Link to='/register' className="hover:underline mx-3">Register</Link>
                        <Link to='/login' className="hover:underline mx-3">Login</Link>
                    </>
                )}
                {showOption && <UserOption/>}

{showLogoutConfirm && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-gray-200 dark:bg-gray-400 p-6 rounded-lg text-xl font-semibold border dark:border-gray-200">
              <h1 className='pb-4'>Apakah Anda yakin ingin keluar?</h1>
              <div className='flex gap-3 justify-end'>
                <button className='bg-gray-500 px-6 py-1 text-white border rounded-xl' onClick={handleLogout}>Ya</button>
                <button className='bg-gray-500 px-3 p-1 text-white border rounded-xl' onClick={() => setShowLogoutConfirm(false)}>Tidak</button>
              </div>
            
            </div>
          </div>
        )}

      </div>
  )
}

export default HandleLogin