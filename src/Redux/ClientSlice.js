import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// to get all data in api 
// const NameOfPage='نادين حازم'
export const fetchClient=createAsyncThunk(
    'client/fetchClient',
    async()=>{
        const response= await axios.get( 'https://hamdyadam.pythonanywhere.com/client/');
        return response.data
        
    }
)
export const ClientSlice=createSlice({
    name:'Client',
    initialState:{
        data:[],
        status:null,
        
    },
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchClient.fulfilled,(state,{payload})=>{
            state.data=payload;
            state.status='success'

        })
        builder.addCase(fetchClient.pending,(state)=>{
            state.status='loading'

        })
        builder.addCase(fetchClient.rejected,(state)=>{
            state.status='failed'

        })
    },
})


export default ClientSlice.reducer

   
