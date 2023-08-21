import React, { useEffect, useState } from "react";
import { createProduct } from "../../redux/actions/productAction";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function CreateProduct() {
    const [ProductName, setProductName] = useState('');
    const [ProductDetail, setProductDetail] = useState('');
    const [ProductPrice, setProductPrice] = useState(0);
    const [ProductAvailable, setProductAvailable] = useState(true)
 
    const [count, setCount] = useState(0)

    const [creating, setCreating] = useState(false);
 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
   
 


  
  const increment = () => {
    setCount(() => count  + 1 )
  }

    const onChangecheckbox = ()=> {
        setProductAvailable(!ProductAvailable)
        console.log(ProductAvailable)
    }

    useEffect(() => {
      console.log("mounters")
    },[count])



    const submitHandler = async  (e) => {
      e.preventDefault();
  
      setCreating(true); // Set creating state to true immediately
      console.log('creating:', true); // Log that creating is true
  
      try {
        await dispatch(
          createProduct({
            ProductAvailable,
            ProductDetail,
            ProductName,
            ProductPrice,
            user_id: userInfo._id,
          })
        );
      } catch (error) {
        console.error('Product creation error:', error);
      } finally {
        setCreating(false); // Set creating state back to false after action is completed
        console.log('creating:', false); // Log that creating is false
      }
    };

      useEffect(() => {
        console.log('Updated creating state:', creating);
      }, [creating]);

    return (
      <div>
       <p>Count :{count}</p>
        <form className="form" onSubmit={submitHandler}>
          <div>
            <h1>Username: {userInfo.name}</h1>
          </div>
       
            <>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter ProductName"
                  value={ProductName}
                  onChange={(e) => setProductName(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="ProductPrice">ProductPrice</label>
                <input
                  id="ProductPrice"
                  type="number"
                  placeholder="Enter price"
                  value={ProductPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="ProductAvailable">ProductAvailable</label>
                <input
                  id="ProductAvailable"
                  type="checkbox"
                  placeholder="Enter ProductAvailable"
                  onChange={onChangecheckbox}
                ></input>
              </div>

              <div>
                <label htmlFor="ProductDetail">ProductDetail</label>
                <input
                  id="ProductDetail"
                  type="text"
                  placeholder="Enter ProductDetail"
                  onChange={(e) => setProductDetail(e.target.value)}
                ></input>
              </div>
           
             
              <div>
                <label />
                <button className="primary" type="submit" disabled={creating}>
            {creating ? 'Creating...' : 'Create'}
          </button>
          <button onClick={increment}>Counu</button>
              </div>
            </>
        
        </form>
       
      </div>
    );
}
  