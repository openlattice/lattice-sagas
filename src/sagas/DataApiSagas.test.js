/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { DataApi } from 'lattice';

import {
  CREATE_ENTITY_AND_ASSOCIATION_DATA,
  CREATE_OR_MERGE_ENTITY_DATA,
  DELETE_ENTITY,
  DELETE_ENTITY_SET,
  GET_ENTITY_DATA,
  GET_ENTITY_SET_DATA,
  UPDATE_ENTITY_DATA,
  createEntityAndAssociationData,
  createOrMergeEntityData,
  deleteEntity,
  deleteEntitySet,
  getEntityData,
  getEntitySetData,
  updateEntityData,
} from './DataApiActions';

import {
  createEntityAndAssociationDataWatcher,
  createEntityAndAssociationDataWorker,
  createOrMergeEntityDataWatcher,
  createOrMergeEntityDataWorker,
  deleteEntityWatcher,
  deleteEntityWorker,
  deleteEntitySetWatcher,
  deleteEntitySetWorker,
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
   * DataApi.createEntityAndAssociationData
   * DataApiActions.createEntityAndAssociationData
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
    testShouldFailOnInvalidAction(createEntityAndAssociationDataWorker, CREATE_ENTITY_AND_ASSOCIATION_DATA);

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

  /*
   *
   * DataApi.createOrMergeEntityData
   * DataApiActions.createOrMergeEntityData
   *
   */

  describe('createOrMergeEntityDataWatcher', () => {
    testShouldBeGeneratorFunction(createOrMergeEntityDataWatcher);
    testWatcherSagaShouldTakeEvery(
      createOrMergeEntityDataWatcher,
      createOrMergeEntityDataWorker,
      CREATE_OR_MERGE_ENTITY_DATA
    );
  });

  describe('createOrMergeEntityDataWorker', () => {

    const mockActionValue = {
      entitySetId: randomUUID(),
      entityData: randomUUID(),
    };

    testShouldBeGeneratorFunction(createOrMergeEntityDataWorker);
    testShouldFailOnInvalidAction(createOrMergeEntityDataWorker, CREATE_OR_MERGE_ENTITY_DATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.createOrMergeEntityData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityData],
      latticeApiReqSeq: createOrMergeEntityData,
      workerSagaAction: createOrMergeEntityData(mockActionValue),
      workerSagaToTest: createOrMergeEntityDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.createOrMergeEntityData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityData],
      latticeApiReqSeq: createOrMergeEntityData,
      workerSagaAction: createOrMergeEntityData(mockActionValue),
      workerSagaToTest: createOrMergeEntityDataWorker
    });

  });

  /*
   *
   * DataApi.deleteEntity
   * DataApiActions.deleteEntity
   *
   */

  describe('deleteEntityWatcher', () => {
    testShouldBeGeneratorFunction(deleteEntityWatcher);
    testWatcherSagaShouldTakeEvery(
      deleteEntityWatcher,
      deleteEntityWorker,
      DELETE_ENTITY,
    );
  });

  describe('deleteEntityWorker', () => {

    const mockActionValue = {
      deleteType: randomUUID(),
      entityKeyId: randomUUID(),
      entitySetId: randomUUID(),
    };

    testShouldBeGeneratorFunction(deleteEntityWorker);
    testShouldFailOnInvalidAction(deleteEntityWorker, DELETE_ENTITY);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.deleteEntity,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityKeyId, mockActionValue.deleteType],
      latticeApiReqSeq: deleteEntity,
      workerSagaAction: deleteEntity(mockActionValue),
      workerSagaToTest: deleteEntityWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.deleteEntity,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityKeyId, mockActionValue.deleteType],
      latticeApiReqSeq: deleteEntity,
      workerSagaAction: deleteEntity(mockActionValue),
      workerSagaToTest: deleteEntityWorker
    });

  });

  /*
   *
   * DataApi.deleteEntitySet
   * DataApiActions.deleteEntitySet
   *
   */

  describe('deleteEntitySetWatcher', () => {
    testShouldBeGeneratorFunction(deleteEntitySetWatcher);
    testWatcherSagaShouldTakeEvery(
      deleteEntitySetWatcher,
      deleteEntitySetWorker,
      DELETE_ENTITY_SET,
    );
  });

  describe('deleteEntitySetWorker', () => {

    const mockActionValue = {
      deleteType: randomUUID(),
      entitySetId: randomUUID(),
    };

    testShouldBeGeneratorFunction(deleteEntitySetWorker);
    testShouldFailOnInvalidAction(deleteEntitySetWorker, DELETE_ENTITY_SET);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.deleteEntitySet,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.deleteType],
      latticeApiReqSeq: deleteEntitySet,
      workerSagaAction: deleteEntitySet(mockActionValue),
      workerSagaToTest: deleteEntitySetWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.deleteEntitySet,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.deleteType],
      latticeApiReqSeq: deleteEntitySet,
      workerSagaAction: deleteEntitySet(mockActionValue),
      workerSagaToTest: deleteEntitySetWorker
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
