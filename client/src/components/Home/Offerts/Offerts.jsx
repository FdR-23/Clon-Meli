import React from 'react'
import CardOfferts from './CardOfferts'
import { offerts } from '../../../assets/json/ListOfferts.json'
const Offerts = () => {

  return (
    <section>
      <div className='flex flex-wrap mb-[30px] pb-[70px] relative
                mx-auto max-w-[1200px] py-10'>
        <div className='mb-[22px] box-border items-center flex leading-[1.2]'>
          <h2 className='text-[26px] font-light pl-2 text-[#666] box-border'>Ofertas</h2>
          <a className='text-[16px] mb-[2px] ml-[16px] self-baseline text-[#3483fa] mt-auto cursor-pointer'>Ver tiendas</a>
        </div>
        <div className='w-[1200px] min-w-[1200px] relative blcok '>
          <div className='static block '>
            <div className=' h-[415px] mb-[-88px] whitespace-nowrap overflow-hidden m-0 p-0 block relative '>
              <div className='opacity-100 w-[8400px] block left-0 relative top-0'>
                {offerts && offerts.map((element, index) =>
                  <CardOfferts
                    key={index}
                    item={element} />

                )}

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Offerts