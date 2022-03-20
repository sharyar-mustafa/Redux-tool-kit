import { createReducer } from "@reduxjs/toolkit";

  const initialState = {
      c:0,
  }

  export const customReduser = createReducer(initialState, {

     increment: (state, action) => {
       state.c +=  1;
     }  ,

     decrement: (state, action) => {
       state.c -=  1;
     }  ,

     reset: (state, action) => {
       state.c = 0;
     }  

  }); 

