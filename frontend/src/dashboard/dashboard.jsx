import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSummaryAction } from './dashboardActions';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

class Dashboard extends Component {
    componentWillMount() {
        this.props.getSummaryAction();
    }

    render() {
        const {credit, debit} = this.props.summary;
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' value={`R$ ${credit}`} text='Total de Créditos' icon='bank' color='green' />
                        <ValueBox cols='12 4' value={`R$ ${debit}`} text='Total de Débitos' icon='credit-card' color='red' />
                        <ValueBox cols='12 4' value={`R$ ${credit - debit}`} text='Consolidado' icon='money' color='blue' />
                    </Row>
                </Content>
            </div>
        );
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary});
const mapDispatchToProps = dispatch => bindActionCreators({getSummaryAction}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);