import { useState } from "react";
import { dataUser } from "../../data/dataUser";

const ChatBox = (props) => {

  const [visibleChat, setVisibleChat] = useState(8);
  const [showAll, setShowAll] = useState(false);


  const showMoreChat = () => {
    setVisibleChat (dataUser.length);
    setShowAll(true);
  };

  const showLessChat = () => {
    setVisibleChat(8);
    setShowAll(false);
  };
  
  return (
    <div className="mt-4 relative cursor-pointer">
        <div>
          {dataUser.slice(0, visibleChat).map((item) => (
          <div
          key={item.id}
          onClick={() => props.handleChatClick(item)}
          className=" ml-16 w-[300px] h-16 sm:w-[400px] md:w-[320px] lg:w-[400px] rounded-xl bg-gray-200 dark:bg-gray-500 flex border-4 shadow-md my-3">
            <img src={item.image} alt="" className="w-8 h-8 rounded-full my-auto mx-4"/>
            <div className="flex flex-col ml-6">
            <h1 className="text-xl font-medium dark:text-gray-50">{item.name}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-50">last Message</p>
            </div>
          </div>
          ))}
        </div>
        {dataUser.length > 8 && !showAll ? (
        <button onClick={showMoreChat} className="my-2 absolute right-4 underline text-gray-600 dark:text-gray-200">Lihat Semua Pesan</button>
          ) : null}
        {showAll ? (
        <button onClick={showLessChat} className="my-2 absolute right-4 underline text-gray-600 dark:text-gray-200">Batasi Pesan</button>
          ) : null}
    </div>
  )
}

export default ChatBox