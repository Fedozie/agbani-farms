import { IoIosWarning } from "react-icons/io";

type ResponseProp = {
  text: string;
};

const ErrorResponse = ({ text }: ResponseProp) => {
  return (
    <div className="h-auto w-auto max-lg:p-8  lg:w-[50%] lg:min-h-50 bg-red-200/50 text-red-400 text-base lg:text-2xl rounded-2xl border-2 border-red-400 flex justify-center items-center gap-4">
      <IoIosWarning />
      {text}
    </div>
  );
};

export { ErrorResponse };