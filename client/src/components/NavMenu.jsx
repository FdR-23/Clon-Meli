import React, { useState } from 'react'
import SubMenuICategory from './SubMenuICategory.jsx';

import { useMenuContext } from './MenuProvider'


export const NavMenu = () => {
    const [open, setOpent] = useState(false)

    const [isHovered, setIsHovered] = useState(false);
    const { categories } = useMenuContext()


    const handleToggle = () => {
        setOpent(!open)
        console.log(open)
    }



    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (

        <div className='lg:block lg:ml-[-150px] lg:max-w-[785px] '>
            <ul className='lg:pt-3 lg:h-9 lg:m-0 lg:overflow-hidden 
         [&>li>a]:text-sm [&>li>a]:leading-[22px]  [&>li]:inline-block [&>li]:cursor-pointer [&>li]:text-[#333] '>
                <li className='pr-[18px]  float-left first:font-normal w-[186px]'>

                    <a className=' before:content-[""] before:font-navigation before:text-[23px] before:absolute before:top-[9px] before:left-[7px]
           h-10 px-2 top-[52px]  max-w-[170px] left-[1px] text-[#333] border-solid border-[1px] border-transparent rounded lg:inline-block lg:absolute lg:leading-[22px]
           hover:border-[#eadd61]'
                        href="">
                        <span className='relative  whitespace-nowrap overflow-hidden text-ellipsis top[1px] text-xs text-[#00000080] 
                block w-full left-[8px] pt-[6px] pl-[13px] mr-2 leading-[10px] h-5'
                        >Enviar a</span>
                        <span className='h-5 leading-[13px] pl-[22px] text-[#333] 
                    w-full text-sm whitespace-nowrap overflow-hidden text-ellipsis inline-block'
                        >Capital Federal</span>
                    </a>
                </li>
                <li className='pr-[18px] pl-[186px] w-auto float-left font-normal'>
                    <button onClick={(e) => handleToggle(e)}
                        className='after:w-[6px] after:h-[6px] after:relative after:mt-[8px] after:ml-[6px] 
                after:border-solid after:border-r-[1.5px] after:border-b-[1.5px] after:border-[#0000004d] after:transition-all after:ease-out after:duration-300 
                 after:inline-block  after:rotate-45 after:align-top  leading-[22px]
                 before:opacity-0
                  text-[#33333399] hover:text-[#333333e6] text-sm '>
                        Categorías
                    </button>
                    {open && categories &&
                        <SubMenuICategory
                            subcategories={categories} />}
                </li>
                <li className='pr-[18px] w-auto float-left '>
                    <a className='lg:relative lg:text-[#33333399] hover:text-[#333333e6] '
                        href="">Ofertas</a> </li>
                <li className='pr-[18px] w-auto float-left '>
                    <a className='lg:relative lg:text-[#33333399] hover:text-[#333333e6] '
                        href="">Historial</a>  </li>
                <li className='pr-[18px] w-auto float-left '>
                    <a className='lg:relative lg:text-[#33333399] hover:text-[#333333e6] '
                        href="">Supermercado</a>  </li>
                <li className='pr-[18px] w-auto float-left '>
                    <a className='lg:relative lg:text-[#33333399] hover:text-[#333333e6] '
                        href="">Moda</a>  </li>
                <li className='pr-[18px] w-auto float-left '>
                    <a className='lg:relative lg:text-[#33333399] hover:text-[#333333e6] '
                        href="">Vender</a>  </li>
                <li className='w-auto float-left '>
                    <a className='lg:relative lg:text-[#33333399] hover:text-[#333333e6] '
                        href="">Ayuda</a></li>

            </ul>
        </div>
    )

}

export default NavMenu