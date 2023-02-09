import React, { useState, useEffect, useContext, useCallback } from 'react'

import { allCategories } from '../services/getAllCategories'

const menuContext = React.createContext()

export const useMenuContext = () => {
    return useContext(menuContext)
}

function MenuProvider({ children }) {
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        allCategories()
            .then((data) => setCategories(data))
    }, [])

    return (
        <menuContext.Provider value={{ categories }}>

            {children}

        </menuContext.Provider>
    )
}

export default MenuProvider