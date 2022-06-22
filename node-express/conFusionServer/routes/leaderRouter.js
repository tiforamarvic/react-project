const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/:leaderId?')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    if (req.params.leaderId) {
        res.end('Will add the dish: ' + req.params.leaderId + ' with details: ' + req.body.description);
    }else{
        res.end('POST operation not supported on /leaders/'+ req.params.leaderId);
    }
})
.put((req, res, next) => {
    if (req.params.leaderId) {
        res.write('Updating the leader: ' + req.params.leaderId + '\n');
        res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description);
    } else {
        res.end('Sending all leaders back to you');
    }
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});

module.exports = leaderRouter;