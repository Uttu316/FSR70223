import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import UserList from "./components/list";
import Movies from "./pages/movies";
import NFHome from "./pages/nfHome";

const App = () => {

  return (
    <div className="app">
      {/* <Header />
      <UserList />
      <Footer /> */}
      {/* <NFHome/> */}
      <Movies/>
    </div>
  );
};

export default App;