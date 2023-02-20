import React, { useState, useEffect } from 'react'
import { getQuestionProduct } from '../../services/getQuestionProduct'

const QuestionProduct = ({ id }) => {
    const [question, setQuestion] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        getQuestionProduct(id)
            .then((data) => setData(data))
    }, [])
    const handleChange = (e) => {
        e.preventDefault()
        setQuestion(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setQuestion('')
    }

    return (
        <div
            className='block w-full pt-10'>
            <h2 className='text-[24px] pb-8 leading-[1.25]'>Preguntas y respuestas</h2>
            <div className='mt-10 '>
                <p className='text-[18px] font-semibold '>Preguntale al vendedor</p>
                <form onSubmit={(e) => handleSubmit(e)}
                    className='flex mt-4 box-border focus:outline-none' >
                    <div className='inline-block w-full box-border'>
                        <div className='pt-0 mr-0 mas-w-[768px] block text-[18px] font-normal relative text-left'>
                            <label>
                                <div className='items-center bg-white rounded-[0.375em] flex text-[16px]
                                shadow-inpu_question  min-h-12 w-full 
                                focus:outline-none'>
                                    <textarea
                                        className='overflow-x-hidden break-words h-12 
                                        leading-[1] min-h-[48px] pl-3 pt-[15px]
                                        w-auto flex-grow rounded-[0.375em] font-[16px] m-0
                                        py-[0.8125em] px-[0.75em]  resize-none
                                         focus-visible:shadow-input_question_none focus-visible:outline-none'
                                        name="question" rows="1" placeholder='Escribí tu pregunta...'
                                        autoComplete='off' maxLength={2000}
                                        value={question}
                                        onChange={handleChange}></textarea>
                                </div>
                            </label>
                        </div>
                    </div>
                    <button
                        className='ml-4 align-top w-[184px] bg-[#3483fa] text-white 
                    rounded-md inline-block text-[16px] font-semibold h-12 px-6 text-center transition-colors duration-300
                    hover:bg-[#2968c8]'>Preguntar</button>
                </form>
            </div>
            <div className='mt-10 '>
                <h3 className='text-[18px] text-[#000000e6] font-semibold leading-[1.25]'>Últimas realizadas</h3>
                {data?.questions && data.questions.map((question) =>
                    <div className='mt-6'>
                        <div>
                            <span className='text-[#000000e6] text-[16px] font-normal'>
                                {question?.text}
                            </span>
                        </div>
                        <div className='items-start flex ml-3 mt-2 '>

                            <div className='inline'>
                                <span className='text-[#00000073] text-[14px] ml-2 font-normal'>
                                    {question?.answer?.text}
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