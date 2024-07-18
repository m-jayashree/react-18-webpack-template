import * as ActionUtility from '../../utilities/ActionUtility';
import { v4 as uuidv4 } from 'uuid';

export const ADD_TOAST = 'ToastsAction.ADD_TOAST';

export function add(message, type) {
  return ActionUtility.createAction(ADD_TOAST, {
    message,
    type,
    id: uuidv4(),
  });
}

export const REMOVE_TOAST = 'ToastsAction.REMOVE_TOAST';

export function removeById(toastId) {
  return ActionUtility.createAction(REMOVE_TOAST, toastId);
}
