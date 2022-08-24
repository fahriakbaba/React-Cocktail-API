import React  from "react";


const AppContext = React.createContext();


function AppProvider({children}) {




    return (
        <AppContext.Provider value="hello">
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;

export const useGlobalContext = () => {
    return React.useContext(AppContext);
}