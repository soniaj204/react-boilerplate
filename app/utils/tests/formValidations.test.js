/**
 * Test injectors
 */

import * as formValidations from 'utils/formValidations';
import { VALIDATION } from '../constants';
describe('formValidations', () => {
  it('should validate the value required', () => {
    expect(formValidations.required('')).toEqual(VALIDATION.REQUIRED);
  });
  it('should validate the value required', () => {
    expect(formValidations.required('asdfa')).toEqual('');
  });
  it('should validate Email', () => {
    expect(formValidations.email('ankit.g')).toEqual(VALIDATION.EMAIL);
  });
  it('should validate Email pass', () => {
    expect(formValidations.email('ankit.g@innovify.in')).toEqual('');
  });
  /* it('should validate minLength', () => {
   const min = 10;
   expect(formValidations.minLength(min, 'ankit.g')).toEqual(`Must be at least ${min} characters`);
 });
 it('should validate minLength pass', () => {
   const min = 10;
   expect(formValidations.minLength(min, 'ankit.g@innovify.in')).toEqual('');
 });
it('should validate maxLength', () => {
   const max = 10;
   expect(formValidations.maxLength('ankitgujarati', max)).toEqual(`Must be no more than ${max} characters`);
 });
 it('should validate maxLength pass', () => {
   const max = 10;
   expect(formValidations.maxLength('ankiin', max)).toEqual('');
 });
  it('should validate integer', () => {
    const max = 'asd';
    expect(formValidations.integer(max)).toEqual(VALIDATION.INTEGER);
  });
  it('should validate integer pass', () => {
    const max = 10;
    expect(formValidations.integer(max)).toEqual('');
  });
 it('should validate oneOf', () => {
    const oneof = ['ab', 'bc', 'cd'];
    expect(formValidations.oneOf('ad', oneof)).toEqual(`Must be one of: ${oneof.join(', ')}`);
  });
  it('should validate oneOf pass', () => {
    const oneof = ['ab', 'bc', 'cd'];
    expect(formValidations.oneOf('ab', oneof)).toEqual('');
  }); */
  it('should validate password', () => {
    const max = 'asd';
    expect(formValidations.password(max)).toEqual(VALIDATION.PASSWORD);
  });
  it('should validate password pass', () => {
    const max = 'Ankit@123';
    expect(formValidations.password(max)).toEqual('');
  });
});
