import React, { useState, useEffect } from 'react'
import { getQuestionProduct } from '../../services/getQuestionProduct'

const QuestionProduct = ({ id }) => {
    const [data, setData] = useState();

    console.log("perguntas", data)

    useEffect(() => {
        getQuestionProduct(id)
            .then((data) => setData(data))
    }, [])

    return (
        <div className='block w-full pt-10'>
            <h2 className='text-[24px] pb-8 leading-[1.25]'>Preguntas y respuestas</h2>
            <div className='mt-10 '>
                <h3 className='text-[18px] text-[#000000e6] font-semibold leading-[1.25]'>Últimas realizadas</h3>
                {data?.questions && data.questions.map((question) =>
                    <div className='mt-6'>
                        <div>
                            <span className='text-[#000000e6] text-[16px] font-normal'>
                                {question.text}
                            </span>
                        </div>
                        <div className='items-start flex ml-3 mt-2 '>

                            <div className='inline'>
                                <span className='text-[#00000073] text-[14px] ml-2 font-normal'>
                                    {question.answer.text}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default QuestionProduct