import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import Overlay from './Overlay';

configure({adapter: new Adapter()});

describe('<Overlay />', () => {
	it('Overlay should be display none', () => {
		const wrapper = shallow(<Overlay />);
		expect(wrapper.find(Overlay)).toHaveLength(0);
	});
});