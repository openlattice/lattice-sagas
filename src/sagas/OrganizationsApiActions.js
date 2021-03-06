/*
 * @flow
 */

/* eslint-disable max-len */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const ADD_CONNECTIONS_TO_ORGANIZATION :'ADD_CONNECTIONS_TO_ORGANIZATION' = 'ADD_CONNECTIONS_TO_ORGANIZATION';
const addConnectionsToOrganization :RequestSequence = newRequestSequence(ADD_CONNECTIONS_TO_ORGANIZATION);

const ADD_DOMAINS_TO_ORGANIZATION :'ADD_DOMAINS_TO_ORGANIZATION' = 'ADD_DOMAINS_TO_ORGANIZATION';
const addDomainsToOrganization :RequestSequence = newRequestSequence(ADD_DOMAINS_TO_ORGANIZATION);

const ADD_MEMBER_TO_ORGANIZATION :'ADD_MEMBER_TO_ORGANIZATION' = 'ADD_MEMBER_TO_ORGANIZATION';
const addMemberToOrganization :RequestSequence = newRequestSequence(ADD_MEMBER_TO_ORGANIZATION);

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

const DESTROY_TRANSPORTED_ORGANIZATION_ENTITY_SET :'DESTROY_TRANSPORTED_ORGANIZATION_ENTITY_SET' = 'DESTROY_TRANSPORTED_ORGANIZATION_ENTITY_SET';
const destroyTransportedOrganizationEntitySet :RequestSequence = newRequestSequence(DESTROY_TRANSPORTED_ORGANIZATION_ENTITY_SET);

const GET_ALL_ORGANIZATIONS :'GET_ALL_ORGANIZATIONS' = 'GET_ALL_ORGANIZATIONS';
const getAllOrganizations :RequestSequence = newRequestSequence(GET_ALL_ORGANIZATIONS);

const GET_ORGANIZATION :'GET_ORGANIZATION' = 'GET_ORGANIZATION';
const getOrganization :RequestSequence = newRequestSequence(GET_ORGANIZATION);

const GET_ORGANIZATION_DATABASE_NAME :'GET_ORGANIZATION_DATABASE_NAME' = 'GET_ORGANIZATION_DATABASE_NAME';
const getOrganizationDatabaseName :RequestSequence = newRequestSequence(GET_ORGANIZATION_DATABASE_NAME);

const GET_ORGANIZATION_DATA_SOURCES :'GET_ORGANIZATION_DATA_SOURCES' = 'GET_ORGANIZATION_DATA_SOURCES';
const getOrganizationDataSources :RequestSequence = newRequestSequence(GET_ORGANIZATION_DATA_SOURCES);

const GET_ORGANIZATION_ENTITY_SETS :'GET_ORGANIZATION_ENTITY_SETS' = 'GET_ORGANIZATION_ENTITY_SETS';
const getOrganizationEntitySets :RequestSequence = newRequestSequence(GET_ORGANIZATION_ENTITY_SETS);

const GET_ORGANIZATION_INTEGRATION_ACCOUNT :'GET_ORGANIZATION_INTEGRATION_ACCOUNT' = 'GET_ORGANIZATION_INTEGRATION_ACCOUNT';
const getOrganizationIntegrationAccount :RequestSequence = newRequestSequence(GET_ORGANIZATION_INTEGRATION_ACCOUNT);

const GET_ORGANIZATION_MEMBERS :'GET_ORGANIZATION_MEMBERS' = 'GET_ORGANIZATION_MEMBERS';
const getOrganizationMembers :RequestSequence = newRequestSequence(GET_ORGANIZATION_MEMBERS);

const GET_ORGANIZATION_ROLES :'GET_ORGANIZATION_ROLES' = 'GET_ORGANIZATION_ROLES';
const getOrganizationRoles :RequestSequence = newRequestSequence(GET_ORGANIZATION_ROLES);

const GET_ROLE :'GET_ROLE' = 'GET_ROLE';
const getRole :RequestSequence = newRequestSequence(GET_ROLE);

