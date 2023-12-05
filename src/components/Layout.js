import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
