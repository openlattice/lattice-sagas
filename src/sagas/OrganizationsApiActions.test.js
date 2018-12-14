import Immutable from 'immutable';

import * as OrganizationsApiActions from './OrganizationsApiActions';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Immutable.List([
  'GET_ALL_ORGANIZATIONS',
  'GET_ORGANIZATION',
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'getAllOrganizations',
  'getOrganization',
]).sort();

describe('SearchApiActions', () => {

  testShouldExportActionTypes(OrganizationsApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(OrganizationsApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
