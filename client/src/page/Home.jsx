import React from 'react'

import HomeCarousel from '../components/Home/HomeCarousel.jsx'
import HomeSubcripcion from '../components/Home/HomeSubcripcion.jsx'
import PartnersSub from '../components/Home/PartnersSub.jsx'
import PaymentsHome from '../components/Home/PaymentsHome.jsx'
import CatPopulares from '../components/Home/CatPopulares.jsx'
import Regulations from '../components/Home/Regulations.jsx'


const Home = () => {



    return (
        <main className='flex flex-col lg:w-full lg:block lg:h-auto'>
            <HomeCarousel />
            <PaymentsHome />
            <HomeSubcripcion />
            <PartnersSub />
            <CatPopulares />
            <Regulations />




        </main >
    )
}

export default Home