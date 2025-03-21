import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="">
        <div className="sticky top-0">
          <nav className="flex justify-between items-center p-8 ">
            <div>
              <h1 className="text-2xl font-bold text-gray-700">AWS-s3-Bucket-Image-<span className="text-blue-600">Store</span></h1>
            </div>
            <ul className="flex justify-center items-center gap-10 text-gray-700">
              <li className="hover:text-blue-500 transition-all">
                <a href="#">
                  <NavLink to="/">Home</NavLink>
                </a>
              </li>
              <li  className="hover:text-rose-400 transition-all">
                <a href="#">
                  <NavLink to="/add">AddProduct</NavLink>
                </a>
              </li>

              <li  className="hover:text-rose-400 transition-all">
                <a href="#">
                  <NavLink to="/display">DisplayProduct</NavLink>
                </a>
              </li>
 
            </ul>
            <div>
                   <button className="text-xl bg-blue-600 px-3 py-2  rounded-lg border-none text-white">Login</button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;