/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';

const SEARCH_ENTITY_SET_DATA :'SEARCH_ENTITY_SET_DATA' = 'SEARCH_ENTITY_SET_DATA';
const searchEntitySetData :RequestSequence = newRequestSequence(SEARCH_ENTITY_SET_DATA);

export {
  SEARCH_ENTITY_SET_DATA,
  searchEntitySetData
};
