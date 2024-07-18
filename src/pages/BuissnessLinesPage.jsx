import React from "react";
import BusinessLineSection from "./../components/BuissnessLines/BusinessLineSection/BusinessLineSection";
import Footer from "./../components/common/Footer/Footer";
import Nav from "./../components/common/Nav/Nav";
import TopSection from "./../components/common/TopSection/TopSection";

export default function BuissnessLines() {
  return (
    <>
      <Nav />
      <TopSection />
      <BusinessLineSection />
      <Footer />
    </>
  );
}
