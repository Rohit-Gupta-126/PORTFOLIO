import Image from "next/image";
import React from "react";

export default function Ring() {
  return (
    <div className="container-loader">
      <div className="round"></div>
      <div className="round"></div>
      <div className="image-container">
        <Image
          src="/Assets/Images/me.jpg"
          width={1000}
          height={1000}
          alt="Image"
          loading="lazy"
        />
      </div>
    </div>
  );
}
