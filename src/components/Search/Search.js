import React, { Component } from 'react'
import { API_KEY } from '../../auth/secrets'
import {movies} from '../../actions/index'
import { connect } from 'react-redux'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    search = async (event) => {
        event.preventDefault();
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.state.query}&page=1`;
        let response;
        try {
            response = await fetch(url, {method: 'GET'})
            let data = await response.json();
            this.props.movies(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div className="row justify-content-md-cente">
                <form className="form-inline">
                    <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="inputPassword2" className="sr-only">Search wonder woman</label>
                        <input type="text" className="form-control" placeholder="Search wonder woman" onChange={(event) => this.setState({ query: event.target.value })} />
                    </div>
                    <button className="btn btn-primary mb-2" onClick={(event) => this.search(event)}>Search</button>
                </form>
            </div>
        )

    }

}

export default connect(null,{movies})(Search);