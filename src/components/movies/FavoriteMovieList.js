import React from 'react'
import { connect } from 'react-redux'
import MovieItem from './MovieItem'
import {Link} from 'react-router-dom'


class FavoriteMovieList extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <h1>Favorite Movies</h1>
                    <Link to="/">Home</Link>
                    {this.props.favorites.map((movie) => {
                        return <MovieItem key={movie.id} movie={movie} />
                    })}
                </div>

            </div>
        )
    }
}

const mapStateProps = (state) => {
    console.log('List', state)
    return {

        favorites: state.fav
    }
}
export default connect(mapStateProps,null)(FavoriteMovieList);