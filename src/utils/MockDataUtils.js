/*
 * @flow
 */

/* eslint-disable import/no-extraneous-dependencies, import/prefer-default-export */

import randomUUID from 'uuid/v4';

const MOCK_ACTION :'MOCK_ACTION' = 'MOCK_ACTION';

export function getMockAction(value :any) :SequenceAction {

  return {
    value,
    id: randomUUID(),
    type: MOCK_ACTION
  };
}
