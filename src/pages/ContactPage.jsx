import React from "react";
import Details from "../components/Contact/Details";
import GoogleMap from "../components/Contact/GooleMap";
import HomeContact from "../components/home/HomeContact/HomeContact";

export default function ContactPage() {
  return (
    <>
      {/* <LocationMap /> */}
      <GoogleMap />
      <Details />
      <HomeContact />
    </>
  );
}
