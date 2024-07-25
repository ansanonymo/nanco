import React from "react";
import ServicesContainer from "../components/BusinessLines/ServicesContainer";
import Footer from "./../components/common/Footer/Footer";
import Nav from "./../components/common/Nav/Nav";
import TopSection from "./../components/common/TopSection/TopSection";

export default function BusinessLinesPage() {
  return (
    <>
      <Nav />
      <TopSection />
      <ServicesContainer />
      <Footer />
    </>
  );
}
