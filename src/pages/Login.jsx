import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

import { Footer, Navbar } from "../components";

const Login = () => {

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');


  const[err, setErr] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        // const displayName = e.target[0].value;
        const email = e.target[0].value;
        const password = e.target[1].value;
        // const file = e.target[3].files[0];

        // console.log(name)
        // console.log(email)
        // console.log(password)

        try {
          
          await signInWithEmailAndPassword(auth, email, password)
          navigate("/")

        } catch (error) {
            alert("Enter Valid User ID & Password")
            setErr(true)
        }


    }

  return (
    <>
      <Navbar />
      {/* <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input

                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}

                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com" required
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input

                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}

                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit"> 
                Login
                  
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default Login;
