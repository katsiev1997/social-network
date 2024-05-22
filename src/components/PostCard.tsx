const PostCard = () => {
  return (
    <div className=" bg-white border py-2 px-5 border-gray-200 rounded-3xl max-w-3xl w-full">
      <div className="w-full flex items-center justify-between">
        <div className="flex h-16 gap-4 items-center">
          <div className="rounded-full bg-orange-400 w-10 h-10 flex justify-center items-center">
            E
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">Edward Kelly</span>
            <span className="text-gray-400">2 hours ago</span>
          </div>
        </div>
        <img
          className="w-6 cursor-pointer"
          src="/ellipsis_menu.svg"
          alt="ellipsis_menu"
        />
      </div>
      <p className="text-gray-500">
        Implementaion of technologies to store unchangeable data based specific.
      </p>
      <img
        className="rounded-md w-full"
        src="https://uitheme.net/cube/images/post-4.jpg"
        alt="image"
      />
      <div className="flex justify-between">
        <div className="flex gap-4 items-center h-10">
          <div className="flex gap-2 items-center cursor-pointer">
            <img className="w-6" src="/like.svg" alt="like" />
            <span>1294</span>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <img className="w-5" src="/comment.svg" alt="comment" />
            <span>42</span>
          </div>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <img className="w-5" src="/share.svg" alt="share" />
          <span>15</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
