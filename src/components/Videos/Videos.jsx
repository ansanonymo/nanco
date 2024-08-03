import React from "react";

export default function Videos() {
  return (
    <div className="container">
      <h2 className="text-center text-3xl mb-5">Video</h2>
      <div className="w-96 aspect-video mx-auto">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/4xdb_r_Gdrk?si=lMj6UQkCLFaBeJNR"
          title="YouTube video player"
        ></iframe>
      </div>
    </div>
  );
}
