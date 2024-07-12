import React from "react";
import NavbarHome from "../components/NavbarHome";

const LayoutHome = ({ children }) => {
  return (
    <React.Fragment>
        <NavbarHome />
        <main className="py-10 bg-gray-100">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
    </React.Fragment>
  );
};

export default LayoutHome;
