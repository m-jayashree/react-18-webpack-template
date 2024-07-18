import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import environment from 'environment';
import HttpErrorResponseModel from '../models/HttpErrorResponseModel';
import LocalStorageService from './LocalStorageUtility';
import moment from 'moment';
const RequestMethod = {
  Get: 'GET',
  Post: 'POST',
  Put: 'PUT',
  Delete: 'DELETE',
  Options: 'OPTIONS',
  Head: 'HEAD',
  Patch: 'PATCH',
};

function _isTokenExpired(token) {
  try {
    const decoded = jwtDecode(token);
    if (decoded.exp < Date.now() / 1000) {
      // Checking if token is expired. N
      LocalStorageService.clearRefreshToken();
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
}

function _loggedIn() {
  // Checks if there is a saved token and it's still valid
  const token = localStorage.getItem('access_token'); // GEtting token from localstorage

  return !!token && !_isTokenExpired(token); // handwaiving here
}
//_loggedIn();

export async function get(endpoint, params, requestConfig) {
  const paramsConfig = params ? { params } : undefined;

  if (localStorage.getItem('access_token')) {
    requestConfig = {
      ...requestConfig,
      headers: {
        sysUserXToken: localStorage.getItem('access_token'),
        // sysxtoken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJpbnRlZ3JhdGlvbi1sYXllciIsInN1YiI6Ik9jZWFuT3JiaXQiLCJpc3MiOiJpbnRlZ3JhdGlvbi1sYXllciIsImFwaWdyb3VwIjpbImNvcmVhcGkiXSwiZXhwIjoxNzc5NTUxNDUwLCJpYXQiOjE2MjE4NzE0NTAsImp0aSI6ImZmMTdhZWMyLTgyYjYtNGIzMS04ZjRhLWI1NzNhY2QxOTdjOCJ9.WbKlGt3gwLxSUMo8teN9q6xZmLMeawA_YqAmcVuewuY"
      },
    };
  }
  return _request(
    {
      url: endpoint,
      method: RequestMethod.Get,
    },
    {
      ...paramsConfig,
      ...requestConfig,
    }
  );
}

export async function getModelWithoutConfig(endpoint, params, requestConfig) {
  const paramsConfig = params ? { params } : undefined;
  return _request(
    {
      url: endpoint,
      method: RequestMethod.Get,
    },
    {
      ...paramsConfig,
    }
  );
}

export async function postMethodWithoutToken(endpoint, data, requestConfig) {
  const paramsConfig = data ? { data } : undefined;
  if (requestConfig) {
    requestConfig = {
      ...requestConfig,
      headers: {},
    };
  }
  return _request(
    {
      url: endpoint,
      method: RequestMethod.Post,
    },
    {
      ...paramsConfig,
      ...requestConfig,
    }
  );
}

export async function post(endpoint, data, requestConfig) {
  const dataConfig = data ? { data } : undefined;

  if (Object.keys(requestConfig).length === 0 && localStorage.getItem('access_token')) {
    requestConfig = {
      ...requestConfig,
      headers: {
        sysUserXToken: localStorage.getItem('access_token'),
      },
    };
  } else {
    requestConfig = {
      ...requestConfig,
      headers: {},
    };
  }
  return _request(
    {
      url: endpoint,
      method: RequestMethod.Post,
    },
    {
      ...dataConfig,
      ...requestConfig,
    }
  );
}

export async function patch(endpoint, data, requestConfig) {
  const dataConfig = data ? { data } : undefined;

  if (Object.keys(requestConfig).length === 0 && localStorage.getItem('access_token')) {
    requestConfig = {
      ...requestConfig,
      headers: {
        sysUserXToken: localStorage.getItem('access_token'),
      },
    };
  } else {
    requestConfig = {
      ...requestConfig,
      headers: {},
    };
  }
  return _request(
    {
      url: endpoint,
      method: RequestMethod.Patch,
    },
    {
      ...dataConfig,
      ...requestConfig,
    }
  );
}

export async function put(endpoint, data, requestConfig) {
  const dataConfig = data ? { data } : undefined;

  if (Object.keys(requestConfig).length === 0 && localStorage.getItem('access_token')) {
    requestConfig = {
      ...requestConfig,
      headers: {
        sysUserXToken: localStorage.getItem('access_token'),
      },
    };
  } else {
    requestConfig = {
      ...requestConfig,
      headers: {},
    };
  }
  return _request(
    {
      url: endpoint,
      method: RequestMethod.Put,
    },
    {
      ...dataConfig,
      ...requestConfig,
    }
  );
}
export async function del(endpoint, data, requestConfig) {
  const dataConfig = data ? { data } : undefined;

  if (Object.keys(requestConfig).length === 0 && localStorage.getItem('access_token')) {
    requestConfig = {
      ...requestConfig,
      headers: {
        sysUserXToken: localStorage.getItem('access_token'),
      },
    };
  } else {
    requestConfig = {
      ...requestConfig,
      headers: {},
    };
  }
  return _request(
    {
      url: endpoint,
      method: RequestMethod.Delete,
    },
    {
      ...dataConfig,
      ...requestConfig,
    }
  );
}
export async function _request(restRequest, config) {
  if (!Boolean(restRequest.url)) {
    console.error(`Received ${restRequest.url} which is invalid for a endpoint url`);
  }

  try {
    const axiosRequestConfig = {
      ...config,
      method: restRequest.method,
      url: restRequest.url,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
      },
    };

    const [axiosResponse] = await Promise.all([axios(axiosRequestConfig), _delay()]);

    const { status, data, request } = axiosResponse;

    if (data && data.success === false) {
      return _fillInErrorWithDefaults(
        {
          status,
          message: data.errors.join(' - '),
          errors: data.errors,
          url: request ? request.responseURL : restRequest.url,
          raw: axiosResponse,
        },
        restRequest
      );
    }
    if (request.status !== 200) {
      return _fillInErrorWithDefaults(
        {
          status: request.status,
          message: request.statusText,
          errors: request.statusText,
          url: request ? request.responseURL : restRequest.url,
          raw: axiosResponse,
        },
        restRequest
      );
    }
    if (
      request.responseURL.includes('api/v1/youth/reports/reportType/checkindata') &&
      config &&
      config.data &&
      config.data.shouldStore === true &&
      request.status === 200
    ) {
      let data = axiosResponse && axiosResponse.data && axiosResponse.data.checkInActivities && JSON.stringify(axiosResponse.data.checkInActivities);
      localStorage.setItem('checkin_activity', data);
      localStorage.setItem('checkin_activity_update_time', moment().format('YYYY-MM-DD HH:mm:ss'));
      localStorage.setItem('checkin_activity_sync_status', 'success');
      localStorage.removeItem('checkin_activity_retry_at');
    }
    return {
      ...axiosResponse,
    };
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      const { status, statusText, data } = error.response;
      const errors = data.hasOwnProperty('errors') ? [statusText, ...data.errors] : [statusText];

      return _fillInErrorWithDefaults(
        {
          status,
          message: data.statusmessage,
          errors,
          url: error.request.responseURL,
          raw: error.response,
        },
        restRequest
      );
    } else if (error.request) {
      // The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
      const { status, statusText, responseURL } = error.request;

      return _fillInErrorWithDefaults(
        {
          status,
          message: statusText,
          errors: [statusText],
          url: responseURL,
          raw: error.request,
        },
        restRequest
      );
    }

    // Something happened in setting up the request that triggered an Error
    return _fillInErrorWithDefaults(
      {
        status: 0,
        message: error.message,
        errors: [error.message],
        url: restRequest.url,
        raw: error,
      },
      restRequest
    );
  }
}

