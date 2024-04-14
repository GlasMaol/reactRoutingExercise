import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'
import {Routes, Route, Link } from 'react-router-dom'



function App() {
  

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/' role='link' aria-label='link to website'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home name={'Ally'}/>}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/products/:id' element={<Product />}/>
      </Routes>
    </div>
  )
}

export default App
