/*
 * @flow
 */

import { PersistentSearchApi } from 'lattice';
import { v4 as uuid } from 'uuid';

import {
  CREATE_PERSISTENT_SEARCH,
  EXPIRE_PERSISTENT_SEARCH,
  GET_PERSISTENT_SEARCHES,
  UPDATE_PERSISTENT_SEARCH_EXPIRATION,
  createPersistentSearch,
  expirePersistentSearch,
  getPersistentSearches,
  updatePersistentSearchExpiration,
} from './PersistentSearchApiActions';
import {
  createPersistentSearchWatcher,
  createPersistentSearchWorker,
  expirePersistentSearchWatcher,
  expirePersistentSearchWorker,
  getPersistentSearchesWatcher,
  getPersistentSearchesWorker,
  updatePersistentSearchExpirationWatcher,
  updatePersistentSearchExpirationWorker,
} from './PersistentSearchApiSagas';

import {
  testShouldBeGeneratorFunction,
  testShouldFailOnInvalidAction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase,
} from '../utils/testing/TestUtils';

describe('PersistentSearchApiSagas', () => {

  /*
   *
   * PersistentSearchApi.createPersistentSearch
   * PersistentSearchApiActions.createPersistentSearch
   *
   */

  describe('createPersistentSearchWatcher', () => {
    testShouldBeGeneratorFunction(createPersistentSearchWatcher);
    testWatcherSagaShouldTakeEvery(
      createPersistentSearchWatcher,
      createPersistentSearchWorker,
      CREATE_PERSISTENT_SEARCH,
    );
  });

  describe('createPersistentSearchWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(createPersistentSearchWorker);
    testShouldFailOnInvalidAction(createPersistentSearchWorker, CREATE_PERSISTENT_SEARCH);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PersistentSearchApi.createPersistentSearch,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createPersistentSearch,
      workerSagaAction: createPersistentSearch(mockActionValue),
      workerSagaToTest: createPersistentSearchWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PersistentSearchApi.createPersistentSearch,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createPersistentSearch,
      workerSagaAction: createPersistentSearch(mockActionValue),
      workerSagaToTest: createPersistentSearchWorker,
    });
  });

  /*
   *
   * PersistentSearchApi.expirePersistentSearch
   * PersistentSearchApiActions.expirePersistentSearch
   *
   */

  describe('expirePersistentSearchWatcher', () => {
    testShouldBeGeneratorFunction(expirePersistentSearchWatcher);
    testWatcherSagaShouldTakeEvery(
      expirePersistentSearchWatcher,
      expirePersistentSearchWorker,
      EXPIRE_PERSISTENT_SEARCH,
    );
  });

  describe('expirePersistentSearchWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(expirePersistentSearchWorker);
    testShouldFailOnInvalidAction(expirePersistentSearchWorker, EXPIRE_PERSISTENT_SEARCH);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PersistentSearchApi.expirePersistentSearch,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: expirePersistentSearch,
      workerSagaAction: expirePersistentSearch(mockActionValue),
      workerSagaToTest: expirePersistentSearchWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PersistentSearchApi.expirePersistentSearch,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: expirePersistentSearch,
      workerSagaAction: expirePersistentSearch(mockActionValue),
      workerSagaToTest: expirePersistentSearchWorker,
    });
  });

  /*
   *
   * PersistentSearchApi.getPersistentSearches
   * PersistentSearchApiActions.getPersistentSearches
   *
   */

  describe('getPersistentSearchesWatcher', () => {
    testShouldBeGeneratorFunction(getPersistentSearchesWatcher);
    testWatcherSagaShouldTakeEvery(
      getPersistentSearchesWatcher,
      getPersistentSearchesWorker,
      GET_PERSISTENT_SEARCHES,
    );
  });

  describe('getPersistentSearchesWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getPersistentSearchesWorker);
    testShouldFailOnInvalidAction(getPersistentSearchesWorker, GET_PERSISTENT_SEARCHES);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PersistentSearchApi.getPersistentSearches,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getPersistentSearches,
      workerSagaAction: getPersistentSearches(mockActionValue),
      workerSagaToTest: getPersistentSearchesWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PersistentSearchApi.getPersistentSearches,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getPersistentSearches,
      workerSagaAction: getPersistentSearches(mockActionValue),
      workerSagaToTest: getPersistentSearchesWorker,
    });
  });

  /*
   *
   * PersistentSearchApi.updatePersistentSearchExpiration
   * PersistentSearchApiActions.updatePersistentSearchExpiration
   *
   */

  describe('updatePersistentSearchExpirationWatcher', () => {
    testShouldBeGeneratorFunction(updatePersistentSearchExpirationWatcher);
    testWatcherSagaShouldTakeEvery(
      updatePersistentSearchExpirationWatcher,
      updatePersistentSearchExpirationWorker,
      UPDATE_PERSISTENT_SEARCH_EXPIRATION,
    );
  });

  describe('updatePersistentSearchExpirationWorker', () => {
    const persistentSearchId = uuid();
    const expiration = new Date().toISOString();

    const mockActionValue = {
      persistentSearchId,
      expiration,
    };

    testShouldBeGeneratorFunction(updatePersistentSearchExpirationWorker);
    testShouldFailOnInvalidAction(updatePersistentSearchExpirationWorker, UPDATE_PERSISTENT_SEARCH_EXPIRATION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PersistentSearchApi.updatePersistentSearchExpiration,
      latticeApiParams: [persistentSearchId, expiration],
      latticeApiReqSeq: updatePersistentSearchExpiration,
      workerSagaAction: updatePersistentSearchExpiration(mockActionValue),
      workerSagaToTest: updatePersistentSearchExpirationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PersistentSearchApi.updatePersistentSearchExpiration,
      latticeApiParams: [persistentSearchId, expiration],
      latticeApiReqSeq: updatePersistentSearchExpiration,
      workerSagaAction: updatePersistentSearchExpiration(mockActionValue),
      workerSagaToTest: updatePersistentSearchExpirationWorker,
    });
  });

});
