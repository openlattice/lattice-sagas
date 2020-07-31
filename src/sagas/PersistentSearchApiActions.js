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

const UPDATE_PERSISTENT_SEARCH_EXPIRATION :'UPDATE_PERSISTENT_SEARCH_EXPIRATION' = 'UPDATE_PERSISTENT_SEARCH_EXPIRATION';
const updatePersistentSearchExpiration :RequestSequence = newRequestSequence(UPDATE_PERSISTENT_SEARCH_EXPIRATION);

export {
  CREATE_PERSISTENT_SEARCH,
  EXPIRE_PERSISTENT_SEARCH,
  GET_PERSISTENT_SEARCHES,
  UPDATE_PERSISTENT_SEARCH_EXPIRATION,
  createPersistentSearch,
  expirePersistentSearch,
  getPersistentSearches,
  updatePersistentSearchExpiration,
};
