import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/reduxHooks";
import { login } from "../store/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      dispatch(login({ email }));
      navigate("/trade");
    } else {
      navigate("/login");
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-medium-gray absolute top-[20%] w-full md:w-3/12 md:mx-auto right-0 left-0 md:mt-24 h-[350px] rounded-lg"
    >
      <h1 className="text-left text-text-gray text-3xl mt-4 mb-4 flex justify-center">
        Log in
      </h1>
      <input
        ref={emailRef}
        type="email"
        placeholder="Email Address"
        className="p-4 mx-4 my-4 w-11/12 h-12 bg-white border border-white rounded-lg  placeholder-gray-500 focus:outline-hidden"
      />

      <input
        ref={passwordRef}
        type="password"
        placeholder="Password"
        className="p-4 mx-4 my-4 w-11/12 h-12 bg-white border border-white rounded-lg  placeholder-gray-500 focus:outline-hidden"
      />
      <button
        className="px-2 mx-4 my-4 mb-5 text-text-gray w-11/12 h-12 bg-light-gray rounded-lg text-xl focus:bg-gray-600"
        onClick={handleButtonClick}
      >
        Log in
      </button>
    </form>
  );
};

export default Login;
