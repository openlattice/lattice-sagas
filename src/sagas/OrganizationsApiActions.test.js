/*
 * @flow
 */

import Immutable from 'immutable';

import * as OrganizationsApiActions from './OrganizationsApiActions';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Immutable.List([
  'ADD_DOMAIN_TO_ORG',
  'ADD_MEMBER_TO_ORG',
  'CREATE_ROLE',
  'DELETE_ORGANIZATION',
  'DELETE_ROLE',
  'GET_ALL_ORGANIZATIONS',
  'GET_ORGANIZATION',
  'GET_ORGANIZATION_ENTITY_SETS',
  'GET_ORG_INTEGRATION_ACCOUNT',
  'GET_ORG_MEMBERS',
  'GRANT_TRUST_TO_ORG',
  'REMOVE_DOMAIN_FROM_ORG',
  'REMOVE_MEMBER_FROM_ORG',
  'REVOKE_TRUST_FROM_ORG',
  'UPDATE_ORG_DESCRIPTION',
  'UPDATE_ORG_TITLE',
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'addDomainToOrganization',
  'addMemberToOrganization',
  'createRole',
  'deleteOrganization',
  'deleteRole',
  'getAllOrganizations',
  'getOrganization',
  'getOrganizationEntitySets',
  'getOrganizationIntegrationAccount',
  'getOrganizationMembers',
  'grantTrustToOrganization',
  'removeDomainFromOrganization',
  'removeMemberFromOrganization',
  'revokeTrustFromOrganization',
  'updateOrganizationDescription',
  'updateOrganizationTitle',
]).sort();

describe('OrganizationsApiActions', () => {

  testShouldExportActionTypes(OrganizationsApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(OrganizationsApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
