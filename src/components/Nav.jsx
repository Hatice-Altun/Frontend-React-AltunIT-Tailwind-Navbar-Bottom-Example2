import React from "react";
import {FaHome, FaUserCheck} from "react-icons/fa";
import {GrProjects} from "react-icons/gr";
import {MdOutlineContactSupport} from "react-icons/md";
import { Link } from "react-scroll";

function Nav() {
  return (
      <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">

        <div className="container mx-auto">
          <div
              className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[260px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
            <Link to="home"
                  className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-teal-200">
              <FaHome/>
            </Link>
            <Link to="projects"
                  className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-teal-200">
              <GrProjects/>
            </Link>
            <Link to="contact"
                  className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-teal-200">
              <MdOutlineContactSupport/>
            </Link>
          </div>
        </div>
      </nav>
  );
}

export default Nav;
