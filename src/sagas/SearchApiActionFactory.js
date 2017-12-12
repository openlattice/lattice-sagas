/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';

const SEARCH_ENTITY_NEIGHBORS :'SEARCH_ENTITY_NEIGHBORS' = 'SEARCH_ENTITY_NEIGHBORS';
const searchEntityNeighbors :RequestSequence = newRequestSequence(SEARCH_ENTITY_NEIGHBORS);

const SEARCH_ENTITY_SET_DATA :'SEARCH_ENTITY_SET_DATA' = 'SEARCH_ENTITY_SET_DATA';
const searchEntitySetData :RequestSequence = newRequestSequence(SEARCH_ENTITY_SET_DATA);

export {
  SEARCH_ENTITY_NEIGHBORS,
  SEARCH_ENTITY_SET_DATA,
  searchEntityNeighbors,
  searchEntitySetData
};
