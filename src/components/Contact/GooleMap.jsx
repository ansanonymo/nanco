import React from "react";

export default function GoogleMap() {
  const location = {
    lat: 23.450001,
    long: 91.199997,
  };
  return (
    <div className="container">
      {" "}
      <iframe
        src={
          "https://maps.google.com/maps?q=" +
          location.lat +
          "," +
          location.long +
          "&t=&z=15&ie=UTF8&iwloc=&output=embed"
        }
        id="map"
        className="w-full min-h-96"
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

// https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7312.191393045844!2d90.9519902623539!3d23.600900676867088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37546f30605b9363%3A0xd833fe28800320a3!2z4Kam4KeH4Kas4Ka_4Kam4KeN4Kas4Ka-4Kaw!5e0!3m2!1sbn!2sbd!4v1665216607633!5m2!1sbn!2sbd
