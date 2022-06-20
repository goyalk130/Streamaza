import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./Slices/LoginSlice"
import UserReducer from "./Slices/UserSlice"
import DataReducer from "./Slices/Data"
import HomeWishlistReducer from "./Slices/HomeWishlistSlice"

export default configureStore({reducer:{
    LoginState:LoginReducer,
    UserState:UserReducer,
    HomeWIshlistState:HomeWishlistReducer,
    DataState:DataReducer
}})