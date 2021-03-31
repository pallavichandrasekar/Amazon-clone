import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Five Feet Apart"
            price={580}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51cYrYjR24L._SX324_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="New Apple iPhone 11 (256GB) - Purple"
            price={69900}
            rating={4}
            image="https://m.media-amazon.com/images/I/71tpxtLD0aL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="boAt Airdopes 281 Bluetooth Truly Wireless Earbuds with Mic(Active Black)"
            price={1799}
            rating={3}
            image="https://m.media-amazon.com/images/I/61U4ZnmUl2L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="23445930"
            title="Daniel Wellington-Elan Unity Bracelet Rose Gold Size - 165mm"
            price={4499}
            rating={5}
            image="https://m.media-amazon.com/images/I/51lV3fS+LrL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="Forest Essentials Gift Box"
            price={1629}
            rating={4}
            image="https://m.media-amazon.com/images/I/61mYgqryCkL._AC_UL480_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="LG Ultragear 86.6 cm (34-inch) G-Sync Compatible Curved Ultrawide, 1ms, 144Hz, HDR 10, IPS Gaming Monitor with Height Adjust Stand, HDMI x 2, Display Port - 34GL750-B (Black)"
            price={44900}
            rating={4}
            image="https://m.media-amazon.com/images/I/71S9dis6PRL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
