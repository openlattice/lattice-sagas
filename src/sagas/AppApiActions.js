/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const GET_ALL_APPS :'GET_ALL_APPS' = 'GET_ALL_APPS';
const getAllApps :RequestSequence = newRequestSequence(GET_ALL_APPS);

const GET_APP :'GET_APP' = 'GET_APP';
const getApp :RequestSequence = newRequestSequence(GET_APP);

const GET_APP_CONFIGS :'GET_APP_CONFIGS' = 'GET_APP_CONFIGS';
const getAppConfigs :RequestSequence = newRequestSequence(GET_APP_CONFIGS);

const GET_APP_TYPE :'GET_APP_TYPE' = 'GET_APP_TYPE';
const getAppType :RequestSequence = newRequestSequence(GET_APP_TYPE);

const GET_APP_TYPES :'GET_APP_TYPES' = 'GET_APP_TYPES';
const getAppTypes :RequestSequence = newRequestSequence(GET_APP_TYPES);

const INSTALL_APP :'INSTALL_APP' = 'INSTALL_APP';
const installApp :RequestSequence = newRequestSequence(INSTALL_APP);

export {
  GET_ALL_APPS,
  GET_APP,
  GET_APP_CONFIGS,
  GET_APP_TYPE,
  GET_APP_TYPES,
  INSTALL_APP,
  getAllApps,
  getApp,
  getAppConfigs,
  getAppType,
  getAppTypes,
  installApp,
};
