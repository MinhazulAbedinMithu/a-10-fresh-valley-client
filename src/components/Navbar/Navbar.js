import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand ms-5" to="/">FRESH VALLEY</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                    <li className="nav-item me-4">
                        <Link to="/" className="nav-link ">Home</Link>
                    </li>
                    <li className="nav-item me-4">
                        <Link to="/orderNow" className="nav-link ">Orders</Link>
                    </li>
                    <li className="nav-item me-4">
                    <Link to="/adminPanel" className="nav-link ">Admin</Link>
                    </li>
                    <li className="nav-item me-4">
                    <Link to="/deals" className="nav-link ">Deals</Link>
                    </li>
                    
                    <li className="nav-item me-4">
                        {
                            loggedInUser?.email ? <img className="rounded w-50" src={loggedInUser.img} alt=""/> : <Link className=' nav-link btn btn-success' to="/login">Login</Link>
                        }
                    </li>
                   
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;