import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    sessionStorage.setItem("login", "true");
    navigate("/");
  };
  return (
    <form onSubmit={onSubmit} className="max-w-sm mx-auto mt-8">
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>
        <Link
          to="/signup"
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        >
          Don't have account?
        </Link>
      </div>
      <div className="mt-4">
        <button className="bg-red-500 hover:bg-red-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Connect with Google
        </button>
      </div>
      <div className="mt-2">
        <button className="bg-blue-800 hover:bg-blue-900 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Connect with Facebook
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
