import movies from './movies_reducer'
import fav from './fav_reducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    movies,
    fav
})


export default rootReducer;