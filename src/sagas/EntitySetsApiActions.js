/*
 * @flow
 */

/* eslint-disable max-len */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const CREATE_ENTITY_SETS :'CREATE_ENTITY_SETS' = 'CREATE_ENTITY_SETS';
const createEntitySets :RequestSequence = newRequestSequence(CREATE_ENTITY_SETS);

const DELETE_ENTITY_SET :'DELETE_ENTITY_SET' = 'DELETE_ENTITY_SET';
const deleteEntitySet :RequestSequence = newRequestSequence(DELETE_ENTITY_SET);

const GET_ALL_ENTITY_SETS :'GET_ALL_ENTITY_SETS' = 'GET_ALL_ENTITY_SETS';
const getAllEntitySets :RequestSequence = newRequestSequence(GET_ALL_ENTITY_SETS);

const GET_ENTITY_SET :'GET_ENTITY_SET' = 'GET_ENTITY_SET';
const getEntitySet :RequestSequence = newRequestSequence(GET_ENTITY_SET);

const GET_ENTITY_SET_ID :'GET_ENTITY_SET_ID' = 'GET_ENTITY_SET_ID';
const getEntitySetId :RequestSequence = newRequestSequence(GET_ENTITY_SET_ID);

const GET_ENTITY_SET_IDS :'GET_ENTITY_SET_IDS' = 'GET_ENTITY_SET_IDS';
const getEntitySetIds :RequestSequence = newRequestSequence(GET_ENTITY_SET_IDS);

const GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SET :'GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SET' = 'GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SET';
const getPropertyTypeMetaDataForEntitySet :RequestSequence = newRequestSequence(GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SET);

const GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SETS :'GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SETS' = 'GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SETS';
const getPropertyTypeMetaDataForEntitySets :RequestSequence = newRequestSequence(GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SETS);

export {
  CREATE_ENTITY_SETS,
  DELETE_ENTITY_SET,
  GET_ALL_ENTITY_SETS,
  GET_ENTITY_SET,
  GET_ENTITY_SET_ID,
  GET_ENTITY_SET_IDS,
  GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SET,
  GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SETS,
  createEntitySets,
  deleteEntitySet,
  getAllEntitySets,
  getEntitySet,
  getEntitySetId,
  getEntitySetIds,
  getPropertyTypeMetaDataForEntitySet,
  getPropertyTypeMetaDataForEntitySets,
};
