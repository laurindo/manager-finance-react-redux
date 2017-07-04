import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getList } from './billingCycleActions';

class BillingCycleList extends Component {
    componentWillMount() {
        this.props.getList();    
    }

    renderRows() {
        const list = this.props.list || [];
        return list.map(l => (
            <tr key={l._id}>
                <td>{l.name}</td>
                <td>{l.month}</td>
                <td>{l.year}</td>
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

const mapStateToProps = state => ({list: state.billingCycle.list});
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);