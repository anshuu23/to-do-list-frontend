import { createContext , useState } from "react";

export const tokenContext = createContext()

export const TokenProvider = (props) => {

    const [token , setToken] = useState(0)

    return(
        <tokenContext.Provider value = {{ token , setToken }}>
            {props.children}
        </tokenContext.Provider>
    )
}