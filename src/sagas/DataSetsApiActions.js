/*
 * @flow
 */

/* eslint-disable max-len */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const GET_ORGANIZATION_DATA_SETS :'GET_ORGANIZATION_DATA_SETS' = 'GET_ORGANIZATION_DATA_SETS';
const getOrganizationDataSets :RequestSequence = newRequestSequence(GET_ORGANIZATION_DATA_SETS);

const GET_ORGANIZATION_DATA_SETS_WITH_COLUMNS :'GET_ORGANIZATION_DATA_SETS_WITH_COLUMNS' = 'GET_ORGANIZATION_DATA_SETS_WITH_COLUMNS';
const getOrganizationDataSetsWithColumns :RequestSequence = newRequestSequence(GET_ORGANIZATION_DATA_SETS_WITH_COLUMNS);

export {
  GET_ORGANIZATION_DATA_SETS,
  GET_ORGANIZATION_DATA_SETS_WITH_COLUMNS,
  getOrganizationDataSets,
  getOrganizationDataSetsWithColumns,
};
