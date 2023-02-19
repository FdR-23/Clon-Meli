import React, { useEffect, useState } from 'react'

import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { searchProducts } from '../services/searchProduct'
import FilterAvailable from '../components/ProductSearched/FilterAvailableSelected';
import FiltersSelected from '../components/ProductSearched/FiltersSelected';
import Product from '../components/ProductSearched/Product';

const ListProductSearched = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [products, setProducts] = useState();
    const [filterAvailable, setFilterAvailable] = useState()
    const location = useLocation()


    const query = location.search

    const handleGetProducts = async () => {
        const response = await searchProducts(query);
        setProducts(response);
        setFilterAvailable(response.available_filters)
    }

    useEffect(() => {
        if (query) {
            handleGetProducts()
        }
    }, [query])


  


    if (products === undefined) { return null } else {
        return (
            <div className='flex flex-col items-center overflow-visible w-full box-border'>
                <div className='contents'>
                    <img className='block h-[90px] w-full object-cover'
                        src="https://http2.mlstatic.com/D_NQ_NP_772223-MLA53777891298_022023-OO.jpg" alt="banner" />
                </div>
                <section className='max-w-[1215px] pl-[10px] pr-[28px] pt-[14px] pb-[30px] w-full'>
                    <ul className='text-[#0000008c] font-normal'>
                        <li className='font-bold inline text-[14px]'>Búsquedas relacionadas:</li>
                    </ul>
                </section>
                <div className='flex flex-col w-full items-center overflow-visible box-border'>


                    <div className='flex mt-0 w-full max-w-[1215px] pl-[10px] pr-[28px] '>
                        <aside className='flex-1 w-full max-w-[294px] min-w-[210px] pr-[14px] box-border'>
                            <div>
                                <ol className='leading-[1.45] font-normal mb-4'></ol>
                                <h2 className='block relative text-[#333] text-[26px] font-semibold leading-[30px] '>
                                    {products.query[0].toUpperCase() + products.query.slice(1)}
                                </h2>
                            </div>
                            <div className='items-center flex mb-4 mt-1 box-border  '>
                                <span className='w-max relative bottom-[2px] text-[14px] font-light leading-[1.29] '>
                                    {products.paging.total} resultados
                                </span>
                            </div>

                            <section className='flex flex-wrap w-full'>
                                {products.filters && products.filters.map((elemet, index) =>
                                    <FiltersSelected
                                        key={index}
                                        filters={elemet} />
                                )}

                            </section>

                            <section className='clear-both mt-9 block '>
                                {filterAvailable && filterAvailable.map((elemet, index) =>
                                    <FilterAvailable
                                        key={index}
                                        filters={elemet} />
                                )}
                            </section>
                        </aside>
                        <section className='flex flex-col w-[835px] box-border'>
                            <div className='mb-6 mt-2 text-right '>
                                <div className='inline-block w-max relative min-w-max ' >
                                    <div className='items-center inline-flex'>
                                        <div className='flex h-full mb-[-1px] '>
                                            <div className='text-[#333] text-[14px] font-semibold leading-[1.7] mr-[6px] whitespace-nowrap'>Ordenar por</div>
                                            <div className='flex justify-items-center items-center'>
                                                <div>
                                                    <button className='items-center flex '>
                                                        <span className='overflow-hidden text-ellipsis whitespace-nowrap w-full'>Más relevantes</span>
                                                        <svg className='mt-[3px] ml-1 fill-[#3483fa] h-[18px] w-[18px]' width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path fillOpacity=".45" d="M6 7.057L9.352 3.705 10.148 4.5 6 8.648 1.852 4.5 2.648 3.705z"></path></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ol className='w-full inline-flex flex-col'>
                                {products && products.results.map((product) =>
                                    <Product
                                        key={product.id}
                                        product={product} />
                                )}
                            </ol>
                        </section>

                    </div>

                </div>
            </div>
        )
    }
}


export default ListProductSearched

