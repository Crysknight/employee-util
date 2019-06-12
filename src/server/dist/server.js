/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../shared/constants/index.js":
/*!************************************!*\
  !*** ../shared/constants/index.js ***!
  \************************************/
/*! exports provided: MUTATION_SET_EMPLOYEES, MUTATION_CREATE_EMPLOYEE, MUTATION_DELETE_EMPLOYEES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mutations */ \"../shared/constants/mutations.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MUTATION_SET_EMPLOYEES\", function() { return _mutations__WEBPACK_IMPORTED_MODULE_0__[\"MUTATION_SET_EMPLOYEES\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MUTATION_CREATE_EMPLOYEE\", function() { return _mutations__WEBPACK_IMPORTED_MODULE_0__[\"MUTATION_CREATE_EMPLOYEE\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MUTATION_DELETE_EMPLOYEES\", function() { return _mutations__WEBPACK_IMPORTED_MODULE_0__[\"MUTATION_DELETE_EMPLOYEES\"]; });\n\n\n\n\n//# sourceURL=webpack:///../shared/constants/index.js?");

/***/ }),

/***/ "../shared/constants/mutations.js":
/*!****************************************!*\
  !*** ../shared/constants/mutations.js ***!
  \****************************************/
/*! exports provided: MUTATION_SET_EMPLOYEES, MUTATION_CREATE_EMPLOYEE, MUTATION_DELETE_EMPLOYEES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MUTATION_SET_EMPLOYEES\", function() { return MUTATION_SET_EMPLOYEES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MUTATION_CREATE_EMPLOYEE\", function() { return MUTATION_CREATE_EMPLOYEE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MUTATION_DELETE_EMPLOYEES\", function() { return MUTATION_DELETE_EMPLOYEES; });\nconst MUTATION_SET_EMPLOYEES = 'MUTATION_SET_EMPLOYEES';\nconst MUTATION_CREATE_EMPLOYEE = 'MUTATION_CREATE_EMPLOYEE';\nconst MUTATION_DELETE_EMPLOYEES = 'MUTATION_DELETE_EMPLOYEES';\n\n\n//# sourceURL=webpack:///../shared/constants/mutations.js?");

/***/ }),

/***/ "../shared/store/employees/index.js":
/*!******************************************!*\
  !*** ../shared/store/employees/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"../shared/store/employees/state.js\");\n/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutations */ \"../shared/store/employees/mutations.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    namespaced: true,\n    state: _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    mutations: _mutations__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n\n//# sourceURL=webpack:///../shared/store/employees/index.js?");

/***/ }),

/***/ "../shared/store/employees/mutations.js":
/*!**********************************************!*\
  !*** ../shared/store/employees/mutations.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ \"../shared/constants/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"../shared/utils/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    [_constants__WEBPACK_IMPORTED_MODULE_0__[\"MUTATION_SET_EMPLOYEES\"]](state, employees) {\n        state.employees = employees;\n    },\n    [_constants__WEBPACK_IMPORTED_MODULE_0__[\"MUTATION_CREATE_EMPLOYEE\"]](state, employee) {\n        state.employees.push(employee);\n    },\n    [_constants__WEBPACK_IMPORTED_MODULE_0__[\"MUTATION_DELETE_EMPLOYEES\"]](state, employeesIds) {\n        employeesIds.forEach(id => {\n            const employee = state.employees.find(({ _id }) => _id === id);\n            if (employee) {\n                Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"arrayDelete\"])(state.employees, employee);\n            }\n        });\n    }\n});\n\n\n//# sourceURL=webpack:///../shared/store/employees/mutations.js?");

/***/ }),

/***/ "../shared/store/employees/state.js":
/*!******************************************!*\
  !*** ../shared/store/employees/state.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    employees: []\n});\n\n\n//# sourceURL=webpack:///../shared/store/employees/state.js?");

/***/ }),

/***/ "../shared/store/index.js":
/*!********************************!*\
  !*** ../shared/store/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ \"../shared/store/modules.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (actions => {\n    Object.keys(actions).forEach(moduleName => {\n        _modules__WEBPACK_IMPORTED_MODULE_0__[moduleName].actions = actions[moduleName];\n    });\n\n    return _modules__WEBPACK_IMPORTED_MODULE_0__;\n});\n\n\n//# sourceURL=webpack:///../shared/store/index.js?");

/***/ }),

