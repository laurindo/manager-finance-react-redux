import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import LabelAndInput from '../common/form/labelAndInput';

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} label='Name' cols='12 4' placeholder='Type name' />
                    <Field name='month' component={LabelAndInput} label='Month' cols='12 4' placeholder='Type month' type='number'  />
                    <Field name='year' component={LabelAndInput} label='Year' cols='12 4' placeholder='Type year' type='number'  />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        );
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm);