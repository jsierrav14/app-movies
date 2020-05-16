import React from 'react'
import Search from '../Search/Search'
import { connect } from 'react-redux'
import MovieItem from './MovieItem'
import  {Link} from "react-router-dom";
class Movies extends React.Component {


    render() {
        return (

            <div className="col-md-12">
                <div className="container">
                    <div className="row">
                    <hr/>
                    <Link to="/fav">Favoritos</Link>
                    </div>
                    <Search />
                    <div className="row">
                    {this.props.movies.map((item) => {
                        return <MovieItem key={item.id} movie={item}/>
                    })}
                    </div>
                </div>
               
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        movies: state.movies
    }
}
export default connect(mapStateToProps, null)(Movies);