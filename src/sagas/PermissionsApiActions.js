/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const GET_ACL :'GET_ACL' = 'GET_ACL';
const getAcl :RequestSequence = newRequestSequence(GET_ACL);

const GET_ACL_EXPLANATION :'GET_ACL_EXPLANATION' = 'GET_ACL_EXPLANATION';
const getAclExplanation :RequestSequence = newRequestSequence(GET_ACL_EXPLANATION);

const UPDATE_ACL :'UPDATE_ACL' = 'UPDATE_ACL';
const updateAcl :RequestSequence = newRequestSequence(UPDATE_ACL);

const UPDATE_ACLS :'UPDATE_ACLS' = 'UPDATE_ACLS';
const updateAcls :RequestSequence = newRequestSequence(UPDATE_ACLS);

export {
  GET_ACL,
  GET_ACL_EXPLANATION,
  UPDATE_ACL,
  UPDATE_ACLS,
  getAcl,
  getAclExplanation,
  updateAcl,
  updateAcls,
};
