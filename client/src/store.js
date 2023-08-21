import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { ProductCreate, productListReducer } from './redux/reducer/productReducer';
import thunk from 'redux-thunk';
import { userSigninReducer } from './redux/reducer/userReducer';



const reducer = combineReducers({
    productList: productListReducer,
    userSignin: userSigninReducer,
    productCreate: ProductCreate
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
  );
  
  export default store;