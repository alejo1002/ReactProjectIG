import React from 'react';

const Card = (props) =>
{
    const { widt, heig, src_img, al} = props;
    return(
        <img className="card bg-dark card-wrap"
            data-toggle = "tooltip"
            data-placement = "bottom"
            title = {al}
            style={{ width: widt, height: heig }}
            src={src_img}
            alt={al}
        />
    );
}

export default Card;