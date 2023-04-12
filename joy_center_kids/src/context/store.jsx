import React, { useContext, useState } from "react";

export const Store = React.createContext();

export const ContextProvider = ({children}) => {

    const value = { msg: 'Store Data' }
    return(
        <Store.Provider value={value}>
            {children}
        </Store.Provider>
    )
}

export const useMyContext = () => useContext(Store);