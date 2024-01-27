// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { App } from "./views/App.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { NavbarProductos } from "./components/NavbarProductos.jsx";
import { Footer } from "./components/Footer.jsx";
import { Signup } from "./views/Signup.jsx";
import { ProductoEspecifico } from "./views/productoEspecifico.jsx";
import { Productos } from "./views/Productos.jsx";
// import { NotFound } from "./views/notfound.jsx";

import injectContext from "./store/appContext.jsx";

const Layout = () => {
  // the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  // const basename = process.env.BASENAME || "";
  const basename = import.meta.env.VITE_BASENAME || "";
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <App />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Signup />
            </>
          }
        />
        <Route
          path="/ProductoEspecifico"
          element={
            <>
              <Navbar />
              <ProductoEspecifico />
            </>
          }
        />
        <Route
          path="/Productos"
          element={
            <>
              <NavbarProductos />
              <Productos />
            </>
          }
        />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
