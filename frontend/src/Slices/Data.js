import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
    name:"DataSlice",
    initialState:{
        Search:{
            data:[]
        },
        Action:{
            data:[]
        },
        Adventure:{
            data:[]
        },
        Comedy:{
            data:[]
        },
        Drama:{
            data:[]
        },
        Thriller:{
            data:[]
        },
        Fantasy:{
            data:[]
        },
        Crime:{
            data:[]
        },
        SciFi:{
            data:[]
        },
    },

    reducers:{
        SetAction:(state,action)=>{
            state.Action.data=action.payload
        },
        SetAdventure:(state,action)=>{
            state.Adventure.data=action.payload
        },
        SetComedy:(state,action)=>{
            state.Comedy.data=action.payload
        },
        SetDrama:(state,action)=>{
            state.Drama.data=action.payload
        },
        SetThriller:(state,action)=>{
            state.Thriller.data=action.payload
        },
        SetFantasy:(state,action)=>{
            state.Fantasy.data=action.payload
        },
        SetCrime:(state,action)=>{
            state.Crime.data=action.payload
        },
        SetSciFi:(state,action)=>{
            state.SciFi.data=action.payload
        },
        SetSearch:(state,action)=>{
            state.Search.data=action.payload.videos
            state.Search.success=action.payload.success

        }
    }
})

export const {SetAction,SetAdventure,SetComedy,SetCrime,SetDrama,SetFantasy,SetSciFi,SetThriller,SetSearch} = DataSlice.actions

export default DataSlice.reducer