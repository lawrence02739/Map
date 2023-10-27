(self["webpackChunkmap_frontend"] = self["webpackChunkmap_frontend"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 24789:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component.html?ngResource */ 6277);
/* harmony import */ var _dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss?ngResource */ 77705);
/* harmony import */ var _dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/storage-setting/storage-configuration */ 46352);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.configuration */ 5898);








let DashboardComponent = class DashboardComponent {
  constructor(router, dataService, configuration, storageConfiguration) {
    this.router = router;
    this.dataService = dataService;
    this.configuration = configuration;
    this.storageConfiguration = storageConfiguration;
    this.workshop = 0;
    this.documentsAnalyzed = 0;
    this.pendingAnalyzeDocuments = 0;
    this.reports = 0;
  }
  ngOnInit() {
    this.roleName = this.storageConfiguration.sessionGetItem(this.storageConfiguration.role);
    this.id = this.storageConfiguration.sessionGetItem(this.storageConfiguration.id);
    if (this.roleName == 'staff') {
      this.workshopPath = '?sortBy=createdDate&orderBy=desc&createdBy=' + this.id;
      this.questionarieNewPath = '?status=new&createdBy=' + this.id;
      this.questionarieStatusPath = '?status=analyzed&createdBy=' + this.id;
      this.questionarieDashboardSumPath = '/dashboard/sum?createdBy=' + this.id;
    } else {
      this.workshopPath = '?sortBy=createdDate&orderBy=desc';
      this.questionarieNewPath = '?status=new';
      this.questionarieStatusPath = '?status=analyzed';
      this.questionarieDashboardSumPath = '/dashboard/sum';
    }
    this.getDashboardDetails();
  }
  getDashboardDetails() {
    // Get Number of workshops
    this.dataService.getAll(this.configuration.workshop + this.workshopPath).subscribe(data => {
      this.workshop = data.totalRecords;
    });
    // Get Documents yet to be Analyzed
    this.dataService.getAll(this.configuration.questionaire + this.questionarieNewPath).subscribe(data => {
      this.pendingAnalyzeDocuments = data.totalRecords;
    });
    // Get Number of Documents Analyzed
    this.dataService.getAll(this.configuration.questionaire + this.questionarieStatusPath).subscribe(data => {
      this.documentsAnalyzed = data.totalRecords;
    });
    // Get Number of Reports
    this.dataService.getAll(this.configuration.questionaire + this.questionarieDashboardSumPath).subscribe(data => {
      if (data.data.length > 0) {
        this.reports = data.data[0].total_count;
      }
    });
  }
  redirectToWorkshop() {
    this.router.navigate(['/map/workshop']);
  }
  redirectToQuestionarie(status) {
    this.router.navigate(['/map/questionarie', {
      status: status
    }]);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration
  }, {
    type: src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_2__.StorageConfiguration
  }];
};
DashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  template: _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DashboardComponent);


/***/ }),

/***/ 71659:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 24789);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _dashboard_routing_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.routing.modules */ 44625);






let DashboardModule = class DashboardModule {};
DashboardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _dashboard_routing_modules__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutingModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule],
  declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent],
  providers: []
})], DashboardModule);


/***/ }),

/***/ 44625:
/*!**************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.routing.modules.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 24789);




const routes = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}];
let DashboardRoutingModule = class DashboardRoutingModule {};
DashboardRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], DashboardRoutingModule);


/***/ }),

