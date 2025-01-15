import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { montserrat, updock } from "@/ui/fonts";
const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main className={`${montserrat.className} flex min-h-fit flex-col items-center justify-center px-4 py-6`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
