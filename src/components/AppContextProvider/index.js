import { initialCards } from "../mockdata/CardData";
import AppContext from "../../context/AppContext";
import { initialDecks, initialInventory } from "../../mockdata/CardData";

const AppContextProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{
            cards: initialCards,
            decks: initialDecks,
            inventory: initialInventory,
            
        }}>
            {children}
        </AppContext.Provider>
    );
}