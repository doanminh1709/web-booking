import React from "react";
import './Register.css';

const Register = () => {
    return (<div className="container-register">
        <h1>Save time , save money!</h1>
        <p>Sign up and we'll send the best deals to you</p>
        <form>
            <input placeholder="Your email..."/>
            <button>Subscribe</button>
        </form>
    </div>);
}

export default Register;