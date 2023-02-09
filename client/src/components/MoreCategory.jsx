import React from 'react'
import { useMenuContext } from './MenuProvider'

const MoreCategory = () => {

    const { categories } = useMenuContext()
    return (
        <section className='block text-[#0000008c] max-w-[1200px] m-auto box-content px-[15px] pb-[32px]'>
            <h1 className='text-[#4a4a4a] text-2xl font-normal my-6 mx-auto normal-case'
            >Categorías para comprar y vender</h1>
            <div className='inline-flex w-full'>
                <div className='shadow bg-white rounded-md block pt-[32px] pr-[40px] pb-[40px] pl-[40px] w-full '>
                    {categories && categories.map((element, index) =>
                        <div className={`border-[#ededed] border-solid mb-[40px] border-b-[1px] last:mb-0 last:border-b-0 `}>
                            <h2 className='leading- block text-[#000000e6] text-lg font-semibold mb-2 cursor-pointer hover:text-[#3483fa]'>{element.title.name}</h2>
                            <ul key={element.id} className={`gap-4 columns-4 mx-auto pb-10 ${index === categories.length - 1 ? 'pb-0' : 'pb-10'}`}>

                                {element.subtitle.map((element) =>
                                    <li className=' text-sm'>
                                        <h3 className='text-[#00000073] leading-6 text-sm font-normal cursor-pointer hover:text-[#3483fa]'>{element.name}</h3>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}


export default MoreCategory 