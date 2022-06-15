const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/:dishId?')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    if (req.params.dishId) {
        res.end('Will add the dish: ' + req.params.dishId + ' with details: ' + req.body.description);
    }else{
        res.end('POST operation not supported on /dishes/'+ req.params.dishId);
    }
})
.put((req, res, next) => {
    if (req.params.dishId) {
        res.end(`Sending details of the dish back to you: ${req.params.dishId}`)
    } else {
        res.end('Sending all dishes back to you');
    }
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});

module.exports = dishRouter;