import { Link } from "react-router-dom"


const Face = () => {
  return (
    <div className="max-w-screen max-h-screen">
    <div className="w-full flex flex-col lg:flex-row-reverse dark:bg-gray-500">
        <div className="lg:w-[40%] xl:w-[50%] mt-10 lg:mt-0">
            <img src="/chatbot.png" alt="" className="w-60 sm:w-64 md:w-72 lg:w-[80%] xl:w-[60%] lg:mt-32 mx-auto opacity-80 hover:scale-105 transition-all duration-300"/>
        </div>
        <div className="lg:w-[60%] xl:w-[50%] flex flex-col px-3 sm:px-5 lg:px-12 mt-16 lg:mt-20">
            <h1 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-100 font-[400] mb-10 xl:mb-20">Fitur terbaik dari kami untuk anda
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-sky-700 dark:text-sky-400 mb-2">Aplikasi WeA Gate
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-sky-700 dark:text-sky-400 xl:mb-20">yang didukung fitur-fitur terbaik
            </h1>
            <h1 className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-200 font-[400] mt-10">
            Perluas jangkauan interaksi perpesanan anda menggunakan Whatsapp API
            </h1>
            <h1 className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-200 font-[400] mb-10 xl:mb-0">Dengan WeA Gate anda dapat mengirimkan pesan bisnis, notifikasi, dan pesan pemasaran langsung ke tangan pelanggan Anda.</h1>   
        </div>


    </div>
    <div className="flex gap-5 pl-3 sm:pl-5 pt-10 pb-10 xl:pl-12 xl:pt-6 dark:bg-gray-500">
                <Link to='/register'>
                    <button className="xl:text-xl text-sky-500 border-2 border-sky-500 dark:bg-gray-300
                    py-3 px-5 rounded-lg font-medium hover:text-white hover:bg-sky-500
                    hover:dark:bg-sky-500 transition-all duration-300">Register</button>
                </Link>
                <Link to='/login'>
                    <button className="xl:text-xl hover:text-sky-500 border-2 dark:border-gray-400 hover:border-sky-500
                    py-3 px-8 rounded-lg font-medium text-white bg-sky-500 hover:bg-white
                    hover:dark:bg-gray-300 transition-all duration-300">Login</button>
                </Link>
            </div>
    </div>
  )
}

export default Face