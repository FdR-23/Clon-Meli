import axios from "axios"

const getProduct = async (prop) => {
    try {
        const data = await axios.get(`https://api.mercadolibre.com/items?ids=${prop}`)
            .then((data) => data.data[0].body);
        return data
    } catch (error) {
        return error
    }
}


export { getProduct }