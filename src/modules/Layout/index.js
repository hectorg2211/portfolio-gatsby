import React from "react";
import Footer from "../Footer";
import Header from "../Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer text='Copyright ©2023 All rights reserved' />
    </div>
  );
}

export default Layout;
