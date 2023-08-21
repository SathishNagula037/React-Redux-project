import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { login } from '../../redux/actions/userAction';
import { resetError } from '../../redux/actions/productAction';


export default function Login(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const { search } = useLocation();
  
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    //here i am submitting the login details since it is a async operation it will take some time to get the 
    //userInfo from the database  so we have to wait
   
  };



  useEffect(() => {
    if(userInfo){  //we have to wait for sometime since it is a async userinfo it will get some time from database
      setIsLoggedIn(true)
      console.log("success")
    }
    if(error){
      alert("Something went wrong...")
      console.log("error")
    }
    return () => {
      // Reset userInfo and error when the component unmounts
      setIsLoggedIn(false);
      dispatch(resetError());// Assuming you have a state named "error"
    };
  
  }, [userInfo, error]) //when it is true then only it will calls

  useEffect(() => {
    if(isLoggedIn){
      console.log("hello")
      alert(`Logged Successfully:${userInfo.name} `)
      navigate('/home')
    }
  },[isLoggedIn])
 



  return (

    <div>
     
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>

        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
      
        <div>
          <label />
          <div>
           
          
          </div>
        </div>
      </form>
     
    </div>
  );
}