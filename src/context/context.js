import React  from "react";

const AppContext = React.createContext();
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

export default function AppProvider({children}) {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    return (
        <AppContext.Provider value="hello">
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(AppContext);
}