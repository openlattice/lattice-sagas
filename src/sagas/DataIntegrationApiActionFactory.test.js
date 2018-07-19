import Immutable from 'immutable';

import * as DataIntegrationApiActionFactory from './DataIntegrationApiActionFactory';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Immutable.List([
  'CREATE_ENTITY_AND_ASSOCIATION_DATA',
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'createEntityAndAssociationData',
]).sort();

describe('DataIntegrationApiActionFactory', () => {

  testShouldExportActionTypes(DataIntegrationApiActionFactory, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(DataIntegrationApiActionFactory, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
