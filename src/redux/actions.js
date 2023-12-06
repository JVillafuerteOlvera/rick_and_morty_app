import { ADD_FAV, REMUVE_FAV } from "./action-types"

  
export function addFav(character) {
    return {
        type: ADD_FAV,
        payload: character
    }

}

export function removefav(id) {
    return {
        type: REMUVE_FAV,
        payload: id
    }

} 