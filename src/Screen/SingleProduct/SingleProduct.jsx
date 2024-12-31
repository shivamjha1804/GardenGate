import React from 'react'
import UpperNavBar from '../../Component/Nav/UpperNavBar'
import NavBar from '../../Component/Nav/NavBar'
import Footer from '../../Component/Footer/Footer'
import FooterPayment from '../../Component/FooterPayment/FooterPayment'
import CopyRight from '../../Component/CopyRight/CopyRight'
import Product from '../../Component/Product/Product'
import Recommended from '../../Component/Recommended/Recommended'

const SingleProduct = () => {
  return (
    <div>
       <UpperNavBar/>
       <NavBar/>
       <Product/>
       <Recommended/>
       <Footer/>
       <FooterPayment/>
       <CopyRight/>
    </div>
  )
}

export default SingleProduct