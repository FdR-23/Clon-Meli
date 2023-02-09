import axios from "axios"

const allCategories = async () => {
    try {
        const data = await axios.get('https://api.mercadolibre.com/sites/MLA/categories')
        const data1 = data.data.map(e => e.id)
        const cartegory = await Promise.all(data1.map(async (element) => await axios.get(`https://api.mercadolibre.com/categories/${element}`)
            .then((data) => data.data)))

        const categoriesAndSubcat = cartegory.map((data) => { return { title: data, subtitle: data.children_categories.map((data1) => data1) } })


        return categoriesAndSubcat

    } catch (error) {
        return error
    }


}


export { allCategories }