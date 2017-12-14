/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { DataApi } from 'lattice';

import {
  ACQUIRE_SYNC_TICKET,
  CREATE_ENTITY_AND_ASSOCIATION_DATA,
  acquireSyncTicket,
  createEntityAndAssociationData
} from './DataApiActionFactory';

import {
  acquireSyncTicketWatcher,
  acquireSyncTicketWorker,
  createEntityAndAssociationDataWatcher,
  createEntityAndAssociationDataWorker
} from './DataApiSagas';

import {
  testShouldBeGeneratorFunction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase
} from '../utils/TestUtils';

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
   * DataApiActionFactory.createEntityAndAssociationData
   *
   */

  describe('createEntityAndAssociationDataWatcher', () => {
    testShouldBeGeneratorFunction(createEntityAndAssociationDataWatcher);
    testWatcherSagaShouldTakeEvery(
      createEntityAndAssociationDataWatcher,
      createEntityAndAssociationDataWorker,
      CREATE_ENTITY_AND_ASSOCIATION_DATA
    );
  });

  describe('createEntityAndAssociationDataWorker', () => {

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(createEntityAndAssociationDataWorker);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.createEntityAndAssociationData,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createEntityAndAssociationData,
      workerSagaAction: createEntityAndAssociationData(mockActionValue),
      workerSagaToTest: createEntityAndAssociationDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.createEntityAndAssociationData,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createEntityAndAssociationData,
      workerSagaAction: createEntityAndAssociationData(mockActionValue),
      workerSagaToTest: createEntityAndAssociationDataWorker
    });

  });

});
