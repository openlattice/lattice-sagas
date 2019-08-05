/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { PrincipalsApi } from 'lattice';

import {
  SEARCH_ALL_USERS,
  searchAllUsers,
} from './PrincipalsApiActions';

import {
  searchAllUsersWatcher,
  searchAllUsersWorker,
} from './PrincipalsApiSagas';

import {
  testShouldBeGeneratorFunction,
  testShouldFailOnInvalidAction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase,
} from '../utils/testing/TestUtils';

describe('PrincipalsApiSagas', () => {
  /*
   *
   * PrincipalsApi.searchAllUsers
   * PrincipalsApiActions.searchAllUsers
   *
   */

  describe('searchAllUsersWatcher', () => {
    testShouldBeGeneratorFunction(searchAllUsersWatcher);
    testWatcherSagaShouldTakeEvery(
      searchAllUsersWatcher,
      searchAllUsersWorker,
      SEARCH_ALL_USERS,
    );
  });

  describe('searchAllUsersWorker', () => {

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(searchAllUsersWorker);
    testShouldFailOnInvalidAction(searchAllUsersWorker, SEARCH_ALL_USERS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PrincipalsApi.searchAllUsers,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: searchAllUsers,
      workerSagaAction: searchAllUsers(mockActionValue),
      workerSagaToTest: searchAllUsersWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PrincipalsApi.searchAllUsers,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: searchAllUsers,
      workerSagaAction: searchAllUsers(mockActionValue),
      workerSagaToTest: searchAllUsersWorker
    });

  });

});
