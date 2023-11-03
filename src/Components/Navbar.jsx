import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiUserGroup } from "react-icons/hi";
import { RiMailSendFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { MdMessage, MdPermContactCalendar } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLocationCrosshairs } from "react-icons/fa6"

const Navbar = () => {
    const menus = [
      { name: "Dashboard", link: "/dashboard", icon: FaHome },
      { name: "Chat", link: "/chat", icon: MdMessage },
      { name: "Phone Book", link: "/phonebook", icon: MdPermContactCalendar },
      { name: "Auto Reply", link: "/reply", icon: RiMailSendFill, margin: true },
      { name: "Create Campaign", link: "/create", icon: FaLocationCrosshairs },
      { name: "Groups", link: "/groups", icon: HiUserGroup, margin: true },
      { name: "Setting", link: "/setting", icon: IoMdSettings },
    ];

    const isSidebarOpenStored = localStorage.getItem("isSidebarOpen") === "true";
    const [open, setOpen] = useState(isSidebarOpenStored);

    const toggleSidebar = () => {
        const newOpen = !open;
        setOpen(newOpen);
        localStorage.setItem("isSidebarOpen", newOpen.toString());
    };

    useEffect(() => {
        if (isSidebarOpenStored !== open) {
            toggleSidebar();
        }
    }, []);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 768) {
          setOpen(false);
          localStorage.setItem("isSidebarOpen", "false");
        }
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
        <div
          className={`bg-gray-300 dark:bg-gray-600 min-h-[91vh] fixed z-10 ${
            open ? "w-72" : "w-[70px]"
          } duration-500 text-gray-800 px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer dark:text-gray-200"
              onClick={toggleSidebar}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={`${
                  menu?.margin && "mt-5"
                } group flex items-center hover:text-white dark:text-gray-200 text-lg gap-3.5 font-medium p-2 dark:hover:bg-gray-800 hover:bg-gray-600 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "25" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 2}00ms`,
                  }}
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-gray-300 dark:bg-gray-600 font-semibold whitespace-pre text-gray-700 dark:text-gray-100 rounded-md drop-shadow-lg py-0
                px-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-16 group-hover:duration-300
                group-hover:w-fit z-10`}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
    );
};

export default Navbar;
