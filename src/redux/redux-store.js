import {applyMiddleware,combineReducers, createStore} from "redux";
import {pointsReducer} from './point-reducer';
import thunkMiddleware from "redux-thunk";


let reducers =
    combineReducers({
    eventsPage: pointsReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
