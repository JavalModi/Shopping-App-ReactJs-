import React from "react";

const img ={
  height:'500px',
  width: ''
}

const  text1 ={
 fontSize: '25px',
 color:'white',
 solied:'5px',
//  marginLeft:'700px'  
//  opacity:'0.9'
}

// const headin1 = {
//   color :'white',
//   // opacity: '0.79'
// }
const Home = () => {
  return (
    <>
      <div className=" hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
        <link rel="stylesheet" href="./components/image.css"/>
          <img
            className="img" style={img}
            src = './assets/mike-petrucci-c9FQyqIECds-unsplash.jpg'
            // src = './assets/wp3537578-e-commerce-wallpapers.jpg'
            // src = './assets/wp2252616-commerce-wallpapers.jpg'
            alt="Card"
            // height={370}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
        <h2 className="card-title"style={{marginBottom:"250px"}}>New Season Arrivals</h2>
              <p className="text1 col-md-6 mt-4" style={text1}>
              When Im waiting for a really good online shopping package
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
