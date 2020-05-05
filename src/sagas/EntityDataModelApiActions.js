/*
 * @flow
 */

/* eslint-disable max-len */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const ADD_DESTINATION_ENTITY_TYPE_TO_ASSOCIATION_TYPE :'ADD_DESTINATION_ENTITY_TYPE_TO_ASSOCIATION_TYPE' = 'ADD_DESTINATION_ENTITY_TYPE_TO_ASSOCIATION_TYPE';
const addDestinationEntityTypeToAssociationType :RequestSequence = newRequestSequence(ADD_DESTINATION_ENTITY_TYPE_TO_ASSOCIATION_TYPE);

const ADD_PROPERTY_TYPE_TO_ENTITY_TYPE :'ADD_PROPERTY_TYPE_TO_ENTITY_TYPE' = 'ADD_PROPERTY_TYPE_TO_ENTITY_TYPE';
const addPropertyTypeToEntityType :RequestSequence = newRequestSequence(ADD_PROPERTY_TYPE_TO_ENTITY_TYPE);

const ADD_SOURCE_ENTITY_TYPE_TO_ASSOCIATION_TYPE :'ADD_SOURCE_ENTITY_TYPE_TO_ASSOCIATION_TYPE' = 'ADD_SOURCE_ENTITY_TYPE_TO_ASSOCIATION_TYPE';
const addSourceEntityTypeToAssociationType :RequestSequence = newRequestSequence(ADD_SOURCE_ENTITY_TYPE_TO_ASSOCIATION_TYPE);

const CREATE_ASSOCIATION_TYPE :'CREATE_ASSOCIATION_TYPE' = 'CREATE_ASSOCIATION_TYPE';
const createAssociationType :RequestSequence = newRequestSequence(CREATE_ASSOCIATION_TYPE);

const CREATE_ENTITY_TYPE :'CREATE_ENTITY_TYPE' = 'CREATE_ENTITY_TYPE';
const createEntityType :RequestSequence = newRequestSequence(CREATE_ENTITY_TYPE);

const CREATE_PROPERTY_TYPE :'CREATE_PROPERTY_TYPE' = 'CREATE_PROPERTY_TYPE';
const createPropertyType :RequestSequence = newRequestSequence(CREATE_PROPERTY_TYPE);

const CREATE_SCHEMA :'CREATE_SCHEMA' = 'CREATE_SCHEMA';
const createSchema :RequestSequence = newRequestSequence(CREATE_SCHEMA);

const DELETE_ASSOCIATION_TYPE :'DELETE_ASSOCIATION_TYPE' = 'DELETE_ASSOCIATION_TYPE';
const deleteAssociationType :RequestSequence = newRequestSequence(DELETE_ASSOCIATION_TYPE);

const DELETE_ENTITY_TYPE :'DELETE_ENTITY_TYPE' = 'DELETE_ENTITY_TYPE';
const deleteEntityType :RequestSequence = newRequestSequence(DELETE_ENTITY_TYPE);

const DELETE_PROPERTY_TYPE :'DELETE_PROPERTY_TYPE' = 'DELETE_PROPERTY_TYPE';
const deletePropertyType :RequestSequence = newRequestSequence(DELETE_PROPERTY_TYPE);

const GET_ALL_ASSOCIATION_ENTITY_TYPES :'GET_ALL_ASSOCIATION_ENTITY_TYPES' = 'GET_ALL_ASSOCIATION_ENTITY_TYPES';
const getAllAssociationEntityTypes :RequestSequence = newRequestSequence(GET_ALL_ASSOCIATION_ENTITY_TYPES);

const GET_ALL_ASSOCIATION_TYPES :'GET_ALL_ASSOCIATION_TYPES' = 'GET_ALL_ASSOCIATION_TYPES';
const getAllAssociationTypes :RequestSequence = newRequestSequence(GET_ALL_ASSOCIATION_TYPES);

const GET_ALL_ENTITY_TYPES :'GET_ALL_ENTITY_TYPES' = 'GET_ALL_ENTITY_TYPES';
const getAllEntityTypes :RequestSequence = newRequestSequence(GET_ALL_ENTITY_TYPES);

const GET_ALL_PROPERTY_TYPES :'GET_ALL_PROPERTY_TYPES' = 'GET_ALL_PROPERTY_TYPES';
const getAllPropertyTypes :RequestSequence = newRequestSequence(GET_ALL_PROPERTY_TYPES);

const GET_ALL_SCHEMAS :'GET_ALL_SCHEMAS' = 'GET_ALL_SCHEMAS';
const getAllSchemas :RequestSequence = newRequestSequence(GET_ALL_SCHEMAS);

const GET_ASSOCIATION_TYPE :'GET_ASSOCIATION_TYPE' = 'GET_ASSOCIATION_TYPE';
const getAssociationType :RequestSequence = newRequestSequence(GET_ASSOCIATION_TYPE);

const GET_ENTITY_DATA_MODEL :'GET_ENTITY_DATA_MODEL' = 'GET_ENTITY_DATA_MODEL';
const getEntityDataModel :RequestSequence = newRequestSequence(GET_ENTITY_DATA_MODEL);

const GET_ENTITY_DATA_MODEL_PROJECTION :'GET_ENTITY_DATA_MODEL_PROJECTION' = 'GET_ENTITY_DATA_MODEL_PROJECTION';
const getEntityDataModelProjection :RequestSequence = newRequestSequence(GET_ENTITY_DATA_MODEL_PROJECTION);

