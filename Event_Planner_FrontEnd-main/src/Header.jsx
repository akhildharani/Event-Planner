import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import Location from "./Location";
import { useAuth } from "./AuthProvider";

const Header = ({ name }) => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="flex flex-wrap md:flex-nowrap justify-between items-center py-3 px-6 bg-gradient-to-r from-blue-800 to-cyan-500">
      <div className="flex items-center">
        <div className="text-4xl text-white">
          <b>Event Planner</b>
        </div>
      </div>

      <Location />

      <div className="flex items-center space-x-4">
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute w-12 h-12 text-white -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="avatar.svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="font-medium text-white">
          <div>{name}</div>
        </div>
      </div>
      <button
        className="rounded-lg text-white text-lg bg-teal-400 hover:bg-red-500 text-center p-2 transition-all md:ml-4"
        onClick={handleLogout}
      >
        Log Out
      </button>

      <div className="relative">
        <Sidebar />
      </div>
    </header>
  );
};

export default Header;
