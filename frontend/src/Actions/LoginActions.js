import axios from "axios"
import React, { useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import {SetToken,SetUser,SetError} from "../Slices/UserSlice"
import { api } from "../utils/Constant";

export const LoginUser = (email, password) => {

    // const State = useSelector(state=>state.UserState)
    
    // const dispatcher = useDispatch()


    const data ={
        email,password
    }
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  };

  let res;
  axios.post(`${api}/api/v1/login`,data)
  .then(function (response) {
      res=response
    //   console.log(res)
    //   dispatcher(SetToken(res.data.token))
    //   dispatcher(SetUser(res.data.user))

    }
      ).catch(err=>{
        //   console.log(err.response)
                    
      })

  console.log(res)
  


};

