import {ADD_TO_FAVORITE, REMOVE_FAVORITE} from '../actions/index'


const favorites = (state=[],action)=>{
    switch(action.type){
        case ADD_TO_FAVORITE:
        let favoriteMovies =[...state, action.movie]
        return favoriteMovies

        case REMOVE_FAVORITE:
        let movies = removeItem(state,action.movie)
        return movies;
        default:
         return state;
    }
}

const removeItem = (state,movie)=>{
    return state.filter((item)=> item.id!==movie.id);
}
export default favorites;