function _fillInErrorWithDefaults(error, request) {
  const model = new HttpErrorResponseModel();
  // console.log('Errr', error, request);
  model.status = error && error.message && error.message.includes(`Cannot read properties of undefined (reading 'then')`) ? 401 : error.status || 0;
  model.message = error.message || (error && error.raw && error.raw.data && error.raw.data.statusMessage) || 'Error requesting data';
  model.errors = error.errors.length ? error.errors : ['Error requesting data'];
  model.url = error.url || request.url;
  model.raw = error.raw;

  // Remove anything with undefined or empty strings.
  model.errors = Array.isArray(model.errors) && model.errors.filter(Boolean);

  return model;
}

/**
 * We want to show the loading indicator to the user but sometimes the api
 * request finished too quickly. This makes sure there the loading indicator is
 * visual for at least a given time.
 *
 * @param duration
 * @returns {Promise<void>}
 * @private
 */
function _delay(duration = 250) {
  _loggedIn();
  return new Promise((resolve) => setTimeout(resolve, duration));
}

const refreshAuthLogic = (failedRequest) => {
  if (
    !failedRequest.response.config.url.includes('sysUserAuthenticate') &&
    failedRequest.response.data.statusCode === '99' &&
    failedRequest.response.data.statusMessage === 'Unauthorized'
  ) {
    axios
      .post(
        environment.api.sysUserAuthenticate,
        JSON.stringify({
          username: sessionStorage.getItem('username'),
          password: atob(sessionStorage.getItem('password')),
        }),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
      .then((tokenRefreshResponse) => {
        localStorage.setItem('access_token', tokenRefreshResponse.data.data.sysUserXToken);
        localStorage.setItem('path', window.location.pathname);
        let reloadCount = localStorage.getItem('reloadcount') ? Number(localStorage.getItem('reloadcount')) : 0;
        if (reloadCount <= 3) {
          localStorage.setItem('reloadcount', reloadCount + 1);
          window.location.reload(true);
        }
        return Promise.resolve();
      })
      .catch((err) => {
        window.location = '/';
      });
  }
};
if (localStorage.getItem('access_token') && localStorage.getItem('access_token').length > 0) {
  createAuthRefreshInterceptor(axios, refreshAuthLogic);
}
createAuthRefreshInterceptor(axios, refreshAuthLogic);
