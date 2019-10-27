import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../app';
import Form from '../components/form';


Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Form', () => {
  it('renders correctly', () => {
    const form = shallow(<Form />);
    expect(form.find('form')).toBeTruthy();
    expect(form.find('input')).toBeTruthy();
  });
});