/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as EntitySetsApiActions from './EntitySetsApiActions';

import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'CREATE_ENTITY_SETS',
  'DELETE_ENTITY_SET',
  'GET_ALL_ENTITY_SETS',
  'GET_ENTITY_SET',
  'GET_ENTITY_SET_ID',
  'GET_ENTITY_SET_IDS',
  'GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SET',
  'GET_PROPERTY_TYPE_METADATA_FOR_ENTITY_SETS',
]).sort().toJS();

const REQSEQ_NAMES = OrderedSet([
  'createEntitySets',
  'deleteEntitySet',
  'getAllEntitySets',
  'getEntitySet',
  'getEntitySetId',
  'getEntitySetIds',
  'getPropertyTypeMetaDataForEntitySet',
  'getPropertyTypeMetaDataForEntitySets',
]).sort().toJS();

describe('EntitySetsApiActions', () => {

  testShouldExportActionTypes(EntitySetsApiActions, ACTION_TYPES);
  testShouldExportRequestSequences(EntitySetsApiActions, ACTION_TYPES, REQSEQ_NAMES);
});