/***/ "../shared/store/modules.js":
/*!**********************************!*\
  !*** ../shared/store/modules.js ***!
  \**********************************/
/*! exports provided: employees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _employees__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employees */ \"../shared/store/employees/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"employees\", function() { return _employees__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///../shared/store/modules.js?");

/***/ }),

/***/ "../shared/utils/index.js":
/*!********************************!*\
  !*** ../shared/utils/index.js ***!
  \********************************/
/*! exports provided: stringRandom, arrayDelete, arrayToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringRandom\", function() { return stringRandom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arrayDelete\", function() { return arrayDelete; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arrayToggle\", function() { return arrayToggle; });\nconst stringRandom = (length = 9) => {\n    return Math.random()\n        .toString(36)\n        .substr(2, length);\n};\n\nconst arrayDelete = (array, value) => {\n    const index = array.indexOf(value);\n    if (index !== -1) {\n        array.splice(index, 1);\n    }\n};\n\nconst arrayToggle = (array, value) => {\n    const index = array.indexOf(value);\n    if (index === -1) {\n        array.push(value);\n    } else {\n        array.splice(index, 1);\n    }\n};\n\n\n//# sourceURL=webpack:///../shared/utils/index.js?");

/***/ }),

/***/ "./connection.js":
/*!***********************!*\
  !*** ./connection.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\r\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Promise = global.Promise;\r\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(\r\n    'mongodb://app:jtr5E@127.0.0.1:27017/employeeUtil',\r\n    { useMongoClient: true }\r\n);\r\n\n\n//# sourceURL=webpack:///./connection.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ \"core-js/stable\");\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ \"./routes/index.js\");\n/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./connection */ \"./connection.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store */ \"./store/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\r\n\r\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json());\r\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_6___default()());\r\n\r\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, '../front/dist')));\r\napp.use('/static', express__WEBPACK_IMPORTED_MODULE_3___default.a.static(path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(__dirname, './static')));\r\n\r\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()({\r\n    origin(_origin, callback) {\r\n        return callback(null, true);\r\n    },\r\n    optionsSuccessStatus: 200,\r\n    credentials: true\r\n}));\r\n\r\n\r\napp.use('/api/*', _routes__WEBPACK_IMPORTED_MODULE_7__[\"checkAuth\"]);\r\n\r\napp.post('/api/user', _routes__WEBPACK_IMPORTED_MODULE_7__[\"createUser\"]);\r\napp.post('/api/login', _routes__WEBPACK_IMPORTED_MODULE_7__[\"login\"]);\r\napp.get('/api/logout', _routes__WEBPACK_IMPORTED_MODULE_7__[\"logout\"]);\r\n\r\napp.get('/*', (_req, res) => {\r\n\tres.sendFile(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, '../front/dist', 'index.html'));\r\n});\r\n\r\napp.listen('3000');\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./models/avatar.js":
/*!**************************!*\
  !*** ./models/avatar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file */ \"./models/file.js\");\n\n\n\nconst { Schema } = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a;\n\nconst avatarSchema = Schema({\n    employee: {\n        type: Schema.Types.ObjectId,\n        ref: 'Employee'\n    }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_file__WEBPACK_IMPORTED_MODULE_1__[\"default\"].discriminator('Avatar', avatarSchema));\n\n\n//# sourceURL=webpack:///./models/avatar.js?");

/***/ }),

/***/ "./models/employee/create_employee.js":
/*!********************************************!*\
  !*** ./models/employee/create_employee.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ \"./models/index.js\");\n\n\n\n\nconst { ObjectId } = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Types;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async employeeData => {\n    const employee = new models__WEBPACK_IMPORTED_MODULE_1__[\"Employee\"](employeeData);\n    const measures = await models__WEBPACK_IMPORTED_MODULE_1__[\"Measure\"].find();\n    employee.measures = measures.map(measure => {\n        return {\n            measure: ObjectId(measure._id),\n            rates: []\n        };\n    });\n    await employee.save();\n\n    const populatedEmployee = await models__WEBPACK_IMPORTED_MODULE_1__[\"Employee\"].populate(\n        employee,\n        [\n            { path: 'measures.measure', select: '-id' },\n            { path: 'measures.rates.user', select: 'login -id' }\n        ]\n    );\n\n    const formattedEmployee = populatedEmployee.toObject();\n    formattedEmployee.measures = formattedEmployee.measures.map(measure => {\n        const formattedMeasure = {\n            ...measure,\n            name: measure.measure.name\n        };\n        delete formattedMeasure.measure;\n        delete formattedMeasure.__v;\n\n        return formattedMeasure;\n    });\n\n    return formattedEmployee;\n});\n\n\n//# sourceURL=webpack:///./models/employee/create_employee.js?");

/***/ }),

/***/ "./models/employee/delete_employees.js":
/*!*********************************************!*\
  !*** ./models/employee/delete_employees.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models */ \"./models/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async employeesIds => {\n    await Promise.all(employeesIds.map(async id => {\n        const employeeDoc = models__WEBPACK_IMPORTED_MODULE_0__[\"Employee\"].findById(id);\n        await employeeDoc.remove();\n    }));\n});\n\n\n//# sourceURL=webpack:///./models/employee/delete_employees.js?");

/***/ }),

/***/ "./models/employee/employee.js":
/*!*************************************!*\
  !*** ./models/employee/employee.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst { Schema } = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a;\n\nconst rateSubschema = Schema({\n    user: {\n        type: Schema.Types.ObjectId,\n        ref: 'User'\n    },\n    value: {\n        type: Number,\n        min: 0,\n        max: 10\n    }\n});\n\nconst measureSubschema = Schema({\n    measure: {\n        type: Schema.Types.ObjectId,\n        ref: 'Measure'\n    },\n    rates: [rateSubschema]\n});\n\nconst employeeSchema = Schema({\n    name: {\n        type: String,\n        unique: true,\n        required: true\n    },\n    isMentor: Boolean,\n    avatar: {\n        type: Schema.Types.ObjectId,\n        ref: 'Avatar'\n    },\n    measures: [measureSubschema]\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Employee', employeeSchema));\n\n\n//# sourceURL=webpack:///./models/employee/employee.js?");

/***/ }),

/***/ "./models/employee/get_employees.js":
/*!******************************************!*\
  !*** ./models/employee/get_employees.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models */ \"./models/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async () => {\n    const employees = await models__WEBPACK_IMPORTED_MODULE_0__[\"Employee\"].find();\n    const populatedEmployees = await models__WEBPACK_IMPORTED_MODULE_0__[\"Employee\"].populate(\n        employees,\n        [\n            { path: 'measures.measure', select: '-_id' },\n            { path: 'measures.rates.user', select: 'login -_id' },\n            { path: 'avatar', select: 'path -_id' }\n        ]\n    );\n    const formattedEmployees = populatedEmployees\n        .filter(({ name }) => name)\n        .map(employee => {\n            const formattedEmployee = { ...employee.toObject() };\n\n            if (employee.avatar) {\n                formattedEmployee.avatar = employee.avatar.path;\n            }\n\n            formattedEmployee.measures = employee.measures.map(measure => {\n                const formattedMeasure = {\n                    ...measure.toObject(),\n                    name: measure.measure.name\n                };\n                delete formattedMeasure.measure;\n                delete formattedMeasure.__v;\n                formattedMeasure.rates = measure.rates.map(rate => {\n                    const formattedRate = {\n                        ...rate.toObject(),\n                        user: rate.user.login\n                    };\n\n                    return formattedRate;\n                });\n\n                return formattedMeasure;\n            });\n\n            return formattedEmployee;\n        });\n\n    return formattedEmployees;\n});\n\n\n//# sourceURL=webpack:///./models/employee/get_employees.js?");

/***/ }),

/***/ "./models/employee/index.js":
/*!**********************************!*\
  !*** ./models/employee/index.js ***!
  \**********************************/
