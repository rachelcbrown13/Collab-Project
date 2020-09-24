const express = require('express');
const bodyParser = require('body-parser');
const { Profiler } = require('react');
const Profile = require('../modules/profile');

const profileRouter = express.Router();

profileRouter.use(bodyParser.json());

//profile Router
profileRouter.route('/')
.get((req, res, next) => {
    Profile.find()
    .then(profiles => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(profiles);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Profile.create(req.body)
    .then(profile => {
        console.log('Profile Created ', profile);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(profile);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /profiles');
})
.delete((req, res, next) => {
    Profile.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(profile);
    })
    .catch(err => next(err));
});

//Individual Profile Router
profileRouter.route('/:profileId')
.get((req, res, next) => {
    Profile.findById(req.params.profileId)
    .then(profile => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(profile);
    })
    .catch(err => next(err));
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /profiles/${req.params.profileId}`);
})
.put((req, res, next) => {
    Profile.findByIdAndUpdate(req.params.profileId, {
        $set: req.body
    }, { new: true })
    .then(profile => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(profile);
    })
    .catch(err => next(err));
})
.delete((req, res, next) => {
    Profile.findByIdAndDelete(req.params.profileId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports = profileRouter;