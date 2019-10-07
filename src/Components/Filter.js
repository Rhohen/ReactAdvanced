import React from 'react'
import { connect } from 'react-redux'
import { updateFilter } from './utils/actions'

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.filter(e.target.value);
    }

    processOptions = () => this.props.users.map(user => (<option key={user} value={user}>{user}</option>))

    render() {
        return (
            <div className="filter">
                Filter:
				<select onChange={(e) => this.handleChange(e)}>
                    <option value="">All</option>
                    {this.processOptions()}
                </select>
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
        filter: (value) => {
            dispatch(updateFilter(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);