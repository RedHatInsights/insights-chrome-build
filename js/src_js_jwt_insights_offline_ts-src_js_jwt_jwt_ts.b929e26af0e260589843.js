"use strict";
(self["webpackChunkinsights_chrome"] = self["webpackChunkinsights_chrome"] || []).push([["src_js_jwt_insights_offline_ts-src_js_jwt_jwt_ts"],{

/***/ "./src/js/App/FeatureFlags/FeatureFlagsProvider.tsx":
/*!**********************************************************!*\
  !*** ./src/js/App/FeatureFlags/FeatureFlagsProvider.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UNLEASH_ERROR_KEY": () => (/* binding */ UNLEASH_ERROR_KEY),
/* harmony export */   "unleashClient": () => (/* binding */ unleashClient),
/* harmony export */   "getFeatureFlagsError": () => (/* binding */ getFeatureFlagsError),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?474c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @unleash/proxy-client-react */ "webpack/sharing/consume/default/@unleash/proxy-client-react/@unleash/proxy-client-react");
/* harmony import */ var _unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_2__);



const config = {
    url: `${document.location.origin}/api/featureflags/v0`,
    clientKey: 'proxy-123',
    appName: 'web',
    headerName: 'X-Unleash-Auth',
    refreshInterval: 60000,
    metrcisInterval: 120000,
};
const UNLEASH_ERROR_KEY = 'chrome:feature-flags:error';
/**
 * Clear error localstorage flag before initialization
 */
localStorage.setItem(UNLEASH_ERROR_KEY, 'false');
const unleashClient = new _unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_2__.UnleashClient(config);
const getFeatureFlagsError = () => localStorage.getItem(UNLEASH_ERROR_KEY) === 'true';
unleashClient.on('error', () => {
    localStorage.setItem(UNLEASH_ERROR_KEY, 'true');
});
const FeatureFlagsProvider = ({ children }) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_unleash_proxy_client_react__WEBPACK_IMPORTED_MODULE_2___default()), { unleashClient: unleashClient }, children);
FeatureFlagsProvider.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureFlagsProvider);


/***/ }),

/***/ "./src/js/consts.ts":
/*!**************************!*\
  !*** ./src/js/consts.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HYDRA_ENDPOINT": () => (/* binding */ HYDRA_ENDPOINT),
/* harmony export */   "REQUESTS_COUNT": () => (/* binding */ REQUESTS_COUNT),
/* harmony export */   "REQUESTS_DATA": () => (/* binding */ REQUESTS_DATA),
/* harmony export */   "ACTIVE_ACCOUNT_SWITCH_NOTIFICATION": () => (/* binding */ ACTIVE_ACCOUNT_SWITCH_NOTIFICATION),
/* harmony export */   "ACCOUNT_REQUEST_TIMEOUT": () => (/* binding */ ACCOUNT_REQUEST_TIMEOUT),
/* harmony export */   "CROSS_ACCESS_ACCOUNT_NUMBER": () => (/* binding */ CROSS_ACCESS_ACCOUNT_NUMBER),
/* harmony export */   "ACTIVE_REMOTE_REQUEST": () => (/* binding */ ACTIVE_REMOTE_REQUEST),
/* harmony export */   "CROSS_ACCESS_ORG_ID": () => (/* binding */ CROSS_ACCESS_ORG_ID),
/* harmony export */   "visibilityFunctions": () => (/* binding */ visibilityFunctions),
/* harmony export */   "isVisible": () => (/* binding */ isVisible),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "activationRequestURLs": () => (/* binding */ activationRequestURLs)
/* harmony export */ });
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_interceptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/interceptors */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/interceptors/interceptors.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _App_FeatureFlags_FeatureFlagsProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App/FeatureFlags/FeatureFlagsProvider */ "./src/js/App/FeatureFlags/FeatureFlagsProvider.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/js/utils.ts");






const obj = {
    noAuthParam: 'noauth',
    offlineToken: '2402500adeacc30eb5c5a8a5e2e0ec1f',
};
const HYDRA_ENDPOINT = '/hydra/rest/se/sessions';
/**
 * Keys for storing acess reqeusts data
 */
const REQUESTS_COUNT = 'chrome:cross-account-requests:pending:count';
const REQUESTS_DATA = 'chrome:cross-account-requests:pending:data';
const ACTIVE_ACCOUNT_SWITCH_NOTIFICATION = 'chrome:cross-account-requests:active-notification';
const ACCOUNT_REQUEST_TIMEOUT = 'chrome:cross-account-requests:request-timeout';
const CROSS_ACCESS_ACCOUNT_NUMBER = 'cross_access_account_number';
const ACTIVE_REMOTE_REQUEST = 'chrome/active-remote-request';
const CROSS_ACCESS_ORG_ID = 'cross_access_org_id';
const matcherMapper = {
    isEmpty: (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()),
    isNotEmpty: (value) => !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(value),
};
const matchValue = (value, matcher) => {
    const match = matcherMapper[matcher];
    return typeof match === 'function' ? match(value) : value;
};
/**
 * Check if is permitted to see navigation link
 * @param {array} permissions array checked user permissions
 * @param {every|some} require type of permissions requirement
 * @returns {boolean}
 */
