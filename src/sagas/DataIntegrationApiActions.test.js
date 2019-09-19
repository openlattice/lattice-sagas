/*
 * @flow
 */

import Immutable from 'immutable';

import * as DataIntegrationApiActions from './DataIntegrationApiActions';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Immutable.List([
  'CREATE_ENTITY_AND_ASSOCIATION_DATA',
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'createEntityAndAssociationData',
]).sort();

describe('DataIntegrationApiActions', () => {

  testShouldExportActionTypes(DataIntegrationApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(DataIntegrationApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
