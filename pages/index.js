import React from "react";
import heroImage from "../src/assets/images/hero-image.png";
import Image from "next/image";

export default function Homepage() {
  return (
    <div>
      <Image src={heroImage} alt="Man flying a kite on the beach" />
    </div>
  );
}
