import { PRODUCT_CREATE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

import axios from 'axios'
import { RESET_ERROR } from "../constants/userConstants";

export const resetError = () => ({
  type: RESET_ERROR,
});

export const listProduct = () => async (dispatch) => {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });
    try {
      const { data } = await axios.get('/api/products');
      console.log("hello: ",data)
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data.products });
    } catch (error) {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
  };

  export const createProduct = (productData) => async (dispatch, getState) => {
    console.log("what is receiving", productData);
    try {
      dispatch({ type: PRODUCT_CREATE_REQUEST });
      const { userSignin: { userInfo } } = getState();
      console.log("what is there in userInfo action: ",userInfo.token);
      
  


      const { data } = await axios.post('/api/createProduct', productData, 
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
      );
    
      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: data.isSaved,
      });


      console.log("dssgshgs", data)
    } catch (error) {
      console.log('Error:', error)
      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };
  