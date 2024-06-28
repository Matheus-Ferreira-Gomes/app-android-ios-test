/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./src/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js */ \"./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render,\n  _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://app-vue/./src/App.vue?");

/***/ }),

/***/ "./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _anuradev_capacitor_background_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @anuradev/capacitor-background-mode */ \"./node_modules/@anuradev/capacitor-background-mode/dist/esm/index.js\");\n/* harmony import */ var _capacitor_community_keep_awake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor-community/keep-awake */ \"./node_modules/@capacitor-community/keep-awake/dist/esm/index.js\");\n/* harmony import */ var _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/clipboard */ \"./node_modules/@capacitor/clipboard/dist/esm/index.js\");\n/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/network */ \"./node_modules/@capacitor/network/dist/esm/index.js\");\n/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/share */ \"./node_modules/@capacitor/share/dist/esm/index.js\");\n/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/status-bar */ \"./node_modules/@capacitor/status-bar/dist/esm/index.js\");\n/* harmony import */ var _hugotomazi_capacitor_navigation_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hugotomazi/capacitor-navigation-bar */ \"./node_modules/@hugotomazi/capacitor-navigation-bar/dist/esm/index.js\");\n/* harmony import */ var _capacitor_screen_orientation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/screen-orientation */ \"./node_modules/@capacitor/screen-orientation/dist/esm/index.js\");\n/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/device */ \"./node_modules/@capacitor/device/dist/esm/index.js\");\n/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! onesignal-cordova-plugin */ \"./node_modules/onesignal-cordova-plugin/dist/index.js\");\n/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"App\",\n\n  async mounted() {\n    onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_9___default().initialize(\"3b57f101-38d3-4f91-be7d-3923516f545f\");\n\n    const language = await _capacitor_device__WEBPACK_IMPORTED_MODULE_8__.Device.getLanguageCode();\n    alert(`Idioma: ${language.value}`);\n\n    _capacitor_network__WEBPACK_IMPORTED_MODULE_3__.Network.addListener(\"networkStatusChange\", status => {\n      alert(`Network status changed: ${status}`);\n    });\n\n    await _capacitor_screen_orientation__WEBPACK_IMPORTED_MODULE_7__.ScreenOrientation.lock();\n  },\n\n  methods: {\n    async isBGActive() {\n      const active = await _anuradev_capacitor_background_mode__WEBPACK_IMPORTED_MODULE_0__.BackgroundMode.isActive();\n      alert(`Ativo: ${active.activated}`);\n    },\n    async BGEnable() {\n      await _anuradev_capacitor_background_mode__WEBPACK_IMPORTED_MODULE_0__.BackgroundMode.enable();\n      alert(\"Ativado!\");\n    },\n\n    async isKAActive() {\n      const result = await _capacitor_community_keep_awake__WEBPACK_IMPORTED_MODULE_1__.KeepAwake.isKeptAwake();\n      alert(`Ativo: ${result.isKeptAwake}`);\n    },\n    async KAEnable() {\n      await _capacitor_community_keep_awake__WEBPACK_IMPORTED_MODULE_1__.KeepAwake.keepAwake();\n      alert(\"Ativado!\");\n    },\n\n    async copyToClipboard() {\n      await _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_2__.Clipboard.write({\n        string: \"Hello World!\"\n      });\n      alert(\"Copiado!\");\n    },\n\n    async checkNetwork() {\n      const status = await _capacitor_network__WEBPACK_IMPORTED_MODULE_3__.Network.getStatus();\n      console.log(\"status:\", status);\n      alert(`Network status: conectado: ${status.connected} | connectionType: ${status.connectionType}`);\n    },\n\n    async share() {\n      await _capacitor_share__WEBPACK_IMPORTED_MODULE_4__.Share.share({\n        title: \"See cool stuff\",\n        text: \"Really awesome thing you need to see right meow\",\n        url: \"http://ionicframework.com/\",\n        dialogTitle: \"Share with buddies\",\n      })\n    },\n\n    async SBOverlary() {\n      _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.StatusBar.setOverlaysWebView({ overlay: true });\n    },\n    async SBDark() {\n      await _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.StatusBar.setStyle({ style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.Style.Dark });\n    },\n    async SBLight() {\n      await _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.StatusBar.setStyle({ style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.Style.Light });\n    },\n    async SBHide() {\n      await _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.StatusBar.hide();\n    },\n    async SBShow() {\n      await _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.StatusBar.show();\n    },\n    async SBChangeColor() {\n      await _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.StatusBar.setBackgroundColor({ color: \"#FF0000\" });\n    },\n\n    async NBHide() {\n      await _hugotomazi_capacitor_navigation_bar__WEBPACK_IMPORTED_MODULE_6__.NavigationBar.hide();\n    },\n    async NBShow() {\n      await _hugotomazi_capacitor_navigation_bar__WEBPACK_IMPORTED_MODULE_6__.NavigationBar.show();\n    },\n    async NBSetColor() {\n      await _hugotomazi_capacitor_navigation_bar__WEBPACK_IMPORTED_MODULE_6__.NavigationBar.setColor({ color: \"#FF0000\" });\n    },\n\n    sendEmail() {\n      window.open(\"mailto:matheusmgferreira2013@gmail.com\", \"_SYSTEM\");\n    },\n\n    async activeFullscreen() {\n      _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.StatusBar.setOverlaysWebView({ overlay: true });\n      await _hugotomazi_capacitor_navigation_bar__WEBPACK_IMPORTED_MODULE_6__.NavigationBar.hide();\n      await _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.StatusBar.hide();\n    },\n    async deactiveFullscreen() {\n      _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.StatusBar.setOverlaysWebView({ overlay: false });\n      await _hugotomazi_capacitor_navigation_bar__WEBPACK_IMPORTED_MODULE_6__.NavigationBar.show();\n      await _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_5__.StatusBar.show();\n    },\n\n    async portrait() {\n      await _capacitor_screen_orientation__WEBPACK_IMPORTED_MODULE_7__.ScreenOrientation.lock({ orientation: \"portrait-primary\" });\n    },\n    async landscape() {\n      await _capacitor_screen_orientation__WEBPACK_IMPORTED_MODULE_7__.ScreenOrientation.lock({ orientation: \"landscape-primary\" });\n    },\n\n    headsetDetectation() {\n      window.HeadsetDetection.detect(detected => {\n        alert(`Detect: ${detected}`);\n      });\n    },\n\n    getOSID() {\n      const oneSignalID = (onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_9___default())?.User?.pushSubscription?.id;\n      alert(`ID: ${oneSignalID}`);\n    }\n  }\n});\n\n\n//# sourceURL=webpack://app-vue/./src/App.vue?./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js */ \"./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://app-vue/./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vuetify_loader_lib_loader_js_ruleSet_1_rules_0_use_node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!../node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90 */ \"./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90\");\n\n\n//# sourceURL=webpack://app-vue/./src/App.vue?");