const checkPermissions = async (permissions = [], require = 'every') => {
    const userPermissions = await window.insights.chrome.getUserPermissions();
    return userPermissions && permissions[require]((item) => userPermissions.find(({ permission }) => permission === item));
};
const visibilityFunctions = {
    isOrgAdmin: async () => {
        const data = await window.insights.chrome.auth.getUser();
        try {
            return !!data.identity.user?.is_org_admin;
        }
        catch {
            return false;
        }
    },
    isActive: async () => {
        const data = await window.insights.chrome.auth.getUser();
        try {
            return !!data.identity.user?.is_active;
        }
        catch {
            return false;
        }
    },
    isInternal: async () => {
        const data = await window.insights.chrome.auth.getUser();
        try {
            return !!data.identity.user?.is_internal;
        }
        catch {
            return false;
        }
    },
    isEntitled: async (appName) => {
        const data = await window.insights.chrome.auth.getUser();
        const { entitlements } = data || {};
        return data.entitlements && appName
            ? Boolean(entitlements[appName] && entitlements[appName].is_entitled)
            : // eslint-disable-next-line camelcase
                Object.entries(entitlements || {}).reduce((acc, [key, { is_entitled }]) => ({ ...acc, [key]: is_entitled }), {});
    },
    isProd: () => (0,_utils__WEBPACK_IMPORTED_MODULE_4__.isProd)(),
    isBeta: () => (0,_utils__WEBPACK_IMPORTED_MODULE_4__.isBeta)(),
    isHidden: () => true,
    withEmail: async (...toHave) => {
        const data = await window.insights.chrome.auth.getUser();
        const { identity: { user }, } = data || {};
        return toHave?.some((item) => user?.email?.includes(item));
    },
    loosePermissions: (permissions) => checkPermissions(permissions, 'some'),
    hasPermissions: checkPermissions,
    hasLocalStorage: (key, value) => localStorage.get(key) === value,
    hasCookie: (cookieKey, cookieValue) => js_cookie__WEBPACK_IMPORTED_MODULE_2__.default.get(cookieKey) === cookieValue,
    apiRequest: async ({ url, method = 'GET', accessor, matcher, ...options }) => {
        const data = await window.insights.chrome.auth.getUser();
        // this will log a bunch of 403s if the account number isn't present
        if (data.identity.account_number) {
            return (0,_redhat_cloud_services_frontend_components_utilities_interceptors__WEBPACK_IMPORTED_MODULE_5__.default)({
                url,
                method,
                ...options,
            })
                .then((response) => matchValue(accessor ? lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(response || {}, accessor) : response, matcher))
                .catch(() => {
                console.log('Unable to retrieve visibility result', { visibilityMethod: 'apiRequest', method, url });
                return false;
            });
        }
        else {
            console.log('Unable to call API, no account number');
            return false;
        }
    },
    featureFlag: (flagName, expectedValue) => (0,_App_FeatureFlags_FeatureFlagsProvider__WEBPACK_IMPORTED_MODULE_3__.getFeatureFlagsError)() !== true && _App_FeatureFlags_FeatureFlagsProvider__WEBPACK_IMPORTED_MODULE_3__.unleashClient.isEnabled(flagName) === expectedValue,
};
const isVisible = (limitedApps, app, visibility) => {
    if (limitedApps && app && limitedApps.includes(app)) {
        if (visibility instanceof Object) {
            return Boolean(visibility[app]);
        }
        return visibility;
    }
    return true;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.freeze(obj));
const activationRequestURLs = [
    'azure-openshift-activation',
    'azure-ocp-activation',
    'azure-oke-activation',
    'azure-opp-activation',
    'aws-openshift-activation',
    'aws-ocp-activation',
    'aws-oke-activation',
    'aws-opp-activation',
];


/***/ }),

/***/ "./src/js/jwt/Priv.ts":
/*!****************************!*\
  !*** ./src/js/jwt/Priv.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var keycloak_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! keycloak-js */ "./node_modules/keycloak-js/dist/keycloak.mjs");

class Priv {
    _cookie;
    _keycloak;
    cookie;
    constructor() {
        this._cookie;
        this._keycloak = {};
    }
    setCookie(cookie) {
        this.cookie = cookie;
    }
    setKeycloak(options, onTokenExpired, onAuthSuccess, onAuthRefreshSuccess) {
        this._keycloak = new keycloak_js__WEBPACK_IMPORTED_MODULE_0__.default(options);
        this._keycloak.onTokenExpired = onTokenExpired;
        this._keycloak.onAuthSuccess = onAuthSuccess;
        this._keycloak.onAuthRefreshSuccess = onAuthRefreshSuccess;
    }
    initializeKeycloak(options) {
        this._keycloak?.init(options);
    }
    setToken(token) {
        this._keycloak.authenticated = true;
        this._keycloak.token = token;
    }
    initialize(options) {
        return this._keycloak.init(options);
    }
    setTokenParsed(tokenParsed) {
        this._keycloak.tokenParsed = tokenParsed;
    }
    getTokenParsed() {
        return this._keycloak.tokenParsed;
    }
    getToken() {
        return this._keycloak.token;
    }
    getRefershToken() {
        return this._keycloak.refreshToken;
    }
    login(options) {
        return this._keycloak.login(options);
    }
    clearToken() {
        this._keycloak.clearToken();
    }
    getCookie() {
        return this.cookie;
    }
    logout(options) {
        return this._keycloak.logout(options);
    }
    getAuthenticated() {
        return this._keycloak.authenticated;
    }
    updateToken() {
        // 5 is default KC value, min validaty is required by KC byt then has a default value for some reason
        return this._keycloak.updateToken(5);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Priv);


/***/ }),

/***/ "./src/js/jwt/constants.ts":
/*!*********************************!*\
  !*** ./src/js/jwt/constants.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_ROUTES": () => (/* binding */ DEFAULT_ROUTES),
/* harmony export */   "options": () => (/* binding */ options),
/* harmony export */   "noAuthParam": () => (/* binding */ noAuthParam),
/* harmony export */   "offlineToken": () => (/* binding */ offlineToken)
/* harmony export */ });
// Global Defaults
const DEFAULT_ROUTES = {
    prod: {
        url: ['access.redhat.com', 'prod.foo.redhat.com', 'cloud.redhat.com', 'console.redhat.com'],
        sso: 'https://sso.redhat.com/auth',
        portal: 'https://access.redhat.com',
    },
    qa: {
        url: ['qa.foo.redhat.com', 'qa.cloud.redhat.com', 'qa.console.redhat.com'],
        sso: 'https://sso.qa.redhat.com/auth',
        portal: 'https://access.qa.redhat.com',
    },
    ci: {
        url: ['ci.foo.redhat.com', 'ci.cloud.redhat.com', 'ci.console.redhat.com'],
        sso: 'https://sso.qa.redhat.com/auth',
        portal: 'https://access.qa.redhat.com',
    },
    qaprodauth: {
        url: ['qaprodauth.foo.redhat.com', 'qaprodauth.cloud.redhat.com', 'qaprodauth.console.redhat.com'],
        sso: 'https://sso.redhat.com/auth',
        portal: 'https://access.redhat.com',
    },
    stage: {
        url: ['stage.foo.redhat.com', 'cloud.stage.redhat.com', 'console.stage.redhat.com', 'fetest.stage.redhat.com'],
        sso: 'https://sso.stage.redhat.com/auth',
        portal: 'https://access.stage.redhat.com',
    },
    gov: {
        url: ['gov.cloud.redhat.com', 'gov.console.redhat.com'],
        sso: 'https://sso.redhat.com/auth',
        portal: 'https://access.redhat.com',
    },
    govStage: {
        url: ['gov.cloud.stage.redhat.com', 'gov.console.stage.redhat.com'],
        sso: 'https://sso.stage.redhat.com/auth',
        portal: 'https://access.redhat.com',
    },
    dev: {
        url: ['console.dev.redhat.com'],
        sso: 'https://sso.redhat.com/auth',
        portal: 'https://access.redhat.com',
    },
};
const options = {
    realm: 'redhat-external',
    clientId: 'cloud-services',
    cookieName: 'cs_jwt',
};
const noAuthParam = 'noauth';
const offlineToken = '2402500adeacc30eb5c5a8a5e2e0ec1f';


