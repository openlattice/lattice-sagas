/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';

const GET_ENTITY_SET_DATA :'GET_ENTITY_SET_DATA' = 'GET_ENTITY_SET_DATA';
const getEntitySetData :RequestSequence = newRequestSequence(GET_ENTITY_SET_DATA);

export {
  GET_ENTITY_SET_DATA,
  getEntitySetData
};
