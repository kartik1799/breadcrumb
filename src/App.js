import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import ProductList from './ProductList';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <BrowserRouter>
    <Breadcrumbs/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products/:id' element={<Product/>}></Route>
        <Route path='/products/' element={<ProductList/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
