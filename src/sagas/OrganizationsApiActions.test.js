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
  'GET_ORG_INTEGRATION_ACCOUNT',
  'GET_ORG_MEMBERS',
  'REMOVE_DOMAIN_FROM_ORG',
  'REMOVE_MEMBER_FROM_ORG',
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'addDomainToOrganization',
  'addMemberToOrganization',
  'createRole',
  'deleteOrganization',
  'deleteRole',
  'getAllOrganizations',
  'getOrganization',
  'getOrganizationIntegrationAccount',
  'getOrganizationMembers',
  'removeDomainFromOrganization',
  'removeMemberFromOrganization',
]).sort();

describe('OrganizationsApiActions', () => {

  testShouldExportActionTypes(OrganizationsApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(OrganizationsApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
