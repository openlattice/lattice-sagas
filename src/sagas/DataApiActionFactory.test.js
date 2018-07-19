import Immutable from 'immutable';

import * as DataApiActionFactory from './DataApiActionFactory';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Immutable.List([
  'GET_ENTITY_SET_DATA',
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'getEntitySetData',
]).sort();

describe('DataApiActionFactory', () => {

  testShouldExportActionTypes(DataApiActionFactory, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(DataApiActionFactory, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
