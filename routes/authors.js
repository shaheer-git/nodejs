const express = require('express')
const router = express.Router()
const Author  = require('../models/author')

//For all authors
router.get('/', async(req, res) => {
    const searchOption = {};
    if (req.query.name !== null && req.query.name !== '') {
        searchOption.name = new RegExp(req.query.name,'i');
    }
    try {
        const authors = await Author.find(searchOption);
        res.render('authors/index',{
            authors : authors,
            searchOption: req.query
        });
    } catch(error) {
        console.log(error); 
        res.redirect('/');
    }
})

//For creating new author
router.get('/new', (req, res) => {
    res.render('authors/new',{ author: new Author()});
})

//handling the req which will come from the form.
router.post('/', async (req, res) => {
    const author = new Author({
        name: req.body.name
    })
    try{
        const newAuthor = await author.save();
        res.redirect('authors');
    }catch{
        res.render('authors/new',{
            author: author,
            errorMessage: "Error creating the author"
        })
    }
})

module.exports = router;