/***/ }),

/***/ "./src/js/jwt/insights/entitlements.ts":
/*!*********************************************!*\
  !*** ./src/js/jwt/insights/entitlements.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redhat_cloud_services_entitlements_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redhat-cloud-services/entitlements-client */ "./node_modules/@redhat-cloud-services/entitlements-client/dist/index.js");
/* harmony import */ var _redhat_cloud_services_entitlements_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_entitlements_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cache */ "./src/js/utils/cache.ts");




const BASE_PATH = '/api/entitlements/v1';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((cachePrefix) => {
    const cache = (0,_utils_cache__WEBPACK_IMPORTED_MODULE_3__.bootstrapCache)(BASE_PATH, `${cachePrefix}-entitlements`);
    const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({ adapter: cache.adapter });
    instance.interceptors.response.use((response) => {
        if (response && response.request && response.request.fromCache !== true) {
            const last = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.lastActive)('/api/entitlements/v1/services', 'fallback');
            const keys = Object.keys(localStorage).filter((key) => key.endsWith('/api/entitlements/v1/services') && key !== last);
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.deleteLocalStorageItems)(keys);
        }
        return response.data || response;
    });
    return new _redhat_cloud_services_entitlements_client__WEBPACK_IMPORTED_MODULE_1__.ServicesApi(undefined, BASE_PATH, instance);
});


/***/ }),

/***/ "./src/js/jwt/insights/offline.ts":
/*!****************************************!*\
  !*** ./src/js/jwt/insights/offline.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wipePostbackParamsThatAreNotForUs": () => (/* binding */ wipePostbackParamsThatAreNotForUs),
/* harmony export */   "getOfflineToken": () => (/* binding */ getOfflineToken),
/* harmony export */   "getWindow": () => (/* binding */ getWindow),
/* harmony export */   "getPostbackUrl": () => (/* binding */ getPostbackUrl),
/* harmony export */   "getPostDataObject": () => (/* binding */ getPostDataObject),
/* harmony export */   "parseHashString": () => (/* binding */ parseHashString)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ "./src/js/consts.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/js/jwt/constants.ts");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./url */ "./src/js/jwt/insights/url.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




const priv = {};
// note this function is not exposed
// it is a run everytime and produce some side affect thing
// if a special condition is encountered
//
// it would be great to not have this behave this way
// but the order that this needs to run in is very specific
// so that is somewhat difficult
function wipePostbackParamsThatAreNotForUs() {
    if (getWindow().location.href.indexOf(_consts__WEBPACK_IMPORTED_MODULE_0__.default.offlineToken) !== -1) {
        const { hash, search, origin, pathname } = getWindow().location;
        const noAuthParam = new URLSearchParams(search).get(_consts__WEBPACK_IMPORTED_MODULE_0__.default.noAuthParam);
        // this is a UHC offline token postback
        // we need to not let the JWT lib see this
        // and try to use it
        priv.postbackUrl = `${origin}${pathname}?${_consts__WEBPACK_IMPORTED_MODULE_0__.default.noAuthParam}=${noAuthParam}${hash}`;
        // we do this because keycloak.js looks at the hash for its parameters
        // and if found uses the params for its own use
        //
        // in the UHC offline post back case we *dont*
        // want the params to be used by keycloak.js
        // so we have to destroy this stuff and let regular auth routines happen
        getWindow().location.hash = '';
        // nuke the params so that people dont see the ugly
        const url = new URL(getWindow().location.href);
        url.searchParams.delete(_consts__WEBPACK_IMPORTED_MODULE_0__.default.noAuthParam);
        getWindow().history.pushState('offlinePostback', '', url.toString());
    }
}
async function getOfflineToken(realm, clientId, configSsoUrl) {
    const postbackUrl = getPostbackUrl();
    if (priv.response) {
        return Promise.resolve(priv.response);
    }
    if (!postbackUrl) {
        // we need this postback URL because it contains parameters needed to
        // call KC for the actual offline token
        // thus we cant continue if it is missing
        return Promise.reject('not available');
    }
    const ssoUrl = await (0,_url__WEBPACK_IMPORTED_MODULE_2__.default)(_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ROUTES, configSsoUrl);
    const tokenURL = `${ssoUrl}/realms/${realm}/protocol/openid-connect/token`;
    const params = parseHashString(postbackUrl);
    return axios__WEBPACK_IMPORTED_MODULE_3___default().post(tokenURL, getPostDataString(getPostDataObject(postbackUrl, clientId, params.code)), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
        .then((response) => {
        priv.response = response;
        return response;
    });
}
function getWindow() {
    return window;
}
function getPostbackUrl() {
    // let folks only do this once
    const ret = priv.postbackUrl;
    delete priv.postbackUrl;
    return ret;
}
function getPostDataObject(url, clientId, code) {
    return {
        code: code,
        grant_type: 'authorization_code',
        client_id: clientId,
        redirect_uri: encodeURIComponent(url.split('#')[0]), // eslint-disable-line camelcase
    };
}
function parseHashString(str) {
    return str
        .split('#')[1]
        .split('&')
        .reduce((result, item) => {
        const parts = item.split('=');
        result[parts[0]] = parts[1];
        return result;
    }, {});
}
function getPostDataString(obj) {
    return Object.entries(obj)
        .map((entry) => {
        return `${entry[0]}=${entry[1]}`;
    })
        .join('&');
}


/***/ }),

/***/ "./src/js/jwt/insights/url.ts":
/*!************************************!*\
  !*** ./src/js/jwt/insights/url.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logger */ "./src/js/jwt/logger.ts");

