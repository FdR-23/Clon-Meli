import React from 'react'

const HomeSubcripcion = () => {
    return (
        <section>
            <div className='flex flex-wrap relative my-0 mx-5 lg:mx-auto max-w-[1200px] py-[40px] '>
                <div className='bg-white rounded-md shadow-nav-shadow ml-[10px] overflow-hidden w-[1180px]'>
                    <div className='text-white flex justify-between items-center min-h-[55px] py-[16px] px-[24px]
                        bg-gradient-to-r from-[#a90f90] to-[#0c1a51] box-content'>
                        <div className='text-[26px] font-semibold leading-[30px]'>
                            Suscribite al nivel 6
                        </div>


                        <div className='flex flex-col font-semibold items-start leading-[1] relative text-right  
                                before:border-l-[2px] before:border-solid before:border-white before:h-[37px] 
                                before:left-[-8px] before:absolute before:top-0 before:font-semibold '>
                            <span className='text-[14px] font-medium line-through '>
                                $&nbsp;1.439
                            </span>
                            <span className='font-semibold leading-[1] text-right'>
                                <span className='font-semibold text-[24px] leading-[1] text-right'>
                                    $  499
                                    <sup className="loyalty-buylevel6__header-cents"> </sup>
                                </span>
                                <span className="loyalty-buylevel6__header-period"> /mes </span>
                            </span>
                        </div>

                    </div>

                    <div className='p-6  '>
                        <span className='block text-[18px] leading-[18px]' >
                            Conseguí los mejores beneficios en Mercado Libre</span>

                        <div className='flex justify-evenly mt-[32px] '>

                            <div className='items-center flex flex-1'>
                                <div className='border-[1px] border-solid border-[#efefef] rounded-[50%]
                               w-[72px] min-w-[72px] b-[72px] min-b-[72px] box-content overflow-hidden '>
                                    <img className='w-full h-auto' decoding="async"
                                        src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/dplus.svg" alt="Disney_img" />
                                </div>
                                <span className='text-[16px] mx-[16px] w-full'>Disney+ sin cargo</span>
                            </div>



                            <div className='items-center flex flex-1'>
                                <div className='border-[1px] border-solid border-[#efefef] rounded-[50%]
                               w-[72px] min-w-[72px] b-[72px] min-b-[72px] box-content overflow-hidden '>
                                    <img className='w-full h-auto' decoding="async"
                                        src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/starplus.svg" alt="Startplus_img" />
                                </div>
                                <span className='text-[16px] mx-[16px] w-full'>Star+ sin cargo</span>
                            </div>

                            <div className='items-center flex flex-1'>
                                <div className='border-[1px] border-solid border-[#efefef] rounded-[50%]
                               w-[72px] min-w-[72px] b-[72px] min-b-[72px] box-content overflow-hidden '>
                                    <img className='w-full h-auto' decoding="async"
                                        src="https://http2.mlstatic.com/resources/frontend/statics/loyal/v2/truckgiftv4@2x.png" alt="EnviarFree_img" />
                                </div>
                                <span className='text-[16px] mx-[16px] w-full'>Envíos gratis y rápidos desde $ 8.000 y 45% OFF en envíos de menos de $ 8.000</span>
                            </div>
                        </div>
                    </div>


                    <div className='items-center border-solid border-t-[1px]
                         border-[#ededed] flex justify-between py-[16px] px-[30px]'>
                        <span ></span>
                        <button className='bg-[#3483fa] border-transparent text-white
                            rounded-md inline-block text-[16px] font-semibold h-[48px] leading-[48px] 
                            px-6 text-center w-auto
                            hover:bg-[#2968c8] hover:border-transparent hover:text-white'>
                            <span className='h-full  text-center flex justify-center text-white'
                            >Suscribite</span>
                        </button>
                    </div>



                </div>
            </div>

        </section>
    )
}

export default HomeSubcripcion