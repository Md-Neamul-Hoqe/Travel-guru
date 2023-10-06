import { NavLink } from "react-router-dom";
// import logoBlack from "../assets/logo.png";
import logoWhite from "../assets/logoWhite.svg";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink className={'hover:text-white'} to="/">News</NavLink>
      </li>
      <li>
        <NavLink className={'hover:text-white'} to="/destination">Destination</NavLink>
      </li>
      <li>
        <NavLink className={'hover:text-white'} to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink className={'hover:text-white'} to="/contact">Blog</NavLink>
      </li>
    </>
  );
  return (
    <div data-theme="light" className="navbar max-w-6xl mx-auto bg-transparent text-white font-medium">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* Small Device => Nav links */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}

            {/* Search Field */}
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="bg-opacity-10 input input-bordered w-24 md:w-auto"
              />
            </div>
          </ul>
        </div>

        {/* Logo */}
        <a href="/">
          <img width={"120px"} src={logoWhite} alt="Travel Guru" />
        </a>
      </div>

      {/* Large device => Nav links */}
      <div className="navbar-center hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1 items-center">
          {/* Search Field */}
          <div className="form-control relative">
            <AiOutlineSearch className="absolute top-3 left-3 text-3xl" />
            <input
              type="text"
              placeholder="Search your Destination..."
              className="bg-opacity-10 input input-bordered w-[370px] max-md:w-full ps-12 mr-5"
            />
          </div>

          {links}
        </ul>
      </div>

      {/* Login */}
      <div className="navbar-end">
        <a className="btn bg-yellow border-none text-black">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
