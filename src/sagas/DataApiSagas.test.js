/*
 * @flow
 */

import { DataApi, Types } from 'lattice';
import { v4 as uuid } from 'uuid';

import {
  CREATE_ASSOCIATIONS,
  CREATE_ENTITY_AND_ASSOCIATION_DATA,
  CREATE_OR_MERGE_ENTITY_DATA,
  DELETE_ENTITY_AND_NEIGHBOR_DATA,
  DELETE_ENTITY_DATA,
  DELETE_ENTITY_SET_DATA,
  GET_BINARY_PROPERTIES,
  GET_ENTITY_DATA,
  GET_ENTITY_SET_DATA,
  GET_ENTITY_SET_SIZE,
  GET_LINKED_ENTITY_SET_BREAKDOWN,
  UPDATE_ENTITY_DATA,
  createAssociations,
  createEntityAndAssociationData,
  createOrMergeEntityData,
  deleteEntityAndNeighborData,
  deleteEntityData,
  deleteEntitySetData,
  getBinaryProperties,
  getEntityData,
  getEntitySetData,
  getEntitySetSize,
  getLinkedEntitySetBreakdown,
  updateEntityData,
} from './DataApiActions';
import {
  createAssociationsWatcher,
  createAssociationsWorker,
  createEntityAndAssociationDataWatcher,
  createEntityAndAssociationDataWorker,
  createOrMergeEntityDataWatcher,
  createOrMergeEntityDataWorker,
  deleteEntityAndNeighborDataWatcher,
  deleteEntityAndNeighborDataWorker,
  deleteEntityDataWatcher,
  deleteEntityDataWorker,
  deleteEntitySetDataWatcher,
  deleteEntitySetDataWorker,
  getBinaryPropertiesWatcher,
  getBinaryPropertiesWorker,
  getEntityDataWatcher,
  getEntityDataWorker,
  getEntitySetDataWatcher,
  getEntitySetDataWorker,
  getEntitySetSizeWatcher,
  getEntitySetSizeWorker,
  getLinkedEntitySetBreakdownWatcher,
  getLinkedEntitySetBreakdownWorker,
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

const { DeleteTypes, UpdateTypes } = Types;

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
      CREATE_ASSOCIATIONS,
    );
  });

  describe('createAssociationsWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(createAssociationsWorker);
    testShouldFailOnInvalidAction(createAssociationsWorker, CREATE_ASSOCIATIONS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.createAssociations,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createAssociations,
      workerSagaAction: createAssociations(mockActionValue),
      workerSagaToTest: createAssociationsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.createAssociations,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createAssociations,
      workerSagaAction: createAssociations(mockActionValue),
      workerSagaToTest: createAssociationsWorker,
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
      CREATE_ENTITY_AND_ASSOCIATION_DATA,
    );
  });

  describe('createEntityAndAssociationDataWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(createEntityAndAssociationDataWorker);
    testShouldFailOnInvalidAction(createEntityAndAssociationDataWorker, CREATE_ENTITY_AND_ASSOCIATION_DATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.createEntityAndAssociationData,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createEntityAndAssociationData,
      workerSagaAction: createEntityAndAssociationData(mockActionValue),
      workerSagaToTest: createEntityAndAssociationDataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.createEntityAndAssociationData,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createEntityAndAssociationData,
      workerSagaAction: createEntityAndAssociationData(mockActionValue),
      workerSagaToTest: createEntityAndAssociationDataWorker,
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
      CREATE_OR_MERGE_ENTITY_DATA,
    );
  });

  describe('createOrMergeEntityDataWorker', () => {

    const mockActionValue = {
      entitySetId: uuid(),
      entityData: uuid(),
    };

    testShouldBeGeneratorFunction(createOrMergeEntityDataWorker);
    testShouldFailOnInvalidAction(createOrMergeEntityDataWorker, CREATE_OR_MERGE_ENTITY_DATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.createOrMergeEntityData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityData],
      latticeApiReqSeq: createOrMergeEntityData,
      workerSagaAction: createOrMergeEntityData(mockActionValue),
      workerSagaToTest: createOrMergeEntityDataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.createOrMergeEntityData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityData],
      latticeApiReqSeq: createOrMergeEntityData,
      workerSagaAction: createOrMergeEntityData(mockActionValue),
      workerSagaToTest: createOrMergeEntityDataWorker,
    });
  });

  /*
   *
   * DataApi.deleteEntityAndNeighborData
   * DataApiActions.deleteEntityAndNeighborData
   *
   */

  describe('deleteEntityAndNeighborDataWatcher', () => {
    testShouldBeGeneratorFunction(deleteEntityAndNeighborDataWatcher);
    testWatcherSagaShouldTakeEvery(
      deleteEntityAndNeighborDataWatcher,
      deleteEntityAndNeighborDataWorker,
      DELETE_ENTITY_AND_NEIGHBOR_DATA,
    );
  });

  describe('deleteEntityAndNeighborDataWorker', () => {

    const mockActionValue = {
      deleteType: DeleteTypes.HARD,
      entitySetId: uuid(),
      filter: { entityKeyIds: [uuid(), uuid(), uuid()] },
    };

    testShouldBeGeneratorFunction(deleteEntityAndNeighborDataWorker);
    testShouldFailOnInvalidAction(deleteEntityAndNeighborDataWorker, DELETE_ENTITY_AND_NEIGHBOR_DATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.deleteEntityAndNeighborData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.filter, mockActionValue.deleteType],
      latticeApiReqSeq: deleteEntityAndNeighborData,
      workerSagaAction: deleteEntityAndNeighborData(mockActionValue),
      workerSagaToTest: deleteEntityAndNeighborDataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.deleteEntityAndNeighborData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.filter, mockActionValue.deleteType],
      latticeApiReqSeq: deleteEntityAndNeighborData,
      workerSagaAction: deleteEntityAndNeighborData(mockActionValue),
      workerSagaToTest: deleteEntityAndNeighborDataWorker,
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
      deleteType: DeleteTypes.HARD,
      entityKeyIds: [uuid(), uuid(), uuid()],
      entitySetId: uuid(),
    };

    testShouldBeGeneratorFunction(deleteEntityDataWorker);
    testShouldFailOnInvalidAction(deleteEntityDataWorker, DELETE_ENTITY_DATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.deleteEntityData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityKeyIds, mockActionValue.deleteType],
      latticeApiReqSeq: deleteEntityData,
      workerSagaAction: deleteEntityData(mockActionValue),
      workerSagaToTest: deleteEntityDataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.deleteEntityData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityKeyIds, mockActionValue.deleteType],
      latticeApiReqSeq: deleteEntityData,
      workerSagaAction: deleteEntityData(mockActionValue),
      workerSagaToTest: deleteEntityDataWorker,
    });
  });

  /*
   *
   * DataApi.deleteEntitySetData
   * DataApiActions.deleteEntitySetData
   *
   */

  describe('deleteEntitySetDataWatcher', () => {
    testShouldBeGeneratorFunction(deleteEntitySetDataWatcher);
    testWatcherSagaShouldTakeEvery(
      deleteEntitySetDataWatcher,
      deleteEntitySetDataWorker,
      DELETE_ENTITY_SET_DATA,
    );
  });

  describe('deleteEntitySetDataWorker', () => {

    const mockActionValue = {
      deleteType: DeleteTypes.HARD,
      entitySetId: uuid(),
    };

    testShouldBeGeneratorFunction(deleteEntitySetDataWorker);
    testShouldFailOnInvalidAction(deleteEntitySetDataWorker, DELETE_ENTITY_SET_DATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.deleteEntitySetData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.deleteType],
      latticeApiReqSeq: deleteEntitySetData,
      workerSagaAction: deleteEntitySetData(mockActionValue),
      workerSagaToTest: deleteEntitySetDataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.deleteEntitySetData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.deleteType],
      latticeApiReqSeq: deleteEntitySetData,
      workerSagaAction: deleteEntitySetData(mockActionValue),
      workerSagaToTest: deleteEntitySetDataWorker,
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
      GET_ENTITY_DATA,
    );
  });

  describe('getEntityDataWorker', () => {

    const mockActionValue = {
      entityKeyId: uuid(),
      entitySetId: uuid(),
    };

    testShouldBeGeneratorFunction(getEntityDataWorker);
    testShouldFailOnInvalidAction(getEntityDataWorker, GET_ENTITY_DATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.getEntityData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityKeyId],
      latticeApiReqSeq: getEntityData,
      workerSagaAction: getEntityData(mockActionValue),
      workerSagaToTest: getEntityDataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.getEntityData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entityKeyId],
      latticeApiReqSeq: getEntityData,
      workerSagaAction: getEntityData(mockActionValue),
      workerSagaToTest: getEntityDataWorker,
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
      GET_ENTITY_SET_DATA,
    );
  });

  describe('getEntitySetDataWorker', () => {

    const mockActionValue = {
      entitySetId: uuid(),
      propertyTypeIds: [uuid(), uuid()],
      entityKeyIds: [uuid(), uuid(), uuid()],
    };

    testShouldBeGeneratorFunction(getEntitySetDataWorker);
    testShouldFailOnInvalidAction(getEntitySetDataWorker, GET_ENTITY_SET_DATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.getEntitySetData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.propertyTypeIds, mockActionValue.entityKeyIds],
      latticeApiReqSeq: getEntitySetData,
      workerSagaAction: getEntitySetData(mockActionValue),
      workerSagaToTest: getEntitySetDataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.getEntitySetData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.propertyTypeIds, mockActionValue.entityKeyIds],
      latticeApiReqSeq: getEntitySetData,
      workerSagaAction: getEntitySetData(mockActionValue),
      workerSagaToTest: getEntitySetDataWorker,
    });
  });

  /*
   *
   * DataApi.getEntitySetSize
   * DataApiActions.getEntitySetSize
   *
   */

  describe('getEntitySetSizeWatcher', () => {
    testShouldBeGeneratorFunction(getEntitySetSizeWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntitySetSizeWatcher,
      getEntitySetSizeWorker,
      GET_ENTITY_SET_SIZE,
    );
  });

  describe('getEntitySetSizeWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getEntitySetSizeWorker);
    testShouldFailOnInvalidAction(getEntitySetSizeWorker, GET_ENTITY_SET_SIZE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.getEntitySetSize,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySetSize,
      workerSagaAction: getEntitySetSize(mockActionValue),
      workerSagaToTest: getEntitySetSizeWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.getEntitySetSize,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySetSize,
      workerSagaAction: getEntitySetSize(mockActionValue),
      workerSagaToTest: getEntitySetSizeWorker,
    });
  });

  /*
   *
   * DataApi.getLinkedEntitySetBreakdown
   * DataApiActions.getLinkedEntitySetBreakdown
   *
   */

  describe('getLinkedEntitySetBreakdownWatcher', () => {
    testShouldBeGeneratorFunction(getLinkedEntitySetBreakdownWatcher);
    testWatcherSagaShouldTakeEvery(
      getLinkedEntitySetBreakdownWatcher,
      getLinkedEntitySetBreakdownWorker,
      GET_LINKED_ENTITY_SET_BREAKDOWN,
    );
  });

  describe('getLinkedEntitySetBreakdownWorker', () => {

    const mockActionValue = {
      entitySetId: uuid(),
      propertyTypeIds: [uuid()],
      entityKeyIds: [uuid(), uuid()],
    };

    testShouldBeGeneratorFunction(getLinkedEntitySetBreakdownWorker);
    testShouldFailOnInvalidAction(getLinkedEntitySetBreakdownWorker, GET_LINKED_ENTITY_SET_BREAKDOWN);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.getLinkedEntitySetBreakdown,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.propertyTypeIds, mockActionValue.entityKeyIds],
      latticeApiReqSeq: getLinkedEntitySetBreakdown,
      workerSagaAction: getLinkedEntitySetBreakdown(mockActionValue),
      workerSagaToTest: getLinkedEntitySetBreakdownWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.getLinkedEntitySetBreakdown,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.propertyTypeIds, mockActionValue.entityKeyIds],
      latticeApiReqSeq: getLinkedEntitySetBreakdown,
      workerSagaAction: getLinkedEntitySetBreakdown(mockActionValue),
      workerSagaToTest: getLinkedEntitySetBreakdownWorker,
    });
  });

  /*
   *
   * DataApi.getBinaryProperties
   * DataApiActions.getBinaryProperties
   *
   */

  describe('getBinaryPropertiesWatcher', () => {
    testShouldBeGeneratorFunction(getBinaryPropertiesWatcher);
    testWatcherSagaShouldTakeEvery(
      getBinaryPropertiesWatcher,
      getBinaryPropertiesWorker,
      GET_BINARY_PROPERTIES,
    );
  });

  describe('getBinaryPropertiesWorker', () => {

    const mockActionValue = {
      value: {
        [uuid()]: {
          [uuid()]: {
            [uuid()]: {
              '1234567890123456789012': 'attachment; filename="test.pdf"'
            }
          }
        }
      }
    };

    testShouldBeGeneratorFunction(getBinaryPropertiesWorker);
    testShouldFailOnInvalidAction(getBinaryPropertiesWorker, GET_BINARY_PROPERTIES);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.getBinaryProperties,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getBinaryProperties,
      workerSagaAction: getBinaryProperties(mockActionValue),
      workerSagaToTest: getBinaryPropertiesWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.getBinaryProperties,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getBinaryProperties,
      workerSagaAction: getBinaryProperties(mockActionValue),
      workerSagaToTest: getBinaryPropertiesWorker,
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
      UPDATE_ENTITY_DATA,
    );
  });

  describe('updateEntityDataWorker', () => {

    const mockActionValue = {
      entities: uuid(),
      entitySetId: uuid(),
      updateType: UpdateTypes.PARTIAL_REPLACE,
    };

    testShouldBeGeneratorFunction(updateEntityDataWorker);
    testShouldFailOnInvalidAction(updateEntityDataWorker, UPDATE_ENTITY_DATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataApi.updateEntityData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entities, mockActionValue.updateType],
      latticeApiReqSeq: updateEntityData,
      workerSagaAction: updateEntityData(mockActionValue),
      workerSagaToTest: updateEntityDataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataApi.updateEntityData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.entities, mockActionValue.updateType],
      latticeApiReqSeq: updateEntityData,
      workerSagaAction: updateEntityData(mockActionValue),
      workerSagaToTest: updateEntityDataWorker,
    });
  });

});
