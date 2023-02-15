import React, { useState } from 'react'
import ListPopularCategories from './ListPopularCategories'
import DataCategories from '../../../services/ListCategories.js'

const CatPopulares = () => {
    const category = DataCategories.category;
    const [isHovered, setIsHovered] = useState(false);
    const [displayCategories, setDisplayCategories] = useState(0)

    const handleChangeCategories = (action = 'next' | 'previous') => {
        const cantCool = Math.ceil(category.length / 2)
        const columnSize = 170;
        const widthDisplay = 1190;
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
        width: '5100px',
        transform: `translateX(${displayCategories}px)`,
        transition: 'transform 400ms ease',
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <section>
            <div className='flex flex-wrap relative mx-10 lg:mx-auto max-w-[1200px] py-[40px] '>
                <div className='mb-[22px] items-center flex leading-[1.2] '>
                    <h2 className='text-[26px] font-light ml-2 w-full text-[#666]'>Categorías populares</h2>
                </div>
                <div className='rounded shadow-nav-shadow ml-[10px] overflow-hidden h-[340px] '>
                    <div className='static' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                        <div className='static block '>
                            <div className='m-0 p-0 overflow-hidden bock relative  '>
                                <div className={`opacity-100  translate-x-[${displayCategories}px]
                                block left-0 relative top-0  overflow-x-scroll lg:overflow-x-visible`}
                                    style={displayStyle}>
                                    <ListPopularCategories />
                                </div>
                            </div>
                            <div>
                                <button onClick={() => handleChangeCategories('previous')}
                                    className={`block top-[221px] bg-white rounded-[50%] border-[0] shadow-button-categorie
                                cursor-pointer h-[64px] absolute left-[-24px] w-[64px] z-[2] hover:shadow-hover-button-categorie
                                before:mt-[-5px] before:top-[50%] before:ml-[-8px] before:left-[50%] before:-rotate-45
                                before:bg-[#3483fa] before:block before:h-[2px] before:absolute before:w-[14px] 
                                after:bottom-[50%] after:mb-[-6px] after:left-[50%] after:ml-[-8px] after:rotate-45
                                after:bg-[#3483fa] after:block after:h-[2px] after:absolute after:w-[14px]
                                ${isHovered ? 'visible' : 'invisible'} `}>
                                </button>
                                <button onClick={() => handleChangeCategories('next')}
                                    className={`block top-[221px] bg-white rounded-[50%] border-[0] shadow-button-categorie
                                cursor-pointer h-[64px] absolute right-[-24px] w-[64px] z-[2] hover:shadow-hover-button-categorie
                                before:mt-[-5px] before:top-[50%] before:ml-[-8px] before:left-[50%] before:rotate-45
                                before:bg-[#3483fa] before:block before:h-[2px] before:absolute before:w-[14px] 
                                after:bottom-[50%] after:mb-[-6px] after:left-[50%] after:ml-[-8px] after:-rotate-45
                                after:bg-[#3483fa] after:block after:h-[2px] after:absolute after:w-[14px]
                                ${isHovered ? 'visible' : 'invisible'}  `}>
                                </button>
                                <ul className='block right-[5px] top-[50px] w-auto h-0
                                bottom-[-25px] absolute text-center  '>
                                    <li className='text-center w-[16px] cursor-pointer h-[20px] inline-block relative'>
                                        <button
                                            className='bg-[#c6c6c6] rounded-[50%] inline h-[4px] p-[1px] w-[4px] transition
                                        hover:bg-[#3483fa] hover:h-[8px] hover:w-[8px]'>
                                        </button>
                                    </li>
                                    <li className='text-center w-[16px] cursor-pointer h-[20px] inline-block relative'>
                                        <button
                                            className='bg-[#c6c6c6] rounded-[50%] inline h-[4px] p-[1px] w-[4px] transition
                                        hover:bg-[#3483fa] hover:h-[8px] hover:w-[8px]'>
                                        </button>
                                    </li>
                                    <li className='text-center w-[16px] cursor-pointer h-[20px] inline-block relative'>
                                        <button
                                            className='rounded-[50%] inline  p-[1px] transition
                                        bg-[#3483fa] h-[8px] w-[8px]'>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CatPopulares