const GET_ENTITY_TYPE :'GET_ENTITY_TYPE' = 'GET_ENTITY_TYPE';
const getEntityType :RequestSequence = newRequestSequence(GET_ENTITY_TYPE);

const GET_PROPERTY_TYPE :'GET_PROPERTY_TYPE' = 'GET_PROPERTY_TYPE';
const getPropertyType :RequestSequence = newRequestSequence(GET_PROPERTY_TYPE);

const GET_SCHEMA :'GET_SCHEMA' = 'GET_SCHEMA';
const getSchema :RequestSequence = newRequestSequence(GET_SCHEMA);

const REMOVE_DESTINATION_ENTITY_TYPE_FROM_ASSOCIATION_TYPE :'REMOVE_DESTINATION_ENTITY_TYPE_FROM_ASSOCIATION_TYPE' = 'REMOVE_DESTINATION_ENTITY_TYPE_FROM_ASSOCIATION_TYPE';
const removeDestinationEntityTypeFromAssociationType :RequestSequence = newRequestSequence(REMOVE_DESTINATION_ENTITY_TYPE_FROM_ASSOCIATION_TYPE);

const REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE :'REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE' = 'REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE';
const removePropertyTypeFromEntityType :RequestSequence = newRequestSequence(REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE);

const REMOVE_SOURCE_ENTITY_TYPE_FROM_ASSOCIATION_TYPE :'REMOVE_SOURCE_ENTITY_TYPE_FROM_ASSOCIATION_TYPE' = 'REMOVE_SOURCE_ENTITY_TYPE_FROM_ASSOCIATION_TYPE';
const removeSourceEntityTypeFromAssociationType :RequestSequence = newRequestSequence(REMOVE_SOURCE_ENTITY_TYPE_FROM_ASSOCIATION_TYPE);

const UPDATE_ASSOCIATION_TYPE_METADATA :'UPDATE_ASSOCIATION_TYPE_METADATA' = 'UPDATE_ASSOCIATION_TYPE_METADATA';
const updateAssociationTypeMetaData :RequestSequence = newRequestSequence(UPDATE_ASSOCIATION_TYPE_METADATA);

const UPDATE_ENTITY_TYPE_METADATA :'UPDATE_ENTITY_TYPE_METADATA' = 'UPDATE_ENTITY_TYPE_METADATA';
const updateEntityTypeMetaData :RequestSequence = newRequestSequence(UPDATE_ENTITY_TYPE_METADATA);

const UPDATE_PROPERTY_TYPE_METADATA :'UPDATE_PROPERTY_TYPE_METADATA' = 'UPDATE_PROPERTY_TYPE_METADATA';
const updatePropertyTypeMetaData :RequestSequence = newRequestSequence(UPDATE_PROPERTY_TYPE_METADATA);

const UPDATE_SCHEMA :'UPDATE_SCHEMA' = 'UPDATE_SCHEMA';
const updateSchema :RequestSequence = newRequestSequence(UPDATE_SCHEMA);

/*
 *
 * exports
 *
 */

export {
  ADD_DESTINATION_ENTITY_TYPE_TO_ASSOCIATION_TYPE,
  ADD_PROPERTY_TYPE_TO_ENTITY_TYPE,
  ADD_SOURCE_ENTITY_TYPE_TO_ASSOCIATION_TYPE,
  CREATE_ASSOCIATION_TYPE,
  CREATE_ENTITY_TYPE,
  CREATE_PROPERTY_TYPE,
  CREATE_SCHEMA,
  DELETE_ASSOCIATION_TYPE,
  DELETE_ENTITY_TYPE,
  DELETE_PROPERTY_TYPE,
  GET_ALL_ASSOCIATION_ENTITY_TYPES,
  GET_ALL_ASSOCIATION_TYPES,
  GET_ALL_ENTITY_TYPES,
  GET_ALL_PROPERTY_TYPES,
  GET_ALL_SCHEMAS,
  GET_ASSOCIATION_TYPE,
  GET_ENTITY_DATA_MODEL,
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  GET_SCHEMA,
  REMOVE_DESTINATION_ENTITY_TYPE_FROM_ASSOCIATION_TYPE,
  REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE,
  REMOVE_SOURCE_ENTITY_TYPE_FROM_ASSOCIATION_TYPE,
  UPDATE_ASSOCIATION_TYPE_METADATA,
  UPDATE_ENTITY_TYPE_METADATA,
  UPDATE_PROPERTY_TYPE_METADATA,
  UPDATE_SCHEMA,
  addDestinationEntityTypeToAssociationType,
  addPropertyTypeToEntityType,
  addSourceEntityTypeToAssociationType,
  createAssociationType,
  createEntityType,
  createPropertyType,
  createSchema,
  deleteAssociationType,
  deleteEntityType,
  deletePropertyType,
  getAllAssociationEntityTypes,
  getAllAssociationTypes,
  getAllEntityTypes,
  getAllPropertyTypes,
  getAllSchemas,
  getAssociationType,
  getEntityDataModel,
  getEntityDataModelProjection,
  getEntityType,
  getPropertyType,
  getSchema,
  removeDestinationEntityTypeFromAssociationType,
  removePropertyTypeFromEntityType,
  removeSourceEntityTypeFromAssociationType,
  updateAssociationTypeMetaData,
  updateEntityTypeMetaData,
  updatePropertyTypeMetaData,
  updateSchema,
};
