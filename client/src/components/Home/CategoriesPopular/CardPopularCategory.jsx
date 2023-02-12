import React from 'react'
import { ReactSVG } from 'react-svg'

const CardPopularCategory = ({ category, bottom }) => {


    return (
            <a className={`${bottom ? 'bottom-0' : ''} absolute h-[170px] border-[#eae6e6] border-solid border-b-[1px] border-r-[1px]
             bg-white hover:bg-[#3483fa] [&>p]:hover:text-white  text-[#333] text-[15px] p-[12px] 
                items-center w-full box-border [&>div>div]:hover:text-white [&>div>div]:hover:fill-white`}>
                <div className='h-[44px] w-[44px] mt-[34px] mb-[14px] mx-auto'>
                    <ReactSVG src={category.svg} className='fill-[#3483fa] text-[#3483fa] ' />
                </div>
                <p className='my-[16px] text-[#333] text-[15px] text-center '
                >{category.name}</p>
            </a>     
    )
}

export default CardPopularCategory