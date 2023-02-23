import React from 'react'

const PaymentsHome = () => {
    return (
        <section className='mb-[-30px] min-h-0' type='payments'>

            <div className='max-w-full px-2 mx-5 lg:mx-auto py-[40px]'>
                <div className='bg-white rounded shadow-nav-shadow flex h-[90px] my-0 mx-auto max-w-[1184px] overflow-hidden'>

                    <div className='flex-auto flex flex-wrap'>

                        <div className="flex-grow basis-auto text-lg h-[90px] p-5 whitespace-nowrap">
                            <a className='float-left h-[54px] mr-[16px] w-[48px] cursor-pointer'>
                                <img  src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg" alt="Tarjeta de crédito" />
                            </a>
                            <div className="inline-block mt-1px">Tarjeta de crédito</div>
                            <div className="text-[#999] text-sm mt-[-1px]">
                                <a className='text-[#3483fa] hover:text-[#1259c3] cursor-pointer'>Ver promociones bancarias</a>
                            </div>
                        </div>

                        <div className="flex-grow basis-auto text-lg h-[90px] p-5 whitespace-nowrap">
                            <a className="float-left h-[54px] mr-[16px] w-[48px] cursor-pointer">
                                <img decoding="async" src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg" alt="Tarjeta de débito" />
                            </a>
                            <div className="inline-block mt-1px">Tarjeta de débito</div>
                            <div className="text-[#999] text-sm mt-[-1px]">
                                <a className='text-[#3483fa] hover:text-[#1259c3] cursor-pointer'>Ver más</a>
                            </div>
                        </div>

                        <div className="flex-grow basis-auto text-lg h-[90px] p-5 whitespace-nowrap">
                            <a className="float-left h-[54px] mr-[16px] w-[48px] cursor-pointer" >
                                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg" alt="Cuotas sin tarjeta" />
                            </a>
                            <div className="inline-block mt-1px">Cuotas sin tarjeta</div>

                            <div className="text-[#999] text-sm mt-[-1px]">
                                <a className='text-[#3483fa] hover:text-[#1259c3] cursor-pointer'>Conocé Mercado Crédito</a>
                            </div>
                        </div>

                        <div className="flex-grow basis-auto text-lg h-[90px] p-5 whitespace-nowrap">
                            <a className="float-left h-[54px] mr-[16px] w-[48px] cursor-pointer">
                                <img decoding="async" src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg" alt="Efectivo" />
                            </a>
                            <div className="inline-block mt-1px">Efectivo</div>
                            <div className="text-[#999] text-sm mt-[-1px]">
                                <a className='text-[#3483fa] hover:text-[#1259c3] cursor-pointer'>
                                    Ver más</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="flex-grow basis-auto text-lg h-[90px] p-5 whitespace-nowrap">
                            <a className="float-left h-[54px] mr-[16px] w-[48px] cursor-pointer">
                                <img decoding="async" src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg" alt="Medios de pago" />
                            </a>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    )
}

export default PaymentsHome