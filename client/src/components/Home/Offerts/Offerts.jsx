import React, { useState } from 'react'
import CardOfferts from './CardOfferts'
import { offerts } from '../../../assets/json/ListOfferts.json'
const Offerts = () => {

  const [displayCategories, setDisplayCategories] = useState(0)
  console.log("width", window.innerWidth)
  const width = window.innerWidth > 1200 ? 1200 : window.innerWidth;
  const handleChangeCategories = (action = 'next' | 'previous') => {
    const cantCool = Math.ceil(offerts.length)
    const columnSize = 240;
    const widthDisplay = width;
    if (action === 'previous') {
      const prevState = (prevState) => {
        if (prevState + widthDisplay >= 0) {
          return 0
        }
        return prevState + widthDisplay;
      }
      setDisplayCategories(prevState);
    }
    if (action === 'next') {
      const prevState = (prevState) => {
        const newDisplay = prevState - widthDisplay;
        const nextDisplay = prevState - widthDisplay * 2;
        const displayAvailable = columnSize * cantCool;
        if (-nextDisplay >= displayAvailable) {
          return newDisplay - (nextDisplay + displayAvailable);
        }
        return newDisplay;
      }
      setDisplayCategories(prevState);
    }
  };
  const displayStyle = {
    width: '7200px',
    transform: `translateX(${displayCategories}px)`,
    transition: 'transform 400ms ease',
  };
  return (
    <section>
      <div className='flex flex-wrap mb-[30px] pb-[70px] relative
                 max-w-[1200px] py-10   mx-[40px]  lg:mx-auto  '>
        <div className='mb-[22px] box-border items-center flex leading-[1.2] '>
          <h2 className='text-[26px] font-light pl-2 text-[#666] box-border'>Ofertas</h2>
          <a className='text-[16px] mb-[2px] ml-[16px] self-baseline text-[#3483fa] mt-auto cursor-pointer'>Ver tiendas</a>
        </div>
        <div className='w-full  relative block box-border '>
          <div className='static block '>
            <div className=' h-[415px] mb-[-88px] whitespace-nowrap overflow-hidden 
             m-0 p-0 block relative'>
              <div className='opacity-100 w-[8400px] block left-0 relative top-0 ' style={displayStyle}>
                {offerts && offerts.map((element, index) =>
                  <CardOfferts
                    key={index}
                    item={element} />
                )}

              </div>
            </div>
            <div>
              <button onClick={() => handleChangeCategories('previous')}
                className={` block top-[120px] bg-white rounded-[50%] border-[0] shadow-button-categorie
                                cursor-pointer h-[64px] absolute left-[-24px] w-[64px] z-[2] hover:shadow-hover-button-categorie
                                before:mt-[-5px] before:top-[50%] before:ml-[-8px] before:left-[50%] before:-rotate-45
                                before:bg-[#3483fa] before:block before:h-[2px] before:absolute before:w-[14px] 
                                after:bottom-[50%] after:mb-[-6px] after:left-[50%] after:ml-[-8px] after:rotate-45
                                after:bg-[#3483fa] after:block after:h-[2px] after:absolute after:w-[14px]
                                `}>
              </button>
              <button onClick={() => handleChangeCategories('next')}
                className={`block top-[120px] bg-white rounded-[50%] border-[0] shadow-button-categorie
                                cursor-pointer h-[64px] absolute right-[-24px] w-[64px] z-[2] hover:shadow-hover-button-categorie
                                before:mt-[-5px] before:top-[50%] before:ml-[-8px] before:left-[50%] before:rotate-45
                                before:bg-[#3483fa] before:block before:h-[2px] before:absolute before:w-[14px] 
                                after:bottom-[50%] after:mb-[-6px] after:left-[50%] after:ml-[-8px] after:-rotate-45
                                after:bg-[#3483fa] after:block after:h-[2px] after:absolute after:w-[14px]
                                `}>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Offerts