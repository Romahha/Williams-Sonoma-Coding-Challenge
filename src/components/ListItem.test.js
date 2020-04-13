import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import ListItem from './ListItem';
import Image from './Image';
import SlideShow from './SlideShow';

configure({adapter: new Adapter()});

describe('<ListItem />', () => {
	const wrapper = shallow(<ListItem />);

	it('should render one <Image>', () => {
		expect(wrapper.find(Image)).toHaveLength(1);
	});

	it('should render one <SlideShow>', () => {
		expect(wrapper.find(SlideShow)).toHaveLength(1);
	});
});