/*! exports provided: default, getEmployees, createEmployee, deleteEmployees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee */ \"./models/employee/employee.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _employee__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _get_employees__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_employees */ \"./models/employee/get_employees.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getEmployees\", function() { return _get_employees__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _create_employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_employee */ \"./models/employee/create_employee.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createEmployee\", function() { return _create_employee__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _delete_employees__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete_employees */ \"./models/employee/delete_employees.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deleteEmployees\", function() { return _delete_employees__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./models/employee/index.js?");

/***/ }),

/***/ "./models/file.js":
/*!************************!*\
  !*** ./models/file.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants */ \"constants\");\n/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(constants__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nconst { Schema } = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a;\n\nconst fileSchema = Schema({\n    path: {\n        type: String,\n        required: true\n    },\n    name: {\n        type: String,\n        required: true\n    },\n    size: Number,\n    uploadDate: {\n        type: Number,\n        default() {\n            return new Date().getTime();\n        }\n    }\n}, { discriminatorKey: 'type' });\n\nfileSchema.pre('remove', function(next) {\n    const { path: filePath } = this;\n    const fileAbsolutePath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(constants__WEBPACK_IMPORTED_MODULE_3__[\"SERVER_PATH\"], filePath);\n\n    if (fs__WEBPACK_IMPORTED_MODULE_1___default.a.existsSync(fileAbsolutePath)) {\n        fs__WEBPACK_IMPORTED_MODULE_1___default.a.unlinkSync(fileAbsolutePath);\n    }\n\n    next();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('File', fileSchema));\n\n\n//# sourceURL=webpack:///./models/file.js?");

/***/ }),

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/*! exports provided: User, Measure, Employee, File, Avatar, getEmployees, createEmployee, deleteEmployees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./models/user.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _measure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./measure */ \"./models/measure.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Measure\", function() { return _measure__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee */ \"./models/employee/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Employee\", function() { return _employee__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getEmployees\", function() { return _employee__WEBPACK_IMPORTED_MODULE_2__[\"getEmployees\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createEmployee\", function() { return _employee__WEBPACK_IMPORTED_MODULE_2__[\"createEmployee\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deleteEmployees\", function() { return _employee__WEBPACK_IMPORTED_MODULE_2__[\"deleteEmployees\"]; });\n\n/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file */ \"./models/file.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"File\", function() { return _file__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./avatar */ \"./models/avatar.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Avatar\", function() { return _avatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./models/index.js?");

/***/ }),

/***/ "./models/measure.js":
/*!***************************!*\
  !*** ./models/measure.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst { Schema } = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a;\n\nconst measureSchema = Schema({\n    name: {\n        type: String,\n        unique: true,\n        required: true\n    }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Measure', measureSchema));\n\n\n//# sourceURL=webpack:///./models/measure.js?");

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst { Schema } = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a;\n\nconst userSchema = Schema({\n    login: {\n        type: String,\n        unique: true,\n        required: true\n    },\n    name: String,\n    pwd: {\n        type: String,\n        required: true\n    },\n    token: String\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', userSchema));\n\n\n//# sourceURL=webpack:///./models/user.js?");

/***/ }),

/***/ "./routes/check_auth.js":
/*!******************************!*\
  !*** ./routes/check_auth.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models */ \"./models/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res, next) => {\n    if (req.baseUrl === '/api/login') {\n        next();\n        return;\n    }\n\n    const { eu_token: token } = req.cookies;\n    if (token) {\n        const user = await models__WEBPACK_IMPORTED_MODULE_0__[\"User\"].findOne({ token });\n        if (user) {\n            next();\n            return;\n        }\n    }\n\n    res.status(401).send('unauthorized');\n});\n\n\n//# sourceURL=webpack:///./routes/check_auth.js?");

/***/ }),

