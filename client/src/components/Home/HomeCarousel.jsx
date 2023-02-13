import React, { useState } from 'react'

import image from '../../services/carouselImage.js'
const HomeCarousel = () => {

    const [selectIndex, setSelectIndex] = useState(0);
    const [selecteImage, setSelectedImage] = useState(image[0]);

    const selectNewImage = (image, next = true) => {
        const condition = next ? selectIndex < image.length - 1 : selectIndex > 0;
        const nextIndex = next ?
            condition ? selectIndex + 1 : 0
            : condition ? selectIndex - 1 : image.length - 1;
        setSelectedImage(image[nextIndex]);
        setSelectIndex(nextIndex);
    }
    const previus = () => {
        selectNewImage(image, false)
    }
    const next = () => {
        selectNewImage(image)
    }

    return (
        <div>
            <section className='w-full relative block '>
                <div className='relativet '>

                    <button className='absolute flex justify-center h-[64px] p-0 w-8 opacity-100 items-center rounded-tr-[64px] rounded-br-[64px]
                     bg-white top-[50%] left-0 z-[1021] translate-y-[-50%] hover:shadow-button-banner'
                        onClick={() => previus()}>
                        <span className='flex'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#3483fa"><path d="M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z" fill="#3483fa"></path></svg>
                        </span>
                    </button>

                    <div className='overflow-hidden flex justify-center w-full transition-all duration-700 '>
                        <img className='max-w-[1600px] h-[340px] w-full object-cover object-top transition-all duration-700 '
                            src={selecteImage} alt="Image Banner" />
                    </div>

                    <button className='absolute right-0 flex h-[64px] p-0 w-8 opacity-100 items-center rounded-tr-[64px] rounded-br-[64px]
                     bg-white top-[50%] z-[1021] translate-y-[-50%] rotate-180 hover:shadow-button-banner '
                        onClick={() => next()}>
                        <span className='flex'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#3483fa"><path d="M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z" fill="#3483fa"></path></svg>
                        </span>

                    </button>

                </div>

                <ul className='absolute bottom-4 right-[50%] m-0 translate-x-[50%] flex '>
                    {image && image.map((elemet, index) =>
                        <li key={index} className='flex'>
                            <button className={`${selectIndex === index ? 'bg-white shadow-button-hover-pagination' :
                                'bg-[#00000040] shadow-button-pagination '}
                                w-[6px] h-[6px] mx-[2px] rounded-[50%]`}
                                type="button">
                                <div className="absolute w-[1px] h-[1px] mr-[-1px] mb-[-1px] whitespace-nowrap overflow-hidden ">
                                    {elemet}</div>
                            </button>
                        </li>
                    )}
                </ul>

            </section>
        </div >
    )
}



export default HomeCarousel
