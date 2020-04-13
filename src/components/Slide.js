import React from 'react';

function Slide(props) {
    return (<li>
    	<div>
    		<img src={props.href} alt={props.href}
    		style={{ opacity: props.index ? '1' : '0',}} />
    	</div>
    </li>);
}

export default Slide;