/***/ }),

/***/ "./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/loader.js??ruleSet[1].rules[0].use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; },\n/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VApp */ \"./node_modules/vuetify/lib/components/VApp/VApp.js\");\n/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ \"./node_modules/vuetify/lib/components/VBtn/VBtn.js\");\n/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ \"./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js\");\n/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ \"./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js\");\n/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ \"./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js\");\n/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ \"./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanels.js\");\n/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VMain */ \"./node_modules/vuetify/lib/components/VMain/VMain.js\");\n\n\n\n\n\n\n\n\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c\n  return _c(\n    vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    [\n      _c(\n        vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        { staticClass: \"pa-5\" },\n        [\n          _c(\n            vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            [\n              _c(\n                vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                [\n                  _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], [_vm._v(\"Background-Mode\")]),\n                  _c(\n                    vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    [\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.isBGActive },\n                        },\n                        [_vm._v(\"Está ativo?\")]\n                      ),\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none\",\n                          attrs: { color: \"primary\" },\n                        },\n                        [_vm._v(\"Ativar background mode\")]\n                      ),\n                    ],\n                    1\n                  ),\n                ],\n                1\n              ),\n              _c(\n                vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                [\n                  _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], [_vm._v(\"Keep-Awake\")]),\n                  _c(\n                    vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    [\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.isKAActive },\n                        },\n                        [_vm._v(\"Está ativo?\")]\n                      ),\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.KAEnable },\n                        },\n                        [_vm._v(\"Ativar Keep Awake\")]\n                      ),\n                    ],\n                    1\n                  ),\n                ],\n                1\n              ),\n              _c(\n                vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                [\n                  _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], [_vm._v(\"Clipboard\")]),\n                  _c(\n                    vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    [\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.copyToClipboard },\n                        },\n                        [_vm._v(\"Copiar\")]\n                      ),\n                    ],\n                    1\n                  ),\n                ],\n                1\n              ),\n              _c(\n                vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                [\n                  _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], [_vm._v(\"Network\")]),\n                  _c(\n                    vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    [\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.checkNetwork },\n                        },\n                        [_vm._v(\"Checar internet\")]\n                      ),\n                    ],\n                    1\n                  ),\n                ],\n                1\n              ),\n              _c(\n                vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                [\n                  _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], [_vm._v(\"Compartilhar\")]),\n                  _c(\n                    vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    [\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.share },\n                        },\n                        [_vm._v(\"Share\")]\n                      ),\n                    ],\n                    1\n                  ),\n                ],\n                1\n              ),\n              _c(\n                vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                [\n                  _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], [_vm._v(\"Status Bar\")]),\n                  _c(\n                    vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    [\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.SBOverlary },\n                        },\n                        [_vm._v(\"Overlay\")]\n                      ),\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.SBDark },\n                        },\n                        [_vm._v(\"Dark\")]\n                      ),\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.SBLight },\n                        },\n                        [_vm._v(\"Light\")]\n                      ),\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.SBHide },\n                        },\n                        [_vm._v(\"Hide\")]\n                      ),\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.SBShow },\n                        },\n                        [_vm._v(\"Show\")]\n                      ),\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.SBChangeColor },\n                        },\n                        [_vm._v(\"Mudar cor\")]\n                      ),\n                    ],\n                    1\n                  ),\n                ],\n                1\n              ),\n              _c(\n                vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                [\n                  _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], [_vm._v(\"Navigation Bar\")]),\n                  _c(\n                    vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    [\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.NBHide },\n                        },\n                        [_vm._v(\"Hide\")]\n                      ),\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.NBShow },\n                        },\n                        [_vm._v(\"Show\")]\n                      ),\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.NBSetColor },\n                        },\n                        [_vm._v(\"Mudar cor\")]\n                      ),\n                    ],\n                    1\n                  ),\n                ],\n                1\n              ),\n              _c(\n                vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                [\n                  _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], [_vm._v(\"Suporte\")]),\n                  _c(\n                    vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    [\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.sendEmail },\n                        },\n                        [_vm._v(\"Mandar e-mail\")]\n                      ),\n                    ],\n                    1\n                  ),\n                ],\n                1\n              ),\n              _c(\n                vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                [\n                  _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], [_vm._v(\"Fullscreen\")]),\n                  _c(\n                    vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    [\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.activeFullscreen },\n                        },\n                        [_vm._v(\"Ativar fullscreen\")]\n                      ),\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.deactiveFullscreen },\n                        },\n                        [_vm._v(\"Desativar fullscreen\")]\n                      ),\n                    ],\n                    1\n                  ),\n                ],\n                1\n              ),\n              _c(\n                vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                [\n                  _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], [_vm._v(\"Orientação\")]),\n                  _c(\n                    vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    [\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.portrait },\n                        },\n                        [_vm._v(\"Portrait\")]\n                      ),\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.landscape },\n                        },\n                        [_vm._v(\"Landscape\")]\n                      ),\n                    ],\n                    1\n                  ),\n                ],\n                1\n              ),\n              _c(\n                vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                [\n                  _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], [_vm._v(\"Headset\")]),\n                  _c(\n                    vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    [\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.headsetDetectation },\n                        },\n                        [_vm._v(\"Detect\")]\n                      ),\n                    ],\n                    1\n                  ),\n                ],\n                1\n              ),\n              _c(\n                vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                [\n                  _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], [_vm._v(\"One Signal\")]),\n                  _c(\n                    vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    [\n                      _c(\n                        vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        {\n                          staticClass: \"pa-5 text-none mr-3\",\n                          attrs: { color: \"primary\" },\n                          on: { click: _vm.getOSID },\n                        },\n                        [_vm._v(\"Get ID\")]\n                      ),\n                    ],\n                    1\n                  ),\n                ],\n                1\n              ),\n            ],\n            1\n          ),\n        ],\n        1\n      ),\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://app-vue/./src/App.vue?./node_modules/vuetify-loader/lib/loader.js??ruleSet%5B1%5D.rules%5B0%5D.use!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./src/store/index.js\");\n/* harmony import */ var _plugins_vuetify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/vuetify */ \"./src/plugins/vuetify.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].config.productionTip = false;\r\n\r\nnew vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\r\n  router: _router__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n  store: _store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n  vuetify: _plugins_vuetify__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n}).$mount(\"#app\");\r\n\n\n//# sourceURL=webpack://app-vue/./src/main.js?");

/***/ }),

/***/ "./src/plugins/vuetify.js":
/*!********************************!*\
  !*** ./src/plugins/vuetify.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vuetify_lib_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/framework */ \"./node_modules/vuetify/lib/framework.js\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vuetify_lib_framework__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuetify_lib_framework__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({}));\n\n\n//# sourceURL=webpack://app-vue/./src/plugins/vuetify.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nconst routes = [];\n\nconst router = new vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  mode: \"history\",\n  base: \"/\",\n  routes\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n\n//# sourceURL=webpack://app-vue/./src/router/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Store({\n  state: { },\n  getters: { },\n  mutations: { },\n  actions: { },\n  modules: { }\n}));\n\n\n//# sourceURL=webpack://app-vue/./src/store/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "app-vue:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkapp_vue"] = self["webpackChunkapp_vue"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./src/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;