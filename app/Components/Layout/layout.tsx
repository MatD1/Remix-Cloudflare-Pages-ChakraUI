// components/layout.js
import React from "react";
import DevelopmentAlert from "../Alerts/DevelopmentAlert";
import { Footer } from "../Footer/footer";
import { Navbar } from "../Nav/navbar";

export default function Layout({ children } : {children : React.ReactNode}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