const GET_USERS_WITH_ROLE :'GET_USERS_WITH_ROLE' = 'GET_USERS_WITH_ROLE';
const getUsersWithRole :RequestSequence = newRequestSequence(GET_USERS_WITH_ROLE);

const GRANT_TRUST_TO_ORGANIZATION :'GRANT_TRUST_TO_ORGANIZATION' = 'GRANT_TRUST_TO_ORGANIZATION';
const grantTrustToOrganization :RequestSequence = newRequestSequence(GRANT_TRUST_TO_ORGANIZATION);

const PROMOTE_STAGING_TABLE :'PROMOTE_STAGING_TABLE' = 'PROMOTE_STAGING_TABLE';
const promoteStagingTable :RequestSequence = newRequestSequence(PROMOTE_STAGING_TABLE);

const REGISTER_ORGANIZATION_DATA_SOURCE :'REGISTER_ORGANIZATION_DATA_SOURCE' = 'REGISTER_ORGANIZATION_DATA_SOURCE';
const registerOrganizationDataSource :RequestSequence = newRequestSequence(REGISTER_ORGANIZATION_DATA_SOURCE);

const REMOVE_CONNECTIONS_FROM_ORGANIZATION :'REMOVE_CONNECTIONS_FROM_ORGANIZATION' = 'REMOVE_CONNECTIONS_FROM_ORGANIZATION';
const removeConnectionsFromOrganization :RequestSequence = newRequestSequence(REMOVE_CONNECTIONS_FROM_ORGANIZATION);

const REMOVE_DOMAINS_FROM_ORGANIZATION :'REMOVE_DOMAINS_FROM_ORGANIZATION' = 'REMOVE_DOMAINS_FROM_ORGANIZATION';
const removeDomainsFromOrganization :RequestSequence = newRequestSequence(REMOVE_DOMAINS_FROM_ORGANIZATION);

const REMOVE_MEMBER_FROM_ORGANIZATION :'REMOVE_MEMBER_FROM_ORGANIZATION' = 'REMOVE_MEMBER_FROM_ORGANIZATION';
const removeMemberFromOrganization :RequestSequence = newRequestSequence(REMOVE_MEMBER_FROM_ORGANIZATION);

const REMOVE_ROLE_FROM_MEMBER :'REMOVE_ROLE_FROM_MEMBER' = 'REMOVE_ROLE_FROM_MEMBER';
const removeRoleFromMember :RequestSequence = newRequestSequence(REMOVE_ROLE_FROM_MEMBER);

const RENAME_ORGANIZATION_DATABASE :'RENAME_ORGANIZATION_DATABASE' = 'RENAME_ORGANIZATION_DATABASE';
const renameOrganizationDatabase :RequestSequence = newRequestSequence(RENAME_ORGANIZATION_DATABASE);

const REVOKE_TRUST_FROM_ORGANIZATION :'REVOKE_TRUST_FROM_ORGANIZATION' = 'REVOKE_TRUST_FROM_ORGANIZATION';
const revokeTrustFromOrganization :RequestSequence = newRequestSequence(REVOKE_TRUST_FROM_ORGANIZATION);

const TRANSPORT_ORGANIZATION_ENTITY_SET :'TRANSPORT_ORGANIZATION_ENTITY_SET' = 'TRANSPORT_ORGANIZATION_ENTITY_SET';
const transportOrganizationEntitySet :RequestSequence = newRequestSequence(TRANSPORT_ORGANIZATION_ENTITY_SET);

const UPDATE_ORGANIZATION_DATA_SOURCE :'UPDATE_ORGANIZATION_DATA_SOURCE' = 'UPDATE_ORGANIZATION_DATA_SOURCE';
const updateOrganizationDataSource :RequestSequence = newRequestSequence(UPDATE_ORGANIZATION_DATA_SOURCE);

const UPDATE_ORGANIZATION_DESCRIPTION :'UPDATE_ORGANIZATION_DESCRIPTION' = 'UPDATE_ORGANIZATION_DESCRIPTION';
const updateOrganizationDescription :RequestSequence = newRequestSequence(UPDATE_ORGANIZATION_DESCRIPTION);

