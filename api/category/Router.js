const app = require('express');
const router = app.Router();

const { addCategory, categoryById, getAllCategory } = require('./Controller')

router.post('/add-category', addCategory)
router.get('/category-by-id', categoryById)
router.get('/get-all-category', getAllCategory)

module.exports = router