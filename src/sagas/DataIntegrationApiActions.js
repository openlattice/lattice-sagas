/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const CREATE_ENTITY_AND_ASSOCIATION_DATA :'CREATE_ENTITY_AND_ASSOCIATION_DATA' = 'CREATE_ENTITY_AND_ASSOCIATION_DATA';
const createEntityAndAssociationData :RequestSequence = newRequestSequence(CREATE_ENTITY_AND_ASSOCIATION_DATA);

const GET_ENTITY_KEY_IDS :'GET_ENTITY_KEY_IDS' = 'GET_ENTITY_KEY_IDS';
const getEntityKeyIds :RequestSequence = newRequestSequence(GET_ENTITY_KEY_IDS);

export {
  CREATE_ENTITY_AND_ASSOCIATION_DATA,
  GET_ENTITY_KEY_IDS,
  createEntityAndAssociationData,
  getEntityKeyIds,
};
