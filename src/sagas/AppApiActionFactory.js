/*
 * @flow
 */
 import { newRequestSequence } from 'redux-reqseq';

const FETCH_APP :'FETCH_APP' = 'FETCH_APP';
const fetchApp :RequestSequence = newRequestSequence(FETCH_APP);

const FETCH_APP_CONFIGS :'FETCH_APP_CONFIGS' = 'FETCH_APP_CONFIGS';
const fetchAppConfigs :RequestSequence = newRequestSequence(FETCH_APP_CONFIGS);

const FETCH_APP_TYPES :'FETCH_APP_TYPES' = 'FETCH_APP_TYPES';
const fetchAppTypes :RequestSequence = newRequestSequence(FETCH_APP_TYPES);


export {
  FETCH_APP,
  FETCH_APP_CONFIGS,
  FETCH_APP_TYPES,
  fetchApp,
  fetchAppConfigs,
  fetchAppTypes
};
