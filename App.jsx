import React from 'react'
import Navbar from './component/Navbar/Navbar.jsx'
import Hero from './component/Hero/Hero.jsx'
import Category from "./component/Category/Category.jsx"
import Category2 from "./component/Category/Category2.jsx"
import Services from './component/Services/Services.jsx'
import Banner from './component/Banner/Banner.jsx'

const BannerData = {
  discount: "30% oFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "lorem ipsumm, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37"
}

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner />
    </div>
  )
}

export default App
