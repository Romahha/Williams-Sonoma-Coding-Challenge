import React from 'react';
import './../style/NumberList.css';
import ListItem from './ListItem.js';

const NumberList = (props) => {
    const listItems = props.groups.map((group) =>{
  	if(group.priceRange !== undefined) {
  		return (<ListItem 
	    	key={group.id} 
	    	name={group.name} 
	    	priceRangeRegularLow={group.priceRange.regular.low}
	    	priceRangeRegularHigh={group.priceRange.regular.high}
	    	priceRangeSelling={group.priceRange.selling.low}
	    	hero={group.hero} 
	    	clicked={props.clicked}
	    	show={props.show}
	    	images = {group.images} />
	    )
  	} else {
  		  return (<ListItem 
	    	key={group.id} 
	    	name={group.name} 
	    	priceRangeRegularLow={group.price.selling}
	    	priceRangeRegularHigh={group.price.regular}
	    	priceRangeSelling={group.price.selling}
	    	hero={group.hero} 
	    	clicked={props.clicked} 
	    	show={props.show}
	    	images ={group.images} />
	    )
  	}
  });
  return (
    <ul>
        {listItems}
    </ul>
  );
}

export default NumberList;