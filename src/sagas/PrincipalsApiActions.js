/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const GET_SECURABLE_PRINCIPAL :'GET_SECURABLE_PRINCIPAL' = 'GET_SECURABLE_PRINCIPAL';
const getSecurablePrincipal :RequestSequence = newRequestSequence(GET_SECURABLE_PRINCIPAL);

const SEARCH_ALL_USERS :'SEARCH_ALL_USERS' = 'SEARCH_ALL_USERS';
const searchAllUsers :RequestSequence = newRequestSequence(SEARCH_ALL_USERS);

export {
  GET_SECURABLE_PRINCIPAL,
  SEARCH_ALL_USERS,
  getSecurablePrincipal,
  searchAllUsers,
};
