/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const ADD_AUTO_APPROVED_DOMAIN :'ADD_AUTO_APPROVED_DOMAIN' = 'ADD_AUTO_APPROVED_DOMAIN';
const addAutoApprovedDomain :RequestSequence = newRequestSequence(ADD_AUTO_APPROVED_DOMAIN);

const GET_ALL_ORGANIZATIONS :'GET_ALL_ORGANIZATIONS' = 'GET_ALL_ORGANIZATIONS';
const getAllOrganizations :RequestSequence = newRequestSequence(GET_ALL_ORGANIZATIONS);

const GET_ORGANIZATION :'GET_ORGANIZATION' = 'GET_ORGANIZATION';
const getOrganization :RequestSequence = newRequestSequence(GET_ORGANIZATION);

const REMOVE_AUTO_APPROVED_DOMAIN :'REMOVE_AUTO_APPROVED_DOMAIN' = 'REMOVE_AUTO_APPROVED_DOMAIN';
const removeAutoApprovedDomain :RequestSequence = newRequestSequence(REMOVE_AUTO_APPROVED_DOMAIN);

export {
  ADD_AUTO_APPROVED_DOMAIN,
  GET_ALL_ORGANIZATIONS,
  GET_ORGANIZATION,
  REMOVE_AUTO_APPROVED_DOMAIN,
  addAutoApprovedDomain,
  getAllOrganizations,
  getOrganization,
  removeAutoApprovedDomain,
};
