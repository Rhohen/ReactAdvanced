import React from 'react';
import { connect } from 'react-redux';
import { adderCost, adderUser } from './utils/actions';

class AddELement extends React.Component {

    constructor() {
        super();

        this.state = {
            adderWhat: "",
            adderWho: "",
            adderHow: -1
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e) {
        if (this.state.adderWhat !== "" &&
            this.state.adderWho !== "" &&
            this.state.adderHow !== -1) {
            this.props.addCost(this.state.adderWhat,
                this.state.adderWho,
                this.state.adderHow);
            if (!this.props.users.includes(this.state.adderWho)) {
                this.props.addUser(this.state.adderWho);
            }
        }
    }

    handleChange(e, i) {
        if (i === 0)
            this.setState({ adderWhat: e.target.value })
        else if (i === 1)
            this.setState({ adderWho: e.target.value })
        else if (i === 2)
            this.setState({ adderHow: parseInt(e.target.value) })
    }

    processOptions = () => this.props.users.map(user => (<option>{user}</option>))

    render() {
        return (
            <div className="AdderCostElement">
                <input className="inputAdder" onChange={e => this.handleChange(e, 0)} placeholder="What?" />
                <input className="inputAdder" type="text" onChange={e => this.handleChange(e, 1)} list="listUsers" placeholder="Who?" />
                <datalist id="listUsers">
                    {this.processOptions()}
                </datalist>
                <input className="inputAdderPrice" onChange={e => this.handleChange(e, 2)} placeholder="€€€" />
                <button className="buttonAdder" onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCost: (what, who, how) => {
            dispatch(adderCost(what, who, how))
        },
        addUser: (who) => {
            dispatch(adderUser(who))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddELement);