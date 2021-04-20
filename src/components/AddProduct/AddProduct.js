import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://fresh-valley-server.herokuapp.com//addProduct`;
        console.log(productData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData),
        })
        .then(res => console.log('server site response',productData))
    };

    const handleImgUpload = (event) => {
        const imageData = new FormData();
        imageData.set("key", '47760e4264d44227da2f032568305b31');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(res => {
            const imageUrl = res.data.data.display_url;
            setImageURL(imageUrl);
            console.log(imageUrl);

        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" placeholder="name" defaultValue="" {...register("name")} />
                <br/>
                <input name="price" placeholder="price" defaultValue="" {...register("price")} />
                <br/>
                <input type="file" onChange={handleImgUpload}/>
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;