/***/ "./routes/create_employee.js":
/*!***********************************!*\
  !*** ./routes/create_employee.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ \"./models/index.js\");\n\n\n\n\nconst { ObjectId } = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Types;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n    const { name, isMentor } = req.body;\n    const employee = new models__WEBPACK_IMPORTED_MODULE_1__[\"Employee\"]({ name, isMentor });\n    const skills = await models__WEBPACK_IMPORTED_MODULE_1__[\"Skill\"].find();\n    employee.skills = skills.map(skill => {\n        return {\n            skill: ObjectId(skill._id),\n            rates: []\n        };\n    });\n    await employee.save();\n\n    const populatedEmployee = await models__WEBPACK_IMPORTED_MODULE_1__[\"Employee\"].populate(\n        employee,\n        [\n            { path: 'skills.skill', select: '-id' },\n            { path: 'skills.rates.user', select: 'login -id' }\n        ]\n    );\n\n    const formattedEmployee = populatedEmployee.toObject();\n    formattedEmployee.skills = formattedEmployee.skills.map(skill => {\n        const formattedSkill = {\n            ...skill,\n            name: skill.skill.name\n        };\n        delete formattedSkill.skill;\n        delete formattedSkill.__v;\n\n        return formattedSkill;\n    });\n\n    res.send(formattedEmployee);\n});\n\n\n//# sourceURL=webpack:///./routes/create_employee.js?");

/***/ }),

/***/ "./routes/create_metrics.js":
/*!**********************************!*\
  !*** ./routes/create_metrics.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models */ \"./models/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n    const { name } = req.body;\n    const skill = new models__WEBPACK_IMPORTED_MODULE_0__[\"Skill\"]({ name });\n    await skill.save();\n\n    const employees = await models__WEBPACK_IMPORTED_MODULE_0__[\"Employee\"].find();\n    await Promise.all(employees.map(async employee => {\n        employee.skills.push({ skill: skill._id, rates: [] });\n        await employee.save();\n    }));\n\n    res.status(200).send(skill);\n});\n\n\n//# sourceURL=webpack:///./routes/create_metrics.js?");

/***/ }),

/***/ "./routes/create_user.js":
/*!*******************************!*\
  !*** ./routes/create_user.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var password_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! password-hash */ \"password-hash\");\n/* harmony import */ var password_hash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(password_hash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ \"./models/index.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n    const { login, name, pwd: rawPwd } = req.body;\n    const pwd = password_hash__WEBPACK_IMPORTED_MODULE_0___default.a.generate(rawPwd);\n\n    const user = new models__WEBPACK_IMPORTED_MODULE_1__[\"User\"]({ login, name, pwd });\n    await user.save();\n    res.send('ok');\n});\n\n\n//# sourceURL=webpack:///./routes/create_user.js?");

/***/ }),

/***/ "./routes/delete_employees.js":
/*!************************************!*\
  !*** ./routes/delete_employees.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models */ \"./models/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n    const { employeesIds } = req.body;\n    await Promise.all(employeesIds.map(async id => {\n        const employeeDoc = models__WEBPACK_IMPORTED_MODULE_0__[\"Employee\"].findById(id);\n        await employeeDoc.remove();\n    }));\n\n    res.status(200).send('ok');\n});\n\n\n//# sourceURL=webpack:///./routes/delete_employees.js?");

/***/ }),

/***/ "./routes/delete_metrics.js":
/*!**********************************!*\
  !*** ./routes/delete_metrics.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models */ \"./models/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n    const { skillId } = req.body;\n\n    const skill = await models__WEBPACK_IMPORTED_MODULE_0__[\"Skill\"].findById(skillId);\n    await skill.remove();\n\n    const employees = await models__WEBPACK_IMPORTED_MODULE_0__[\"Employee\"].find();\n    await Promise.all(employees.map(async employee => {\n        const skillIndex = employee.skills.findIndex(\n            skill => skill.skill.equals(skillId)\n        );\n        employee.skills.splice(skillIndex, 1);\n        await employee.save();\n    }));\n\n    res.status(200).send('ok');\n});\n\n\n//# sourceURL=webpack:///./routes/delete_metrics.js?");

/***/ }),

