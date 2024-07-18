import * as MasterAction from './MasterAction';
import baseReducer from '../../utilities/BaseReducer';
import jwt_decode from 'jwt-decode';

export const initialState = {};

const MasterReducer = baseReducer(initialState, {
  [MasterAction.REQUEST_MASTERDATA_FINISHED](state, action) {
    return {
      ...state,
      master: action.payload,
    };
  },
  [MasterAction.REQUEST_USER_ROLE_UPDATE](state, action) {
    let decode_token = JSON.parse(action.payload);
    // decode_token.YouthManager = false;
    // decode_token.YouthSessionBooker = false;
    // decode_token.YouthTeamMember = false;

    return {
      ...state,
      // sysUserData: JSON.stringify(decode_token),
      sysUserData: action.payload,
    };
  },
  [MasterAction.REQUEST_ROLE_FINISHED](state, action) {
    let token = action.payload && action.payload.data && action.payload.data.length > 0 && action.payload.data[0].sysUserXToken;
    let decode_token = jwt_decode(token);
    localStorage.setItem('access_token', token);
    // decode_token.YouthManager = false;
    // decode_token.YouthSessionBooker = false;
    // decode_token.YouthTeamMember = true;
    return {
      ...state,
      sysUserData: decode_token && JSON.stringify(decode_token),
    };
  },
  [MasterAction.REQUEST_SERVER_DATETIME_FINISHED](state, action) {
    return {
      ...state,
      serverDateTime: action.payload,
    };
  },
});

export default MasterReducer;
