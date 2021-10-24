import {combineReducers , createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import  contactReducer  from "../reducers/Contact"


const rootReducers = combineReducers({
    contactReducer
})

const store = createStore(rootReducers, composeWithDevTools())

export default store;