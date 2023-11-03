import React from 'react'
import { BsChatSquareTextFill, BsWhatsapp } from 'react-icons/bs'
import { IoMdWifi } from 'react-icons/io'
import { FaUserAstronaut } from 'react-icons/fa'

const Statistik = () => {
    const dataStatistik = [
        { id:1, h3:'Total Devices', h1:'1', p:'Your limit device: 10', icon: BsWhatsapp, backgroundColor: '#046af1' },
        { id:2, h3:'Blast/Bulk', h1:'0', p:'From 0 Campaigns', icon: IoMdWifi, backgroundColor: '#42de09' },
        { id:3, h3:'Subscription Status', h1:'lifetime', p:'Expired: -', icon: FaUserAstronaut, backgroundColor: '#f96100' },
        { id:4, h3:'All Messages Sent', h1:'0', p:'From messages histories', icon: BsChatSquareTextFill, backgroundColor: '#36c2fa' },
    ]
  
    return (
        <div className='max-w-[1500px] mx-auto'>
            <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center
            sm:ml-20 2xl:ml-0">
            {dataStatistik.map((data) => (
                <div key={data.id} className="w-[350px] sm:w-[300px] md:w-[320px] lg:w-[250px] xl:w-[300px] 2xl:w-[330px]
                max-h-[160px] md:max-h-[200px] rounded-xl bg-white dark:bg-gray-500 flex border-2 dark:border-gray-300 shadow-xl overflow-hidden">
                    <div className="flex flex-col justify-around ml-6 my-4">
                        <h3 className="text-xl my-2 text-gray-700 dark:text-gray-50">{data.h3}</h3>
                        <h1 className="text-2xl font-medium text-gray-700 dark:text-gray-50">{data.h1}</h1>
                        <p className="my-2 text-gray-700 dark:text-gray-50">{data.p}</p>
                    </div>
                    <div className="w-[70px] h-[70px] rounded-full m-auto flex border dark:border-gray-300"
                    style={{ backgroundColor: data.backgroundColor }}>
                        {React.createElement(data.icon, { size: 30, className: 'm-auto text-white' })}
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Statistik
