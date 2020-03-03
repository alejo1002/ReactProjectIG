import React from 'react';
import Api from 'axios';

class SearchForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            wordSearch : ""
        }
        this.searchPokemon  = this.serchMovie.bind(this); //para que tome el this global
        //this.nuevoItem  = this.nuevoItem.bind(this);
    }

    url_movie_db  = "https://api.themoviedb.org/3";
    token = "0560ba2f355ba88dba7ffcb157cc8785";

    serchMovie = async (e) =>{
        e.preventDefault();
        try{
            const reques = await Api.get(`${this.url_movie_db}/search/movie?api_key=${this.token}&page=1&include_adult=false&query="${this.state.wordSearch}"`);
            console.log(reques.data.results);
            this.props.getDat(reques.data.results);
            this.setState({wordSearch: ''});
        }
        catch(error){
            console.error(error);
        }
    }

    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <form onSubmit={this.serchMovie} className="form-inline">
                        <input 
                            type="text"
                            onChange={e => this.setState({wordSearch: e.target.value})}
                            value={this.state.wordSearch}
                            className="form-control mb-2 mr-sm-2" id="inputName"
                            placeholder="Search Movie"/>
                        <button className="btn btn-outline-success mb-2">Search</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchForm;