/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';

const GET_CURRENT_SYNC_ID :'GET_CURRENT_SYNC_ID' = 'GET_CURRENT_SYNC_ID';
const getCurrentSyncId :RequestSequence = newRequestSequence(GET_CURRENT_SYNC_ID);

export {
  GET_CURRENT_SYNC_ID,
  getCurrentSyncId
};
