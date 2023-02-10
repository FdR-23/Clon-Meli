import React from 'react'

const Regret = () => {
    return (
        <section className='bg-white flex items-center justify-center m-0 p-0
            text-[#0000008c]  text-[16px] font-semibold text-center'>

            <div className='mx-auto max-w-[1200px] py-[40px] flex flex-grow justify-evenly items-stretch'>

                <div className='border-[1px] border-solid border-[0000001a] rounded-md 
                    flex justify-center items-center mx-5 p-4 w-full'>
                    <p className='leading-[1.3]' >Botón de arrepentimiento
                        <br />
                        <a className='text-[#3483fa] text-[14px] font-normal leading-[1.3]'>
                            Cancelar una compra
                        </a>
                        <br />
                        <a className='text-[#3483fa] text-[14px] font-normal leading-[1.3]'>
                            Cancelar una suscripción
                        </a>
                        <br />
                        <a className='text-[#3483fa] text-[14px] font-normal leading-[1.3]'>
                            Cancelar un seguro o garantía
                        </a>
                    </p>
                </div>

                <div className='border-[1px] border-solid border-[0000001a] rounded-md 
                    flex justify-center items-center mx-5 p-4 w-full'>
                    <p className='leading-[1.3]' >Conocé las normas que aplican cuando comprás
                        <br />
                        <a className='text-[#3483fa] text-[14px] font-normal leading-[1.3]'>
                            Ver contratos de adhesión - Ley N.º 24.240 de Defensa del Consumidor
                        </a>
                    </p>
                </div>

            </div>
        </section>
    )
}
export default Regret