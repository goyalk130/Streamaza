import {createSlice} from "@reduxjs/toolkit"

export const UserSlice = createSlice({
    name:"UserSlice",
    initialState:{
        token:"",
        user:{},error:{}
    },
    reducers:{
        SetToken:(state,action)=>{
            state.token=action.payload.token
        },
        SetUser:(state,action)=>{
            state.user=action.payload.user
        },
        SetError:(state,action)=>{
            state.error=action.payload
            state.token=null
            state.user=null
        }
    }
})

export const {SetToken,SetUser,SetError} = UserSlice.actions

export default UserSlice.reducer