/**
 * BillingCycleList is my presentational component that render my table for show my billing. 
 * Advice: Try divided your components into containers and presentational. 
 * In this case(Presentational Component) is very useful to concerned only how things look
*/
import React, { Component } from 'react';

class BillingCycleList extends Component {
    constructor(props) {
        super(props);
    }
    
    renderRows() {
        const lists = this.props.list || [];
        return lists.map(list => (
            <tr key={list._id}>
                <td>{list.name}</td>
                <td>{list.month}</td>
                <td>{list.year}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(list)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Month</th>
                            <th>Year</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default BillingCycleList;