import React from "react";
import Navbar from "./Navbar";
const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
      <main className={`flex min-h-fit flex-col items-center justify-center px-4 py-6`}>
        {children}
      </main>
    </>
  );
};

export default Layout;
