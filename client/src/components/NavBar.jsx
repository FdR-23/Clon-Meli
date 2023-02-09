import React from 'react'


import beneficio_img from '../assets/img/beneficios.webp'
import logo_large_img from '../assets/img/logos/logo__large_plus.png'
import logo_small_img from '../assets/img/logos/logo__small.png'
import NavMenu from './NavMenu'
import MenuItems from './SubMenuICategory'

const NavBar = () => {

    return (
        <header className='h-[100px] w-full bg-nav-bar block lg:relative  font-normal 
         before:lg:absolute before:lg:w-full before:lg:h-[100px] before:lg:left-0 before:lg:top-0 before:lg:shadow-nav-shadow' >
            <div className=' m-auto h-[92px] lg:max-w-[1200px] pl-[160px] relative block' >

                {/* ----NAV MEMU COUNT---- */}
                <nav className='mr-[51px] min-w-[295px] pt-1 pr-1  
                    h-[52px] text-right mt-12 left-[2px]
                     block float-right   whitespace-nowrap relative'
                    id="nav-header-menu">
                    <a className='left-3 px-[10px] text-sm leading-[55px] inline text-[#333] relative'
                        href="https://www.mercadolibre.com.ar/registration?confirmation_url=https%3A%2F%2Fwww.mercadolibre.com.ar%2F#nav-header" data-link-id="registration" rel="nofollow" tabIndex="8">Creá tu cuenta</a>
                    <a className='left-3 px-[10px] text-sm leading-[55px] inline text-[#333] relative'
                        href="https://www.mercadolibre.com/jms/mla/lgz/login?platform_id=ML&amp;go=https%3A%2F%2Fwww.mercadolibre.com.ar%2F&amp;loginType=explicit#nav-header" data-link-id="login" rel="nofollow" tabIndex="8">Ingresá</a>
                    <a className='left-3 px-[10px] text-sm leading-[55px] inline text-[#333] relative'
                        href="https://myaccount.mercadolibre.com.ar/purchases/list#nav-header" data-link-id="purchases" rel="nofollow" tabIndex="8">Mis compras</a>
                </nav>

                {/* ---SEARCH PRODUCTS--- */}
                <div>
                    <a className=' lg:absolute lg:left-[10px] lg:top-[11px] '
                        href="//www.mercadolibre.com.ar" tabIndex="2">
                        <img className='lg:w-[134px] lg:h-[34px] lg:top-[11px] hidden lg:inline-block' src={logo_large_img} alt="nav_logo_large" />
                        <img className='w-[44px] h-[31px] lg:hidden' src={logo_small_img} alt="nav_logo_small" />
                    </a>
                    <form className='block w-full overflow-auto  z-[910] text-[16px]  
                    lg:relative lg:left-[35px] lg:max-w-[600px] lg:h-14  lg:py-2 lg:px-[1px]'>
                        <input
                            className='placeholder:opacity-75 shadow-nav-input placeholder:font-thin placeholder:text-black placeholder:text-opacity-40
                            w-full h-[39px] pt-[7px] pr-[60px]  pb-[9px] pl-[15px] outline-none z-[915]
                             rounded-sm '
                            type="text"
                            placeholder="Buscar productos, marcas y más…"
                            maxLength={120}
                            autoCapitalize='off'
                            autoCorrect='off'
                            autoComplete='off' />
                        <button className='before:block before:absolute before:top-[6.5px] before:h-[26px] before:border-solid before:border-l-[1px] before:border-[#e6e6e6]   
                            lg:left-auto lg:h-[39px] lg:pt-[2px] w-[46px] bg-white top-2 right-[1px] lg:absolute'
                            type='button'>
                            <div role='img'
                                className='before:font-navigation before:content-[""] before:w-4 before:align-top before:inline-block
                                text-base leading-[21px] block cursor-pointer text-[#666] '>
                            </div>
                        </button>
                    </form>
                </div>
                {/* /////NAV MENU///// */}
                <NavMenu />

                {/* /////CART///// */}
                <a className='lg:right-[9px] lg:w-[25px] lg:top-[19px] lg:h-[21px] lg:pt-[2px] lg:text-[0] 
                overflow-hidden mt-[48px] first-letter:lg:text-center lg:block lg:absolute '
                    href="">
                    <i className='lg:text-[13px] lg:relative lg:top-[-3px] lg:ml-0 lg:not-italic lg:text-center
               after:block after:absolute after:top-[-50px] after:left-[-38px] after:w-[100px] after:h-[100px] 
               after:rounded-[50%] after:bg-white after:opacity-0
               before:content-[""] before:font-navigation before:leading-[27px] before:text-[16px] before:text-[#333] 
               before:inline-block before:w-[16px] ' >
                    </i>
                </a>

                {/* /////PROMOTION///// */}
                <a className='hidden lg:inline-block lg:absolute lg:right-[10px] lg:top-[9px] '
                    href="https://www.mercadolibre.com.ar/suscripciones/nivel-6#origin=banner-menu&amp;me.content_id=bannermenu_n6_generico&amp;me.component_id=banner_menu_web_ml&amp;me.logic=campaigns&amp;me.position=0&amp;me.bu_line=36&amp;me.flow=-1&amp;me.bu=9&amp;me.audience=all"
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