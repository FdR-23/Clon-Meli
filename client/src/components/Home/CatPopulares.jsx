import React from 'react'

const CatPopulares = () => {
    return (
        <section>
            <div className='flex flex-wrap relative mx-auto max-w-[1200px] pt-[40px] '>
                <div className='mb-[22px] items-center flex leading-[1.2]'>
                    <h2 className='text-[26px] font-light ml-2 w-full text-[#666]'>Categorías populares</h2>
                </div>

                <div className='rounded shadow-nav-shadow ml-[10px] overflow-hidden h-[340px]'>
                    <div className='static'>
                        <div className='static block'>

                            <div className='m-0 p-0 overflow-hidden bock relative'>

                                <div className='opacity-100 w-[5100px] block left-0 relative top-0'>
                                    <div className='w-[170px] h-full min-h[1px] relative block float-left '>
                                        <div className='float-left h-[340px] w-full'>

                                            <a className='absolute h-[170px] border-solid border-b-[1px] border-r-[1px] border-[#eae6e6]
                                            bg-white  text-[#333] text-[15px] p-3 text-center w-full'
                                                href="https://www.mercadolibre.com.ar/c/autos-motos-y-otros#c_id=/home/categories/element&amp;c_category_id=MLA1743&amp;c_uid=304a3d97-b43a-4375-bfca-879d1e0c94ee">
                                                <div className='h-[44px] w-[44px] mx-auto mt-[34px] mb-[14px]'>

                                                    <svg className='text-[#3483fa] fill-none h-[48px] w-[48px] stroke-current' aria-labelledby="MLA1743" role="img">
                                                        <title className='text-[#3483fa]' id="MLA1743">Autos, Motos y Otros</title>
                                                        <use className='fill-inherit stroke-inherit stroke-white-[2px]' xlinkHref="#nc-car-front">Autos, Motos y Otros</use>
                                                    </svg>



                                                </div>
                                                <p>Autos, Motos y Otros</p>
                                            </a>

                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>



                </div>


            </div>








        </section>
    )
}

export default CatPopulares