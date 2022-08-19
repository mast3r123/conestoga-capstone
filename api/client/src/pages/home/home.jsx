import Header from "../../components/header/header";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/properyList";
import FeaturedHotels from "../../components/featuredHotels/featuredHotels";
import EmailList from "../../components/emailList/emailList";
import Footer from "../../components/footer/footer";

import "./home.css";
import Login from "../login/Login";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home's guests love</h1>
        <FeaturedHotels />
        <EmailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
