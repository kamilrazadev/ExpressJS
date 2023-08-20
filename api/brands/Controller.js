const async = require('hbs/lib/async');
const { Brand } = require('./Model');
const { connect } = require('mongoose');
require('dotenv').config();


const addBrand = async (req, res) => {

    const {BrandName, BrandImg} = req.body

    if(!BrandName || !BrandImg){
        res.json({
            message: "All Values are Required"
        })
    } else {
        try {

            await connect(process.env.MONGO_URL);
            console.log('DB Connected') 

            await Brand.create({BrandName, BrandImg})
            res.status(201).json({
                message: "Brand Added"
            })
            
        } catch (error) {
            res.json({
                message: error.message
            }) 
        }
    }
}

const brandById = (req, res) => {
    res.json({
        message: "Done"
    })
}

const getAllBrands = async (req, res) => {
    try {

        await connect(process.env.MONGO_URL);
        console.log('DB Connected') 

        const brands = await Brand.find()
        res.status(200).json({
            brands
        })
        
    } catch (error) {
        res.json({
            message: error.message
        }) 
    }
}

module.exports = { addBrand, brandById, getAllBrands }