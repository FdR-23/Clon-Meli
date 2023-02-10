import React,{useState} from 'react'

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

        <div className={`${open ? 'lg:max-h-[270px]  ' : 'lg:max-h-0  lg:border-t-[1px]'} lg:bg-[#f7f7f7] lg:mt-0  lg:transition-all lg:duration-200 lg:leading-[0] 
                lg:overflow-hidden  lg:border-solid lg:border-[#e6e6e6] lg:relative`}>
          <div className={` ${open ? 'lg:visible lg:flex lg:justify-between' : 'lg:invisible '} lg:px-[110px] lg:box-border lg:max-w-[1220px]  lg:mx-auto`}>
            <div className='w-auto leading-[1.6] my-[46px]'>
              <h3 className='lg:text-[#333] lg:mb-[14px]' >Acerca de</h3>
              <ul className='text-[#999] box-border'>
                <li>Mercado Libre</li>
                <li>Investor relations</li>
                <li>Tendencias</li>
                <li>Sustentabilidad</li>
              </ul>
            </div>
            <div className='w-auto leading-[1.6] my-[46px]'>
              <h3 className='lg:text-[#333] lg:mb-[14px]' >Otros sitios</h3>
              <ul className='text-[#999] box-border'>
                <li>Developers</li>
                <li>Mercado Pago</li>
                <li>Mercado Shops</li>
                <li>Mercado Envíos</li>
                <li>Mercado Ads</li>
              </ul>
            </div>

            <div className='w-auto leading-[1.6] my-[46px]'>
              <h3 className='lg:text-[#333] lg:mb-[14px]' >Ayuda</h3>
              <ul className='text-[#999] box-border'>
                <li>Comprar</li>
                <li>Vender</li>
                <li>Resolucón de problemas</li>
                <li>Centro de seguridad</li>
              </ul>

            </div>

            <div className='w-auto leading-[1.6] my-[46px]'>
              <h3 className='lg:text-[#333] lg:mb-[14px]' >Redes sociales</h3>
              <ul className='text-[#999] box-border'>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
            <div className='w-auto leading-[1.6] my-[46px]'>
              <h3 className='lg:text-[#333] lg:mb-[14px]' >Mi cuenta</h3>
              <ul className='text-[#999] box-border'>
                <li>Ingresá</li>
                <li>Vender</li>
              </ul>
            </div>

            <div className='w-auto leading-[1.6] my-[46px]'>
              <h3 className='lg:text-[#333] lg:mb-[14px]' >Mercado Puntos</h3>
              <ul className='text-[#999] box-border'>
                <li>Nivel 6</li>
                <li>Disney+</li>
                <li>Start+</li>
                <li>HBO MAX</li>
                <li>Paramount+</li>
              </ul>
            </div>
          </div>

        </div>



      </div>



      <footer className='lg:block lg:bg-white lg:border-[#e6e6e6]
      lg:border-t-[10px] lg:border-solid lg:border-t-[#eee] lg:leading-[1] lg:text-[13px] font-normal
      h-5'>





      </footer>
    </>
  )
}

export default EndPage