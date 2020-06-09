import React from 'react';
import './ImageAreaComponent.css';

function ImageArea({image}){
    const path = image?image.preview:null;
    const getImg = () => {
        if (path)
            return (
                <img src={path} alt="Placeholder" />
            );
        return (<div/>);
    };
    
    return(
        <div className='divImg col-6' style={{backgroundColor: 'pink'}}>
            {getImg()}
        </div>
    );
}

export default ImageArea;