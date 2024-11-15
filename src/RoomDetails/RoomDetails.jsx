import React from 'react'
import Banner from '../bunkandbeyond/components/RoomDetails/Banner/Banner'
import OurRooms from '../bunkandbeyond/components/RoomDetails/OurRooms/OurRooms'
import Header from '../bunkandbeyond/components/Header/Header'
import Footer from '../bunkandbeyond/components/Footer/Footer'
import MobileHeader from '../bunkandbeyond/components/MobileHeader/MobileHeader'
import { useMediaQuery } from 'react-responsive'

export default function RoomDetails() {
    const isMobile = useMediaQuery({ query: '(max-width: 800px)' })
  return (
    <div>
      {isMobile ?<MobileHeader /> : <Header />}  
      <Banner />
      <OurRooms />
      <Footer />
    </div>
  )
}
