import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    // Sidebar START For Desktop
    <>
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Temp React"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul className="-mx-2 space-y-1">
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )
                  }
                >
                  <HomeIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                  Dashboard
                </NavLink>
              </li>
              {user && user.role === "admin" && (
                <li>
                  <NavLink
                    to="/user"
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? "bg-gray-800 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-800",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )
                    }
                  >
                    <UsersIcon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    User
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )
                  }
                >
                  <FolderIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                  Product
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="mt-auto">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                classNames(
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800",
                  "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                )
              }
            >
              <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
    // Sidebar END For Desktop
  );
};

export default Sidebar;
