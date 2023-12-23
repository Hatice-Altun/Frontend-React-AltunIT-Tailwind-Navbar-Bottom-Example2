import React from "react";
import {FiSettings} from "react-icons/fi";
import {FaUserCheck} from "react-icons/fa";
import {MdLogout} from "react-icons/md";
import { Link } from "react-scroll";

function Nav() {
  return (
      <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
        <div className="container mx-auto">
          <div
              className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[260px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
            <Link to="settings"
                  className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-teal-200">
              <FiSettings/>
            </Link>
            <Link to="account"
                  className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-teal-200">
              <FaUserCheck/>
            </Link>
            <Link to="logout"
                  className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-teal-200">
              <MdLogout/>
            </Link>
          </div>
        </div>
      </nav>
  );
}

export default Nav;
