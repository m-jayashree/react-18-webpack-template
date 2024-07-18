import * as MasterEffect from './MasterEffect';
import * as ActionUtility from '../../utilities/ActionUtility';

export const REQUEST_MASTERDATA = 'PaxMessagesAction.REQUEST_MASTERDATA';
export const REQUEST_MASTERDATA_FINISHED = 'PaxMessagesAction.REQUEST_MASTERDATA_FINISHED';

export const REQUEST_USER_ROLE_UPDATE = 'PaxMessagesAction.REQUEST_USER_ROLE_UPDATE';

export const REQUEST_ROLE = 'PaxMessagesAction.REQUEST_ROLE';
export const REQUEST_ROLE_FINISHED = 'PaxMessagesAction.REQUEST_ROLE_FINISHED';

export const REQUEST_SERVER_DATETIME = 'PaxMessagesAction.REQUEST_SERVER_DATETIME';
export const REQUEST_SERVER_DATETIME_FINISHED = 'PaxMessagesAction.REQUEST_SERVER_DATETIME_FINISHED';

export function requestMasterData(data = null) {
  return async (dispatch, getState) => {
    await ActionUtility.createThunkEffect(dispatch, REQUEST_MASTERDATA, MasterEffect.requestMasterData, data);
  };
}

export function requestUserRole(data = null) {
  return async (dispatch, getState) => {
    await ActionUtility.createThunkEffect(dispatch, REQUEST_ROLE, MasterEffect.requestRole, null);
  };
}

export function requestUserRoleUpdate(data) {
  return async (dispatch, getState) => {
    await dispatch(ActionUtility.createAction(REQUEST_USER_ROLE_UPDATE, data, false));
  };
}

export function requestServerDateTime(data = null) {
  return async (dispatch, getState) => {
    await ActionUtility.createThunkEffect(dispatch, REQUEST_SERVER_DATETIME, MasterEffect.requestServerDateTime, data);
  };
}
