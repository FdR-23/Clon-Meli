import React from 'react'

const AdnArea = () => {
    return (
        <section className='mx-auto max-w-[1180px]'>
            <div className='py-10 '>

                <div className='rounded overflow-hidden relative flex aspect-[118/25]'>

                    <div className='flex w-[60%] items-center relative overflow-hidden '>
                        <img className='w-full h-auto absolute left-[50%] translate-x-[-50%] min-h-[100%]' alt="adn-picture" src="https://http2.mlstatic.com/D_NQ_817191-MLA53559372167_022023-OO.jpg" />
                        <div className='absolute flex flex-col ml-[9%] w-full'>
                            <div className='flex flex-col '>
                                <img className='w-[96px] h-[64px] p-4  m-0 box-content
                                 bg-white rounded aspect-[4/3] object-contain' alt="adn-logo" src="https://http2.mlstatic.com/D_NQ_814693-MLA53559372171_022023-OO.jpg" />
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#8533af] text-white w-[41%] px-[5.4%] pt-[5.4%] pb-[3.6%] ml[-1] flex flex-col justify-between'>
                        <div>
                            <p className='text-[28px] leading-[32px] font-semibold '>OFERTAS Y </p>
                            <p className='text-[28px] leading-[32px] font-semibold '>HASTA 12 CUOTAS</p>
                        </div>
                        <div className='mb-[8.9%] flex items-center'>
                            <p className='text-[18px] leading-[18px] font-normal items-center'>
                                Ver más
                            </p>

                            <div className='w-[12px] mt-[0.6%] ml-[3%] flex'>
                                <svg className='w-[60%]' width="60%" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.24264 0.585729L5.48528 4.82837L1.24264 9.07101" strokeWidth="1.5" stroke="#ffffff"></path>
                                </svg>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default AdnArea