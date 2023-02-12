import React from 'react'
import { category } from '../../../assets/json/ListCategories.json'
import CardPopularCategory from './CardPopularCategory'

const ListPopularCategories = () => {

    return (
        < >
            {category && category.map((element, index, array) => {
                if (index % 2 === 0) {
                    return (
                        <div className='w-[170px] h-full min-h[1px] relative block float-left '>
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