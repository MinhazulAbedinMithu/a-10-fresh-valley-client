import React, {
    useEffect,
    useState
} from 'react';
import { useHistory } from 'react-router';

const ManageProduct = () => {
        const [products, setProducts] = useState([]);
        const loadAllProducts = () =>{
            fetch('https://fresh-valley-server.herokuapp.com//products')
                .then(res => res.json()).then(data => {
                    setProducts(data)
                })
        }
        useEffect(() => {
            loadAllProducts();
        }, [])

        const handleDelete = (id) => {
            fetch(`https://fresh-valley-server.herokuapp.com//delete/${id}`,{
                method: "DELETE",
            })
            .then(res=>res.json())
            .then(data =>{
                alert("Product DEleted successfully");
                loadAllProducts();
            })

        }
        return ( 
            <table class = "table table-hover" >
            <thead>
            <th> Name </th> 
            <th> Quantity </th> 
            <th > Price </th> 
            <th> Manage </th> 
            </thead> 
                <tbody> {
                    products.map(pd => 
                    <tr>
                        <td> {pd.name} </td> 
                        <td> 1 </td> 
                        <td> {pd.price} </td> 
                        <td> < button onClick = {() => handleDelete(pd._id)} class = "btn btn-success" > Delete </button></td>
                    </tr>) 
                        } 
                </tbody>
            </table>
            );
        };

        export default ManageProduct;