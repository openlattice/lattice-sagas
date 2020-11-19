/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const GET_ALL_ROLES :'GET_ALL_ROLES' = 'GET_ALL_ROLES';
const getAllRoles :RequestSequence = newRequestSequence(GET_ALL_ROLES);

const GET_ALL_USERS :'GET_ALL_USERS' = 'GET_ALL_USERS';
const getAllUsers :RequestSequence = newRequestSequence(GET_ALL_USERS);

const GET_ATLAS_CREDENTIALS :'GET_ATLAS_CREDENTIALS' = 'GET_ATLAS_CREDENTIALS';
const getAtlasCredentials :RequestSequence = newRequestSequence(GET_ATLAS_CREDENTIALS);

const GET_CURRENT_ROLES :'GET_CURRENT_ROLES' = 'GET_CURRENT_ROLES';
const getCurrentRoles :RequestSequence = newRequestSequence(GET_CURRENT_ROLES);

const GET_SECURABLE_PRINCIPAL :'GET_SECURABLE_PRINCIPAL' = 'GET_SECURABLE_PRINCIPAL';
const getSecurablePrincipal :RequestSequence = newRequestSequence(GET_SECURABLE_PRINCIPAL);

const GET_USER :'GET_USER' = 'GET_USER';
const getUser :RequestSequence = newRequestSequence(GET_USER);

const SEARCH_ALL_USERS :'SEARCH_ALL_USERS' = 'SEARCH_ALL_USERS';
const searchAllUsers :RequestSequence = newRequestSequence(SEARCH_ALL_USERS);

const SYNC_USER :'SYNC_USER' = 'SYNC_USER';
const syncUser :RequestSequence = newRequestSequence(SYNC_USER);

export {
  GET_ALL_ROLES,
  GET_ALL_USERS,
  GET_ATLAS_CREDENTIALS,
  GET_CURRENT_ROLES,
  GET_SECURABLE_PRINCIPAL,
  GET_USER,
  SEARCH_ALL_USERS,
  SYNC_USER,
  getAllRoles,
  getAllUsers,
  getAtlasCredentials,
  getCurrentRoles,
  getSecurablePrincipal,
  getUser,
  searchAllUsers,
  syncUser,
};
