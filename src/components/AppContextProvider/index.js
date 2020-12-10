import AppContext from "../../context/AppContext";
import { initialDecks, initialInventory, initialCards } from "../../mockdata/CardData";
import { useState } from "react";

const AppContextProvider = ({ children }) => {

    
    const [applicationState, setApplicationState] = useState({
        decks: initialDecks,
        inventory: initialInventory,});

    return (
        <AppContext.Provider value={{
            ...applicationState,
            cards: initialCards,
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;