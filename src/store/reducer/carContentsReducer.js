import * as actionTypes from "../action/actionTypes";
const initState = {
	brands: {},
	models: {},
	engines: {}
}

export default function courseContentsReducer(state=initState, action) {

	switch (action.type) {
		case actionTypes.GET_BRAND_DATA:
	        return {
	        	...state,
	        	brands: action.pagedatas
	        }
	    case actionTypes.GET_MODEL_DATA:
	        return {
	        	...state,
	        	models: action.pagedatas
	        }
	    case actionTypes.GET_ENGINE_DATA:
	        return {
	        	...state,
	        	engines: action.pagedatas
	        }
		default:
			return state
	}
}