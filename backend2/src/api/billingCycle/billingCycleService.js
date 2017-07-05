const BillingCycle = require('./billingCycle');
const ErrorHandler = require('../common/errorHandler');

BillingCycle.methods(['get', 'post', 'delete', 'put']);
BillingCycle.updateOptions({new: true, runValidators: true});
BillingCycle.after('post', ErrorHandler).after('put', ErrorHandler);


BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((err, value) => {
        if (err) {
            res.status(500).json({errors: [err]});
        } else {
            res.json({value});
        }
    });
});

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate({
        $project: {
            credit: {$sum: '$credits.value'},
            debit: {$sum: '$debits.value'}
        }
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debit: {$sum: "$debit"}}
    }, {
        $project: {_id: 0, credit: 1, debit: 1}
    }, (err, result) => {
        if (err) {
            res.status(500).json({errors: [err]});
        } else {
            console.log(result[0])
            res.json(result[0]);
        }
    });
});


module.exports = BillingCycle;