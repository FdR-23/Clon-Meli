import React from 'react'

const ShoppingInfo = () => {
    return (
        <section className='bg-white mt-[20px] overflow-hidden'>
            <div className='max-w-[1200px] mx-auto py-[40px]'>
                <div className='float-left w-[33.333%] box-border pt-[35px] px-[45px] pb-[20px] relative text-center'>
                    <div className='h-[55px]'>
                        <img className='m-auto' decoding="async" src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg"
                            alt="Elegí cómo pagar" />
                    </div>
                    <h2 className='text-[#4b4b4b] text-[20px] font-medium leading-[1.4] mt-[16px]'>Elegí cómo pagar</h2>
                    <p className='text-[#999] text-[15px] leading-[1.2] mt-[4px] mb-[10px]'>
                        <span>Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Crédito.</span>
                    </p>
                    <a className='text-[#3483fa] text-[14px]'>Cómo pagar tus compras</a>
                </div>
                <div className='after:right-0 after:bg-[#e2e2e2] after:block after:absolute after:h-[65px] after:mt-[-32.5px] after:top-[50%] after:w-[1px]
            before:left-0 before:bg-[#e2e2e2] before:block before:absolute before:h-[65px] before:mt-[-32.5px] before:top-[50%] before:w-[1px]
            float-left w-[33.333%] box-border pt-[35px] px-[45px] pb-[20px] relative text-center'>
                    <div className='h-[55px]'>
                        <img className='m-auto' decoding="async" src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg"
                            alt="Envío gratis desde $ 8.000" />
                    </div>
                    <h2 className='text-[#4b4b4b] text-[20px] font-medium leading-[1.4] mt-[16px]'>
                        Envío gratis desde $ 8.000</h2>
                    <p className='text-[#999] text-[15px] leading-[1.2] mt-[4px] mb-[10px]'>
                        <span>Solo por estar registrado en Mercado Libre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos.</span>
                    </p>
                    <a className='text-[#3483fa] text-[14px]'>Conocé más sobre este beneficio</a>
                </div>
                <div className='before:text-[#e2e2e2] before:block before:h-[65px] before:mt[-32.5px] before:absolute before:t-[50%] before:w-[1px]
        float-left w-[33.333%] box-border pt-[35px] px-[45px] pb-[20px] relative text-center'>
                    <div className='h-[55px]'>
                        <img className='m-auto' decoding="async" src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg"
                            alt="Seguridad, de principio a fin" />
                    </div>
                    <h2 className='text-[#4b4b4b] text-[20px] font-medium leading-[1.4] mt-[16px]'>Seguridad, de principio a fin</h2>
                    <p className='text-[#999] text-[15px] leading-[1.2] mt-[4px] mb-[10px]'>
                        <span>¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</span>
                    </p>
                    <a className='text-[#3483fa] text-[14px]'>Cómo te protegemos</a>
                </div>
            </div>

        </section>
    )
}

export default ShoppingInfo