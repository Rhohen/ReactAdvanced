import React from 'react';
import AddElement from "./AddELement";
import TotalCost from "./TotalCost";


class Footer extends React.Component {

    render() {
        return (
            <div className="Footer">
                <AddElement adder={this.props.adder} users={this.props.users} />
                <TotalCost costs={this.props.costs} />
            </div>
        )
    }
}

export default Footer;