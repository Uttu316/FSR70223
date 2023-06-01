import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import UserList from "./components/list";
import NFHome from "./pages/nfHome";
const App = () => {

  return (
    <div className="app">
      {/* <Header />
      <UserList />
      <Footer /> */}
      <NFHome/>
    </div>
  );
};

export default App;
