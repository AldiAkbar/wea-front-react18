
import Navbar from "../Components/Navbar"
import Head from "../Components/Head"


const Setting = () => {
  return (
    <div>
        <Head />
        <Navbar />
        <div className="bg-gray-100 dark:bg-gray-400 h-screen">
            <div className="mx-auto max-w-[1360px]">
              <h1 className="pt-5 pb-16 text-4xl font-medium dark:text-gray-50 text-center">Setting</h1>
              <div className="p-4 border-2 shadow-xl rounded-lg text-xl text-gray-700 bg-gray-100
              dark:text-gray-200 dark:bg-gray-500 ml-20 xl:ml-0 mr-3 xl:mr-0">
                    <div className="flex flex-col max-w-[800px] mx-auto">
                        <div className="w-full flex mx-auto p-2 my-5 justify-between px-4">
                            <main className="py-2 px-4 border border-gray-300 rounded-l-xl
                            bg-gray-300 text-gray-800">API_Key</main>
                            <input type="text" className="w-full border-2 border-gray-300 py-2 px-3 placeholder:text-slate-400
                            focus:outline-none text-gray-700"/>
                            <button className="p-2 px-4 border border-gray-300 rounded-r-xl
                            bg-sky-400 hover:bg-sky-500 text-white">Generate</button>
                        </div>

                    </div>
                    <div className="max-w-[800px] h-15 mx-auto my-5">
                        <div className="flex flex-col p-4">
                            <label>Current Password</label>
                            <input type="text" className='border-2 border-gray-300 py-2 pl-3 mb-4 rounded-lg text-lg
                            placeholder:text-slate-400 focus:outline-none text-gray-700'/>
                            <label>New Password</label>
                            <input type="text" className='border-2 border-gray-300 py-2 pl-3 mb-4 rounded-lg text-lg
                            placeholder:text-slate-400 focus:outline-none text-gray-700'/>
                            <label>Confirm Password</label>
                            <input type="text" className='border-2 border-gray-300 py-2 pl-3 mb-10 rounded-lg text-lg
                            placeholder:text-slate-400 focus:outline-none text-gray-700'/>
                            <button className="bg-sky-400 hover:bg-sky-500 p-3 rounded-xl text-white font-medium
                            border-2 border-zinc-400 hover:border-zinc-300">Change Password</button>
                        </div>
                    </div>
                    
              </div>
            
          </div>
        </div>
    </div>
  )
}

export default Setting