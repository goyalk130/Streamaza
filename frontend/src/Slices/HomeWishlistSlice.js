import { createSlice } from "@reduxjs/toolkit";

const homeWishlistSlice = createSlice({
    name:"homeWishlistSlice",
    initialState:{
        active:"home"
    },
    reducers:{
        SetHomeActive:(state)=>{
            state.active="home"
        },
        SetWishlistActive:(state)=>{
            state.active="wishlist"
        },
        SetSearchActive:(state,action)=>{
            state.active="search"
            state.search=action.payload
        }
    }
})

export const {SetHomeActive,SetWishlistActive,SetSearchActive} = homeWishlistSlice.actions

export default homeWishlistSlice.reducer