/***/ "./routes/get_metrics.js":
/*!*******************************!*\
  !*** ./routes/get_metrics.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models */ \"./models/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n    const skills = await models__WEBPACK_IMPORTED_MODULE_0__[\"Skill\"].find();\n    res.status(200).send(skills);\n});\n\n\n//# sourceURL=webpack:///./routes/get_metrics.js?");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! exports provided: createUser, login, logout, checkAuth, getMetrics, createMetrics, deleteMetrics, createEmployee, rate, deleteEmployees, uploadAvatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_user */ \"./routes/create_user.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return _create_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ \"./routes/login.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return _login__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _logout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout */ \"./routes/logout.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return _logout__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _check_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check_auth */ \"./routes/check_auth.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"checkAuth\", function() { return _check_auth__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _get_metrics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get_metrics */ \"./routes/get_metrics.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getMetrics\", function() { return _get_metrics__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _create_metrics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create_metrics */ \"./routes/create_metrics.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createMetrics\", function() { return _create_metrics__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _delete_metrics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete_metrics */ \"./routes/delete_metrics.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deleteMetrics\", function() { return _delete_metrics__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _create_employee__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create_employee */ \"./routes/create_employee.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createEmployee\", function() { return _create_employee__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _rate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rate */ \"./routes/rate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"rate\", function() { return _rate__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _delete_employees__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delete_employees */ \"./routes/delete_employees.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deleteEmployees\", function() { return _delete_employees__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _upload_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./upload_avatar */ \"./routes/upload_avatar.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"uploadAvatar\", function() { return _upload_avatar__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./routes/index.js?");

/***/ }),

/***/ "./routes/login.js":
/*!*************************!*\
  !*** ./routes/login.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var password_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! password-hash */ \"password-hash\");\n/* harmony import */ var password_hash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(password_hash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var token_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! token-generator */ \"token-generator\");\n/* harmony import */ var token_generator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(token_generator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models */ \"./models/index.js\");\n\n\n\n\n\nconst tokenGenerator = token_generator__WEBPACK_IMPORTED_MODULE_1___default()({\n    salt: 'kowalskyanalysis',\n    timestampMap: 'agvh5454da'\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n    const { login, pwd } = req.body;\n    if (\n        !login ||\n        !pwd ||\n        typeof login !== 'string' ||\n        typeof pwd !== 'string'\n    ) {\n        res.status(401).send('wrong credentials');\n        return;\n    }\n\n    const user = await models__WEBPACK_IMPORTED_MODULE_2__[\"User\"].findOne({ login });\n\n    if (\n        !user ||\n        !password_hash__WEBPACK_IMPORTED_MODULE_0___default.a.verify(pwd, user.pwd)\n    ) {\n        res.status(401).send('wrong credentials');\n        return;\n    }\n\n    user.token = tokenGenerator.generate();\n    await user.save();\n\n    const cookieOptions = {\n        httpOnly: false,\n        maxAge: 1000 * 60 * 60 * 48\n    };\n\n    res.cookie('eu_token', user.token, cookieOptions);\n    res.cookie('eu_user', user.login, cookieOptions);\n    res.cookie('eu_userName', user.name, cookieOptions);\n    res.cookie('eu_userId', user._id.toString(), cookieOptions);\n    res.status(200).send('ok');\n});\n\n\n//# sourceURL=webpack:///./routes/login.js?");

/***/ }),

/***/ "./routes/logout.js":
/*!**************************!*\
  !*** ./routes/logout.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models */ \"./models/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n    const { eu_token: token } = req.cookies;\n    const user = await models__WEBPACK_IMPORTED_MODULE_0__[\"User\"].findOne({ token });\n    delete user.token;\n\n    await user.save();\n\n    const cookieOptions = {\n        httpOnly: false,\n        maxAge: 0\n    };\n\n    res.cookie('eu_token', 'delete', cookieOptions);\n    res.cookie('eu_user', 'delete', cookieOptions);\n    res.cookie('eu_userName', 'delete', cookieOptions);\n    res.cookie('eu_userId', 'delete', cookieOptions);\n    res.status(200).send('ok');\n});\n\n\n//# sourceURL=webpack:///./routes/logout.js?");

/***/ }),

/***/ "./routes/rate.js":
/*!************************!*\
  !*** ./routes/rate.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ \"./models/index.js\");\n\n\n\n\nconst { ObjectId } = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Types;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n    const { employeeId, skillId, value } = req.body;\n    const employee = await models__WEBPACK_IMPORTED_MODULE_1__[\"Employee\"].findById(employeeId);\n    const skill = employee.skills.find(skill => skill._id.equals(skillId));\n    if (skill) {\n        const { eu_token: token } = req.cookies;\n        const user = await models__WEBPACK_IMPORTED_MODULE_1__[\"User\"].findOne({ token });\n\n        let rate = skill.rates.find(rate => rate.user.equals(user._id));\n        let isNew = false;\n        if (!rate) {\n            isNew = true;\n            rate = { user: ObjectId(user._id), value };\n            skill.rates.push(rate);\n        } else {\n            rate.value = value;\n        }\n\n        await employee.save();\n\n        const populatedRate = {\n            _id: rate._id,\n            value: rate.value,\n            user: user.login\n        };\n        res.status(200).send({ isNew, rate: populatedRate });\n        return;\n    }\n\n    res.status(400).send('no skill found');\n});\n\n\n//# sourceURL=webpack:///./routes/rate.js?");

/***/ }),

