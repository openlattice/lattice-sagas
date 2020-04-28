/*
 * @flow
 */

import { AuthorizationsApi } from 'lattice';
import { v4 as uuid } from 'uuid';

import {
  GET_AUTHORIZATIONS,
  getAuthorizations,
} from './AuthorizationsApiActions';
import {
  getAuthorizationsWatcher,
  getAuthorizationsWorker,
} from './AuthorizationsApiSagas';

import {
  testShouldBeGeneratorFunction,
  testShouldFailOnInvalidAction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase,
} from '../utils/testing/TestUtils';

describe('AuthorizationsApiSagas', () => {

  /*
   *
   * AuthorizationsApi.getAuthorizations
   * AuthorizationsApiActions.getAuthorizations
   *
   */

  describe('getAuthorizationsWatcher', () => {
    testShouldBeGeneratorFunction(getAuthorizationsWatcher);
    testWatcherSagaShouldTakeEvery(
      getAuthorizationsWatcher,
      getAuthorizationsWorker,
      GET_AUTHORIZATIONS,
    );
  });

  describe('getAuthorizationsWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getAuthorizationsWorker);
    testShouldFailOnInvalidAction(getAuthorizationsWorker, GET_AUTHORIZATIONS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: AuthorizationsApi.getAuthorizations,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAuthorizations,
      workerSagaAction: getAuthorizations(mockActionValue),
      workerSagaToTest: getAuthorizationsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: AuthorizationsApi.getAuthorizations,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAuthorizations,
      workerSagaAction: getAuthorizations(mockActionValue),
      workerSagaToTest: getAuthorizationsWorker,
    });
  });

});
