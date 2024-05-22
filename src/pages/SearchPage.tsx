import Contact from "../components/Contact";
import Menu from "../components/Menu";
import SearchInput from "../components/SearchInput";

const SearchPage = () => {
  return (
    <div className="mt-10 gap-4 flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl">Friends</h1>
      <SearchInput />
      <div className="w-1/2">
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      </div>
      <Menu />
    </div>
  );
};

export default SearchPage;
