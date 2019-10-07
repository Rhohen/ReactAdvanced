import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
	return { 
		filter: state.filter,
		costs: state.costs
	 }
}
const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps,	mapDispatchToProps)(TotalCost);