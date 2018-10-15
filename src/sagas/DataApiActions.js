/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';

const CLEAR_ENTITY_FROM_ENTITY_SET :'CLEAR_ENTITY_FROM_ENTITY_SET' = 'CLEAR_ENTITY_FROM_ENTITY_SET';
const clearEntityFromEntitySet :RequestSequence = newRequestSequence(CLEAR_ENTITY_FROM_ENTITY_SET);

const CREATE_ENTITY_AND_ASSOCIATION_DATA :'CREATE_ENTITY_AND_ASSOCIATION_DATA' = 'CREATE_ENTITY_AND_ASSOCIATION_DATA';
const createEntityAndAssociationData :RequestSequence = newRequestSequence(CREATE_ENTITY_AND_ASSOCIATION_DATA);

const CREATE_OR_MERGE_ENTITY_DATA :'CREATE_OR_MERGE_ENTITY_DATA' = 'CREATE_OR_MERGE_ENTITY_DATA';
const createOrMergeEntityData :RequestSequence = newRequestSequence(CREATE_OR_MERGE_ENTITY_DATA);

const GET_ENTITY_DATA :'GET_ENTITY_DATA' = 'GET_ENTITY_DATA';
const getEntityData :RequestSequence = newRequestSequence(GET_ENTITY_DATA);

const GET_ENTITY_SET_DATA :'GET_ENTITY_SET_DATA' = 'GET_ENTITY_SET_DATA';
const getEntitySetData :RequestSequence = newRequestSequence(GET_ENTITY_SET_DATA);

const UPDATE_ENTITY_DATA :'UPDATE_ENTITY_DATA' = 'UPDATE_ENTITY_DATA';
const updateEntityData :RequestSequence = newRequestSequence(UPDATE_ENTITY_DATA);

export {
  CLEAR_ENTITY_FROM_ENTITY_SET,
  CREATE_ENTITY_AND_ASSOCIATION_DATA,
  CREATE_OR_MERGE_ENTITY_DATA,
  GET_ENTITY_DATA,
  GET_ENTITY_SET_DATA,
  UPDATE_ENTITY_DATA,
  clearEntityFromEntitySet,
  createEntityAndAssociationData,
  createOrMergeEntityData,
  getEntityData,
  getEntitySetData,
  updateEntityData,
};
