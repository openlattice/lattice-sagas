/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';

const ACQUIRE_SYNC_TICKET :'ACQUIRE_SYNC_TICKET' = 'ACQUIRE_SYNC_TICKET';
const acquireSyncTicket :RequestSequence = newRequestSequence(ACQUIRE_SYNC_TICKET);

const GET_ENTITY_SET_DATA :'GET_ENTITY_SET_DATA' = 'GET_ENTITY_SET_DATA';
const getEntitySetData :RequestSequence = newRequestSequence(GET_ENTITY_SET_DATA);

export {
  ACQUIRE_SYNC_TICKET,
  GET_ENTITY_SET_DATA,
  acquireSyncTicket,
  getEntitySetData
};