const log = (0,_logger__WEBPACK_IMPORTED_MODULE_0__.default)('insights/url.js');
const ssoUrl = __webpack_require__.e(/*! import() | sso-url */ "sso-url").then(__webpack_require__.bind(__webpack_require__, /*! ./ssoUrl */ "./src/js/jwt/insights/ssoUrl.js")).then((sso) => sso.default);
// Parse through keycloak options routes
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (env, configSsoUrl) => {
    if (await ssoUrl) {
        log('Using dynamic SSO_URL found! ' + ssoUrl);
        return ssoUrl;
    }
    if (configSsoUrl) {
        return configSsoUrl;
    }
    const ssoEnv = Object.entries(env).find(([, { url }]) => url.includes(location.hostname));
    if (ssoEnv) {
        log(`SSO Url: ${ssoEnv?.[1].sso}`);
        log(`Current env: ${ssoEnv?.[0]}`);
        return ssoEnv?.[1].sso;
    }
    else {
        log('SSO url: not found, defaulting to qa');
        log('Current env: not found, defaultint to qa');
        return 'https://sso.qa.redhat.com/auth';
    }
});


/***/ }),

/***/ "./src/js/jwt/insights/user.ts":
/*!*************************************!*\
  !*** ./src/js/jwt/insights/user.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildUser": () => (/* binding */ buildUser),
/* harmony export */   "tryBounceIfUnentitled": () => (/* binding */ tryBounceIfUnentitled),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/js/utils.ts");
/* harmony import */ var _entitlements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entitlements */ "./src/js/jwt/insights/entitlements.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger */ "./src/js/jwt/logger.ts");



const log = (0,_logger__WEBPACK_IMPORTED_MODULE_2__.default)('insights/user.js');
const pathMapper = {
    'cost-management': 'cost_management',
    insights: 'insights',
    openshift: 'openshift',
    migrations: 'migrations',
    ansible: 'ansible',
    subscriptions: 'subscriptions',
    settings: 'settings',
    'user-preferences': 'user_preferences',
    internal: 'internal',
};
const unentitledPathMapper = (section, service) => ({
    ansible: `${document.baseURI}${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isBeta)() ? 'beta/' : ''}ansible/ansible-dashboard/trial`,
}[section] || `${document.baseURI}?not_entitled=${service}`);
function getWindow() {
    return window;
}
/* eslint-disable camelcase */
function buildUser(token) {
    const user = token
        ? {
            identity: {
                account_number: token.account_number,
                org_id: token.org_id,
                type: token.type,
                ...(token.idp && { idp: token.idp }),
                user: {
                    username: token.username,
                    email: token.email,
                    first_name: token.first_name,
                    last_name: token.last_name,
                    is_active: token.is_active,
                    is_org_admin: token.is_org_admin,
                    is_internal: token.is_internal,
                    locale: token.locale,
                },
                internal: {
                    org_id: token.org_id,
                    account_id: token.account_id,
                },
            },
        }
        : null;
    return user;
}
/* eslint-enable camelcase */
function tryBounceIfUnentitled(data, section) {
    // only test this on the apps that are in valid sections
    // we need to keep /apps and other things functional
    if (section !== 'insights' &&
        section !== 'openshift' &&
        section !== 'cost-management' &&
        section !== 'migrations' &&
        section !== 'ansible' &&
        section !== 'subscriptions' &&
        section !== 'settings' &&
        section !== 'user-preferences' &&
        section !== 'internal') {
        return;
    }
    const service = pathMapper[section];
    const redirectAddress = unentitledPathMapper(section, service);
    if (data === true) {
        // this is a force bounce scenario!
        getWindow().location.replace(redirectAddress);
    }
    if (section && typeof data === 'object') {
        if (data?.[service]?.is_entitled) {
            log(`Entitled to: ${service}`);
        }
        else {
            log(`Not entitled to: ${service}`);
            getWindow().location.replace(redirectAddress);
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (token) => {
    const user = buildUser(token);
    const pathName = getWindow().location.pathname.split('/');
    pathName.shift();
    if (pathName[0] === 'beta') {
        pathName.shift();
    }
    if (pathName?.[1] === 'subscriptions' || pathName?.[1] === 'cost-management') {
        pathName.shift();
    }
    if (user) {
        log(`Account Number: ${user.identity.account_number}`);
        let data = {};
        try {
            if (user.identity.account_number) {
                data = (await (0,_entitlements__WEBPACK_IMPORTED_MODULE_1__.default)(token.jti).servicesGet());
            }
            else {
                console.log('Cannot call entitlements API, no account number');
            }
        }
        catch {
            // let's swallow error from services API
        }
        // NOTE: Openshift supports Users with Account Number of -1
        // thus we need to bypass here
        // call entitlements on / /beta /openshift or /beta/openshift,
        // but swallow error
        //
        // Landing Page *does* support accounts with -1
        // it has to
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.pageAllowsUnentitled)()) {
            return {
                ...user,
                entitlements: data,
            };
        }
        // Important this has to come after the above -1 allow checks
        // Otherwise we get bounced on those paths
        //
        // It also needs to not go int he servicesApi call
        // because 3scale 403s if the Account number is -1
        //
        // we "force" a bounce here because the entitlements API
        // was never called
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isValidAccountNumber)(user.identity.account_number)) {
            tryBounceIfUnentitled(true, pathName[0]);
            return;
        }
        tryBounceIfUnentitled(data, pathName[0]);
        return {
            ...user,
            entitlements: data,
        };
    }
    else {
        log('User not ready');
    }
});


/***/ }),

/***/ "./src/js/jwt/jwt.ts":
/*!***************************!*\
  !*** ./src/js/jwt/jwt.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLOBAL_FILTER_KEY": () => (/* binding */ GLOBAL_FILTER_KEY),
