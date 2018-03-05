import { renderComponent, expect } from '../test_helper';

import Comment_Box from '../../src/components/comment_box';


// use describe to group similar tests
describe('Comment_Box', () => {
  // let allows a variable to change over time
  // Scope is at highest level here
  let component;

  beforeEach(() => {
    component = renderComponent(Comment_Box);
  });

  // Use it to test a single attribute of a target
  it('has class comment-box', () => {
    // Use expect to make an assertion about a target
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

// Nested tests  
describe('Entering text', () => {
    beforeEach(() => {
        component.find('textarea').simulate('change', 'new comment');
    });

    it('shows text has been entered', () => {
        expect(component.find('textarea')).to.have.value('new comment');
      });
    
      it('clears text after submit', () => {
        component.simulate('submit');  
        expect(component.find('textarea')).to.have.value('');
      });
});
  

});