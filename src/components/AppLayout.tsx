import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="h-[100%] flex flex-col">
      <nav className="h-[70px] bg-medium-gray text-slate-900 font-medium text-xl ">
        <div className="flex justify-between items-center h-full px-6">
          <ul className="flex gap-16">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/trade">Trade</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>
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
