import React, { Component } from 'react';
import Slide from './Slide.js';

class SlideShow extends Component  {
	constructor (props) {
		super(props);
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = this.props.images.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = this.props.images.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	};
    render () {
	const slides = this.props.images.map((slide, index) => {
		return (<Slide 
			href={slide.href}  
			key={index} 
			index={(this.state.currentImageIndex === index) ? true : false} />
		)
	});
 
    return (<div className={"slideshow-container " + 
    	(this.props.show && this.props.showFromOverlay ? 'show' : 'hide')} >
    	<span className='prev' onClick={this.previousSlide}>{"<"}</span>
	    <ul>
	        {slides}
	    </ul>
	    <span className='next' onClick={this.nextSlide}>{">"}</span>
    </div>
  )};
}

export default SlideShow;
