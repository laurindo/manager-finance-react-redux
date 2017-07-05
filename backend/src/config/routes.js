const express = require('express');

module.exports = (server) => {
    //Defining base route
    const router = express.Router();
    server.use('/api', router);

    //Mapping routes
    const BillingCycleService = require('../api/billingCycle/billingCycleService');
    BillingCycleService.register(router, '/billingCycles');
};