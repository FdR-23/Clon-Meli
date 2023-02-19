import React from 'react'

const SubMenuICategory = ({ subcategories }) => {

    return (
        <div className='absolute flex m-w-[980px] ml-[-490px] left-[50%]
        rounded shadow-nav-input box-border text-[14px] font-semibold mt-[9px] mb-[-10px] leading-[22px] z-[1002]
        before:absolute before:top-[-8px] before:block before:left-[148px] 
        before:w-0 before:h-0 before:border-0 before:border-solid before:border-transparent 
        before:border-r-[14px] before:border-l-[14px] before:border-b-[14px] before:border-b-[#333]'>

            <ul className='m-0  relative inline-block float-left bg-[#333] py-[22px] rounded'>

                {subcategories && subcategories.map((category, index) =>
                    <li key={index} className='box-border'>
                        <a className={`relative pr-[44px] text-white block px-9 leading-[2.59] max-w-[260px]
                         whitespace-nowrap overflow-hidden text-ellipsis hover:bg-[#3483fa]
                    ${category === "Tecnología" ?
                                'after:border-t-[1.5px] after:border-r-[1.5px] after:border-[#ffffff99] after:absolute after:align-middle after:h-[7px] after:w-[7px] after:rotate-45 after:translate-y-[-50%] after:top-[50%] after:right-[34px]' : ''}`}
                            href={category === "Ver más categorías" ? '/more-category' : '#'}>
                            {category}
                        </a>


                    </li>)}
            </ul>
        </div>
    )
}

export default SubMenuICategory