/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { EntitySetsApi } from 'lattice';

import {
  CREATE_ENTITY_SETS,
  DELETE_ENTITY_SET,
  GET_ALL_ENTITY_SETS,
  GET_ENTITY_SET,
  GET_ENTITY_SET_ID,
  GET_ENTITY_SET_IDS,
  GET_PT_METADATA_FOR_ENTITY_SET,
  GET_PT_METADATA_FOR_ENTITY_SETS,
  createEntitySets,
  deleteEntitySet,
  getAllEntitySets,
  getEntitySet,
  getEntitySetId,
  getEntitySetIds,
  getPropertyTypeMetaDataForEntitySet,
  getPropertyTypeMetaDataForEntitySets,
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
  getPropertyTypeMetaDataForEntitySetWatcher,
  getPropertyTypeMetaDataForEntitySetWorker,
  getPropertyTypeMetaDataForEntitySetsWatcher,
  getPropertyTypeMetaDataForEntitySetsWorker,
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

    testShouldBeGeneratorFunction(createEntitySetsWorker);
    testShouldFailOnInvalidAction(createEntitySetsWorker, CREATE_ENTITY_SETS);

    const mockActionValue = randomUUID();

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

    testShouldBeGeneratorFunction(deleteEntitySetWorker);
    testShouldFailOnInvalidAction(deleteEntitySetWorker, DELETE_ENTITY_SET);

    const mockActionValue = randomUUID();

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

    testShouldBeGeneratorFunction(getEntitySetWorker);
    testShouldFailOnInvalidAction(getEntitySetWorker, GET_ENTITY_SET);

    const mockActionValue = randomUUID();

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

    testShouldBeGeneratorFunction(getEntitySetIdWorker);
    testShouldFailOnInvalidAction(getEntitySetIdWorker, GET_ENTITY_SET_ID);

    const mockActionValue = randomUUID();

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

    testShouldBeGeneratorFunction(getEntitySetIdsWorker);
    testShouldFailOnInvalidAction(getEntitySetIdsWorker, GET_ENTITY_SET_IDS);

    const mockActionValue = randomUUID();

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
   * EntitySetsApi.getPropertyTypeMetaDataForEntitySet
   * EntitySetsApiActions.getPropertyTypeMetaDataForEntitySet
   *
   */

  describe('getPropertyTypeMetaDataForEntitySetWatcher', () => {

    testShouldBeGeneratorFunction(getPropertyTypeMetaDataForEntitySetWatcher);
    testWatcherSagaShouldTakeEvery(
      getPropertyTypeMetaDataForEntitySetWatcher,
      getPropertyTypeMetaDataForEntitySetWorker,
      GET_PT_METADATA_FOR_ENTITY_SET,
    );
  });

  describe('getPropertyTypeMetaDataForEntitySetWorker', () => {

    testShouldBeGeneratorFunction(getPropertyTypeMetaDataForEntitySetWorker);
    testShouldFailOnInvalidAction(getPropertyTypeMetaDataForEntitySetWorker, GET_PT_METADATA_FOR_ENTITY_SET);

    const mockActionValue = {
      entitySetId: randomUUID(),
      propertyTypeId: randomUUID(),
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntitySetsApi.getPropertyTypeMetaDataForEntitySet,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getPropertyTypeMetaDataForEntitySet,
      workerSagaAction: getPropertyTypeMetaDataForEntitySet(mockActionValue),
      workerSagaToTest: getPropertyTypeMetaDataForEntitySetWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntitySetsApi.getPropertyTypeMetaDataForEntitySet,
      latticeApiParams: [mockActionValue],
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
      GET_PT_METADATA_FOR_ENTITY_SETS,
    );
  });

  describe('getPropertyTypeMetaDataForEntitySetsWorker', () => {

    testShouldBeGeneratorFunction(getPropertyTypeMetaDataForEntitySetsWorker);
    testShouldFailOnInvalidAction(getPropertyTypeMetaDataForEntitySetsWorker, GET_PT_METADATA_FOR_ENTITY_SETS);

    const mockActionValue = [randomUUID()];

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

});
