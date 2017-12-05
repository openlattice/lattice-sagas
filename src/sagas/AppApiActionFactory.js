/*
 * @flow
 */
import { newRequestSequence } from 'redux-reqseq';

const GET_APP :'GET_APP' = 'GET_APP';
const getApp :RequestSequence = newRequestSequence(GET_APP);

const GET_APP_CONFIGS :'GET_APP_CONFIGS' = 'GET_APP_CONFIGS';
const getAppConfigs :RequestSequence = newRequestSequence(GET_APP_CONFIGS);

const GET_APP_TYPES :'GET_APP_TYPES' = 'GET_APP_TYPES';
const getAppTypes :RequestSequence = newRequestSequence(GET_APP_TYPES);


export {
  GET_APP,
  GET_APP_CONFIGS,
  GET_APP_TYPES,
  getApp,
  getAppConfigs,
  getAppTypes
};
