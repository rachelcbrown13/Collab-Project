const express = require('express');
const bodyParser = require('body-parser');

const profileRouter = express.Router();

//profile Router
profileRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the profiles to you');
})
.post((req, res) => {
    res.end(`Will add the profile: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /profiles');
})
.delete((req, res) => {
    res.end('Deleting all profiles');
});

//Individual Profile Router
profileRouter.route('/:profileId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of profile: ${req.params.profileId}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /profiles/${req.params.profileId}`);
})
.put((req, res) => {
    res.write(`Updating the profile: ${req.params.profileId}\n`);
    res.end(`Will update the profile: ${req.body.name} with description: ${req.body.description}`)
})
.delete((req, res) => {
    res.end(`Deleting profile: ${req.params.profileId}`);
});

module.exports = profileRouter;