/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { DataApi } from 'lattice';

import {
  ACQUIRE_SYNC_TICKET,
  GET_ENTITY_SET_DATA,
  acquireSyncTicket,
  getEntitySetData
} from './DataApiActionFactory';

import {
  acquireSyncTicketWatcher,
  acquireSyncTicketWorker,
  getEntitySetDataWatcher,
  getEntitySetDataWorker
} from './DataApiSagas';

import {
  testShouldBeGeneratorFunction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase
} from '../utils/testing/TestUtils';

describe('DataApiSagas', () => {

  /*
   *
   * DataApiActionFactory.acquireSyncTicket
   *
   */

  describe('acquireSyncTicketWatcher', () => {
    testShouldBeGeneratorFunction(acquireSyncTicketWatcher);
    testWatcherSagaShouldTakeEvery(
      acquireSyncTicketWatcher,
      acquireSyncTicketWorker,
      ACQUIRE_SYNC_TICKET
    );
  });

  describe('acquireSyncTicketWorker', () => {

    const mockActionValue = {
      entitySetId: randomUUID(),
      syncId: randomUUID()
    };

    testShouldBeGeneratorFunction(acquireSyncTicketWorker);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.acquireSyncTicket,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.syncId],
      latticeApiReqSeq: acquireSyncTicket,
      workerSagaAction: acquireSyncTicket(mockActionValue),
      workerSagaToTest: acquireSyncTicketWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.acquireSyncTicket,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.syncId],
      latticeApiReqSeq: acquireSyncTicket,
      workerSagaAction: acquireSyncTicket(mockActionValue),
      workerSagaToTest: acquireSyncTicketWorker
    });

  });

  /*
   *
   * DataApiActionFactory.getEntitySetData
   *
   */

  describe('getEntitySetDataWatcher', () => {
    testShouldBeGeneratorFunction(getEntitySetDataWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntitySetDataWatcher,
      getEntitySetDataWorker,
      GET_ENTITY_SET_DATA
    );
  });

  describe('getEntitySetDataWorker', () => {

    const mockActionValue = {
      entitySetId: randomUUID(),
      syncId: randomUUID(),
      propertyTypeIds: [randomUUID()]
    };

    testShouldBeGeneratorFunction(getEntitySetDataWorker);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.getEntitySetData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.syncId, mockActionValue.propertyTypeIds],
      latticeApiReqSeq: getEntitySetData,
      workerSagaAction: getEntitySetData(mockActionValue),
      workerSagaToTest: getEntitySetDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.getEntitySetData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.syncId, mockActionValue.propertyTypeIds],
      latticeApiReqSeq: getEntitySetData,
      workerSagaAction: getEntitySetData(mockActionValue),
      workerSagaToTest: getEntitySetDataWorker
    });

  });

});
