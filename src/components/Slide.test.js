import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import Slide from './Slide';
import ReactDOM from 'react-dom';

configure({adapter: new Adapter()});

describe('<Slide />', () => {
	it('should render one <Slide>', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Slide />, div);
	});
});
