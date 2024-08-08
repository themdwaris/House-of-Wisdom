import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import Layout from "./Layout";
import { AppContextProvider } from "./components/context/useContext";


const App = () => {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vision" element={<Contact />} />
      </Route>
    )
  );

  return (
    <>
      <AppContextProvider>
      <RouterProvider router={router} />
      </AppContextProvider>
    </>
  );
};

export default App;
