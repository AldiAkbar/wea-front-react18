import Navbar from "../Components/Navbar"
import Head from "../Components/Head"


const ScanQR = () => {
  return (
    <div>
        <Head />
        <Navbar/>
        <div className=" bg-gray-100 dark:bg-gray-400 h-screen">
            <div className="max-w-[1440px] mx-auto">
              <h1 className="ml-24 2xl:ml-0 pt-5 pb-10 text-2xl font-medium dark:text-gray-50">Whatsapp Account</h1>
              <div className="flex flex-col lg:flex-row justify-center gap-4 text-lg lg:ml-24 lg:mr-10 2xl:ml-0 2xl:mr-0">
                <div className="ml-24 mr-8 lg:ml-0 lg:mr-0 bg-white dark:bg-gray-300 p-4 border-4 shadow-xl rounded-lg lg:w-[60%] 2xl:w-[65%]">
                  <button className="bg-red-500 text-white py-2 px-3 rounded-lg ml-3 mb-1 mt-5">Logout</button>
                  <hr className="my-5 border-2 dark:border-gray-400"/>
                  <img src="/qr.jpg" alt="scan" className="w-[450px] mx-auto"/>
                  <h1 className="text-3xl text-center mb-3 text-zinc-700">Scan QR</h1>
                </div>
                <div className="ml-24 mr-8 lg:ml-0 lg:mr-0 bg-white dark:bg-gray-300 p-4 border-4 shadow-xl rounded-lg lg:w-[40%] 2xl:w-[35%]">
                  <h1 className="text-2xl m-7 font-medium">Whatsapp Info</h1>
                  <hr className="my-5 border-2 dark:border-gray-400"/>
                  <div className="flex flex-col text-xl mx-6 text-zinc-600">
                    <h2>Nama :</h2><hr className="my-5 border-2 dark:border-gray-400"/>
                    <h2>Number :</h2><hr className="my-5 border-2 dark:border-gray-400"/>
                    <h2> Device/ Token :</h2><hr className="my-5 border-2 dark:border-gray-400"/>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default ScanQR