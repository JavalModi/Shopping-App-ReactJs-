import React from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom"
import emailjs from "@emailjs/browser";
import "./contact.css";
const ContactPage = () => {

  const handleSubmit=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_p0gxdmw', 'template_vzgqcje', e.target, 'ZQuDfC-309V8L2Tx_')
      .then((result) => {
          alert("Mail sent successfully!")
      }, (error) => {
          alert("An error occurred! Please try again later.");
      })

    e.target.reset()
}

  return (
    <>
      <Navbar />
      <form className="form" onSubmit={handleSubmit}>
      {/* <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
             <div class="form my-3">
                <label for="Name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="Name" name="from_name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email" name="from_email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form  my-3">
                <label for="message">Message</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password" name="message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit">
                  Send
                </button>
              </div>
            
          </div>
        </div>
      </div> */}
       <div class="container" style={{marginTop: "30px"}}>
        <strong><h1 className="con"><i class="fa-regular fa-address-book"></i> Contact Us</h1></strong>
        <h3 className="fs-7 text-secondary mt-1 mb-2 text-uppercase text-center">Get in Touch</h3>
        <h2 className="display-5 mb-2 mb-md-2 text-center">We're Always On The Lookout To Support Our All Clients.</h2>
        <div class="row" >
          <div class="col-md-6">
                    <div class="s1form ">

                        <i class="fa-solid fa-user fa-2x icon"></i>
                        <input type="text" class="s1txt" id="" placeholder="First Name " name="from_name"/> <br/>

                        <i class="fa-solid fa-envelope fa-2x icon"></i>
                        <input type="text"  class="s1txt" id="" placeholder="Email " name="from_email"/>
                        <br/>

                        <textarea  id="" cols="30" rows="6" class="tarea1" placeholder="Messsage" name="message" style={{marginLeft:"50px"}}></textarea>
                        <br/>

                        <button class="s1btn"><a href="">Send Message</a></button>
                    </div>
            </div>
            <div class="col-md-6">
                    
                  

                    {/* <i class="fa-brands fa-facebook  s9icon"></i> */}
                    <Link to="/" id="">
                    <i class="fa-brands fa-facebook  s9icon"></i>
                    </Link>
                    <Link to="/" id="">
                    <i class="fa-brands fa-square-twitter  s9icon"></i>
                    </Link>
                    <Link to="/" id="">
                    <i class="fa-brands fa-square-instagram s9icon"></i>
                    </Link>
                    <div style={{width:"100%"}}>
                        <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Mehsana+(E-Kart)&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.gps.ie/">gps trackers</a>
                        </iframe>
                  </div>
               </div>
                </div>
                

          </div>
      </form>
      <Footer />
    </>
  );
};

export default ContactPage;
