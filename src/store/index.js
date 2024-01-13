import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./tastSlice";

export const store = configureStore({
  reducer:{
    task: taskSlice.reducer
  }  
})
