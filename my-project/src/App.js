 import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './common/Navbar'
import AddProduct from './pages/AddProduct'
import DisplayProduct from './pages/DisplayProduct'
 
 const App = () => {
   return (
     <>
        <div>
             
                    <Navbar/>
                    <Routes>
                       <Route path="/" element={<Home />} />
                       <Route path="/add" element={<AddProduct />} />
                       <Route path="/display" element={<DisplayProduct />} />



                    </Routes>
              


             
            
        </div>
     </>
   )
 }
 
 export default App