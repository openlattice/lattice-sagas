/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';

const CREATE_ENTITY_AND_ASSOCIATION_DATA :'CREATE_ENTITY_AND_ASSOCIATION_DATA' = 'CREATE_ENTITY_AND_ASSOCIATION_DATA';
const createEntityAndAssociationData :RequestSequence = newRequestSequence(CREATE_ENTITY_AND_ASSOCIATION_DATA);

export {
  CREATE_ENTITY_AND_ASSOCIATION_DATA,
  createEntityAndAssociationData
};
