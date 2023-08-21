import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../../redux/actions/productAction';
import { DataGrid } from '@mui/x-data-grid';



function ProductList() {
    const dispatch = useDispatch();
    const { loading, error, products, message } = useSelector(state => state.productList);



    useEffect(() => {
        dispatch(listProduct());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }



  
            return (
          
                    <div>
                      {products && products.map((product) => (
                        <p key={product.id}>{product.name}</p>
                      ))}
                    </div>
               
            );
   

}

export default ProductList;
