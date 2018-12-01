import Immutable from 'immutable';
import { call, put, takeEvery } from 'redux-saga/effects';

import { GENERATOR_FUNCTION_TAG, GENERATOR_TAG } from '../Constants';
import { ERR_INVALID_ACTION, ERR_ACTION_VALUE_NOT_DEFINED } from '../Errors';
import { INVALID_PARAMS, INVALID_PARAMS_NOT_DEFINED } from './Invalid';

export function testShouldBeRequestSequenceFunction(functionToTest, baseType) {

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

export function testShouldBeGeneratorFunction(functionToTest) {

  test('should be a generator function', () => {
    expect(Object.prototype.toString.call(functionToTest)).toEqual(GENERATOR_FUNCTION_TAG);
  });
}

export function testWatcherSagaShouldTakeEvery(watcherSagaToTest, expectedWorkerSaga, expectedAction) {

  test('should invoke takeEvery()', () => {
    const iterator = watcherSagaToTest();
    expect(Object.prototype.toString.call(iterator)).toEqual(GENERATOR_TAG);
    expect(iterator.next().value).toEqual(takeEvery(expectedAction, expectedWorkerSaga));
    expect(iterator.next().done).toEqual(true);
  });
}

export function testShouldFailOnInvalidAction(workerSagaToTest, baseActionType, isValueRequired = true) {

  INVALID_PARAMS.forEach((invalidParam) => {
    const iterator = workerSagaToTest(invalidParam);
    const step = iterator.next();
    expect(step.value).toEqual({ error: ERR_INVALID_ACTION });
  });

  if (isValueRequired) {
    INVALID_PARAMS_NOT_DEFINED.forEach((invalidParam) => {
      const iterator = workerSagaToTest({ id: 'fakeId', type: baseActionType, value: invalidParam });
      const step = iterator.next();
      expect(step.value).toEqual({ error: ERR_ACTION_VALUE_NOT_DEFINED });
    });
  }
}

// TODO: this abstraction might not be a great idea
export function testWorkerSagaShouldHandleFailureCase(testInvocationParams) {

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

    const iterator = workerSagaToTest(workerSagaAction);
    expect(Object.prototype.toString.call(iterator)).toEqual(GENERATOR_TAG);

    let step = iterator.next();
    if (workerSagaAction.value) {
      expect(step.value).toEqual(
        put({
          id: workerSagaAction.id,
          type: latticeApiReqSeq.REQUEST,
          value: workerSagaAction.value
        })
      );
    }
    else {
      expect(step.value).toEqual(
        put({
          id: workerSagaAction.id,
          type: latticeApiReqSeq.REQUEST
        })
      );
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
    expect(step.value).toEqual(
      put({
        id: workerSagaAction.id,
        type: latticeApiReqSeq.FAILURE,
        value: mockError
      })
    );

    step = iterator.next();
    expect(step.value).toEqual(
      put({
        id: workerSagaAction.id,
        type: latticeApiReqSeq.FINALLY,
        value: {},
      })
    );

    step = iterator.next();
    expect(step.done).toEqual(true);
    expect(step.value).toEqual(mockSagaResponse);
  });
}

// TODO: this abstraction might not be a great idea
export function testWorkerSagaShouldHandleSuccessCase(testInvocationParams) {

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

    const iterator = workerSagaToTest(workerSagaAction);
    expect(Object.prototype.toString.call(iterator)).toEqual(GENERATOR_TAG);

    let step = iterator.next();
    if (workerSagaAction.value) {
      expect(step.value).toEqual(
        put({
          id: workerSagaAction.id,
          type: latticeApiReqSeq.REQUEST,
          value: workerSagaAction.value
        })
      );
    }
    else {
      expect(step.value).toEqual(
        put({
          id: workerSagaAction.id,
          type: latticeApiReqSeq.REQUEST
        })
      );
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
    expect(step.value).toEqual(
      put({
        id: workerSagaAction.id,
        type: latticeApiReqSeq.SUCCESS,
        value: mockApiResponse
      })
    );

    step = iterator.next();
    expect(step.value).toEqual(
      put({
        id: workerSagaAction.id,
        type: latticeApiReqSeq.FINALLY,
        value: {},
      })
    );

    step = iterator.next();
    expect(step.done).toEqual(true);
    expect(step.value).toEqual(mockSagaResponse);
  });
}

export function testShouldExportActionTypes(Actions, expectedActionTypes) {

  describe('should export action types', () => {

    test('should export expected action types, sorted alphabetically', () => {
      const exportedActionTypes = Immutable.OrderedMap(Actions).take(expectedActionTypes.length);
      expect(exportedActionTypes.keySeq().toJS()).toEqual(expectedActionTypes);
      expect(exportedActionTypes.valueSeq().toJS()).toEqual(expectedActionTypes);
    });

    expectedActionTypes.forEach((actionType) => {
      test(`should export "${actionType}"`, () => {
        expect(Actions).toHaveProperty(actionType);
        expect(Actions[actionType]).toEqual(actionType);
      });
    });
  });
}

export function testShouldExportRequestSequences(Actions, expectedActionTypes, expectedReqSeqNames) {

  describe('should export RequestSequences', () => {

    test('should export expected RequestSequences, sorted alphabetically', () => {
      const expectedReqSeqs = Immutable.OrderedMap(Actions).takeLast(expectedReqSeqNames.length);
      expect(expectedReqSeqs.keySeq().toJS()).toEqual(expectedReqSeqNames);
    });

    expectedReqSeqNames.forEach((reqseqName, index) => {
      describe(`${reqseqName}`, () => {
        const expectedActionType = expectedActionTypes[index];
        testShouldBeRequestSequenceFunction(Actions[reqseqName], Actions[expectedActionType]);
      });
    });
  });
}
