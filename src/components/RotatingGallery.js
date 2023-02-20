import React from "react";
import "../assets/css/rotatingGallery.css";
import image1 from "../assets/img/gallery/image1.jpg";
import image2 from "../assets/img/gallery/image2.jpg";
import image3 from "../assets/img/gallery/image3.webp";
import image4 from "../assets/img/gallery/image4.png";
import image5 from "../assets/img/gallery/image5.png";
import image6 from "../assets/img/gallery/image6.jpg";
import image7 from "../assets/img/gallery/image7.jpg";
import image8 from "../assets/img/gallery/image8.jpg";

function RotatingGallery() {
  let allImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  let numImages = allImages.length;
  let theta = (2 * Math.PI) / numImages;
  let currImage = 0;
  setInterval(() => {
    onClickRotate();
  }, 1500);

  let shouldRotate = true;
  let onClickRotate = async () => {
    if (shouldRotate) {
      let figure = await document.querySelector(".RotatingGalleryFigure");
      currImage++;
      figure.style.transform = `rotateY(${currImage * -theta}rad)`;
    }
  };

  return (
    <>
      <div className="carouselgall">
        <figure className="RotatingGalleryFigure">
          {allImages.map((val, index) => {
            return <img key={index} src={val} alt="gallery"></img>;
          })}
        </figure>
      </div>
    </>
  );
}

export default RotatingGallery;
