import React from 'react'
import Banner from '../bunkandbeyond/components/RoomDetails/Banner/Banner'
import OurRooms from '../bunkandbeyond/components/RoomDetails/OurRooms/OurRooms'
import Header from '../bunkandbeyond/components/Header/Header'
import Footer from '../bunkandbeyond/components/Footer/Footer'

export default function RoomDetails() {
  return (
    <div>
        <Header />
      <Banner />
      <OurRooms />
      <Footer />
    </div>
  )
}
