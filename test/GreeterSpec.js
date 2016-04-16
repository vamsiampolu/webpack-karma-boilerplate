import {expect} from 'chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Greeter from '../Greeter.js';

describe('Greeter React Component',function(){
  it('renders correctly with a name and a place',function() {
    const component = ReactTestUtils.renderIntoDocument(<Greeter name='Vamsi' place='Hotel California'/>);
    /*
        1. check that the element is of type h1
    */
    var span = component.findRenderedDOMComponentWithTag('h1');
    expect(span).to.be.ok;
  });
});
