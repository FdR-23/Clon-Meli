import React from 'react'

const Regulations = () => {
    return (
        <section className='bg-[#fff] block  '>
            <div className='p-[10px] mx-auto max-w-[1200px] box-content'>

                <div className='flex flex-row gap-[10px] justify-end '>
                    <div className=' flex items-center '>
                        <a className='text-[#737373] text-[16px] font-semibold leading-5 '>
                            <img className='mb-[-1px] mr-[5px] ' decoding="async" src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/./help-email/icon_email.svg" />
                            <span >ayuda@mercadolibre.com.ar</span>
                        </a>
                    </div>

                    <div>
                        <a className='block h-14 '>
                            <img className='h-[41px] mt-[5px]' height="56" decoding="async"
                                src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/insurance/ssnlogo.svg" alt="Superintendencia de Seguros de la Nación" />
                        </a>
                    </div>
                    <div>
                        <a>
                            <img height="56" decoding="async" src="https://http2.mlstatic.com/resources/sell/banner_usuarios_financieros.svg"
                                alt="Usuarios Financieros"></img>
                        </a>
                    </div>
                    <div>
                        <a>
                            <img decoding="async" src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/data_fiscal.png" alt="afip" />
                        </a>
                    </div>
                </div>


            </div>
        </section>
    )
}


export default Regulations