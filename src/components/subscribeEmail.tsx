import { GrSend } from "react-icons/gr";

const SubscribeEmail = () => {
  return (
    <div className="w-full min-w-96 flex justify-between rounded-4xl pl-4 py-2 bg-[#263C28]">
      <input 
        type="text" 
        name="" 
        id="" 
        placeholder="Enter your email here..." 
        className="placeholder:text-[#FFFFFF80] outline-0 "
        />
      <button className="bg-primary-yellow h-12 w-12 rounded-full flex justify-center items-center mr-2">
        <GrSend color="#263c28" />
      </button>
    </div>
  );
};

export { SubscribeEmail };
