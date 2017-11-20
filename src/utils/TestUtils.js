/*
 * @flow
 */

const GENERATOR_FUNCTION_TAG :string = '[object GeneratorFunction]';

export function testShouldBeGeneratorFunction(functionToTest :any) {

  test('should be a generator function', () => {
    expect(Object.prototype.toString.call(functionToTest)).toEqual(GENERATOR_FUNCTION_TAG);
  });
}

export function testShouldBeRequestSequenceFunction(functionToTest :any, baseType :string) {

  test('should be a RequestSequence function', () => {

    expect(functionToTest).toBeInstanceOf(Function);
    expect(functionToTest.REQUEST).toEqual(`${baseType}/REQUEST`);
    expect(functionToTest.SUCCESS).toEqual(`${baseType}/SUCCESS`);
    expect(functionToTest.FAILURE).toEqual(`${baseType}/FAILURE`);
    expect(functionToTest.FINALLY).toEqual(`${baseType}/FINALLY`);
    expect(functionToTest.request).toBeInstanceOf(Function);
    expect(functionToTest.success).toBeInstanceOf(Function);
    expect(functionToTest.failure).toBeInstanceOf(Function);
    expect(functionToTest.finally).toBeInstanceOf(Function);
    expect(functionToTest.case).toBeInstanceOf(Function);
    expect(functionToTest.reducer).toBeInstanceOf(Function);
  });
}
