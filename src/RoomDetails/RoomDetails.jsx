import React from 'react'
import Banner from '../bunkandbeyond/components/RoomDetails/Banner/Banner'
import OurRooms from '../bunkandbeyond/components/RoomDetails/OurRooms/OurRooms'
import Header from '../bunkandbeyond/components/Header/Header'
import Footer from '../bunkandbeyond/components/Footer/Footer'
import MobileHeader from '../bunkandbeyond/components/MobileHeader/MobileHeader'
import { useMediaQuery } from 'react-responsive'

import { Element } from "react-scroll";
import ScrollToTop from '../bunkandbeyond/components/ScrollToTop/ScrollToTop'

export default function RoomDetails() {
    const isMobile = useMediaQuery({ query: '(max-width: 800px)' })
  return (
    <ScrollToTop>
    <div>
      {isMobile ?<MobileHeader /> : <Header />}  
      <Banner />

    <Element name='rooms'>
      <OurRooms />
      </Element>

      <Footer />
    </div>
    </ScrollToTop>
  )
}
