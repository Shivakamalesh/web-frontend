import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Working from "./components/Working";
import PopularCurrencies from "./components/PopularCurrencies";
import Footer from "./components/Footer";
import About from "./pages/About";
import Wallet from "./pages/Wallet";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Calendar from "./pages/Calendar";
import NewsFeed from "./pages/News";
import MarketPage from "./pages/Market";
import Proof from "./pages/Proof";
import Mobile from "./components/Mobile";
import Desktop from "./components/Desktop";
import PredictionPage from "./pages/PredictionPage";
// import BuyerPage from "./pages/BuyerPage";
import BuyerDetails from "./pages/BuyerDetails";
import WhyChooseUs from "./components/WhyChooseUs";
import Chatbot from "./components/Chatbot"; // Import Chatbot component
// import SellerPage from "./pages/SellerPage";
import Dashboard from "./pages/Dashboard";
import BuyPage from "./pages/BuyPage";
import SellPage from "./pages/SellPage";
import MarkettPage from "./pages/MarkettPage";
// import SellerPage from "./pages/SellPage";
// import SellPage from "./pages/SellPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <PopularCurrencies />
              <WhyChooseUs />
              <Working />
              <Mobile />
              <Desktop />
              
              <Chatbot /> 
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/proof" element={<Proof />} />
        {/* <Route path="/buyshare" element={<BuyerPage />} /> */}
        <Route path="/buyshare" element={<MarkettPage/>} />

        <Route path="/buyshare/:pair" element={<BuyerDetails />} />
        {/* <Route path="/market" element={<MarketPage />} /> */}
        {/* <Route path="/seller" element={<SellerPage/>}/> */}
        <Route path="/news" element={<NewsFeed />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/prediction/:currencyPair" element={<PredictionPage />} />
        <Route path="/buy/:pair" element={<BuyPage/>} />
        {/* <Route path="/sell/:pair" element={<SellPage/>} /> */}
        <Route path="/sell/:pair" element={<SellPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
