import React from "react";
import { useParams } from "react-router-dom";
import PHOTOS from '../../PHOTOS.json'
import Image from "../../components/Image";

const SinglePhoto =()=>{
    const { id } = useParams();
    const photo = PHOTOS.find(item => item.id === id)
    return(
        <div>
            <h3>
                {photo.name}
            </h3>
            <Image src={photo.image} />
        </div>
    )
}
export default SinglePhoto;