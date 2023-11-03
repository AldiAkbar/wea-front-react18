import Navbar from "../Components/Navbar";
import ChatBox from "../Components/Chat/ChatBox";
import Message from "../Components/Chat/Message";
import { useState } from "react";
import { dataUser } from "../data/dataUser";
import Head from "../Components/Head";

const ChatRoom = () => {
  const initialSelectedUser = dataUser[0];
  const [selectedUser, setSelectedUser] = useState(initialSelectedUser);

  const handleChatClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <Head />
      <Navbar />
      <div className="bg-gray-100 dark:bg-gray-400 md:h-screen">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="py-5 text-4xl font-medium text-center dark:text-gray-50">
            Chat
          </h1>
          <div className="flex flex-col md:flex-row gap-10 md:mx-5 justify-center items-center">
            <ChatBox handleChatClick={handleChatClick} />
            <Message
              userImage={selectedUser.image}
              userName={selectedUser.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
