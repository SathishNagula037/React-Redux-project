
import './App.css';
import ProductList from './Screens/Product/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Screens/User/Login';
import CreateProduct from './Screens/Product/Createproduct';
import Home from './Screens/Home';




function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={< ProductList />}/>
          <Route path='/login' element={< Login />}/>
          <Route path='/create' element={< CreateProduct />}/>
          <Route path='/home' element={< Home />}/>
        </Routes>
      </BrowserRouter>

        </div>
        );
}

        export default App;
