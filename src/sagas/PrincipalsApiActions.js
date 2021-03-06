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

const GET_USERS :'GET_USERS' = 'GET_USERS';
const getUsers :RequestSequence = newRequestSequence(GET_USERS);

const REGENERATE_CREDENTIAL :'REGENERATE_CREDENTIAL' = 'REGENERATE_CREDENTIAL';
const regenerateCredential :RequestSequence = newRequestSequence(REGENERATE_CREDENTIAL);

const SEARCH_USERS :'SEARCH_USERS' = 'SEARCH_USERS';
const searchUsers :RequestSequence = newRequestSequence(SEARCH_USERS);

const SYNC_USER :'SYNC_USER' = 'SYNC_USER';
const syncUser :RequestSequence = newRequestSequence(SYNC_USER);

export {
  GET_ALL_ROLES,
  GET_ALL_USERS,
  GET_ATLAS_CREDENTIALS,
  GET_CURRENT_ROLES,
  GET_SECURABLE_PRINCIPAL,
  GET_USER,
  GET_USERS,
  REGENERATE_CREDENTIAL,
  SEARCH_USERS,
  SYNC_USER,
  getAllRoles,
  getAllUsers,
  getAtlasCredentials,
  getCurrentRoles,
  getSecurablePrincipal,
  getUser,
  getUsers,
  regenerateCredential,
  searchUsers,
  syncUser,
};
