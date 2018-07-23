/*
 * @flow
 */

import { STRING_TAG } from './Constants';

function isValidActionId(value :any) :boolean {

  return Object.prototype.toString.call(value) === STRING_TAG && value.length > 0;
}

function isValidAction(action :any, baseType :string) :boolean {

  if (!action || !isValidActionId(action.id) || action.type !== baseType) {
    return false;
  }

  return true;
}

export {
  isValidAction,
};
