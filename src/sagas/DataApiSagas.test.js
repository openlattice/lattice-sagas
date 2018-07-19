/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { DataApi } from 'lattice';

import {
  GET_ENTITY_SET_DATA,
  getEntitySetData
} from './DataApiActionFactory';

import {
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
   * DataApi.getEntitySetData
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
      propertyTypeIds: [randomUUID()],
      entityKeyIds: [randomUUID()],
    };

    testShouldBeGeneratorFunction(getEntitySetDataWorker);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.getEntitySetData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.propertyTypeIds, mockActionValue.entityKeyIds],
      latticeApiReqSeq: getEntitySetData,
      workerSagaAction: getEntitySetData(mockActionValue),
      workerSagaToTest: getEntitySetDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.getEntitySetData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.propertyTypeIds, mockActionValue.entityKeyIds],
      latticeApiReqSeq: getEntitySetData,
      workerSagaAction: getEntitySetData(mockActionValue),
      workerSagaToTest: getEntitySetDataWorker
    });

  });

});
