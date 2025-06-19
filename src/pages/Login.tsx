import { useEffect, useState } from "react";
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";
import { useAppDispatch } from "../hooks/reduxHooks";
import { login } from "../store/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { setIsLoginFormOpen } = useOutletContext<{
    setIsLoginFormOpen: React.Dispatch<boolean>;
  }>();

  useEffect(() => {
    setIsLoginFormOpen(true);
    return () => setIsLoginFormOpen(false);
  }, []);

  const from = (location.state as { from?: string })?.from || "/";

  const handleSubmit = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (password.length < 4) {
      setError("Password must be at least 4 characters long.");
      return;
    }

    if (email && password) {
      dispatch(login({ email }));
      navigate(from, { replace: true });
    } else {
      navigate("/login");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="bg-medium-gray absolute top-[20%] w-full md:w-3/12 md:mx-auto right-0 left-0 md:mt-24 h-[350px] rounded-lg"
    >
      <h1 className="text-left text-text-gray text-3xl mt-4 mb-4 flex justify-center">
        LOG IN
      </h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email Address"
        className="p-4 mx-4 my-4 w-11/12 h-12 bg-white border border-white rounded-lg  placeholder-gray-500 focus:outline-hidden"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="p-4 mx-4 my-2 w-11/12 h-12 bg-white border border-white rounded-lg  placeholder-gray-500 focus:outline-hidden"
      />
      {error && <p className="text-red-600 text-sm mx-4">{error}</p>}
      <button
        type="submit"
        className="px-2 mx-4 my-4 mb-5 text-text-gray w-11/12 h-12 bg-light-gray rounded-lg text-xl focus:bg-gray-600 focus:cursor-pointer hover:cursor-pointer"
      >
        LOG IN
      </button>
    </form>
  );
};

export default Login;
