import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchClient=createAsyncThunk(
    'client/fetchClient',
    async(AccessData)=>{
        const response= await axios.get( 'https://hamdyadam.pythonanywhere.com/client/%D9%86%D8%A7%D8%AF%D9%8A%D9%86%20%D8%AD%D8%A7%D8%B2%D9%85/',{
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3OTU4NzY3LCJpYXQiOjE2NzM2Mzg3NjcsImp0aSI6IjRiM2I1M2M0ZDVhZDQ3NzhiYzY1MjhkYWIwYjQ3YjU1IiwidXNlcl9pZCI6Nn0.WdNSOVsQOgSx6GxUN0kCl89kiL5v3k-hVDq06SH_9XM`//${AccessData}
              }
        });

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

   
