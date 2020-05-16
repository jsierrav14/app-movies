export const MOVIES = "MOVIES";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export const movies = (items)=>{
    const action = {
        type:MOVIES,
        items
    }
    return action;
}

export const addToFavorite = (movie)=>{
    const action = {
        type:ADD_TO_FAVORITE,
        movie
    }

    return action
}

export const removeFavorite = (movie)=>{
    const action = {
        type:REMOVE_FAVORITE,
        movie
    }

    return action;
}