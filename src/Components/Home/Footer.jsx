import { AiOutlineCodeSandbox } from "react-icons/ai"
import { TfiYoutube } from "react-icons/tfi"
import { FaLinkedin, FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6"


const Footer = () => {
  return (
    <div className="max-w-screen">
      <div className="w-full dark:bg-gray-500">
        <div className="w-[90%] flex justify-between mx-auto py-2 text-sky-500 dark:text-sky-300">
            <AiOutlineCodeSandbox size={50} className="animate-spin-slow"/>
            <AiOutlineCodeSandbox size={50} className="animate-spin-slow"/>
        </div>
      </div>
        
        <hr className='border-1 border-gray-400 dark:border-gray-200'/>
        <div className="w-full bg-gray-200 dark:bg-gray-600">
          <div className="w-[40%] mx-auto flex justify-center md:justify-start">
            <h1 className="text-4xl lg:text-5xl pt-20">
                <span className="bg-gradient-to-r from-teal-500 via-purple-700 to-orange-400 bg-clip-text text-transparent
                ">Chat</span>
                <span className="font-medium dark:text-gray-200">Apps</span>
            </h1>
          </div>
                <div className="w-[60%] md:w-[70%] flex flex-col md:flex-row justify-evenly mx-auto pt-8 pb-40">
                    <div className="text-2xl text-gray-600 dark:text-gray-200 space-y-1">
                        <p className="mb-1 font-semibold block">WeA Gate</p>
                        <p className="block">Kp. Sukarasa</p>
                        <p className="block">Kec.Samarang, Kabupaten Garut</p>
                        <p className="block">Jawa Barat 44161</p>  
                    </div>
                    <div className="text-2xl text-gray-600 dark:text-gray-200 mt-14 md:mt-0">
                      <ul className="space-y-1">
                        <a href="/" className="block hover:underline cursor-pointer">Tentang Kami</a>
                        <a href="/" className="block hover:underline cursor-pointer">Blog</a>
                        <a href="/" className="block hover:underline cursor-pointer">Hubungi Kami</a>
                        <a href="/" className="block hover:underline cursor-pointer">FAQ</a>
                      </ul>
                    </div>
               </div>
          <div className="w-[85%] mx-auto pb-2">
            <div className="flex justify-end text-4xl gap-8 text-gray-700 dark:text-gray-200">
              <FaSquareInstagram className="cursor-pointer hover:-translate-y-2"/>
              <FaSquareXTwitter className="cursor-pointer hover:-translate-y-2"/>
              <TfiYoutube className="cursor-pointer hover:-translate-y-2"/>
              <FaSquareFacebook className="cursor-pointer hover:-translate-y-2"/>
              <FaLinkedin className="cursor-pointer hover:-translate-y-2"/>
            </div>
          </div>
          <div className="w-full bg-white dark:bg-gray-500 text-gray-600 dark:text-gray-200">
            <div className="w-[85%] mx-auto flex items-center justify-between py-6">
              <h1 className="text-2xl"> © Copyright 2023 Unofficial Whatsapp</h1>
              <div className="flex items-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl px-2">
                    <span className="bg-gradient-to-r from-teal-500 via-purple-700 to-orange-400 bg-clip-text text-transparent
                    ">Chat</span>
                    <span className="font-medium">Apps</span>
                </h1>
                <AiOutlineCodeSandbox className="text-[28px] mb-6"/>
              </div>
            </div> 
          </div>
          
        </div> 
    </div>
  )
}

export default Footer