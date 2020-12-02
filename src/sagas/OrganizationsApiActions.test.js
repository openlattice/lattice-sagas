/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as OrganizationsApiActions from './OrganizationsApiActions';

import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'ADD_CONNECTIONS_TO_ORGANIZATION',
  'ADD_DOMAINS_TO_ORGANIZATION',
  'ADD_MEMBER_TO_ORGANIZATION',
  'ADD_ROLE_TO_MEMBER',
  'CREATE_ORGANIZATION',
  'CREATE_ROLE',
  'DELETE_ORGANIZATION',
  'DELETE_ROLE',
  'DESTROY_TRANSPORTED_ORGANIZATION_ENTITY_SET',
  'GET_ALL_ORGANIZATIONS',
  'GET_ORGANIZATION',
  'GET_ORGANIZATION_DATABASE_NAME',
  'GET_ORGANIZATION_ENTITY_SETS',
  'GET_ORGANIZATION_INTEGRATION_ACCOUNT',
  'GET_ORGANIZATION_MEMBERS',
  'GET_ORGANIZATION_ROLES',
  'GET_ROLE',
  'GET_USERS_WITH_ROLE',
  'GRANT_TRUST_TO_ORGANIZATION',
  'PROMOTE_STAGING_TABLE',
  'REMOVE_CONNECTIONS_FROM_ORGANIZATION',
  'REMOVE_DOMAINS_FROM_ORGANIZATION',
  'REMOVE_MEMBER_FROM_ORGANIZATION',
  'REMOVE_ROLE_FROM_MEMBER',
  'RENAME_ORGANIZATION_DATABASE',
  'REVOKE_TRUST_FROM_ORGANIZATION',
  'TRANSPORT_ORGANIZATION_ENTITY_SET',
  'UPDATE_ORGANIZATION_DESCRIPTION',
  'UPDATE_ORGANIZATION_TITLE',
  'UPDATE_ROLE_DESCRIPTION',
  'UPDATE_ROLE_GRANT',
  'UPDATE_ROLE_TITLE',
]).toJS();

const REQSEQ_NAMES = OrderedSet([
  'addConnectionsToOrganization',
  'addDomainsToOrganization',
  'addMemberToOrganization',
  'addRoleToMember',
  'createOrganization',
  'createRole',
  'deleteOrganization',
  'deleteRole',
  'destroyTransportedOrganizationEntitySet',
  'getAllOrganizations',
  'getOrganization',
  'getOrganizationDatabaseName',
  'getOrganizationEntitySets',
  'getOrganizationIntegrationAccount',
  'getOrganizationMembers',
  'getOrganizationRoles',
  'getRole',
  'getUsersWithRole',
  'grantTrustToOrganization',
  'promoteStagingTable',
  'removeConnectionsFromOrganization',
  'removeDomainsFromOrganization',
  'removeMemberFromOrganization',
  'removeRoleFromMember',
  'renameOrganizationDatabase',
  'revokeTrustFromOrganization',
  'transportOrganizationEntitySet',
  'updateOrganizationDescription',
  'updateOrganizationTitle',
  'updateRoleDescription',
  'updateRoleGrant',
  'updateRoleTitle',
]).toJS();

describe('OrganizationsApiActions', () => {

  testShouldExportActionTypes(OrganizationsApiActions, ACTION_TYPES);
  testShouldExportRequestSequences(OrganizationsApiActions, ACTION_TYPES, REQSEQ_NAMES);
});
