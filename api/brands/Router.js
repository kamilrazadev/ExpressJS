const app = require('express');
const router = app.Router();

const { addBrand, brandById, getAllBrands } = require('./Controller')

router.post('/add-brand', addBrand)
router.get('/brand-by-id', brandById)
router.get('/get-all-brands', getAllBrands)

module.exports = router