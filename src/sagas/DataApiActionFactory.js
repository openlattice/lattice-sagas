/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';

const ACQUIRE_SYNC_TICKET :'ACQUIRE_SYNC_TICKET' = 'ACQUIRE_SYNC_TICKET';
const acquireSyncTicket :RequestSequence = newRequestSequence(ACQUIRE_SYNC_TICKET);

const CREATE_ENTITY_AND_ASSOCIATION_DATA :'CREATE_ENTITY_AND_ASSOCIATION_DATA' = 'CREATE_ENTITY_AND_ASSOCIATION_DATA';
const createEntityAndAssociationData :RequestSequence = newRequestSequence(CREATE_ENTITY_AND_ASSOCIATION_DATA);

export {
  ACQUIRE_SYNC_TICKET,
  CREATE_ENTITY_AND_ASSOCIATION_DATA,
  acquireSyncTicket,
  createEntityAndAssociationData
};
