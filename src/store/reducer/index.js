import {combineReducers} from "redux";
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import carContentsReducer from "./carContentsReducer"
import errorsReducer from "./errorsReducer"
import blogReducer from "./blogContentsReducer"
import authReducer from "./authReducer"

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['carContents', 'auth', 'blogs']
}

const rootReducer =  combineReducers({
	carContents: carContentsReducer,
	blogs: blogReducer,
	errors: errorsReducer,
	auth: authReducer,
})

export default persistReducer(persistConfig, rootReducer)