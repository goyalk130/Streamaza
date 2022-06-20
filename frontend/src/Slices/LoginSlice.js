import {createSlice} from "@reduxjs/toolkit"

export const LoginSlice = createSlice({
    name:"LoginSlice",
    initialState:{
        success:false
    },
    reducers:{
        Setlogin:state=>{
            state.success=true
        },
        Setlogout:state=>{
            state.success=false
        }
    }
})

export const {Setlogin,Setlogout} = LoginSlice.actions

export default LoginSlice.reducer