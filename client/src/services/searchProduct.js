import axios from "axios"

const searchProducts = async (prop) => {
    try {
        const data = await axios.get(`https://api.mercadolibre.com/sites/MLA/search${prop}`)
            .then((data) => data.data);
        return data
    } catch (error) {
        return error
    }
}


export { searchProducts }