import React from 'react';
import Filter from "./Filter";
import TableList from "./List";
import Footer from "./Footer";

class MainList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            users: ['Amine', 'Julie', 'Kévin'],
            costs: [{ paidBy: 'Amine', title: 'Beer', price: 15 },
            { paidBy: 'Julie', title: 'Lulz', price: 154 },
            { paidBy: 'Kévin', title: 'Keks', price: 150 }]
        }
    }

    filter = (user) => {
        this.setState({ filter: user });
    }

    adder = (what, who, how) => {
        if (this.state.users.indexOf(who) === -1) {
            this.setState({ users: [...this.state.users, who] });
        }
        this.setState({ costs: [...this.state.costs, { paidBy: who, title: what, price: how }] });
    }

    render() {
        return (
            <div className='MainList'>
                <Filter users={this.state.users} filter={this.filter} />
                <TableList costs={this.state.costs} filter={this.state.filter} />
                <Footer costs={this.state.costs} users={this.state.users} adder={this.adder} />
            </div>
        );
    }
}

export default MainList;