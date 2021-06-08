/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const GET_DATA_SET_METADATA :'GET_DATA_SET_METADATA' = 'GET_DATA_SET_METADATA';
const getDataSetMetadata :RequestSequence = newRequestSequence(GET_DATA_SET_METADATA);

const GET_DATA_SETS_METADATA :'GET_DATA_SETS_METADATA' = 'GET_DATA_SETS_METADATA';
const getDataSetsMetadata :RequestSequence = newRequestSequence(GET_DATA_SETS_METADATA);

const GET_DATA_SET_COLUMN_METADATA :'GET_DATA_SET_COLUMN_METADATA' = 'GET_DATA_SET_COLUMN_METADATA';
const getDataSetColumnMetadata :RequestSequence = newRequestSequence(GET_DATA_SET_COLUMN_METADATA);

const GET_DATA_SET_COLUMNS_METADATA :'GET_DATA_SET_COLUMNS_METADATA' = 'GET_DATA_SET_COLUMNS_METADATA';
const getDataSetColumnsMetadata :RequestSequence = newRequestSequence(GET_DATA_SET_COLUMNS_METADATA);

const UPDATE_DATA_SET_METADATA :'UPDATE_DATA_SET_METADATA' = 'UPDATE_DATA_SET_METADATA';
const updateDataSetMetadata :RequestSequence = newRequestSequence(UPDATE_DATA_SET_METADATA);

const UPDATE_DATA_SET_COLUMN_METADATA :'UPDATE_DATA_SET_COLUMN_METADATA' = 'UPDATE_DATA_SET_COLUMN_METADATA';
const updateDataSetColumnMetadata :RequestSequence = newRequestSequence(UPDATE_DATA_SET_COLUMN_METADATA);

export {
  GET_DATA_SET_METADATA,
  GET_DATA_SETS_METADATA,
  GET_DATA_SET_COLUMN_METADATA,
  GET_DATA_SET_COLUMNS_METADATA,
  UPDATE_DATA_SET_METADATA,
  UPDATE_DATA_SET_COLUMN_METADATA,
  getDataSetMetadata,
  getDataSetsMetadata,
  getDataSetColumnMetadata,
  getDataSetColumnsMetadata,
  updateDataSetMetadata,
  updateDataSetColumnMetadata,
};
