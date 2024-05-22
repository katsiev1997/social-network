import Menu from "../components/Menu";
import PostCard from "../components/PostCard";

const ProfilePage = () => {
  return (
    <div className="mt-10 gap-4 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Profile</h1>
      <div className="w-full max-w-3xl border border-gray-300 shadow-lg rounded-lg p-5">
        <div className="flex flex-col items-center gap-2">
          <h4 className="font-semibold text-xl">Alice Maghyn</h4>
          <p className="text-gray-500">@california</p>
          <div className="flex gap-4">
            <div className="rounded-full w-10 h-10 cursor-pointer bg-blue-700 text-white flex justify-center items-center font-bold">
              f
            </div>
            <div className="rounded-full w-10 h-10 cursor-pointer bg-red-700 text-white flex flex-col justify-center items-center font-semibold">
              P
            </div>
            <div className="rounded-full bg-orange-500 text-white py-2 px-4 cursor-pointer uppercase flex justify-center font-semibold">
              follow
            </div>
          </div>
        </div>
      </div>

      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <Menu />
    </div>
  );
};

export default ProfilePage;
