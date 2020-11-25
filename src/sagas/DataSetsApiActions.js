/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const GET_ORGANIZATION_DATA_SET :'GET_ORGANIZATION_DATA_SET' = 'GET_ORGANIZATION_DATA_SET';
const getOrganizationDataSet :RequestSequence = newRequestSequence(GET_ORGANIZATION_DATA_SET);

const GET_ORGANIZATION_DATA_SETS :'GET_ORGANIZATION_DATA_SETS' = 'GET_ORGANIZATION_DATA_SETS';
const getOrganizationDataSets :RequestSequence = newRequestSequence(GET_ORGANIZATION_DATA_SETS);

const GET_ORGANIZATION_DATA_SET_DATA :'GET_ORGANIZATION_DATA_SET_DATA' = 'GET_ORGANIZATION_DATA_SET_DATA';
const getOrganizationDataSetData :RequestSequence = newRequestSequence(GET_ORGANIZATION_DATA_SET_DATA);

const GET_ORGANIZATION_DATA_SET_SCHEMA :'GET_ORGANIZATION_DATA_SET_SCHEMA' = 'GET_ORGANIZATION_DATA_SET_SCHEMA';
const getOrganizationDataSetSchema :RequestSequence = newRequestSequence(GET_ORGANIZATION_DATA_SET_SCHEMA);

export {
  GET_ORGANIZATION_DATA_SET,
  GET_ORGANIZATION_DATA_SETS,
  GET_ORGANIZATION_DATA_SET_DATA,
  GET_ORGANIZATION_DATA_SET_SCHEMA,
  getOrganizationDataSet,
  getOrganizationDataSets,
  getOrganizationDataSetData,
  getOrganizationDataSetSchema,
};
