import { configureStore } from "@reduxjs/toolkit";
import { customReduser } from "./Reducers";

const store = configureStore({
   reducer:{
      custom:customReduser,
   },
});

export default store