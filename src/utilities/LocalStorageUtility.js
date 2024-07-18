const LocalStorageService = (function() {
  var _service;
  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }
  function _setToken(token, username) {
    // localStorage.setItem('access_token', token);
    // localStorage.setItem('user_name', username);
  }
  function _setAccessToken(token) {
    return localStorage.setItem('refresh_token', token);
  }
  function _getAccessToken() {
    return localStorage.getItem('access_token');
  }
  function _getRefreshToken() {
    return localStorage.getItem('refresh_token');
  }
  function _getUserXToken() {
    return localStorage.getItem('userXToken');
  }

  function _clearRefreshToken() {
    localStorage.removeItem('refresh_token');
  }
  function _clearToken() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_name');
  }
  function _getUsername() {
    return localStorage.getItem('user_name');
  }
  function _setAccessRoles(Roles) {
    localStorage.setItem('user_accessRoles', Roles);
  }
  function _getAccessRoles(Roles) {
    return localStorage.getItem('user_accessRoles');
  }
  return {
    getService: _getService,
    setToken: _setToken,
    getAccessToken: _getAccessToken,
    setAccessToken: _setAccessToken,
    getRefreshToken: _getRefreshToken,
    clearToken: _clearToken,
    getUsername: _getUsername,
    clearRefreshToken: _clearRefreshToken,
    setAccessRoles: _setAccessRoles,
    getAccessRoles: _getAccessRoles,
    getUserXToken: _getUserXToken,
  };
})();
export default LocalStorageService;
