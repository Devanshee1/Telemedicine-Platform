import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// export const Medicine = () => {

//     return (
//         <div>

//             <button><Link to="/acne">Acne</Link></button>
//             <button><Link to="/body">Body</Link></button>

//             <Link to="/cart">Cart</Link>

//         </div>
//     )
// }
import  HomePage  from "../medical_components/HomePage";
import { Container } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";
import "./Medicines.css";
import { Slideshow } from "./SlideShow";
import delivery from './Images/delivery.png';


export const Medicines = () => {
    const [showHomePopup, setShowHomePopup] = useState(false);

    // Automatically open popup when Medicines page loads
    useEffect(() => {
      setShowHomePopup(true);
    }, []);
  
    // Function to handle closing the popup
    const closeHomePopup = () => {
      setShowHomePopup(false);
    };
  
    return (
        <div>
  <br />
  <br />
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',backgroundColor:'#2aa29e',height:'300px'}}>
    {/* Text Section */}
    <div style={{ flex: 1, padding: '0 20px',marginTop:'-20px' }}>
      <h2 style={{fontSize:'50px'}}>Welcome to MediConnect</h2>
      <p  style={{fontSize:'25px',color:'#a5cdd9',marginTop:'20px'}}>
      Your Trusted Online Pharmacy 
      </p>
      <p  style={{fontSize:'25px',color:'#a5cdd9',marginTop:'20px'}}>
      Quality Medicines Delivered to Your Doorstep
      </p>
      <p  style={{fontSize:'25px',color:'#a5cdd9',marginTop:'20px'}}>
      Affordable Prices with Exclusive Discounts
      </p>
    </div>
    
    {/* Image Section */}
    <div style={{ flex: 1, textAlign: 'center',marginLeft:'300px' }}>
      <img 
        src={delivery}
        alt="Placeholder" 
        style={{ maxWidth: '100%', height: '200px', borderRadius: '8px' }} 
      />
    </div>
  </div>
  <br />
  <br />
            <Container>
                <div className="health_div">
                    <h4>SYMPTOM CHECKER</h4>
                    <br />
                    {showHomePopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={closeHomePopup}>
              &times;
            </button>
            <HomePage />
          </div>
        </div>
      )}
                    <p>Health conditions</p>

                    <div className="health_img">
                        <button>
                            <Link to="/acne" target="_blank">
                                <div className="h_img carousel slide">
                                    {" "}

                                    <img
                                        src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-5.a8ae14dd.png"
                                        alt=""
                                    />

                                </div>
                            </Link>
                        </button>
                        <button>
                            <Link to="/body" target="_blank">
                                <div className="h_img">
                                    {" "}
                                    <img
                                        src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-6.51626a1a.png"
                                        alt=""
                                    />
                                </div>
                            </Link>
                        </button>
                        <button>
                            <div className="h_img">
                                {" "}
                                <img
                                    src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-7.476668e1.png"
                                    alt=""
                                />
                            </div>
                        </button>
                        <button>
                            <div className="h_img">
                                {" "}
                                <img
                                    src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-4.5e130b77.png"
                                    alt=""
                                />
                            </div>
                        </button>
                        <button>
                            <div className="h_img">
                                {" "}
                                <img
                                    src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-2.bcd2bdc9.png"
                                    alt=""
                                />
                            </div>
                        </button>
                        <button>
                            <div className="h_img">
                                {" "}
                                <img
                                    src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-3.eeed1ea0.png"
                                    alt=""
                                />
                            </div>
                        </button>
                        <button>
                            <div className="h_img">
                                {" "}
                                <img
                                    src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-1.6befede3.png"
                                    alt=""
                                />
                            </div>
                        </button>
                    </div>
                    <br />
                    <p>Categories</p>

                    <div className="health_img">
                        <button>
                            <div className="h_img">
                                {" "}
                                <img
                                    src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-2.640dcfd5.png"
                                    alt=""
                                />
                            </div>
                        </button>
                        <button>
                            <div className="h_img">
                                {" "}
                                <img
                                    src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-6.aa7d1cba.png"
                                    alt=""
                                />
                            </div>
                        </button>
                        <button>
                            <div className="h_img">
                                {" "}
                                <img
                                    src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-9.5029c27e.png"
                                    alt=""
                                />
                            </div>
                        </button>
                        <button>
                            <div className="h_img">
                                {" "}
                                <img
                                    src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-7.c81b7b95.png"
                                    alt=""
                                />
                            </div>
                        </button>
                        <button>
                            <div className="h_img">
                                {" "}
                                <img
                                    src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-1.f17a3332.png"
                                    alt=""
                                />
                            </div>
                        </button>
                        <button>
                            <div className="h_img">
                                {" "}
                                <img
                                    src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-3.faf3a8b9.png"
                                    alt=""
                                />
                            </div>
                        </button>
                        <button>
                            <div className="h_img">
                                {" "}
                                <img
                                    src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-4.c31332e5.png"
                                    alt=""
                                />
                            </div>
                        </button>
                        <button>
                            <div className="h_img">
                                {" "}
                                <img
                                    src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-8.c4cbe33a.png"
                                    alt=""
                                />
                            </div>
                        </button>
                    </div>
                </div>
                <br />
                <br />
            </Container>
            {/* <br /> */}
            <hr />
            <Container className="introducing_stuff">
                <div>
                    <div>
                        <p>
                            Don’t self medicate. Talk to an expert. Consult a doctor in less
                            than 2 minutes.
                        </p>
                        <img
                            src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/mar-card-1.d328c6a9.png"
                            alt=""
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <p>
                            Tired of waiting in a queue? Too weak to go down and buy
                            medicines?
                        </p>
                        <img
                            src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/mar-card-2.5a0b85e1.png"
                            alt=""
                        />
                    </div>
                </div>
            </Container>
            <br />
            <br />
            <div>
                <img
                    src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-4.2a2a16cc.png"
                    alt="xyz"
                    className="headBGcolor1"
                    style={{ width: "100%", height: "337px" }}
                />
            </div>
            <br />
            <br />

        </div>
    );
};