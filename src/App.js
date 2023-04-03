import Home from "./Components/Home";
import Login from "./Components/Login";
import Settings from "./Components/Settings";
import SignUp from "./Components/SignUp";
import Single from "./Components/Single";
import Write from "./Components/Write";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Route, Link, Router, Routes } from "react-router-dom";
import SinglePost from "./Components/SinglePost";

function App() {
  const user = false;
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <Switch> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Write" element={<Write />} />
          <Route path="/Blog" element={<SinglePost />} />

          {/* <Home /> */}
          {/* </Route> */}
        </Routes>

        {/* </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