/* harmony export */   "decodeToken": () => (/* binding */ decodeToken),
/* harmony export */   "doOffline": () => (/* binding */ doOffline),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "isExistingValid": () => (/* binding */ isExistingValid),
/* harmony export */   "initSuccess": () => (/* binding */ initSuccess),
/* harmony export */   "initError": () => (/* binding */ initError),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "logoutAllTabs": () => (/* binding */ logoutAllTabs),
/* harmony export */   "getUserInfo": () => (/* binding */ getUserInfo),
/* harmony export */   "isAuthenticated": () => (/* binding */ isAuthenticated),
/* harmony export */   "expiredToken": () => (/* binding */ expiredToken),
/* harmony export */   "updateToken": () => (/* binding */ updateToken),
/* harmony export */   "getCookieExpires": () => (/* binding */ getCookieExpires),
/* harmony export */   "setCookie": () => (/* binding */ setCookie),
/* harmony export */   "setCookieWrapper": () => (/* binding */ setCookieWrapper),
/* harmony export */   "getEncodedToken": () => (/* binding */ getEncodedToken),
/* harmony export */   "getUrl": () => (/* binding */ getUrl)
/* harmony export */ });
/* harmony import */ var keycloak_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! keycloak-js */ "./node_modules/keycloak-js/dist/keycloak.mjs");
/* harmony import */ var broadcast_channel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! broadcast-channel */ "./node_modules/broadcast-channel/dist/esbrowser/broadcast-channel.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/js/utils.ts");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/minimal/esm/index.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "./src/js/jwt/logger.ts");
/* harmony import */ var _insights_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./insights/url */ "./src/js/jwt/insights/url.ts");
/* harmony import */ var _insights_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./insights/user */ "./src/js/jwt/insights/user.ts");
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! urijs */ "./node_modules/urijs/src/URI.js");
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./src/js/jwt/constants.ts");
/* harmony import */ var _Priv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Priv */ "./src/js/jwt/Priv.ts");
// Imports






// Insights Specific





