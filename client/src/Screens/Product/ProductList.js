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

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'ProductName',
      headerName: 'ProductName',
      width: 150,
      editable: true,
    },
    {
      field: 'ProductDetail',
      headerName: 'ProductDetail',
      width: 150,
      editable: true,
    },

    {
      field: 'ProductPrice',
      headerName: 'ProductPrice',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  const rows = products.map((product) => ({
    id: product.id,
    ProductName: product.name,
    ProductDetail: product.ProductDetail,
    ProductPrice: product.ProductPrice,
    ProductAvailable: product.ProductAvailable

  }));


  return (


    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid

        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableRowSelectionOnClick
      />

    </Box>
  );


}

export default ProductList;
