import * as actionTypes from "../action/actionTypes";
const isEmpty = require("is-empty");

const initState = {
	user: [],
	profile: [],
	isAuthenticated: false,
	lang: "en",
	visitUrl: "",
}

export default function authReducer(state=initState, action) {
	switch (action.type) {
		case actionTypes.SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload.user),
				user: action.payload.user,
				profile: action.payload.profile
			}
		case actionTypes.CHANGE_LANG:
			return {
				...state,
				lang: action.payload
			}
		case actionTypes.VISITURL:
			return {
				...state,
				visitUrl: action.payload
			}
		default:
			return {...state};
	}
}