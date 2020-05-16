import React, { Component } from 'react'
import {addToFavorite,removeFavorite} from '../../actions/index'
import {connect} from 'react-redux'
class MovieItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            favorited: false
        }
    }



    addToFav() {
        
        this.setState({ favorited: !this.state.favorited });
        this.props.addToFavorite(this.props.movie)
    }

    removeFav(){
        this.setState({ favorited: !this.state.favorited });
        this.props.removeFavorite(this.props.movie)
    }
    displayFav() {
        if (!this.state.favorited) {
            return <span class="material-icons" onClick={() => {
                this.addToFav();
            }}>
                favorite_border
         </span>
        } else {
            return <span class="material-icons" onClick={() => {
                this.removeFav()
            }}>
                favorite
            </span>

        }
    }

    render() {
        let url = "https://image.tmdb.org/t/p/w342/"
        return (
            <div className="card col-3" >
                <img src={url + this.props.movie.poster_path} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.movie.title}</h5>
                    <p className="card-text">{this.props.movie.overview}</p>
                    <p>Ratings <span className="badge badge-success"><i class="fas fa-star"></i>{this.props.movie.vote_average}</span></p>
                    <p>{this.displayFav()}</p>
                </div>
            </div>
        )
    }

}

export default connect(null,{addToFavorite,removeFavorite})(MovieItem);