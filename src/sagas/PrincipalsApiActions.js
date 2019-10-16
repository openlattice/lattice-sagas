/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const GET_ALL_USERS :'GET_ALL_USERS' = 'GET_ALL_USERS';
const getAllUsers :RequestSequence = newRequestSequence(GET_ALL_USERS);

const GET_CURRENT_ROLES :'GET_CURRENT_ROLES' = 'GET_CURRENT_ROLES';
const getCurrentRoles :RequestSequence = newRequestSequence(GET_CURRENT_ROLES);

const GET_SECURABLE_PRINCIPAL :'GET_SECURABLE_PRINCIPAL' = 'GET_SECURABLE_PRINCIPAL';
const getSecurablePrincipal :RequestSequence = newRequestSequence(GET_SECURABLE_PRINCIPAL);

const SEARCH_ALL_USERS :'SEARCH_ALL_USERS' = 'SEARCH_ALL_USERS';
const searchAllUsers :RequestSequence = newRequestSequence(SEARCH_ALL_USERS);

export {
  GET_ALL_USERS,
  GET_CURRENT_ROLES,
  GET_SECURABLE_PRINCIPAL,
  SEARCH_ALL_USERS,
  getAllUsers,
  getCurrentRoles,
  getSecurablePrincipal,
  searchAllUsers,
};
