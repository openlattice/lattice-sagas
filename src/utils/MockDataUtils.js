/*
 * @flow
 */

/* eslint-disable import/no-extraneous-dependencies */

import randomUUID from 'uuid/v4';

const MOCK_ACTION :'MOCK_ACTION' = 'MOCK_ACTION';
const MOCK_ENTITY_SET_ID :string = 'ec6865e6-e60e-424b-a071-6a9c1603d735';
const MOCK_ENTITY_SET_NAME :string = 'OpenLattice';
const MOCK_ENTITY_TYPE_ID :string = '0c8be4b7-0bd5-4dd1-a623-da78871c9d0e';
const MOCK_PROPERTY_TYPE_ID :string = '4b08e1f9-4a00-4169-92ea-10e377070220';


export function getMockAction(value :any) :SequenceAction {

  return {
    value,
    id: randomUUID(),
    type: MOCK_ACTION
  };
}

export {
  MOCK_ENTITY_SET_ID,
  MOCK_ENTITY_SET_NAME,
  MOCK_ENTITY_TYPE_ID,
  MOCK_PROPERTY_TYPE_ID
};
