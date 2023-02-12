import React from 'react'

const DiscoverOfert = () => {
  return (
    <section>
    <div className='flex flex-wrap relative mx-auto max-w-[1200px] py-[40px]'>

        <div className='mb-[22px] items-center flex leading-[1.2]'>
            <h2 className='text-[26px] font-light ml-[8px] text-[#666] block '>
                Te puede interesar
            </h2>
        </div>
        <div className='pr-[8px] w-full flex pl-[8px]'>
            <a className='mt-[15px] mr-[15px] lg:max-w-[584px] w-[50%]
            bg-white rounded shadow-nav-shadow hover:shadow-cart-discovery h-[250px] overflow-hidden flex'>
                <div className='self-center flex flex-col flex-grow flex-shrink-0 flex-auto mr-[32px] py-[32px] pl-[32px]'>
                    <span className='text-[12px] tracking-wide mb-[12px] 
                    text-[#4b4b4b] font-semibold leading-[1] uppercase'>
                        FOFERTAS DIVERTIDAS
                    </span>
                    <span className='text-[28px] text-[#4b4b4b] font-semibold leading-[1.1] uppercase'>
                        HASTA 40% OFF EN
                    </span>
                    <span className='text-[28px] text-[#4b4b4b] font-semibold leading-[1.1] uppercase'>
                        juegos y juguetes
                    </span>
                    <button className='text-[14px] h-9 leading-[1px] w-24
                    rounded-sm font-semibold mt-[13px] py-[9px] px-[10px]
                    bg-[#3483fa] border-transparent text-white'>
                        Ver más
                    </button>
                </div>
                <div className='h-[250px] min-w-[290px]'>
                    <img className='float-right h-[100%] w-auto' decoding="async"
                        src="https://http2.mlstatic.com/D_NQ_945598-MLA53606274951_022023-C.webp" alt="OFERTAS DIVERTIDAS" />
                </div>
            </a>
            <a className='mt-[15px] mr-[15px] lg:max-w-[584px] w-[50%]
            bg-white rounded shadow-nav-shadow hover:shadow-cart-discovery h-[250px] overflow-hidden flex'>
                <div className='self-center flex flex-col flex-grow flex-shrink-0 flex-auto mr-[32px] py-[32px] pl-[32px]'>
                    <span className='text-[12px] tracking-wide mb-[12px] 
                    text-[#4b4b4b] font-semibold leading-[1] uppercase'>
                        zapatillas
                    </span>
                    <span className='text-[28px] text-[#4b4b4b] font-semibold leading-[1.1] uppercase'>
                    HASTA 35% OFF
                    </span>
                    <span className='text-[28px] text-[#4b4b4b] font-semibold leading-[1.1] uppercase'>
                    ¡aprovechá!
                    </span>
                    <button className='text-[14px] h-9 leading-[1px] w-24
                    rounded-sm font-semibold mt-[13px] py-[9px] px-[10px]
                    bg-[#3483fa] border-transparent text-white'>
                        Ver más
                    </button>
                </div>
                <div className='h-[250px] min-w-[290px]'>
                    <img className='float-right h-[100%] w-auto' decoding="async"
                        src="https://http2.mlstatic.com/D_NQ_810471-MLA53606354760_022023-C.webp" alt="Zapatillas" />
                </div>
            </a>
        </div>
    </div>
</section>
  )
}

export default DiscoverOfert