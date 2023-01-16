import React from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Form />
      <Footer />
    </div>
  );
}
