import React from "react";
import ClassComponent from "./components/classComponents/class";
import LifeCycle from "./components/classComponents/lifeCycle";
import TodoList from "./components/classComponents/todoList";
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
      {/* <Movies/> */}
      {/* <ClassComponent/> */}
      {/* <TodoList/> */}
      <LifeCycle/>
    </div>
  );
};

export default App;