const GLOBAL_FILTER_KEY = 'chrome:global-filter';
const log = (0,_logger__WEBPACK_IMPORTED_MODULE_3__.default)('jwt.js');
const DEFAULT_COOKIE_NAME = 'cs_jwt';
const priv = new _Priv__WEBPACK_IMPORTED_MODULE_8__.default();
// Broadcast Channel
const authChannel = new broadcast_channel__WEBPACK_IMPORTED_MODULE_9__.BroadcastChannel('auth');
authChannel.onmessage = (e) => {
    if (e && e.data && e.data.type) {
        log(`BroadcastChannel, Received event : ${e.data.type}`);
        switch (e.data.type) {
            case 'logout':
                return logout();
            case 'login':
                return login();
            case 'refresh':
                return updateToken();
        }
    }
};
function decodeToken(str) {
    str = str.split('.')[1];
    str = str.replace('/-/g', '+');
    str = str.replace('/_/g', '/');
    switch (str.length % 4) {
        case 0:
            break;
        case 2:
            str += '==';
            break;
        case 3:
            str += '=';
            break;
        default:
            throw 'Invalid token';
    }
    str = (str + '===').slice(0, str.length + (str.length % 4));
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    str = decodeURIComponent(escape(atob(str)));
    const res = JSON.parse(str);
    return res;
}
const doOffline = (key, val, configSsoUrl) => {
    const url = urijs__WEBPACK_IMPORTED_MODULE_6___default()(window.location.href);
    url.removeSearch(key);
    url.addSearch(key, val);
    Promise.resolve((0,_insights_url__WEBPACK_IMPORTED_MODULE_4__.default)(_constants__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_ROUTES, configSsoUrl)).then(async (ssoUrl) => {
        const options = {
            ..._constants__WEBPACK_IMPORTED_MODULE_7__.options,
            promiseType: 'native',
            redirectUri: url.toString(),
            url: ssoUrl,
        };
        const kc = new keycloak_js__WEBPACK_IMPORTED_MODULE_0__.default(options);
        await kc.init(options);
        kc.login({
            scope: 'offline_access',
        });
    });
};
/*** Initialization ***/
const init = (options, configSsoUrl) => {
    log('Initializing');
    const cookieName = options.cookieName ? options.cookieName : DEFAULT_COOKIE_NAME;
    priv.setCookie({ cookieName });
    return Promise.resolve((0,_insights_url__WEBPACK_IMPORTED_MODULE_4__.default)(options.routes ? options.routes : _constants__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_ROUTES, configSsoUrl)).then((ssoUrl) => {
        //constructor for new Keycloak Object?
        options.url = ssoUrl;
        options.clientId = 'cloud-services';
        options.realm = 'redhat-external';
        //options for keycloak.init method
        options.promiseType = 'native';
        options.onLoad = 'check-sso';
        options.checkLoginIframe = false;
        const isBeta = window.location.pathname.split('/')[1] === 'beta' ? '/beta' : '';
        options.silentCheckSsoRedirectUri = `https://${window.location.host}${isBeta}/apps/chrome/silent-check-sso.html`;
        if (window.localStorage && window.localStorage.getItem('chrome:jwt:shortSession') === 'true') {
            options.realm = 'short-session';
        }
        //priv.keycloak = Keycloak(options);
        priv.setKeycloak(options, updateToken, loginAllTabs, refreshTokens);
        if (options.token) {
            if (isExistingValid(options.token)) {
                // we still need to init async
                // so that the renewal times and such fire
                priv.initializeKeycloak(options);
                // Here we have an existing key
                // We need to set up some of the keycloak state
                // so that the reset of the methods that Chrome uses
                // to check if things are good get faked out
                // TODO reafctor the direct access to priv.keycloak
                // away from the users
                priv.setToken(options.token);
                return Promise.resolve();
                // return new Promise((resolve) => {
                //   resolve();
                // });
            }
            else {
                delete options.token;
            }
        }
        return priv.initialize(options).then(initSuccess).catch(initError);
    });
};
function isExistingValid(token) {
    log('Checking validity of existing JWT');
    try {
        if (!token) {
            return false;
        }
        const parsed = decodeToken(token);
        if (!parsed.exp) {
            return false;
        }
        // Date.now() has extra precision...
        // it includes milis
        // we need to trim it down to valid seconds from epoch
        // because we compare to KC's exp which is seconds from epoch
        const now = Date.now().toString().substr(0, 10);
        const exp = parsed.exp - parseInt(now);
        log(`Token expires in ${exp}`);
        // We want to invalidate tokens if they are getting close
        // to the expiry time
        // So that we can be someone safe from time skew
        // issues on our APIs
        // i.e. the client could have a slight time skew
        // and the API is true (because NTP) and we could send down
        // a JWT that is actually exipred
        if (exp > 90) {
            priv.setTokenParsed(parsed);
            return true;
        }
        else {
            if (exp > 0) {
                log('token is expiring in < 90 seconds');
            }
            else {
                log('token is expired');
            }
            return false;
        }
    }
    catch (e) {
        log(e);
        return false;
    }
}
// keycloak init successful
function initSuccess() {
    log('JWT Initialized');
    setCookie(priv.getToken());
}
// keycloak init failed
function initError() {
    log('JWT init error');
    logout();
}
/*** Login/Logout ***/
function login() {
    log('Logging in');
    // Redirect to login
    js_cookie__WEBPACK_IMPORTED_MODULE_1__.default.set('cs_loggedOut', 'false');
    return priv.login({ redirectUri: location.href });
}
function logout(bounce) {
    log('Logging out');
    const cookieName = priv.getCookie()?.cookieName;
    if (cookieName) {
        js_cookie__WEBPACK_IMPORTED_MODULE_1__.default.remove(cookieName);
    }
    js_cookie__WEBPACK_IMPORTED_MODULE_1__.default.remove('cs_demo');
    const isBeta = window.location.pathname.split('/')[1] === 'beta' ? '/beta' : '';
    const keys = Object.keys(localStorage).filter((key) => key.endsWith('/api/entitlements/v1/services') ||
        key.endsWith('/chrome') ||
        key.endsWith('/chrome-store') ||
        key.startsWith('kc-callback') ||
        key.startsWith(GLOBAL_FILTER_KEY));
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.deleteLocalStorageItems)(keys);
    // Redirect to logout
    if (bounce) {
        const eightSeconds = new Date(new Date().getTime() + 8 * 1000);
        js_cookie__WEBPACK_IMPORTED_MODULE_1__.default.set('cs_loggedOut', 'true', {
            expires: eightSeconds,
        });
        priv.logout({
            redirectUri: `https://${window.location.host}${isBeta}`,
        });
        // Clear cookies and tokens
        priv.clearToken();
    }
}
const logoutAllTabs = (bounce) => {
    authChannel.postMessage({ type: 'logout' });
    logout(bounce);
};
function loginAllTabs() {
    authChannel.postMessage({ type: 'login' });
}
/*** User Functions ***/
// Get user information
const getUserInfo = () => {
    log('Getting User Information');
    const jwtCookie = js_cookie__WEBPACK_IMPORTED_MODULE_1__.default.get(DEFAULT_COOKIE_NAME);
    if (jwtCookie && isExistingValid(jwtCookie) && isExistingValid(priv.getToken())) {
        return (0,_insights_user__WEBPACK_IMPORTED_MODULE_5__.default)(priv.getTokenParsed());
    }
    return updateToken()
        .then(() => {
        log('Successfully updated token');
        return (0,_insights_user__WEBPACK_IMPORTED_MODULE_5__.default)(priv.getTokenParsed());
    })
        .catch(() => {
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.pageRequiresAuthentication)()) {
            log('Trying to log in user to refresh token');
            return login();
        }
    });
};
// Check to see if the user is loaded, this is what API calls should wait on
const isAuthenticated = () => {
    log(`User Ready: ${priv.getAuthenticated()}`);
    return priv.getAuthenticated();
};
/*** Check Token Status ***/
// If a token is expired, logout of all tabs
const expiredToken = () => {
    log('Token has expired, trying to log out');
    logout();
};
// Broadcast message to refresh tokens across tabs
function refreshTokens() {
    setCookie(priv.getToken());
    authChannel.postMessage({ type: 'refresh' });
}
// Actually update the token
function updateToken() {
    return Promise.resolve(priv?.updateToken?.())
        .then((refreshed) => {
        // Important! after we update the token
        // we have to again populate the Cookie!
        // Otherwise we just update and dont send
        // the updated token down stream... and things 401
        setCookie(priv.getToken());
        log('Attempting to update token');
        if (refreshed) {
            log('Token was successfully refreshed');
        }
        else {
            log('Token is still valid, not updating');
        }
    })
        .catch((err) => {
        log(err);
        _sentry_browser__WEBPACK_IMPORTED_MODULE_10__.captureException(err);
        log('Token updated failed, trying to reauth');
        login();
    });
}
function getCookieExpires(exp) {
    // we want the cookie to expire at the same time as the JWT session
    // so we take the exp and get a new GTMString from that
    const date = new Date(0);
    date.setUTCSeconds(exp);
    return date.toUTCString();
}
// Set the cookie for 3scale
function setCookie(token) {
    log('Setting the cs_jwt cookie');
    if (token && token.length > 10) {
        const cookieName = priv.getCookie()?.cookieName;
        if (cookieName) {
            setCookieWrapper(`${cookieName}=${token};` + `path=/;` + `secure=true;` + `expires=${getCookieExpires(decodeToken(token).exp)}`);
        }
    }
}
// do this so we can mock out for test
function setCookieWrapper(str) {
    window.document.cookie = str;
}
// Encoded WIP
const getEncodedToken = () => {
    log('Trying to get the encoded token');
    if (!isExistingValid(priv.getToken())) {
        log('Failed to get encoded token, trying to update');
        updateToken();
    }
    return priv.getToken();
};
// Keycloak server URL
const getUrl = (ssoUrl) => {
    return (0,_insights_url__WEBPACK_IMPORTED_MODULE_4__.default)(_constants__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_ROUTES, ssoUrl);
};


/***/ }),

/***/ "./src/js/jwt/logger.ts":
/*!******************************!*\
  !*** ./src/js/jwt/logger.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// const pub = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((fileName) => {
    return (msg) => {
        if (window.console) {
            if (window.localStorage && window.localStorage.getItem('chrome:jwt:debug')) {
                window.console.log(`[JWT][${fileName}] ${msg}`);
            }
        }
    };
});


/***/ }),

/***/ "./src/js/utils.ts":
/*!*************************!*\
  !*** ./src/js/utils.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWindow": () => (/* binding */ getWindow),
