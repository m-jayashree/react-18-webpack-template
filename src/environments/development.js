import environment from './base';
console.log('env', environment);
const appSettings = window.appSettings;
console.log('window', window, appSettings);
const baseApi = 'https://api.tvmaze.com';
const env = environment(baseApi);

const developmentEnv = {
  ...env,
  // override anything that gets added from base.
  api: {
    ...env.api,
    // error200: `${baseApi}/api/v1/error-200`,
    // error500: `${baseApi}/api/v1/error-500`,
  },
  isProduction: false,
  isDevelopment: true,
};

export default developmentEnv;
