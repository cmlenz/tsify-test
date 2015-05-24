/// <reference path="../typings/jasmine/jasmine.d.ts"/>

import Ader from './adder';

describe('test adder', () => {
  it('should add', () => {
    let adder = new Adder(1);
    expect(adder.add(1)).toBe(3);
  });
});
