/*
 * @flow
 */

import { STRING_TAG } from './Constants';

function isValidActionId(value :any) :boolean {

  return Object.prototype.toString.call(value) === STRING_TAG && value.length > 0;
}

function isValidAction(action :any, expectedType :string) :boolean {

  if (!action || !isValidActionId(action.id) || action.type !== expectedType) {
    return false;
  }

  return true;
}

export {
  isValidAction,
};
