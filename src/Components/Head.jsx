import HandleLogin from "../Components/HandleLogin"
import { Link } from "react-router-dom"
import { AiOutlineCodeSandbox } from "react-icons/ai"

const Head = () => {
  return (
    <div className="flex justify-between  p-3 sticky top-0 z-10 bg-gray-300 dark:bg-gray-600 md:px-6 lg:px-10 py-4">
        <Link to='/dashboard' className="flex">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          <span className="bg-gradient-to-r from-teal-500 via-purple-700 to-orange-400 bg-clip-text text-transparent
          ">Chat</span>
          <span className="font-medium dark:text-gray-200">Apps</span>
        </h1>
        <AiOutlineCodeSandbox size='24px' className="dark:text-gray-200"/>
        </Link>
        <HandleLogin />
        </div>
  )
}

export default Head