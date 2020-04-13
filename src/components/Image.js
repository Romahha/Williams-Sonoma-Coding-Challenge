import React from 'react';

const Image = (props) => {
    return <img 
    src={props.hero.href} 
    alt={props.hero.alt}
    onClick = {() => { props.clicked(); props.showSlideShow() }} />;
}

export default Image;