/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const GET_ACL :'GET_ACL' = 'GET_ACL';
const getAcl :RequestSequence = newRequestSequence(GET_ACL);

const UPDATE_ACL :'UPDATE_ACL' = 'UPDATE_ACL';
const updateAcl :RequestSequence = newRequestSequence(UPDATE_ACL);

export {
  GET_ACL,
  UPDATE_ACL,
  getAcl,
  updateAcl,
};
