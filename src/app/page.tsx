import React from 'react'
import HeaderTop from './components/HeaderTop'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Card from './components/Card'
import LatestProduct from './components/LatestProduct'
import Shopex from './components/Shopex'
import Footer from './components/Footer'
import UniqueFeature from './components/UniqueFeature'
import TrendingProducts from './components/TrendingProducts'
export default function Home () {
  return (
    <div>
      <HeaderTop/>
      <Navbar/>
      <Header/>
      <Card/>
      <LatestProduct/>
      <Shopex/>
      <UniqueFeature/>
      <TrendingProducts/>
      <Footer/>

    </div>
  )
}