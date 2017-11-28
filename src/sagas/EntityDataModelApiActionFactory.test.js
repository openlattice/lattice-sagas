/*
 * @flow
 */

import {
  CREATE_ASSOCIATION_TYPE,
  CREATE_ENTITY_TYPE,
  CREATE_PROPERTY_TYPE,
  GET_ALL_ASSOCIATION_TYPES,
  GET_ALL_ENTITY_TYPES,
  GET_ALL_PROPERTY_TYPES,
  GET_ENTITY_DATA_MODEL,
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_SET,
  GET_ENTITY_SET_ID,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  createAssociationType,
  createEntityType,
  createPropertyType,
  getAllAssociationTypes,
  getAllEntityTypes,
  getAllPropertyTypes,
  getEntityDataModel,
  getEntityDataModelProjection,
  getEntitySet,
  getEntitySetId,
  getEntityType,
  getPropertyType
} from './EntityDataModelApiActionFactory';

import { testShouldBeRequestSequenceFunction } from '../utils/TestUtils';

describe('EntityDataModelApiActionFactory', () => {

  describe('should export action types', () => {

    test('CREATE_ASSOCIATION_TYPE', () => {
      expect(CREATE_ASSOCIATION_TYPE).toEqual('CREATE_ASSOCIATION_TYPE');
    });

    test('CREATE_ENTITY_TYPE', () => {
      expect(CREATE_ENTITY_TYPE).toEqual('CREATE_ENTITY_TYPE');
    });

    test('CREATE_PROPERTY_TYPE', () => {
      expect(CREATE_PROPERTY_TYPE).toEqual('CREATE_PROPERTY_TYPE');
    });

    test('GET_ALL_ASSOCIATION_TYPES', () => {
      expect(GET_ALL_ASSOCIATION_TYPES).toEqual('GET_ALL_ASSOCIATION_TYPES');
    });

    test('GET_ALL_ENTITY_TYPES', () => {
      expect(GET_ALL_ENTITY_TYPES).toEqual('GET_ALL_ENTITY_TYPES');
    });

    test('GET_ALL_PROPERTY_TYPES', () => {
      expect(GET_ALL_PROPERTY_TYPES).toEqual('GET_ALL_PROPERTY_TYPES');
    });

    test('GET_ENTITY_DATA_MODEL', () => {
      expect(GET_ENTITY_DATA_MODEL).toEqual('GET_ENTITY_DATA_MODEL');
    });

    test('GET_ENTITY_DATA_MODEL_PROJECTION', () => {
      expect(GET_ENTITY_DATA_MODEL_PROJECTION).toEqual('GET_ENTITY_DATA_MODEL_PROJECTION');
    });

    test('GET_ENTITY_SET', () => {
      expect(GET_ENTITY_SET).toEqual('GET_ENTITY_SET');
    });

    test('GET_ENTITY_SET_ID', () => {
      expect(GET_ENTITY_SET_ID).toEqual('GET_ENTITY_SET_ID');
    });

    test('GET_ENTITY_TYPE', () => {
      expect(GET_ENTITY_TYPE).toEqual('GET_ENTITY_TYPE');
    });

    test('GET_PROPERTY_TYPE', () => {
      expect(GET_PROPERTY_TYPE).toEqual('GET_PROPERTY_TYPE');
    });

  });

  describe('should export RequestSequence functions', () => {

    describe('createAssociationType', () => {
      testShouldBeRequestSequenceFunction(createAssociationType, CREATE_ASSOCIATION_TYPE);
    });

    describe('createEntityType', () => {
      testShouldBeRequestSequenceFunction(createEntityType, CREATE_ENTITY_TYPE);
    });

    describe('createPropertyType', () => {
      testShouldBeRequestSequenceFunction(createPropertyType, CREATE_PROPERTY_TYPE);
    });

    describe('getAllAssociationTypes', () => {
      testShouldBeRequestSequenceFunction(getAllAssociationTypes, GET_ALL_ASSOCIATION_TYPES);
    });

    describe('getAllEntityTypes', () => {
      testShouldBeRequestSequenceFunction(getAllEntityTypes, GET_ALL_ENTITY_TYPES);
    });

    describe('getAllPropertyTypes', () => {
      testShouldBeRequestSequenceFunction(getAllPropertyTypes, GET_ALL_PROPERTY_TYPES);
    });

    describe('getEntityDataModel', () => {
      testShouldBeRequestSequenceFunction(getEntityDataModel, GET_ENTITY_DATA_MODEL);
    });

    describe('getEntityDataModelProjection', () => {
      testShouldBeRequestSequenceFunction(getEntityDataModelProjection, GET_ENTITY_DATA_MODEL_PROJECTION);
    });

    describe('getEntitySet', () => {
      testShouldBeRequestSequenceFunction(getEntitySet, GET_ENTITY_SET);
    });

    describe('getEntitySetId', () => {
      testShouldBeRequestSequenceFunction(getEntitySetId, GET_ENTITY_SET_ID);
    });

    describe('getEntityType', () => {
      testShouldBeRequestSequenceFunction(getEntityType, GET_ENTITY_TYPE);
    });

    describe('getPropertyType', () => {
      testShouldBeRequestSequenceFunction(getPropertyType, GET_PROPERTY_TYPE);
    });

  });

});
