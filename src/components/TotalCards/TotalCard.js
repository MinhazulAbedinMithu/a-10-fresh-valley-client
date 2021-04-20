import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import FakeData from '../FakeData/FakeData.json';
import Spinner from '../Spinner/Spinner';

const TotalCard = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://fresh-valley-server.herokuapp.com//products')
        .then(res => res.json()).then(data=>{
            setProducts(data)
        })
    },[])

    return (
        <div className='row'>
            {
                products.length ===0 && <Spinner></Spinner>
            }
            {
                products.map(card => <Card card={card}></Card>)
            }
        </div>
    );
};

export default TotalCard;