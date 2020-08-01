import React from "react";
import Login from "./screens/authentication/Login";
import Layout from "./Layout";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
