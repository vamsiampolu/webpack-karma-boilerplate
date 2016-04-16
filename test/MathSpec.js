import {expect} from 'chai';
//expect = chai.expect;

describe('Tests basic math',function(){
  it('can add two integers correctly',function(){
     var expected_result = 5;
     var a = 3,b =2;
     expect(a+b).to.be.equal(expected_result);
  });

  it('can substract two integers',function(){
     var expected_result = 1;
     var a = 3, b = 2;
     expect(a-b).to.be.equal(expected_result); 
  });

  it('can multiply two integers',function(){
     var expected = 6;
     var a = 3, b = 2;
     expect(a*b).to.be.equal(expected);
  });

  it('can divide two integers', function(){
    var expected = 4;
    var a = 8, b = 2;
    expect(a/b).to.be.equal(expected);
  });
});
