import { filter, costs, users } from "./reducer.js"

export default function rootReducer(state = {}, action){
	return {
		filter: filter(state.filter, action),
		users: users(state.users, action),
		costs: costs(state.costs, action)
	}
}