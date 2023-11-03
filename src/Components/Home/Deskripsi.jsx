import { AiOutlineCodeSandbox } from 'react-icons/ai'
import {FaPhoneAlt} from 'react-icons/fa'

const Deskripsi = () => {
  return (
    <div className='max-w-screen dark:bg-gray-500 pt-32'>
    <div className="w-full flex flex-col xl:flex-row justify-center">
        
        <div className="xl:w-[45%] text-2xl p-6 mb-10 xl:border-r-2 border-b-2 border-cyan-500 dark:border-cyan-300">
          <h2  className='font-medium mb-8 dark:text-gray-50'>Mengapa harus WeA Gate ?</h2>
          <h3 className='text-gray-600 dark:text-gray-200 mb-10'>Selain fitur diatas kami juga memberikan layanan yang terbaik</h3>
          <ul className='text-gray-600 dark:text-gray-200'>
            <li className='flex flex-col mb-4'><strong>Server 24 Jam</strong>Kami telah bekerja sama dengan salah satu provider server terbaik indonesia.</li>
            <li className='flex flex-col mb-4'><strong>Customer Service</strong>Kami siap membantu anda jika ada kendala pada layanan kami.</li>
            <li className='flex flex-col mb-4'><strong>Auto Backup</strong>Demi keamanan dan menghindari hal yang tidak diinginkan, kami selalu melakukan Auto Backup database.</li>
            <li className='flex flex-col mb-4'><strong>Keamananta</strong>Kami selalu menjaga data privasi setiap pelanggan yang berada di server kami.</li>
            <li className='flex flex-col mb-4'><strong>Flexibel</strong>WeA Gate dirancang sesimple mungkin untuk memudahkan penggunaan baik oleh pengguna pemula ataupun competent.</li>
            <li className='flex flex-col mb-4'><strong>Uptodate</strong>Untuk memaksimalkan pengiriman / meminimalisir down saat pengiriman pesan, kami upayakan untuk menggunakan teknologi terbaru.</li> 
          </ul>
        </div>
        <div className="xl:w-[35%] border-t-2 border-cyan-500 dark:border-cyan-300 p-6 text-2xl relative mb-16 xl:mb-0">
            <h2  className='font-medium mb-8 dark:text-gray-50'>Bagaimana untuk memulai ?</h2>
            <h3 className='text-gray-600 dark:text-gray-200 mb-10'>Anda dapat mudah menghubungkan Whatsapp anda dengan WeA Gate.</h3>
            <ul className='text-gray-600 dark:text-gray-200'>
              <li className='flex flex-col mb-4'><strong>Create An Account</strong>Silahkan klik register dan aktivasi email anda</li>
              <li className='flex flex-col mb-4'><strong>Create An Account</strong>Silahkan tambah device untuk akun Whatsapp Anda</li>
              <li className='flex flex-col mb-4'><strong>Scan QR Code</strong>Lakukan Scan QR Code </li>
              <li className='flex flex-col mb-4'><strong>Start using Wablas</strong>Sekarang Anda dapat menggunakan WeA Gate, memulai percakapan dan mengatur pesanan Anda</li> 
            </ul>
            <h2 className='mt-24 text-gray-700 dark:text-gray-100'>Already have a Wablas account? </h2>
            <h2 className='text-[22px] text-gray-600 dark:text-gray-200'>you can connect to the latest version easily.</h2>
            <button className='text-xl px-3 py-2 border dark:border-gray-400 rounded-lg bg-sky-400 text-white
            hover:text-sky-500 hover:bg-white hover:border-sky-500 active:scale-105
            transition-all duration-300 mt-4 absolute xl:right-0 xl:mt-12 2xl:mt-8'>Register Now</button>
        </div>
    </div>
    <div className='w-[87%] mt-8 mb-32 mx-auto border border-cyan-500 dark:border-cyan-300 rounded-lg py-10'>
      <div className='w-[60%] mx-auto py-4 text-center'>
        <AiOutlineCodeSandbox size={90} className='mx-auto text-sky-500 dark:text-sky-300 mb-6 animate-spin-slow'/>
        <h1 className='text-6xl font-medium mb-6 text-gray-900 dark:text-gray-100'>Tunggu apa lagi?</h1>
        <h3 className='text-2xl text-gray-800 dark:text-gray-200 mb-2'>Selesaikan lebih banyak dan kembangkan bisnis Anda lebih cepat bersama</h3>
        <h3 className='text-4xl text-gray-800 dark:text-gray-200 mb-16'>WeA Gate</h3>
        <button className='flex text-xl gap-1 px-3 py-2 border dark:border-gray-300 rounded-lg bg-sky-400 text-white
            hover:text-sky-500 hover:bg-white hover:border-sky-500 active:scale-105
            transition-all duration-300 mx-auto'><FaPhoneAlt size={24}/>Hubungi Kami</button>
      </div>       
    </div>
    <hr className='border-1 border-gray-400 dark:border-gray-200'/>
    </div>
  )
}

export default Deskripsi