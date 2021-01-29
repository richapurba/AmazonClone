import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        <div className="home__row">
          <Product id="12321341" title="Rydebot Puledro- Smart Motorized Rideable Carry-on Suitcase/Luggage for Adults/Kids" price={169.0} image="https://images-na.ssl-images-amazon.com/images/I/41uZOcXjpvL._AC_SX425_.jpg" rating={5} />
          <Product id="49538094" title="Problem Solving with Algorithms and Data Structures Using Python SECOND EDITION" price={38.30} image="https://images-na.ssl-images-amazon.com/images/I/51YORtBDG4L._SX405_BO1,204,203,200_.jpg" rating={4} />
        </div>
        <div className="home__row">
          <Product id="4903850" title="Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition" price={26.99} image="https://images-na.ssl-images-amazon.com/images/I/410hiaPGyCL._SX348_BO1,204,203,200_.jpg" rating={4} />
          <Product id="23445930" title="Amazon Echo (3rd generation) Smart Speaker with Alexa, Charcoal Fabric" price={98.99} image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SX425_.jpg" rating={5} />
          <Product id="3254354345" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th generation)" price={598.99} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" rating={3} />
        </div>
        <div className="home__row">
          <Product id="90829332" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={1094.98} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" rating={4} />
        </div>
      </div>
    </div>
  )
}

export default Home;