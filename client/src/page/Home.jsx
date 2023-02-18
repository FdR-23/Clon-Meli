import React, { useState } from 'react'

import HomeCarousel from '../components/Home/HomeCarousel.jsx'
import HomeSubcripcion from '../components/Home/HomeSubcripcion.jsx'
import PartnersSub from '../components/Home/PartnersSub.jsx'
import PaymentsHome from '../components/Home/PaymentsHome.jsx'
import CatPopulares from '../components/Home/CategoriesPopular/CatPopulares.jsx'
import Regulations from '../components/Home/Regulations.jsx'
import Regret from '../components/Home/Regret.jsx'
import ShoppingInfo from '../components/Home/ShoppingInfo.jsx'
import Discovery from '../components/Home/Discovery.jsx'
import DiscoverOfert from '../components/Home/DiscoverOfert.jsx'
import AdnArea from '../components/Home/AdnArea.jsx'
import OfficialStore from '../components/Home/OfficialStore/OfficialStore.jsx'
import Banner from '../components/Banner.jsx'
import Offerts from '../components/Home/Offerts/Offerts.jsx'
const Home = () => {
    // const [open, setOpen] = useState(true);

    // const handletoggle = () => {
    //     setOpen(!open)
    // }
    // if (open) {
    //     return <Banner  setToggle={handletoggle} />
    // }
    return (
        <main className='flex flex-col w-full h-auto lg:block  bg-main'>
            <HomeCarousel />
            <PaymentsHome />
            <Offerts/>
            <HomeSubcripcion />
            <PartnersSub />
            <AdnArea/>
            <Discovery />
            <OfficialStore />
            <DiscoverOfert />
            <CatPopulares />
            <ShoppingInfo />
            <Regret />
            <Regulations />


        </main >
    )
}

export default Home