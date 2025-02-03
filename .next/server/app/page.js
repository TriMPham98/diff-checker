/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/page";
exports.ids = ["app/page"];
exports.modules = {

/***/ "(ssr)/./node_modules/monaco-editor/esm/vs/base/common/worker lazy recursive ^.*$":
/*!******************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/worker/ lazy ^.*$ namespace object ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./simpleWorker": "(ssr)/./node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js",
	"./simpleWorker.js": "(ssr)/./node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "(ssr)/./node_modules/monaco-editor/esm/vs/base/common/worker lazy recursive ^.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services lazy recursive ^.*$":
/*!**********************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/services/ lazy ^.*$ namespace object ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./editorBaseApi": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/editorBaseApi.js"
	],
	"./editorBaseApi.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/editorBaseApi.js"
	],
	"./editorSimpleWorker": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js"
	],
	"./editorSimpleWorker.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js"
	],
	"./editorWorker": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/editorWorker.js"
	],
	"./editorWorker.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/editorWorker.js"
	],
	"./editorWorkerHost": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/editorWorkerHost.js"
	],
	"./editorWorkerHost.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/editorWorkerHost.js"
	],
	"./findSectionHeaders": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/findSectionHeaders.js"
	],
	"./findSectionHeaders.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/findSectionHeaders.js"
	],
	"./getIconClasses": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/getIconClasses.js"
	],
	"./getIconClasses.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/getIconClasses.js"
	],
	"./languageFeatureDebounce": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatureDebounce.js"
	],
	"./languageFeatureDebounce.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatureDebounce.js"
	],
	"./languageFeatures": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js"
	],
	"./languageFeatures.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js"
	],
	"./languageFeaturesService": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/languageFeaturesService.js"
	],
	"./languageFeaturesService.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/languageFeaturesService.js"
	],
	"./languageService": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/languageService.js"
	],
	"./languageService.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/languageService.js"
	],
	"./languagesAssociations": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/languagesAssociations.js"
	],
	"./languagesAssociations.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/languagesAssociations.js"
	],
	"./languagesRegistry": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/languagesRegistry.js"
	],
	"./languagesRegistry.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/languagesRegistry.js"
	],
	"./markerDecorations": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/markerDecorations.js"
	],
	"./markerDecorations.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/markerDecorations.js"
	],
	"./markerDecorationsService": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/markerDecorationsService.js"
	],
	"./markerDecorationsService.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/markerDecorationsService.js"
	],
	"./model": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/model.js"
	],
	"./model.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/model.js"
	],
	"./modelService": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/modelService.js"
	],
	"./modelService.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/modelService.js"
	],
	"./resolverService": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/resolverService.js"
	],
	"./resolverService.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/resolverService.js"
	],
	"./semanticTokensDto": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/semanticTokensDto.js"
	],
	"./semanticTokensDto.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/semanticTokensDto.js"
	],
	"./semanticTokensProviderStyling": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/semanticTokensProviderStyling.js"
	],
	"./semanticTokensProviderStyling.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/semanticTokensProviderStyling.js"
	],
	"./semanticTokensStyling": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/semanticTokensStyling.js"
	],
	"./semanticTokensStyling.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/semanticTokensStyling.js"
	],
	"./semanticTokensStylingService": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/semanticTokensStylingService.js"
	],
	"./semanticTokensStylingService.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/semanticTokensStylingService.js"
	],
	"./textModelSync/textModelSync.impl": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/textModelSync/textModelSync.impl.js"
	],
	"./textModelSync/textModelSync.impl.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/textModelSync/textModelSync.impl.js"
	],
	"./textModelSync/textModelSync.protocol": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/textModelSync/textModelSync.protocol.js",
		"vendor-chunks/monaco-editor"
	],
	"./textModelSync/textModelSync.protocol.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/textModelSync/textModelSync.protocol.js",
		"vendor-chunks/monaco-editor"
	],
	"./textResourceConfiguration": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/textResourceConfiguration.js"
	],
	"./textResourceConfiguration.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/textResourceConfiguration.js"
	],
	"./treeSitterParserService": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/treeSitterParserService.js"
	],
	"./treeSitterParserService.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/treeSitterParserService.js"
	],
	"./treeViewsDnd": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/treeViewsDnd.js"
	],
	"./treeViewsDnd.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/treeViewsDnd.js"
	],
	"./treeViewsDndService": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/treeViewsDndService.js"
	],
	"./treeViewsDndService.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/treeViewsDndService.js"
	],
	"./unicodeTextModelHighlighter": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/unicodeTextModelHighlighter.js"
	],
	"./unicodeTextModelHighlighter.js": [
		"(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services/unicodeTextModelHighlighter.js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "(ssr)/./node_modules/monaco-editor/esm/vs/editor/common/services lazy recursive ^.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./action-async-storage.external":
/*!****************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
/*!***************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external" ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),\n/* harmony export */   __next_app__: () => (/* binding */ __next_app__),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   pages: () => (/* binding */ pages),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   tree: () => (/* binding */ tree)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-page/module.compiled */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/module.compiled.js?9d97\");\n/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/components/error-boundary */ \"(rsc)/./node_modules/next/dist/client/components/error-boundary.js\");\n/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/app-render/entry-base */ \"(rsc)/./node_modules/next/dist/server/app-render/entry-base.js\");\n/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if([\"default\",\"tree\",\"pages\",\"GlobalError\",\"originalPathname\",\"__next_app__\",\"routeModule\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\"TURBOPACK { transition: next-ssr }\";\n\n\n// We inject the tree and pages here so that we can use them in the route\n// module.\nconst tree = {\n        children: [\n        '',\n        {\n        children: ['__PAGE__', {}, {\n          page: [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./src/app/page.tsx */ \"(rsc)/./src/app/page.tsx\")), \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\"],\n          \n        }]\n      },\n        {\n        'layout': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./src/app/layout.tsx */ \"(rsc)/./src/app/layout.tsx\")), \"/Users/trimpham98/repos/diff-checker/src/app/layout.tsx\"],\n'not-found': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! next/dist/client/components/not-found-error */ \"(rsc)/./node_modules/next/dist/client/components/not-found-error.js\", 23)), \"next/dist/client/components/not-found-error\"],\n        \n      }\n      ]\n      }.children;\nconst pages = [\"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\"];\n\n\nconst __next_app_require__ = __webpack_require__\nconst __next_app_load_chunk__ = () => Promise.resolve()\nconst originalPathname = \"/page\";\nconst __next_app__ = {\n    require: __next_app_require__,\n    loadChunk: __next_app_load_chunk__\n};\n\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,\n        page: \"/page\",\n        pathname: \"/\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\",\n        appPaths: []\n    },\n    userland: {\n        loaderTree: tree\n    }\n});\n\n//# sourceMappingURL=app-page.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZwYWdlJnBhZ2U9JTJGcGFnZSZhcHBQYXRocz0lMkZwYWdlJnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGcGFnZS50c3gmYXBwRGlyPSUyRlVzZXJzJTJGdHJpbXBoYW05OCUyRnJlcG9zJTJGZGlmZi1jaGVja2VyJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnRyaW1waGFtOTglMkZyZXBvcyUyRmRpZmYtY2hlY2tlciZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGFBQWEsc0JBQXNCO0FBQ2lFO0FBQ3JDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyx1QkFBdUIsZ0pBQTBGO0FBQ2pIO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLHlCQUF5QixvSkFBNEY7QUFDckgsb0JBQW9CLDBOQUFnRjtBQUNwRztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDdUI7QUFDNkQ7QUFDcEYsNkJBQTZCLG1CQUFtQjtBQUNoRDtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDdUQ7QUFDdkQ7QUFDTyx3QkFBd0IsOEdBQWtCO0FBQ2pEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZmYtY2hlY2tlci8/ZjNjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcIlRVUkJPUEFDSyB7IHRyYW5zaXRpb246IG5leHQtc3NyIH1cIjtcbmltcG9ydCB7IEFwcFBhZ2VSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1wYWdlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbi8vIFdlIGluamVjdCB0aGUgdHJlZSBhbmQgcGFnZXMgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IHRyZWUgPSB7XG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICcnLFxuICAgICAgICB7XG4gICAgICAgIGNoaWxkcmVuOiBbJ19fUEFHRV9fJywge30sIHtcbiAgICAgICAgICBwYWdlOiBbKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCIvVXNlcnMvdHJpbXBoYW05OC9yZXBvcy9kaWZmLWNoZWNrZXIvc3JjL2FwcC9wYWdlLnRzeFwiKSwgXCIvVXNlcnMvdHJpbXBoYW05OC9yZXBvcy9kaWZmLWNoZWNrZXIvc3JjL2FwcC9wYWdlLnRzeFwiXSxcbiAgICAgICAgICBcbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgJ2xheW91dCc6IFsoKSA9PiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIi9Vc2Vycy90cmltcGhhbTk4L3JlcG9zL2RpZmYtY2hlY2tlci9zcmMvYXBwL2xheW91dC50c3hcIiksIFwiL1VzZXJzL3RyaW1waGFtOTgvcmVwb3MvZGlmZi1jaGVja2VyL3NyYy9hcHAvbGF5b3V0LnRzeFwiXSxcbidub3QtZm91bmQnOiBbKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCJuZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvbm90LWZvdW5kLWVycm9yXCIpLCBcIm5leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy9ub3QtZm91bmQtZXJyb3JcIl0sXG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXVxuICAgICAgfS5jaGlsZHJlbjtcbmNvbnN0IHBhZ2VzID0gW1wiL1VzZXJzL3RyaW1waGFtOTgvcmVwb3MvZGlmZi1jaGVja2VyL3NyYy9hcHAvcGFnZS50c3hcIl07XG5leHBvcnQgeyB0cmVlLCBwYWdlcyB9O1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHbG9iYWxFcnJvciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvZXJyb3ItYm91bmRhcnlcIjtcbmNvbnN0IF9fbmV4dF9hcHBfcmVxdWlyZV9fID0gX193ZWJwYWNrX3JlcXVpcmVfX1xuY29uc3QgX19uZXh0X2FwcF9sb2FkX2NodW5rX18gPSAoKSA9PiBQcm9taXNlLnJlc29sdmUoKVxuZXhwb3J0IGNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9wYWdlXCI7XG5leHBvcnQgY29uc3QgX19uZXh0X2FwcF9fID0ge1xuICAgIHJlcXVpcmU6IF9fbmV4dF9hcHBfcmVxdWlyZV9fLFxuICAgIGxvYWRDaHVuazogX19uZXh0X2FwcF9sb2FkX2NodW5rX19cbn07XG5leHBvcnQgKiBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9hcHAtcmVuZGVyL2VudHJ5LWJhc2VcIjtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFBhZ2VSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1BBR0UsXG4gICAgICAgIHBhZ2U6IFwiL3BhZ2VcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL1wiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiLFxuICAgICAgICBhcHBQYXRoczogW11cbiAgICB9LFxuICAgIHVzZXJsYW5kOiB7XG4gICAgICAgIGxvYWRlclRyZWU6IHRyZWVcbiAgICB9XG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXBhZ2UuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fapp-router.js&modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js&modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js&modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fnot-found-boundary.js&modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js&modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fstatic-generation-searchparams-bailout-provider.js&server=true!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fapp-router.js&modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js&modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js&modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fnot-found-boundary.js&modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js&modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fstatic-generation-searchparams-bailout-provider.js&server=true! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/app-router.js */ \"(ssr)/./node_modules/next/dist/client/components/app-router.js\", 23));\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/error-boundary.js */ \"(ssr)/./node_modules/next/dist/client/components/error-boundary.js\", 23));\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/layout-router.js */ \"(ssr)/./node_modules/next/dist/client/components/layout-router.js\", 23));\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/not-found-boundary.js */ \"(ssr)/./node_modules/next/dist/client/components/not-found-boundary.js\", 23));\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/render-from-template-context.js */ \"(ssr)/./node_modules/next/dist/client/components/render-from-template-context.js\", 23));\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/static-generation-searchparams-bailout-provider.js */ \"(ssr)/./node_modules/next/dist/client/components/static-generation-searchparams-bailout-provider.js\", 23))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1jbGllbnQtZW50cnktbG9hZGVyLmpzP21vZHVsZXM9JTJGVXNlcnMlMkZ0cmltcGhhbTk4JTJGcmVwb3MlMkZkaWZmLWNoZWNrZXIlMkZub2RlX21vZHVsZXMlMkZuZXh0JTJGZGlzdCUyRmNsaWVudCUyRmNvbXBvbmVudHMlMkZhcHAtcm91dGVyLmpzJm1vZHVsZXM9JTJGVXNlcnMlMkZ0cmltcGhhbTk4JTJGcmVwb3MlMkZkaWZmLWNoZWNrZXIlMkZub2RlX21vZHVsZXMlMkZuZXh0JTJGZGlzdCUyRmNsaWVudCUyRmNvbXBvbmVudHMlMkZlcnJvci1ib3VuZGFyeS5qcyZtb2R1bGVzPSUyRlVzZXJzJTJGdHJpbXBoYW05OCUyRnJlcG9zJTJGZGlmZi1jaGVja2VyJTJGbm9kZV9tb2R1bGVzJTJGbmV4dCUyRmRpc3QlMkZjbGllbnQlMkZjb21wb25lbnRzJTJGbGF5b3V0LXJvdXRlci5qcyZtb2R1bGVzPSUyRlVzZXJzJTJGdHJpbXBoYW05OCUyRnJlcG9zJTJGZGlmZi1jaGVja2VyJTJGbm9kZV9tb2R1bGVzJTJGbmV4dCUyRmRpc3QlMkZjbGllbnQlMkZjb21wb25lbnRzJTJGbm90LWZvdW5kLWJvdW5kYXJ5LmpzJm1vZHVsZXM9JTJGVXNlcnMlMkZ0cmltcGhhbTk4JTJGcmVwb3MlMkZkaWZmLWNoZWNrZXIlMkZub2RlX21vZHVsZXMlMkZuZXh0JTJGZGlzdCUyRmNsaWVudCUyRmNvbXBvbmVudHMlMkZyZW5kZXItZnJvbS10ZW1wbGF0ZS1jb250ZXh0LmpzJm1vZHVsZXM9JTJGVXNlcnMlMkZ0cmltcGhhbTk4JTJGcmVwb3MlMkZkaWZmLWNoZWNrZXIlMkZub2RlX21vZHVsZXMlMkZuZXh0JTJGZGlzdCUyRmNsaWVudCUyRmNvbXBvbmVudHMlMkZzdGF0aWMtZ2VuZXJhdGlvbi1zZWFyY2hwYXJhbXMtYmFpbG91dC1wcm92aWRlci5qcyZzZXJ2ZXI9dHJ1ZSEiLCJtYXBwaW5ncyI6IkFBQUEsa09BQWdJO0FBQ2hJLDBPQUFvSTtBQUNwSSx3T0FBbUk7QUFDbkksa1BBQXdJO0FBQ3hJLHNRQUFrSjtBQUNsSiIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZmYtY2hlY2tlci8/NTA5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIi9Vc2Vycy90cmltcGhhbTk4L3JlcG9zL2RpZmYtY2hlY2tlci9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL2FwcC1yb3V0ZXIuanNcIik7XG5pbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIi9Vc2Vycy90cmltcGhhbTk4L3JlcG9zL2RpZmYtY2hlY2tlci9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL2Vycm9yLWJvdW5kYXJ5LmpzXCIpO1xuaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCIvVXNlcnMvdHJpbXBoYW05OC9yZXBvcy9kaWZmLWNoZWNrZXIvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy9sYXlvdXQtcm91dGVyLmpzXCIpO1xuaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCIvVXNlcnMvdHJpbXBoYW05OC9yZXBvcy9kaWZmLWNoZWNrZXIvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy9ub3QtZm91bmQtYm91bmRhcnkuanNcIik7XG5pbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIi9Vc2Vycy90cmltcGhhbTk4L3JlcG9zL2RpZmYtY2hlY2tlci9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL3JlbmRlci1mcm9tLXRlbXBsYXRlLWNvbnRleHQuanNcIik7XG5pbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIi9Vc2Vycy90cmltcGhhbTk4L3JlcG9zL2RpZmYtY2hlY2tlci9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL3N0YXRpYy1nZW5lcmF0aW9uLXNlYXJjaHBhcmFtcy1iYWlsb3V0LXByb3ZpZGVyLmpzXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fapp-router.js&modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js&modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js&modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fnot-found-boundary.js&modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js&modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fstatic-generation-searchparams-bailout-provider.js&server=true!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Ffont%2Fgoogle%2Ftarget.css%3F%7B%22path%22%3A%22src%2Fapp%2Flayout.tsx%22%2C%22import%22%3A%22Inter%22%2C%22arguments%22%3A%5B%7B%22subsets%22%3A%5B%22latin%22%5D%7D%5D%2C%22variableName%22%3A%22inter%22%7D&modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fsrc%2Fapp%2Fglobals.css&server=true!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fnode_modules%2Fnext%2Ffont%2Fgoogle%2Ftarget.css%3F%7B%22path%22%3A%22src%2Fapp%2Flayout.tsx%22%2C%22import%22%3A%22Inter%22%2C%22arguments%22%3A%5B%7B%22subsets%22%3A%5B%22latin%22%5D%7D%5D%2C%22variableName%22%3A%22inter%22%7D&modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fsrc%2Fapp%2Fglobals.css&server=true! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fsrc%2Fapp%2Fpage.tsx&server=true!":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fsrc%2Fapp%2Fpage.tsx&server=true! ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./src/app/page.tsx */ \"(ssr)/./src/app/page.tsx\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1jbGllbnQtZW50cnktbG9hZGVyLmpzP21vZHVsZXM9JTJGVXNlcnMlMkZ0cmltcGhhbTk4JTJGcmVwb3MlMkZkaWZmLWNoZWNrZXIlMkZzcmMlMkZhcHAlMkZwYWdlLnRzeCZzZXJ2ZXI9dHJ1ZSEiLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWZmLWNoZWNrZXIvP2U2ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCIvVXNlcnMvdHJpbXBoYW05OC9yZXBvcy9kaWZmLWNoZWNrZXIvc3JjL2FwcC9wYWdlLnRzeFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fsrc%2Fapp%2Fpage.tsx&server=true!\n");

