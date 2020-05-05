/*
 * @flow
 */

/* eslint-disable max-len */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const CREATE_PERSISTENT_SEARCH :'CREATE_PERSISTENT_SEARCH' = 'CREATE_PERSISTENT_SEARCH';
const createPersistentSearch :RequestSequence = newRequestSequence(CREATE_PERSISTENT_SEARCH);

const EXPIRE_PERSISTENT_SEARCH :'EXPIRE_PERSISTENT_SEARCH' = 'EXPIRE_PERSISTENT_SEARCH';
const expirePersistentSearch :RequestSequence = newRequestSequence(EXPIRE_PERSISTENT_SEARCH);

const GET_PERSISTENT_SEARCHES :'GET_PERSISTENT_SEARCHES' = 'GET_PERSISTENT_SEARCHES';
const getPersistentSearches :RequestSequence = newRequestSequence(GET_PERSISTENT_SEARCHES);

export {
  CREATE_PERSISTENT_SEARCH,
  EXPIRE_PERSISTENT_SEARCH,
  GET_PERSISTENT_SEARCHES,
  createPersistentSearch,
  expirePersistentSearch,
  getPersistentSearches,
};
