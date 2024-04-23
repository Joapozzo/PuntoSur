import React from 'react'
import {
    BrowserRouter,
    Routes as ReactDomRoutes,
    Route
} from "react-router-dom"
import Home from '../pages/Home'
import Layout from '../components/Layout/Layout'

const routes = () => {
  return (
    <BrowserRouter>
        <ReactDomRoutes>
            <Route path='/' element={<Layout> <Home/> </Layout>}/>
        </ReactDomRoutes>
    </BrowserRouter>
  )
}

export default routes