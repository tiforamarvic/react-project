const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/:promoId?')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promos to you!');
})
.post((req, res, next) => {
    if (req.params.promoId) {
        res.end('Will add the dish: ' + req.params.promoId + ' with details: ' + req.body.description);
    }else{
        res.end('POST operation not supported on /promos/'+ req.params.promoId);
    }
})
.put((req, res, next) => {
    if (req.params.promoId) {
        res.end(`Sending details of the dish back to you: ${req.params.promoId}`)
    } else {
        res.end('Sending all promos back to you');
    }
})
.delete((req, res, next) => {
    res.end('Deleting all promos');
});

module.exports = promoRouter;