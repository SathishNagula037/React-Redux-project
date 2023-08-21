import express from 'express'
import Product from '../models/ProductModal.js'
import { isAuth,isAdmin } from '../Utilis.js'



const productRouter = express()



productRouter.post('/createProduct', isAuth, async (req, res) => {
    console.log("Hello")

    const { ProductName, ProductDetail, ProductPrice, ProductAvailable } = req.body
    try {
        const SaveProduct = new Product({
            ProductName,
            ProductDetail,
            ProductPrice,
            user_id: req.user._id,
            ProductAvailable
        })
        const isSaved = await SaveProduct.save()
        res.status(201).send({ message: "Product Saved Successfully...", isSaved })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "server error", error })
    }
})

productRouter.get('/products',  async (req, res) => {
    try{
        const products = await Product.find();
        console.log(products)
        res.status(201).send({ message: 'Products Fetched Successfully...', products})

    }catch(error){
        console.log(error)
    }
})


export default productRouter