/*
 * @flow
 */

import { call, put, takeEvery } from 'redux-saga/effects';

const GENERATOR_TAG :string = '[object Generator]';
const GENERATOR_FUNCTION_TAG :string = '[object GeneratorFunction]';

export function testShouldBeRequestSequenceFunction(functionToTest :any, baseType :string) :void {

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

export function testShouldBeGeneratorFunction(functionToTest :any) :void {

  test('should be a generator function', () => {
    expect(Object.prototype.toString.call(functionToTest)).toEqual(GENERATOR_FUNCTION_TAG);
  });
}

export function testWatcherSagaShouldTakeEvery(
  watcherSagaToTest :Function,
  expectedWorkerSaga :Function,
  expectedAction :string
) :void {

  test('should invoke takeEvery()', () => {
    const iterator :Generator<*, *, *> = watcherSagaToTest();
    expect(Object.prototype.toString.call(iterator)).toEqual(GENERATOR_TAG);
    expect(iterator.next().value).toEqual(takeEvery(expectedAction, expectedWorkerSaga));
    expect(iterator.next().done).toEqual(true);
  });
}

// TODO: this abstraction might not be a great idea
export function testWorkerSagaShouldHandleFailureCase(testInvocationParams :Object) :void {

  test('failure case', () => {

    const {
      latticeApi,
      latticeApiParams,
      latticeApiReqSeq,
      workerSagaAction,
      workerSagaToTest
    } = testInvocationParams;

    const mockError = new Error(500);
    const mockSagaResponse = {
      error: mockError
    };

    let iterator = workerSagaToTest();
    expect(Object.prototype.toString.call(iterator)).toEqual(GENERATOR_TAG);

    if (workerSagaAction) {
      iterator = workerSagaToTest(workerSagaAction);
    }

    let step = iterator.next();
    if (workerSagaAction && workerSagaAction.value) {
      expect(step.value).toEqual(put(latticeApiReqSeq.request(workerSagaAction.value)));
    }
    else {
      expect(step.value).toEqual(put(latticeApiReqSeq.request()));
    }

    if (latticeApiParams && latticeApiParams.length > 0) {
      step = iterator.next();
      expect(step.value).toEqual(call(latticeApi, ...latticeApiParams));
    }
    else {
      step = iterator.next();
      expect(step.value).toEqual(call(latticeApi));
    }

    step = iterator.throw(mockError);
    expect(step.value).toEqual(put(latticeApiReqSeq.failure(mockError)));

    step = iterator.next();
    expect(step.value).toEqual(put(latticeApiReqSeq.finally()));

    step = iterator.next();
    expect(step.done).toEqual(true);
    expect(step.value).toEqual(mockSagaResponse);
  });
}

// TODO: this abstraction might not be a great idea
export function testWorkerSagaShouldHandleSuccessCase(testInvocationParams :Object) :void {

  test('success case', () => {

    const {
      latticeApi,
      latticeApiParams,
      latticeApiReqSeq,
      workerSagaAction,
      workerSagaToTest
    } = testInvocationParams;

    const mockApiResponse = 'uuid';
    const mockSagaResponse = {
      data: mockApiResponse
    };

    let iterator = workerSagaToTest();
    if (workerSagaAction) {
      iterator = workerSagaToTest(workerSagaAction);
    }

    let step = iterator.next();
    if (workerSagaAction && workerSagaAction.value) {
      expect(step.value).toEqual(put(latticeApiReqSeq.request(workerSagaAction.value)));
    }
    else {
      expect(step.value).toEqual(put(latticeApiReqSeq.request()));
    }


    if (latticeApiParams && latticeApiParams.length > 0) {
      step = iterator.next();
      expect(step.value).toEqual(call(latticeApi, ...latticeApiParams));
    }
    else {
      step = iterator.next();
      expect(step.value).toEqual(call(latticeApi));
    }

    step = iterator.next(mockApiResponse);
    expect(step.value).toEqual(put(latticeApiReqSeq.success(mockApiResponse)));

    step = iterator.next();
    expect(step.value).toEqual(put(latticeApiReqSeq.finally()));

    step = iterator.next();
    expect(step.done).toEqual(true);
    expect(step.value).toEqual(mockSagaResponse);
  });
}
