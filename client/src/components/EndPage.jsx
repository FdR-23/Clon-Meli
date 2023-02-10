import React, { useState } from 'react'

const EndPage = () => {
  const [open, setOpen] = useState(false);
  console.log(open)
  const handletogle = () => {
    setOpen(!open)
  }
  return (
    <>
      <div className='mt-[74px] box-border block relative text-[13px] font-normal '>
        <label onClick={() => handletogle()} className={`${open ? 'lg:bg-[#f7f7f7]' : 'lg:bg-[#fff] '} transition-all duration-700 border-[#e6e6e6]
                    lg:border-[1px] lg:border-solid lg:border-[#e6e6e6] lg:text-[#666] lg:border-b-0 lg:cursor-pointer lg:px-[20px]
                    lg:h-[32px] lg:leading-[32px] lg:absolute translate-x-[-50%] lg:left-[50%] lg:bottom-[100%] lg:rounded-tr-[5px]
                     lg:rounded-tl-[5px] z-[1]  `}>
          Más información
          <i className={`${open ? 'before:rotate-180' : ''} ml-[2px] text-[11px] top-0 relative not-italic
                     before:content-[""] before:font-navigation before:inline-block before:text-center before:w-4 `}>
          </i>
        </label>

        <div className={`${open ? 'lg:max-h-[270px]  ' : 'lg:max-h-0  lg:border-t-[0]'} lg:bg-[#f7f7f7] lg:mt-0  lg:transition-all lg:duration-200 lg:leading-[0] 
                 lg:border-t-[1px] lg:overflow-hidden  lg:border-solid lg:border-[#e6e6e6] lg:relative`}>
          <div className={` ${open ? 'lg:visible lg:flex lg:justify-between' : 'lg:invisible '} lg:px-[110px] lg:box-border lg:max-w-[1220px]  lg:mx-auto`}>
            <div className='w-auto leading-[1.6] my-[46px]'>
              <h3 className='lg:text-[#333] lg:mb-[14px]' >Acerca de</h3>
              <ul className='text-[#999] box-border'>
                <li className='hover:underline cursor-pointer' >Mercado Libre</li>
                <li className='hover:underline cursor-pointer' >Investor relations</li>
                <li className='hover:underline cursor-pointer' >Tendencias</li>
                <li className='hover:underline cursor-pointer' >Sustentabilidad</li>
              </ul>
            </div>
            <div className='w-auto leading-[1.6] my-[46px]'>
              <h3 className='lg:text-[#333] lg:mb-[14px]' >Otros sitios</h3>
              <ul className='text-[#999] box-border'>
                <li className='hover:underline cursor-pointer' >Developers</li>
                <li className='hover:underline cursor-pointer' >Mercado Pago</li>
                <li className='hover:underline cursor-pointer' >Mercado Shops</li>
                <li className='hover:underline cursor-pointer' >Mercado Envíos</li>
                <li className='hover:underline cursor-pointer' >Mercado Ads</li>
              </ul>
            </div>

            <div className='w-auto leading-[1.6] my-[46px]'>
              <h3 className='lg:text-[#333] lg:mb-[14px]' >Ayuda</h3>
              <ul className='text-[#999] box-border'>
                <li className='hover:underline cursor-pointer' >Comprar</li>
                <li className='hover:underline cursor-pointer' >Vender</li>
                <li className='hover:underline cursor-pointer' >Resolucón de problemas</li>
                <li className='hover:underline cursor-pointer' >Centro de seguridad</li>
              </ul>

            </div>

            <div className='w-auto leading-[1.6] my-[46px]'>
              <h3 className='lg:text-[#333] lg:mb-[14px]' >Redes sociales</h3>
              <ul className='text-[#999] box-border'>
                <li className='hover:underline cursor-pointer' >Twitter</li>
                <li className='hover:underline cursor-pointer' >Facebook</li>
                <li className='hover:underline cursor-pointer' >Instagram</li>
                <li className='hover:underline cursor-pointer' >YouTube</li>
              </ul>
            </div>
            <div className='w-auto leading-[1.6] my-[46px]'>
              <h3 className='lg:text-[#333] lg:mb-[14px]' >Mi cuenta</h3>
              <ul className='text-[#999] box-border'>
                <li className='hover:underline cursor-pointer' >Ingresá</li>
                <li className='hover:underline cursor-pointer' >Vender</li>
              </ul>
            </div>

            <div className='w-auto leading-[1.6] my-[46px]'>
              <h3 className='lg:text-[#333] lg:mb-[14px]' >Mercado Puntos</h3>
              <ul className='text-[#999] box-border '>
                <li className='hover:underline cursor-pointer'>Nivel 6</li>
                <li className='hover:underline cursor-pointer'>Disney+</li>
                <li className='hover:underline cursor-pointer'>Start+</li>
                <li className='hover:underline cursor-pointer'>HBO MAX</li>
                <li className='hover:underline cursor-pointer'>Paramount+</li>
              </ul>
            </div>
          </div>

        </div>



      </div>



      <footer className='lg:block lg:bg-white lg:border-[#e6e6e6]
      lg:border-t-[1px] lg:border-solid lg:border-t-[#eee] lg:leading-[1] lg:text-[13px] font-normal'>

        <div className='py-[16px] px-[10px] max-w-[1200px] border-none box-content block m-auto'>
          <div className=' text-[#999] '>
            <div className='align-top relative h-10'>
              <nav className='inline-block text-[0]'>
                <small className='absolute top-5 m-0 text-xs w-auto'>Copyright ©&nbsp;1999-2023 MercadoLibre S.R.L.</small>
                <ul className='flex'>
                  <li><a className='hover:text-black text-[13px] text-[#333] cursor-pointer pl-0 px-2'>Trabajá con nosotros</a></li>
                  <li><a className='hover:text-black text-[13px] text-[#333] cursor-pointer px-2'>Términos y condiciones</a></li>
                  <li><a className='hover:text-black text-[13px] text-[#333] cursor-pointer px-2'>Cómo cuidamos tu privacidad</a></li>
                  <li><a className='hover:text-black text-[13px] text-[#333] cursor-pointer px-2'>Accesibilidad</a></li>
                  <li><a className='hover:text-black text-[13px] text-[#333] cursor-pointer px-2'>Información al usuario financiero</a></li>
                  <li><a className='hover:text-black text-[13px] text-[#333] cursor-pointer px-2'>Ayuda</a></li>
                  <li><a className='hover:text-black text-[13px] text-[#333] cursor-pointer px-2'>Defensa del Consumidor</a></li>
                  <li><a className='hover:text-black text-[13px] text-[#333] cursor-pointer px-2'>Información sobre seguros</a></li>
                </ul>
              </nav>
            </div>
            <p className='text-[12px] mt-[2px] '>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</p>
          </div>
        </div>





      </footer>
    </>
  )
}

export default EndPage