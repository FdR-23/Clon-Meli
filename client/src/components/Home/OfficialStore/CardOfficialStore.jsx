import React from 'react'

const CardOfficialStore = ({ stores }) => {
    
    return (
        <div className='w-[300px] relative block box-border 
        float-left h-full min-h-1px'>
            <div className='bg-white rounded cursor-pointer box-border shadow-nav-input h-[340px] mx-[8px] mb-[20px]
                bg-wgite  overflow-hidden hover:shadow-card-oficial-store [&>div>a]:hover:text-[#3483fa]'>

                <div className='h-[95px] mb-[-40px] overflow-hidden text-center block '>
                    <img className='h-full inline-block mx-[-100px] w-auto' src={stores.banner} alt="Banner Store" />
                </div>

                <div className='h-20 w-20 mx-auto overflow-hidden relative bg-white rounded-lg box-border shadow-oficial-store-logo '>
                    <img className='w-full h-full block cursor-pointer box-content overflow-clip' src={stores.logo}  alt="Logo stores" />
                </div>

                <div className='block box-border'>
                    <div className='text-[#333] text-[24px] font-semibold h-[35px] my-[16px] px-[16px] text-center
                    text-ellipsis whitespace-nowrap'>{stores.name} </div>
                </div>
                <div className='box-border h-[74px] text-center block'>
                    <a className='inline-block h-[70px] w-[70px] border border-solid border-[#eee] rounded-lg  m-[3px] overflow-hidden'>
                        <img className='w-[70px] h-[70px] block box-border' src={stores.first_img}  alt="img store 1" />
                    </a>
                    <a className='inline-block h-[70px] w-[70px] border border-solid border-[#eee] rounded-lg  m-[3px] overflow-hidden'>
                        <img className='w-[70px] h-[70px] block box-border' src={stores.seconnd_img}  alt="img store 2" />
                    </a>
                    <a className='inline-block h-[70px] w-[70px] border border-solid border-[#eee] rounded-lg  m-[3px] overflow-hidden'>
                        <img className='w-[70px] h-[70px] block box-border' src={stores.third_img}  alt="img store 3" />
                    </a>

                </div>
                <div className='my-[22px] text-center box-border'>
                    <a className='text-[#999] text-[15px] font-semibold '>Ver tienda</a>
                </div>
            </div>

        </div>
    )
}

export default CardOfficialStore