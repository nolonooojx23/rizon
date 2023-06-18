
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Product_info from './components/ProductInfo/Product_info'
import Products from './components/Products/Products'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Products/>
      <Product_info/>
    </div>
  )
}

export default App
