/*
 * Base is the default environment for production.
 * Add everything here and override value in other files if needed.
 * https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
 */
export default function baseEnv(
  baseApi,
  appkey,
  app_name,
  app_version,
  currency_code,
  appModuleConfig,
  shipCode,
  appLanguage,
  brand,
  brandName,
  common_settings
) {
  return {
    route: {
      baseRoute: '',
    },
    api: {
      sysUserAuthenticate: `${baseApi.sysApi}/api/v1/sysUserAuthenticate`,
      getServerDateTime: `${baseApi.controlCenterApi}/api/v1/serverDate`,
    },
    isProduction: true,
    isDevelopment: false,
    isTesting: false,
    appName: app_name,
    appVersion: app_version,
    appsecretkey: appkey,
    currencyCode: currency_code,
    appModuleConfig: appModuleConfig,
    baseApi: baseApi,
    shipCode: shipCode,
    appLanguage: appLanguage,
    appBrand: brand,
    appBrandName: brandName,
    common_settings: common_settings,
  };
}
