import Immutable from 'immutable';

import * as EntityDataModelApiActionFactory from './EntityDataModelApiActionFactory';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Immutable.List([
  'ADD_DST_ET_TO_AT',
  'ADD_PROPERTY_TYPE_TO_ENTITY_TYPE',
  'ADD_SRC_ET_TO_AT',
  'CREATE_ASSOCIATION_TYPE',
  'CREATE_ENTITY_TYPE',
  'CREATE_PROPERTY_TYPE',
  'CREATE_SCHEMA',
  'DELETE_ASSOCIATION_TYPE',
  'DELETE_ENTITY_TYPE',
  'DELETE_PROPERTY_TYPE',
  'GET_ALL_ASSOCIATION_TYPES',
  'GET_ALL_ENTITY_TYPES',
  'GET_ALL_PROPERTY_TYPES',
  'GET_ALL_SCHEMAS',
  'GET_ENTITY_DATA_MODEL',
  'GET_ENTITY_DATA_MODEL_PROJECTION',
  'GET_ENTITY_SET',
  'GET_ENTITY_SET_ID',
  'GET_ENTITY_TYPE',
  'GET_PROPERTY_TYPE',
  'RM_DST_ET_FROM_AT',
  'RM_PROPERTY_TYPE_FROM_ENTITY_TYPE',
  'RM_SRC_ET_FROM_AT',
  'UPDATE_ASSOCIATION_TYPE_METADATA',
  'UPDATE_ENTITY_SET_METADATA',
  'UPDATE_ENTITY_TYPE_METADATA',
  'UPDATE_PROPERTY_TYPE_METADATA',
  'UPDATE_SCHEMA'
]).sort();

const REQSEQ_NAMES = Immutable.List([
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
  'getAllAssociationTypes',
  'getAllEntityTypes',
  'getAllPropertyTypes',
  'getAllSchemas',
  'getEntityDataModel',
  'getEntityDataModelProjection',
  'getEntitySet',
  'getEntitySetId',
  'getEntityType',
  'getPropertyType',
  'removeDestinationEntityTypeFromAssociationType',
  'removePropertyTypeFromEntityType',
  'removeSourceEntityTypeFromAssociationType',
  'updateAssociationTypeMetaData',
  'updateEntitySetMetaData',
  'updateEntityTypeMetaData',
  'updatePropertyTypeMetaData',
  'updateSchema'
]).sort();

describe('EntityDataModelApiActionFactory', () => {

  testShouldExportActionTypes(EntityDataModelApiActionFactory, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(EntityDataModelApiActionFactory, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
