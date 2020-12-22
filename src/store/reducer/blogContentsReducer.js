import * as actionTypes from "../action/actionTypes";
const initState = {
	cachedata: {},
	categorys: {},
	posts: {},
	submissions: {},
	faq: {},
	download_softwares: {},
	youtube: {},
	tiktok: {},
	teamcarousel: {},
	topcarousel: {}
}

export default function courseContentsReducer(state=initState, action) {

	switch (action.type) {
		case actionTypes.GET_CATEGORY_DATA:
	        return {
	        	...state,
	        	categorys: action.pagedatas
	        }
	    case actionTypes.GET_POST_DATA:
	        return {
	        	...state,
	        	posts: action.pagedatas
	        }
	    case actionTypes.ADD_POST_DATA:
	        return {...state}
	    case actionTypes.GET_SUBMISSION_DATA:
	        return {
	        	...state,
	        	submissions: action.pagedatas
	        }
	    case actionTypes.GET_FAQ_DATA:
	        return {
	        	...state,
	        	faq: action.pagedatas
	        }
	    case actionTypes.GET_DS_DATA:
	        return {
	        	...state,
	        	download_softwares: action.pagedatas
	        }
	    case actionTypes.ADD_SUBMISSION_DATA:
	        return {...state}
	    case actionTypes.GET_YOUTUBE_DATA:
	        return {
	        	...state,
	        	youtube: action.pagedatas
	        }
	    case actionTypes.GET_TIKTOK_DATA:
	        return {
	        	...state,
	        	tiktok: action.pagedatas
	        }
	    case actionTypes.GET_TEAMCAROUSEL_DATA:
	        return {
	        	...state,
	        	teamcarousel: action.pagedatas
	        }
	    case actionTypes.GET_TOPCAROUSEL_DATA:
	        return {
	        	...state,
	        	topcarousel: action.pagedatas
	        }
	    case actionTypes.SUBMIT_CACHE:
	        return {
	        	...state,
	        	cachedata: action.payload
	        }
		default:
			return state
	}
}