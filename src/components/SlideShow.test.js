import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import SlideShow from './SlideShow';
import Slide from './Slide';


configure({adapter: new Adapter()});

describe('<SlideShow />', () => {
	it('should render one <Slide>', () => {
		const wrapper = shallow(<SlideShow 
			show={true} 
			images={[{ href: ''}]} />);
		expect(wrapper.find(Slide)).toHaveLength(1);
	});
});