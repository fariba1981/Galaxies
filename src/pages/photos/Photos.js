import React from "react";
import Photo from "./photo/Photo";
import Slideshow from "./Slideshow";


const Photos = ({photos}) => {
  
  return (
    <div>
      <Slideshow images={photos} />
      <ul className="photos" >
        {photos.map((photo) => (
         <Photo photo={photo}/>
        ))}
      </ul>
    </div>
  );
};
export default Photos;
