const Category = require('mongoose').model('Category');

module.exports = {
    all: (req, res) => {
        Category.find({}).then(categories => {
            res.render('admin/category/all', {categories: categories});
        })
    }
};

