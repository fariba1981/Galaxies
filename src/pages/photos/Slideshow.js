import React from "react";
import Slider from "react-slick";
import "./Slideshow.css";

const Slideshow = ({images})=> {
    const settings = { 
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1
     };
    return (
        <div className="container">
          <Slider {...settings}>
            {images.map((singleImage)=>(
              <div>
                <img src={singleImage.image} />
              </div>
            ))}
          </Slider>
        </div>
      );
}

export default Slideshow;

