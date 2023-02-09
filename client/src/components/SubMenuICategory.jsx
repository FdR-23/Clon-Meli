import React from 'react'

const SubMenuICategory = ({ subcategories }) => {

    return (
        <div className='flex box-border absolute mt-[9px]  max-w-[980px] ml-[-490px] left-1/2 text-white
        shadow-sm font-semibold
         before:border-b-[14px] before:border-l-[14px] before:border-r-[14px]  before:border-b-[#333333] 
        before:top-[-8px] before:border-transparent before:left-[144px] before:absolute  before:block '>
            
            <ul className='  bg-[#333333] inline-block float-left py-6 rounded  '>

                {subcategories && subcategories.map((category) =>
                    <li 
                        className='px-9'>
                        {category.title.name}
                    </li>)}
            </ul>
        </div>
    )
}

export default SubMenuICategory