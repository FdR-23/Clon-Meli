import axios from "axios"

const getCategories = async () => {
    try {
        const response = await axios.get('https://api.mercadolibre.com/sites/MLA/categories')
        const data = response.data
        return data
    } catch (error) {
        return error.message

    }
}

export { getCategories }