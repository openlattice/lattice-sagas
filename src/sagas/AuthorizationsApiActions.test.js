import Immutable from 'immutable';

import * as AuthorizationsApiActions from './AuthorizationsApiActions';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Immutable.List([
  'GET_AUTHORIZATIONS',
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'getAuthorizations',
]).sort();

describe('AuthorizationsApiActions', () => {

  testShouldExportActionTypes(AuthorizationsApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(AuthorizationsApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
