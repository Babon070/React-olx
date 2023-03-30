import { combineReducers } from "redux";
import likeReducer from './like-reducer';
import mainReducer from "./main-reducer";
import ShopReducer from "./shop-reducer";

const rootReducer = combineReducers({
    likeReducer,
    mainReducer,
    ShopReducer
});

export default rootReducer;