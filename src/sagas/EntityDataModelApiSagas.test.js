/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { EntityDataModelApi } from 'lattice';

import {
  ADD_DST_ET_TO_AT,
  ADD_PROPERTY_TYPE_TO_ENTITY_TYPE,
  ADD_SRC_ET_TO_AT,
  CREATE_ASSOCIATION_TYPE,
  CREATE_ENTITY_TYPE,
  CREATE_PROPERTY_TYPE,
  DELETE_ASSOCIATION_TYPE,
  DELETE_ENTITY_TYPE,
  DELETE_PROPERTY_TYPE,
  GET_ALL_ASSOCIATION_TYPES,
  GET_ALL_ENTITY_TYPES,
  GET_ALL_PROPERTY_TYPES,
  GET_ENTITY_DATA_MODEL,
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_SET,
  GET_ENTITY_SET_ID,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  RM_DST_ET_FROM_AT,
  RM_PROPERTY_TYPE_FROM_ENTITY_TYPE,
  RM_SRC_ET_FROM_AT,
  UPDATE_ASSOCIATION_TYPE_METADATA,
  UPDATE_ENTITY_SET_METADATA,
  UPDATE_ENTITY_TYPE_METADATA,
  UPDATE_PROPERTY_TYPE_METADATA,
  addDestinationEntityTypeToAssociationType,
  addPropertyTypeToEntityType,
  addSourceEntityTypeToAssociationType,
  createAssociationType,
  createEntityType,
  createPropertyType,
  deleteAssociationType,
  deleteEntityType,
  deletePropertyType,
  getAllAssociationTypes,
  getAllEntityTypes,
  getAllPropertyTypes,
  getEntityDataModel,
  getEntityDataModelProjection,
  getEntitySet,
  getEntitySetId,
  getEntityType,
  getPropertyType,
  removeDestinationEntityTypeFromAssociationType,
  removePropertyTypeFromEntityType,
  removeSourceEntityTypeFromAssociationType,
  updateAssociationTypeMetaData,
  updateEntitySetMetaData,
  updateEntityTypeMetaData,
  updatePropertyTypeMetaData
} from './EntityDataModelApiActionFactory';

import {
  addDestinationEntityTypeToAssociationTypeWatcher,
  addDestinationEntityTypeToAssociationTypeWorker,
  addPropertyTypeToEntityTypeWatcher,
  addPropertyTypeToEntityTypeWorker,
  addSourceEntityTypeToAssociationTypeWatcher,
  addSourceEntityTypeToAssociationTypeWorker,
  createAssociationTypeWatcher,
  createAssociationTypeWorker,
  createEntityTypeWatcher,
  createEntityTypeWorker,
  createPropertyTypeWatcher,
  createPropertyTypeWorker,
  deleteAssociationTypeWatcher,
  deleteAssociationTypeWorker,
  deleteEntityTypeWatcher,
  deleteEntityTypeWorker,
  deletePropertyTypeWatcher,
  deletePropertyTypeWorker,
  getAllAssociationTypesWatcher,
  getAllAssociationTypesWorker,
  getAllEntityTypesWatcher,
  getAllEntityTypesWorker,
  getAllPropertyTypesWatcher,
  getAllPropertyTypesWorker,
  getEntityDataModelWatcher,
  getEntityDataModelWorker,
  getEntityDataModelProjectionWatcher,
  getEntityDataModelProjectionWorker,
  getEntitySetWatcher,
  getEntitySetWorker,
  getEntitySetIdWatcher,
  getEntitySetIdWorker,
  getEntityTypeWatcher,
  getEntityTypeWorker,
  getPropertyTypeWatcher,
  getPropertyTypeWorker,
  removeDestinationEntityTypeFromAssociationTypeWatcher,
  removeDestinationEntityTypeFromAssociationTypeWorker,
  removePropertyTypeFromEntityTypeWatcher,
  removePropertyTypeFromEntityTypeWorker,
  removeSourceEntityTypeFromAssociationTypeWatcher,
  removeSourceEntityTypeFromAssociationTypeWorker,
  updateAssociationTypeMetaDataWatcher,
  updateAssociationTypeMetaDataWorker,
  updateEntitySetMetaDataWatcher,
  updateEntitySetMetaDataWorker,
  updateEntityTypeMetaDataWatcher,
  updateEntityTypeMetaDataWorker,
  updatePropertyTypeMetaDataWatcher,
  updatePropertyTypeMetaDataWorker
} from './EntityDataModelApiSagas';

