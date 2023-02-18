import React from 'react'
import { useSearchParams } from 'react-router-dom'

function FiltersSelected({ filters }) {
    const [searchParams, setSearchParams] = useSearchParams()


    const handleDeleteFilter = (key) => {
        searchParams.delete(key)
        setSearchParams(searchParams)
    }
    return (
        <>
            {filters &&
                <div className='bg-white  rounded-[1px] max-h-[26px] text-[14px]
                 h-9 items-center border-solid border-[1.2px] border-trnasparent
                 inline-flex font-normal w-auto'>
                    <div
                        className='text-[#0000009e] text-[13px] px-[9px]'>{filters.values[0].name}</div>
                    <button onClick={() => handleDeleteFilter(filters.id)}
                        className='h-[27px] w-[27px]  fill-[#bfbfbf]
                     rounded-[50%] cursor-pointer flex justify-center  items-center 
                     hover:fill-[#8c8c8c]'>
                        <span className='flex items-center  justify-center'>
                            <svg width="16" height="16" viewBox="0 0 16 16"><path transform="translate(3 3)" fillOpacity="0.45" d="M8.594.552l.855.842L5.87 5.022 9.45 8.6l-.849.848-3.572-3.572-3.521 3.572-.855-.842L4.18 5.028.552 1.4l.849-.848 3.621 3.62L8.594.553z"></path></svg>
                        </span>
                    </button>


                </div>




            }
        </>
    )
}

export default FiltersSelected