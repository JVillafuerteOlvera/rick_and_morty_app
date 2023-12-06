import { ADD_FAV, REMUVE_FAV } from "./action-types"

const initialState = {
    myFavorites: []
}

export default function reducer(state = initialState, {type,
payload}) {
    switch( type ) {
    case ADD_FAV:
        return {
            ...state, 
            myFavorites: [...state.myFavorites, payload]
        }
        case REMUVE_FAV:
            const filteredFavs = state.myFavorites.filter(
                favorite => favorite.id !== Number(payload)
            );
            return {
                ...state,
                myFavorites: filteredCharacters
            }
            default: 
            return {...state}
               
        }

}
    
