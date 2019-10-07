import React from 'react';
import Filter from "./Filter";
import TableList from "./List";
import Footer from "./Footer";

class MainList extends React.Component {

    render() {
        return (
            <div className='MainList'>
                <Filter/>
                <TableList/>
                <Footer/>
            </div>
        );
    }
}

export default MainList;