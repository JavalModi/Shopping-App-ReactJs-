import React from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center"><i class="fa-regular fa-address-card"></i> About Us</h1>
        <hr />
        <p className="lead text-center">
        Welcome to E-Kart, your ultimate destination for seamless online shopping experiences! Founded in 2023, offering a vast array of products and services tailored to your needs.

At E-Kart, we understand that convenience, quality, and reliability are paramount to your shopping journey. That's why we've curated a diverse selection of products ranging from fashion and electronics to home essentials and beyond. Whether you're seeking the latest trends or timeless classics, we've got you covered.

Our mission is simple: to empower customers like you with unparalleled convenience and choice. With user-friendly interfaces, secure transactions, and swift delivery services, we strive to make your shopping experience effortless and enjoyable.

But we're more than just a platform – we're a community driven by shared values of integrity, innovation, and customer satisfaction. Every interaction with us reflects our dedication to exceeding your expectations and building lasting relationships.

Join us on this exciting journey as we continue to innovate and elevate your online shopping experience. Thank you for choosing E-Kart – where shopping meets satisfaction.<br></br>
    <strong>E-Kart Team!</strong>

        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          {/* <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div> */}
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
        <div style={{marginLeft:"480px"}}>
            <Link to="/product">
            <button className='btn btn-outline-dark m-2'>View All Products</button>
            </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage