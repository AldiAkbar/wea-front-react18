import { useState } from "react";
import ModalReply from "../Components/AutoReply/ModalReply";
import Head from "../Components/Head";
import Navbar from "../Components/Navbar";
import ListAutoRespon from "../Components/AutoReply/ListAutoRespon";

const AutoReply = () => {
  const [showModalReply, setShowModalReply] = useState(false);

  const handleOnClose = () => setShowModalReply(false);

  return (
    <div>
      <Head />
      <Navbar />
      <div className=" bg-gray-100 dark:bg-gray-400 h-screen">
        <div className="mx-auto max-w-[1450px]">
          <h1 className="py-5 text-4xl font-medium dark:text-gray-50 text-center">
            Whatsapp
          </h1>
          <button
            onClick={() => setShowModalReply(true)}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg text-lg my-5 border ml-20 lg:ml-5"
          >
            + New Auto Reply
          </button>
          <ListAutoRespon />
        </div>
        <ModalReply onClose={handleOnClose} visible={showModalReply} />
      </div>
    </div>
  );
};

export default AutoReply;
