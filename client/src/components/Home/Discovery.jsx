import React from 'react'

const Discovery = () => {
    return (
        <section>
            <div className='flex flex-wrap relative mx-auto max-w-[1200px] py-[40px]'>

                <div className='mb-[22px] items-center flex leading-[1.2]'>
                    <h2 className='text-[26px] font-light ml-[8px] text-[#666] block '>
                        Descubrí
                    </h2>
                </div>
                <div className='pr-[8px] w-full flex pl-[8px]'>
                    <a className='mt-[15px] mr-[15px] lg:max-w-[584px] w-[50%]
                bg-white rounded shadow-nav-shadow hover:shadow-cart-discovery h-[250px] overflow-hidden flex'>
                        <div className='self-center flex flex-col flex-grow flex-shrink-0 flex-auto mr-[32px] py-[32px] pl-[32px]'>
                            <span className='text-[12px] tracking-wide mb-[12px] 
                        text-[#4b4b4b] font-semibold leading-[1] uppercase'>
                                Muebles para el Hogar
                            </span>
                            <span className='text-[28px] text-[#4b4b4b] font-semibold leading-[1.1] uppercase'>
                                Hasta 30% off  y
                            </span>
                            <span className='text-[28px] text-[#4b4b4b] font-semibold leading-[1.1] uppercase'>
                                12x CUOTAS FIJAS
                            </span>
                            <button className='text-[14px] h-9 leading-[1px] w-24
                        rounded-sm font-semibold mt-[13px] py-[9px] px-[10px]
                        bg-[#3483fa] border-transparent text-white'>
                                Ver más
                            </button>
                        </div>
                        <div className='h-[250px] min-w-[290px]'>
                            <img className='float-right h-[100%] w-auto' decoding="async"
                                src="https://http2.mlstatic.com/D_NQ_842068-MLA53605582676_022023-C.webp" alt="Muebles para el Hogar" />
                        </div>
                    </a>
                    <a className='mt-[15px] mr-[15px] lg:max-w-[584px] w-[50%]
                bg-white rounded shadow-nav-shadow hover:shadow-cart-discovery h-[250px] overflow-hidden flex'>
                        <div className='self-center flex flex-col flex-grow flex-shrink-0 flex-auto mr-[32px] py-[32px] pl-[32px]'>
                            <span className='text-[12px] tracking-wide mb-[12px] 
                        text-[#4b4b4b] font-semibold leading-[1] uppercase'>
                                Semana de la Mascota
                            </span>
                            <span className='text-[28px] text-[#4b4b4b] font-semibold leading-[1.1] uppercase'>
                                hasta 15% off
                            </span>
                            <span className='text-[28px] text-[#4b4b4b] font-semibold leading-[1.1] uppercase'>
                                ¡Dale un gustito!
                            </span>
                            <button className='text-[14px] h-9 leading-[1px] w-24
                        rounded-sm font-semibold mt-[13px] py-[9px] px-[10px]
                        bg-[#3483fa] border-transparent text-white'>
                                Ver más
                            </button>
                        </div>
                        <div className='h-[250px] min-w-[290px]'>
                            <img className='float-right h-[100%] w-auto' decoding="async"
                                src="https://http2.mlstatic.com/D_NQ_643674-MLA53605692532_022023-C.webp" alt="Semana de la Mascota" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Discovery