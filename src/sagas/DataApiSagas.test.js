/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { DataApi } from 'lattice';

import {
  CLEAR_ENTITY_FROM_ENTITY_SET,
  GET_ENTITY_DATA,
  GET_ENTITY_SET_DATA,
  UPDATE_ENTITY_DATA,
  clearEntityFromEntitySet,
  getEntityData,
  getEntitySetData,
  updateEntityData,
} from './DataApiActions';

import {
  clearEntityFromEntitySetWatcher,
  clearEntityFromEntitySetWorker,
  getEntityDataWatcher,
  getEntityDataWorker,
  getEntitySetDataWatcher,
  getEntitySetDataWorker,
  updateEntityDataWatcher,
  updateEntityDataWorker,
} from './DataApiSagas';

import {
  testShouldBeGeneratorFunction,
  testShouldFailOnInvalidAction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase,
} from '../utils/testing/TestUtils';

describe('DataApiSagas', () => {

  /*
   *
   * DataApi.clearEntityFromEntitySet
   * DataApiActions.clearEntityFromEntitySet
   *
   */

  describe('clearEntityFromEntitySetWatcher', () => {
    testShouldBeGeneratorFunction(clearEntityFromEntitySetWatcher);
    testWatcherSagaShouldTakeEvery(
      clearEntityFromEntitySetWatcher,
      clearEntityFromEntitySetWorker,
      CLEAR_ENTITY_FROM_ENTITY_SET
    );
  });

  describe('clearEntityFromEntitySetWorker', () => {

    const mockActionValue = {
      entitySetId: randomUUID(),
      entityKeyId: randomUUID(),
    };

    testShouldBeGeneratorFunction(clearEntityFromEntitySetWorker);
    testShouldFailOnInvalidAction(clearEntityFromEntitySetWorker, CLEAR_ENTITY_FROM_ENTITY_SET);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.clearEntityFromEntitySet,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityKeyId],
      latticeApiReqSeq: clearEntityFromEntitySet,
      workerSagaAction: clearEntityFromEntitySet(mockActionValue),
      workerSagaToTest: clearEntityFromEntitySetWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.clearEntityFromEntitySet,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityKeyId],
      latticeApiReqSeq: clearEntityFromEntitySet,
      workerSagaAction: clearEntityFromEntitySet(mockActionValue),
      workerSagaToTest: clearEntityFromEntitySetWorker
    });

  });

  /*
   *
   * DataApi.getEntityData
   * DataApiActions.getEntityData
   *
   */

  describe('getEntityDataWatcher', () => {
    testShouldBeGeneratorFunction(getEntityDataWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntityDataWatcher,
      getEntityDataWorker,
      GET_ENTITY_DATA
    );
  });

  describe('getEntityDataWorker', () => {

    const mockActionValue = {
      entitySetId: randomUUID(),
      entityKeyId: randomUUID(),
    };

    testShouldBeGeneratorFunction(getEntityDataWorker);
    testShouldFailOnInvalidAction(getEntityDataWorker, GET_ENTITY_DATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.getEntityData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityKeyId],
      latticeApiReqSeq: getEntityData,
      workerSagaAction: getEntityData(mockActionValue),
      workerSagaToTest: getEntityDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.getEntityData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityKeyId],
      latticeApiReqSeq: getEntityData,
      workerSagaAction: getEntityData(mockActionValue),
      workerSagaToTest: getEntityDataWorker
    });

  });

  /*
   *
   * DataApi.getEntitySetData
   * DataApiActions.getEntitySetData
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
    testShouldFailOnInvalidAction(getEntitySetDataWorker, GET_ENTITY_SET_DATA);

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

  /*
   *
   * DataApi.updateEntityData
   * DataApiActions.updateEntityData
   *
   */

  describe('updateEntityDataWatcher', () => {
    testShouldBeGeneratorFunction(updateEntityDataWatcher);
    testWatcherSagaShouldTakeEvery(
      updateEntityDataWatcher,
      updateEntityDataWorker,
      UPDATE_ENTITY_DATA
    );
  });

  describe('updateEntityDataWorker', () => {

    const mockActionValue = {
      entitySetId: randomUUID(),
      entities: randomUUID(),
      updateType: randomUUID(),
    };

    testShouldBeGeneratorFunction(updateEntityDataWorker);
    testShouldFailOnInvalidAction(updateEntityDataWorker, UPDATE_ENTITY_DATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.updateEntityData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entities, mockActionValue.updateType],
      latticeApiReqSeq: updateEntityData,
      workerSagaAction: updateEntityData(mockActionValue),
      workerSagaToTest: updateEntityDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.updateEntityData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entities, mockActionValue.updateType],
      latticeApiReqSeq: updateEntityData,
      workerSagaAction: updateEntityData(mockActionValue),
      workerSagaToTest: updateEntityDataWorker
    });

  });

});
