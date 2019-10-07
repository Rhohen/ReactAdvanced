import {store} from '../../App';

const UPDATE_FILTER = "UPDATE_FILTER";
export const updateFilter = (newFilter) => {
	return { type: UPDATE_FILTER, filter: newFilter };
}
const ADDER_COST = "ADDER_COST";
export const adderCost = (what, who, how) => {
	return { type: ADDER_COST, cost: { paidBy: who, title: what, price: how } };
}
const ADDER_USER = "ADDER_USER";
export const adderUser = (who) => {
	return { type: ADDER_USER, user: who };
}

export const parseAction = (type, result) => {
    return {type, result}
};

export const storeParseAction = (type, result) => {
    store.dispatch(parseAction(type, result));
};