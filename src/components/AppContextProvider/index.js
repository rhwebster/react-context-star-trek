import AppContext from "../../context/AppContext";
import { initialDecks, initialInventory, initialCards } from "../../mockdata/CardData";
import { useState, useCallback } from "react";

const AppContextProvider = ({ children }) => {

    
    const [applicationState, setApplicationState] = useState({
        decks: initialDecks,
        inventory: initialInventory,});


    const buyCardForPlayer = useCallback((cardId) => {
        console.log("buyCard was called")
    },[applicationState]);

    return (
        <AppContext.Provider value={{
            ...applicationState,
            cards: initialCards,
            buyCard: buyCardForPlayer
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;