/***/ "./routes/upload_avatar.js":
/*!*********************************!*\
  !*** ./routes/upload_avatar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! models */ \"./models/index.js\");\n/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants */ \"constants\");\n/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(constants__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nconst { ObjectId } = mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Types;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n    const form = formidable__WEBPACK_IMPORTED_MODULE_2___default.a.IncomingForm();\n\n    form.encoding = 'utf-8';\n    form.uploadDir = constants__WEBPACK_IMPORTED_MODULE_4__[\"AVATARS_PATH\"];\n    form.keepExtensions = true;\n    form.parse(req, async (error, fields, files) => {\n        if (error) {\n            res.status(500).send('error occured', error);\n        } else {\n            const { employeeId } = fields;\n            const { avatar } = files;\n\n            const employee = await models__WEBPACK_IMPORTED_MODULE_3__[\"Employee\"].findById(employeeId);\n            if (employee) {\n                if (employee.avatar) {\n                    const oldAvatar = await models__WEBPACK_IMPORTED_MODULE_3__[\"Avatar\"].findById(employee.avatar);\n                    await oldAvatar.remove();\n                }\n\n                const filePath = path__WEBPACK_IMPORTED_MODULE_0___default.a.relative(constants__WEBPACK_IMPORTED_MODULE_4__[\"SERVER_PATH\"], avatar.path);\n                const newAvatar = new models__WEBPACK_IMPORTED_MODULE_3__[\"Avatar\"]({\n                    path: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('/', filePath),\n                    name: avatar.name,\n                    size: avatar.size,\n                    employee: ObjectId(employeeId)\n                });\n                await newAvatar.save();\n\n                employee.avatar = newAvatar._id;\n                await employee.save();\n\n                res.status(200).send(filePath);\n            } else {\n                res.status(400).send('no such employee');\n            }\n        }\n    });\n});\n\n\n//# sourceURL=webpack:///./routes/upload_avatar.js?");

/***/ }),

/***/ "./store/actions/employees/create_employee.js":
/*!****************************************************!*\
  !*** ./store/actions/employees/create_employee.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models */ \"./models/index.js\");\n/* harmony import */ var shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/constants */ \"../shared/constants/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async ({ commit }, employeeData) => {\n    const employee = await Object(models__WEBPACK_IMPORTED_MODULE_0__[\"createEmployee\"])(employeeData);\n\n    commit(shared_constants__WEBPACK_IMPORTED_MODULE_1__[\"MUTATION_CREATE_EMPLOYEE\"], employee);\n});\n\n\n//# sourceURL=webpack:///./store/actions/employees/create_employee.js?");

/***/ }),

/***/ "./store/actions/employees/delete_employees.js":
/*!*****************************************************!*\
  !*** ./store/actions/employees/delete_employees.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models */ \"./models/index.js\");\n/* harmony import */ var shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/constants */ \"../shared/constants/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async ({ commit }, employeesIds) => {\n    await Object(models__WEBPACK_IMPORTED_MODULE_0__[\"deleteEmployees\"])(employeesIds);\n\n    commit(shared_constants__WEBPACK_IMPORTED_MODULE_1__[\"MUTATION_DELETE_EMPLOYEES\"], employeesIds);\n});\n\n\n//# sourceURL=webpack:///./store/actions/employees/delete_employees.js?");

/***/ }),

