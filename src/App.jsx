import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './bunkandbeyond/components/Header/Header'
import BannerSection from './bunkandbeyond/components/BannerSection/BannerSection'
import AboutUs from './bunkandbeyond/components/AboutUs/AboutUs'
import Amenities from './bunkandbeyond/components/Amenities/Amenities'
import UpcomingProjects from './bunkandbeyond/components/UpcomingProjects/UpcomingProjects'
import Footer from './bunkandbeyond/components/Footer/Footer'
import FeaturedRooms from './bunkandbeyond/components/FeaturedRooms/FeaturedRooms'
import GetInTouch from './bunkandbeyond/components/GetInTouch/GetInTouch'
import Location from './bunkandbeyond/components/Location/Location'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Header/>
      <BannerSection/>
      <AboutUs/>
     <Amenities/> 
     <FeaturedRooms/>
     <UpcomingProjects/>
     <GetInTouch/>
     <Location/>
     <Footer/>
     </div>
    </>
  )
}

export default App
