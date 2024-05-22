import Menu from "../components/Menu";
import SearchInput from "../components/SearchInput";
import Setting from "../components/Setting";

const SettingsPage = () => {
  return (
    <div className="mt-10 gap-4 flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl">Settings</h1>
      <SearchInput />
      <div className="w-1/2">
        <Setting />
        <Setting />
        <Setting />
        <Setting />
        <Setting />
        <Setting />
        <Setting />
        <Setting />
        <Setting />
        <Setting />
        <Setting />
        <Setting />
        <Setting />
      </div>
      <Menu />
    </div>
  );
};

export default SettingsPage;
