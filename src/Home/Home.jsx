import React from 'react'
import Header from '../bunkandbeyond/components/Header/Header'
import BannerSection from '../bunkandbeyond/components/BannerSection/BannerSection'
import AboutUs from '../bunkandbeyond/components/AboutUs/AboutUs'
import Amenities from '../bunkandbeyond/components/Amenities/Amenities'
import FeaturedRooms from '../bunkandbeyond/components/FeaturedRooms/FeaturedRooms'
import UpcomingProjects from '../bunkandbeyond/components/UpcomingProjects/UpcomingProjects'
import GetInTouch from '../bunkandbeyond/components/GetInTouch/GetInTouch'
import Location from '../bunkandbeyond/components/Location/Location'
import Footer from '../bunkandbeyond/components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <BannerSection/>
      <AboutUs/>
     <Amenities/> 
     <FeaturedRooms/>
     <UpcomingProjects/>
     <GetInTouch/>
     <Location/>
     <Footer/>
    </div>
  )
}

export default Home
