import React from 'react';

const ImageList = (props) => {

    const images = props.images.map((image, i)=> {
        console.log(i);

        return <img key={i} src={ image.urls.regular } alt='' />
    });
    return <div>{ images }</div>

};

export default ImageList;