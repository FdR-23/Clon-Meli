import axios from "axios"

const getQuestionProduct = async (prop) => {

    try {
        const data = await axios.get(`https://api.mercadolibre.com/questions/search?item_id=${prop}`)
            .then((data) => data.data);
        return data
    } catch (error) {
        return error
    }
}



export { getQuestionProduct }