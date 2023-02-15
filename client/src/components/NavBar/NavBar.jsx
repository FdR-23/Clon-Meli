import React from 'react'


import beneficio_img from '../../assets/img/beneficios.webp'
import logo_large_img from '../../assets/img/logos/logo__large_plus.png'
import logo_small_img from '../../assets/img/logos/logo__small.png'
import NavMenu from './NavMenu'


const NavBar = () => {

    return (
        <header className='lg:h-[100px] w-full bg-nav-bar block relative  font-normal 
         before:absolute before:w-full before:lg:h-[100px] before:left-0 before:top-0 before:shadow-nav-shadow
         before:h-[48px]' >
            <div className=' m-auto lg:h-[92px] lg:max-w-[1200px] lg:pl-[160px] relative block pt-12 lg:pt-0' >

                {/* ----NAV MEMU COUNT---- */}
                <nav className='hidden lg:block mr-[51px] min-w-[295px] pt-1 pr-1  
                    h-[52px] text-right mt-12 left-[2px]
                      float-right   whitespace-nowrap relative'
                    id="nav-header-menu">
                    <a className='left-3 px-[10px] text-sm leading-[55px] inline text-[#333] relative cursor-pointer'
                        data-link-id="registration" rel="nofollow" tabIndex="8">Creá tu cuenta</a>
                    <a className='left-3 px-[10px] text-sm leading-[55px] inline text-[#333] relative cursor-pointer'
                        data-link-id="login" rel="nofollow" tabIndex="8">Ingresá</a>
                    <a className='left-3 px-[10px] text-sm leading-[55px] inline text-[#333] relative cursor-pointer'
                        data-link-id="purchases" rel="nofollow" tabIndex="8">Mis compras</a>
                </nav>

                {/* ---SEARCH PRODUCTS--- */}

                <a className='absolute left-[10px] top-[11px] cursor-pointer'
                    href='/' tabIndex="2">
                    <img className='lg:w-[134px] lg:h-[34px] lg:top-[11px] hidden lg:inline-block' src={logo_large_img} alt="nav_logo_large" />
                    <img className='w-[44px] h-[31px] lg:hidden' src={logo_small_img} alt="nav_logo_small" />
                </a>
                <form className='lg:block lg:w-full lg:overflow-auto text-[16px] 
                    lg:relative lg:left-[35px] lg:max-w-[600px] lg:h-14 lg:px-[1px]
                    absolute h-12 left-16 right-[94px] top-0 py-2 box-border'>
                    <input
                        className='placeholder:opacity-75 shadow-nav-input placeholder:font-thin placeholder:text-black placeholder:text-opacity-40
                            w-full h-full lg:h-[39px] pt-[7px] pr-[60px]  pb-[9px] pl-[15px] outline-none z-[915]
                             rounded-sm '
                        type="text"
                        placeholder="Buscar productos, marcas y más…"
                        maxLength={120}
                        autoCapitalize='off'
                        autoCorrect='off'
                        autoComplete='off' />
                    <button className='lg:before:block before:absolute lg:before:top-[6.5px] lg:before:h-[26px] lg:before:border-solid lg:before:border-l-[1px] lg:before:border-[#e6e6e6]   
                            left-auto lg:h-[39px] pb-[2px] lg:pt-[2px] lg:w-[46px] lg:bg-white lg:top-2 right-[1px] absolute
                            top-0 h-[50px] p-0 w-12 text-[22px] leading-[16px] text-[#666]'
                        type='button'>
                        <div role='img'
                            className='before:font-navigation before:lg:content-[""] before:lg:text-[16px] before:text-[#666]
                             before:w-4 before:align-top before:inline-block
                            before:content-[""] before:text-[13px] text-base leading-[21px] block cursor-pointer text-[#aaa] '>
                        </div>
                    </button>
                </form>

                {/* /////NAV MENU///// */}
                <NavMenu />

                {/* /////CART///// */}

                <a className='lg:right-[9px] lg:w-[25px] lg:h-[21px]  lg:top-[19px] lg:pt-[2px] text-[0] 
                lg:overflow-hidden lg:mt-[48px]  lg:block 
                block absolute  top-0 right-0 h-[50px] w-[45px] text-center'>
                    <i className='not-italic ml-[-8px]  lg:text-[13px] lg:relative lg:top-[-3px] lg:ml-0 lg:text-center
                    
                    after:lg:block after:lg:absolute after:lg:top-[-50px] after:lg:left-[-38px] after:lg:w-[100px]
                    after:lg:h-[100px] after:lg:rounded-[50%] after:lg:bg-white after:lg:opacity-0 after:lg:box-border
               
                    before:lg:leading-[27px] before:lg:text-[16px]  before:text-[#333] 
               before:inline-block before:w-[16px] before:content-[""] before:font-navigation 
               before:text-[18px] before:leading-[50px] before:box-border ' >
                    </i>

                </a>
                <a className='block lg:hidden text-[#736c28]   h-[39px] whitespace-nowrap overflow-hidden
                    text-ellipsis  pt-[1px] pr-[30px] pl-[28px] leading-[38px] 
                    relative  text-[16px] w-full
                    before:content-[""] before:font-navigation before:left-[10px] before:absolute before:text-[16px]
                  
                      hover:border-[#eadd61]'>
                    <span className='box-border'>Enviar a </span>
                    <span className='box-border'>Capital Federal</span>
                </a>


                {/* /////PROMOTION///// */}
                <a className='hidden lg:inline-block lg:absolute lg:right-[10px] lg:top-[9px]'
                    tabIndex="5">
                    <img className='lg:max-w-[340px] lg:max-h-[39px] overflow-clip '
                        src={beneficio_img} title="Suscribite al nivel 6 con beneficios exclusivos"
                        alt="Suscribite al nivel 6 con beneficios exclusivos" />
                </a>
            </div>
        </header>
    )
}

export default NavBar