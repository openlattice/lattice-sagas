/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const ADD_AUTO_APPROVED_DOMAIN :'ADD_AUTO_APPROVED_DOMAIN' = 'ADD_AUTO_APPROVED_DOMAIN';
const addAutoApprovedDomain :RequestSequence = newRequestSequence(ADD_AUTO_APPROVED_DOMAIN);

const CREATE_ROLE :'CREATE_ROLE' = 'CREATE_ROLE';
const createRole :RequestSequence = newRequestSequence(CREATE_ROLE);

const GET_ALL_ORGANIZATIONS :'GET_ALL_ORGANIZATIONS' = 'GET_ALL_ORGANIZATIONS';
const getAllOrganizations :RequestSequence = newRequestSequence(GET_ALL_ORGANIZATIONS);

const GET_ORGANIZATION :'GET_ORGANIZATION' = 'GET_ORGANIZATION';
const getOrganization :RequestSequence = newRequestSequence(GET_ORGANIZATION);

const REMOVE_AUTO_APPROVED_DOMAIN :'REMOVE_AUTO_APPROVED_DOMAIN' = 'REMOVE_AUTO_APPROVED_DOMAIN';
const removeAutoApprovedDomain :RequestSequence = newRequestSequence(REMOVE_AUTO_APPROVED_DOMAIN);

export {
  ADD_AUTO_APPROVED_DOMAIN,
  CREATE_ROLE,
  GET_ALL_ORGANIZATIONS,
  GET_ORGANIZATION,
  REMOVE_AUTO_APPROVED_DOMAIN,
  addAutoApprovedDomain,
  createRole,
  getAllOrganizations,
  getOrganization,
  removeAutoApprovedDomain,
};
