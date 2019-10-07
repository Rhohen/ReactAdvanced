import React from 'react';
import AddElement from "./AddELement";
import TotalCost from "./TotalCost";


class Footer extends React.Component {

    render() {
        return (
            <div className="Footer">
                <AddElement/>
                <TotalCost/>
            </div>
        )
    }
}

export default Footer;