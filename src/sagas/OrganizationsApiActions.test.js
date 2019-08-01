import Immutable from 'immutable';

import * as OrganizationsApiActions from './OrganizationsApiActions';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Immutable.List([
  'ADD_AUTO_APPROVED_DOMAIN',
  'GET_ALL_ORGANIZATIONS',
  'GET_ORGANIZATION',
  'REMOVE_AUTO_APPROVED_DOMAIN',
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'addAutoApprovedDomain',
  'getAllOrganizations',
  'getOrganization',
  'removeAutoApprovedDomain',
]).sort();

describe('SearchApiActions', () => {

  testShouldExportActionTypes(OrganizationsApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(OrganizationsApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
