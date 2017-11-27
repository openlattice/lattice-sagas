/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';

/*
 *
 * Entity Data Model APIs
 *
 */

const GET_ENTITY_DATA_MODEL :'GET_ENTITY_DATA_MODEL' = 'GET_ENTITY_DATA_MODEL';
const getEntityDataModel :RequestSequence = newRequestSequence(GET_ENTITY_DATA_MODEL);

const GET_ENTITY_DATA_MODEL_PROJECTION :'GET_ENTITY_DATA_MODEL_PROJECTION' = 'GET_ENTITY_DATA_MODEL_PROJECTION';
const getEntityDataModelProjection :RequestSequence = newRequestSequence(GET_ENTITY_DATA_MODEL_PROJECTION);

/*
 *
 * EntitySet APIs
 *
 */

const GET_ENTITY_SET :'GET_ENTITY_SET' = 'GET_ENTITY_SET';
const getEntitySet :RequestSequence = newRequestSequence(GET_ENTITY_SET);

const GET_ENTITY_SET_ID :'GET_ENTITY_SET_ID' = 'GET_ENTITY_SET_ID';
const getEntitySetId :RequestSequence = newRequestSequence(GET_ENTITY_SET_ID);

/*
 *
 * EntityType APIs
 *
 */

const GET_ALL_ENTITY_TYPES :'GET_ALL_ENTITY_TYPES' = 'GET_ALL_ENTITY_TYPES';
const getAllEntityTypes :RequestSequence = newRequestSequence(GET_ALL_ENTITY_TYPES);

const GET_ENTITY_TYPE :'GET_ENTITY_TYPE' = 'GET_ENTITY_TYPE';
const getEntityType :RequestSequence = newRequestSequence(GET_ENTITY_TYPE);

/*
 *
 * PropertyType APIs
 *
 */

const GET_ALL_PROPERTY_TYPES :'GET_ALL_PROPERTY_TYPES' = 'GET_ALL_PROPERTY_TYPES';
const getAllPropertyTypes :RequestSequence = newRequestSequence(GET_ALL_PROPERTY_TYPES);

const GET_PROPERTY_TYPE :'GET_PROPERTY_TYPE' = 'GET_PROPERTY_TYPE';
const getPropertyType :RequestSequence = newRequestSequence(GET_PROPERTY_TYPE);

/*
 *
 * AssociationType APIs
 *
 */

const GET_ALL_ASSOCIATION_TYPES :'GET_ALL_ASSOCIATION_TYPES' = 'GET_ALL_ASSOCIATION_TYPES';
const getAllAssociationTypes :RequestSequence = newRequestSequence(GET_ALL_ASSOCIATION_TYPES);

/*
 *
 * exports
 *
 */

export {
  GET_ALL_ASSOCIATION_TYPES,
  GET_ALL_ENTITY_TYPES,
  GET_ALL_PROPERTY_TYPES,
  GET_ENTITY_DATA_MODEL,
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_SET,
  GET_ENTITY_SET_ID,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  getAllAssociationTypes,
  getAllEntityTypes,
  getAllPropertyTypes,
  getEntityDataModel,
  getEntityDataModelProjection,
  getEntitySet,
  getEntitySetId,
  getEntityType,
  getPropertyType
};
