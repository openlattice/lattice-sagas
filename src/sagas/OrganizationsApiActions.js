/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const ADD_DOMAIN_TO_ORG :'ADD_DOMAIN_TO_ORG' = 'ADD_DOMAIN_TO_ORG';
const addDomainToOrganization :RequestSequence = newRequestSequence(ADD_DOMAIN_TO_ORG);

const ADD_MEMBER_TO_ORG :'ADD_MEMBER_TO_ORG' = 'ADD_MEMBER_TO_ORG';
const addMemberToOrganization :RequestSequence = newRequestSequence(ADD_MEMBER_TO_ORG);

const CREATE_ROLE :'CREATE_ROLE' = 'CREATE_ROLE';
const createRole :RequestSequence = newRequestSequence(CREATE_ROLE);

const DELETE_ORGANIZATION :'DELETE_ORGANIZATION' = 'DELETE_ORGANIZATION';
const deleteOrganization :RequestSequence = newRequestSequence(DELETE_ORGANIZATION);

const DELETE_ROLE :'DELETE_ROLE' = 'DELETE_ROLE';
const deleteRole :RequestSequence = newRequestSequence(DELETE_ROLE);

const GET_ALL_ORGANIZATIONS :'GET_ALL_ORGANIZATIONS' = 'GET_ALL_ORGANIZATIONS';
const getAllOrganizations :RequestSequence = newRequestSequence(GET_ALL_ORGANIZATIONS);

const GET_ORGANIZATION :'GET_ORGANIZATION' = 'GET_ORGANIZATION';
const getOrganization :RequestSequence = newRequestSequence(GET_ORGANIZATION);

const GET_ORG_INTEGRATION_ACCOUNT :'GET_ORG_INTEGRATION_ACCOUNT' = 'GET_ORG_INTEGRATION_ACCOUNT';
const getOrganizationIntegrationAccount :RequestSequence = newRequestSequence(GET_ORG_INTEGRATION_ACCOUNT);

const GET_ORG_MEMBERS :'GET_ORG_MEMBERS' = 'GET_ORG_MEMBERS';
const getOrganizationMembers :RequestSequence = newRequestSequence(GET_ORG_MEMBERS);

const REMOVE_DOMAIN_FROM_ORG :'REMOVE_DOMAIN_FROM_ORG' = 'REMOVE_DOMAIN_FROM_ORG';
const removeDomainFromOrganization :RequestSequence = newRequestSequence(REMOVE_DOMAIN_FROM_ORG);

const REMOVE_MEMBER_FROM_ORG :'REMOVE_MEMBER_FROM_ORG' = 'REMOVE_MEMBER_FROM_ORG';
const removeMemberFromOrganization :RequestSequence = newRequestSequence(REMOVE_MEMBER_FROM_ORG);

export {
  ADD_DOMAIN_TO_ORG,
  ADD_MEMBER_TO_ORG,
  CREATE_ROLE,
  DELETE_ORGANIZATION,
  DELETE_ROLE,
  GET_ALL_ORGANIZATIONS,
  GET_ORGANIZATION,
  GET_ORG_INTEGRATION_ACCOUNT,
  GET_ORG_MEMBERS,
  REMOVE_DOMAIN_FROM_ORG,
  REMOVE_MEMBER_FROM_ORG,
  addDomainToOrganization,
  addMemberToOrganization,
  createRole,
  deleteOrganization,
  deleteRole,
  getAllOrganizations,
  getOrganization,
  getOrganizationIntegrationAccount,
  getOrganizationMembers,
  removeDomainFromOrganization,
  removeMemberFromOrganization,
};
