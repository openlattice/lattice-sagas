/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { DataIntegrationApi } from 'lattice';

import {
  CREATE_ENTITY_AND_ASSOCIATION_DATA,
  createEntityAndAssociationData
} from './DataIntegrationApiActionFactory';

import {
  createEntityAndAssociationDataWatcher,
  createEntityAndAssociationDataWorker
} from './DataIntegrationApiSagas';

import {
  testShouldBeGeneratorFunction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase
} from '../utils/testing/TestUtils';

describe('DataIntegrationApiSagas', () => {

  /*
   *
   * DataIntegrationApiActionFactory.createEntityAndAssociationData
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
      latticeApi: DataIntegrationApi.createEntityAndAssociationData,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createEntityAndAssociationData,
      workerSagaAction: createEntityAndAssociationData(mockActionValue),
      workerSagaToTest: createEntityAndAssociationDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataIntegrationApi.createEntityAndAssociationData,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createEntityAndAssociationData,
      workerSagaAction: createEntityAndAssociationData(mockActionValue),
      workerSagaToTest: createEntityAndAssociationDataWorker
    });

  });

});
