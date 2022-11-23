import React from "react";
import Header from '../src/Layout/Header/Header'
import Footer from '../src/Layout/Footer/Footer'
import './Scss/Style.scss'
import Vintage from "../src/Components/Vintage/Vintage";
import Deha from "./Components/Deha/Deha";
import DehaAbout from "./Components/DehaAbout/DehaAbout";
import BrandGeorgy from "./Components/BrandGeorgy/BrandGeorgy";
import BrandGeorgyLucy from "./Components/BrandGeorgyLucy/BrandGeorgyLucy";
import Brand from "./Components/Brand/Brand";
import Birkenstock from "./Components/Birkenstock/Birkenstock";

function App() {
  return (
    <>
      <Header/>
        <main>
          <Vintage/>
          <Deha/>
          <DehaAbout/>
          <BrandGeorgy/>
          <BrandGeorgyLucy/>
          <Brand/>
          <Birkenstock/>
        </main>
      <Footer/>
    </>
  );
}

export default App;
