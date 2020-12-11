/*
 * @flow
 */

import { EntitySetsApi } from 'lattice';
import { v4 as uuid } from 'uuid';

import {
  CREATE_ENTITY_SETS,
  DELETE_ENTITY_SET,
  GET_ALL_ENTITY_SETS,
  GET_ENTITY_SET,
  GET_ENTITY_SETS,
  GET_ENTITY_SET_ID,
  GET_ENTITY_SET_IDS,
  GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SET,
  GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SETS,
  UPDATE_ENTITY_SET_METADATA,
  createEntitySets,
  deleteEntitySet,
  getAllEntitySets,
  getEntitySet,
  getEntitySetId,
  getEntitySetIds,
  getEntitySets,
  getPropertyTypeMetaDataForEntitySet,
  getPropertyTypeMetaDataForEntitySets,
  updateEntitySetMetaData
} from './EntitySetsApiActions';
import {
  createEntitySetsWatcher,
  createEntitySetsWorker,
  deleteEntitySetWatcher,
  deleteEntitySetWorker,
  getAllEntitySetsWatcher,
  getAllEntitySetsWorker,
  getEntitySetIdWatcher,
  getEntitySetIdWorker,
  getEntitySetIdsWatcher,
  getEntitySetIdsWorker,
  getEntitySetWatcher,
  getEntitySetWorker,
  getEntitySetsWatcher,
  getEntitySetsWorker,
  getPropertyTypeMetaDataForEntitySetWatcher,
  getPropertyTypeMetaDataForEntitySetWorker,
  getPropertyTypeMetaDataForEntitySetsWatcher,
  getPropertyTypeMetaDataForEntitySetsWorker,
  updateEntitySetMetaDataWatcher,
  updateEntitySetMetaDataWorker
} from './EntitySetsApiSagas';

import {
  testShouldBeGeneratorFunction,
  testShouldFailOnInvalidAction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase,
} from '../utils/testing/TestUtils';

