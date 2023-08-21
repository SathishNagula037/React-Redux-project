import mongoose from "mongoose";



const ProductModal = new mongoose.Schema(
    {
        user_id: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
        ProductName: { type: String, required: true },
        ProductDetail: { type: String, required: true },
        ProductPrice: { type: Number, required: true },
        ProductAvailable: { type: String, required: true   }
    }


    )

const Product = mongoose.model('Product', ProductModal)
export default Product;