/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as CodexApiActions from './CodexApiActions';

import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'SEND_OUTGOING_TEXT',
]).sort().toJS();

const REQSEQ_NAMES = OrderedSet([
  'sendOutgoingText',
]).sort().toJS();

describe('CodexApiActions', () => {

  testShouldExportActionTypes(CodexApiActions, ACTION_TYPES);
  testShouldExportRequestSequences(CodexApiActions, ACTION_TYPES, REQSEQ_NAMES);
});
