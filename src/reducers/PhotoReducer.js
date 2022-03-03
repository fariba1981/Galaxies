import React from "react";

const PhotoReducer = (state, action)=>{

    switch(action.type){
        case "ADD_TO_CART" :
            return{
                ...state,
                added : true,
            }
            break;
        case "REMOVE_FROM_CART" :
            return{
                ...state,
                added : false,
            }
            break;
    }
}

export default PhotoReducer;