describe('EntitySetsApiSagas', () => {

  /*
   *
   * EntitySetsApi.createEntitySets
   * EntitySetsApiActions.createEntitySets
   *
   */

  describe('createEntitySetsWatcher', () => {

    testShouldBeGeneratorFunction(createEntitySetsWatcher);
    testWatcherSagaShouldTakeEvery(
      createEntitySetsWatcher,
      createEntitySetsWorker,
      CREATE_ENTITY_SETS,
    );
  });

  describe('createEntitySetsWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(createEntitySetsWorker);
    testShouldFailOnInvalidAction(createEntitySetsWorker, CREATE_ENTITY_SETS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntitySetsApi.createEntitySets,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createEntitySets,
      workerSagaAction: createEntitySets(mockActionValue),
      workerSagaToTest: createEntitySetsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntitySetsApi.createEntitySets,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createEntitySets,
      workerSagaAction: createEntitySets(mockActionValue),
      workerSagaToTest: createEntitySetsWorker,
    });
  });

  /*
   *
   * EntitySetsApi.deleteEntitySet
   * EntitySetsApiActions.deleteEntitySet
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

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(deleteEntitySetWorker);
    testShouldFailOnInvalidAction(deleteEntitySetWorker, DELETE_ENTITY_SET);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntitySetsApi.deleteEntitySet,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteEntitySet,
      workerSagaAction: deleteEntitySet(mockActionValue),
      workerSagaToTest: deleteEntitySetWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntitySetsApi.deleteEntitySet,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteEntitySet,
      workerSagaAction: deleteEntitySet(mockActionValue),
      workerSagaToTest: deleteEntitySetWorker,
    });
  });

  /*
   *
   * EntitySetsApi.getAllEntitySets
   * EntitySetsApiActions.getAllEntitySets
   *
   */

  describe('getAllEntitySetsWatcher', () => {

    testShouldBeGeneratorFunction(getAllEntitySetsWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllEntitySetsWatcher,
      getAllEntitySetsWorker,
      GET_ALL_ENTITY_SETS,
    );
  });

  describe('getAllEntitySetsWorker', () => {

    testShouldBeGeneratorFunction(getAllEntitySetsWorker);
    testShouldFailOnInvalidAction(getAllEntitySetsWorker, GET_ALL_ENTITY_SETS, false);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntitySetsApi.getAllEntitySets,
      latticeApiParams: [],
      latticeApiReqSeq: getAllEntitySets,
      workerSagaAction: getAllEntitySets(),
      workerSagaToTest: getAllEntitySetsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntitySetsApi.getAllEntitySets,
      latticeApiParams: [],
      latticeApiReqSeq: getAllEntitySets,
      workerSagaAction: getAllEntitySets(),
      workerSagaToTest: getAllEntitySetsWorker,
    });
  });

  /*
   *
   * EntitySetsApi.getEntitySet
   * EntitySetsApiActions.getEntitySet
   *
   */

  describe('getEntitySetWatcher', () => {

    testShouldBeGeneratorFunction(getEntitySetWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntitySetWatcher,
      getEntitySetWorker,
      GET_ENTITY_SET,
    );
  });

  describe('getEntitySetWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getEntitySetWorker);
    testShouldFailOnInvalidAction(getEntitySetWorker, GET_ENTITY_SET);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntitySetsApi.getEntitySet,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySet,
      workerSagaAction: getEntitySet(mockActionValue),
      workerSagaToTest: getEntitySetWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntitySetsApi.getEntitySet,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySet,
      workerSagaAction: getEntitySet(mockActionValue),
      workerSagaToTest: getEntitySetWorker,
    });
  });

  /*
   *
   * EntitySetsApi.getEntitySetId
   * EntitySetsApiActions.getEntitySetId
   *
   */

  describe('getEntitySetIdWatcher', () => {

    testShouldBeGeneratorFunction(getEntitySetIdWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntitySetIdWatcher,
      getEntitySetIdWorker,
      GET_ENTITY_SET_ID,
    );
  });

  describe('getEntitySetIdWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getEntitySetIdWorker);
    testShouldFailOnInvalidAction(getEntitySetIdWorker, GET_ENTITY_SET_ID);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntitySetsApi.getEntitySetId,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySetId,
      workerSagaAction: getEntitySetId(mockActionValue),
      workerSagaToTest: getEntitySetIdWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntitySetsApi.getEntitySetId,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySetId,
      workerSagaAction: getEntitySetId(mockActionValue),
      workerSagaToTest: getEntitySetIdWorker,
    });
  });

  /*
   *
   * EntitySetsApi.getEntitySetIds
   * EntitySetsApiActions.getEntitySetIds
   *
   */

  describe('getEntitySetIdsWatcher', () => {

    testShouldBeGeneratorFunction(getEntitySetIdsWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntitySetIdsWatcher,
      getEntitySetIdsWorker,
      GET_ENTITY_SET_IDS,
    );
  });

  describe('getEntitySetIdsWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getEntitySetIdsWorker);
    testShouldFailOnInvalidAction(getEntitySetIdsWorker, GET_ENTITY_SET_IDS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntitySetsApi.getEntitySetIds,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySetIds,
      workerSagaAction: getEntitySetIds(mockActionValue),
      workerSagaToTest: getEntitySetIdsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntitySetsApi.getEntitySetIds,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySetIds,
      workerSagaAction: getEntitySetIds(mockActionValue),
      workerSagaToTest: getEntitySetIdsWorker,
    });
  });

  /*
   *
   * EntitySetsApi.getEntitySets
   * EntitySetsApiActions.getEntitySets
   *
   */

  describe('getEntitySetsWatcher', () => {

    testShouldBeGeneratorFunction(getEntitySetsWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntitySetsWatcher,
      getEntitySetsWorker,
      GET_ENTITY_SETS,
    );
  });

  describe('getEntitySetsWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getEntitySetsWorker);
    testShouldFailOnInvalidAction(getEntitySetsWorker, GET_ENTITY_SETS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntitySetsApi.getEntitySets,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySets,
      workerSagaAction: getEntitySets(mockActionValue),
      workerSagaToTest: getEntitySetsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntitySetsApi.getEntitySets,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySets,
      workerSagaAction: getEntitySets(mockActionValue),
      workerSagaToTest: getEntitySetsWorker,
    });
  });

  /*
   *
   * EntitySetsApi.getPropertyTypeMetaDataForEntitySet
   * EntitySetsApiActions.getPropertyTypeMetaDataForEntitySet
   *
   */

  describe('getPropertyTypeMetaDataForEntitySetWatcher', () => {

    testShouldBeGeneratorFunction(getPropertyTypeMetaDataForEntitySetWatcher);
    testWatcherSagaShouldTakeEvery(
      getPropertyTypeMetaDataForEntitySetWatcher,
      getPropertyTypeMetaDataForEntitySetWorker,
      GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SET,
    );
  });

  describe('getPropertyTypeMetaDataForEntitySetWorker', () => {

    const mockActionValue = {
      entitySetId: uuid(),
      propertyTypeId: uuid(),
    };

    testShouldBeGeneratorFunction(getPropertyTypeMetaDataForEntitySetWorker);
    testShouldFailOnInvalidAction(
      getPropertyTypeMetaDataForEntitySetWorker,
      GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SET,
    );

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntitySetsApi.getPropertyTypeMetaDataForEntitySet,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.propertyTypeId],
      latticeApiReqSeq: getPropertyTypeMetaDataForEntitySet,
      workerSagaAction: getPropertyTypeMetaDataForEntitySet(mockActionValue),
      workerSagaToTest: getPropertyTypeMetaDataForEntitySetWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntitySetsApi.getPropertyTypeMetaDataForEntitySet,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.propertyTypeId],
      latticeApiReqSeq: getPropertyTypeMetaDataForEntitySet,
      workerSagaAction: getPropertyTypeMetaDataForEntitySet(mockActionValue),
      workerSagaToTest: getPropertyTypeMetaDataForEntitySetWorker,
    });
  });

  /*
   *
   * EntitySetsApi.getPropertyTypeMetaDataForEntitySets
   * EntitySetsApiActions.getPropertyTypeMetaDataForEntitySets
   *
   */

  describe('getPropertyTypeMetaDataForEntitySetsWatcher', () => {

    testShouldBeGeneratorFunction(getPropertyTypeMetaDataForEntitySetsWatcher);
    testWatcherSagaShouldTakeEvery(
      getPropertyTypeMetaDataForEntitySetsWatcher,
      getPropertyTypeMetaDataForEntitySetsWorker,
      GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SETS,
    );
  });

  describe('getPropertyTypeMetaDataForEntitySetsWorker', () => {

    const mockActionValue = [uuid()];

    testShouldBeGeneratorFunction(getPropertyTypeMetaDataForEntitySetsWorker);
    testShouldFailOnInvalidAction(
      getPropertyTypeMetaDataForEntitySetsWorker,
      GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SETS,
    );

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntitySetsApi.getPropertyTypeMetaDataForEntitySets,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getPropertyTypeMetaDataForEntitySets,
      workerSagaAction: getPropertyTypeMetaDataForEntitySets(mockActionValue),
      workerSagaToTest: getPropertyTypeMetaDataForEntitySetsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntitySetsApi.getPropertyTypeMetaDataForEntitySets,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getPropertyTypeMetaDataForEntitySets,
      workerSagaAction: getPropertyTypeMetaDataForEntitySets(mockActionValue),
      workerSagaToTest: getPropertyTypeMetaDataForEntitySetsWorker,
    });
  });

  /*
   *
   * EntitySetsApi.updateEntitySetMetaData
   * EntitySetsApiActions.updateEntitySetMetaData
   *
   */

  describe('updateEntitySetMetaDataWatcher', () => {

    testShouldBeGeneratorFunction(updateEntitySetMetaDataWatcher);
    testWatcherSagaShouldTakeEvery(
      updateEntitySetMetaDataWatcher,
      updateEntitySetMetaDataWorker,
      UPDATE_ENTITY_SET_METADATA,
    );
  });

  describe('updateEntitySetMetaDataWorker', () => {

    const mockActionValue = {
      entitySetId: uuid(),
      metadata: {
        title: 'TEST_TITLE',
        description: 'TEST_TITLE',
        name: 'TEST_NAME',
        members: ['member1@openlattice.com', 'member2@openlattice.com'],
      }
    };

    testShouldBeGeneratorFunction(updateEntitySetMetaDataWorker);
    testShouldFailOnInvalidAction(
      updateEntitySetMetaDataWorker,
      UPDATE_ENTITY_SET_METADATA,
    );

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntitySetsApi.updateEntitySetMetaData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.metadata],
      latticeApiReqSeq: updateEntitySetMetaData,
      workerSagaAction: updateEntitySetMetaData(mockActionValue),
      workerSagaToTest: updateEntitySetMetaDataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntitySetsApi.updateEntitySetMetaData,
      latticeApiParams: [mockActionValue.entitySetId, mockActionValue.metadata],
      latticeApiReqSeq: updateEntitySetMetaData,
      workerSagaAction: updateEntitySetMetaData(mockActionValue),
      workerSagaToTest: updateEntitySetMetaDataWorker,
    });
  });

});
