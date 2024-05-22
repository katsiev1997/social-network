import SearchInput from "../components/SearchInput";
import PostCard from "../components/PostCard";

const HomePage = () => {
  return (
    <div className="h-screen gap-4 flex flex-col justify-center items-center">
      <SearchInput />
      <PostCard />
    </div>
  );
};

export default HomePage;
