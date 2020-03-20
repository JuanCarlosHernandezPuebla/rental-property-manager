import React from 'react';
import { shallow } from 'enzyme';
import Create from '../components/Create';
import renderToJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router'

test('Create render test', () => {
  const component = shallow(
    <MemoryRouter initialEntries={[{ pathname: '/create', key: 'testKey' }]} >
      <Create />
    </MemoryRouter>
  );
  expect(renderToJson(component)).toMatchSnapshot();
});