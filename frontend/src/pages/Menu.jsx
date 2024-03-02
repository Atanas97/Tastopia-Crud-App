import React from 'react'

//Component import
import PageBanner from '../components/PageBanner'

//Images import
import banner from '../assets/banners/banner1.png'

const Menu = () => {
  return (
    <>
        <PageBanner banner={banner} title='Our Menu' />
    </>
  )
}

export default Menu