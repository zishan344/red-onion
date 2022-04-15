import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between max-w-6xl mx-auto py-3">
        <div>
          <img style={{ height: "50px" }} src={logo} alt="" />
        </div>
        <div className="flex items-center gap-6">
          <Link to="/addedCart">
            <BsFillCartCheckFill />
          </Link>
          <Link to="/login">Login</Link>
          <Link to="/register">
            <button className="px-4 py-1 bg-red-600 rounded-full text-1xl font-semibold text-white hover:bg-red-500">
              Register
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
