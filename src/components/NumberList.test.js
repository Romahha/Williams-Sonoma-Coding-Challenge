import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import NumberList from './NumberList';
import ListItem from './ListItem';
import { jsonResponse } from './../fakedata.js';

configure({adapter: new Adapter()});

describe('<NumberList />', () => {
	it('should render one <ListItem>', () => {
		const wrapper = 
		shallow(<NumberList 
			groups={[{id:0, name:"name", 
			'priceRange': {
				regular:{high: 0, low:0}, 
				selling:{high : 0, low:0} }}]} />);
		expect(wrapper.find(ListItem)).toHaveLength(1);
	});
	it('should render one <ListItem>', () => {
		const wrapper = 
		shallow(<NumberList 
			groups={[{id:0,
			'price': {
				regular: 0, 
				selling: 0}}]} />);
		expect(wrapper.find(ListItem)).toHaveLength(1);
	});
});