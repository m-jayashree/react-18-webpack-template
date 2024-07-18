import HttpErrorResponseModel from '../models/HttpErrorResponseModel';
import * as HttpUtility from './HttpUtility';

export async function getToModel(Model, endpoint, params, requestConfig) {
  const response = await HttpUtility.get(endpoint, params, requestConfig);
  const res = _restModelCreator(Model, response);

  return res;
}

export async function postToModel(Model, endpoint, data, requestConfig) {
  const response = await HttpUtility.post(endpoint, data, requestConfig);
  const res = _restModelCreator(Model, response);
  return res;
}

export async function patchToModel(Model, endpoint, params, requestConfig) {
  const response = await HttpUtility.patch(endpoint, params, requestConfig);
  const res = _restModelCreator(Model, response);
  return res;
}

export async function putToModel(Model, endpoint, data, requestConfig) {
  const response = await HttpUtility.put(endpoint, data, requestConfig);
  const res = _restModelCreator(Model, response);
  return res;
}

export async function deleteToModel(Model, endpoint, data, requestConfig) {
  const response = await HttpUtility.del(endpoint, data, requestConfig);
  const res = _restModelCreator(Model, response);
  return res;
}

export async function postMethodWithoutToken(Model, endpoint, data, requestConfig) {
  const response = await HttpUtility.postMethodWithoutToken(endpoint, data, requestConfig);
  const res = _restModelCreator(Model, response);
  return res;
}

function _restModelCreator(Model, response) {
  if (response instanceof HttpErrorResponseModel) {
    return response;
  }

  return !Array.isArray(response.data) ? new Model(response.data) : response.data.map((json) => new Model(json));
}
