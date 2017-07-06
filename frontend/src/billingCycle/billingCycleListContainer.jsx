import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getList } from './billingCycleActions';
import BillingCycleList from './billingCycleList';

class BillingCycleListContainer extends Component {
    componentWillMount() {
        this.props.getList();    
    }

    render() {
        return (
            <BillingCycleList list={this.props.list} />
        );
    }
};

const mapStateToProps = state => ({list: state.billingCycle.list});
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleListContainer);