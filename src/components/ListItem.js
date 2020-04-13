import React, { useState } from 'react';
import Image from './Image.js';
import './../style/NumberList.css';
import SlideShow from './SlideShow.js';

const listItem = (props) => {
	const [ stateArr, showSlides ] = useState({
		classShow: false
	});

    const showSlideShow = () => {
    	showSlides({
    		classShow: true
    	})
    }

    return (<li>
    	<div>
    		<p>{props.name}</p>
    		<Image 
    			hero={props.hero} 
    			clicked={props.clicked} 
    			showSlideShow={showSlideShow} />
    		<p>Regular price ${props.priceRangeRegularLow} to ${props.priceRangeRegularHigh}</p>
    		<p>Last Chance Selling ${props.priceRangeSelling}</p>
		    <SlideShow 
		    	images={props.images} 
		    	show={stateArr.classShow} />
    	</div>
    </li>);
}

export default listItem;
