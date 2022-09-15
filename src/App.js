import Home from "./Components/Home";
import Login from "./Components/Login";
import Settings from "./Components/Settings";
import SignUp from "./Components/SignUp";
import Single from "./Components/Single";
import Write from "./Components/Write";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import SinglePost from "./Components/SinglePost";

function App() {
  const user = false;
  return (
    <>
      <Home />
      <Write />
    </>
  );
}

export default App;
