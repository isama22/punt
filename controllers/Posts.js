const Post = require('../models/post')

module.exports = {
    index,
    show, 
    create
}

async function index(req, res) {
    const posts = await Post.find({})
    .sort({createdAt: -1})
    res.status(200).json(posts)
}

async function show(req, res) {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
}

async function create(req, res) {
    req.body.user = req.user
    const post = await Post.create(req.body)
    res.status(201).json(post)
}