/***/ "./store/actions/employees/get_employees.js":
/*!**************************************************!*\
  !*** ./store/actions/employees/get_employees.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models */ \"./models/index.js\");\n/* harmony import */ var shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/constants */ \"../shared/constants/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async ({ commit }) => {\n    const employees = await Object(models__WEBPACK_IMPORTED_MODULE_0__[\"getEmployees\"])();\n\n    commit(shared_constants__WEBPACK_IMPORTED_MODULE_1__[\"MUTATION_SET_EMPLOYEES\"], employees);\n});\n\n\n//# sourceURL=webpack:///./store/actions/employees/get_employees.js?");

/***/ }),

/***/ "./store/actions/employees/index.js":
/*!******************************************!*\
  !*** ./store/actions/employees/index.js ***!
  \******************************************/
/*! exports provided: getEmployees, createEmployee, deleteEmployees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _get_employees__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_employees */ \"./store/actions/employees/get_employees.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getEmployees\", function() { return _get_employees__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _create_employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_employee */ \"./store/actions/employees/create_employee.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createEmployee\", function() { return _create_employee__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _delete_employees__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete_employees */ \"./store/actions/employees/delete_employees.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deleteEmployees\", function() { return _delete_employees__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./store/actions/employees/index.js?");

/***/ }),

/***/ "./store/actions/index.js":
/*!********************************!*\
  !*** ./store/actions/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _employees__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employees */ \"./store/actions/employees/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    employees: _employees__WEBPACK_IMPORTED_MODULE_0__\n});\n\n\n//# sourceURL=webpack:///./store/actions/index.js?");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"vuex\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./store/actions/index.js\");\n/* harmony import */ var shared_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/store */ \"../shared/store/index.js\");\n/* harmony import */ var _websocket_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./websocket_plugin */ \"./store/websocket_plugin.js\");\n/* harmony import */ var _websocket_plugin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_websocket_plugin__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1___default.a);\n\nconst store = new vuex__WEBPACK_IMPORTED_MODULE_1___default.a.Store({\n    modules: Object(shared_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_actions__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n    plugins: [_websocket_plugin__WEBPACK_IMPORTED_MODULE_4___default.a]\n});\n\nglobal.$store = store;\n\n\n//# sourceURL=webpack:///./store/index.js?");

/***/ }),

/***/ "./store/websocket_plugin.js":
/*!***********************************!*\
  !*** ./store/websocket_plugin.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const ws = __webpack_require__(/*! ws */ \"ws\");\nconst SocketServer = new ws.Server({ port: 3001 });\n\nmodule.exports = store => {\n    store.subscribe(mutation => {\n        SocketServer.clients.forEach(client => {\n            if (client.readyState === ws.OPEN) {\n                client.send(JSON.stringify(mutation));\n            }\n        });\n    });\n\n    SocketServer.on('connection', Socket => {\n        Socket.on('message', message => {\n            const action = JSON.parse(message);\n            const { type, payload } = action;\n            if (type && payload) {\n                store.dispatch(type, payload);\n            } else if (type) {\n                store.dispatch(type);\n            }\n        });\n    });\n};\n\n\n//# sourceURL=webpack:///./store/websocket_plugin.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "constants":
/*!****************************!*\
  !*** external "constants" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"constants\");\n\n//# sourceURL=webpack:///external_%22constants%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "core-js/stable":
/*!*********************************!*\
  !*** external "core-js/stable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/stable\");\n\n//# sourceURL=webpack:///external_%22core-js/stable%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");\n\n//# sourceURL=webpack:///external_%22formidable%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "password-hash":
/*!********************************!*\
  !*** external "password-hash" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"password-hash\");\n\n//# sourceURL=webpack:///external_%22password-hash%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime/runtime\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime/runtime%22?");

/***/ }),

/***/ "token-generator":
/*!**********************************!*\
  !*** external "token-generator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"token-generator\");\n\n//# sourceURL=webpack:///external_%22token-generator%22?");

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vue\");\n\n//# sourceURL=webpack:///external_%22vue%22?");

/***/ }),

/***/ "vuex":
/*!***********************!*\
  !*** external "vuex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vuex\");\n\n//# sourceURL=webpack:///external_%22vuex%22?");

/***/ }),

/***/ "ws":
/*!*********************!*\
  !*** external "ws" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ws\");\n\n//# sourceURL=webpack:///external_%22ws%22?");

/***/ })

/******/ });