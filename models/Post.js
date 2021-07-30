const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: '',
    text: '' 
}, { timestamps: true})

module.exports = mongoose.model('Post', PostSchema)