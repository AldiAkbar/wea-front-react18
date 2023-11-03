import { useState } from 'react';
import { Link } from 'react-router-dom'
import {TbFileTime} from 'react-icons/tb'
import {BsArrowRightShort} from 'react-icons/bs'
import { MdOutlineQuickreply} from 'react-icons/md'
import { IoMdContacts } from 'react-icons/io'
import {HiChatAlt2} from 'react-icons/hi'
import { AiFillApi } from 'react-icons/ai';
import { PiDiamondsFourDuotone } from 'react-icons/pi';

const Fitur = () => {
    const [hoveredCard, setHoveredCard] = useState(false);

    const dataFitur =
    [
        {
            id: 1,
            judul : 'Auto Reply',
            deskripsi : 'Memungkinkan Anda mengirim balasan otomatis ketika orang menulis ke nomor Anda dengan keyword tertentu. ',
            icon : MdOutlineQuickreply,
            defaultIconColor: 'text-gray-500',
            hoverIconColor: 'text-sky-400',
            link : '/',
        },
        {
            id: 2,
            judul : 'Scheduler',
            deskripsi : 'Buat Pesan sekarang kirimnya nanti, semua bisa di jadwalkan kapan anda kirim sesuai waktu yang ditentukan.',
            icon : TbFileTime,
            defaultIconColor: 'text-gray-500',
            hoverIconColor: 'text-green-500',
            link : '/',
        },
        {
            id: 3,
            judul : 'Contact / Group',
            deskripsi : 'Management nomor kontak dan data Group baik dari Whatsapp Anda ataupun kontak / Group diluar Whatsapp Anda.',
            icon : IoMdContacts,
            defaultIconColor: 'text-gray-500',
            hoverIconColor: 'text-teal-400',
            link : '/',
        },
        {
            id: 4,
            judul : 'Live Chat',
            deskripsi : 'Layanan yang memungkinkan untuk menjawab semua pertanyaan, keluhan, permintaan secara real time oleh CS / Team Anda secara bersamaan dalam halaman Web.',
            icon : HiChatAlt2,
            defaultIconColor: 'text-gray-500',
            hoverIconColor: 'text-indigo-400',
            link : '/',
        },
        {
            id: 5,
            judul : 'REST API',
            deskripsi : 'Memudahkan anda untuk integrasikan WeA Gate dengan Web / Aplikasi yang anda buat.',
            icon : AiFillApi,
            defaultIconColor: 'text-gray-500',
            hoverIconColor: 'text-violet-600',
            link : '/',
        },
        {
            id: 6,
            judul : 'Other Fitur',
            deskripsi : 'Dan temukan fitur lain yang tentunya mempermudah bisnis anda',
            icon : PiDiamondsFourDuotone,
            defaultIconColor: 'text-gray-500',
            hoverIconColor: 'text-blue-600',
            link : '/',
        },
    ];

  return (
    <div id='fitur' className="max-w-screen text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 text pb-10">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-[500] mb-4 xl:mb-10 pt-16">Fitur Utama WeA Gate
        </h1>
        <h1 className="text-center text-[20px] sm:text-[22px] md:text-[24px] xl:text-[26px] font-[400] mb-24">Kami berikan fitur terbaik untuk anda
        </h1>
        <div className='max-w-[1640px] m-auto px-4 py-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6 pt-4 justify-items-center mx-auto'>
            {dataFitur.map((item, index) => ( 
                <div 
                key={index}
                className='max-w-[380px] h-[380px] sm:h-[400px] md:h-[440px] xl:h-[500px] flex flex-col border shadow-lg rounded-tr-[40px] rounded-bl-[40px] hover:scale-105 duration-300 p-4
                bg-white relative dark:bg-gray-800'
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                <item.icon className={`text-6xl mt-5 ml-4 ${hoveredCard === item.id ? item.hoverIconColor : item.defaultIconColor}`}/>
                <h1 className='text-3xl font-[500] my-5'>{item.judul}</h1>
                <p className='text-xl'>{item.deskripsi}</p>
                <Link to={item.link} className='flex absolute bottom-5 right-5 hover:underline hover:text-teal-600
                hover:dark:text-teal-300'>Pelajari lebih lanjut <BsArrowRightShort
                className='mt-1'/></Link>
            </div>
            ))}
        </div>
    </div>
    
  )
}

export default Fitur