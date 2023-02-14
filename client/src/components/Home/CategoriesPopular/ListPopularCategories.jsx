import React from 'react'
import DataCategories from '../../../services/ListCategories.js'
import CardPopularCategory from './CardPopularCategory'

const ListPopularCategories = () => {
    const category = DataCategories.category;
    return (
        < >
            {category && category.map((element, index, array) => {
                if (index % 2 === 0) {
                    return (
                        <div key={index} className='w-[170px] h-full min-h[1px] relative block float-left '>
                            <div className='float-left block h-[340px] w-full '>
                                <CardPopularCategory
                                    category={element} />
                                <CardPopularCategory
                                    category={array[index + 1]}
                                    bottom={true} />
                            </div>
                        </div >
                    )
                }
            })
            }
        </ >
    )
}

export default ListPopularCategories