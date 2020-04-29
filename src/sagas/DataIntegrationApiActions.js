/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const GET_ENTITY_KEY_IDS :'GET_ENTITY_KEY_IDS' = 'GET_ENTITY_KEY_IDS';
const getEntityKeyIds :RequestSequence = newRequestSequence(GET_ENTITY_KEY_IDS);

export {
  GET_ENTITY_KEY_IDS,
  getEntityKeyIds,
};
