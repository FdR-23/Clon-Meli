import React from 'react'

const CardOfferts = ({ item }) => {
    return (
        <div className='w-[240px] relative block float-left h-[full] min-h-[1px] whitespace-nowrap'>
            <div className='h-[350px] mb-[16px] mx-[8px] w-[224px] block'>
                <div className='after:rounded after:h-full after:w-full  after:opacity-100 after:absolute after:top-0 
                    h-[350px] w-[224px] inline-block align-top  whitespace-normal bg-white relative
                    rounded text-[#333] hover:h-auto max-h-[402px] min-h-[350px]
                     [&>div>p]:hover:visible [&>div>div]:hover:mt-[9px] [&>div>div>div>s]:hover:visible  hover:shadow-card-offer'>
                    <div className='block h-[224px] w-[224px] box-border rounded-tr-sm rounded-tl-sm overflow-hidden'>
                        <img className='h-[224px] w-[224px] block box-border aspect-[244/244]' src={item.img} alt="img_offert" />
                    </div>
                    <div className='border-t border-solid border-[3333331a] block py-5 px-4 box-border text-[#333] first-letter:whitespace-normal relative'>
                        <div className='mt-[-2px]  box-border overflow-hidden block '>
                            <div className='inline-flex items-center box-border whitespace-normal  '>
                                <s className='invisible absolute left-4 top-[9px] opacity-100 text-[14px] text-[#999] leading-[1.5]
                                inline-block align-bottom'>

                                    <span className='after:border-solid after:border after:block after:h-[1px] 
                                    after:absolute after:top-[48%] after:w-full after:text-black  
                                    float-left box-border  text-[14px]  text-[#999] leading-[1.5]'>
                                        <span className='mr-[3.2px] float-left text-[14px] text-[#999] 
                                         leading-[1.5]'>$</span>
                                        <span className='float-left text-[14px] text-[#999]
                                          leading-[1.5]'>{item.after_price}</span>
                                        <span className='text-0 absolute float-left  text-[#999]'></span>
                                        <span className='leading-[1.5] mt-[1px] box-border text-[.7em] ml-[0.05em]
                                        align-text-bottom float-left  text-[#999] whitespace-normal'>{item.after_price_cents}</span>
                                    </span>
                                </s>
                                <span className='text-[24px] leading-[16px] box-border 
                                 text-[#333] pr-[10px] overflow-visible inline-block align-bottom'>
                                    <span className='box-border float-left text-[24px] leading-[16px] text-[#333]'>
                                        <span className='inline-flex items-end h-6 mr-[0.2em] leading-[1em] float-left'>$</span>
                                        <span className='inline-flex items-end h-6 leading-[1em] float-left'>{item.price}</span>
                                    </span>
                                </span>
                                <span className='box-border text-[#00a650] inline-block text-[14px] align-[3px] 
                                 whitespace-normal'>{item.discont}</span>
                            </div>

                            <span className='block overflow-hidden text-ellipsis mt-[4px] text-[#00a650] text-[14px] whitespace-normal
                            after:text-[#00a650] after:box-border after:whitespace-normal after:text-[14px]'>
                                {item.info_counts}
                            </span>
                            <div className='flex whitespace-normal'>
                                <p className='text-[#00a650] text-[14px] font-semibold leading-[16px] mt-[2px]'>
                                    Envío gratis
                                </p>
                            </div>
                        </div>
                        <p className='opacity-100 invisible mb-0 mt-[8px] mh-auto text-[#666] max-h-[2.6em] overflow-hidden
                        text-[14px] font-light leading-[1.3]'>
                            {item.more_description}
                        </p>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default CardOfferts