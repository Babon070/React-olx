import { combineReducers } from "redux";
import likeReducer from './like-reducer';
import mainReducer from "./main-reducer";
import ShopReducer from "./shop-reducer";
// import FireReducer from "./firebasereducer";

const rootReducer = combineReducers({
    likeReducer,
    mainReducer,
    ShopReducer,
    // FireReducer
});

export default rootReducer;