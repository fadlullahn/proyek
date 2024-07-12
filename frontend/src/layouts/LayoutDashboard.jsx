import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
          <Sidebar />
        </div>
      </div>
      <div className="lg:pl-72">
        <Navbar />
        <main className="py-10 bg-gray-100">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
