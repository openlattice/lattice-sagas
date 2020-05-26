/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as EntityDataModelApiActions from './EntityDataModelApiActions';

import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'ADD_DESTINATION_ENTITY_TYPE_TO_ASSOCIATION_TYPE',
  'ADD_PROPERTY_TYPE_TO_ENTITY_TYPE',
  'ADD_SOURCE_ENTITY_TYPE_TO_ASSOCIATION_TYPE',
  'CREATE_ASSOCIATION_TYPE',
  'CREATE_ENTITY_TYPE',
  'CREATE_PROPERTY_TYPE',
  'CREATE_SCHEMA',
  'DELETE_ASSOCIATION_TYPE',
  'DELETE_ENTITY_TYPE',
  'DELETE_PROPERTY_TYPE',
  'GET_ALL_ASSOCIATION_ENTITY_TYPES',
  'GET_ALL_ASSOCIATION_TYPES',
  'GET_ALL_ENTITY_TYPES',
  'GET_ALL_PROPERTY_TYPES',
  'GET_ALL_SCHEMAS',
  'GET_ASSOCIATION_TYPE',
  'GET_ENTITY_DATA_MODEL',
  'GET_ENTITY_DATA_MODEL_PROJECTION',
  'GET_ENTITY_TYPE',
  'GET_PROPERTY_TYPE',
  'GET_SCHEMA',
  'REMOVE_DESTINATION_ENTITY_TYPE_FROM_ASSOCIATION_TYPE',
  'REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE',
  'REMOVE_SOURCE_ENTITY_TYPE_FROM_ASSOCIATION_TYPE',
  'UPDATE_ASSOCIATION_TYPE_METADATA',
  'UPDATE_ENTITY_TYPE_METADATA',
  'UPDATE_PROPERTY_TYPE_METADATA',
  'UPDATE_SCHEMA',
]).toJS();

const REQSEQ_NAMES = OrderedSet([
  'addDestinationEntityTypeToAssociationType',
  'addPropertyTypeToEntityType',
  'addSourceEntityTypeToAssociationType',
  'createAssociationType',
  'createEntityType',
  'createPropertyType',
  'createSchema',
  'deleteAssociationType',
  'deleteEntityType',
  'deletePropertyType',
  'getAllAssociationEntityTypes',
  'getAllAssociationTypes',
  'getAllEntityTypes',
  'getAllPropertyTypes',
  'getAllSchemas',
  'getAssociationType',
  'getEntityDataModel',
  'getEntityDataModelProjection',
  'getEntityType',
  'getPropertyType',
  'getSchema',
  'removeDestinationEntityTypeFromAssociationType',
  'removePropertyTypeFromEntityType',
  'removeSourceEntityTypeFromAssociationType',
  'updateAssociationTypeMetaData',
  'updateEntityTypeMetaData',
  'updatePropertyTypeMetaData',
  'updateSchema',
]).toJS();

describe('EntityDataModelApiActions', () => {

  testShouldExportActionTypes(EntityDataModelApiActions, ACTION_TYPES);
  testShouldExportRequestSequences(EntityDataModelApiActions, ACTION_TYPES, REQSEQ_NAMES);
});
