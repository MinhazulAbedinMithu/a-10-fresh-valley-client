import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {_id, name, imageURL, price} = props.card;
    return (
        <div className='col-md-4 mb-3'>
                <div className="m-3 shadow rounded h-100 text-center">
                    <img src={imageURL} className='img-fluid' alt="event img"/>
                    <h4 className="p-1">{name}</h4>
                    <br/>
                    <div className="d-flex justify-content-around">
                        <h3>${price}</h3>
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-success">Buy Now</button>
                        </Link>
                    </div>
                </div>
        </div>
    );
};

export default Card;