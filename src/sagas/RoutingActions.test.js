/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as RoutingActions from './RoutingActions';

import { testShouldExportActionTypes } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'GO_TO_ROUTE',
  'ROUTING_FAILURE',
]).toJS();

describe('RoutingActions', () => {

  testShouldExportActionTypes(RoutingActions, ACTION_TYPES);
});
