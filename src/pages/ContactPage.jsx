import React from "react";
import Details from "../components/Contact/Details";
import GoogleMap from "../components/Contact/Map";
import HomeContact from "../components/home/HomeContact/HomeContact";

export default function ContactPage() {
  return (
    <>
      <GoogleMap />
      <Details />
      <HomeContact />
    </>
  );
}
