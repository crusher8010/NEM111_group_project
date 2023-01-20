import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Manoj/Login'
import Signup from '../Components/Manoj/Signup'
import AdminAddProducts from '../Components/Anirudha/AdminAddProducts';
import AdminDashboard from '../Components/Anirudha/AdminDashboard';
import PurchaseHistory from '../Components/Anirudha/PurchaseHistory';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Signup />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/adminDashboard' element={<AdminDashboard />}></Route>
        <Route path='/adminaddproduct' element={<AdminAddProducts />}></Route>
        <Route path="/purchaseHistory" element={<PurchaseHistory />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes