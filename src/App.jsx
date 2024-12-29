import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './App.css';
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Page404 from "./components/Page404";
import Navbar from "./components/Navbar";

function App() {
  // ログインしたかログインしたかどうかの状態を保持
  const [ isAuth, setIsAuth ] = useState(localStorage.getItem("isAuth"));
  // const [ isAuth, setIsAuth ] = useState(true);
  console.log(isAuth);

  return (
    <BrowserRouter>
      <Navbar isAuth={ isAuth } />

      <Routes>
        <Route path="/" element={ <Home isAuth={ isAuth } /> }></Route>
        <Route path="/createpost" element={ <CreatePost isAuth={ isAuth } /> }></Route>
        <Route path="/login" element={ <Login setIsAuth={ setIsAuth } /> }></Route>
        <Route path="/Logout" element={ <Logout setIsAuth={ setIsAuth } /> }></Route>
        <Route path="*" element={ <Page404 /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
