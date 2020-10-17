import React, { useContext, useState } from 'react';
import './Login.css';
import google from '../../images/google.png';
import logo from '../../images/logos/logo.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Login = () => {

  document.title = 'Creative Agency | Login'

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          name: displayName,
          email: email,
          image: photoURL
        };
        setLoggedInUser(signedInUser);
        storeAuthToken();
        history.replace(from);
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <div style={{ height: '100vh', padding: '100px' }}>
      <img style={{ width: '150px', height: '47px', display: 'block', margin: '0 auto' }} src={logo} alt="" />
      <div className="form-container">
        <div>
          <h2 className="text-center mb-5">Login With</h2>
            <button onClick={handleGoogleSignIn} className="social-login" onClick={handleGoogleSignIn}>
              <img className="google-icon" src={google} alt="" />
              <p>Continue with Google</p>
            </button>
          <p className="text-center mt-3">Don’t have an account? <a href="">Create an account</a> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;