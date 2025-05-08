import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../redux/slice/ProductSlice/Products.jsx";
import categoryReducer from "../redux/slice/CategoriesSlice/Categories.jsx";

const store = configureStore({
  reducer: {
   
    product: productReducer,
    category: categoryReducer,
  
  },
});
export default store;