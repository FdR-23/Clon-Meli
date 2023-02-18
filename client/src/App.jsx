import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import EndPage from './components/EndPage'
import Home from './page/Home.jsx'
import ListProductSearched from './page/ListProductSearched.jsx'
import MoreCategories from './page/MoreCategories.jsx'
import ProductNotFound from './components/ProductSearched/ProductNotFound.jsx'

function App() {



  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/more-category' element={<MoreCategories />} />
        <Route path='/search-product/search' element={<ListProductSearched />} />
        <Route path='/product-not-found' element={<ProductNotFound />} />
      </Routes>
      <EndPage />
    </Router>



  )
}

export default App