/***/ }),

/***/ "(ssr)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monaco-editor/react */ \"(ssr)/./node_modules/@monaco-editor/react/dist/index.mjs\");\n/* harmony import */ var diff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! diff */ \"(ssr)/./node_modules/diff/lib/index.mjs\");\n/* harmony import */ var monaco_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! monaco-editor */ \"(ssr)/./node_modules/monaco-editor/esm/vs/editor/editor.main.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction Home() {\n    const [leftText, setLeftText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [rightText, setRightText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [diffResult, setDiffResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const leftEditorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const rightEditorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleEditorDidMount = (editor, isLeft)=>{\n        if (isLeft) {\n            leftEditorRef.current = editor;\n        } else {\n            rightEditorRef.current = editor;\n        }\n    };\n    const clearDecorations = ()=>{\n        if (leftEditorRef.current) {\n            leftEditorRef.current.deltaDecorations([], []);\n        }\n        if (rightEditorRef.current) {\n            rightEditorRef.current.deltaDecorations([], []);\n        }\n    };\n    const handleCompare = ()=>{\n        clearDecorations();\n        const differences = diff__WEBPACK_IMPORTED_MODULE_3__.diffLines(leftText, rightText);\n        setDiffResult(differences);\n        let leftLineNumber = 1;\n        let rightLineNumber = 1;\n        differences.forEach((part)=>{\n            const lines = part.value.split(\"\\n\").length - 1;\n            if (part.removed && leftEditorRef.current) {\n                leftEditorRef.current.deltaDecorations([], [\n                    {\n                        range: new monaco_editor__WEBPACK_IMPORTED_MODULE_4__.Range(leftLineNumber, 1, leftLineNumber + lines, 1),\n                        options: {\n                            isWholeLine: true,\n                            className: \"bg-red-200 bg-opacity-40\"\n                        }\n                    }\n                ]);\n                leftLineNumber += lines;\n            } else if (part.added && rightEditorRef.current) {\n                rightEditorRef.current.deltaDecorations([], [\n                    {\n                        range: new monaco_editor__WEBPACK_IMPORTED_MODULE_4__.Range(rightLineNumber, 1, rightLineNumber + lines, 1),\n                        options: {\n                            isWholeLine: true,\n                            className: \"bg-green-200 bg-opacity-40\"\n                        }\n                    }\n                ]);\n                rightLineNumber += lines;\n            } else {\n                leftLineNumber += lines;\n                rightLineNumber += lines;\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen p-4 md:p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold text-center mb-8\",\n                children: \"Diff Checker\"\n            }, void 0, false, {\n                fileName: \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold\",\n                                children: \"Original Text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-[400px] border border-gray-300 rounded-lg overflow-hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {\n                                    height: \"100%\",\n                                    defaultLanguage: \"text\",\n                                    value: leftText,\n                                    onChange: (value)=>setLeftText(value || \"\"),\n                                    theme: \"vs-dark\",\n                                    onMount: (editor)=>handleEditorDidMount(editor, true),\n                                    options: {\n                                        minimap: {\n                                            enabled: false\n                                        },\n                                        scrollBeyondLastLine: false,\n                                        wordWrap: \"on\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold\",\n                                children: \"Modified Text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-[400px] border border-gray-300 rounded-lg overflow-hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {\n                                    height: \"100%\",\n                                    defaultLanguage: \"text\",\n                                    value: rightText,\n                                    onChange: (value)=>setRightText(value || \"\"),\n                                    theme: \"vs-dark\",\n                                    onMount: (editor)=>handleEditorDidMount(editor, false),\n                                    options: {\n                                        minimap: {\n                                            enabled: false\n                                        },\n                                        scrollBeyondLastLine: false,\n                                        wordWrap: \"on\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleCompare,\n                    className: \"px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors\",\n                    children: \"Compare\"\n                }, void 0, false, {\n                    fileName: \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\",\n                    lineNumber: 141,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, this),\n            diffResult.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold mb-4\",\n                        children: \"Differences\"\n                    }, void 0, false, {\n                        fileName: \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2\",\n                        children: diffResult.map((part, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: `p-2 rounded ${part.added ? \"bg-green-100 text-green-800\" : part.removed ? \"bg-red-100 text-red-800\" : \"bg-gray-100\"}`,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                    className: \"whitespace-pre-wrap font-mono text-sm\",\n                                    children: part.value\n                                }, void 0, false, {\n                                    fileName: \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\",\n                                    lineNumber: 162,\n                                    columnNumber: 17\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\",\n                                lineNumber: 153,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\",\n                        lineNumber: 151,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\",\n                lineNumber: 149,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/trimpham98/repos/diff-checker/src/app/page.tsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvYXBwL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUV5QztBQUNLO0FBQ2pCO0FBQ1c7QUFFekIsU0FBU0s7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQWdCLEVBQUU7SUFFOUQsTUFBTVksZ0JBQWdCWCw2Q0FBTUEsQ0FDMUI7SUFFRixNQUFNWSxpQkFBaUJaLDZDQUFNQSxDQUMzQjtJQUdGLE1BQU1hLHVCQUF1QixDQUMzQkMsUUFDQUM7UUFFQSxJQUFJQSxRQUFRO1lBQ1ZKLGNBQWNLLE9BQU8sR0FBR0Y7UUFDMUIsT0FBTztZQUNMRixlQUFlSSxPQUFPLEdBQUdGO1FBQzNCO0lBQ0Y7SUFFQSxNQUFNRyxtQkFBbUI7UUFDdkIsSUFBSU4sY0FBY0ssT0FBTyxFQUFFO1lBQ3pCTCxjQUFjSyxPQUFPLENBQUNFLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxFQUFFO1FBQy9DO1FBQ0EsSUFBSU4sZUFBZUksT0FBTyxFQUFFO1lBQzFCSixlQUFlSSxPQUFPLENBQUNFLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxFQUFFO1FBQ2hEO0lBQ0Y7SUFFQSxNQUFNQyxnQkFBZ0I7UUFDcEJGO1FBQ0EsTUFBTUcsY0FBY2xCLDJDQUFjLENBQUNHLFVBQVVFO1FBQzdDRyxjQUFjVTtRQUVkLElBQUlFLGlCQUFpQjtRQUNyQixJQUFJQyxrQkFBa0I7UUFFdEJILFlBQVlJLE9BQU8sQ0FBQyxDQUFDQztZQUNuQixNQUFNQyxRQUFRRCxLQUFLRSxLQUFLLENBQUNDLEtBQUssQ0FBQyxNQUFNQyxNQUFNLEdBQUc7WUFFOUMsSUFBSUosS0FBS0ssT0FBTyxJQUFJbkIsY0FBY0ssT0FBTyxFQUFFO2dCQUN6Q0wsY0FBY0ssT0FBTyxDQUFDRSxnQkFBZ0IsQ0FDcEMsRUFBRSxFQUNGO29CQUNFO3dCQUNFYSxPQUFPLElBQUk1QixnREFBWSxDQUNyQm1CLGdCQUNBLEdBQ0FBLGlCQUFpQkksT0FDakI7d0JBRUZPLFNBQVM7NEJBQ1BDLGFBQWE7NEJBQ2JDLFdBQVc7d0JBQ2I7b0JBQ0Y7aUJBQ0Q7Z0JBRUhiLGtCQUFrQkk7WUFDcEIsT0FBTyxJQUFJRCxLQUFLVyxLQUFLLElBQUl4QixlQUFlSSxPQUFPLEVBQUU7Z0JBQy9DSixlQUFlSSxPQUFPLENBQUNFLGdCQUFnQixDQUNyQyxFQUFFLEVBQ0Y7b0JBQ0U7d0JBQ0VhLE9BQU8sSUFBSTVCLGdEQUFZLENBQ3JCb0IsaUJBQ0EsR0FDQUEsa0JBQWtCRyxPQUNsQjt3QkFFRk8sU0FBUzs0QkFDUEMsYUFBYTs0QkFDYkMsV0FBVzt3QkFDYjtvQkFDRjtpQkFDRDtnQkFFSFosbUJBQW1CRztZQUNyQixPQUFPO2dCQUNMSixrQkFBa0JJO2dCQUNsQkgsbUJBQW1CRztZQUNyQjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1c7UUFBS0YsV0FBVTs7MEJBQ2QsOERBQUNHO2dCQUFHSCxXQUFVOzBCQUFzQzs7Ozs7OzBCQUVwRCw4REFBQ0k7Z0JBQUlKLFdBQVU7O2tDQUNiLDhEQUFDSTt3QkFBSUosV0FBVTs7MENBQ2IsOERBQUNLO2dDQUFHTCxXQUFVOzBDQUF3Qjs7Ozs7OzBDQUN0Qyw4REFBQ0k7Z0NBQUlKLFdBQVU7MENBQ2IsNEVBQUNsQyx3REFBTUE7b0NBQ0x3QyxRQUFPO29DQUNQQyxpQkFBZ0I7b0NBQ2hCZixPQUFPdEI7b0NBQ1BzQyxVQUFVLENBQUNoQixRQUFVckIsWUFBWXFCLFNBQVM7b0NBQzFDaUIsT0FBTTtvQ0FDTkMsU0FBUyxDQUFDL0IsU0FBV0QscUJBQXFCQyxRQUFRO29DQUNsRG1CLFNBQVM7d0NBQ1BhLFNBQVM7NENBQUVDLFNBQVM7d0NBQU07d0NBQzFCQyxzQkFBc0I7d0NBQ3RCQyxVQUFVO29DQUNaOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLTiw4REFBQ1Y7d0JBQUlKLFdBQVU7OzBDQUNiLDhEQUFDSztnQ0FBR0wsV0FBVTswQ0FBd0I7Ozs7OzswQ0FDdEMsOERBQUNJO2dDQUFJSixXQUFVOzBDQUNiLDRFQUFDbEMsd0RBQU1BO29DQUNMd0MsUUFBTztvQ0FDUEMsaUJBQWdCO29DQUNoQmYsT0FBT3BCO29DQUNQb0MsVUFBVSxDQUFDaEIsUUFBVW5CLGFBQWFtQixTQUFTO29DQUMzQ2lCLE9BQU07b0NBQ05DLFNBQVMsQ0FBQy9CLFNBQVdELHFCQUFxQkMsUUFBUTtvQ0FDbERtQixTQUFTO3dDQUNQYSxTQUFTOzRDQUFFQyxTQUFTO3dDQUFNO3dDQUMxQkMsc0JBQXNCO3dDQUN0QkMsVUFBVTtvQ0FDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTVIsOERBQUNWO2dCQUFJSixXQUFVOzBCQUNiLDRFQUFDZTtvQkFDQ0MsU0FBU2hDO29CQUNUZ0IsV0FBVTs4QkFBbUY7Ozs7Ozs7Ozs7O1lBS2hHMUIsV0FBV29CLE1BQU0sR0FBRyxtQkFDbkIsOERBQUNVO2dCQUFJSixXQUFVOztrQ0FDYiw4REFBQ0s7d0JBQUdMLFdBQVU7a0NBQTZCOzs7Ozs7a0NBQzNDLDhEQUFDSTt3QkFBSUosV0FBVTtrQ0FDWjFCLFdBQVcyQyxHQUFHLENBQUMsQ0FBQzNCLE1BQU00QixzQkFDckIsOERBQUNkO2dDQUVDSixXQUFXLENBQUMsWUFBWSxFQUN0QlYsS0FBS1csS0FBSyxHQUNOLGdDQUNBWCxLQUFLSyxPQUFPLEdBQ1osNEJBQ0EsY0FDTCxDQUFDOzBDQUNGLDRFQUFDd0I7b0NBQUluQixXQUFVOzhDQUNaVixLQUFLRSxLQUFLOzs7Ozs7K0JBVFIwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWZmLWNoZWNrZXIvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gXCJAbW9uYWNvLWVkaXRvci9yZWFjdFwiO1xuaW1wb3J0ICogYXMgZGlmZiBmcm9tIFwiZGlmZlwiO1xuaW1wb3J0ICogYXMgbW9uYWNvIGZyb20gXCJtb25hY28tZWRpdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtsZWZ0VGV4dCwgc2V0TGVmdFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtyaWdodFRleHQsIHNldFJpZ2h0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2RpZmZSZXN1bHQsIHNldERpZmZSZXN1bHRdID0gdXNlU3RhdGU8ZGlmZi5DaGFuZ2VbXT4oW10pO1xuXG4gIGNvbnN0IGxlZnRFZGl0b3JSZWYgPSB1c2VSZWY8bW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUNvZGVFZGl0b3IgfCBudWxsPihcbiAgICBudWxsXG4gICk7XG4gIGNvbnN0IHJpZ2h0RWRpdG9yUmVmID0gdXNlUmVmPG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yIHwgbnVsbD4oXG4gICAgbnVsbFxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUVkaXRvckRpZE1vdW50ID0gKFxuICAgIGVkaXRvcjogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUNvZGVFZGl0b3IsXG4gICAgaXNMZWZ0OiBib29sZWFuXG4gICkgPT4ge1xuICAgIGlmIChpc0xlZnQpIHtcbiAgICAgIGxlZnRFZGl0b3JSZWYuY3VycmVudCA9IGVkaXRvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmlnaHRFZGl0b3JSZWYuY3VycmVudCA9IGVkaXRvcjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2xlYXJEZWNvcmF0aW9ucyA9ICgpID0+IHtcbiAgICBpZiAobGVmdEVkaXRvclJlZi5jdXJyZW50KSB7XG4gICAgICBsZWZ0RWRpdG9yUmVmLmN1cnJlbnQuZGVsdGFEZWNvcmF0aW9ucyhbXSwgW10pO1xuICAgIH1cbiAgICBpZiAocmlnaHRFZGl0b3JSZWYuY3VycmVudCkge1xuICAgICAgcmlnaHRFZGl0b3JSZWYuY3VycmVudC5kZWx0YURlY29yYXRpb25zKFtdLCBbXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNvbXBhcmUgPSAoKSA9PiB7XG4gICAgY2xlYXJEZWNvcmF0aW9ucygpO1xuICAgIGNvbnN0IGRpZmZlcmVuY2VzID0gZGlmZi5kaWZmTGluZXMobGVmdFRleHQsIHJpZ2h0VGV4dCk7XG4gICAgc2V0RGlmZlJlc3VsdChkaWZmZXJlbmNlcyk7XG5cbiAgICBsZXQgbGVmdExpbmVOdW1iZXIgPSAxO1xuICAgIGxldCByaWdodExpbmVOdW1iZXIgPSAxO1xuXG4gICAgZGlmZmVyZW5jZXMuZm9yRWFjaCgocGFydCkgPT4ge1xuICAgICAgY29uc3QgbGluZXMgPSBwYXJ0LnZhbHVlLnNwbGl0KFwiXFxuXCIpLmxlbmd0aCAtIDE7XG5cbiAgICAgIGlmIChwYXJ0LnJlbW92ZWQgJiYgbGVmdEVkaXRvclJlZi5jdXJyZW50KSB7XG4gICAgICAgIGxlZnRFZGl0b3JSZWYuY3VycmVudC5kZWx0YURlY29yYXRpb25zKFxuICAgICAgICAgIFtdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmFuZ2U6IG5ldyBtb25hY28uUmFuZ2UoXG4gICAgICAgICAgICAgICAgbGVmdExpbmVOdW1iZXIsXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICBsZWZ0TGluZU51bWJlciArIGxpbmVzLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGlzV2hvbGVMaW5lOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJiZy1yZWQtMjAwIGJnLW9wYWNpdHktNDBcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXVxuICAgICAgICApO1xuICAgICAgICBsZWZ0TGluZU51bWJlciArPSBsaW5lcztcbiAgICAgIH0gZWxzZSBpZiAocGFydC5hZGRlZCAmJiByaWdodEVkaXRvclJlZi5jdXJyZW50KSB7XG4gICAgICAgIHJpZ2h0RWRpdG9yUmVmLmN1cnJlbnQuZGVsdGFEZWNvcmF0aW9ucyhcbiAgICAgICAgICBbXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJhbmdlOiBuZXcgbW9uYWNvLlJhbmdlKFxuICAgICAgICAgICAgICAgIHJpZ2h0TGluZU51bWJlcixcbiAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgIHJpZ2h0TGluZU51bWJlciArIGxpbmVzLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGlzV2hvbGVMaW5lOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJiZy1ncmVlbi0yMDAgYmctb3BhY2l0eS00MFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdXG4gICAgICAgICk7XG4gICAgICAgIHJpZ2h0TGluZU51bWJlciArPSBsaW5lcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlZnRMaW5lTnVtYmVyICs9IGxpbmVzO1xuICAgICAgICByaWdodExpbmVOdW1iZXIgKz0gbGluZXM7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gcC00IG1kOnAtOFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi04XCI+RGlmZiBDaGVja2VyPC9oMT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZFwiPk9yaWdpbmFsIFRleHQ8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bNDAwcHhdIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRMYW5ndWFnZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17bGVmdFRleHR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldExlZnRUZXh0KHZhbHVlIHx8IFwiXCIpfVxuICAgICAgICAgICAgICB0aGVtZT1cInZzLWRhcmtcIlxuICAgICAgICAgICAgICBvbk1vdW50PXsoZWRpdG9yKSA9PiBoYW5kbGVFZGl0b3JEaWRNb3VudChlZGl0b3IsIHRydWUpfVxuICAgICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgbWluaW1hcDogeyBlbmFibGVkOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIHNjcm9sbEJleW9uZExhc3RMaW5lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3b3JkV3JhcDogXCJvblwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+TW9kaWZpZWQgVGV4dDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVs0MDBweF0gYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgZGVmYXVsdExhbmd1YWdlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtyaWdodFRleHR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFJpZ2h0VGV4dCh2YWx1ZSB8fCBcIlwiKX1cbiAgICAgICAgICAgICAgdGhlbWU9XCJ2cy1kYXJrXCJcbiAgICAgICAgICAgICAgb25Nb3VudD17KGVkaXRvcikgPT4gaGFuZGxlRWRpdG9yRGlkTW91bnQoZWRpdG9yLCBmYWxzZSl9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBtaW5pbWFwOiB7IGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmV5b25kTGFzdExpbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdvcmRXcmFwOiBcIm9uXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ29tcGFyZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTIgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgaG92ZXI6Ymctb3BhY2l0eS05MCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgIENvbXBhcmVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2RpZmZSZXN1bHQubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPkRpZmZlcmVuY2VzPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAge2RpZmZSZXN1bHQubWFwKChwYXJ0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTIgcm91bmRlZCAke1xuICAgICAgICAgICAgICAgICAgcGFydC5hZGRlZFxuICAgICAgICAgICAgICAgICAgICA/IFwiYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tODAwXCJcbiAgICAgICAgICAgICAgICAgICAgOiBwYXJ0LnJlbW92ZWRcbiAgICAgICAgICAgICAgICAgICAgPyBcImJnLXJlZC0xMDAgdGV4dC1yZWQtODAwXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcImJnLWdyYXktMTAwXCJcbiAgICAgICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLXByZS13cmFwIGZvbnQtbW9ubyB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICB7cGFydC52YWx1ZX1cbiAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsIkVkaXRvciIsImRpZmYiLCJtb25hY28iLCJIb21lIiwibGVmdFRleHQiLCJzZXRMZWZ0VGV4dCIsInJpZ2h0VGV4dCIsInNldFJpZ2h0VGV4dCIsImRpZmZSZXN1bHQiLCJzZXREaWZmUmVzdWx0IiwibGVmdEVkaXRvclJlZiIsInJpZ2h0RWRpdG9yUmVmIiwiaGFuZGxlRWRpdG9yRGlkTW91bnQiLCJlZGl0b3IiLCJpc0xlZnQiLCJjdXJyZW50IiwiY2xlYXJEZWNvcmF0aW9ucyIsImRlbHRhRGVjb3JhdGlvbnMiLCJoYW5kbGVDb21wYXJlIiwiZGlmZmVyZW5jZXMiLCJkaWZmTGluZXMiLCJsZWZ0TGluZU51bWJlciIsInJpZ2h0TGluZU51bWJlciIsImZvckVhY2giLCJwYXJ0IiwibGluZXMiLCJ2YWx1ZSIsInNwbGl0IiwibGVuZ3RoIiwicmVtb3ZlZCIsInJhbmdlIiwiUmFuZ2UiLCJvcHRpb25zIiwiaXNXaG9sZUxpbmUiLCJjbGFzc05hbWUiLCJhZGRlZCIsIm1haW4iLCJoMSIsImRpdiIsImgyIiwiaGVpZ2h0IiwiZGVmYXVsdExhbmd1YWdlIiwib25DaGFuZ2UiLCJ0aGVtZSIsIm9uTW91bnQiLCJtaW5pbWFwIiwiZW5hYmxlZCIsInNjcm9sbEJleW9uZExhc3RMaW5lIiwid29yZFdyYXAiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiaW5kZXgiLCJwcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./src/app/page.tsx\n");

