import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const OrderNow = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const userEmail = loggedInUser.email;
    const [products, setProducts] = useState([])
    console.log(products[17]);
    // const {name, price, imagURL} = products; 
    useEffect(()=>{
        fetch(`http://localhost:5000/getOrderByCustomer?email=${userEmail}`)
        .then(res => res.json())
        .then(data=>{
            setProducts(data);
        })
    },[])
    return (
        <div className="container mx-auto">
            <h2>Ordered Products</h2>
            <table class="table table-hover">
                <thead>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {
                        // products.map(product => (
                        //     <tr>
                        //         <td>{product.name}</td>
                        //         <td>1</td>
                        //         <td>${product.price}</td>
                        //     </tr>
                        // ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderNow;