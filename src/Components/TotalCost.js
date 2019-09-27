import React from 'react';

class TotalCost extends React.Component {

    render() {
        let total = 0;
        for (let cost of this.props.costs) {
            total = total + parseInt(cost.price);
        }
        return (
            <div className="TotalCost">
                <p className="totalText">TOTAL EXPENSES</p>
                <p className="totalValue">{total} €</p>
            </div>
        )
    }
}

export default TotalCost;