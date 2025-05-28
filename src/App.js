import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Head from "./Components/Header/Head";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import ChefConnection from "./Components/ChefConnection/ChefConnection";
import Month from "./Components/CookForAMonth/Month";
import OneTime from "./Components/OneTimeCook/OneTime";
import Party from "./Components/Party/Party";
import Test from "./Components/Testimonials/Test";
import Career from "./Components/Career/Career";
import Blog from "./Components/Blog/Blog";
import BlogHire from "./Components/Blog/BlogHire/BlogHire";
import Empower from "./Components/Blog/EmpowerBlog/Empower";
import DetailPage from "./Components/Blog/DetailPage";
import Invest from "./Components/Invest/Invest";
import FindCook from "./Components/Blog/FindCook/FindCook";
import ChefNear from "./Components/ChefNear/ChefNear";
import Register from "./Components/ChefRegistration/Register";
import ChefDetails from "./Components/ChefNear/ChefDetails";
import ChefDirectory from "./Components/ChefNear/ChefDirectory";
// import Details from "./Components/Invest/Detail";
const App = () => {
  return (
    <div>
      <Head/>
      <Navbar/>
      {/* <Contact/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
     
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/join-chefkart" element={<ChefConnection/>} />
        <Route path="/cook-for-month" element={<Month/>} />
        <Route path="/one-time-cook" element={<OneTime/>} />
        <Route path="/chef-for-party" element={<Party/>} />
        <Route path="/testimonial" element={<Test/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/hire-a-cook-for-home" element={<BlogHire/>} />
        <Route path="/blog/Empowering-cooks" element={<Empower/>} />
        <Route path="/blog/Find-Cook" element={<FindCook/>} />
        <Route path="/detail/:id" element={<DetailPage/>} />
        <Route path="/investor-relation" element={<Invest/>} />
        <Route path="/cooks-near-me" element={<ChefNear/>} />
        <Route path="/register-chef" element={<Register/>} />
        <Route path="/chef/:id" element={<ChefDetails/>} />
        <Route path="/chefs" element={<ChefDirectory/>} />
         {/* <Route path="/invest/:id" element={<Details />} /> */}
       
      </Routes>
      <Footer/>
    </div>

  );
};

export default App;
