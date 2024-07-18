import environment from './base';
const appSettings = window.appSettings;
const baseApi = appSettings.API_URL;
const appsecretkey = 'b6400ef0444374c1ef0a7f0586d827d4';
//const appsecretkey = 'f6f30647d70188a591c7f083f25b44be';
const app_name = appSettings.APP_NAME;
const app_version = appSettings.APP_VERSION;
// const app_useraccess_roles = appSettings.APP_USER_ACCESS_ROLES;
const currencyCode = appSettings.CURRENCY_CODE;
const appModuleConfig = appSettings.MODULES;
const shipCode = appSettings.SHIP_CODE;
const appLanguage = appSettings.APP_LANGUAGE;
const brand = appSettings.BRAND;
const brandName = appSettings.BRAND_NAME;
const common_settings = appSettings.COMMON_SETTINGS;
const env = environment(
  baseApi,
  appsecretkey,
  app_name,
  app_version,
  currencyCode,
  appModuleConfig,
  shipCode,
  appLanguage,
  brand,
  brandName,
  common_settings
);

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
