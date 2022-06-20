import { NotificationsOutlined, SearchOutlined } from "@material-ui/icons";
import { NotificationAddOutlined } from "@mui/icons-material";
import SearchBar from "material-ui-search-bar";
import PersonIcon from "@mui/icons-material/Person";
import {SetSearch} from "../../Slices/Data"
import React from "react";
import "./NavBar.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/Constant";

const NavBar = () => {
  const dispatcher = useDispatch()
  const dataState = useSelector(state=>state.DataState)
  const nav = useNavigate()

  function search(){
    var text = document.querySelector(".search-data").value
    axios.get(`${api}/api/v1/video/all?keyword=${text}`).then((res)=>{
      console.log(res.data)
dispatcher(SetSearch(res.data))
nav(`/search/${text}`)
    })
  }
  return (
    <div className="NavBar">
      <div className="search-and-notification">
        <div className="Search">
          <div className="search-test-icon">
            <input className="search-data" type="text" />
            <div onClick={search} className="search-icon">
              <SearchOutlined style={{ fontSize: 31 }} />
            </div>
          </div>
        </div>
        <div className="notification-user">
          <div className="notification">
            <NotificationsOutlined style={{ fontSize: 36 }} />
          </div>
          <div className="user">
            <PersonIcon style={{ fontSize: 36 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
