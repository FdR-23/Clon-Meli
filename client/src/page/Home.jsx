import React from 'react'

import HomeCarousel from '../components/Home/HomeCarousel.jsx'
import HomeSubcripcion from '../components/Home/HomeSubcripcion.jsx'
import PartnersSub from '../components/Home/PartnersSub.jsx'
import PaymentsHome from '../components/Home/PaymentsHome.jsx'
import CatPopulares from '../components/Home/CatPopulares.jsx'
import Regulations from '../components/Home/Regulations.jsx'
import Regret from '../components/Home/Regret.jsx'
import ShoppingInfo from '../components/Home/ShoppingInfo.jsx'
const Home = () => {



    return (
        <main className='flex flex-col lg:w-full lg:block lg:h-auto bg-main'>
            <HomeCarousel />
            <PaymentsHome />
            <HomeSubcripcion />
            <PartnersSub />
            <CatPopulares />
            <ShoppingInfo />
            <Regret />
            <Regulations />



        </main >
    )
}

export default Home