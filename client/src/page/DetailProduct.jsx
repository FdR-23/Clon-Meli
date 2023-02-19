import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { getProduct } from '../services/getProduct';
const DetailProduct = () => {
  const [item, setItem] = useState();
  const { id } = useParams()
  console.log(item)

  useEffect(() => {
    if (id) {
      getProduct(id).then((data) => setItem(data))
    }
  }, [id])

  const discont = Math.round(100 - (item?.base_price * 100) / item?.original_price);

  const handleInteger = (prop) => {
    const arrProp = Array.from(String(prop));
    if (arrProp.indexOf(".") != -1) {
      const IntegerArr = arrProp.slice(0, arrProp.indexOf(".")).join("");
      return Number(IntegerArr);
    }
    return Number(arrProp.join(""));
  };

  const handleDecimal = (prop) => {
    const arrProp = Array.from(String(prop));
    if (arrProp.indexOf(".") != -1) {
      const decimalArr = arrProp.slice(arrProp.indexOf(".") + 1).join("");
      return Number(decimalArr);
    }
  };
  return (
    <div className='w-[1184px] text-[16px] mx-auto'>

      <div className='mb-3'>
        <div className='flex flex-row flex-wrap box-border'>
          <div className='flex-shrink flex-grow basis-0 relative '>
            <div className='text-[#000000e6] h-5 w-[900px] mb-3 mt-4 break-words flow-hidden'>
              <ul className='font-semibold'>
                <li className='inline text-[14px] overflow-hidden text-ellipsis whitespace-pre'>
                  También puede interesarte</li>
              </ul>
            </div>
            <div className='box-border flex flex-row flex-wrap'></div>
            <div className='flex flex-row flex-wrap mt-3 w-full'>
              <div className='flex text-[14px] font-normal leading-[1] mr-auto'>
                <p className='text-[#000000e6] float-left mr-[25px] relative
                after:bg-[#00000033] after:h-3 after:right-[-14px] after:top-[1px] after:w-[1px] after:absolute after:box-border'>
                  Volver al listado</p>
              </div>
              <div className='ml-auto relative leading-[1] '>
                <button className='text-[#3483fa] text-[14px] font-normal h-[14px] leading-[1] px-2'>Compartir</button>
              </div>
              <div className='relative leading-[1] 
              before:bg-[#00000033] before:inline-block before:h-[14px] before:mr-[10px] before:ml-[5px] before:w-[1px] before:align-middle'>
                <button className='text-[#3483fa] text-[14px] font-normal h-[14px] leading-[1]'>Vender uno igual</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white shadow-nav-input min-w-[800px] rounded box-border'>
        <div className='relative flex flex-row-reverse flex-wrap pb-10 box-border'>

          <div className='ml-12 max-w-[368px] w-[368px] basis-0 flex-grow flex-shrink
          relative min-w-[325px] pr-4 mt-4'>
            <div className='top-[-2397px] mb-6 sticky'>

              <div className='border border-solid border-[#0000001a] rounded-lg text-[14px] p-4 w-full
                flex flex-row flex-wrap '>

                <div className='w-full box-border'>
                  <div className='mb-2 mr-10'>
                    <span className='text-[#0000008c] text-[14px] font-normal whitespace-pre-wrap'>{item?.condition == 'new' ? "Nuevo" : "Usado"}  |  +{item?.sold_quantity > 100 ? 100 : item?.sold_quantity > 1000 ? 1000 : item?.sold_quantity} vendidos</span>
                  </div>
                  <div className='flex'>
                    <h1 className='flex-auto text-[22px] mb-2 mr-7 leading-[1.18]  break-words'>
                      {item?.title}
                    </h1>
                    <div className='relative'>
                      <button className=' absolute right-1 '>
                        <svg className='w-[22px] h-[22px] stroke-[#3483fa]  ' viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M7.975 2c-2.235.116-4.365 1.203-5.82 2.89C.7 6.57 0 8.786 0 11c0 1.938.697 3.816 1.646 5.46.95 1.644 2.19 3.077 3.5 4.394 2.824 2.833 6.08 5.232 9.622 7.09.145.076.32.076.464 0 3.543-1.858 6.798-4.257 9.622-7.09 1.31-1.317 2.55-2.75 3.5-4.393C29.304 14.817 30 12.94 30 11c0-2.22-.7-4.428-2.154-6.11C26.39 3.202 24.26 2.115 22.026 2c-1.516-.078-3.045.286-4.362 1.04-1.097.626-1.975 1.558-2.664 2.614-.69-1.056-1.567-1.988-2.664-2.615C11.02 2.285 9.49 1.92 7.976 2zm.05 1c1.32-.068 2.665.25 3.813.906 1.148.656 2.107 1.652 2.72 2.824.186.36.698.36.885 0 .612-1.172 1.57-2.168 2.72-2.824 1.147-.656 2.49-.974 3.812-.906 1.942.1 3.837 1.062 5.115 2.54C28.37 7.023 29 9 29 11c0 1.73-.628 3.43-1.512 4.96-.885 1.535-2.064 2.904-3.342 4.186-2.686 2.697-5.788 4.975-9.146 6.766-3.358-1.79-6.46-4.07-9.146-6.766-1.278-1.282-2.457-2.65-3.342-4.185C1.628 14.43 1 12.73 1 11c0-2 .63-3.978 1.91-5.46C4.188 4.063 6.083 3.1 8.025 3z" /></svg>
                      </button>
                    </div>
                  </div>

                </div>

                <div className='mb-[-4px] mt-[10px] w-full'>
                  <div className='rounded-[3px] inline-block leading-[1] py-[3px] px-1 font-semibold
                  bg-[#f73] text-[12px] text-white'>
                    MAS VENDIDO
                  </div>
                </div>

                <div className='w-full flex flex-row flex-wrap box-border '>
                  <div className='text-[#000000e6] inline-block  font-light mt-4 ' >
                    <s className=' relative text-[16px] inline-flex font-normal text-[#0000008c] w-fit leading-[1] align-baseline'>
                      <span className='float-left box-border
                       after:absolute after:border-solid after:border after:block after:top-[40%] 
                       after:w-full after:h-[1px] after:box-border after:border-[#0000008c]'>

                        < span className='mr-[2px]'>$</span>
                        <span>{item?.original_price && handleInteger(item?.original_price)}</span>
                        <span>{item?.original_price && handleDecimal(item?.original_price)}</span>
                      </span>
                    </s>
                    <div className='flex justify-start items-center translate-x-[-1px] '>
                      <span className='text-[#000000e6] text-[36px] font-normal leading-[1] inline-flex items-baseline  '>
                        <span className='pr-[6px] '>$</span>
                        <span >{item?.base_price && handleInteger(item?.base_price)} </span>
                        <span className='text-[18px] mt-1 self-start ml-[1px]'>{item?.base_price && handleDecimal(item?.base_price)}</span>
                      </span>

                      <span className='ml-[6px] mt-[1px]'>

                        <span className='items-center flex font-normal  text-[#00a650] text-[18px]'>
                          {discont}% OFF
                        </span>
                      </span>
                    </div>

                    <div className='mt-2'>
                      <div className='flex text-[14px] font-normal'>
                        <p className='text-[#3483fa]'>Ver los medios de pago</p>
                      </div>
                    </div>

                  </div>
                </div>

                <div className='mt-5'>
                  <div className='items-start flex'>
                    <figure className='mr-[10px]'>
                      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M6.78799 3C5.96948 2.99999 5.29393 2.99998 4.74393 3.04565C4.17258 3.0931 3.64774 3.19496 3.1561 3.45035C2.42553 3.82985 1.82985 4.42553 1.45035 5.1561C1.19496 5.64774 1.0931 6.17258 1.04565 6.74393C0.999977 7.29393 0.999988 7.96946 1 8.78798V15C1 16.9138 2.344 18.5136 4.13963 18.9072C4.52413 20.1206 5.65937 21 7 21C8.30622 21 9.41746 20.1652 9.8293 19H15.1707C15.5825 20.1652 16.6938 21 18 21C19.4031 21 20.5812 20.0368 20.9092 18.7355C22.0899 18.2016 22.849 16.9282 22.6403 15.5506L22.5007 14.6294C22.1412 12.2568 21.2527 9.99549 19.9009 8.01285L19.7194 7.74665C18.9743 6.65384 17.7372 6 16.4145 6H15C14.9494 6 14.8992 6.00188 14.8495 6.00558C14.7854 5.71074 14.6911 5.42833 14.5497 5.1561C14.1702 4.42553 13.5745 3.82985 12.8439 3.45035C12.3523 3.19496 11.8274 3.0931 11.2561 3.04565C10.7061 2.99998 10.0305 2.99999 9.21202 3H6.78799ZM15 8.71577C15 8.73971 15 8.76377 15 8.78795V17H15.1707C15.5825 15.8348 16.6938 15 18 15C19.089 15 20.0425 15.5803 20.5682 16.4485C20.6576 16.2709 20.6953 16.0643 20.6629 15.8502L20.5233 14.929C20.2087 12.853 19.4313 10.8743 18.2484 9.13952L18.0669 8.87333C17.6944 8.32692 17.0758 8 16.4145 8L15 8V8.71577ZM13 8.83C13 7.95898 12.9992 7.36686 12.9612 6.90945C12.9242 6.46402 12.8572 6.23663 12.7748 6.07805C12.5851 5.71277 12.2872 5.41493 11.9219 5.22517C11.7634 5.1428 11.536 5.07578 11.0905 5.03879C10.6331 5.0008 10.041 5 9.17 5H6.83C5.95898 5 5.36686 5.0008 4.90945 5.03879C4.46402 5.07578 4.23663 5.1428 4.07805 5.22517C3.71277 5.41493 3.41493 5.71277 3.22517 6.07805C3.1428 6.23663 3.07578 6.46402 3.03879 6.90945C3.0008 7.36686 3 7.95898 3 8.83V15C3 15.8316 3.50759 16.5447 4.22985 16.8463C4.68191 15.7621 5.75196 15 7 15C8.30622 15 9.41746 15.8348 9.8293 17H13V8.83ZM8 18C8 17.4477 7.55229 17 7 17C6.44772 17 6 17.4477 6 18C6 18.5523 6.44772 19 7 19C7.55229 19 8 18.5523 8 18ZM17 18C17 17.4477 17.4477 17 18 17C18.5523 17 19 17.4477 19 18C19 18.5523 18.5523 19 18 19C17.4477 19 17 18.5523 17 18Z" fill="#00a650" />
                      </svg>
                    </figure>
                    <div className='flex-1 w-full '>
                      <p className='text-[16px] leading-[1.3] mb-[2px] font-normal text-[#00a650]'>Llega gratis
                        <span className='font-semibold text-[#00a650] text-[16px] leading-[1.3]'> entre el jueves y el viernes</span></p>
                      <div className='mt-1 flex text-[14px] font-normal '>
                        <p className='text-[#3483fa]'>Ver más formas de entrega</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-5 w-full flex flex-row flex-wrap'>
                  <p className='font-semibold text-[16px]  text-[#000000e6]'>
                    Stock disponible
                  </p>
                </div>

                <div className='mt-4 w-full flex flex-row flex-wrap'>
                  <div className='text-[#000000e6]'>
                    <div >
                      <button className='leading-[1]'>
                        <span className='flex max-w-[275px] relative top-[-1px]'>
                          <span className='text-[#000000e6] text-[16px] font-normal block float-left'>Cantidad:</span>
                          <span className='text-[#000000e6] text-[16px] font-semibold ml-1 whitespace-nowrap block float-left'>1 unidad</span>
                          <span className='ml-[6px] align-bottom block float-left '>
                            <svg className=' mr-[2px] align-bottom' width="18px" height="18px" viewBox="0 0 24 24" fill="none">
                              <path d="M4 9L12 17L20 9" stroke="#3483fa" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span className='text-[#0000008c] text-[14px] font-normal ml-[6px] overflow-hidden text-ellipsis whitespace-nowrap w-auto'>
                            (6 disponibles)</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className='mt-[26px] w-full'>
                  <form className='w-full box-border'>
                    <div >
                      <button className='w-full bg-[#3483fa] border-transparent text-white 
                        rounded-md inline-block text-[16px] font-semibold h-12 px-6 text-center 
                        hover:bg-[#2968c8] hover:transition-colors hover:duration-400'>
                        <span className='relative top-[-1px] flex h-full justify-center items-center'>Comprar ahora</span>
                      </button>
                      <button className='w-full mt-[8px] bg-[#4189e626] border-transparent text-[#3483fa] 
                        rounded-md inline-block text-[16px] font-semibold h-12 px-6 text-center '>
                        <span className='relative top-[-1px] flex h-full justify-center items-center'>Agregar al carrito</span>
                      </button>
                    </div>
                  </form>

                </div>


              </div>

              <div className='mt-4'>
                <div className='w-full flex-initial flex flex-row flex-wrap'>
                  <div className='border border-solid border-[#0000001a] rounded-lg text-[14px] p-4 w-full
                flex flex-row flex-wrap '>
                    <h2 className='text-[#000000e6] text-[18px] font-normal mb-[28px] w-full'>Información del vendedor</h2>
                    <div className='text-[#000000e6] w-full'>
                      <div className='flex mb-5'>
                        <figure className='mt-[2px] mr-[10px] items-center w-[20px] 
                        before:content-[""] before:font-navigation text-[20px] 
                        before:relative before:top-1 before:left-1'>
                        </figure>
                        <div className='text-[#000000e6] '>
                          <p className='text-[16px] font-normal'>Ubicación</p>
                          <p className='text-[#0000008c] text-[14px]'>
                            {item?.seller_address.search_location.neighborhood.name}, {item?.seller_address.search_location.city.name}, {item?.seller_address.country.name}</p>
                        </div>
                      </div>
                      <div className='flex mb-5'>
                        <figure className='mt-[2px] mr-[10px] items-center w-[20px] '>
                          <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/medal.svg" alt=""></img>
                        </figure>
                        <div className='text-[#00a650] '>
                          <p className='text-[16px] font-normal'>MercadoLíder Platinum</p>
                          <p className='text-[#0000008c] text-[14px]'>¡Es uno de los mejores del sitio!</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className='w-full pb-10 box-border basis-0 flex-grow flex-shrink'>
            <div className='flex flex-row flex-wrap box-border'>
              <div className='basis-0 flex-shrink flex-grow-[2] w-full box-border'>
                <div className='flex flex-row flex-wrap box-border'>
                  <div className='mb-[68px] w-full h-full min-h-[500px] relative box-border '>
                    <div></div>
                    <div className='h-auto w-full ml-[16px] mt-[16px] absolute box-border'>
                      <div className='left-[56px] w-[700px] bg-white h-full my-6 p-4 min-h-[500px] absolute top-0'>
                      </div>
                      {item?.pictures && item.pictures.map((img) =>
                        <span className='block mb-2'>
                          <label className='relative'>
                            <div className='rounded mr-0 border border-solid border-[#00000040] cursor-pointer
                            inline-flex font-normal overflow-hidden relative'>
                              <div className='text-[12px] h-12 p-[2px] w-12 box-border'>
                                <img className='object-contain h-full w-full' src={img.url} alt={img.alt} />
                              </div>
                            </div>
                          </label>

                          <figure className='left-[56px] w-[700px] flex text-center  
                          bg-white h-full my-6 p-4 min-h-[500px] absolute top-0'>
                            <img className='cursor-zoom-in h-auto object-contain w-full box-border'
                              src={img.url} alt={img.alt} />
                          </figure>
                        </span>
                      )}


                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='ml-[50px] w-[718px]  box-border'>
              <div className='py-[40px] border-t-[1px] borde-solid border-[#0000001a]
                flex flex-row flex-wrap'>
                <div className='flex-1 w-full text-[#000000e6] box-border'>
                  <h2 className='text-[24px] pb-8 leading-[1.25]'>Características principales</h2>
                  <div className='border border-solid border-[#ededed] rounded-[5px]'>
                    <table className='border-0'>
                      <tbody className='table-row-group '>
                        {item?.attributes && item.attributes.map((carat, index) =>
                          <tr key={carat.id} className='bg-white table-row border-0 '>
                            <th className={`${index % 2 === 0 ? 'bg-[#ebebeb]' : 'bg-[#f5f5f5]'}   rounded-tl-[4px] table-cell
                          text-left align-middle whitespace-normal py-4 px-6 
                          text-[14px] text-[#000000e6] font-semibold`}>
                              {carat.name}</th>
                            <td className='pl-6 w-[73%] rounded-tr-[4px] p-4
                            bg-white font-normal'>
                              {carat.value_name}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>



    </div>
  )
}

export default DetailProduct