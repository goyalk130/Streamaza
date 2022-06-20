import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/SideBar/Sidebar";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AfterLogin from "./components/AfterLogin/AfterLogin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CheckAuth } from "./utils/checkAuth";
import { Setlogin, Setlogout } from "./Slices/LoginSlice";
import axios from "axios";
import Content from "./components/Stream/Content";
import Search from "./components/Search/Search";
import ViewVideos from "./components/ViewVideos/ViewVideos";
import Videos from "./components/ViewVideos/Videos";
import { api } from "./utils/Constant";

function App() {
  
  const dispatcher = useDispatch();
  const userState = useSelector((state) => state.UserState);
  const login = useSelector((state) => state.LoginState);

  axios
    .get(`${api}/api/v1/logged`, { withCredentials: true })
    .then((res) => {
      console.log(res);
      dispatcher(Setlogin());
    })
    .catch((err) => {
      dispatcher(Setlogout());
    });

    useEffect(() => {
      
    }, [login])

  console.log(login.success);
  return (
    <Router>
      <div className="website">
        <div className="sidebar--NavbarHome-partition">
          {login.success ? (
            <>
              <Sidebar />
              <div className="NavbarPlusHome">
                <NavBar />
                <Routes>
                  <Route exact path="/" element={<Home/>} />
                  <Route exact path="/wishlist" element={<Home/>} />
                  <Route exact path="/play/:id" element={<Content/>} />
                  <Route exact path="/search/:keyword" element={<Search/>} />
                  <Route exact path="/search" element={<Home/>} />
                  <Route exact path="/:genre" element={<Videos/>} />
                </Routes>
              </div>
            </>
          ) : (
            <Routes>
              <Route exact path="/" element={<Login />} />
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