/* harmony export */   "isValidAccountNumber": () => (/* binding */ isValidAccountNumber),
/* harmony export */   "getSection": () => (/* binding */ getSection),
/* harmony export */   "pageAllowsUnentitled": () => (/* binding */ pageAllowsUnentitled),
/* harmony export */   "pageRequiresAuthentication": () => (/* binding */ pageRequiresAuthentication),
/* harmony export */   "createReduxListener": () => (/* binding */ createReduxListener),
/* harmony export */   "deleteLocalStorageItems": () => (/* binding */ deleteLocalStorageItems),
/* harmony export */   "lastActive": () => (/* binding */ lastActive),
/* harmony export */   "isAnsible": () => (/* binding */ isAnsible),
/* harmony export */   "getUrl": () => (/* binding */ getUrl),
/* harmony export */   "getEnv": () => (/* binding */ getEnv),
/* harmony export */   "getEnvDetails": () => (/* binding */ getEnvDetails),
/* harmony export */   "isProd": () => (/* binding */ isProd),
/* harmony export */   "isBeta": () => (/* binding */ isBeta),
/* harmony export */   "isFedRamp": () => (/* binding */ isFedRamp),
/* harmony export */   "updateDocumentTitle": () => (/* binding */ updateDocumentTitle),
/* harmony export */   "highlightItems": () => (/* binding */ highlightItems),
/* harmony export */   "levelArray": () => (/* binding */ levelArray),
/* harmony export */   "noop": () => (/* binding */ noop),
/* harmony export */   "trustarcScriptSetup": () => (/* binding */ trustarcScriptSetup),
/* harmony export */   "loadFedModules": () => (/* binding */ loadFedModules)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jwt_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt/constants */ "./src/js/jwt/constants.ts");
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/flatMap */ "./node_modules/lodash/flatMap.js");
/* harmony import */ var lodash_flatMap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_flatMap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




function getWindow() {
    return window;
}
function isValidAccountNumber(num) {
    if (!num)
        return false;
    if (num === -1)
        return false;
    if (num === '-1')
        return false;
    return Number.isInteger(Number(num));
}
function getSection() {
    const sections = getWindow().location.pathname.split('/');
    if (sections[1] === 'beta') {
        return sections[2] || '';
    }
    return sections[1];
}
function pageAllowsUnentitled() {
    const pathname = getWindow().location.pathname;
    if (pathname === '/' ||
        pathname === '/beta' ||
        pathname === '/beta/' ||
        pathname.indexOf('/openshift') === 0 ||
        pathname.indexOf('/beta/openshift') === 0 ||
        pathname.indexOf('/security') === 0 ||
        pathname.indexOf('/beta/security') === 0 ||
        pathname.indexOf('/application-services') === 0 ||
        pathname.indexOf('/beta/application-services') === 0 ||
        pathname.indexOf('/hac') === 0 ||
        pathname.indexOf('/beta/hac') === 0 ||
        pathname.indexOf('/ansible/ansible-dashboard/trial') === 0 ||
        pathname.indexOf('/beta/ansible/ansible-dashboard/trial') === 0) {
        return true;
    }
    return false;
}
function pageRequiresAuthentication() {
    const section = getSection();
    if (section === 'insights' ||
        section === 'cost-management' ||
        section === 'apps' ||
        section === 'ansible' ||
        section === 'migrations' ||
        section === 'subscriptions' ||
        section === 'openshift' ||
        section === 'settings' ||
        section === 'user-preferences' ||
        section === 'internal' ||
        section === 'application-services') {
        return true;
    }
    return false;
}
/**
 * Creates a redux listener that watches the state on given path (e.g. chrome.appNav) and calls
 * the given function when the state on the given path changes.
 *
 * The function is called with two parameters: current state value on the path, store reference
 */
