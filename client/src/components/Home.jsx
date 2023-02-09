import React from 'react'
import HomeCarousel from './HomeCarousel.jsx'
import MoreCategory from './MoreCategory'
import PaymentsHome from './PaymentsHome.jsx'


const Home = () => {
    return (
        <main className='flex flex-col lg:w-full lg:block lg:h-auto'>
            <HomeCarousel />
            <PaymentsHome />



            <section>
                <div className='flex flex-wrap'>

                </div>

            </section>



        </main >
    )
}

export default Home