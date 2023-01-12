import { configureStore } from "@reduxjs/toolkit";
import ClientSlice from "./ClientSlice";
const store=configureStore({
    reducer:{
         ClientData:ClientSlice,

    }
})
export default store