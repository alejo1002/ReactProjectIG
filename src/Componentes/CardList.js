import React from 'react';
import Card from './Card'

const CardList = ({movies}) => {
    return (
        <div className="row row-cols-1 row-cols-md-3">
            {
                movies.map((movie) => {
                    return (
                        <div key={movie.id} className="col mb-2">
                            <Card
                                widt = {200}
                                heig= {300}
                                src_img= {`http://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                al = {movie.title}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CardList;