import Head from "../Components/Head"
import Navbar from "../Components/Navbar"


const CreateCampaign = () => {
  return (
    <div>
        <Head />
        <Navbar/>
        <div className=" bg-gray-100 dark:bg-gray-400 h-screen">
            <div className="mx-auto max-w-[1450px]">
              <h1 className="pt-5 pb-10 text-4xl font-medium dark:text-gray-50 text-center">Whatsapp</h1>
                <div className="py-2 px-4 rounded-lg text-2xl my-5 ml-20 lg:ml-5 w-3/4 mx-auto">
                    Create Your Campaign
                </div>
                <div className="bg-white"> 
                    <div className="w-3/4 mx-auto">
                        <label>a</label>
                    </div>

                </div>
            
            </div>
            
        </div>
    </div>
  )
}

export default CreateCampaign