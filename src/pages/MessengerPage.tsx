import Dialog from '../components/Dialog';
import Menu from '../components/Menu'
import SearchInput from '../components/SearchInput';

const MessengerPage = () => {
  return (
    <div className="mt-10 gap-4 flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl">Friends</h1>
      <SearchInput />
      <div className="w-1/2">
        <Dialog />
        <Dialog />
        <Dialog />
        <Dialog />
        <Dialog />
        <Dialog />
        <Dialog />
        <Dialog />
        <Dialog />
        <Dialog />
        <Dialog />
        <Dialog />
      </div>
      <Menu />
    </div>
  );
}

export default MessengerPage