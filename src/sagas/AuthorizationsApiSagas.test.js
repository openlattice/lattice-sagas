/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { AuthorizationApi } from 'lattice';

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
   * AuthorizationApi.checkAuthorizations
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

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(getAuthorizationsWorker);
    testShouldFailOnInvalidAction(getAuthorizationsWorker, GET_AUTHORIZATIONS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: AuthorizationApi.checkAuthorizations,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAuthorizations,
      workerSagaAction: getAuthorizations(mockActionValue),
      workerSagaToTest: getAuthorizationsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: AuthorizationApi.checkAuthorizations,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAuthorizations,
      workerSagaAction: getAuthorizations(mockActionValue),
      workerSagaToTest: getAuthorizationsWorker,
    });

  });

});
