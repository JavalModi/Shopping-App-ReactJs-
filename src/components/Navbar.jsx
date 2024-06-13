import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = ({ loggedInUser, onLogout }) => {

    const state = useSelector(state => state.handleCart)
    const { loginWithRedirect , isAuthenticated , logout , user } = useAuth0();


    return (
        <>
            
            <nav className="navbar navbar-expand-lg  py-3 sticky-top" style={{backgroundColor:"#ddebea"}}>
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/"><i class="fa-solid fa-cart-arrow-down"> E-Kart</i></NavLink>
                    <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto my-2 text-center">
                            <li className="nav-item" style={{marginLeft:"80px"}}>
                                <NavLink className="nav-link" to="/">Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/product">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li style={{marginTop:"10px", marginLeft:""}}>
                                {
                                    isAuthenticated &&
                                    <>
                                        {/* <li><Link to="/book" id="d">Book</Link></li> */}
                                        <span style={{ color: "black", marginLeft: "70px", fontFamily:"cursive" }}>{user.name}</span>
                                    </>}
                            </li>
                            {
                                isAuthenticated ? (
                                    <>
                                        <li style={{marginLeft:"250px"}}><button className='btn btn-outline-dark m-2' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                            Log Out
                                        </button></li>
                                    </>
                                ) : (
                                    <li style={{marginLeft:"470px"}}><button className='btn btn-outline-dark m-2' onClick={() => loginWithRedirect()}>Log In</button></li>
                                )
                            }
                        </ul>
                        {/* <div className="buttons text-center">
                            {loggedInUser ? (
                                <div>
                                    <span>Welcome, {loggedInUser}!</span>
                                    <button onClick={onLogout}>Logout</button>
                                </div>
                            ) : (
                                <span>Please login</span>
                            )}
                        </div> */}

                        {/* <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink> */}
                        {/* <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink> */}

                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                    </div>


                </div>
            </nav>
        </>
    )
}

export default Navbar