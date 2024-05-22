
const Contact = () => {
  return (
    <div className="w-full flex items-center justify-between border-b py-2">
      <div className="flex h-16 gap-4 items-center">
        <div className="rounded-full cursor-pointer bg-red-400 w-10 h-10 flex justify-center items-center">
          H
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-xl">Hurin Seary</span>
          <span className="text-gray-400">Whats up? How are you?</span>
        </div>
      </div>
      <div className="bg-orange-400 rounded-full px-5 py-1 cursor-pointer">Follow</div>
    </div>
  );
};

export default Contact;
