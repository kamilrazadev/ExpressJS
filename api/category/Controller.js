const async = require('hbs/lib/async');
const { Category } = require('./Model');
const { connect } = require('mongoose');
require('dotenv').config();


const addCategory = async (req, res) => {

    const {CategoryName, CategoryImg} = req.body

    if(!CategoryName || !CategoryImg){
        res.json({
            message: "All Values are Required"
        })
    } else {
        try {

            await connect(process.env.MONGO_URL);
            console.log('DB Connected') 

            await Category.create({CategoryName, CategoryImg})
            res.status(201).json({
                message: "Category Added"
            })
            
        } catch (error) {
            res.json({
                message: error.message
            }) 
        }
    }
}

const categoryById = (req, res) => {
    res.json({
        message: "Done"
    })
}

const getAllCategory = async (req, res) => {
    try {

        await connect(process.env.MONGO_URL);
        console.log('DB Connected') 

        const category = await Category.find()
        res.status(200).json({
            category
        })
        
    } catch (error) {
        res.json({
            message: error.message
        }) 
    }
}

module.exports = { addCategory, categoryById, getAllCategory }