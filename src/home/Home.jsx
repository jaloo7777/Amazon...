import React from "react";
import Product from "./Product";
import "./Home.scss";
import img1 from "./remote.jpeg";
import planche from "./planche.jpg";
import pullupbar from "./pullupbar.jpg";
import ring from "./rings.jpg";
import watch from "./watch.jpeg";
import pullup from "./pullup.webp";
import lap from "./laptop.png";
function Home() {
  return (
    <section className="home">
      <img
        className="home__img"
        src={
          "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        }
      />
      <div className="home__content">
        <Product
          id="1234567"
          title="Fangle Door Bar Chinup Height Increase Strength Developer PullupBars Pull-up Bar "
          price={`${"90"}`}
          rating={4}
          image={pullup}
        />

        <Product
          id="123456"
          title="Joyfit Home Exercise Workout Bar|Door Safety Cap with Perfect Door Frame Fit|Chin up Bar with Easy Installation"
          price={`${"70"}`}
          rating={5}
          image={pullupbar}
        />

        <Product
          id="12345"
          title="Kobo Fitness Gymnastics Rings/Roman Ring with Straps & Buckles for Cross Fitness Functional Training and Total Body Conditioning at Home  "
          price={`${"11.5"}`}
          rating={5}
          image={ring}
        />
      </div>
      <div className="home__content">
        <Product
          id="1234"
          title="SHOPTOSHOP Genuine A1 Smart Watch Phone Camera Only SIM Card Pedometer (Black)"
          price={`${"100,000"}`}
          rating={10}
          image={watch}
        />
        <Product
          id="123"
          title="LifeDigital Zed AIR X 2020 15.6 inch Laptop (Intel Core i3 5005U/8GB/256GB SSD/Windows 10/Intel HD 5500 Graphics), Black"
          price={`${"90"}`}
          rating={4}
          image={lap}
        />

        <Product
          id="12"
          title="Joyfit Home Exercise Workout Bar|Door Safety Cap with Perfect Door Frame Fit|Chin up Bar with Easy Installation"
          price={`${"$70"}`}
          rating={5}
          image={pullupbar}
        />

        <Product
          id="1"
          title="Alexa Voice Remote (2nd Gen) with power and volume controls – requires compatible Fire TV device"
          price={`${"$11.5"}`}
          rating={5}
          image={img1}
        />
      </div>
      <div className="home__content">
        <Product
          id="13"
          title="This is actually not for sale you can get it through hardwork only!!!"
          price={`${"100,000"}`}
          rating={10}
          image={planche}
        />
      </div>
    </section>
  );
}

export default Home;
