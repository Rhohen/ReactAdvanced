import { storeParseAction } from "./Action";
import Parse from "parse";

const COST_NAME = "18000915Cost";
const COST_PAID_BY = "paidBy";
const COST_TITLE = "title";
const COST_AMOUNT = "amount";

const Cost = Parse.Object.extend(COST_NAME);

const USER_TITLE = "18000915User";
const USER_NAME = "name";

const User = Parse.Object.extend(USER_TITLE);

function createCost(paidBy, title, amount) {
    const cost = new Cost();
    cost.set(COST_PAID_BY, paidBy);
    cost.set(COST_TITLE, title);
    cost.set(COST_AMOUNT, amount);
    return cost;
}

function mapCost(costParse) {
    return {
        id: costParse.id,
        paidBy: costParse.get(COST_PAID_BY),
        title: costParse.get(COST_TITLE),
        amount: costParse.get(COST_AMOUNT)
    };
}

function createUser(name) {
    const user = new User();
    user.set(USER_NAME, name);
    return user;
}

function mapUser(userParse) {
    return {
        id: userParse.id,
        name: userParse.get(USER_NAME),
    };
}

export default function initialize() {
    Parse.initialize("zDdcWaZElGOezFM");
    Parse.serverURL = 'https://parse.nebula.ovh/parse';
}

export function saveCostParse(paidBy, title, amount, actionType) {
    const cost = createCost(paidBy, title, amount);
    cost.save().then(result => {
        storeParseAction(actionType, mapCost(result));
    });
    return cost;
}

export function retrieveCostsParse(actionType) {
    new Parse.Query(Cost).find()
        .then((results) => {
            const costs = [];
            results.forEach(r => {
                costs.push(
                    {
                        paidBy: r.get(COST_PAID_BY),
                        title: r.get(COST_TITLE),
                        amount: r.get(COST_AMOUNT),
                        id: r.id
                    }
                )
            });
            storeParseAction(actionType, costs)
        });
}

export function removeCostParse(id, actionType) {
    new Parse.Query(Cost)
        .get(id)
        .then(r => {
            r.destroy();
            storeParseAction(actionType, mapCost(r));
        })
}

export function saveUserParse(name, actionType) {
    const user = createUser(name);
    user.save().then(result => {
        storeParseAction(actionType, mapUser(result));
    });
    return user;
}

export function retrieveUsersParse(actionType) {
    new Parse.Query(User).find()
        .then((results) => {
            const users = [];
            results.forEach(r => {
                users.push(
                    {
                        name: r.get(USER_NAME),
                        id: r.id
                    }
                )
            });
            storeParseAction(actionType, users)
        });
}

export function removeUserParse(id, actionType) {
    new Parse.Query(User)
        .get(id)
        .then(r => {
            r.destroy();
            storeParseAction(actionType, mapUser(r));
        })
}