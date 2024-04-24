import React from 'react'
import {
    BrowserRouter,
    Routes as ReactDomRoutes,
    Route
} from "react-router-dom"
import Home from '../pages/Home/Home'
import Layout from '../components/Layout/Layout'
import Products from '../pages/Products/Products'
import Checkout from '../pages/Checkout/Checkout'
import Pago from '../pages/Pago/Pago'

const routes = () => {
  return (
    <BrowserRouter>
        <ReactDomRoutes>
            <Route path='/' element={<Layout> <Home/> </Layout>}/>
            <Route path='/productos' element={<Layout> <Products/> </Layout>}/>
            <Route path='/checkout' element={<Layout> <Checkout/> </Layout>}/>
            <Route path='/pago' element={<Layout> <Pago/> </Layout>}/>
        </ReactDomRoutes>
    </BrowserRouter>
  )
}

export default routes