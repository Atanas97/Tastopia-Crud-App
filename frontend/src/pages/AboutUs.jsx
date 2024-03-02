import React from 'react'

//Component import
import PageBanner from '../components/PageBanner'

//Images import
import banner from '../assets/banners/banner1.png'

const AboutUs = () => {
  return (
    <>
        <PageBanner title='About Us' banner={banner} />
    </>
  )
}

export default AboutUs