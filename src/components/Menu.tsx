import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="fixed mx-auto bottom-10 flex justify-center z-40">
        <Link to="/">
          <img className="w-12 " src="/plus.svg" alt="plus" />
        </Link>
      </div>
      <div className="flex px-10 bottom-0 left-0 justify-around fixed w-full items-center h-24 bg-white z-10">
        <Link to="/search">
          <img className="w-8" src="/search.svg" alt="search" />
        </Link>
        <Link to="/profile">
          <img className="w-8" src="/person.svg" alt="person" />
        </Link>
        <Link to="/messenger">
          <img className="w-8" src="/message.svg" alt="message" />
        </Link>
          <Link to="/settings">
            <img className="w-8" src="/settings.svg" alt="settings" />
          </Link>
      </div>
    </>
  );
};

export default Menu;
