const initState = {
	filter: "",
	users: ['Amine', 'Julie', 'Kévin'],
	costs: [{ paidBy: 'Amine', title: 'Beer', price: 15 },
	{ paidBy: 'Julie', title: 'Barbecue', price: 55 },
	{ paidBy: 'Kévin', title: 'Sausage', price: 35 }]
}

export function filter(state = initState.filter, action) {
	switch (action.type) {
		case "UPDATE_FILTER":
			return action.filter;
		default:
			return state;
	}
}

export function users(state = initState.users, action) {
	switch (action.type) {
		case "ADDER_USER":
			return [...state, action.user];
		default:
			return state;
	}
}

export function costs(state = initState.costs, action) {
	switch (action.type) {
		case "ADDER_COST":
			return [...state, action.cost];
		default:
			return state;
	}
}