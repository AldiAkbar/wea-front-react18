import { AiOutlineCodeSandbox } from "react-icons/ai"
import DarkMode from "../DarkMode"
import { Link } from "react-scroll"

const Header = () => {
  return (
    <div className="max-w-screen h-20 flex sticky top-0 z-10 bg-gray-200 dark:bg-gray-600 px-2 sm:px-10 justify-between">
        <div className="flex items-center">
            <h1 className="text-4xl lg:text-5xl px-2">
                <span className="bg-gradient-to-r from-teal-500 via-purple-700 to-orange-400 bg-clip-text text-transparent">
                Chat</span>
                <span className="font-medium dark:text-gray-300">Apps</span>
            </h1>
            <AiOutlineCodeSandbox className="text-[28px] mb-6 dark:text-gray-300"/>
        </div>
        <nav className="xl:mr-20 2xl:mr-48">
            <ul className="hidden lg:flex text-2xl font-sans text-gray-600 dark:text-gray-200 h-full">
                <Link activeClass="active" spy='true' smooth='true' offset={-80} to="fitur"><li className="px-4 mt-6 cursor-pointer hover:border-b-4 hover:border-gray-400 hover:dark:border-gray-300 xl:mx-4 2xl:mx-6">Fitur</li></Link>
                <li className="px-4 mt-6 cursor-pointer hover:border-b-4 hover:border-gray-400 hover:dark:border-gray-300 xl:mx-4 2xl:mx-6">Solusi</li>
                <li className="px-4 mt-6 cursor-pointer hover:border-b-4 hover:border-gray-400 hover:dark:border-gray-300 xl:mx-4 2xl:mx-6">Resources</li>
                <li className="px-4 mt-6 cursor-pointer hover:border-b-4 hover:border-gray-400 hover:dark:border-gray-300 xl:mx-4 2xl:mx-6">Harga</li>
            </ul>
        </nav>
        <div className="flex gap-10">
            <div className="mt-1">
            <DarkMode />
            </div>
            <button className="h-12 sm:text-xl text-sky-500 border-2 border-sky-500 p-2 my-4 rounded-lg font-medium hover:text-white hover:bg-sky-500 transition-all duration-300">Hubungi Kami</button>

        </div>
        
    </div>
  )
}

export default Header
