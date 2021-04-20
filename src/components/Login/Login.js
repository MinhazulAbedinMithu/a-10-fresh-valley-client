import React, { useContext, useState } from 'react';
import "firebase/auth";
import firebase from 'firebase/app';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';


if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const history = useHistory();
    const location = useLocation();
    const [error, setError] = useState('');

    let {from} = location.state || {from: {pathname: '/'}};

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
            const user = result.user;
            const loggedInUser = {name: user.displayName, email: user.email, img: user.photoURL};
            localStorage.setItem('user', JSON.stringify(loggedInUser));
            setLoggedInUser(loggedInUser);
            history.replace(from);
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }
    window.onbeforeunload = function (e) {
        localStorage.clear();
    };
    return (
        <div className="container">
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className='btn btn-primary m-5'>Continue With Google</button>
                <p>{error}</p>
            </div>
        </div>
    );
};

export default Login;