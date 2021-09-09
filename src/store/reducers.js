import { combineReducers } from "redux";
import weatherData from './weatherModule/weatherReducer'

const reducer = combineReducers({
    weatherData,
})

export default reducer