import {
  testShouldBeGeneratorFunction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase
} from '../utils/TestUtils';

describe('EntityDataModelApiSagas', () => {

  /*
   *
   * Entity Data Model APIs
   *
   */

  /*
   *
   * EntityDataModelApiActionFactory.getEntityDataModel
   *
   */

  describe('getEntityDataModelWatcher', () => {

    testShouldBeGeneratorFunction(getEntityDataModelWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntityDataModelWatcher,
      getEntityDataModelWorker,
      GET_ENTITY_DATA_MODEL
    );
  });

  describe('getEntityDataModelWorker', () => {

    testShouldBeGeneratorFunction(getEntityDataModelWorker);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getEntityDataModel,
      latticeApiParams: [],
      latticeApiReqSeq: getEntityDataModel,
      workerSagaAction: getEntityDataModel(),
      workerSagaToTest: getEntityDataModelWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getEntityDataModel,
      latticeApiParams: [],
      latticeApiReqSeq: getEntityDataModel,
      workerSagaAction: getEntityDataModel(),
      workerSagaToTest: getEntityDataModelWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.getEntityDataModelProjection
   *
   */

  describe('getEntityDataModelProjectionWatcher', () => {

    testShouldBeGeneratorFunction(getEntityDataModelProjectionWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntityDataModelProjectionWatcher,
      getEntityDataModelProjectionWorker,
      GET_ENTITY_DATA_MODEL_PROJECTION
    );
  });

  describe('getEntityDataModelProjectionWorker', () => {

    testShouldBeGeneratorFunction(getEntityDataModelProjectionWorker);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getEntityDataModelProjection,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityDataModelProjection,
      workerSagaAction: getEntityDataModelProjection(mockActionValue),
      workerSagaToTest: getEntityDataModelProjectionWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getEntityDataModelProjection,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityDataModelProjection,
      workerSagaAction: getEntityDataModelProjection(mockActionValue),
      workerSagaToTest: getEntityDataModelProjectionWorker
    });
  });

  /*
   *
   * EntitySet APIs
   *
   */

  /*
   *
   * EntityDataModelApiActionFactory.getEntitySet
   *
   */

  describe('getEntitySetWatcher', () => {

    testShouldBeGeneratorFunction(getEntitySetWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntitySetWatcher,
      getEntitySetWorker,
      GET_ENTITY_SET
    );
  });

  describe('getEntitySetWorker', () => {

    testShouldBeGeneratorFunction(getEntitySetWorker);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getEntitySet,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySet,
      workerSagaAction: getEntitySet(mockActionValue),
      workerSagaToTest: getEntitySetWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getEntitySet,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySet,
      workerSagaAction: getEntitySet(mockActionValue),
      workerSagaToTest: getEntitySetWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.getEntitySetId
   *
   */

  describe('getEntitySetIdWatcher', () => {

    testShouldBeGeneratorFunction(getEntitySetIdWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntitySetIdWatcher,
      getEntitySetIdWorker,
      GET_ENTITY_SET_ID
    );
  });

  describe('getEntitySetIdWorker', () => {

    testShouldBeGeneratorFunction(getEntitySetIdWorker);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getEntitySetId,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySetId,
      workerSagaAction: getEntitySetId(mockActionValue),
      workerSagaToTest: getEntitySetIdWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getEntitySetId,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntitySetId,
      workerSagaAction: getEntitySetId(mockActionValue),
      workerSagaToTest: getEntitySetIdWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.updateEntitySetMetaData
   *
   */

  describe('updateEntitySetMetaDataWatcher', () => {

    testShouldBeGeneratorFunction(updateEntitySetMetaDataWatcher);
    testWatcherSagaShouldTakeEvery(
      updateEntitySetMetaDataWatcher,
      updateEntitySetMetaDataWorker,
      UPDATE_ENTITY_SET_METADATA
    );
  });

  describe('updateEntitySetMetaDataWorker', () => {

    testShouldBeGeneratorFunction(updateEntitySetMetaDataWorker);

    const mockActionValue = {
      id: randomUUID(),
      metadata: randomUUID()
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.updateEntitySetMetaData,
      latticeApiParams: [mockActionValue.id, mockActionValue.metadata],
      latticeApiReqSeq: updateEntitySetMetaData,
      workerSagaAction: updateEntitySetMetaData(mockActionValue),
      workerSagaToTest: updateEntitySetMetaDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.updateEntitySetMetaData,
      latticeApiParams: [mockActionValue.id, mockActionValue.metadata],
      latticeApiReqSeq: updateEntitySetMetaData,
      workerSagaAction: updateEntitySetMetaData(mockActionValue),
      workerSagaToTest: updateEntitySetMetaDataWorker
    });
  });

  /*
   *
   * EntityType APIs
   *
   */

  /*
   *
   * EntityDataModelApiActionFactory.createEntityType
   *
   */

  describe('createEntityTypeWatcher', () => {

    testShouldBeGeneratorFunction(createEntityTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      createEntityTypeWatcher,
      createEntityTypeWorker,
      CREATE_ENTITY_TYPE
    );
  });

  describe('createEntityTypeWorker', () => {

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.createEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createEntityType,
      workerSagaAction: createEntityType(mockActionValue),
      workerSagaToTest: createEntityTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.createEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createEntityType,
      workerSagaAction: createEntityType(mockActionValue),
      workerSagaToTest: createEntityTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.deleteEntityType
   *
   */

  describe('deleteEntityTypeWatcher', () => {

    testShouldBeGeneratorFunction(deleteEntityTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      deleteEntityTypeWatcher,
      deleteEntityTypeWorker,
      DELETE_ENTITY_TYPE
    );
  });

  describe('deleteEntityTypeWorker', () => {

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.deleteEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteEntityType,
      workerSagaAction: deleteEntityType(mockActionValue),
      workerSagaToTest: deleteEntityTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.deleteEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteEntityType,
      workerSagaAction: deleteEntityType(mockActionValue),
      workerSagaToTest: deleteEntityTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.getAllEntityTypes
   *
   */

  describe('getAllEntityTypesWatcher', () => {

    testShouldBeGeneratorFunction(getAllEntityTypesWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllEntityTypesWatcher,
      getAllEntityTypesWorker,
      GET_ALL_ENTITY_TYPES
    );
  });

  describe('getAllEntityTypesWorker', () => {

    testShouldBeGeneratorFunction(getAllEntityTypesWorker);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getAllEntityTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllEntityTypes,
      workerSagaAction: getAllEntityTypes(),
      workerSagaToTest: getAllEntityTypesWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getAllEntityTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllEntityTypes,
      workerSagaAction: getAllEntityTypes(),
      workerSagaToTest: getAllEntityTypesWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.getEntityType
   *
   */

  describe('getEntityTypeWatcher', () => {

    testShouldBeGeneratorFunction(getEntityTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      getEntityTypeWatcher,
      getEntityTypeWorker,
      GET_ENTITY_TYPE
    );
  });

  describe('getEntityTypeWorker', () => {

    testShouldBeGeneratorFunction(getEntityTypeWorker);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityType,
      workerSagaAction: getEntityType(mockActionValue),
      workerSagaToTest: getEntityTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getEntityType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getEntityType,
      workerSagaAction: getEntityType(mockActionValue),
      workerSagaToTest: getEntityTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.updateEntityTypeMetaData
   *
   */

  describe('updateEntityTypeMetaDataWatcher', () => {

    testShouldBeGeneratorFunction(updateEntityTypeMetaDataWatcher);
    testWatcherSagaShouldTakeEvery(
      updateEntityTypeMetaDataWatcher,
      updateEntityTypeMetaDataWorker,
      UPDATE_ENTITY_TYPE_METADATA
    );
  });

  describe('updateEntityTypeMetaDataWorker', () => {

    testShouldBeGeneratorFunction(updateEntityTypeMetaDataWorker);

    const mockActionValue = {
      id: randomUUID(),
      metadata: randomUUID()
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.updateEntityTypeMetaData,
      latticeApiParams: [mockActionValue.id, mockActionValue.metadata],
      latticeApiReqSeq: updateEntityTypeMetaData,
      workerSagaAction: updateEntityTypeMetaData(mockActionValue),
      workerSagaToTest: updateEntityTypeMetaDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.updateEntityTypeMetaData,
      latticeApiParams: [mockActionValue.id, mockActionValue.metadata],
      latticeApiReqSeq: updateEntityTypeMetaData,
      workerSagaAction: updateEntityTypeMetaData(mockActionValue),
      workerSagaToTest: updateEntityTypeMetaDataWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.addPropertyTypeToEntityType
   *
   */

  describe('addPropertyTypeToEntityTypeWatcher', () => {

    testShouldBeGeneratorFunction(addPropertyTypeToEntityTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      addPropertyTypeToEntityTypeWatcher,
      addPropertyTypeToEntityTypeWorker,
      ADD_PROPERTY_TYPE_TO_ENTITY_TYPE
    );
  });

  describe('addPropertyTypeToEntityTypeWorker', () => {

    testShouldBeGeneratorFunction(addPropertyTypeToEntityTypeWorker);

    const mockActionValue = {
      entityTypeId: randomUUID(),
      propertyTypeId: randomUUID()
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.addPropertyTypeToEntityType,
      latticeApiParams: [mockActionValue.entityTypeId, mockActionValue.propertyTypeId],
      latticeApiReqSeq: addPropertyTypeToEntityType,
      workerSagaAction: addPropertyTypeToEntityType(mockActionValue),
      workerSagaToTest: addPropertyTypeToEntityTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.addPropertyTypeToEntityType,
      latticeApiParams: [mockActionValue.entityTypeId, mockActionValue.propertyTypeId],
      latticeApiReqSeq: addPropertyTypeToEntityType,
      workerSagaAction: addPropertyTypeToEntityType(mockActionValue),
      workerSagaToTest: addPropertyTypeToEntityTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.removePropertyTypeFromEntityType
   *
   */

  describe('removePropertyTypeFromEntityTypeWatcher', () => {

    testShouldBeGeneratorFunction(removePropertyTypeFromEntityTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      removePropertyTypeFromEntityTypeWatcher,
      removePropertyTypeFromEntityTypeWorker,
      RM_PROPERTY_TYPE_FROM_ENTITY_TYPE
    );
  });

  describe('removePropertyTypeFromEntityTypeWorker', () => {

    testShouldBeGeneratorFunction(removePropertyTypeFromEntityTypeWorker);

    const mockActionValue = {
      entityTypeId: randomUUID(),
      propertyTypeId: randomUUID()
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.removePropertyTypeFromEntityType,
      latticeApiParams: [mockActionValue.entityTypeId, mockActionValue.propertyTypeId],
      latticeApiReqSeq: removePropertyTypeFromEntityType,
      workerSagaAction: removePropertyTypeFromEntityType(mockActionValue),
      workerSagaToTest: removePropertyTypeFromEntityTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.removePropertyTypeFromEntityType,
      latticeApiParams: [mockActionValue.entityTypeId, mockActionValue.propertyTypeId],
      latticeApiReqSeq: removePropertyTypeFromEntityType,
      workerSagaAction: removePropertyTypeFromEntityType(mockActionValue),
      workerSagaToTest: removePropertyTypeFromEntityTypeWorker
    });
  });

  /*
   *
   * PropertyType APIs
   *
   */

  /*
   *
   * EntityDataModelApiActionFactory.createPropertyType
   *
   */

  describe('createPropertyTypeWatcher', () => {

    testShouldBeGeneratorFunction(createPropertyTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      createPropertyTypeWatcher,
      createPropertyTypeWorker,
      CREATE_PROPERTY_TYPE
    );
  });

  describe('createPropertyTypeWorker', () => {

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.createPropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createPropertyType,
      workerSagaAction: createPropertyType(mockActionValue),
      workerSagaToTest: createPropertyTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.createPropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createPropertyType,
      workerSagaAction: createPropertyType(mockActionValue),
      workerSagaToTest: createPropertyTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.deletePropertyType
   *
   */

  describe('deletePropertyTypeWatcher', () => {

    testShouldBeGeneratorFunction(deletePropertyTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      deletePropertyTypeWatcher,
      deletePropertyTypeWorker,
      DELETE_PROPERTY_TYPE
    );
  });

  describe('deletePropertyTypeWorker', () => {

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.deletePropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deletePropertyType,
      workerSagaAction: deletePropertyType(mockActionValue),
      workerSagaToTest: deletePropertyTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.deletePropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deletePropertyType,
      workerSagaAction: deletePropertyType(mockActionValue),
      workerSagaToTest: deletePropertyTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.getAllPropertyTypes
   *
   */

  describe('getAllPropertyTypesWatcher', () => {

    testShouldBeGeneratorFunction(getAllPropertyTypesWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllPropertyTypesWatcher,
      getAllPropertyTypesWorker,
      GET_ALL_PROPERTY_TYPES
    );
  });

  describe('getAllPropertyTypesWorker', () => {

    testShouldBeGeneratorFunction(getAllPropertyTypesWorker);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getAllPropertyTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllPropertyTypes,
      workerSagaAction: getAllPropertyTypes(),
      workerSagaToTest: getAllPropertyTypesWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getAllPropertyTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllPropertyTypes,
      workerSagaAction: getAllPropertyTypes(),
      workerSagaToTest: getAllPropertyTypesWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.getPropertyType
   *
   */

  describe('getPropertyTypeWatcher', () => {

    testShouldBeGeneratorFunction(getPropertyTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      getPropertyTypeWatcher,
      getPropertyTypeWorker,
      GET_PROPERTY_TYPE
    );
  });

  describe('getPropertyTypeWorker', () => {

    testShouldBeGeneratorFunction(getPropertyTypeWorker);

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getPropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getPropertyType,
      workerSagaAction: getPropertyType(mockActionValue),
      workerSagaToTest: getPropertyTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getPropertyType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getPropertyType,
      workerSagaAction: getPropertyType(mockActionValue),
      workerSagaToTest: getPropertyTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.updatePropertyTypeMetaData
   *
   */

  describe('updatePropertyTypeMetaDataWatcher', () => {

    testShouldBeGeneratorFunction(updatePropertyTypeMetaDataWatcher);
    testWatcherSagaShouldTakeEvery(
      updatePropertyTypeMetaDataWatcher,
      updatePropertyTypeMetaDataWorker,
      UPDATE_PROPERTY_TYPE_METADATA
    );
  });

  describe('updatePropertyTypeMetaDataWorker', () => {

    testShouldBeGeneratorFunction(updatePropertyTypeMetaDataWorker);

    const mockActionValue = {
      id: randomUUID(),
      metadata: randomUUID()
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.updatePropertyTypeMetaData,
      latticeApiParams: [mockActionValue.id, mockActionValue.metadata],
      latticeApiReqSeq: updatePropertyTypeMetaData,
      workerSagaAction: updatePropertyTypeMetaData(mockActionValue),
      workerSagaToTest: updatePropertyTypeMetaDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.updatePropertyTypeMetaData,
      latticeApiParams: [mockActionValue.id, mockActionValue.metadata],
      latticeApiReqSeq: updatePropertyTypeMetaData,
      workerSagaAction: updatePropertyTypeMetaData(mockActionValue),
      workerSagaToTest: updatePropertyTypeMetaDataWorker
    });
  });

  /*
   *
   * AssociationType APIs
   *
   */

  /*
   *
   * EntityDataModelApiActionFactory.createAssociationType
   *
   */

  describe('createAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(createAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      createAssociationTypeWatcher,
      createAssociationTypeWorker,
      CREATE_ASSOCIATION_TYPE
    );
  });

  describe('createAssociationTypeWorker', () => {

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.createAssociationType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createAssociationType,
      workerSagaAction: createAssociationType(mockActionValue),
      workerSagaToTest: createAssociationTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.createAssociationType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createAssociationType,
      workerSagaAction: createAssociationType(mockActionValue),
      workerSagaToTest: createAssociationTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.deleteAssociationType
   *
   */

  describe('deleteAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(deleteAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      deleteAssociationTypeWatcher,
      deleteAssociationTypeWorker,
      DELETE_ASSOCIATION_TYPE
    );
  });

  describe('deleteAssociationTypeWorker', () => {

    const mockActionValue = randomUUID();

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.deleteAssociationType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteAssociationType,
      workerSagaAction: deleteAssociationType(mockActionValue),
      workerSagaToTest: deleteAssociationTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.deleteAssociationType,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteAssociationType,
      workerSagaAction: deleteAssociationType(mockActionValue),
      workerSagaToTest: deleteAssociationTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.getAllAssociationTypes
   *
   */

  describe('getAllAssociationTypesWatcher', () => {

    testShouldBeGeneratorFunction(getAllAssociationTypesWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllAssociationTypesWatcher,
      getAllAssociationTypesWorker,
      GET_ALL_ASSOCIATION_TYPES
    );
  });

  describe('getAllAssociationTypesWorker', () => {

    testShouldBeGeneratorFunction(getAllAssociationTypesWorker);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.getAllAssociationTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllAssociationTypes,
      workerSagaAction: getAllAssociationTypes(),
      workerSagaToTest: getAllAssociationTypesWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.getAllAssociationTypes,
      latticeApiParams: [],
      latticeApiReqSeq: getAllAssociationTypes,
      workerSagaAction: getAllAssociationTypes(),
      workerSagaToTest: getAllAssociationTypesWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.updateAssociationTypeMetaData
   *
   */

  describe('updateAssociationTypeMetaDataWatcher', () => {

    testShouldBeGeneratorFunction(updateAssociationTypeMetaDataWatcher);
    testWatcherSagaShouldTakeEvery(
      updateAssociationTypeMetaDataWatcher,
      updateAssociationTypeMetaDataWorker,
      UPDATE_ASSOCIATION_TYPE_METADATA
    );
  });

  describe('updateAssociationTypeMetaDataWorker', () => {

    testShouldBeGeneratorFunction(updateAssociationTypeMetaDataWorker);

    const mockActionValue = {
      id: randomUUID(),
      metadata: randomUUID()
    };

    // AssociationType is backed by an EntityType, so we're still calling updateEntityTypeMetaData()
    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.updateEntityTypeMetaData,
      latticeApiParams: [mockActionValue.id, mockActionValue.metadata],
      latticeApiReqSeq: updateAssociationTypeMetaData,
      workerSagaAction: updateAssociationTypeMetaData(mockActionValue),
      workerSagaToTest: updateAssociationTypeMetaDataWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.updateEntityTypeMetaData,
      latticeApiParams: [mockActionValue.id, mockActionValue.metadata],
      latticeApiReqSeq: updateAssociationTypeMetaData,
      workerSagaAction: updateAssociationTypeMetaData(mockActionValue),
      workerSagaToTest: updateAssociationTypeMetaDataWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.addDestinationEntityTypeToAssociationType
   *
   */

  describe('addDestinationEntityTypeToAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(addDestinationEntityTypeToAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      addDestinationEntityTypeToAssociationTypeWatcher,
      addDestinationEntityTypeToAssociationTypeWorker,
      ADD_DST_ET_TO_AT
    );
  });

  describe('addDestinationEntityTypeToAssociationTypeWorker', () => {

    testShouldBeGeneratorFunction(addDestinationEntityTypeToAssociationTypeWorker);

    const mockActionValue = {
      associationTypeId: randomUUID(),
      entityTypeId: randomUUID()
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.addDstEntityTypeToAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: addDestinationEntityTypeToAssociationType,
      workerSagaAction: addDestinationEntityTypeToAssociationType(mockActionValue),
      workerSagaToTest: addDestinationEntityTypeToAssociationTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.addDstEntityTypeToAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: addDestinationEntityTypeToAssociationType,
      workerSagaAction: addDestinationEntityTypeToAssociationType(mockActionValue),
      workerSagaToTest: addDestinationEntityTypeToAssociationTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.addSourceEntityTypeToAssociationType
   *
   */

  describe('addSourceEntityTypeToAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(addSourceEntityTypeToAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      addSourceEntityTypeToAssociationTypeWatcher,
      addSourceEntityTypeToAssociationTypeWorker,
      ADD_SRC_ET_TO_AT
    );
  });

  describe('addSourceEntityTypeToAssociationTypeWorker', () => {

    testShouldBeGeneratorFunction(addSourceEntityTypeToAssociationTypeWorker);

    const mockActionValue = {
      associationTypeId: randomUUID(),
      entityTypeId: randomUUID()
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.addSrcEntityTypeToAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: addSourceEntityTypeToAssociationType,
      workerSagaAction: addSourceEntityTypeToAssociationType(mockActionValue),
      workerSagaToTest: addSourceEntityTypeToAssociationTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.addSrcEntityTypeToAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: addSourceEntityTypeToAssociationType,
      workerSagaAction: addSourceEntityTypeToAssociationType(mockActionValue),
      workerSagaToTest: addSourceEntityTypeToAssociationTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.removeDestinationEntityTypeFromAssociationType
   *
   */

  describe('removeDestinationEntityTypeFromAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(removeDestinationEntityTypeFromAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      removeDestinationEntityTypeFromAssociationTypeWatcher,
      removeDestinationEntityTypeFromAssociationTypeWorker,
      RM_DST_ET_FROM_AT
    );
  });

  describe('removeDestinationEntityTypeFromAssociationTypeWorker', () => {

    testShouldBeGeneratorFunction(removeDestinationEntityTypeFromAssociationTypeWorker);

    const mockActionValue = {
      associationTypeId: randomUUID(),
      entityTypeId: randomUUID()
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.removeDstEntityTypeFromAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: removeDestinationEntityTypeFromAssociationType,
      workerSagaAction: removeDestinationEntityTypeFromAssociationType(mockActionValue),
      workerSagaToTest: removeDestinationEntityTypeFromAssociationTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.removeDstEntityTypeFromAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: removeDestinationEntityTypeFromAssociationType,
      workerSagaAction: removeDestinationEntityTypeFromAssociationType(mockActionValue),
      workerSagaToTest: removeDestinationEntityTypeFromAssociationTypeWorker
    });
  });

  /*
   *
   * EntityDataModelApiActionFactory.removeSourceEntityTypeFromAssociationType
   *
   */

  describe('removeSourceEntityTypeFromAssociationTypeWatcher', () => {

    testShouldBeGeneratorFunction(removeSourceEntityTypeFromAssociationTypeWatcher);
    testWatcherSagaShouldTakeEvery(
      removeSourceEntityTypeFromAssociationTypeWatcher,
      removeSourceEntityTypeFromAssociationTypeWorker,
      RM_SRC_ET_FROM_AT
    );
  });

  describe('removeSourceEntityTypeFromAssociationTypeWorker', () => {

    testShouldBeGeneratorFunction(removeSourceEntityTypeFromAssociationTypeWorker);

    const mockActionValue = {
      associationTypeId: randomUUID(),
      entityTypeId: randomUUID()
    };

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: EntityDataModelApi.removeSrcEntityTypeFromAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: removeSourceEntityTypeFromAssociationType,
      workerSagaAction: removeSourceEntityTypeFromAssociationType(mockActionValue),
      workerSagaToTest: removeSourceEntityTypeFromAssociationTypeWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: EntityDataModelApi.removeSrcEntityTypeFromAssociationType,
      latticeApiParams: [mockActionValue.associationTypeId, mockActionValue.entityTypeId],
      latticeApiReqSeq: removeSourceEntityTypeFromAssociationType,
      workerSagaAction: removeSourceEntityTypeFromAssociationType(mockActionValue),
      workerSagaToTest: removeSourceEntityTypeFromAssociationTypeWorker
    });
  });

});
