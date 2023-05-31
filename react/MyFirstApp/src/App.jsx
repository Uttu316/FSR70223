import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import List from "./components/list";
import "./app.css"

const App = () => {
  return (
    <div className="app">
      <Header />
      <List />
      <Footer />
    </div>
  );
};

export default App;
