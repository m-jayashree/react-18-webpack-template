import environment from 'environment';
import MasterModel from './models/MasterModel';
import * as EffectUtility from '../../utilities/EffectUtility';

export async function requestMasterData(data) {
  const endpoint = environment.api.getMasters.replace(':module', data ? data.module : 'all');
  const requestConfig = {};
  return EffectUtility.getToModel(MasterModel, endpoint, data, requestConfig);
}

export async function requestRole() {
  const data = JSON.stringify({
    username: sessionStorage.getItem('username'),
    password: atob(sessionStorage.getItem('password')),
  });
  const requestConfig = {};
  return EffectUtility.postMethodWithoutToken(MasterModel, environment.api.sysUserAuthenticate, data, requestConfig);
}

export async function requestServerDateTime() {
  const endpoint = environment.api.getServerDateTime;
  const requestConfig = {};
  return EffectUtility.getToModel(MasterModel, endpoint, null, requestConfig);
}
