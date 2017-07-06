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
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>ANo</th>
                            <th>Ações</th>
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