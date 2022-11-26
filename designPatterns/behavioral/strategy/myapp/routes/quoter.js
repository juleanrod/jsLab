var express = require('express');
var router = express.Router();
const QuoterContext = require('../quoter/quoterContext');
const LocalStrategy = require('../quoter/localStrategy');
const LocalWithTaxStrategy = require('../quoter/localWithTaxStrategy');

const  gain = 1.3;
const IVA = 0.16;

router.get('/local', (req, res, next) => {
    const quoter = new QuoterContext(new LocalStrategy(), gain);
    const amount = req.query.amount;
    const total = quoter.quote(amount);

    res.send(JSON.stringify(total));
});

router.get('/localwithtax', (req, res, next) => {
    const quoter = new QuoterContext(new LocalWithTaxStrategy(IVA), gain);
    const amount = req.query.amount;
    const total = quoter.quote(amount);

    res.send(JSON.stringify(total));
});

module.exports = router;