function createReduxListener(store, path, fn) {
    let previous = undefined;
    return () => {
        const state = store.getState();
        const current = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(state, path);
        if (current !== previous) {
            previous = current;
            fn(current, store);
        }
    };
}
function deleteLocalStorageItems(keys) {
    keys.map((key) => localStorage.removeItem(key));
}
function lastActive(searchString, fallback) {
    return Object.keys(localStorage).reduce((acc, curr) => {
        if (curr.includes(searchString)) {
            try {
                let accDate;
                try {
                    const localStorageDate = localStorage.getItem(acc);
                    accDate = localStorageDate ? new Date(JSON.parse(localStorageDate)?.expires) : new Date();
                }
                catch {
                    accDate = new Date();
                }
                const currObj = JSON.parse(localStorage.getItem(curr) || '');
                return accDate >= new Date(currObj.expires) ? acc : curr;
            }
            catch (e) {
                return acc;
            }
        }
        return acc;
    }, fallback);
}
const isAnsible = (sections) => (sections.includes('ansible') && sections.includes('insights') ? 1 : 0);
function getUrl(type) {
    if (window.location.pathname === '/beta/' || window.location.pathname === '/') {
        return 'landing';
    }
    const sections = window.location.pathname.split('/');
    if (sections[1] === 'beta') {
        return type === 'bundle' ? sections[2] : sections[3 + isAnsible(sections)];
    }
    return type === 'bundle' ? sections[1] : sections[2 + isAnsible(sections)];
}
function getEnv() {
    return Object.entries(_jwt_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ROUTES).find(([, { url }]) => url.includes(location.hostname))?.[0] || 'qa';
}
function getEnvDetails() {
    return Object.entries(_jwt_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ROUTES).find(([, { url }]) => url.includes(location.hostname))?.[1];
}
function isProd() {
    return location.host === 'cloud.redhat.com' || location.host === 'console.redhat.com' || location.host.includes('prod.foo.redhat.com');
}
function isBeta() {
    return window.location.pathname.split('/')[1] === 'beta' ? true : false;
}
function isFedRamp() {
    return getEnv() === 'gov';
}
function updateDocumentTitle(title, noSuffix = false) {
    const titleSuffix = '| console.redhat.com';
    if (typeof title === 'undefined') {
        return;
    }
    if (typeof title === 'string') {
        document.title = title.includes(titleSuffix) || noSuffix ? title : `${title} ${titleSuffix}`;
    }
    else {
        console.warn(`Title is not a string. Got ${typeof title} instead.`);
    }
}
const activateChild = (hrefMatch, childRoutes) => {
    let hasActiveChild = false;
    const routes = childRoutes.map((item) => {
        const active = item.href === hrefMatch;
        if (active) {
            hasActiveChild = true;
        }
        return {
            ...item,
            active,
        };
    });
    return {
        active: hasActiveChild,
        routes,
    };
};
function mutateSchema(hrefMatch, navItems) {
    return navItems.map((item) => {
        const { href, routes, navItems } = item;
        if (!href && navItems) {
            return {
                ...item,
                navItems: mutateSchema(hrefMatch, navItems),
            };
        }
        if (!href && routes) {
            return {
                ...item,
                ...activateChild(hrefMatch, routes),
            };
        }
        if (href) {
            return {
                ...item,
                active: item.href === hrefMatch,
            };
        }
        return item;
    });
}
const highlightItems = (pathname, navItems, sortedLinks) => {
    const cleanPathname = pathname.replace(/\/$/, '');
    const segmentsCount = cleanPathname.split('/').length + 1;
    const matchedLink = sortedLinks.find((href) => {
        const segmentedHref = href.replace(/\/$/, '').split('/').slice(0, segmentsCount).join('/');
        return cleanPathname.includes(segmentedHref);
    });
    return mutateSchema(matchedLink?.replace(/\/$/, '') || '', navItems);
};
const levelArray = (navItems) => {
    return lodash_flatMap__WEBPACK_IMPORTED_MODULE_2___default()(navItems, ({ href, routes, navItems }) => {
        if (!href && navItems) {
            return levelArray(navItems);
        }
        if (!href && routes) {
            return levelArray(routes);
        }
        if (href) {
            return [href];
        }
        return [];
    });
};
// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop() { }
const trustarcScriptSetup = () => {
    const trustarcScript = document.createElement('script');
    trustarcScript.id = 'trustarc';
    if (location.host === 'console.redhat.com') {
        trustarcScript.src = '//static.redhat.com/libs/redhat/marketing/latest/trustarc/trustarc.js';
    }
    else {
        trustarcScript.src = '//static.redhat.com/libs/redhat/marketing/latest/trustarc/trustarc.stage.js';
    }
    document.body.appendChild(trustarcScript);
};
const loadFedModules = () => axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${window.location.origin}${isBeta() ? '/beta' : ''}/config/chrome/fed-modules.json?ts=${Date.now()}`, {
    headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
    },
});


/***/ }),

/***/ "./src/js/utils/cache.ts":
/*!*******************************!*\
  !*** ./src/js/utils/cache.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCacheStore": () => (/* binding */ createCacheStore),
/* harmony export */   "bootstrapCache": () => (/* binding */ bootstrapCache),
/* harmony export */   "CacheAdapter": () => (/* binding */ CacheAdapter)
/* harmony export */ });
/* harmony import */ var axios_cache_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios-cache-adapter */ "./node_modules/axios-cache-adapter/dist/cache.js");
/* harmony import */ var axios_cache_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios_cache_adapter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/js/utils.ts");



const createCacheStore = (endpoint, cacheKey) => {
    const name = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.lastActive)(endpoint, cacheKey);
    return localforage__WEBPACK_IMPORTED_MODULE_1___default().createInstance({
        driver: [(localforage__WEBPACK_IMPORTED_MODULE_1___default().LOCALSTORAGE)],
        name: typeof name === 'string' ? name?.split('/')[0] : name.expires.split('/')[0],
    });
};
function bootstrapCache(endpoint, cacheKey) {
    const store = createCacheStore(endpoint, cacheKey);
    return (0,axios_cache_adapter__WEBPACK_IMPORTED_MODULE_0__.setupCache)({
        store,
        maxAge: 10 * 60 * 1000, // 10 minutes
    });
}
let store;
/**
 * Check if the app has switched between beta/non-beta envs.
 * If it did, we clean the existing chrome cache to prevent stale cache entry.
 * This issue may occur when the user switches between envs without logging out and in.
 */
const envSwap = () => {
    const currentEnv = window.insights.chrome.isBeta() ? 'beta' : 'non-beta';
    const prevEnv = localStorage.getItem('chrome:prevEnv');
    if (prevEnv && currentEnv !== prevEnv) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.deleteLocalStorageItems)(Object.keys(localStorage).filter((item) => item.endsWith('/chrome-store')));
    }
    localStorage.setItem('chrome:prevEnv', currentEnv);
};
class CacheAdapter {
    maxAge;
    expires;
    name;
    endpoint;
    cacheKey;
    constructor(endpoint, cacheKey, maxAge = 10 * 60 * 1000) {
        this.maxAge = maxAge;
        this.expires = new Date().getTime() + this.maxAge;
        envSwap();
        if (!store) {
            const name = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.lastActive)(endpoint, cacheKey);
            let cached;
            const cacheId = typeof name === 'string' ? name : name.expires;
            try {
                cached = JSON.parse(localStorage.getItem(cacheId) || '');
            }
            catch (e) {
                cached = localStorage.getItem(cacheId);
            }
            this.name = cacheId;
            this.endpoint = endpoint;
            this.cacheKey = cacheKey;
            store = createCacheStore(endpoint, cacheKey);
            if (new Date(parseInt(cached?.expires, 10)) >= new Date()) {
                this.setCache(parseInt(cached?.expires, 10), cached?.data);
            }
            else {
                const cacheTime = new Date().getTime() + this.maxAge;
                this.setCache(cacheTime, {});
            }
        }
    }
    async setCache(expires, data) {
        this.expires = expires;
        if (this.endpoint) {
            await store.setItem(this.endpoint, {
                data,
                expires,
            });
        }
    }
    async invalidateStore() {
        if (new Date(this.expires) <= new Date()) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.deleteLocalStorageItems)(Object.keys(localStorage).filter((item) => item.endsWith('/chrome')));
            await localforage__WEBPACK_IMPORTED_MODULE_1___default().dropInstance();
            if (this.endpoint && this.cacheKey) {
                store = createCacheStore(this.endpoint, this.cacheKey);
                const cacheTime = new Date().getTime() + this.maxAge;
                await this.setCache(cacheTime, {});
            }
        }
    }
    async setItem(key, data) {
        await this.invalidateStore();
        if (this.endpoint) {
            const cachedData = await store.getItem(this.endpoint);
            if (cachedData != null) {
                cachedData.data = {
                    ...cachedData?.data,
                    [key]: data,
                };
            }
            await store.setItem(this.endpoint, cachedData);
        }
    }
    async getItem(key) {
        await this.invalidateStore();
        if (this.endpoint) {
            const cachedData = await store.getItem(this.endpoint);
            return cachedData?.data?.[key];
        }
        return Promise.resolve();
    }
}


/***/ })

}]);