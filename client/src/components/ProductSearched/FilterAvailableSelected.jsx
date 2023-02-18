import React from 'react'
import { useSearchParams } from "react-router-dom";

const FilterAvailable = ({ filters }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSelectFilter = (key, value) => {
        searchParams.set(key, value)
        setSearchParams(searchParams)
    }

    return (

        <div className='mb-[30px] pr-[16px] w-full block'>
            <div className='text-[#333] text-[16px] font-semibold leading-[1.25] mb-[10px]'>
                {filters.name}
            </div>
            <ul className='m-0 p-0'>
                {filters && filters.values.map((value, index) => {
                    if (index < 10) {
                        return (<li key={index}
                            className='mb-[6px] flex flex-wrap w-fit  '>
                            <button onClick={() => handleSelectFilter(filters.id, value.id)}>
                                <span className='text-[#666] text-[14px] float-left font-normal '>
                                    {value.name}</span>
                                <span className='text-[#999] text-[14px] float-left font-light ml-[6px]'>
                                    ({value.results})</span>
                            </button>
                        </li>
                        );
                    }
                })}
            </ul>
            {filters.values.length > 9 &&
                <a className='text-[#3483fa] hover:text-[#2968c8] text-[14px] font-normal cursor-pointer'>
                    Mostrar más
                </a>
            }
        </div>




    )
}

export default FilterAvailable