const UPDATE_ORGANIZATION_TITLE :'UPDATE_ORGANIZATION_TITLE' = 'UPDATE_ORGANIZATION_TITLE';
const updateOrganizationTitle :RequestSequence = newRequestSequence(UPDATE_ORGANIZATION_TITLE);

const UPDATE_ROLE_DESCRIPTION :'UPDATE_ROLE_DESCRIPTION' = 'UPDATE_ROLE_DESCRIPTION';
const updateRoleDescription :RequestSequence = newRequestSequence(UPDATE_ROLE_DESCRIPTION);

const UPDATE_ROLE_GRANT :'UPDATE_ROLE_GRANT' = 'UPDATE_ROLE_GRANT';
const updateRoleGrant :RequestSequence = newRequestSequence(UPDATE_ROLE_GRANT);

const UPDATE_ROLE_TITLE :'UPDATE_ROLE_TITLE' = 'UPDATE_ROLE_TITLE';
const updateRoleTitle :RequestSequence = newRequestSequence(UPDATE_ROLE_TITLE);

export {
  ADD_CONNECTIONS_TO_ORGANIZATION,
  ADD_DOMAINS_TO_ORGANIZATION,
  ADD_MEMBER_TO_ORGANIZATION,
  ADD_ROLE_TO_MEMBER,
  CREATE_ORGANIZATION,
  CREATE_ROLE,
  DELETE_ORGANIZATION,
  DELETE_ROLE,
  DESTROY_TRANSPORTED_ORGANIZATION_ENTITY_SET,
  GET_ALL_ORGANIZATIONS,
  GET_ORGANIZATION,
  GET_ORGANIZATION_DATABASE_NAME,
  GET_ORGANIZATION_DATA_SOURCES,
  GET_ORGANIZATION_ENTITY_SETS,
  GET_ORGANIZATION_INTEGRATION_ACCOUNT,
  GET_ORGANIZATION_MEMBERS,
  GET_ORGANIZATION_ROLES,
  GET_ROLE,
  GET_USERS_WITH_ROLE,
  GRANT_TRUST_TO_ORGANIZATION,
  PROMOTE_STAGING_TABLE,
  REGISTER_ORGANIZATION_DATA_SOURCE,
  REMOVE_CONNECTIONS_FROM_ORGANIZATION,
  REMOVE_DOMAINS_FROM_ORGANIZATION,
  REMOVE_MEMBER_FROM_ORGANIZATION,
  REMOVE_ROLE_FROM_MEMBER,
  RENAME_ORGANIZATION_DATABASE,
  REVOKE_TRUST_FROM_ORGANIZATION,
  TRANSPORT_ORGANIZATION_ENTITY_SET,
  UPDATE_ORGANIZATION_DATA_SOURCE,
  UPDATE_ORGANIZATION_DESCRIPTION,
  UPDATE_ORGANIZATION_TITLE,
  UPDATE_ROLE_DESCRIPTION,
  UPDATE_ROLE_GRANT,
  UPDATE_ROLE_TITLE,
  addConnectionsToOrganization,
  addDomainsToOrganization,
  addMemberToOrganization,
  addRoleToMember,
  createOrganization,
  createRole,
  deleteOrganization,
  deleteRole,
  destroyTransportedOrganizationEntitySet,
  getAllOrganizations,
  getOrganization,
  getOrganizationDatabaseName,
  getOrganizationDataSources,
  getOrganizationEntitySets,
  getOrganizationIntegrationAccount,
  getOrganizationMembers,
  getOrganizationRoles,
  getRole,
  getUsersWithRole,
  grantTrustToOrganization,
  promoteStagingTable,
  registerOrganizationDataSource,
  removeConnectionsFromOrganization,
  removeDomainsFromOrganization,
  removeMemberFromOrganization,
  removeRoleFromMember,
  renameOrganizationDatabase,
  revokeTrustFromOrganization,
  transportOrganizationEntitySet,
  updateOrganizationDataSource,
  updateOrganizationDescription,
  updateOrganizationTitle,
  updateRoleDescription,
  updateRoleGrant,
  updateRoleTitle,
};
