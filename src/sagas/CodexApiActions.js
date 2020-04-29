/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const SEND_OUTGOING_TEXT :'SEND_OUTGOING_TEXT' = 'SEND_OUTGOING_TEXT';
const sendOutgoingText :RequestSequence = newRequestSequence(SEND_OUTGOING_TEXT);

export {
  SEND_OUTGOING_TEXT,
  sendOutgoingText,
};
