import { Link, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { login, logout } from "../store/authSlice";

const AppLayout = () => {
  const email = useAppSelector((state) => state.auth.email);

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail && !email) {
      dispatch(login({ email: savedEmail }));
    }
  }, []);
  const dispatch = useDispatch();
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropDownOpen(false);
      }
    };

    if (dropDownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDownOpen]);

  const handleLogout = () => {
    dispatch(logout());
    setDropDownOpen(false);
  };

  return (
    <div className="h-[100%] flex flex-col">
      <nav className="h-[70px] bg-medium-gray text-slate-900 font-medium text-xl ">
        <div className="flex justify-between items-center h-full px-6">
          <ul className="flex gap-16">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/trade">TRADE</Link>
            </li>
          </ul>

          <ul>
            {email ? (
              <li className="relative" ref={dropdownRef}>
                <div
                  onClick={() => setDropDownOpen(!dropDownOpen)}
                  className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full cursor-pointer select-none"
                >
                  {email[0].toUpperCase()}
                </div>
                {dropDownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-md p-4 z-30">
                    <p className="text-sm text-gray-800 break-words">{email}</p>
                    <button
                      onClick={handleLogout}
                      className="mt-2 text-red-600 hover:underline text-sm"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <li>
                <Link to="/login" className="hover:text-blue-500">
                  LOG IN
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <div className="h-[calc(100%-120px)] overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
