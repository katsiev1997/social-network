
const Setting = () => {
  return (
    <div className="w-full flex items-center justify-between border-b py-2 hover:bg-gray-100 cursor-pointer">
      <div className="flex h-12 gap-4 items-center">
        <div className="rounded cursor-pointer bg-red-400 w-10 h-10 flex justify-center items-center">
          N
        </div>
        <span className="text-gray-700">Push Notification</span>
      </div>
      <span className="text-gray-400 text-3xl">{">"}</span>
    </div>
  );
};

export default Setting;
