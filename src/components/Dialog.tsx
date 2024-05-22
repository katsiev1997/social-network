const Dialog = () => {
  return (
    <div className="w-full flex items-center justify-between border-b py-2 hover:bg-gray-100 cursor-pointer">
      <div className="flex h-16 gap-4 items-center">
        <div className="rounded-full cursor-pointer bg-red-400 w-10 h-10 flex justify-center items-center">
          H
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-xl">Hurin Seary</span>
          <span className="text-gray-400">Whats up? How are you?</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="bg-blue-400 rounded-full w-8 h-8 text-white flex justify-center items-center font-semibold cursor-pointer">
          3
        </div>
        <span className="text-blue-400 text-xs">04:22 PM</span>
      </div>
    </div>
  );
};

export default Dialog;
