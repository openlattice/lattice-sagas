/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const GET_ACL :'GET_ACL' = 'GET_ACL';
const getAcl :RequestSequence = newRequestSequence(GET_ACL);

export {
  GET_ACL,
  getAcl,
};
