import React, { useEffect, useState } from "react";
import axios from "axios";
import { Setlogin, Setlogout } from "../../Slices/LoginSlice";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { SetToken, SetUser, SetError } from "../../Slices/UserSlice";
import { api } from "../../utils/Constant";

import { Navigate, Route } from "react-router-dom";
import AfterLogin from "../AfterLogin/AfterLogin";
import ErrorModal from "../Modal/ErrorModal";

const Login = () => {
  const dispatcher = useDispatch();
  const [loginstate,setState] = useState(true)
  const userState = useSelector((state) => state.UserState);

  function chnageState(){
      setState((value)=>!value)
  }
  const LoginUser = (email, password) => {
    const data = {
      email,
      password,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    };
    axios
      .post(`${api}/api/v1/login`, data)
      .then(function (response) {
        console.log(response);
        dispatcher(SetToken(response.data));
        dispatcher(SetUser(response.data));
        const d = new Date();
        d.setTime(d.getTime() + 5 * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        console.log(expires, response.data.token);
        document.cookie = "token=" + response.data.token;
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatcher(SetError(err.response.data));
      });
  };
  const SignupUser = (email, password1,password2) => {
      if(!(password1==password2)){
          console.log("chalaa")
          dispatcher(SetError({success:false,message:"password Not matched"}))
          return 0
      }
    const data = {
        name:"user",
      email,
      password:password1,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    };
    axios
      .post(`${api}/api/v1/register`, data)
      .then(function (response) {
        console.log(response);
        dispatcher(SetToken(response.data));
        dispatcher(SetUser(response.data));
        const d = new Date();
        d.setTime(d.getTime() + 5 * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        console.log(expires, response.data.token);
        document.cookie = "token=" + response.data.token;
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatcher(SetError(err.response.data));
      });
  };

  const submit = async (e) => {
    e.preventDefault();
    var email = document.querySelector(".email").value;
    var password = document.querySelector(".pass").value;
    LoginUser(email, password);
    if (!userState.error.success) {
      obj.handleOpen();
      dispatcher(SetError({}));
    }
    dispatcher(SetError({}));
    console.log(userState);
  };
  const Signupsubmit = async (e) => {
    e.preventDefault();
    var email = document.querySelector(".email").value;
    var password1 = document.querySelector(".pass1").value;
    var password2 = document.querySelector(".pass2").value;
    SignupUser(email, password1,password2);
    if (!userState.error.success) {
      obj.handleOpen();
      dispatcher(SetError({}));
    }
    dispatcher(SetError({}));
    console.log(userState);
  };
  var obj = {};

  function checkError() {
    if (!(userState.error == {})) {
      if (!userState.error.success) {
        return <ErrorModal fun={obj} />;
      }
    }
  }

  useEffect(() => {
    console.log(userState);
    axios
      .get(`${api}/api/v1/logged`, { withCredentials: true })
      .then((res) => {
        // console.log(res);
        dispatcher(Setlogin());
      })
      .catch((err) => {
        dispatcher(Setlogout());
      });
  }, [userState]);

  return (
    <div className="Login">
      {checkError()}
      <div className="login-box">
        <div className="login-logo">
          <img src="logo.png" />
        </div>
        {loginstate ? <div className="login-form">
          <div>
            <p className="login-heading">Login</p>
            <form onSubmit={submit}>
              <input className="email" type="email" placeholder="Email" />
              <input className="pass" type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
            <p className="forget">Forget Password ?</p>
            <p onClick={chnageState} className="signup">Signup</p>
          </div>
        </div> : <div className="login-form">
          <div>
            <p className="login-heading">Signup</p>
            <form onSubmit={Signupsubmit}>
              <input className="email" type="email" placeholder="Email" />
              <input className="pass1" type="password" placeholder="Password" />
              <input className="pass2" type="password" placeholder="Confirm Password" />
              <button type="submit">Signup</button>
            </form>
            <p className="forget">Forget Password ?</p>
            <p onClick={chnageState} className="signup">Login</p>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Login;
