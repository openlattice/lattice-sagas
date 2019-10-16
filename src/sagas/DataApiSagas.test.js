/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { DataApi } from 'lattice';

import {
  CREATE_ASSOCIATIONS,
  CREATE_ENTITY_AND_ASSOCIATION_DATA,
  CREATE_OR_MERGE_ENTITY_DATA,
  DELETE_ENTITIES_AND_NEIGHBORS,
  DELETE_ENTITY,
  DELETE_ENTITY_DATA,
  DELETE_ENTITY_SET,
  GET_ENTITY_DATA,
  GET_ENTITY_SET_DATA,
  GET_ENTITY_SET_SIZE,
  UPDATE_ENTITY_DATA,
  createAssociations,
  createEntityAndAssociationData,
  createOrMergeEntityData,
  deleteEntitiesAndNeighbors,
  deleteEntity,
  deleteEntityData,
  deleteEntitySet,
  getEntityData,
  getEntitySetData,
  getEntitySetSize,
  updateEntityData,
} from './DataApiActions';

import {
  createAssociationsWatcher,
  createAssociationsWorker,
  createEntityAndAssociationDataWatcher,
  createEntityAndAssociationDataWorker,
  createOrMergeEntityDataWatcher,
  createOrMergeEntityDataWorker,
  deleteEntitiesAndNeighborsWatcher,
  deleteEntitiesAndNeighborsWorker,
  deleteEntityDataWatcher,
  deleteEntityDataWorker,
  deleteEntitySetWatcher,
  deleteEntitySetWorker,
  deleteEntityWatcher,
  deleteEntityWorker,
  getEntityDataWatcher,
  getEntityDataWorker,
  getEntitySetDataWatcher,
  getEntitySetDataWorker,
  getEntitySetSizeWatcher,
  getEntitySetSizeWorker,
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
   * DataApi.createAssociations
   * DataApiActions.createAssociations
   *
   */

  describe('createAssociationsWatcher', () => {
    testShouldBeGeneratorFunction(createAssociationsWatcher);
    testWatcherSagaShouldTakeEvery(
      createAssociationsWatcher,
      createAssociationsWorker,
      CREATE_ASSOCIATIONS
    );
  });

  describe('createAssociationsWorker', () => {

    const mockActionValue = {
      [randomUUID()]: [{
        data: {
          [randomUUID()]: ['openlattice']
        },
        dst: {
          entitySetId: randomUUID(),
          entityKeyId: randomUUID()
        },
        src: {
          entitySetId: randomUUID(),
          entityKeyId: randomUUID()
        }
      }]
    };

    testShouldBeGeneratorFunction(createAssociationsWorker);
    testShouldFailOnInvalidAction(createAssociationsWorker, CREATE_ASSOCIATIONS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.createAssociations,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createAssociations,
      workerSagaAction: createAssociations(mockActionValue),
      workerSagaToTest: createAssociationsWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.createAssociations,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createAssociations,
      workerSagaAction: createAssociations(mockActionValue),
      workerSagaToTest: createAssociationsWorker
    });

  });

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
   * DataApi.deleteEntitiesAndNeighbors
   * DataApiActions.deleteEntitiesAndNeighbors
   *
   */

  describe('deleteEntitiesAndNeighborsWatcher', () => {
    testShouldBeGeneratorFunction(deleteEntitiesAndNeighborsWatcher);
    testWatcherSagaShouldTakeEvery(
      deleteEntitiesAndNeighborsWatcher,
      deleteEntitiesAndNeighborsWorker,
      DELETE_ENTITIES_AND_NEIGHBORS,
    );
  });

  describe('deleteEntitiesAndNeighborsWorker', () => {

    const mockActionValue = {
      deleteType: 'Hard',
      entitySetId: randomUUID(),
      filter: {
        entityKeyIds: [randomUUID()],
      },
    };

    testShouldBeGeneratorFunction(deleteEntitiesAndNeighborsWorker);
    testShouldFailOnInvalidAction(deleteEntitiesAndNeighborsWorker, DELETE_ENTITIES_AND_NEIGHBORS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.deleteEntitiesAndNeighbors,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.filter, mockActionValue.deleteType],
      latticeApiReqSeq: deleteEntitiesAndNeighbors,
      workerSagaAction: deleteEntitiesAndNeighbors(mockActionValue),
      workerSagaToTest: deleteEntitiesAndNeighborsWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.deleteEntitiesAndNeighbors,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.filter, mockActionValue.deleteType],
      latticeApiReqSeq: deleteEntitiesAndNeighbors,
      workerSagaAction: deleteEntitiesAndNeighbors(mockActionValue),
      workerSagaToTest: deleteEntitiesAndNeighborsWorker
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
   * DataApi.deleteEntityData
   * DataApiActions.deleteEntityData
   *
   */

  describe('deleteEntityDataWatcher', () => {
    testShouldBeGeneratorFunction(deleteEntityDataWatcher);
    testWatcherSagaShouldTakeEvery(
      deleteEntityDataWatcher,
      deleteEntityDataWorker,
      DELETE_ENTITY_DATA,
    );
  });

  describe('deleteEntityDataWorker', () => {

    const mockActionValue = {
      deleteType: randomUUID(),
      entityKeyIds: randomUUID(),
      entitySetId: randomUUID(),
    };

    testShouldBeGeneratorFunction(deleteEntityDataWorker);
    testShouldFailOnInvalidAction(deleteEntityDataWorker, DELETE_ENTITY_DATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.deleteEntityData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityKeyIds, mockActionValue.deleteType],
      latticeApiReqSeq: deleteEntityData,
      workerSagaAction: deleteEntityData(mockActionValue),
      workerSagaToTest: deleteEntityDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.deleteEntityData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityKeyIds, mockActionValue.deleteType],
      latticeApiReqSeq: deleteEntityData,
      workerSagaAction: deleteEntityData(mockActionValue),
      workerSagaToTest: deleteEntityDataWorker
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
   * DataApi.getEntitySetData
   * DataApiActions.getEntitySetData
   *
   */

  describe('getEntitySetSizeWatcher', () => {
    testShouldBeGeneratorFunction(getEntitySetSizeWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntitySetSizeWatcher,
      getEntitySetSizeWorker,
      GET_ENTITY_SET_SIZE
    );
  });

  describe('getEntitySetSizeWorker', () => {

    const mockActionValue = {
      entitySetId: randomUUID()
    };

    testShouldBeGeneratorFunction(getEntitySetSizeWorker);
    testShouldFailOnInvalidAction(getEntitySetSizeWorker, GET_ENTITY_SET_SIZE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.getEntitySetSize,
      latticeApiParams: [mockActionValue.entitySetId],
      latticeApiReqSeq: getEntitySetSize,
      workerSagaAction: getEntitySetSize(mockActionValue),
      workerSagaToTest: getEntitySetSizeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.getEntitySetSize,
      latticeApiParams: [mockActionValue.entitySetId],
      latticeApiReqSeq: getEntitySetSize,
      workerSagaAction: getEntitySetSize(mockActionValue),
      workerSagaToTest: getEntitySetSizeWorker
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
