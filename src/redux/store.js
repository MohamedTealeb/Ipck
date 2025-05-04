import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../redux/slice/ProductSlice/Products.jsx";

const store = configureStore({
  reducer: {
   
    product: productReducer,
  
  },
});
export default store;