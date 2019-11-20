/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const ADD_DOMAIN_TO_ORG :'ADD_DOMAIN_TO_ORG' = 'ADD_DOMAIN_TO_ORG';
const addDomainToOrganization :RequestSequence = newRequestSequence(ADD_DOMAIN_TO_ORG);

const ADD_MEMBER_TO_ORG :'ADD_MEMBER_TO_ORG' = 'ADD_MEMBER_TO_ORG';
const addMemberToOrganization :RequestSequence = newRequestSequence(ADD_MEMBER_TO_ORG);

const ADD_ROLE_TO_MEMBER :'ADD_ROLE_TO_MEMBER' = 'ADD_ROLE_TO_MEMBER';
const addRoleToMember :RequestSequence = newRequestSequence(ADD_ROLE_TO_MEMBER);

const CREATE_ORGANIZATION :'CREATE_ORGANIZATION' = 'CREATE_ORGANIZATION';
const createOrganization :RequestSequence = newRequestSequence(CREATE_ORGANIZATION);

const CREATE_ROLE :'CREATE_ROLE' = 'CREATE_ROLE';
const createRole :RequestSequence = newRequestSequence(CREATE_ROLE);

const DELETE_ORGANIZATION :'DELETE_ORGANIZATION' = 'DELETE_ORGANIZATION';
const deleteOrganization :RequestSequence = newRequestSequence(DELETE_ORGANIZATION);

const DELETE_ROLE :'DELETE_ROLE' = 'DELETE_ROLE';
const deleteRole :RequestSequence = newRequestSequence(DELETE_ROLE);

const GET_ALL_ORGANIZATIONS :'GET_ALL_ORGANIZATIONS' = 'GET_ALL_ORGANIZATIONS';
const getAllOrganizations :RequestSequence = newRequestSequence(GET_ALL_ORGANIZATIONS);

const GET_ALL_USERS_OF_ROLE :'GET_ALL_USERS_OF_ROLE' = 'GET_ALL_USERS_OF_ROLE';
const getAllUsersOfRole :RequestSequence = newRequestSequence(GET_ALL_USERS_OF_ROLE);

const GET_ORGANIZATION :'GET_ORGANIZATION' = 'GET_ORGANIZATION';
const getOrganization :RequestSequence = newRequestSequence(GET_ORGANIZATION);

const GET_ORG_ENTITY_SETS :'GET_ORG_ENTITY_SETS' = 'GET_ORG_ENTITY_SETS';
const getOrganizationEntitySets :RequestSequence = newRequestSequence(GET_ORG_ENTITY_SETS);

const GET_ORG_INTEGRATION_ACCOUNT :'GET_ORG_INTEGRATION_ACCOUNT' = 'GET_ORG_INTEGRATION_ACCOUNT';
const getOrganizationIntegrationAccount :RequestSequence = newRequestSequence(GET_ORG_INTEGRATION_ACCOUNT);

const GET_ORG_MEMBERS :'GET_ORG_MEMBERS' = 'GET_ORG_MEMBERS';
const getOrganizationMembers :RequestSequence = newRequestSequence(GET_ORG_MEMBERS);

const GRANT_TRUST_TO_ORG :'GRANT_TRUST_TO_ORG' = 'GRANT_TRUST_TO_ORG';
const grantTrustToOrganization :RequestSequence = newRequestSequence(GRANT_TRUST_TO_ORG);

const REMOVE_DOMAIN_FROM_ORG :'REMOVE_DOMAIN_FROM_ORG' = 'REMOVE_DOMAIN_FROM_ORG';
const removeDomainFromOrganization :RequestSequence = newRequestSequence(REMOVE_DOMAIN_FROM_ORG);

const REMOVE_MEMBER_FROM_ORG :'REMOVE_MEMBER_FROM_ORG' = 'REMOVE_MEMBER_FROM_ORG';
const removeMemberFromOrganization :RequestSequence = newRequestSequence(REMOVE_MEMBER_FROM_ORG);

const REMOVE_ROLE_FROM_MEMBER :'REMOVE_ROLE_FROM_MEMBER' = 'REMOVE_ROLE_FROM_MEMBER';
const removeRoleFromMember :RequestSequence = newRequestSequence(REMOVE_ROLE_FROM_MEMBER);

const REVOKE_TRUST_FROM_ORG :'REVOKE_TRUST_FROM_ORG' = 'REVOKE_TRUST_FROM_ORG';
const revokeTrustFromOrganization :RequestSequence = newRequestSequence(REVOKE_TRUST_FROM_ORG);

const UPDATE_ORG_DESCRIPTION :'UPDATE_ORG_DESCRIPTION' = 'UPDATE_ORG_DESCRIPTION';
const updateOrganizationDescription :RequestSequence = newRequestSequence(UPDATE_ORG_DESCRIPTION);

const UPDATE_ORG_TITLE :'UPDATE_ORG_TITLE' = 'UPDATE_ORG_TITLE';
const updateOrganizationTitle :RequestSequence = newRequestSequence(UPDATE_ORG_TITLE);

const UPDATE_ROLE_GRANT :'UPDATE_ROLE_GRANT' = 'UPDATE_ROLE_GRANT';
const updateRoleGrant :RequestSequence = newRequestSequence(UPDATE_ROLE_GRANT);

export {
  ADD_DOMAIN_TO_ORG,
  ADD_MEMBER_TO_ORG,
  ADD_ROLE_TO_MEMBER,
  CREATE_ORGANIZATION,
  CREATE_ROLE,
  DELETE_ORGANIZATION,
  DELETE_ROLE,
  GET_ALL_ORGANIZATIONS,
  GET_ALL_USERS_OF_ROLE,
  GET_ORGANIZATION,
  GET_ORG_ENTITY_SETS,
  GET_ORG_INTEGRATION_ACCOUNT,
  GET_ORG_MEMBERS,
  GRANT_TRUST_TO_ORG,
  REMOVE_DOMAIN_FROM_ORG,
  REMOVE_MEMBER_FROM_ORG,
  REMOVE_ROLE_FROM_MEMBER,
  REVOKE_TRUST_FROM_ORG,
  UPDATE_ORG_DESCRIPTION,
  UPDATE_ORG_TITLE,
  UPDATE_ROLE_GRANT,
  addDomainToOrganization,
  addMemberToOrganization,
  addRoleToMember,
  createOrganization,
  createRole,
  deleteOrganization,
  deleteRole,
  getAllOrganizations,
  getAllUsersOfRole,
  getOrganization,
  getOrganizationEntitySets,
  getOrganizationIntegrationAccount,
  getOrganizationMembers,
  grantTrustToOrganization,
  removeDomainFromOrganization,
  removeMemberFromOrganization,
  removeRoleFromMember,
  revokeTrustFromOrganization,
  updateOrganizationDescription,
  updateOrganizationTitle,
  updateRoleGrant,
};
