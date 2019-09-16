/*
 * @flow
 */

import Immutable from 'immutable';

import * as EntitySetsApiActions from './EntitySetsApiActions';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Immutable.List([
  'CREATE_ENTITY_SETS',
  'DELETE_ENTITY_SET',
  'GET_ALL_ENTITY_SETS',
  'GET_ENTITY_SET',
  'GET_ENTITY_SET_ID',
  'GET_ENTITY_SET_IDS',
  'GET_PT_METADATA_FOR_ENTITY_SET',
  'GET_PT_METADATA_FOR_ENTITY_SETS',
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'createEntitySets',
  'deleteEntitySet',
  'getAllEntitySets',
  'getEntitySet',
  'getEntitySetId',
  'getEntitySetIds',
  'getPropertyTypeMetaDataForEntitySet',
  'getPropertyTypeMetaDataForEntitySets',
]).sort();

describe('EntitySetsApiActions', () => {

  testShouldExportActionTypes(EntitySetsApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(EntitySetsApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
