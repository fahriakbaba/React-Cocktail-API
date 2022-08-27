import React from "react";

const AppContext = React.createContext();
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export default function AppProvider({ children }) {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [searchTerm, setSearchTerm] = React.useState("margarita");

    /* to get data from URL - start */
    React.useEffect(() => {
        getData(URL, searchTerm);
    }, [searchTerm]);

    const getData = async (url, search) => {
        setIsLoading(true);
        try {
            const res = await fetch(`${url}${search}`);
            const data = await res.json();
            if (res.ok) {
                setItems(data.drinks);
                setIsLoading(false);
            } else {
                setIsLoading(false);

            }

        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }
    /* to get data from URL - end */

    return (
        <AppContext.Provider value={{
            items,
            isLoading,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(AppContext);
}