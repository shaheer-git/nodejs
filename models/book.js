const mongoose = require('mongoose')
const coverImageBasePath = 'uploads/bookCovers'
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        
    },
    pageCount: {
        type: Number,
        required: true
    },
    publishedDate: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    coverImage: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    }
})

module.exports = mongoose.model('Books', bookSchema)
module.exports.coverImageBasePath = coverImageBasePath