/***/ 77705:
/*!*********************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dashboard_box {\n  background: #fff;\n  margin-bottom: 20px;\n}\n\n.dashboard_sec {\n  width: 80%;\n  margin: 0px auto;\n}\n\n.dashboard_box p {\n  font-weight: normal;\n  font-size: 18px;\n  color: #fff;\n  padding: 15px;\n}\n\n.dashboard_box .content_box {\n  padding: 0px 0px;\n  margin: 0px;\n  text-align: center;\n}\n\n.content_box img {\n  width: 100%;\n  padding: 15px;\n}\n\n.dashboard_box span {\n  font-size: 30px;\n  text-align: center;\n  padding: 20px 25px;\n  border-radius: 50%;\n  font-weight: 600;\n  position: relative;\n  top: 35%;\n}\n\n.color1 p {\n  background: #1a87a3;\n}\n\n.color2 p {\n  background: #555ca5;\n}\n\n.color3 p {\n  background: #e54c64;\n}\n\n.color4 p {\n  background: #455a64;\n}\n\n.color1 span {\n  background: rgba(115, 196, 209, 0.2);\n  color: #1a87a3;\n}\n\n.color2 span {\n  background: #f1f4fa;\n  color: #555ca5;\n}\n\n.color3 span {\n  background: rgba(236, 222, 255, 0.5);\n  color: #8b4be1;\n}\n\n.color4 span {\n  background: rgba(219, 79, 89, 0.2);\n  color: #e8505b;\n}\n\n@media (max-width: 1580px) {\n  .dashboard_box p {\n    font-size: 16px;\n  }\n  .dashboard_sec {\n    width: 90%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/pages/dashboard/dashboard.component.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,mBAAA;AACJ;;AACA;EACI,UAAA;EACA,gBAAA;AAEJ;;AAAA;EACI,mBAAA;EACA,eAAA;EACA,WAAA;EACA,aAAA;AAGJ;;AADA;EACI,gBAAA;EACA,WAAA;EACA,kBAAA;AAIJ;;AAFA;EACI,WAAA;EACA,aAAA;AAKJ;;AAHA;EACI,eAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,QAAA;AAMJ;;AAJA;EACI,mBAAA;AAOJ;;AALA;EACI,mBAAA;AAQJ;;AANA;EACI,mBAAA;AASJ;;AAPA;EACI,mBAAA;AAUJ;;AARA;EACI,oCAAA;EACA,cAAA;AAWJ;;AATA;EACI,mBAAA;EACA,cAAA;AAYJ;;AAVA;EACI,oCAAA;EACA,cAAA;AAaJ;;AAXA;EACI,kCAAA;EACA,cAAA;AAcJ;;AAZA;EACI;IACI,eAAA;EAeN;EAbE;IACI,UAAA;EAeN;AACF","sourcesContent":[".dashboard_box {\r\n    background: #fff;\r\n    margin-bottom: 20px;\r\n}\r\n.dashboard_sec {\r\n    width: 80%;\r\n    margin: 0px auto;\r\n}\r\n.dashboard_box p {\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n    color: #fff;\r\n    padding: 15px;\r\n}\r\n.dashboard_box .content_box {\r\n    padding: 0px 0px;\r\n    margin: 0px;\r\n    text-align: center;\r\n}\r\n.content_box img {\r\n    width: 100%;\r\n    padding: 15px;\r\n}\r\n.dashboard_box span {\r\n    font-size: 30px;\r\n    text-align: center;\r\n    padding: 20px 25px;\r\n    border-radius: 50%;\r\n    font-weight: 600;\r\n    position: relative;\r\n    top: 35%;\r\n}\r\n.color1 p {\r\n    background: #1a87a3;\r\n}\r\n.color2 p {\r\n    background: #555ca5;\r\n}\r\n.color3 p {\r\n    background: #e54c64;\r\n}\r\n.color4 p {\r\n    background: #455a64;\r\n}\r\n.color1 span {\r\n    background: rgba(115, 196, 209, 0.2);\r\n    color: #1a87a3;\r\n}\r\n.color2 span {\r\n    background: #f1f4fa;\r\n    color: #555ca5;\r\n}\r\n.color3 span {\r\n    background: rgba(236, 222, 255, 0.5);\r\n    color: #8b4be1;\r\n}\r\n.color4 span {\r\n    background: rgba(219, 79, 89, 0.2);\r\n    color: #e8505b;\r\n}\r\n@media (max-width: 1580px) {\r\n    .dashboard_box p {\r\n        font-size: 16px;\r\n    }\r\n    .dashboard_sec {\r\n        width: 90%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6277:
/*!*********************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"bg-layout\">\r\n    <div aria-label=\"breadcrumb\" style=\" width: 100%; background-size: cover;  padding-top: 10px;\">\r\n        <ol class=\"breadcrumb\" style=\"background: transparent; margin-left: 15px;\">\r\n            <li class=\"breadcrumb-item\" aria-current=\"page\"><a style=\"color: #a92a23; font-size: 16px;\">Dashboard</a>\r\n            </li>\r\n        </ol>\r\n    </div>\r\n    <div class=\"dashboard_sec\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-12\">\r\n                <div class=\"dashboard_box color1\" style=\"cursor: pointer;\" (click)=\"redirectToWorkshop()\">\r\n                    <p>Number of Workshops</p>\r\n                    <div class=\"content_box row\">\r\n                        <div class=\"col-md-8\"><img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/workshop.png\" alt=\"workshop\" /></div>\r\n                        <div class=\"col-md-4\"><span>{{workshop}}</span></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-12\">\r\n                <div class=\"dashboard_box color2\" style=\"cursor: pointer;\" (click)=\"redirectToQuestionarie('analyzed')\">\r\n                    <p>Number of Documents Analyzed</p>\r\n                    <div class=\"content_box row\">\r\n                        <div class=\"col-md-8\"><img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/analysed.png\" alt=\"analysed\" /></div>\r\n                        <div class=\"col-md-4\"><span>{{documentsAnalyzed}}</span></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-12\">\r\n                <div class=\"dashboard_box color3\" style=\"cursor: pointer;\" (click)=\"redirectToQuestionarie('new')\">\r\n                    <p>Number of Documents yet to be Analyzed</p>\r\n                    <div class=\"content_box row\">\r\n                        <div class=\"col-md-8\"><img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/analysed1.png\" alt=\"analysed1\" /></div>\r\n                        <div class=\"col-md-4\"><span>{{pendingAnalyzeDocuments}}</span></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-12\">\r\n                <div class=\"dashboard_box color4\" style=\"cursor: pointer;\" (click)=\"redirectToQuestionarie('analyzed')\">\r\n                    <p>Number of Reports</p>\r\n                    <div class=\"content_box row\">\r\n                        <div class=\"col-md-8\"><img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/reports.png\" alt=\"reports\" /></div>\r\n                        <div class=\"col-md-4\"><span>{{reports}}</span></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map