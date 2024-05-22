import SearchInput from "../components/SearchInput";
import PostCard from "../components/PostCard";
import Menu from "../components/Menu";

const HomePage = () => {
  return (
    <div className="gap-4 flex flex-col justify-center items-center">
      <SearchInput />
      <PostCard />
      <PostCard />
      <PostCard />
      <Menu />
    </div>
  );
};

export default HomePage;