/***/ }),

/***/ "(rsc)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"44e18b347e8f\");\nif (false) {}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxjQUFjO0FBQzdCLElBQUksS0FBVSxFQUFFLEVBQXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlmZi1jaGVja2VyLy4vc3JjL2FwcC9nbG9iYWxzLmNzcz9mMjhiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiNDRlMThiMzQ3ZThmXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/globals.css\n");

/***/ }),

/***/ "(rsc)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RootLayout),\n/* harmony export */   metadata: () => (/* binding */ metadata)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/app/layout.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(rsc)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/app/layout.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(rsc)/./src/app/globals.css\");\n\n\n\nconst metadata = {\n    title: \"Diff Checker\",\n    description: \"A modern diff checker tool built with Next.js\"\n};\nfunction RootLayout({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            className: (next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().className),\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/trimpham98/repos/diff-checker/src/app/layout.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/trimpham98/repos/diff-checker/src/app/layout.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJTUE7QUFGZ0I7QUFJZixNQUFNQyxXQUFxQjtJQUNoQ0MsT0FBTztJQUNQQyxhQUFhO0FBQ2YsRUFBQztBQUVjLFNBQVNDLFdBQVcsRUFDakNDLFFBQVEsRUFHVDtJQUNDLHFCQUNFLDhEQUFDQztRQUFLQyxNQUFLO2tCQUNULDRFQUFDQztZQUFLQyxXQUFXVCwrSkFBZTtzQkFBR0s7Ozs7Ozs7Ozs7O0FBR3pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlmZi1jaGVja2VyLy4vc3JjL2FwcC9sYXlvdXQudHN4PzU3YTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBNZXRhZGF0YSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgJy4vZ2xvYmFscy5jc3MnXG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuZXhwb3J0IGNvbnN0IG1ldGFkYXRhOiBNZXRhZGF0YSA9IHtcbiAgdGl0bGU6ICdEaWZmIENoZWNrZXInLFxuICBkZXNjcmlwdGlvbjogJ0EgbW9kZXJuIGRpZmYgY2hlY2tlciB0b29sIGJ1aWx0IHdpdGggTmV4dC5qcycsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvb3RMYXlvdXQoe1xuICBjaGlsZHJlbixcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufSkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGJvZHkgY2xhc3NOYW1lPXtpbnRlci5jbGFzc05hbWV9PntjaGlsZHJlbn08L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59ICJdLCJuYW1lcyI6WyJpbnRlciIsIm1ldGFkYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIlJvb3RMYXlvdXQiLCJjaGlsZHJlbiIsImh0bWwiLCJsYW5nIiwiYm9keSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/layout.tsx\n");

/***/ }),

/***/ "(rsc)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/trimpham98/repos/diff-checker/src/app/page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/monaco-editor","vendor-chunks/next","vendor-chunks/@monaco-editor","vendor-chunks/@swc","vendor-chunks/diff","vendor-chunks/state-local"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ftrimpham98%2Frepos%2Fdiff-checker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();