const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Post = require('../models/post')
const passport = require('../models/passport')

router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

router.post('/newpost', (req, res) => {
    console.log('create post');
    const { title, post } = req.body
    const newPost = new Post({
        title: title,
        post: post
    })
    newPost.save((err, savedPost) => {
        if (err) return res.json(err)
        res.json(savedPost)
    })
})

router.put('/editpost/:id', (req, res) => {
    console.log('edit post');
    Post.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        post: req.body.post
    },
        function (err, response) {
            if (err) {
                res.send(err);
            } else {
                console.log(response);
                console.log('Post updated!');
            }
        }
    )
})

router.delete('/deletepost/:id', (req, res) => {
    console.log('delete post');
    Post.findByIdAndDelete(req.params.id, {
       
    },
        function (err, response) {
            if (err) {
                res.send(err);
            } else {
                console.log(response);
                console.log('Post Deleted!');
            }
        }
    )
})

module.exports = router