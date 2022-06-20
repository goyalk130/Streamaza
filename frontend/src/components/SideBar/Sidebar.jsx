import {
  ExitToAppOutlined,
  FavoriteBorderOutlined,
  Home,
} from "@material-ui/icons";
import axios from "axios";
import React from "react";
import { Setlogin, Setlogout } from "../../Slices/LoginSlice";
import { api } from "../../utils/Constant";
import {
  SetHomeActive,
  SetWishlistActive,
  SetSearchActive,
} from "../../Slices/HomeWishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Sidebar.css";
import { Navigate, useNavigate } from "react-router-dom";
const Sidebar = () => {
  const HomeWIshlistState = useSelector((state) => state.HomeWIshlistState);
  const dataState = useSelector((state) => state.DataState);
  const dispatcher = useDispatch();
  const nav = useNavigate();

  const logOut = () => {
    axios
      .get(`${api}/api/v1/logout`, { withCredentials: true })
      .then((res) => {
        console.log(res);
        dispatcher(Setlogout());
      });
  };

  return (
    <div className="Sidebar">
      <div
        onClick={() => {
          nav("/");
        }}
        className="Sidebar-section"
      >
        <img className="main-logo" src="lo.png" />
      </div>
      <div className="Sidebar-section">
        <div className="Sub-heading">
          <h2>Menu</h2>
          <div></div>
        </div>
        <div
          onClick={() => {
            dispatcher(SetHomeActive());
            nav("/");
          }}
          className="options"
        >
          <Home />
          <p className="home">Home</p>
        </div>
        <div
          onClick={() => {
            dispatcher(SetWishlistActive());
          }}
          className="options"
        >
          <FavoriteBorderOutlined /> <p className="wishlist">Wishlist</p>
        </div>
        <div onClick={logOut} className="options">
          <ExitToAppOutlined />
          <p className="logout">Logout</p>
        </div>
      </div>
      <div className="Sidebar-section">
        <div className="Sub-heading">
          <h2>Genre</h2>
          <div></div>
        </div>
        <div
          onClick={() => {
            nav("/SciFi", { state: dataState.SciFi.data });
          }}
          className="options"
        >
          <div></div>
          <p>Sci-Fi</p>
        </div>
        <div
          onClick={() => {
            nav("/thriller", { state: dataState.Thriller.data });
          }}
          className="options"
        >
          <div></div>
          <p>Thriller</p>
        </div>
        <div
          onClick={() => {
            nav("/action", { state: dataState.Action.data });
          }}
          className="options"
        >
          <div></div>
          <p>Action</p>
        </div>
        <div
          onClick={() => {
            nav("/drama", { state: dataState.Drama.data });
          }}
          className="options"
        >
          <div></div>
          <p>Drama</p>
        </div>
        <div
          onClick={() => {
            nav("/adventure", { state: dataState.Adventure.data });
          }}
          className="options"
        >
          <div></div>
          <p>Adventure</p>
        </div>
        <div
          onClick={() => {
            nav("/comedy", { state: dataState.Comedy.data });
          }}
          className="options"
        >
          <div></div>
          <p>Comedy</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
