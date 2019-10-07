import React from 'react';
import { connect } from 'react-redux';

class TableList extends React.Component {

    processCosts = () => this.props.costs
        .filter(cost => (cost.paidBy === this.props.filter || this.props.filter === ""))
        .map(cost => (
            <tr key={cost.title + cost.paidBy + cost.price} className="costElementRow">
                <td className="costElementTitle">{cost.title}</td>
                <td className="costElementPaidBy"><p className="paidByText">Paid by</p> {cost.paidBy}</td>
                <td className="costElementPrice">{cost.price} €</td>
            </tr>

        )
        );

    render() {
        return (
            <div>
                <table className="costTable">
                    <tbody>
                        {this.processCosts()}
                    </tbody>
                </table>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(TableList);