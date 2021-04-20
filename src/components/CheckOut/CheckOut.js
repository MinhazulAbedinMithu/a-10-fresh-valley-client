import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [order, setOrder] = useState({})
    const {id} = useParams();
    const [product, setProduct] = useState({})
    console.log(product);
    useEffect(()=>{
        fetch(`http://localhost:5000/singleProduct/${id}`)
        .then(res => res.json())
        .then(data=>{
            setProduct(data)
        })
    },[])
    const handleOrder =(orderProduct) => {
        const product = orderProduct[0];
        const {name, price} = product;
        const email = loggedInUser?.email;
        const date = new Date();
        const newOrder ={name, price, email, date};
        // setOrder(newOrder)
        fetch('http://localhost:5000/orderByCustomer',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert('Product Order successfully created')
            }
        })
    }
    return (
        <div className="container">
            <h2>Checkout</h2>
            <table class="table table-hover">
                <thead>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{product[0]?.name}</td>
                        <td>1</td>
                        <td>${product[0]?.price}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td> <Link to='/orderNow'><button onClick={()=>handleOrder(product)} className='btn btn-success'>Checkout</button></Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CheckOut;