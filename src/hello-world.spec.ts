import { hello }  from './hello-world';
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {

  it('should return hello world', () => {
    const result = hello();
    console.log(result);
    expect(result).to.equal('Hello world!');
  });

  it('should return hello Jane', () => {
    const result = hello('Jane');
    console.log(result);
    expect(result).to.equal('Hello Jane!');
  });

  it('should return hello Jane wilson', () => {
    const result = hello('Jane', 'wilson');
    console.log(result);
    expect(result).to.equal('Hello Jane wilson!');
  });

});