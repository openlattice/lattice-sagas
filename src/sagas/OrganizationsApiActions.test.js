import Immutable from 'immutable';

import * as OrganizationsApiActions from './OrganizationsApiActions';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Immutable.List([
  'ADD_AUTO_APPROVED_DOMAIN',
  'ADD_MEMBER_TO_ORGANIZATION',
  'CREATE_ROLE',
  'DELETE_ROLE',
  'GET_ALL_ORGANIZATIONS',
  'GET_ORGANIZATION',
  'GET_ORGANIZATION_MEMBERS',
  'REMOVE_AUTO_APPROVED_DOMAIN',
  'REMOVE_MEMBER_FROM_ORGANIZATION',
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'addAutoApprovedDomain',
  'addMemberToOrganization',
  'createRole',
  'deleteRole',
  'getAllOrganizations',
  'getOrganization',
  'getOrganizationMembers',
  'removeAutoApprovedDomain',
  'removeMemberFromOrganization',
]).sort();

describe('SearchApiActions', () => {

  testShouldExportActionTypes(OrganizationsApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(OrganizationsApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
