import React from "react";
import way_image from '../shared/images/way_image.webp'

export default function Way() {
    const style = {
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'min-width': '100%',
        'min-hieght': '100%',
        'z-index': '-1',
        'color': 'white'
    }


    return (
        <>

        <img src={way_image} alt="background" style={ style }/>
        </>
    )
}

