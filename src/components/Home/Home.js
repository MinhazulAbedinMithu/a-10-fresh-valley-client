import React from 'react';
import TotalCard from '../TotalCards/TotalCard';

const Home = () => {
    return (
        <div className="container">
            <div className="m-5">
                <div className="d-flex mx-auto w-50">
                    <input type="text" name="" id="" className="form-control "/>
                    <button className="btn btn-success">Search</button>
                </div>
                <TotalCard/>
            </div>
        </div>
    );
};

export default Home;