import React from 'react';

const DeleteProduct = () => {
    const [products, setProducts] = useState([])

    const{name, }
    useEffect(()=>{
        fetch('https://fresh-valley-server.herokuapp.com//products')
        .then(res => res.json()).then(data=>{
            setProducts(data)
        })
    },[])

    return (
        <div>
            
        </div>
    );
};

export default DeleteProduct;