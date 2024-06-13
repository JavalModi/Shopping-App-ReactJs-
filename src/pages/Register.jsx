import React from 'react'
import { Footer, Navbar } from "../components";

import { NavLink,Link, useNavigate } from 'react-router-dom';


import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth, db} from './firebase'

import { doc, setDoc } from "firebase/firestore"; 

import { useState } from "react";


const Register = () => { 
    
    const[err, setErr] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        // const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        // const file = e.target[3].files[0];

        // console.log(name)
        // console.log(email)
        // console.log(password)

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)  
            // const name = displayName
            // console.log(res)   
            
            await setDoc (doc(db , "users",res.user.uid),{
            uid: res.user.uid,    
            email,

        })
        navigate("/login")

                
            
        } catch (error) {
            setErr(true)
        }


    }

    return (
        <>
            <Navbar />
            {/* <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>

                            {err && <span>Something went wrong</span>}
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
            <Footer />
        </>
    )
}

export default Register