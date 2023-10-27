(self["webpackChunkmap_frontend"] = self["webpackChunkmap_frontend"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/auth/login/login.component */ 96361);
/* harmony import */ var _pages_auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/auth/forgot-password/forgot-password.component */ 93509);
/* harmony import */ var _pages_gropus_response_pdf_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/gropus/response-pdf.component */ 50722);
/* harmony import */ var _pages_notification_notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/notification/notification.component */ 47336);
/* harmony import */ var _pages_gropus_questions_pdf_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/gropus/questions-pdf.component */ 2248);
/* harmony import */ var _pages_gropus_respondant_pdf_respondant_pdf_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/gropus/respondant-pdf/respondant-pdf.component */ 52311);
/* harmony import */ var _pages_gropus_aggregate_pdf_aggregate_pdf_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/gropus/aggregate-pdf/aggregate-pdf.component */ 68656);










const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/login'
}, {
  path: 'login',
  component: _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'forgot-password',
  component: _pages_auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordComponent
}, {
  path: 'response-pdf',
  component: _pages_gropus_response_pdf_component__WEBPACK_IMPORTED_MODULE_2__.ResponsePdfComponent
}, {
  path: 'notification',
  component: _pages_notification_notification_component__WEBPACK_IMPORTED_MODULE_3__.NotificationComponent
}, {
  path: 'questions-pdf',
  component: _pages_gropus_questions_pdf_component__WEBPACK_IMPORTED_MODULE_4__.QuestionsPdfComponent
}, {
  path: 'respondant-pdf',
  component: _pages_gropus_respondant_pdf_respondant_pdf_component__WEBPACK_IMPORTED_MODULE_5__.RespondantPdfComponent
}, {
  path: 'aggregate-pdf',
  component: _pages_gropus_aggregate_pdf_aggregate_pdf_component__WEBPACK_IMPORTED_MODULE_6__.AggregatePdfComponent
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79595);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let AppComponent = class AppComponent {
  constructor(router) {
    this.router = router;
    this.title = 'referral';
  }
  ngOnInit() {
    console.log('WELCOME');
  }
  moveToDashboard() {
    console.log('Hi');
    this.router.navigate(['/client/dashboard']);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }];
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 5898:
/*!**************************************!*\
  !*** ./src/app/app.configuration.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Configuration": () => (/* binding */ Configuration)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 92340);



let Configuration = class Configuration {
  constructor() {
    this.ApiUrl = 'api/v1/';
    // Login Api URLs
    this.signup = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/auth/account-signup';
    this.account = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/account';
    this.user = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/user';
    this.workshop = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/workshop';
    this.participant = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/participant';
    this.questionaire = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/questionaire';
    this.category = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/category';
    this.synonyms = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/synonyms';
    this.signin = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/auth/signin';
    this.forgotPassword = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/auth/forgot';
    this.roles = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/user/get/roles';
    this.upload = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/file/upload';
    this.analyze = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pythonAPi + '/script/pdf/';
    this.variations = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.pythonAPi + '/script/variations/';
    this.survey = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/template';
    this.organisation = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/organization';
    this.group = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/group/';
    this.participe = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/participe';
    this.question = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/question';
    this.members = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + `/v1/member`;
    this.prompt = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/prompt';
    this.resultPDF = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/resultPdf';
    this.questionAnswer = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/questionAnswer';
    this.bulkUpdate = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/template/bulkUpdate';
    this.workShop = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/workshopnew';
    this.questionbulkUpdate = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/question';
    this.memberResponse = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/questionAnswer/member/';
    this.participantRes = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/questionAnswer/participe/';
    this.aggregate = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/questionAnswer/allParticipe';
    this.sendparticipe = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/notification/sendParticipe';
    this.resultMailSend = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/notification/send';
    this.worksgopEdit = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nodeApi + '/v1/workshopnew';
    // public prompt = environment.nodeApi + '/v1/prompt'
    // public organisation = environment.nodeApi + '/v1/organization'
  }
};

Configuration = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], Configuration);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/locales/en */ 49137);
/* harmony import */ var _pages_master_page_master_page_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/master-page/master-page.module */ 71598);
/* harmony import */ var _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/auth/auth.module */ 6621);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/http */ 83702);
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/confirm-dialog/confirm-dialog.component */ 22887);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var _pages_gropus_response_pdf_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/gropus/response-pdf.component */ 50722);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ 63806);
/* harmony import */ var _shared_profile_crop_profile_crop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/profile-crop/profile-crop.component */ 86004);
/* harmony import */ var _alyle_ui__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @alyle/ui */ 11862);
/* harmony import */ var _alyle_ui_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @alyle/ui/button */ 86488);
/* harmony import */ var _alyle_ui_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @alyle/ui/icon */ 93475);
/* harmony import */ var _alyle_ui_typography__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @alyle/ui/typography */ 72363);
/* harmony import */ var _alyle_ui_themes_minima__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @alyle/ui/themes/minima */ 79021);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-color-picker */ 83439);
/* harmony import */ var _shared_add_participation_add_participation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/add-participation/add-participation.component */ 43721);
/* harmony import */ var _shared_synonyms_add_synonyms_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/synonyms-add/synonyms-add.component */ 10907);
/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http.interceptor */ 79034);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-mask */ 7038);
/* harmony import */ var _shared_possible_variants_possible_variants_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/possible-variants/possible-variants.component */ 95610);
/* harmony import */ var _shared_custom_analyze_custom_analyze_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/custom-analyze/custom-analyze.component */ 83849);
/* harmony import */ var _alyle_ui_image_cropper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @alyle/ui/image-cropper */ 68549);
/* harmony import */ var _pages_notification_notification_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/notification/notification.component */ 47336);
/* harmony import */ var _pages_gropus_questions_pdf_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/gropus/questions-pdf.component */ 2248);
/* harmony import */ var _pages_gropus_respondant_pdf_respondant_pdf_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/gropus/respondant-pdf/respondant-pdf.component */ 52311);
/* harmony import */ var _pages_gropus_aggregate_pdf_aggregate_pdf_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/gropus/aggregate-pdf/aggregate-pdf.component */ 68656);

















// import { SignaturePadModule } from 'angular2-signaturepad';



// import { LyResizingCroppingImageModule } from '@alyle/ui/resizing-cropping-image';

















const maskConfig = {
  validation: false
};
// export const routes: Routes = [
//   // Define your routes here
// ];
(0,_angular_common__WEBPACK_IMPORTED_MODULE_18__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_19__["default"]);
let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmDialogComponent, _shared_synonyms_add_synonyms_add_component__WEBPACK_IMPORTED_MODULE_10__.SynonymsAddComponent, _shared_profile_crop_profile_crop_component__WEBPACK_IMPORTED_MODULE_7__.ProfileCropComponent, _shared_add_participation_add_participation_component__WEBPACK_IMPORTED_MODULE_9__.AddParticipationComponent, _shared_possible_variants_possible_variants_component__WEBPACK_IMPORTED_MODULE_12__.PossibleVariantsComponent, _shared_custom_analyze_custom_analyze_component__WEBPACK_IMPORTED_MODULE_13__.CustomAnalyzeComponent, _pages_gropus_response_pdf_component__WEBPACK_IMPORTED_MODULE_5__.ResponsePdfComponent, _pages_notification_notification_component__WEBPACK_IMPORTED_MODULE_14__.NotificationComponent, _pages_gropus_questions_pdf_component__WEBPACK_IMPORTED_MODULE_15__.QuestionsPdfComponent, _pages_gropus_respondant_pdf_respondant_pdf_component__WEBPACK_IMPORTED_MODULE_16__.RespondantPdfComponent, _pages_gropus_aggregate_pdf_aggregate_pdf_component__WEBPACK_IMPORTED_MODULE_17__.AggregatePdfComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _alyle_ui_image_cropper__WEBPACK_IMPORTED_MODULE_22__.LyImageCropperModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule, _pages_master_page_master_page_module__WEBPACK_IMPORTED_MODULE_2__.MasterPageModule, _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_3__.AuthModule, _angular_http__WEBPACK_IMPORTED_MODULE_27__.HttpModule,
  // SignaturePadModule,
  _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_29__.NgxSpinnerModule, _material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule, ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__.ColorPickerModule, _alyle_ui__WEBPACK_IMPORTED_MODULE_30__.LyThemeModule.setTheme('minima-light'),
  // LyResizingCroppingImageModule,
  _alyle_ui_button__WEBPACK_IMPORTED_MODULE_31__.LyButtonModule, _alyle_ui_icon__WEBPACK_IMPORTED_MODULE_32__.LyIconModule, _alyle_ui_typography__WEBPACK_IMPORTED_MODULE_33__.LyTypographyModule, ngx_mask__WEBPACK_IMPORTED_MODULE_34__.NgxMaskModule.forRoot(maskConfig)],
  exports: [ngx_spinner__WEBPACK_IMPORTED_MODULE_29__.NgxSpinnerModule],
  providers: [{
    provide: _alyle_ui__WEBPACK_IMPORTED_MODULE_30__.LY_THEME,
    useClass: _alyle_ui_themes_minima__WEBPACK_IMPORTED_MODULE_35__.MinimaLight,
    multi: true
  }, {
    provide: _alyle_ui__WEBPACK_IMPORTED_MODULE_30__.LY_THEME,
    useClass: _alyle_ui_themes_minima__WEBPACK_IMPORTED_MODULE_35__.MinimaDark,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HTTP_INTERCEPTORS,
    useClass: _http_interceptor__WEBPACK_IMPORTED_MODULE_11__.MyHttpInterceptor,
    multi: true
  }],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
})], AppModule);


/***/ }),

/***/ 79034:
/*!*************************************!*\
  !*** ./src/app/http.interceptor.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyHttpInterceptor": () => (/* binding */ MyHttpInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/storage-setting/storage-configuration */ 46352);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);






let MyHttpInterceptor = class MyHttpInterceptor {
  constructor(storageConfiguration, router) {
    this.storageConfiguration = storageConfiguration;
    this.router = router;
  }
  intercept(req, next) {
    let getToken = this.storageConfiguration.sessionGetItem(this.storageConfiguration.token);
    if (getToken) {
      const authReq = req.clone({
        headers: req.headers.set('x-access-token', 'Bearer ' + getToken)
      });
      req = authReq;
    }
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(event => this.handleResponse(req, event), error => this.handleError(req, error)));
  }
  handleResponse(req, event) {
    if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {}
  }
  handleError(req, event) {}
  static #_ = this.ctorParameters = () => [{
    type: _shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_0__.StorageConfiguration
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }];
};
MyHttpInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()], MyHttpInterceptor);


/***/ }),

/***/ 63806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ 66238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 49272);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 63186);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 25852);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 43177);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ 60338);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 71412);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 7644);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ 46287);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 29757);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ 29765);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ 22315);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/badge */ 48123);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-toastr */ 94817);


























// import { SignaturePadModule } from 'angular2-signaturepad';

let MaterialModule = class MaterialModule {};
MaterialModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  declarations: [],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridListModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDividerModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__.MatSlideToggleModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__.MatProgressBarModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOptionModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltipModule,
  // SignaturePadModule,
  ngx_toastr__WEBPACK_IMPORTED_MODULE_24__.ToastrModule.forRoot({
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    enableHtml: true
  })],
  exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridListModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDividerModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__.MatSlideToggleModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__.MatProgressBarModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOptionModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__.MatBadgeModule,
  // SignaturePadModule,
  ngx_toastr__WEBPACK_IMPORTED_MODULE_24__.ToastrModule],
  providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_24__.ToastrService]
})], MaterialModule);


/***/ }),

/***/ 6621:
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/login/login.component */ 96361);
/* harmony import */ var _auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/forgot-password/forgot-password.component */ 93509);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 29757);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 63806);






let AuthModule = class AuthModule {};
AuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule],
  declarations: [_auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordComponent],
  providers: []
})], AuthModule);


/***/ }),

/***/ 93509:
/*!*************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _forgot_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.component.html?ngResource */ 43273);
/* harmony import */ var _forgot_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.component.scss?ngResource */ 81816);
/* harmony import */ var _forgot_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forgot_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/storage-setting/storage-configuration */ 46352);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 94817);










let ForgotPasswordComponent = class ForgotPasswordComponent {
  constructor(router, form, toastr, storageConfiguration, dataService, configuration) {
    this.router = router;
    this.form = form;
    this.toastr = toastr;
    this.storageConfiguration = storageConfiguration;
    this.dataService = dataService;
    this.configuration = configuration;
    this.todayDate = new Date();
    this.forgetPasswordForm = this.form.group({
      email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
  }
  ngOnInit() {}
  submit() {
    if (this.forgetPasswordForm.valid) {
      let forgetPasswordForm = this.forgetPasswordForm.value;
      let forgotPasswordModel = {
        email: forgetPasswordForm.email
      };
      this.dataService.add(this.configuration.forgotPassword, forgotPasswordModel).subscribe(data => {
        if (data) {
          this.toastr.success('Password Reset Email Sent.');
          this.router.navigate(['/login']);
        } else {
          this.toastr.error('Verification Failed.');
        }
      }, err => {
        this.toastr.error('Email Id does not Exist.');
      });
    }
  }
  submitForm() {
    for (const i in this.forgetPasswordForm.controls) {
      this.forgetPasswordForm.controls[i].markAsDirty();
      this.forgetPasswordForm.controls[i].updateValueAndValidity();
    }
  }
  cancel() {
    this.router.navigate(['/login']);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService
  }, {
    type: src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_2__.StorageConfiguration
  }, {
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration
  }];
};
ForgotPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  template: _forgot_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forgot_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForgotPasswordComponent);


/***/ }),

/***/ 96361:
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 51951);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 89693);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/data-service */ 55122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/storage-setting/storage-configuration */ 46352);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 94817);










let LoginComponent = class LoginComponent {
  constructor(fb, router, storageConfiguration, dataService, configuration, toastr) {
    this.fb = fb;
    this.router = router;
    this.storageConfiguration = storageConfiguration;
    this.dataService = dataService;
    this.configuration = configuration;
    this.toastr = toastr;
    this.roleType = [{
      value: 'admin',
      viewValue: 'LOGIN'
    }];
    this.hide = true;
    this.todayDate = new Date();
    this.compareFn = (o1, o2) => o1 && o2 ? o1.value === o2.value : o1 === o2;
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    });
  }
  ngOnInit() {}
  login() {
    let loginForm = this.loginForm.value;
    let signInModal = {
      email: loginForm.email.toLowerCase(),
      password: loginForm.password
    };
    let password = signInModal.password;
    this.dataService.add(this.configuration.signin, signInModal).subscribe(data => {
      let userId = data.data.id;
      let roleData = data.data.role._id;
      let displayName = data.data.role.displayName;
      let name = data.data.role.name;
      let userName = data.data.userName;
      let isGlobalSynonymEdit = data.data.isGlobalSynonymEdit;
      this.storageConfiguration.sessionSetItem(this.storageConfiguration.token, data.data.token);
      this.storageConfiguration.sessionSetItem(this.storageConfiguration.isloggedIn, 'true');
      this.storageConfiguration.sessionSetItem(this.storageConfiguration.id, userId);
      this.storageConfiguration.sessionSetItem(this.storageConfiguration.roleData, roleData);
      this.storageConfiguration.sessionSetItem(this.storageConfiguration.displayName, displayName);
      this.storageConfiguration.sessionSetItem(this.storageConfiguration.name, name);
      this.storageConfiguration.sessionSetItem(this.storageConfiguration.email, loginForm.email);
      this.storageConfiguration.sessionSetItem(this.storageConfiguration.password, password);
      this.storageConfiguration.sessionSetItem(this.storageConfiguration.userName, userName);
      this.storageConfiguration.sessionSetItem(this.storageConfiguration.isGlobalSynonymEdit, isGlobalSynonymEdit);
      this.storageConfiguration.sessionSetItem(this.storageConfiguration.profileImg, data.data.profileImage);
      if (data) {
        if (data.isSuccess === true) {
          if (data.data.role.name === 'staff') {
            this.toastr.success('Log In Successfull.');
            this.router.navigate(['/map/category']);
            this.saveUserDetails(data);
          }
          if (data.data.role.name === 'super-admin') {
            this.toastr.success('Log In Successfull.');
            this.router.navigate(['/map/groups']);
            this.saveUserDetails(data);
          }
          if (data.data.role.name === 'admin') {
            this.toastr.success('Log In Successfull.');
            this.saveUserDetails(data);
            this.router.navigate(['/map/groups']);
          }
        }
      }
    }, err => {
      if (err.error.message === "User is Temporary InActive, Please contact Adminstrator!!") {
        this.toastr.error('User is Temporary InActive, Please contact Adminstrator!!');
      }
      if (err.error.message === "Can't Find the User!!") {
        this.toastr.error("Can't Find the User!!");
      }
      if (err.error.message === "Invalid Password") {
        this.toastr.error('Invalid Password');
      }
      if (err.error.message === "This user is not accessible for this account!!") {
        this.toastr.error("This user is not accessible for this account!!");
      }
      if (err.error.message === "Invalid Request") {
        this.toastr.error("Please check your entered details!!");
      }
      for (const i in this.loginForm.controls) {
        this.loginForm.controls[i].markAsDirty();
        this.loginForm.controls[i].updateValueAndValidity();
      }
    });
  }
  saveUserDetails(data) {
    this.storageConfiguration.sessionSetItem(this.storageConfiguration.role, data.data.role.name);
  }
  log(value) {}
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_3__.StorageConfiguration
  }, {
    type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService
  }];
};
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'login',
  template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LoginComponent);


/***/ }),

/***/ 55044:
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/service/auth-guard.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardService": () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 2023);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/storage-setting/storage-configuration */ 46352);






let AuthGuardService = class AuthGuardService {
  constructor(authService, router, toastr, storageConfiguration) {
    this.authService = authService;
    this.router = router;
    this.toastr = toastr;
    this.storageConfiguration = storageConfiguration;
  }
  canActivate(route, state) {
    let url = state.url;
    let isloggedIn = this.storageConfiguration.sessionGetItem(this.storageConfiguration.isloggedIn);
    let getToken = this.storageConfiguration.sessionGetItem(this.storageConfiguration.token);
    let deCodedToken = this.decodeToken(getToken);
    var displayDate = Math.floor(new Date().getTime() / 1000); //new Date().toUTCString();
    let tokenExptime = parseFloat(deCodedToken.exp);
    var d = new Date(0);
    let tokenExptimenew = new Date(d.setUTCSeconds(tokenExptime)).toUTCString();
    if (tokenExptime >= displayDate) {
      if (isloggedIn == 'true') {
        return true;
      }
      this.authService.setRedirectUrl(url);
      this.router.navigate([this.authService.getLoginUrl()]);
      return false;
    } else {
      this.router.navigate([this.authService.getLoginUrl()]);
    }
  }
  decodeToken(token) {
    if (token === null || token === '') {
      return {
        'upn': ''
      };
    }
    const parts = token.split('.');
    if (parts.length !== 3) {
      this.toastr.warning('JWT Token must have 3 parts');
      // throw new Error('JWT must have 3 parts');
    }

    const decoded = this.urlBase64Decode(parts[1]);
    if (!decoded) {
      this.toastr.warning('Can not decode the JWT Token');
      // throw new Error('Cannot decode the token');
    }

    return JSON.parse(decoded);
  }
  urlBase64Decode(str) {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += '==';
        break;
      case 3:
        output += '=';
        break;
      default:
        // tslint:disable-next-line:no-string-throw
        throw 'Illegal base64url string!';
    }
    return decodeURIComponent(window.escape(window.atob(output)));
  }
  static #_ = this.ctorParameters = () => [{
    type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService
  }, {
    type: src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_1__.StorageConfiguration
  }];
};
AuthGuardService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], AuthGuardService);


/***/ }),

/***/ 2023:
/*!****************************************************!*\
  !*** ./src/app/pages/auth/service/auth.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/storage-setting/storage-configuration */ 46352);




let AuthService = class AuthService {
  constructor(http, storageConfiguration) {
    this.http = http;
    this.storageConfiguration = storageConfiguration;
    this.redirectUrl = '/';
    this.loginUrl = '/login';
    this.isloggedIn = false;
  }
  isUserAuthenticated(apiUrl, itemName) {
    const toAdd = JSON.stringify(itemName);
    if (toAdd) {
      this.storageConfiguration.sessionSetItem(this.storageConfiguration.isloggedIn, 'true');
    } else {
      this.storageConfiguration.sessionSetItem(this.storageConfiguration.isloggedIn, 'false');
    }
    return this.http.post(apiUrl, toAdd);
  }
  getRedirectUrl() {
    return this.redirectUrl;
  }
  setRedirectUrl(url) {
    this.redirectUrl = url;
  }
  getLoginUrl() {
    return this.loginUrl;
  }
  logoutUser() {
    this.storageConfiguration.sessionSetItem(this.storageConfiguration.isloggedIn, 'false');
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }, {
    type: src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_0__.StorageConfiguration
  }];
};
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], AuthService);


/***/ }),

/***/ 47257:
/*!********************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _change_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.component.html?ngResource */ 63095);
/* harmony import */ var _change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.component.scss?ngResource */ 6988);
/* harmony import */ var _change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/storage-setting/storage-configuration */ 46352);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 94817);











let ChangePasswordComponent = class ChangePasswordComponent {
  constructor(fb, router, storageConfiguration, dataService, configuration, _location, toastr) {
    this.fb = fb;
    this.router = router;
    this.storageConfiguration = storageConfiguration;
    this.dataService = dataService;
    this.configuration = configuration;
    this._location = _location;
    this.toastr = toastr;
    this.hideOldPassword = true;
    this.hideNewPassword = true;
    this.hideConfirmPassword = true;
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      passwordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
  }
  ngOnInit() {}
  changePassword() {
    if (this.changePasswordForm.valid) {
      const password = this.storageConfiguration.sessionGetItem(this.storageConfiguration.password);
      this.localPassword = password;
      if (this.changePasswordForm.value.oldPassword === this.localPassword) {
        if (this.changePasswordForm.value.password === this.changePasswordForm.value.passwordConfirm) {
          const id = this.storageConfiguration.sessionGetItem(this.storageConfiguration.id);
          const password = this.storageConfiguration.sessionGetItem(this.storageConfiguration.password);
          let ChangePasswordModel = {
            id: id,
            oldPassword: password,
            newPassword: this.changePasswordForm.value.password
          };
          this.dataService.addPassword(this.configuration.user + '/changepassword', ChangePasswordModel).subscribe(data => {
            this.toastr.success('Passwords Changed Successfully');
            this.router.navigate(['/login']);
            localStorage.clear();
          }, err => {
            console.log('err', err);
          });
        } else {
          this.toastr.error('New Password and Confirm Password are not matched');
        }
      } else {
        this.toastr.error('Old password is wrong');
      }
    } else {
      for (const i in this.changePasswordForm.controls) {
        this.changePasswordForm.controls[i].markAsDirty();
        this.changePasswordForm.controls[i].updateValueAndValidity();
      }
      this.toastr.error('Please enter the required fields');
    }
  }
  backlocation() {
    this._location.back();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_2__.StorageConfiguration
  }, {
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService
  }];
};
ChangePasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  template: _change_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ChangePasswordComponent);


/***/ }),

/***/ 68292:
/*!*****************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordModule": () => (/* binding */ ChangePasswordModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _change_password_change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../change-password/change-password.routing.module */ 57849);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../change-password/change-password.component */ 47257);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 63806);






let ChangePasswordModule = class ChangePasswordModule {};
ChangePasswordModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _change_password_change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordRoutingModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule],
  declarations: [_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent],
  providers: []
})], ChangePasswordModule);


/***/ }),

/***/ 57849:
/*!*************************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordRoutingModule": () => (/* binding */ ChangePasswordRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _change_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.component */ 47257);




const routes = [{
  path: '',
  component: _change_password_component__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordComponent
}];
let ChangePasswordRoutingModule = class ChangePasswordRoutingModule {};
ChangePasswordRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ChangePasswordRoutingModule);


/***/ }),

/***/ 68656:
/*!***********************************************************************!*\
  !*** ./src/app/pages/gropus/aggregate-pdf/aggregate-pdf.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AggregatePdfComponent": () => (/* binding */ AggregatePdfComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _aggregate_pdf_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggregate-pdf.component.html?ngResource */ 5513);
/* harmony import */ var _aggregate_pdf_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aggregate-pdf.component.scss?ngResource */ 19161);
/* harmony import */ var _aggregate_pdf_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aggregate_pdf_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html2pdf.js */ 12507);
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ 66809);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_5__);









let AggregatePdfComponent = class AggregatePdfComponent {
  constructor(dataService, activeRouter, configuration) {
    this.dataService = dataService;
    this.activeRouter = activeRouter;
    this.configuration = configuration;
    this.participantId = [];
    this.aggregateParticpant = [];
    this.aggreagateMembers = [];
  }
  addLineBreak(event, i, j, k, l) {
    const elementId = k !== undefined && l !== undefined ? `editable-paragraph-member-${i}-${k}-${l}` : `editable-paragraph-self-${i}-${j}`;
    const paragraph = document.getElementById(elementId);
    if (paragraph) {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const br = document.createElement('br');
      range.insertNode(br);
      range.setStartAfter(br);
      range.setEndAfter(br);
      selection.removeAllRanges();
      selection.addRange(range);
      event.preventDefault();
    }
  }
  ngOnInit() {
    this.activeRouter.queryParams.subscribe(queryParams => {
      this.participantId = queryParams.partId;
      this.templateId = queryParams.temp;
    });
    this.getAggeregateData();
  }
  getAggeregateData() {
    this.dataService.getById(this.configuration.aggregate, this.participantId).subscribe(res => {
      this.aggregateName = res.name;
      this.aggregateParticpant = res.participant.data;
      this.aggreagateMembers = res.members;
      this.groupingData();
    });
  }
  groupingData() {
    this.aggregateReult = this.aggregateParticpant.map(participantItem => {
      const matchingMembers = this.aggreagateMembers.map(aggregateMember => aggregateMember.data).flat().filter(memberItem => memberItem.question_id._id === participantItem.question_id._id);
      const particpantAns = [participantItem.questionAnswer];
      const memberAns = matchingMembers.reduce((acc, memberItem) => {
        const category = memberItem.member_id.catogory;
        const answer = memberItem.questionAnswer;
        const existingCategory = acc.find(item => item.category === category);
        if (existingCategory) {
          existingCategory.answer.push(answer);
        } else {
          acc.push({
            category,
            answer: [answer]
          });
        }
        return acc;
      }, []);
      return {
        question_id: participantItem.question_id,
        particpantAns,
        memberAns
      };
    });
  }
  generatePDF() {
    const doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__();
    const content = this.el.nativeElement;
    const options = {
      margin: 20,
      filename: 'my-document.pdf',
      image: {
        type: 'jpeg',
        quality: 0.98
      },
      html2canvas: {
        scale: 2
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      }
    };
    const data = html2pdf_js__WEBPACK_IMPORTED_MODULE_4__().set({
      pagebreak: {
        mode: 'avoid-all'
      }
    }).from(content).set(options).outputPdf().save();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration
  }];
  static #_2 = this.propDecorators = {
    el: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: ['content', {
        static: false
      }]
    }]
  };
};
AggregatePdfComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-aggregate-pdf',
  template: _aggregate_pdf_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_aggregate_pdf_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AggregatePdfComponent);


/***/ }),

/***/ 2248:
/*!*********************************************************!*\
  !*** ./src/app/pages/gropus/questions-pdf.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsPdfComponent": () => (/* binding */ QuestionsPdfComponent)
/* harmony export */ });
/* harmony import */ var D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _questions_pdf_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions-pdf.component.html?ngResource */ 99554);
/* harmony import */ var _questions_pdf_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions-pdf.component.scss?ngResource */ 50587);
/* harmony import */ var _questions_pdf_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_questions_pdf_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/excel-service */ 69885);
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html2pdf.js */ 12507);
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_6__);













let QuestionsPdfComponent = class QuestionsPdfComponent {
  constructor(dataService, fb, route, excel, toastr, dialog, activeRouter, configuration) {
    this.dataService = dataService;
    this.fb = fb;
    this.route = route;
    this.excel = excel;
    this.toastr = toastr;
    this.dialog = dialog;
    this.activeRouter = activeRouter;
    this.configuration = configuration;
    this.user = ' ff';
    this.participantId = [];
    this.quesName = [];
    this.quesAnswerName = [];
    this.qArray = [];
    this.questionById = [];
  }
  ngOnInit() {
    var _this = this;
    return (0,D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.activeRouter.queryParams.subscribe(queryParams => {
        _this.templateId = queryParams.temp;
        _this.participantId = queryParams.partId;
      });
      yield _this.dataService.getParticipantResponse(_this.configuration.participantRes, _this.participantId).subscribe(res => {
        _this.participantName = res.Name;
        _this.qArray = res.data;
      });
    })();
  }
  addLineBreak(event) {
    if (event.key === 'Enter') {
      const paragraph = document.getElementById('editable-paragraph');
      if (paragraph) {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const br = document.createElement('br');
        range.insertNode(br);
        range.setStartAfter(br);
        range.setEndAfter(br);
        selection.removeAllRanges();
        selection.addRange(range);
        event.preventDefault();
      }
    }
  }
  generatePDF() {
    const content = this.el.nativeElement;
    const options = {
      margin: 10,
      filename: 'my-document.pdf',
      image: {
        type: 'jpeg',
        quality: 0.98
      },
      html2canvas: {
        scale: 2
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      }
    };
    const data = html2pdf_js__WEBPACK_IMPORTED_MODULE_6__().set({
      pagebreak: {
        mode: 'avoid-all'
      }
    }).from(content).set(options).outputPdf().save();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_5__.ExcelService
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration
  }];
  static #_2 = this.propDecorators = {
    el: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
      args: ['content', {
        static: false
      }]
    }]
  };
};
QuestionsPdfComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: "app-questions-pdf",
  template: _questions_pdf_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_questions_pdf_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], QuestionsPdfComponent);


/***/ }),

/***/ 52311:
/*!*************************************************************************!*\
  !*** ./src/app/pages/gropus/respondant-pdf/respondant-pdf.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RespondantPdfComponent": () => (/* binding */ RespondantPdfComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _respondant_pdf_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./respondant-pdf.component.html?ngResource */ 14203);
/* harmony import */ var _respondant_pdf_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./respondant-pdf.component.scss?ngResource */ 54983);
/* harmony import */ var _respondant_pdf_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_respondant_pdf_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html2pdf.js */ 12507);
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_4__);








let RespondantPdfComponent = class RespondantPdfComponent {
  constructor(dataService, configuration, activateRouter) {
    this.dataService = dataService;
    this.configuration = configuration;
    this.activateRouter = activateRouter;
    this.memberQuestionsArr = [];
  }
  addLineBreak(event) {
    if (event.key === 'Enter') {
      const paragraph = document.getElementById('editable-paragraph');
      if (paragraph) {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const br = document.createElement('br');
        range.insertNode(br);
        range.setStartAfter(br);
        range.setEndAfter(br);
        selection.removeAllRanges();
        selection.addRange(range);
        event.preventDefault();
      }
    }
  }
  ngOnInit() {
    this.activateRouter.queryParams.subscribe(queryParams => {
      this.templateId = queryParams.temp;
      this.participantId = queryParams.partId;
      this.memberId = queryParams.ID;
    });
    this.dataService.getMemberResponse(this.configuration.memberResponse, this.memberId).subscribe(res => {
      this.memberName = res.Name;
      this.memberQuestionsArr = res.data;
    });
  }
  generatePDF() {
    const content = this.el.nativeElement;
    const options = {
      margin: 10,
      filename: 'my-document.pdf',
      image: {
        type: 'jpeg',
        quality: 0.98
      },
      html2canvas: {
        scale: 2
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      }
    };
    const data = html2pdf_js__WEBPACK_IMPORTED_MODULE_4__().set({
      pagebreak: {
        mode: 'avoid-all'
      }
    }).from(content).set(options).outputPdf().save();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }];
  static #_2 = this.propDecorators = {
    el: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['content', {
        static: false
      }]
    }]
  };
};
RespondantPdfComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: "app-respondant-pdf",
  template: _respondant_pdf_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_respondant_pdf_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RespondantPdfComponent);


/***/ }),

/***/ 50722:
/*!********************************************************!*\
  !*** ./src/app/pages/gropus/response-pdf.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResponsePdfComponent": () => (/* binding */ ResponsePdfComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _response_pdf_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./response-pdf.component.html?ngResource */ 89859);
/* harmony import */ var _response_pdf_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response-pdf.component.scss?ngResource */ 68204);
/* harmony import */ var _response_pdf_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_response_pdf_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2pdf.js */ 12507);
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/excel-service */ 69885);









let ResponsePdfComponent = class ResponsePdfComponent {
  constructor(excel, activeRouter, router, dataService, configuration) {
    this.excel = excel;
    this.activeRouter = activeRouter;
    this.router = router;
    this.dataService = dataService;
    this.configuration = configuration;
    this.user = ' ';
    this.isEdit = false;
    // this.feedbackContent = this.excel.getString()
  }

  ngOnInit() {
    this.activeRouter.queryParams.subscribe(queryParams => {
      this.isEdit = queryParams.isEdit === 'true';
      this.id = queryParams.ID; // Parse as an integer
      this.orgName = queryParams.OrgName;
      this.groupID = queryParams.groupId;
      this.tempID = queryParams.temp;
    });
    this.getParticipe();
  }
  getParticipe() {
    const apiUrl = this.configuration.participe;
    this.dataService.getById(apiUrl, this.id).subscribe(data => {
      let membersData = data?.data[0];
      if (membersData?.Result_pdf) {
        this.feedbackContent = membersData?.Result_pdf[0]?.text;
      }
      this.user = membersData?.participantFirstName + " " + membersData?.participantLastName;
    });
  }
  isHeader(line) {
    const headerKeywords = ["Strengths", "Weaknesses"];
    if (line.trim().endsWith(":")) {
      return true;
    }
    for (const keyword of headerKeywords) {
      if (line.includes(keyword)) {
        return true;
      }
    }
    return false;
  }
  back() {
    this.router.navigate(['/map/groups/howard-members'], {
      queryParams: {
        isEdit: this.isEdit,
        ID: this.id,
        groupId: this.groupID,
        OrgName: this.orgName,
        temp: this.tempID
      }
    });
  }
  generatePDF() {
    const content = this.el.nativeElement;
    const options = {
      margin: 10,
      filename: 'my-document.pdf',
      image: {
        type: 'jpeg',
        quality: 0.98
      },
      html2canvas: {
        scale: 2
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      }
    };
    const data = html2pdf_js__WEBPACK_IMPORTED_MODULE_2__().set({
      pagebreak: {
        mode: 'avoid-all'
      }
    }).from(content).set(options).outputPdf().save();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_5__.ExcelService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration
  }];
  static #_2 = this.propDecorators = {
    el: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: ['content', {
        static: false
      }]
    }]
  };
};
ResponsePdfComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-response-pdf',
  template: _response_pdf_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_response_pdf_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ResponsePdfComponent);


/***/ }),

/***/ 99255:
/*!************************************************************!*\
  !*** ./src/app/pages/master-page/master-page.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterPageComponent": () => (/* binding */ MasterPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _master_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./master-page.component.html?ngResource */ 57921);
/* harmony import */ var _master_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master-page.component.scss?ngResource */ 50073);
/* harmony import */ var _master_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_master_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/storage-setting/storage-configuration */ 46352);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ 43717);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var src_app_shared_helper_get_profile_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helper/get-profile-image */ 73034);










let MasterPageComponent = class MasterPageComponent {
  constructor(router, storageConfiguration, toastr, changeDetectorRef, media, dialog, getProfileImageService) {
    this.router = router;
    this.storageConfiguration = storageConfiguration;
    this.toastr = toastr;
    this.dialog = dialog;
    this.getProfileImageService = getProfileImageService;
    this.searchText = '';
    this.isCollapsed = false;
    this.todayDate = new Date();
    this.toggleOpen = true;
    this.toggleSidebar = true;
    this.imageURL = 'assets/images/profile.jpg';
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
    this.userName = this.storageConfiguration.sessionGetItem(this.storageConfiguration.userName);
    this.role = this.storageConfiguration.sessionGetItem(this.storageConfiguration.role);
    this.email = this.storageConfiguration.sessionGetItem(this.storageConfiguration.email);
    this.proImage = this.storageConfiguration.sessionGetItem(this.storageConfiguration.profileImg);
    this.proImage = this.proImage == 'undefined' ? null : this.proImage;
    let url = this.router.url.split('/');
    this.currentHeaderName = url[2];
    this.getProfile();
  }
  getProfile() {
    this.getProfileImageService.getProfileImage().subscribe(data => {
      this.proImage = this.storageConfiguration.sessionGetItem(this.storageConfiguration.profileImg);
      this.proImage = this.proImage == 'undefined' ? null : this.proImage;
    });
  }
  onSearch() {}
  toggleClick() {
    //   this.toggleOpen = !this.toggleOpen;
    this.toggleSidebar = !this.toggleSidebar;
  }
  updateProfile() {
    let id = this.storageConfiguration.sessionGetItem(this.storageConfiguration.id);
    if (this.role === 'super-admin') {
      this.router.navigate(['/map/update-profile'], {
        queryParams: {
          userId: id,
          isEdit: true,
          isSuperAdmin: true
        }
      });
    } else {
      this.router.navigate(['/map/update-profile'], {
        queryParams: {
          userId: id,
          isEdit: true,
          isSuperAdmin: false
        }
      });
    }
  }
  changePassword() {
    if (this.role === 'Admin' || this.role === 'super-admin') {
      this.router.navigate(['/map/change-password']);
    } else {
      this.router.navigate(['/map/change-password']);
    }
  }
  signoutpopup() {
    this.Addpopup = this.dialog.open(this.logoutpopup, {
      width: '350px',
      height: '175px'
    });
  }
  signOut() {
    this.router.navigate(['/login']);
    this.Addpopup.close();
    this.toastr.success('Logout Successfully');
    localStorage.clear();
  }
  closeDialog() {
    this.Addpopup.close();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_2__.StorageConfiguration
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
  }, {
    type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.MediaMatcher
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog
  }, {
    type: src_app_shared_helper_get_profile_image__WEBPACK_IMPORTED_MODULE_3__.GetProfileImageService
  }];
  static #_2 = this.propDecorators = {
    logoutpopup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ["logoutpopup", {
        static: false
      }]
    }]
  };
};
MasterPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  template: _master_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_master_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], MasterPageComponent);


/***/ }),

/***/ 71598:
/*!*********************************************************!*\
  !*** ./src/app/pages/master-page/master-page.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterPageModule": () => (/* binding */ MasterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _master_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./master-page.component */ 99255);
/* harmony import */ var _master_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master-page.routing.module */ 956);
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.module */ 99321);
/* harmony import */ var _update_profile_update_profile_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../update-profile/update-profile.module */ 89908);
/* harmony import */ var _change_password_change_password_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../change-password/change-password.module */ 68292);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 60338);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ 15754);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 33351);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ 35812);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 59421);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material.module */ 63806);
















let MasterPageModule = class MasterPageModule {};
MasterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _master_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.MasterPageRoutingModule, _user_user_module__WEBPACK_IMPORTED_MODULE_2__.UserModule, _update_profile_update_profile_module__WEBPACK_IMPORTED_MODULE_3__.UpdateProfileModule, _change_password_change_password_module__WEBPACK_IMPORTED_MODULE_4__.ChangePasswordModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDividerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatListModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrModule.forRoot({
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    enableHtml: true
  })],
  exports: [],
  declarations: [_master_page_component__WEBPACK_IMPORTED_MODULE_0__.MasterPageComponent],
  providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService]
})], MasterPageModule);


/***/ }),

/***/ 956:
/*!*****************************************************************!*\
  !*** ./src/app/pages/master-page/master-page.routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterPageRoutingModule": () => (/* binding */ MasterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _master_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./master-page.component */ 99255);
/* harmony import */ var _auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/service/auth-guard.service */ 55044);





const routes = [{
  path: 'map',
  component: _master_page_component__WEBPACK_IMPORTED_MODULE_0__.MasterPageComponent,
  children: [{
    path: 'users',
    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../user/user.module */ 99321)).then(m => m.UserModule)
    // canActivate: [AuthGuardService],
  }, {
    path: 'update-profile',
    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../update-profile/update-profile.module */ 89908)).then(m => m.UpdateProfileModule),
    canActivate: [_auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
  }, {
    path: 'change-password',
    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../change-password/change-password.module */ 68292)).then(m => m.ChangePasswordModule),
    canActivate: [_auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
  }, {
    path: 'dashboard',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../dashboard/dashboard.module */ 71659)).then(m => m.DashboardModule),
    canActivate: [_auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
  }, {
    path: 'workshop',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("src_app_pages_workshop_workshop_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../workshop/workshop.module */ 2815)).then(m => m.WorkshopModule),
    canActivate: [_auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
  }, {
    path: 'category',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("src_app_pages_category_category_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../category/category.module */ 38712)).then(m => m.CategoryModule),
    canActivate: [_auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
  }, {
    path: 'questionarie',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_questionarie-pdf_questionarie_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../questionarie-pdf/questionarie.module */ 25974)).then(m => m.QuestionarieModule),
    canActivate: [_auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
  }, {
    path: 'organization',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_organization_organization_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../organization/organization.module */ 24426)).then(m => m.OrganizationModule),
    canActivate: [_auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
  }, {
    path: 'survey',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_survey_survey_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../survey/survey.module */ 36013)).then(m => m.SurveyModule),
    canActivate: [_auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
  }, {
    path: 'groups',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_autocomplete_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_gropus_gropus_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../gropus/gropus.module */ 86981)).then(m => m.GropusModule),
    canActivate: [_auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
  }]
}];
let MasterPageRoutingModule = class MasterPageRoutingModule {};
MasterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], MasterPageRoutingModule);


/***/ }),

/***/ 47336:
/*!**************************************************************!*\
  !*** ./src/app/pages/notification/notification.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _notification_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.component.html?ngResource */ 15046);
/* harmony import */ var _notification_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component.scss?ngResource */ 50648);
/* harmony import */ var _notification_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_notification_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);











let NotificationComponent = class NotificationComponent {
  constructor(dataService, activeRouter, configuration, fb, dialog, toastr, spinner, route) {
    this.dataService = dataService;
    this.activeRouter = activeRouter;
    this.configuration = configuration;
    this.fb = fb;
    this.dialog = dialog;
    this.toastr = toastr;
    this.spinner = spinner;
    this.route = route;
    this.quesArray = [];
    this.pushPayload = [];
    this.allQuestions = [];
    this.q_id = [];
    this.disabled = false;
    this.isRespond = false;
    this.notificationForm = this.fb.group({
      question_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  ngOnInit() {
    this.activeRouter.queryParams.subscribe(queryParams => {
      this.templateId = queryParams.template;
      this.participantId = queryParams.participantId;
      this.groupId = queryParams.groupId;
      this.isAnswer = queryParams.isAnswer;
      this.memberId = queryParams.memberId;
      this.isEdit = queryParams.isEdit === "true";
      this.id = queryParams.ID; // Parse as an integer
      this.orgName = queryParams.OrgName;
      this.getPartcipeMembers();
      this.getParticipant();
    });
  }
  getParticipant() {
    const apiUrl = this.configuration.participe;
    const tempUrl = this.configuration.survey;
    this.dataService.getById(apiUrl, this.id).subscribe(res => {
      this.isRespond = res.data[0].responsed;
      if (this.isRespond) {
        this.notificationForm.controls['question_name'].disable();
      }
    });
  }
  getPartcipeMembers() {
    this.dataService.getById(this.configuration.survey, this.templateId).subscribe(res => {
      this.quesArray = res?.data?.question;
      this.quesArray.forEach((e, i) => {
        this.questionId = e._id;
        this.q_id.push(e._id);
      });
      this.createForm();
    });
    this.dataService.getAll(this.configuration.participe).subscribe(data => {
      let membersData = data?.data;
      this.filteredMembers = membersData.filter(item => item.group_id === this.groupId);
    });
  }
  createForm() {
    this.notificationForm = this.fb.group({
      questions: this.fb.array([])
    });
    const questionsFormArray = this.notificationForm.get('questions');
    this.quesArray.forEach(question => {
      questionsFormArray.push(this.createQuestionFormGroup(''));
    });
  }
  createQuestionFormGroup(questionName) {
    return this.fb.group({
      question_name: questionName
    });
  }
  submit(popup) {
    this.notificationForm.value.questions.forEach(res => {
      this.allQuestions.push(res.question_name);
      this.dialog.open(popup, {
        width: '25%'
      });
    });
  }
  addAnswer() {
    const result = this.q_id.map((val, index) => ({
      questionId: val,
      answer: this.allQuestions[index]
    }));
    const payload = [];
    result.forEach(element => {
      const payloadItem = {
        question_id: element.questionId,
        questionAnswer: element.answer
      };
      if (this.participantId) {
        payloadItem.participant_id = this.participantId;
      }
      if (this.memberId) {
        payloadItem.member_id = this.memberId;
      }
      payload.push(payloadItem);
    });
    this.dataService.addAnswer(this.configuration.questionAnswer, payload).subscribe(res => {
      this.successToaster = res;
      if (res?.isSuccess == true) {
        this.toastr.success('Question Answer Created Successfully!!');
      }
    }, error => {
      this.error = error;
      this.toastr.error('Please fill the required fields!!');
    });
    this.notificationForm.reset();
    this.disabled = true;
    this.getPartcipeMembers();
  }
  okayClose() {
    this.addAnswer();
    this.dialog.closeAll();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }];
};
NotificationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-notification',
  template: _notification_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_notification_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NotificationComponent);


/***/ }),

/***/ 86692:
/*!******************************************************************!*\
  !*** ./src/app/pages/update-profile/update-profile.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProfileComponent": () => (/* binding */ UpdateProfileComponent)
/* harmony export */ });
/* harmony import */ var D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _update_profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-profile.component.html?ngResource */ 25348);
/* harmony import */ var _update_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-profile.component.scss?ngResource */ 63735);
/* harmony import */ var _update_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_update_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/storage-setting/storage-configuration */ 46352);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 94817);












let UpdateProfileComponent = class UpdateProfileComponent {
  constructor(fb, toastr, storageConfiguration, dataService, configuration, router, _location) {
    this.fb = fb;
    this.toastr = toastr;
    this.storageConfiguration = storageConfiguration;
    this.dataService = dataService;
    this.configuration = configuration;
    this.router = router;
    this._location = _location;
    this.selectedRole = 'admin';
    this.roles = [];
    this.userForm = this.fb.group({
      emailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  ngOnInit() {
    this.userName = this.storageConfiguration.sessionGetItem(this.storageConfiguration.userName);
    this.roleName = this.storageConfiguration.sessionGetItem(this.storageConfiguration.name);
    this.getRoles();
    this.id = this.storageConfiguration.sessionGetItem(this.storageConfiguration.id);
    this.editUser();
  }
  editUser() {
    this.dataService.getSingleUser(this.id, this.configuration.user + '/').subscribe(data => {
      let personalInfo = data.data;
      let addressInfo = personalInfo.address;
      this.userForm.patchValue({
        emailId: personalInfo.email,
        password: personalInfo.password,
        role: personalInfo.role._id,
        firstName: personalInfo.firstName,
        lastName: personalInfo.lastName,
        mobile: addressInfo.mobile,
        address: addressInfo.addressLine,
        city: addressInfo.city,
        state: addressInfo.state,
        zipCode: addressInfo.zipcode,
        country: addressInfo.country
      });
    }, err => {});
  }
  updateProfile() {
    if (this.userForm.valid) {
      let userForm = this.userForm.value;
      this.addressInfo = {
        addressLine: userForm.address,
        mobile: userForm.mobile,
        city: userForm.city,
        state: userForm.state,
        zipcode: userForm.zipCode,
        country: userForm.country
      };
      let userModel = {
        firstName: userForm.firstName,
        lastName: userForm.lastName,
        fullName: userForm.firstName + ' ' + userForm.lastName,
        email: userForm.emailId,
        addressInfo: this.addressInfo,
        role: userForm.role
      };
      this.dataService.updateUser(this.id, this.configuration.user + '/', userModel).subscribe(data => {
        this.toastr.success('Profile updated successfully.');
      }, err => {});
    } else {
      for (const i in this.userForm.controls) {
        this.userForm.controls[i].markAsDirty();
        this.userForm.controls[i].updateValueAndValidity();
      }
      this.toastr.error('Please fill all required fields');
    }
  }
  getRoles() {
    var _this = this;
    return (0,D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.roles = [];
      yield _this.dataService.getAll(_this.configuration.roles).subscribe(data => {
        _this.roles = data.data.data;
      });
    })();
  }
  backlocation() {
    this._location.back();
  }
  keyPress(event) {
    const pattern = /[0-9\+\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService
  }, {
    type: src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_3__.StorageConfiguration
  }, {
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_5__.Configuration
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location
  }];
};
UpdateProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  template: _update_profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_update_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], UpdateProfileComponent);


/***/ }),

/***/ 89908:
/*!***************************************************************!*\
  !*** ./src/app/pages/update-profile/update-profile.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProfileModule": () => (/* binding */ UpdateProfileModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _update_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-profile.routing.module */ 78743);
/* harmony import */ var _update_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-profile.component */ 86692);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.module */ 99321);







let UpdateProfileModule = class UpdateProfileModule {};
UpdateProfileModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _update_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateProfileRoutingModule, _user_user_module__WEBPACK_IMPORTED_MODULE_3__.UserModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule],
  declarations: [_update_profile_component__WEBPACK_IMPORTED_MODULE_1__.UpdateProfileComponent],
  providers: []
})], UpdateProfileModule);


/***/ }),

/***/ 78743:
/*!***********************************************************************!*\
  !*** ./src/app/pages/update-profile/update-profile.routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProfileRoutingModule": () => (/* binding */ UpdateProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _update_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-profile.component */ 86692);




const routes = [{
  path: '',
  component: _update_profile_component__WEBPACK_IMPORTED_MODULE_0__.UpdateProfileComponent
}];
let UpdateProfileRoutingModule = class UpdateProfileRoutingModule {};
UpdateProfileRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], UpdateProfileRoutingModule);


/***/ }),

/***/ 69612:
/*!******************************************************!*\
  !*** ./src/app/pages/user/user-details.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsComponent": () => (/* binding */ UserDetailsComponent)
/* harmony export */ });
/* harmony import */ var D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _user_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-details.component.html?ngResource */ 71337);
/* harmony import */ var _user_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-details.component.scss?ngResource */ 38480);
/* harmony import */ var _user_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_user_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/storage-setting/storage-configuration */ 46352);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var src_app_shared_profile_crop_profile_crop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/profile-crop/profile-crop.component */ 86004);
/* harmony import */ var src_app_shared_helper_get_profile_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/helper/get-profile-image */ 73034);
/* harmony import */ var src_app_shared_helper_common_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/helper/common-validation */ 4361);
/* harmony import */ var src_app_shared_services_mobile_number_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/mobile-number-service */ 93426);


















let UserDetailsComponent = class UserDetailsComponent {
  constructor(fb, storageConfiguration, configuration, dataService, http, router, route, toastr, dialog, spinner, getProfileImageService, commonValidation, mobileService) {
    this.fb = fb;
    this.storageConfiguration = storageConfiguration;
    this.configuration = configuration;
    this.dataService = dataService;
    this.http = http;
    this.router = router;
    this.route = route;
    this.toastr = toastr;
    this.dialog = dialog;
    this.spinner = spinner;
    this.getProfileImageService = getProfileImageService;
    this.commonValidation = commonValidation;
    this.mobileService = mobileService;
    this.isAdmin = false;
    this.roles = [];
    this.isEdit = false;
    this.isSuperAdmin = false;
    this.imageUrl = 'assets/images/profileup.jpg';
    this.fileToUpload = null;
    this.createdDate = '';
    this.isProfileImageUpload = false;
    //this.statesListForSelect = StatesWithAbbreviation.statesList;
    this.userForm = this.fb.group({
      emailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      roleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      isActive: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      isGlobalSynonymEdit: ['']
    });
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.isEdit = JSON.parse(params.isEdit) == true ? true : false;
      this.userId = params.userId;
      this.isSuperAdmin = JSON.parse(params.isSuperAdmin) == true ? true : false;
    });
    this.roleName = this.storageConfiguration.sessionGetItem(this.storageConfiguration.name);
    this.getRoles();
    if (this.userId != '' && this.userId != undefined) {
      if (this.isEdit) {
        this.isEdit = true;
        this.editUser();
      }
    }
    if (this.isEdit == false) {
      this.userForm.controls['isActive'].setValue(true);
    }
  }
  createUser() {
    // debugger;
    if (this.userForm.valid) {
      let userForm = this.userForm.value;
      this.addressInfo = {
        mobile: this.mobileService.mobileFormat(userForm.mobile),
        addressLine: userForm.address,
        city: userForm.city,
        state: userForm.state,
        zipcode: userForm.zipCode,
        country: userForm.country
      };
      let userModel = {
        firstName: userForm.firstName,
        lastName: userForm.lastName,
        email: userForm.emailId,
        userType: this.selectedRoleName,
        address: this.addressInfo,
        role: this.selectedRoleId,
        profileImageURL: this.proImage,
        isActive: userForm.isActive,
        isGlobalSynonymEdit: userForm.isGlobalSynonymEdit
      };
      this.spinner.show();
      this.dataService.addUser(this.configuration.user, userModel).subscribe(data => {
        if (data.message == 'User Created Successfully!!') {
          this.toastr.success('User created Successfully.');
          this.router.navigate(['/map/users']);
        }
      }, err => {
        this.spinner.hide();
        if (err.error.data.errmsg == 'Email Already Exists') {
          this.toastr.error('Email Already Exists.');
        }
      });
      this.spinner.hide();
    } else {
      const errorArray = [];
      for (const i in this.userForm.controls) {
        this.userForm.controls[i].markAsDirty();
        this.userForm.controls[i].updateValueAndValidity();
        if (this.userForm.controls[i].invalid) {
          errorArray.push(i);
        }
      }
      const validationArray = this.commonValidation.getValidation(errorArray);
      let toastvalue = '<h5>Please Enter the Required fields </h5> <ul>';
      validationArray.forEach(element => {
        toastvalue += '<li>' + element + ' </li>';
      });
      toastvalue += '</ul>';
      this.toastr.warning(toastvalue);
    }
  }
  editUser() {
    this.spinner.show();
    this.createdDate = '';
    this.dataService.getSingleUser(this.userId, this.configuration.user + '/').subscribe(data => {
      let personalInfo = data.data;
      this.createdDate = personalInfo.createdDate;
      let addressInfo = personalInfo.address;
      this.userForm.patchValue({
        emailId: personalInfo.email,
        roleName: personalInfo.role.name,
        firstName: personalInfo.firstName,
        lastName: personalInfo.lastName,
        mobile: addressInfo.mobile,
        address: addressInfo.addressLine,
        city: addressInfo.city,
        state: addressInfo.state,
        zipCode: addressInfo.zipcode,
        country: addressInfo.country,
        isActive: personalInfo.isActive,
        isGlobalSynonymEdit: personalInfo.isGlobalSynonymEdit
      });
      this.proImage = personalInfo.profileImageURL;
      this.userRoleName = personalInfo.role.name;
      this.selectedRole(personalInfo.role.name, 'editFetch');
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
  }
  updateUser() {
    if (this.userForm.valid) {
      let userForm = this.userForm.value;
      this.addressInfo = {
        addressLine: userForm.address,
        mobile: this.mobileService.mobileFormat(userForm.mobile),
        city: userForm.city,
        state: userForm.state,
        zipcode: userForm.zipCode,
        country: userForm.country
      };
      let userModel = {
        firstName: userForm.firstName,
        lastName: userForm.lastName,
        fullName: userForm.firstName.charAt(0).toUpperCase() + userForm.firstName.slice(1) + ' ' + userForm.lastName.charAt(0).toUpperCase() + userForm.lastName.slice(1),
        email: userForm.emailId,
        userType: this.selectedRoleName,
        address: this.addressInfo,
        role: this.selectedRoleId,
        profileImageURL: this.proImage,
        isActive: userForm.isActive,
        createdDate: this.createdDate,
        isGlobalSynonymEdit: userForm.isGlobalSynonymEdit
      };
      this.dataService.updateUser(this.userId, this.configuration.user + '/', userModel).subscribe(data => {
        this.createdDate = '';
        if (this.isProfileImageUpload == false) {
          this.toastr.success('User Updated Successfully.');
        } else {
          this.isProfileImageUpload = false;
        }
      }, err => {
        this.toastr.error(err.error.message);
      });
    } else {
      for (const i in this.userForm.controls) {
        this.userForm.controls[i].markAsDirty();
        this.userForm.controls[i].updateValueAndValidity();
      }
      this.toastr.error('Please enter the required fields.');
    }
  }
  getRoles() {
    var _this = this;
    return (0,D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.dataService.getAll(_this.configuration.roles).subscribe(data => {
        _this.roles = data.data.data;
      });
    })();
  }
  selectedRole(role, type) {
    if (type == 'change') {
      let currentUser = this.storageConfiguration.sessionGetItem(this.storageConfiguration.id);
      if (this.roleName == 'super-admin' || this.roleName == 'admin' && role == "staff" && !this.isEdit) {
        if (this.isSuperAdmin == true && this.userId != currentUser) {
          this.userForm.controls['roleName'].setValue(role);
          let roleExists = this.roles.find(roleItems => roleItems.name == role);
          if (roleExists) {
            this.selectedRoleId = roleExists._id;
            this.selectedRoleName = roleExists.name;
            this.userRoleName = roleExists.name;
          }
        }
      }
    } else if (type == 'editFetch') {
      this.userForm.controls['roleName'].setValue(role);
      let roleExists = this.roles.find(roleItems => roleItems.name == role);
      if (roleExists) {
        this.selectedRoleId = roleExists._id;
        this.selectedRoleName = roleExists.name;
        // this.userRoleName = roleExists.name;
      }

      var userId = this.storageConfiguration.sessionGetItem(this.storageConfiguration.id);
      if (this.roleName == 'admin') {
        if (role == 'staff' || this.userId == userId) {
          this.isAdmin = false;
          return;
        } else {
          this.isAdmin = true;
        }
      }
    } else if (this.roleName == 'staff' || this.roleName == 'admin') {
      return;
    }
  }
  keyPress(event) {
    const pattern = /[0-9\+\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  editProfile() {
    this.profileCropDialogRef = this.dialog.open(src_app_shared_profile_crop_profile_crop_component__WEBPACK_IMPORTED_MODULE_6__.ProfileCropComponent, {
      width: '700px'
    });
    this.profileCropDialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        if (result.status) {
          this.handleFileInput1(result.file);
        }
      }
    });
  }
  handleFileInput1(event) {
    var formData = new FormData();
    formData.append("file", event);
    this.spinner.show();
    this.dataService.addFile(this.configuration.upload, formData).subscribe(data => {
      this.proImage = data.data.Location;
      this.spinner.hide();
      this.toastr.success('Profile Image Uploaded Successfully');
      if (this.userId == this.storageConfiguration.sessionGetItem(this.storageConfiguration.id)) {
        this.storageConfiguration.sessionSetItem(this.storageConfiguration.profileImg, this.proImage);
        this.getProfileImageService.getProfileImage();
      }
      this.isProfileImageUpload = true;
      if (this.isEdit) {
        this.updateUser();
      }
    }, err => {
      this.toastr.error('Profile Image Upload Failed');
      this.spinner.hide();
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder
  }, {
    type: src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_3__.StorageConfiguration
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration
  }, {
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerService
  }, {
    type: src_app_shared_helper_get_profile_image__WEBPACK_IMPORTED_MODULE_7__.GetProfileImageService
  }, {
    type: src_app_shared_helper_common_validation__WEBPACK_IMPORTED_MODULE_8__.CommonValidation
  }, {
    type: src_app_shared_services_mobile_number_service__WEBPACK_IMPORTED_MODULE_9__.MobileService
  }];
};
UserDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'app-user-details',
  template: _user_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_user_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], UserDetailsComponent);


/***/ }),

/***/ 86707:
/*!***************************************************!*\
  !*** ./src/app/pages/user/user-list.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListComponent": () => (/* binding */ UserListComponent)
/* harmony export */ });
/* harmony import */ var D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _user_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.component.html?ngResource */ 33835);
/* harmony import */ var _user_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list.component.scss?ngResource */ 17038);
/* harmony import */ var _user_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_user_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/storage-setting/storage-configuration */ 46352);
/* harmony import */ var _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/services/excel-service */ 69885);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 49272);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 25852);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 22887);

















let UserListComponent = class UserListComponent {
  constructor(router, configuration, dataService, storageConfiguration, toastr, excelService, _matDialog, spinner) {
    this.router = router;
    this.configuration = configuration;
    this.dataService = dataService;
    this.storageConfiguration = storageConfiguration;
    this.toastr = toastr;
    this.excelService = excelService;
    this._matDialog = _matDialog;
    this.spinner = spinner;
    this.userList = [];
    this.showAdminContent = true;
    this.showManagerContent = true;
    this.excel = [];
    this.displayedColumns = ['position', 'userName', 'firstname', 'lastname', 'role', 'email', 'createdDate', 'actions'];
    this.pageSizeOptions = [5, 10, 25, 100];
    this.pageNumber = 1;
  }
  ngOnInit() {
    this.showAdminContent = true;
    this.showManagerContent = false;
    this.getUserList();
    this.roleName = this.storageConfiguration.sessionGetItem(this.storageConfiguration.role);
  }
  viewAsAdmin(isAdmin) {
    if (isAdmin) {
      this.showAdminContent = true;
      this.showManagerContent = false;
    } else {
      this.showAdminContent = false;
      this.showManagerContent = true;
    }
  }
  getUserList() {
    this.spinner.show();
    this.dataService.getAll(this.configuration.user + '?sortBy=createdDate&orderBy=desc').subscribe(data => {
      let userList = data.data;
      this.totalRecords = data.totalRecords;
      this.userList = this.userListTableData(userList);
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
  }
  nextPage(event) {
    this.spinner.show();
    this.pageNumber = event.pageIndex + 1;
    this.dataService.getAll(this.configuration.user + '?pageNumber=' + this.pageNumber + '&sortBy=createdDate&orderBy=desc').subscribe(data => {
      let userList = data.data;
      this.totalRecords = data.totalRecords;
      this.userList = this.userListTableData(userList);
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
  }
  sortTable() {
    this.spinner.show();
    this.dataService.getAll(this.configuration.user + '?sortBy=' + this.sorting.active + '&orderBy=' + this.sorting.direction).subscribe(data => {
      let userList = data.data;
      this.userList = this.userListTableData(userList);
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
  }
  searchUser() {
    var _this = this;
    return (0,D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.userSearchValue != undefined && _this.userSearchValue != "") {
        yield _this.dataService.getAll(_this.configuration.user + '?fullName=' + _this.userSearchValue + '&sortBy=createdDate&orderBy=desc').subscribe(data => {
          let userList = data.data;
          _this.totalRecords = data.data.length;
          _this.pageNumber = 1;
          _this.paginator.pageIndex = 0;
          _this.userList = _this.userListTableData(userList);
        }, err => {
          _this.spinner.hide();
        });
      } else {
        _this.getUserList();
      }
    })();
  }
  userListTableData(userData) {
    let userListData = [];
    userData.forEach((element, index) => {
      userListData.push({
        id: element._id,
        position: index + 1 + (this.pageNumber - 1) * 10,
        role: element.role.displayName,
        firstname: element.firstName,
        lastname: element.lastName,
        userName: element.firstName + ' ' + element.lastName,
        userProfile: element.profileImageURL ? element.profileImageURL : '',
        email: element.email,
        mobile: element.address.mobile,
        createdDate: element.createdDate,
        isActive: element.isActive == true
      });
    });
    return userListData;
  }
  userStatusToggle(event, userId) {
    let userStatus = event.checked == true ? 'Activate' : 'Deactivate';
    let message = {
      message: 'Do you want to ' + userStatus + ' this user?'
    };
    this.confirmDialogRef = this._matDialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialogComponent, {
      panelClass: 'confirm',
      data: message
    });
    this.confirmDialogRef.afterClosed().subscribe(result => {
      let editElement = this.userList.findIndex(element => element.id == userId);
      if (result == true) {
        this.userList[editElement].isActive = event.checked;
        this.userActivateDeactivate(event, userId);
      } else {
        this.userList = JSON.parse(JSON.stringify(this.userList));
      }
    });
  }
  userActivateDeactivate(event, userId) {
    if (event.checked === false) {
      let updateModel = [{
        key: "isActive",
        value: false
      }, {
        key: "isDelete",
        value: true
      }];
      this.dataService.updateSwitch(userId, this.configuration.user + '/', updateModel).subscribe(data => {
        this.toastr.error('Account de-activated successfully.');
      });
    } else {
      let updateModel = [{
        key: "isActive",
        value: true
      }, {
        key: "isDelete",
        value: true
      }];
      this.dataService.updateSwitch(userId, this.configuration.user + '/', updateModel).subscribe(data => {
        this.toastr.success('Account activated successfully.');
      });
    }
  }
  export() {
    let datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe('en-US');
    this.dataService.getAll(this.configuration.user).subscribe(data => {
      data.data.forEach(row => {
        this.excel.push({
          "User Name": row.fullName,
          "Email": row.email,
          "Role": row.role.displayName,
          "Mobile": row.addressInfo.mobile,
          "Created Date": datePipe.transform(row.createdDate, 'dd/MM/yyyy')
        });
      });
      this.excelService.exportAsExcelFile(this.excel, 'user_list');
    }, err => {});
  }
  adduser() {
    if (this.roleName === 'super-admin' || this.roleName === 'admin') {
      this.router.navigate(['/map/users/user-create'], {
        queryParams: {
          isEdit: false,
          isSuperAdmin: true
        }
      });
    }
  }
  edituserdetail(id) {
    if (this.roleName === 'super-admin' || this.roleName === 'admin') {
      this.router.navigate(['/map/users/user-edit'], {
        queryParams: {
          userId: id,
          isEdit: true,
          isSuperAdmin: true
        }
      });
    } else {
      this.router.navigate(['/map/users/user-edit'], {
        queryParams: {
          userId: id,
          isEdit: true,
          isSuperAdmin: false
        }
      });
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration
  }, {
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
  }, {
    type: src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_5__.StorageConfiguration
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService
  }, {
    type: _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__.ExcelService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService
  }];
  static #_2 = this.propDecorators = {
    sorting: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, {
        static: true
      }]
    }],
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
      args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, {
        static: true
      }]
    }]
  };
};
UserListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  template: _user_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_user_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], UserListComponent);

const ELEMENT_DATA = [];

/***/ }),

/***/ 99321:
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _user_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.component */ 86707);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.routing.module */ 58129);
/* harmony import */ var _user_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-details.component */ 69612);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mask */ 7038);









const maskConfig = {
  validation: false
};
let UserModule = class UserModule {};
UserModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_1__.UserRoutingModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltipModule, ngx_mask__WEBPACK_IMPORTED_MODULE_8__.NgxMaskModule.forRoot(maskConfig)],
  exports: [_user_details_component__WEBPACK_IMPORTED_MODULE_2__.UserDetailsComponent],
  declarations: [_user_list_component__WEBPACK_IMPORTED_MODULE_0__.UserListComponent, _user_details_component__WEBPACK_IMPORTED_MODULE_2__.UserDetailsComponent],
  providers: []
})], UserModule);


/***/ }),

/***/ 58129:
/*!***************************************************!*\
  !*** ./src/app/pages/user/user.routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoutingModule": () => (/* binding */ UserRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _user_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.component */ 86707);
/* harmony import */ var _user_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-details.component */ 69612);





const routes = [{
  path: '',
  component: _user_list_component__WEBPACK_IMPORTED_MODULE_0__.UserListComponent
}, {
  path: 'user-create',
  component: _user_details_component__WEBPACK_IMPORTED_MODULE_1__.UserDetailsComponent
}, {
  path: 'user-edit',
  component: _user_details_component__WEBPACK_IMPORTED_MODULE_1__.UserDetailsComponent
}];
let UserRoutingModule = class UserRoutingModule {};
UserRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], UserRoutingModule);


/***/ }),

/***/ 43721:
/*!*************************************************************************!*\
  !*** ./src/app/shared/add-participation/add-participation.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddParticipationComponent": () => (/* binding */ AddParticipationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _add_participation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-participation.component.html?ngResource */ 695);
/* harmony import */ var _add_participation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-participation.component.scss?ngResource */ 14933);
/* harmony import */ var _add_participation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_participation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/storage-setting/storage-configuration */ 46352);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _services_mobile_number_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/mobile-number-service */ 93426);














let AddParticipationComponent = class AddParticipationComponent {
  constructor(fb, storageConfiguration, configuration, dataService, toastr, dialog, spinner, mobileService, dialogRef, data) {
    this.fb = fb;
    this.storageConfiguration = storageConfiguration;
    this.configuration = configuration;
    this.dataService = dataService;
    this.toastr = toastr;
    this.dialog = dialog;
    this.spinner = spinner;
    this.mobileService = mobileService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.participantList = [];
    this.roles = [];
    this.isEdit = false;
    this.participationForm = this.fb.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      managername: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      managertitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      organizationName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      officeMobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      zipcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  ngOnInit() {
    this.roleName = this.storageConfiguration.sessionGetItem(this.storageConfiguration.name);
    if (this.data.type == 'edit') {
      this.editparticipationdetail(this.data);
      this.isEdit = true;
    }
  }
  createparticipant() {
    if (this.participationForm.valid) {
      let participationForm = this.participationForm.value;
      let addressInfo = {
        addressLine: participationForm.address,
        mobile: this.mobileService.mobileFormat(participationForm.mobile),
        officeMobile: this.mobileService.mobileFormat(participationForm.officeMobile),
        city: participationForm.city,
        state: participationForm.state,
        country: participationForm.country,
        zipcode: participationForm.zipcode
      };
      let managerInfo = {
        name: participationForm.managername,
        title: participationForm.managertitle
      };
      let participantModel = {
        firstName: participationForm.firstName,
        lastName: participationForm.lastName,
        title: participationForm.title,
        email: participationForm.email,
        workshop: this.data.workshopId,
        organizationName: participationForm.organizationName,
        userType: 'participant',
        createdBy: this.storageConfiguration.sessionGetItem(this.storageConfiguration.id),
        updatedBy: this.storageConfiguration.sessionGetItem(this.storageConfiguration.id),
        address: addressInfo,
        manager: managerInfo
      };
      this.spinner.show();
      this.dataService.add(this.configuration.participant, participantModel).subscribe(data => {
        if (data.message == 'Participant Created Successfully!!') {
          this.toastr.success('Participant created Successfully.');
          this.dialogRef.close(data);
        }
      }, err => {
        this.spinner.hide();
        if (err.error.message == 'Participant already exist in Workshop!!') {
          this.toastr.error('Participant already exist in Workshop!!.');
        }
      });
      this.spinner.hide();
    } else {
      for (const i in this.participationForm.controls) {
        this.participationForm.controls[i].markAsDirty();
        this.participationForm.controls[i].updateValueAndValidity();
      }
      this.toastr.error('Please enter the required fields.');
    }
  }
  editparticipationdetail(data) {
    this.spinner.show();
    this.dataService.getSingle(data.participantId, this.configuration.participant + '/').subscribe(data => {
      let participantInfo = data.data;
      this.participationForm.patchValue({
        title: participantInfo.title,
        firstName: participantInfo.firstName,
        lastName: participantInfo.lastName,
        email: participantInfo.email,
        organizationName: participantInfo.organizationName,
        managername: participantInfo.manager.name,
        managertitle: participantInfo.manager.title,
        address: participantInfo.address.addressLine,
        city: participantInfo.address.city,
        state: participantInfo.address.state,
        mobile: participantInfo.address.mobile,
        officeMobile: participantInfo.address.officeMobile,
        country: participantInfo.address.country,
        zipcode: participantInfo.address.zipcode
      });
      this.createdBy = participantInfo.createdBy;
    }, err => {
      this.spinner.hide();
    });
    this.spinner.hide();
  }
  updateParticipantDetail() {
    if (this.participationForm.valid) {
      let participationForm = this.participationForm.value;
      let addressInfo = {
        addressLine: participationForm.address,
        mobile: this.mobileService.mobileFormat(participationForm.mobile),
        officeMobile: this.mobileService.mobileFormat(participationForm.officeMobile),
        city: participationForm.city,
        state: participationForm.state,
        country: participationForm.country,
        zipcode: participationForm.zipcode
      };
      let managerInfo = {
        name: participationForm.managername,
        title: participationForm.managertitle
      };
      let participantModel = {
        firstName: participationForm.firstName,
        lastName: participationForm.lastName,
        title: participationForm.title,
        email: participationForm.email,
        workshop: this.data.workshopId,
        organizationName: participationForm.organizationName,
        userType: 'participant',
        createdBy: this.createdBy,
        updatedBy: this.storageConfiguration.sessionGetItem(this.storageConfiguration.id),
        address: addressInfo,
        manager: managerInfo
      };
      this.spinner.show();
      this.dataService.update(this.data.participantId, this.configuration.participant + '/', participantModel).subscribe(data => {
        if (data.message == 'Participant Updated successfully!!') {
          this.toastr.success('Participant Updated successfully!!');
          this.dialogRef.close(data);
        }
      }, err => {
        this.spinner.hide();
        if (err.error.data.errmsg == 'Participant Already Exists') {
          this.toastr.error('Participant Already Exists.');
        }
      });
      this.spinner.hide();
    } else {
      for (const i in this.participationForm.controls) {
        this.participationForm.controls[i].markAsDirty();
        this.participationForm.controls[i].updateValueAndValidity();
      }
      this.toastr.error('Please enter the required fields.');
    }
  }
  keyPress(event) {
    const pattern = /[0-9\+\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  closePopup() {
    this.dialog.closeAll();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder
  }, {
    type: src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_2__.StorageConfiguration
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration
  }, {
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService
  }, {
    type: _services_mobile_number_service__WEBPACK_IMPORTED_MODULE_5__.MobileService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
      args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA]
    }]
  }];
};
AddParticipationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-add-participation',
  template: _add_participation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_add_participation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AddParticipationComponent);


/***/ }),

/***/ 22887:
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _confirm_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-dialog.component.html?ngResource */ 26430);
/* harmony import */ var _confirm_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-dialog.component.scss?ngResource */ 15569);
/* harmony import */ var _confirm_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_confirm_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 86991);






let ConfirmDialogComponent = class ConfirmDialogComponent {
  /**
   * Constructor
   *
   * @param {MatDialogRef<ConfirmDialogComponent>} dialogRef
   */
  constructor(dialogRef, _data) {
    this.dialogRef = dialogRef;
    this._data = _data;
  }
  ngOnInit() {
    this.confirmMessage = this._data.message;
  }
  closeDialog(event) {
    this.dialogRef.close(event);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
      args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA]
    }]
  }];
};
ConfirmDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-confirm-dialog',
  template: _confirm_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_confirm_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ConfirmDialogComponent);


/***/ }),

/***/ 83849:
/*!*******************************************************************!*\
  !*** ./src/app/shared/custom-analyze/custom-analyze.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomAnalyzeComponent": () => (/* binding */ CustomAnalyzeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _custom_analyze_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-analyze.component.html?ngResource */ 96056);
/* harmony import */ var _custom_analyze_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-analyze.component.scss?ngResource */ 50041);
/* harmony import */ var _custom_analyze_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_custom_analyze_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 86991);






let CustomAnalyzeComponent = class CustomAnalyzeComponent {
  constructor(dialogRef, _data) {
    this.dialogRef = dialogRef;
    this._data = _data;
    this.categories = [{
      name: 'Communication',
      checked: true
    }, {
      name: 'Controlling',
      checked: true
    }, {
      name: 'Leading',
      checked: true
    }, {
      name: 'Organizing',
      checked: true
    }, {
      name: 'Planning',
      checked: true
    }, {
      name: 'Staffing',
      checked: true
    }];
    this.global = true;
    this.your = true;
  }
  ngOnInit() {
    this.categories = this._data;
  }
  closeDialog() {
    let sendData = {
      response: false,
      data: this.categories
    };
    this.dialogRef.close(sendData);
  }
  confirmDialog() {
    let analyzeType;
    if (this.global == true && this.your == true) {
      analyzeType = 'all';
    } else {
      if (this.global == true) {
        analyzeType = 'global';
      }
      if (this.your == true) {
        analyzeType = 'your';
      }
    }
    let sendData = {
      response: true,
      data: this.categories,
      analyzeType: analyzeType
    };
    this.dialogRef.close(sendData);
  }
  checkboxChange(index) {
    this.categories[index].checked = !this.categories[index].checked;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
      args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA]
    }]
  }];
};
CustomAnalyzeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-custom-analyze',
  template: _custom_analyze_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_custom_analyze_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CustomAnalyzeComponent);


/***/ }),

/***/ 4361:
/*!****************************************************!*\
  !*** ./src/app/shared/helper/common-validation.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonValidation": () => (/* binding */ CommonValidation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let CommonValidation = class CommonValidation {
  getValidation(invalidData) {
    let validateArray = [];
    let fields = this.validationList();
    invalidData.forEach(element => {
      let fieldValue = fields.filter(x => x.id == element);
      fieldValue.forEach(element => {
        validateArray.push(element.value);
      });
    });
    return validateArray;
  }
  validationList() {
    let requiredFields = [];
    requiredFields = [{
      id: 'roleName',
      value: 'Role'
    }, {
      id: 'emailId',
      value: 'Email'
    }, {
      id: 'firstName',
      value: 'First Name'
    }, {
      id: 'lastName',
      value: 'Last Name'
    }, {
      id: 'address',
      value: 'Address'
    }, {
      id: 'mobile',
      value: 'Mobile'
    }, {
      id: 'city',
      value: 'City'
    }, {
      id: 'state',
      value: 'State'
    }, {
      id: 'zipCode',
      value: 'Zipcode'
    }, {
      id: 'country',
      value: 'Country'
    }];
    return requiredFields;
  }
};
CommonValidation = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], CommonValidation);


/***/ }),

/***/ 73034:
/*!****************************************************!*\
  !*** ./src/app/shared/helper/get-profile-image.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetProfileImageService": () => (/* binding */ GetProfileImageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/data-service */ 55122);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage-setting/storage-configuration */ 46352);






let GetProfileImageService = class GetProfileImageService {
  constructor(dataService, configuration, storageConfiguration) {
    this.dataService = dataService;
    this.configuration = configuration;
    this.storageConfiguration = storageConfiguration;
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  getProfileImage() {
    this.subject.next(this.storageConfiguration.sessionGetItem(this.storageConfiguration.profileImg));
    return this.subject.asObservable();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration
  }, {
    type: _storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_2__.StorageConfiguration
  }];
};
GetProfileImageService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], GetProfileImageService);


/***/ }),

/***/ 95610:
/*!*************************************************************************!*\
  !*** ./src/app/shared/possible-variants/possible-variants.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PossibleVariantsComponent": () => (/* binding */ PossibleVariantsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _possible_variants_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./possible-variants.component.html?ngResource */ 50573);
/* harmony import */ var _possible_variants_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./possible-variants.component.scss?ngResource */ 47010);
/* harmony import */ var _possible_variants_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_possible_variants_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-service */ 55122);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 94817);











let PossibleVariantsComponent = class PossibleVariantsComponent {
  constructor(fb, dataService, configuration, dialogRef, toastr, spinner, _data) {
    this.fb = fb;
    this.dataService = dataService;
    this.configuration = configuration;
    this.dialogRef = dialogRef;
    this.toastr = toastr;
    this.spinner = spinner;
    this._data = _data;
    this.variantList = [];
    this.variantForm = this.fb.group({
      variantRootWord: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  ngOnInit() {
    this.variantForm.controls['variantRootWord'].setValue(this._data);
    this.spinner.show();
    this.dataService.getSingleUser(this._data, this.configuration.variations).subscribe(data => {
      this.variantList = data;
      this.spinner.hide();
    }, err => {
      this.toastr.error('Variant search Failed');
      this.spinner.hide();
    });
  }
  addToSynonyms() {
    let sendData = {
      toAdd: true,
      sendData: this.variantList
    };
    this.dialogRef.close(sendData);
  }
  closeDialog() {
    let sendData = {
      toAdd: false
    };
    this.dialogRef.close(sendData);
  }
  deleteItem(variant) {
    let findIndex = this.variantList.indexOf(variant);
    if (findIndex > -1) {
      this.variantList.splice(findIndex, 1);
    }
  }
  checkVariants() {
    if (this.variantForm.value.variantRootWord.trim() == '') {
      this.toastr.error('Please enter the required fields.');
      return;
    }
    if (this.variantForm.valid) {
      this.spinner.show();
      this.dataService.getSingleUser(this.variantForm.value.variantRootWord.trim(), this.configuration.variations).subscribe(data => {
        this.variantList = data;
        this.spinner.hide();
      }, err => {
        this.toastr.error('Variant search Failed');
        this.spinner.hide();
      });
    } else {
      for (const i in this.variantForm.controls) {
        this.variantForm.controls[i].markAsDirty();
        this.variantForm.controls[i].updateValueAndValidity();
      }
      this.toastr.error('Please enter the required fields.');
    }
  }
  restrictToAlphabets(event) {
    const pattern = /^[a-zA-Z \-\']+/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder
  }, {
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject,
      args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA]
    }]
  }];
};
PossibleVariantsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-possible-variants',
  template: _possible_variants_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_possible_variants_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PossibleVariantsComponent);


/***/ }),

/***/ 86004:
/*!***************************************************************!*\
  !*** ./src/app/shared/profile-crop/profile-crop.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileCropComponent": () => (/* binding */ ProfileCropComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _profile_crop_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-crop.component.html?ngResource */ 5859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _alyle_ui_image_cropper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @alyle/ui/image-cropper */ 68549);
/* harmony import */ var _alyle_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @alyle/ui */ 11862);





const styles = () => {
  return {
    actions: _alyle_ui__WEBPACK_IMPORTED_MODULE_1__.lyl`{
      display: flex
    }`,
    cropper: _alyle_ui__WEBPACK_IMPORTED_MODULE_1__.lyl`{
      max-width: 400px
      height: 300px
    }`,
    flex: _alyle_ui__WEBPACK_IMPORTED_MODULE_1__.lyl`{
      flex: 1
    }`
  };
};
let ProfileCropComponent = class ProfileCropComponent {
  onCropped(e) {
    this.croppedImage = e.dataURL;
  }
  constructor(sRenderer) {
    this.sRenderer = sRenderer;
    this.classes = this.sRenderer.renderSheet(styles);
    this.myConfig = {
      width: 150,
      height: 150,
      output: {
        width: 40,
        height: 40
      }
    };
  }
  static #_ = this.ctorParameters = () => [{
    type: _alyle_ui__WEBPACK_IMPORTED_MODULE_1__.StyleRenderer
  }];
  static #_2 = this.propDecorators = {
    cropper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: [_alyle_ui_image_cropper__WEBPACK_IMPORTED_MODULE_3__.LyImageCropper, {
        static: true
      }]
    }]
  };
};
ProfileCropComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-profile-crop',
  template: _profile_crop_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
  providers: [_alyle_ui__WEBPACK_IMPORTED_MODULE_1__.StyleRenderer]
})], ProfileCropComponent);


/***/ }),

/***/ 55122:
/*!*************************************************!*\
  !*** ./src/app/shared/services/data-service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage-setting/storage-configuration */ 46352);



// import { Configuration } from '../../app.configuration';


let DataService = class DataService {
  constructor(http, storageConfiguration) {
    this.http = http;
    this.storageConfiguration = storageConfiguration;
    this.apiBackendUrl = 'http://54.173.255.128/backend/get_pdf_text ';
    this.sendResultUrl = 'http://54.173.255.128/dev/api/v1/notification/sendResult';
    this.getPopupdata = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
  }
  // Dynamic data service
  getAll(apiUrl) {
    return this.http.get(apiUrl);
  }
  getSingle(id, apiUrl) {
    return this.http.get(apiUrl + id);
  }
  getParticipantResponse(apiUrl, id) {
    return this.http.get(apiUrl + id);
  }
  getMemberResponse(apiUrl, id) {
    return this.http.get(apiUrl + id);
  }
  getSingleGroup(id, apiUrl) {
    return this.http.get(apiUrl + id);
  }
  getSingleUser(id, apiUrl) {
    return this.http.get(apiUrl + id);
  }
  getGroupById(id, apiUrl) {
    return this.http.get(apiUrl + id);
  }
  add(apiUrl, itemName) {
    return this.http.post(apiUrl, itemName);
  }
  addAnswer(apiUrl, itemName) {
    return this.http.post(apiUrl, itemName);
  }
  addUser(apiUrl, itemName) {
    return this.http.post(apiUrl, itemName);
  }
  addQuestion(apiUrl, itemName) {
    return this.http.post(apiUrl, itemName);
  }
  getQuestionList(apiUrl) {
    return this.http.get(apiUrl);
  }
  getGroupList(apiUrl) {
    return this.http.get(apiUrl);
  }
  deleteTemplate(apiUrl, id) {
    return this.http.delete(`${apiUrl}/${id}`);
  }
  deleteQues(apiUrl, id) {
    return this.http.delete(`${apiUrl}/${id}`);
  }
  bulkUpdate(apiUrl, itemName) {
    return this.http.post(apiUrl, itemName);
  }
  questionbulkUpdate(apiUrl, itemName) {
    return this.http.put(apiUrl, itemName);
  }
  workshopEdit(apiUrl, itemName, id) {
    return this.http.put(`${apiUrl}/${id}`, itemName);
  }
  workShopCreate(apiUrl, itemName) {
    return this.http.post(apiUrl, itemName);
  }
  deleteGroup(apiUrl, id) {
    return this.http.delete(`${apiUrl}/${id}`);
  }
  addPassword(apiUrl, itemName) {
    return this.http.post(apiUrl, itemName);
  }
  update(id, apiUrl, itemToUpdate) {
    return this.http.put(`${apiUrl}/${id}`, itemToUpdate);
  }
  updateGroups(id, apiUrl, itemToUpdate) {
    return this.http.put(apiUrl + id, itemToUpdate);
  }
  createGroup(apiUrl, itemToUpdate) {
    return this.http.post(apiUrl, itemToUpdate);
  }
  createMember(apiUrl, itemToUpdate) {
    return this.http.post(apiUrl, itemToUpdate);
  }
  sendParticipe(apiUrl, id, itemToUpdate) {
    return this.http.post(`${apiUrl}/${id}`, itemToUpdate);
  }
  updateGroup(id, apiUrl, itemToUpdate) {
    return this.http.put(apiUrl + id, itemToUpdate);
  }
  updateMember(id, apiUrl, itemToUpdate) {
    return this.http.put(apiUrl + id, itemToUpdate);
  }
  updateUser(id, apiUrl, itemToUpdate) {
    return this.http.put(apiUrl + id, itemToUpdate);
  }
  updateSwitch(id, apiUrl, itemToUpdate) {
    return this.http.patch(apiUrl + id, itemToUpdate);
  }
  delete(id, apiUrl) {
    return this.http.delete(apiUrl + id);
  }
  getById(apiUrl, id) {
    return this.http.get(`${apiUrl}/${id}`);
  }
  updateQuestion(question_id, apiUrl, itemToUpdate) {
    debugger;
    return this.http.put(`${apiUrl}`, itemToUpdate);
  }
  updateTemplate(template_id, apiUrl, itemToUpdate) {
    debugger;
    return this.http.put(`${apiUrl}/${template_id}`, itemToUpdate);
  }
  updatePrompt(prompt_id, apiUrl, itemToUpdate) {
    debugger;
    return this.http.put(`${apiUrl}/${prompt_id}`, itemToUpdate);
  }
  addParticipant(apiUrl, itemName) {
    return this.http.post(apiUrl, itemName);
  }
  getParticipantList(apiUrl) {
    return this.http.get(apiUrl);
  }
  getQuestions(apiUrl, id) {
    return this.http.get(`${apiUrl}/${id}`);
  }
  //For file process
  addFile(apiUrl, itemName) {
    return this.http.post(apiUrl, itemName, {
      headers: {
        'type': 'templates'
      }
    });
  }
  uploadPdfAndData(pdfFile, userQuestion, pdfName) {
    const formData = new FormData();
    formData.append('file', pdfFile);
    formData.append('question', userQuestion);
    formData.append('pdf_name', pdfName);
    return this.http.post(this.apiBackendUrl, formData);
  }
  sendResult(email, url) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('type', 'resultPdf');
    const formData = new FormData();
    // formData.append('file', pdfFile);
    formData.append('email', email);
    formData.append('url', url);
    return this.http.post(this.sendResultUrl, formData, {
      headers
    });
  }
  sendResultMail(apiUrl, itemToUpdate) {
    return this.http.post(`${apiUrl}`, itemToUpdate);
  }
  deleteFile(apiUrl) {
    return this.http.delete(apiUrl);
  }
  getAuthToken() {
    return this.storageConfiguration.sessionGetItem(this.storageConfiguration.token);
    // return localStorage.getItem('token');
  }

  sendPopupdata(check) {
    this.getPopupdata.next(check);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }, {
    type: _storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_0__.StorageConfiguration
  }];
};
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], DataService);


/***/ }),

/***/ 69885:
/*!**************************************************!*\
  !*** ./src/app/shared/services/excel-service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcelService": () => (/* binding */ ExcelService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ 98810);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);




const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
let ExcelService = class ExcelService {
  constructor() {}
  exportAsExcelFile(json, excelFileName) {
    const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.json_to_sheet(json);
    const workbook = {
      Sheets: {
        'data': worksheet
      },
      SheetNames: ['data']
    };
    const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_1__.write(workbook, {
      bookType: 'xlsx',
      type: 'array'
    });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  saveAsExcelFile(buffer, fileName) {
    const data = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
  static #_ = this.ctorParameters = () => [];
};
ExcelService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], ExcelService);


/***/ }),

/***/ 93426:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/mobile-number-service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileService": () => (/* binding */ MobileService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-service */ 55122);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ 42777);





let MobileService = class MobileService {
  constructor(configuration, dataService, spinner) {
    this.configuration = configuration;
    this.dataService = dataService;
    this.spinner = spinner;
  }
  mobileFormat(data) {
    return '(' + data.slice(0, 3) + ')' + ' ' + data.slice(3, 6) + '-' + data.slice(6, 10);
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration
  }, {
    type: _data_service__WEBPACK_IMPORTED_MODULE_1__.DataService
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__.NgxSpinnerService
  }];
};
MobileService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], MobileService);


/***/ }),

/***/ 88330:
/*!**********************************************************!*\
  !*** ./src/app/shared/storage-setting/encryptdecrypt.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncryptDecrypt": () => (/* binding */ EncryptDecrypt)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 36240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);



let EncryptDecrypt = class EncryptDecrypt {
  encrypt(inputEncrypt) {
    let key = crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8.parse('7061737323313244');
    let iv = crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8.parse('7061737323313244');
    let encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8.parse(inputEncrypt), key, {
      keySize: 128 / 8,
      iv: iv,
      mode: crypto_js__WEBPACK_IMPORTED_MODULE_0__.mode.CBC,
      padding: crypto_js__WEBPACK_IMPORTED_MODULE_0__.pad.Pkcs7
    });
    return encrypted.toString();
  }
  decrypt(inputDecrypt) {
    let key = crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8.parse('7061737323313244');
    let iv = crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8.parse('7061737323313244');
    let decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.decrypt(inputDecrypt, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: crypto_js__WEBPACK_IMPORTED_MODULE_0__.mode.CBC,
      padding: crypto_js__WEBPACK_IMPORTED_MODULE_0__.pad.Pkcs7
    });
    return decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8);
  }
};
EncryptDecrypt = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], EncryptDecrypt);


/***/ }),

/***/ 46352:
/*!*****************************************************************!*\
  !*** ./src/app/shared/storage-setting/storage-configuration.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageConfiguration": () => (/* binding */ StorageConfiguration)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _encryptdecrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encryptdecrypt */ 88330);



let StorageConfiguration = class StorageConfiguration {
  constructor(encryptDecrypt) {
    this.encryptDecrypt = encryptDecrypt;
    this.token = 'token';
    this.id = 'id';
    this.userName = 'userName';
    this.role = 'role';
    this.email = 'email';
    this.password = 'password';
    this.roleId = 'roleId';
    this.User_name = 'User_name';
    this.sessiontoken = 'sessiontoken';
    this.tenantId = 'tenantId';
    this.roleData = 'roleData';
    this.displayName = 'displayName';
    this.name = 'name';
    this.roleType = 'roleType';
    this.type = 'type';
    this.profileImg = 'profileImg';
    this.isGlobalSynonymEdit = 'isGlobalSynonymEdit';
    this.isloggedIn = 'isloggedIn';
  }
  sessionSetItem(key, value) {
    localStorage.setItem(this.encryptDecrypt.encrypt(key), this.encryptDecrypt.encrypt(value));
  }
  sessionGetItem(key) {
    let decryptedValue = localStorage.getItem(this.encryptDecrypt.encrypt(key));
    return decryptedValue != null ? this.encryptDecrypt.decrypt(decryptedValue) : null;
  }
  sessionRemoveItem(key) {
    localStorage.removeItem(this.encryptDecrypt.encrypt(key));
  }
  static #_ = this.ctorParameters = () => [{
    type: _encryptdecrypt__WEBPACK_IMPORTED_MODULE_0__.EncryptDecrypt
  }];
};
StorageConfiguration = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], StorageConfiguration);


/***/ }),

/***/ 10907:
/*!***************************************************************!*\
  !*** ./src/app/shared/synonyms-add/synonyms-add.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SynonymsAddComponent": () => (/* binding */ SynonymsAddComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _synonyms_add_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./synonyms-add.component.html?ngResource */ 68969);
/* harmony import */ var _synonyms_add_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./synonyms-add.component.scss?ngResource */ 4954);
/* harmony import */ var _synonyms_add_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_synonyms_add_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage-setting/storage-configuration */ 46352);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data-service */ 55122);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ 22887);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _possible_variants_possible_variants_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../possible-variants/possible-variants.component */ 95610);














let SynonymsAddComponent = class SynonymsAddComponent {
  constructor(fb, dialogRef, storageConfiguration, configuration, dataService, toastr, route, _matDialog, data, spinner, dialog) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.storageConfiguration = storageConfiguration;
    this.configuration = configuration;
    this.dataService = dataService;
    this.toastr = toastr;
    this.route = route;
    this._matDialog = _matDialog;
    this.data = data;
    this.spinner = spinner;
    this.dialog = dialog;
    this.synonymsAddNewList = [];
    this.dialogType = 'Add ';
    this.synonymsAddForm = this.fb.group({
      synonymName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params.categoryId;
    });
    this.synonymEdit = this.data.isEdit;
    this.dialogType = this.synonymEdit == true ? 'Edit ' : this.dialogType;
    if (this.synonymEdit) {
      this.synonymsAddForm.controls['synonymName'].setValue(this.data.editSynonym);
    }
  }
  addItems() {
    let existAlreadyInGlobal = false;
    let existAlreadyInYour = false;
    if (this.synonymsAddForm.value.synonymName.trim() == '') {
      this.toastr.error('Please enter the required fields.');
      return;
    }
    if (this.synonymsAddForm.valid) {
      let newFindIndex = this.synonymsAddNewList.indexOf(this.synonymsAddForm.value.synonymName.trim());
      let oldFindIndex;
      let givenWords = this.synonymsAddForm.value.synonymName;
      let splitted = givenWords.split(' ');
      if (splitted.length == 1) {
        this.variantPopup = this.dialog.open(_possible_variants_possible_variants_component__WEBPACK_IMPORTED_MODULE_6__.PossibleVariantsComponent, {
          width: '500px',
          panelClass: 'synonym-add',
          data: givenWords,
          disableClose: true
        });
        this.variantPopup.afterClosed().subscribe(result => {
          if (result.toAdd == true) {
            this.synonymsAddNewList = this.synonymsAddNewList.concat(result.sendData);
            this.synonymsAddNewList = this.synonymsAddNewList.filter((item, pos) => this.synonymsAddNewList.indexOf(item) === pos);
            let globalDuplicates = this.synonymsAddNewList.filter(val => this.data.synonymsGlobalList.map(v => v.toLowerCase()).includes(val));
            let individualDuplicates = this.synonymsAddNewList.filter(val => this.data.synonymsIndividualList.map(v => v.toLowerCase()).includes(val));
            this.synonymsAddNewList = this.synonymsAddNewList.filter(val => !this.data.synonymsGlobalList.map(v => v.toLowerCase()).includes(val));
            this.synonymsAddNewList = this.synonymsAddNewList.filter(val => !this.data.synonymsIndividualList.map(v => v.toLowerCase()).includes(val));
            let toastvalue = '';
            if (globalDuplicates.length > 0) {
              toastvalue = '<h5>Terminology already exists in Global</h5> <ul>';
              globalDuplicates.forEach(element => {
                toastvalue += '<li>' + element + ' </li>';
              });
              toastvalue += '</ul>';
            }
            if (individualDuplicates.length > 0) {
              toastvalue = '<h5>Terminology already exists in Individual</h5> <ul>';
              individualDuplicates.forEach(element => {
                toastvalue += '<li>' + element + ' </li>';
              });
              toastvalue += '</ul>';
            }
            if (globalDuplicates.length > 0 || individualDuplicates.length > 0) {
              this.toastr.error(toastvalue);
            }
          }
          this.synonymsAddForm.controls['synonymName'].setValue('');
          this.synonymsAddForm.controls['synonymName'].setErrors(null);
        });
      } else {
        if (this.data.type != 'Global') {
          oldFindIndex = this.data.synonymsIndividualList.indexOf(this.synonymsAddForm.value.synonymName.trim());
          if (oldFindIndex == -1) {
            oldFindIndex = this.data.synonymsGlobalList.indexOf(this.synonymsAddForm.value.synonymName.trim());
            if (oldFindIndex != -1) {
              existAlreadyInGlobal = true;
            }
          }
        } else {
          oldFindIndex = this.data.synonymsGlobalList.indexOf(this.synonymsAddForm.value.synonymName.trim());
          if (oldFindIndex == -1) {
            oldFindIndex = this.data.synonymsIndividualList.indexOf(this.synonymsAddForm.value.synonymName.trim());
            if (oldFindIndex != -1) {
              existAlreadyInYour = true;
            }
          }
        }
        if (newFindIndex == -1 && oldFindIndex == -1) {
          this.synonymsAddNewList.push(this.synonymsAddForm.value.synonymName.trim());
          this.synonymsAddForm.controls['synonymName'].setValue('');
          this.synonymsAddForm.controls['synonymName'].setErrors(null);
        } else {
          let message = 'Terminology already Exists!';
          if (existAlreadyInGlobal == true) {
            message = 'Terminology already exists in global terminology';
          }
          if (existAlreadyInYour == true) {
            message = 'Terminology already exists in your terminology';
          }
          this.toastr.error(message);
        }
      }
    } else {
      for (const i in this.synonymsAddForm.controls) {
        this.synonymsAddForm.controls[i].markAsDirty();
        this.synonymsAddForm.controls[i].updateValueAndValidity();
      }
      this.toastr.error('Please enter the required fields.');
    }
  }
  closeDialog() {
    this.dialogRef.close(this.data);
  }
  editItem(synonyms) {
    this.synonymsAddForm.controls['synonymName'].setValue(synonyms);
    let findIndex = this.synonymsAddNewList.indexOf(synonyms);
    if (findIndex > -1) {
      this.synonymsAddNewList.splice(findIndex, 1);
    }
  }
  deleteItem(synonyms) {
    let findIndex = this.synonymsAddNewList.indexOf(synonyms);
    if (findIndex > -1) {
      this.synonymsAddNewList.splice(findIndex, 1);
    }
  }
  confirmCreateDialog() {
    if (this.synonymsAddNewList.length > 0) {
      let message = {
        message: 'Do you want to create this Terminology?'
      };
      this.confirmDialogRef = this._matDialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmDialogComponent, {
        panelClass: 'confirm',
        data: message
      });
      this.confirmDialogRef.afterClosed().subscribe(result => {
        if (result == true) {
          this.createSynonym();
        }
      });
    } else {
      this.toastr.error('Please add Terminology!');
      this.spinner.hide();
    }
  }
  confirmUpdateDialog() {
    if (this.synonymsAddForm.valid) {
      let message = {
        message: 'Do you want to update this Terminology?'
      };
      this.confirmDialogRef = this._matDialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmDialogComponent, {
        panelClass: 'confirm',
        data: message
      });
      this.confirmDialogRef.afterClosed().subscribe(result => {
        if (result == true) {
          this.createSynonym();
        }
      });
    } else {
      this.toastr.error('Please edit Terminology!');
      this.spinner.hide();
    }
  }
  createSynonym() {
    this.spinner.show();
    if (this.data.type != 'Global') {
      if (this.data.isIndividualCreated == false) {
        this.createIndividual();
      } else {
        if (this.synonymEdit) {
          let newFindIndex = this.data.synonymsIndividualList.indexOf(this.synonymsAddForm.value.synonymName.trim());
          if (newFindIndex == -1) {
            this.synonymsAddNewList.push(this.synonymsAddForm.value.synonymName.trim());
          } else {
            this.toastr.error('Terminology already Exists');
            this.spinner.hide();
            return;
          }
          let oldFindIndex = this.data.synonymsIndividualList.indexOf(this.data.editSynonym);
          if (oldFindIndex > -1) {
            this.data.synonymsIndividualList.splice(oldFindIndex, 1);
          }
        }
        this.updateSynonym();
      }
    } else {
      if (this.synonymEdit) {
        let newFindIndex = this.data.synonymsGlobalList.indexOf(this.synonymsAddForm.value.synonymName.trim());
        if (newFindIndex == -1) {
          this.synonymsAddNewList.push(this.synonymsAddForm.value.synonymName.trim());
        } else {
          this.toastr.error('Terminology already Exists');
          this.spinner.hide();
          return;
        }
        let oldFindIndex = this.data.synonymsGlobalList.indexOf(this.data.editSynonym);
        if (oldFindIndex > -1) {
          this.data.synonymsGlobalList.splice(oldFindIndex, 1);
        }
      }
      this.updateSynonym();
    }
  }
  createIndividual() {
    this.spinner.show();
    let currentUserId = this.storageConfiguration.sessionGetItem(this.storageConfiguration.id);
    let individualModel = {
      synonyms: this.synonymsAddNewList,
      category: this.categoryId,
      userId: currentUserId
    };
    this.dataService.addUser(this.configuration.synonyms, individualModel).subscribe(data => {
      if (data.message == 'Terminology Created Successfully!!') {
        this.data.isIndividualCreated = true;
        this.toastr.success('Individual terminology created successfully.');
        this.closeDialog();
        this.spinner.hide();
      }
    }, err => {
      this.spinner.hide();
      let toastvalue = "Terminology Individual not created!";
      if (err.error.message == "Terminology already added to another Category") {
        toastvalue = '<h5>Terminology already added to another Essentials</h5> <ul>';
        err.error.data.forEach(element => {
          toastvalue += '<li>' + element + ' </li>';
        });
        toastvalue += '</ul>';
      }
      this.toastr.error(toastvalue);
    });
  }
  updateSynonym() {
    this.spinner.show();
    let synonymModel = {};
    let synonymId = this.data.synonymsGlobalId;
    if (this.data.type != 'Global') {
      synonymId = this.data.synonymsIndividualId;
      synonymModel.synonyms = this.data.synonymsIndividualList.concat(this.synonymsAddNewList);
    } else {
      synonymModel.synonyms = this.data.synonymsGlobalList.concat(this.synonymsAddNewList);
    }
    this.dataService.updateSwitch(synonymId, this.configuration.synonyms + '/', synonymModel).subscribe(data => {
      // debugger
      if (data.message == 'Updated Successfully!!') {
        this.toastr.success('Global Synonyms updated Successfully.');
        this.closeDialog();
        this.spinner.hide();
        if (this.synonymEdit) {
          this.synonymEdit = false;
          this.data.isEdit = false;
        }
      }
    }, err => {
      this.spinner.hide();
      let toastvalue = "Global Terminology not updated!";
      if (err.error.message == "Terminology already added to another Category") {
        toastvalue = '<h5>Terminology already added to another Terminology</h5> <ul>';
        err.error.data.forEach(element => {
          toastvalue += '<li>' + element + ' </li>';
        });
        toastvalue += '</ul>';
      }
      this.toastr.error(toastvalue);
    });
  }
  restrictToAlphabets(event) {
    const pattern = /^[a-zA-Z \-\']+/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef
  }, {
    type: _storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_2__.StorageConfiguration
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration
  }, {
    type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Inject,
      args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA]
    }]
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog
  }];
};
SynonymsAddComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-synonyms-add',
  template: _synonyms_add_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_synonyms_add_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SynonymsAddComponent);


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: true,
  // nodeApi: 'http://192.168.101.175:3000/api',
  nodeApi: 'http://54.173.255.128/dev/api',
  // nodeApi: 'http://localhost:3000/api',
  // nodeApi: 'http://159.89.238.247/api',
  pythonAPi: 'http://localhost:5000/'
  // nodeApi: 'http://ec2-54-224-204-9.compute-1.amazonaws.com/api',
  // pythonAPi: 'http://ec2-54-224-204-9.compute-1.amazonaws.com/'
  //nodeApi: 'https://filecoding.mapconsulting.com/api',
  // nodeApi: 'https://insights.mapconsulting.com/api',
  // pythonAPi: 'http://ec2-34-204-201-205.compute-1.amazonaws.com/'
  //pythonAPi: 'https://filecoding.mapconsulting.com/'
  // pythonAPi: 'https://insights.mapconsulting.com/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 15977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 92340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 79595:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 81816:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".forgot-page {\n  background-image: url(\"/assets/images/login.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  background-attachment: fixed;\n  background-position: center;\n}\n\n.forgot-card {\n  position: fixed;\n  top: 41%;\n  left: 50%;\n  width: 432px;\n  height: 336px;\n  margin-top: -9em; /*set to a negative number 1/2 of your height*/\n  margin-left: -15em; /*set to a negative number 1/2 of your width*/\n  background: #3B4E6C;\n  border-radius: 62px;\n}\n\n#forms-fields {\n  color: #ffffff;\n  font-size: 90%;\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: lightgrey;\n  opacity: 1; /* Firefox */\n  font-size: 12px;\n}\n\n.card-view {\n  background: #3B4E6C;\n  border-radius: 62px;\n  width: 432px;\n  height: 336px;\n}\n\n.card-header {\n  color: #ffffff;\n  font-size: 23px;\n  border-bottom: 0px solid transparent;\n}\n\n.logo-view {\n  float: left;\n}\n\n.logo-image {\n  width: 70%;\n}\n\n.card-title {\n  float: right;\n  margin-top: 10px;\n  border-bottom: 1px !important;\n}\n\n.card-input {\n  background: #273848 !important;\n  color: #ffffff;\n  border-color: transparent;\n  border-block-end-color: #ffffff;\n  border-width: 1px;\n}\n\n.button-view {\n  float: right;\n}\n\n.reset-button {\n  background: #A92A23;\n  border-radius: 30px;\n  color: #ffffff;\n  border: 2px;\n  padding-left: 17px;\n  padding-right: 17px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  width: 80%;\n  margin-bottom: 2px;\n}\n\n.button-view {\n  text-align: center;\n}\n\n.logo-main {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 40px;\n  font-size: 12px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/auth/forgot-password/forgot-password.component.scss"],"names":[],"mappings":"AAAA;EACE,iDAAA;EACA,4BAAA;EACA,sBAAA;EACA,YAAA;EACA,4BAAA;EACA,2BAAA;AACF;;AAEA;EACE,eAAA;EACA,QAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA,EAAA,8CAAA;EACA,kBAAA,EAAA,6CAAA;EACA,mBAAA;EACA,mBAAA;AACF;;AAEA;EACE,cAAA;EACA,cAAA;AACF;;AAEA;EACE,yCAAA;EACA,gBAAA;EACA,UAAA,EAAA,YAAA;EACA,eAAA;AACF;;AAEA;EACE,mBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;AACF;;AAEA;EACE,cAAA;EACA,eAAA;EACA,oCAAA;AACF;;AAEA;EACE,WAAA;AACF;;AAEA;EACE,UAAA;AACF;;AAEA;EACE,YAAA;EACA,gBAAA;EACA,6BAAA;AACF;;AAEA;EACE,8BAAA;EACA,cAAA;EACA,yBAAA;EACA,+BAAA;EACA,iBAAA;AACF;;AAGA;EACE,YAAA;AAAF;;AAIA;EACE,mBAAA;EACA,mBAAA;EACA,cAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EACA,UAAA;EACA,kBAAA;AADF;;AAKA;EACE,kBAAA;AAFF;;AAKA;EAEA,kBAAA;EACA,gBAAA;AAHA;;AAMA;EACE,eAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AAHF","sourcesContent":[".forgot-page {\r\n  background-image: url(\"/assets/images/login.png\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  height:100%;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n}\r\n\r\n.forgot-card {\r\n  position: fixed;\r\n  top: 41%;\r\n  left: 50%;\r\n  width: 432px;\r\n  height: 336px;\r\n  margin-top: -9em; /*set to a negative number 1/2 of your height*/\r\n  margin-left: -15em; /*set to a negative number 1/2 of your width*/\r\n  background: #3B4E6C;\r\n  border-radius: 62px;\r\n}\r\n\r\n#forms-fields {\r\n  color: #ffffff;\r\n  font-size:90%;\r\n}\r\n\r\n::placeholder {\r\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n  color: lightgrey;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 12px;\r\n}\r\n\r\n.card-view {\r\n  background: #3B4E6C;\r\n  border-radius: 62px;\r\n  width: 432px;\r\n  height: 336px;\r\n}\r\n\r\n.card-header {\r\n  color: #ffffff;\r\n  font-size: 23px;\r\n  border-bottom: 0px solid transparent;\r\n}\r\n\r\n.logo-view {\r\n  float: left;\r\n}\r\n\r\n.logo-image {\r\n  width: 70%;\r\n}\r\n\r\n.card-title {\r\n  float: right;\r\n  margin-top: 10px;\r\n  border-bottom: 1px !important;\r\n}\r\n\r\n.card-input {\r\n  background: #273848 !important;\r\n  color: #ffffff;\r\n  border-color: transparent;\r\n  border-block-end-color: #ffffff;\r\n  border-width: 1px;\r\n}\r\n \r\n \r\n.button-view {\r\n  float: right;\r\n}\r\n\r\n \r\n.reset-button {\r\n  background: #A92A23;\r\n  border-radius: 30px;\r\n  color: #ffffff;\r\n  border: 2px;\r\n  padding-left: 17px;\r\n  padding-right: 17px;\r\n  padding-top: 7px;\r\n  padding-bottom: 7px;\r\n  width: 80%;\r\n  margin-bottom: 2px;\r\n\r\n}\r\n \r\n.button-view {\r\n  text-align: center;\r\n}\r\n\r\n.logo-main\r\n{\r\ntext-align:center;\r\nmargin-top:10px;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 40px;\r\n  font-size:12px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 89693:
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".login-page {\n  background-image: url(\"/assets/images/login.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  background-attachment: fixed;\n  background-position: center;\n}\n\n.login-card {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  width: 432px;\n  height: 336px;\n  margin-top: -9em; /*set to a negative number 1/2 of your height*/\n  margin-left: -15em; /*set to a negative number 1/2 of your width*/\n}\n\n#forms-fields {\n  color: white;\n  text-transform: capitalize;\n  font-size: 90%;\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: lightgrey;\n  opacity: 1; /* Firefox */\n  font-size: 12px;\n}\n\n.card-view {\n  background: #3B4E6C;\n  border-radius: 62px;\n  width: 432px;\n  height: 380px;\n}\n\n.head-view {\n  float: left;\n  color: white;\n  font-style: normal;\n  margin-left: 40px;\n}\n\n.forgot-link {\n  color: #fcba16;\n  float: right;\n  text-decoration: underline;\n  margin-top: 0px;\n  font-size: 70%;\n}\n\n.sign-link {\n  color: #fcba16;\n  text-decoration: underline;\n  margin-top: 5px;\n}\n\n.button-view {\n  text-align: center;\n}\n\n.login-button {\n  background: #A92A23;\n  border-radius: 30px;\n  color: #ffffff;\n  border: 2px;\n  padding-left: 17px;\n  padding-right: 17px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  width: 80%;\n}\n\n.logo-main {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 40px;\n  font-size: 12px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/auth/login/login.component.scss"],"names":[],"mappings":"AAAA;EACE,iDAAA;EACA,4BAAA;EACA,sBAAA;EACA,YAAA;EACA,4BAAA;EACA,2BAAA;AACF;;AAEA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA,EAAA,8CAAA;EACA,kBAAA,EAAA,6CAAA;AACF;;AAEA;EACE,YAAA;EACA,0BAAA;EACA,cAAA;AACF;;AAEA;EACE,yCAAA;EACA,gBAAA;EACA,UAAA,EAAA,YAAA;EACA,eAAA;AACF;;AAEA;EACE,mBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;AACF;;AAGA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;AAAF;;AAGA;EACE,cAAA;EACA,YAAA;EAEA,0BAAA;EACA,eAAA;EACA,cAAA;AADF;;AAIA;EACE,cAAA;EACA,0BAAA;EACA,eAAA;AADF;;AAIA;EACE,kBAAA;AADF;;AAIA;EACE,mBAAA;EACA,mBAAA;EACA,cAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EACA,UAAA;AADF;;AAIA;EAEA,kBAAA;EACA,gBAAA;AAFA;;AAKA;EACE,eAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AAFF","sourcesContent":[".login-page {\r\n  background-image: url(\"/assets/images/login.png\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  height:100%;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n}\r\n\r\n.login-card {\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 50%;\r\n  width: 432px;\r\n  height: 336px;\r\n  margin-top: -9em; /*set to a negative number 1/2 of your height*/\r\n  margin-left: -15em; /*set to a negative number 1/2 of your width*/\r\n}\r\n\r\n#forms-fields {\r\n  color:white;\r\n  text-transform: capitalize;\r\n  font-size:90%;\r\n}\r\n\r\n::placeholder {\r\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n  color: lightgrey;\r\n  opacity: 1; /* Firefox */\r\n  font-size: 12px;\r\n}\r\n\r\n.card-view {\r\n  background: #3B4E6C;\r\n  border-radius: 62px;\r\n  width: 432px;\r\n  height: 380px;\r\n}\r\n\r\n\r\n.head-view {\r\n  float: left;\r\n  color: white;\r\n  font-style: normal;\r\n  margin-left: 40px;\r\n}\r\n \r\n.forgot-link {\r\n  color: #fcba16;\r\n  float:right;\r\n  //margin-left: 270px;\r\n  text-decoration: underline;\r\n  margin-top: 0px;\r\n  font-size:70%;\r\n}\r\n\r\n.sign-link{\r\n  color: #fcba16;\r\n  text-decoration: underline;\r\n  margin-top: 5px;\r\n}\r\n \r\n.button-view {\r\n  text-align: center;\r\n}\r\n\r\n.login-button {\r\n  background: #A92A23;\r\n  border-radius: 30px;\r\n  color: #ffffff;\r\n  border: 2px;\r\n  padding-left: 17px;\r\n  padding-right: 17px;\r\n  padding-top: 7px;\r\n  padding-bottom: 7px;\r\n  width: 80%;\r\n}\r\n \r\n.logo-main\r\n{\r\ntext-align:center;\r\nmargin-top:10px;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 40px;\r\n  font-size:12px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6988:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mat-form-field {\n  color: #3c4f6d;\n  padding: 0px 25px;\n  margin-bottom: 30px;\n}\n\n.breadcrumb-view {\n  width: 100%;\n  background-size: cover;\n  padding: 20px;\n  padding-top: 120px;\n}\n\n.btn_sec button {\n  margin-left: 10px;\n  width: 110px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/change-password/change-password.component.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,iBAAA;EACA,mBAAA;AACJ;;AACA;EACI,WAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;AAEJ;;AAAA;EACI,iBAAA;EACA,YAAA;AAGJ","sourcesContent":[".mat-form-field {\r\n    color: #3c4f6d;\r\n    padding: 0px 25px;\r\n    margin-bottom: 30px;\r\n}\r\n.breadcrumb-view {\r\n    width: 100%;\r\n    background-size: cover;\r\n    padding: 20px;\r\n    padding-top: 120px;\r\n}\r\n.btn_sec button {\r\n    margin-left: 10px;\r\n    width: 110px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 19161:
/*!************************************************************************************!*\
  !*** ./src/app/pages/gropus/aggregate-pdf/aggregate-pdf.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "table {\n  width: 100%;\n  border-collapse: collapse;\n  border: 2px solid #ccc;\n}\n\nth, td {\n  padding: 8px;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n}\n\nth {\n  background-color: #00d0ff;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n.logo-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.logo-cell {\n  width: 30%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  vertical-align: middle;\n}\n\n.logo-svg {\n  max-width: 30%;\n  height: auto;\n  display: block;\n  margin: 0 auto;\n}\n\n.text-cell {\n  width: 70%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  vertical-align: middle;\n}\n\n.mat-card {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 8px;\n  border-radius: 4px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/gropus/aggregate-pdf/aggregate-pdf.component.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,yBAAA;EACA,sBAAA;AACJ;;AAEE;EACE,YAAA;EACA,gBAAA;EACA,6BAAA;AACJ;;AAEE;EACE,yBAAA;AACJ;;AAEE;EACE,yBAAA;AACJ;;AAEE;EACE,WAAA;EACA,yBAAA;AACJ;;AAEE;EACE,UAAA;EACA,aAAA;EACA,sBAAA;EACA,sBAAA;AACJ;;AAEE;EACE,cAAA;EACA,YAAA;EACA,cAAA;EACA,cAAA;AACJ;;AAEE;EACE,UAAA;EACA,aAAA;EACA,sBAAA;EACA,sBAAA;AACJ;;AAEE;EACE,yDAAA;EACA,cAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;AACJ","sourcesContent":["table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    border: 2px solid #ccc;\r\n  }\r\n  \r\n  th, td {\r\n    padding: 8px;\r\n    text-align: left;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n  \r\n  th {\r\n    background-color: #00d0ff;\r\n  }\r\n  \r\n  tr:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n  }\r\n\r\n  .logo-table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n  }\r\n  \r\n  .logo-cell {\r\n    width: 30%;\r\n    padding: 10px;\r\n    border: 1px solid #ccc;\r\n    vertical-align: middle;\r\n  }\r\n  \r\n  .logo-svg {\r\n    max-width: 30%;\r\n    height: auto;\r\n    display: block;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .text-cell {\r\n    width: 70%;\r\n    padding: 10px;\r\n    border: 1px solid #ccc;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  .mat-card {\r\n    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    display: block;\r\n    position: relative;\r\n    padding: 8px;\r\n    border-radius: 4px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 50587:
/*!**********************************************************************!*\
  !*** ./src/app/pages/gropus/questions-pdf.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "table {\n  width: 100%;\n  border-collapse: collapse;\n  border: 2px solid #ccc;\n}\n\nth, td {\n  padding: 8px;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n}\n\nth {\n  background-color: #00d0ff;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n.logo-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.logo-cell {\n  width: 30%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  vertical-align: middle;\n}\n\n.logo-svg {\n  max-width: 30%;\n  height: auto;\n  display: block;\n  margin: 0 auto;\n}\n\n.text-cell {\n  width: 70%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  vertical-align: middle;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/gropus/questions-pdf.component.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,yBAAA;EACA,sBAAA;AACJ;;AAEE;EACE,YAAA;EACA,gBAAA;EACA,6BAAA;AACJ;;AAEE;EACE,yBAAA;AACJ;;AAEE;EACE,yBAAA;AACJ;;AAEE;EACE,WAAA;EACA,yBAAA;AACJ;;AAEE;EACE,UAAA;EACA,aAAA;EACA,sBAAA;EACA,sBAAA;AACJ;;AAEE;EACE,cAAA;EACA,YAAA;EACA,cAAA;EACA,cAAA;AACJ;;AAEE;EACE,UAAA;EACA,aAAA;EACA,sBAAA;EACA,sBAAA;AACJ","sourcesContent":["table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    border: 2px solid #ccc;\r\n  }\r\n  \r\n  th, td {\r\n    padding: 8px;\r\n    text-align: left;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n  \r\n  th {\r\n    background-color: #00d0ff;\r\n  }\r\n  \r\n  tr:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n  }\r\n\r\n  .logo-table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n  }\r\n  \r\n  .logo-cell {\r\n    width: 30%;\r\n    padding: 10px;\r\n    border: 1px solid #ccc;\r\n    vertical-align: middle;\r\n  }\r\n  \r\n  .logo-svg {\r\n    max-width: 30%;\r\n    height: auto;\r\n    display: block;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .text-cell {\r\n    width: 70%;\r\n    padding: 10px;\r\n    border: 1px solid #ccc;\r\n    vertical-align: middle;\r\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 54983:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/gropus/respondant-pdf/respondant-pdf.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "table {\n  width: 100%;\n  border-collapse: collapse;\n  border: 2px solid #ccc;\n}\n\nth, td {\n  padding: 8px;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n}\n\nth {\n  background-color: #00d0ff;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n.logo-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.logo-cell {\n  width: 30%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  vertical-align: middle;\n}\n\n.logo-svg {\n  max-width: 30%;\n  height: auto;\n  display: block;\n  margin: 0 auto;\n}\n\n.text-cell {\n  width: 70%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  vertical-align: middle;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/gropus/respondant-pdf/respondant-pdf.component.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,yBAAA;EACA,sBAAA;AACJ;;AAEE;EACE,YAAA;EACA,gBAAA;EACA,6BAAA;AACJ;;AAEE;EACE,yBAAA;AACJ;;AAEE;EACE,yBAAA;AACJ;;AAEE;EACE,WAAA;EACA,yBAAA;AACJ;;AAEE;EACE,UAAA;EACA,aAAA;EACA,sBAAA;EACA,sBAAA;AACJ;;AAEE;EACE,cAAA;EACA,YAAA;EACA,cAAA;EACA,cAAA;AACJ;;AAEE;EACE,UAAA;EACA,aAAA;EACA,sBAAA;EACA,sBAAA;AACJ","sourcesContent":["table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    border: 2px solid #ccc;\r\n  }\r\n  \r\n  th, td {\r\n    padding: 8px;\r\n    text-align: left;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n  \r\n  th {\r\n    background-color: #00d0ff;\r\n  }\r\n  \r\n  tr:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n  }\r\n\r\n  .logo-table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n  }\r\n  \r\n  .logo-cell {\r\n    width: 30%;\r\n    padding: 10px;\r\n    border: 1px solid #ccc;\r\n    vertical-align: middle;\r\n  }\r\n  \r\n  .logo-svg {\r\n    max-width: 30%;\r\n    height: auto;\r\n    display: block;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .text-cell {\r\n    width: 70%;\r\n    padding: 10px;\r\n    border: 1px solid #ccc;\r\n    vertical-align: middle;\r\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 68204:
/*!*********************************************************************!*\
  !*** ./src/app/pages/gropus/response-pdf.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* dynamic-table.component.css */\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  border: 2px solid #ccc;\n}\n\nth, td {\n  padding: 8px;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n}\n\nth {\n  background-color: #00d0ff;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n.logo-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.logo-cell {\n  width: 30%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  vertical-align: middle;\n}\n\n.logo-svg {\n  max-width: 30%;\n  height: auto;\n  display: block;\n  margin: 0 auto;\n}\n\n.text-cell {\n  width: 70%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  vertical-align: middle;\n}\n\n.text-content {\n  text-align: start;\n  font-weight: bold;\n  margin-bottom: 0px !important;\n  margin-left: 30px;\n}\n\n.file-upload {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n}\n\n.header {\n  font-weight: bold;\n  font-size: 20px;\n  position: relative;\n  left: 10px;\n}\n\n.subcontent {\n  position: relative;\n  left: 20px;\n}\n\n/* Style for the popup */\n.popup {\n  display: none;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 20px;\n  background-color: #fff;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/gropus/response-pdf.component.scss"],"names":[],"mappings":"AAEA,gCAAA;AAEA;EACE,WAAA;EACA,yBAAA;EACA,sBAAA;AAFF;;AAKA;EACE,YAAA;EACA,gBAAA;EACA,6BAAA;AAFF;;AAKA;EACE,yBAAA;AAFF;;AAKA;EACE,yBAAA;AAFF;;AAQA;EACE,WAAA;EACA,yBAAA;AALF;;AAQA;EACE,UAAA;EACA,aAAA;EACA,sBAAA;EACA,sBAAA;AALF;;AAQA;EACE,cAAA;EACA,YAAA;EACA,cAAA;EACA,cAAA;AALF;;AAQA;EACE,UAAA;EACA,aAAA;EACA,sBAAA;EACA,sBAAA;AALF;;AAQA;EACE,iBAAA;EACA,iBAAA;EACA,6BAAA;EACA,iBAAA;AALF;;AAQA;EACE,qBAAA;EACA,kBAAA;EACA,eAAA;AALF;;AAOA;EACE,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;AAJF;;AAOA;EACE,kBAAA;EACA,UAAA;AAJF;;AAOA,wBAAA;AACA;EACA,aAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,aAAA;EACA,sBAAA;EACA,2CAAA;EACA,aAAA;AAJA","sourcesContent":["\r\n\r\n/* dynamic-table.component.css */\r\n\r\ntable {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  border: 2px solid #ccc;\r\n}\r\n\r\nth, td {\r\n  padding: 8px;\r\n  text-align: left;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\nth {\r\n  background-color: #00d0ff;\r\n}\r\n\r\ntr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n\r\n\r\n.logo-table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n}\r\n\r\n.logo-cell {\r\n  width: 30%;\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  vertical-align: middle;\r\n}\r\n\r\n.logo-svg {\r\n  max-width: 30%;\r\n  height: auto;\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n\r\n.text-cell {\r\n  width: 70%;\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  vertical-align: middle;\r\n}\r\n\r\n.text-content {\r\n  text-align: start;\r\n  font-weight: bold;\r\n  margin-bottom: 0px !important;\r\n  margin-left: 30px;\r\n}\r\n\r\n.file-upload {\r\n  display: inline-block;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.header {\r\n  font-weight: bold; \r\n  font-size: 20px;\r\n  position: relative;\r\n  left: 10px;\r\n}\r\n\r\n.subcontent{\r\n  position: relative;\r\n  left: 20px;\r\n}\r\n\r\n/* Style for the popup */\r\n.popup {\r\ndisplay: none;\r\nposition: fixed;\r\ntop: 50%;\r\nleft: 50%;\r\ntransform: translate(-50%, -50%);\r\npadding: 20px;\r\nbackground-color: #fff;\r\nbox-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\r\nz-index: 1000;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 50073:
/*!*************************************************************************!*\
  !*** ./src/app/pages/master-page/master-page.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".app-layout {\n  height: 100vh;\n}\n\nmat-sidenav-container,\nmat-sidenav-content,\nmat-sidenav {\n  height: 100%;\n}\n\nmat-sidenav {\n  width: 250px;\n}\n\n.sidebar-logo {\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s;\n}\n\n.app-header {\n  position: relative;\n  padding: 0;\n  background: #3b4f6a;\n  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\n}\n\n.sidebar-lists {\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.list-title {\n  color: #fff;\n}\n\n.mat-nav-list a.is-active {\n  background: #fff;\n  color: #a92a23 !important;\n  border-left: 3px solid #a92a23 !important;\n}\n\n.username-show label {\n  color: #fff;\n  display: block;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  line-height: 8px;\n  font-size: 15px;\n  text-align: right;\n}\n\n.username-show small {\n  color: #90a0b7;\n  font-size: 12px;\n  font-weight: normal;\n}\n\n.notifications {\n  border-left: 1px solid #95a1b1;\n  margin-left: 10px;\n}\n\n.mat-nav-list .mat-list-item {\n  height: auto;\n  text-align: center;\n  padding: 10px;\n  color: #b4b4b4;\n}\n\nimg.non-active,\nimg.now-active {\n  margin: 10px auto;\n}\n\na.list-title.mat-list-item img.non-active {\n  display: block;\n}\n\na.list-title.mat-list-item img.now-active {\n  display: none;\n}\n\na.list-title.mat-list-item.is-active img.now-active {\n  display: block;\n}\n\na.list-title.mat-list-item.is-active img.non-active {\n  display: none;\n}\n\na.list-title.mat-list-item.is-active img.now-active img.non-active {\n  display: none;\n}\n\n.footer {\n  position: fixed;\n  z-index: 1;\n  bottom: 0;\n  width: calc(100% - 176px);\n  height: 40px;\n  background-color: #3b4f6a;\n  color: white;\n  margin: 0px;\n  text-align: center;\n  line-height: 40px;\n}\n\n.content {\n  position: absolute;\n  background-color: lightcoral;\n  width: 98%;\n  border: 1px solid black;\n  margin: 5px;\n  bottom: -50px;\n  height: 80%;\n  max-height: 80%;\n}\n\n.has-search .form-control-feedback {\n  position: absolute;\n  z-index: 2;\n  display: block;\n  width: 2.375rem;\n  height: 2.375rem;\n  line-height: 2.375rem;\n  text-align: center;\n  pointer-events: none;\n  color: #aaa;\n}\n\n.logo-main {\n  height: 60%;\n  width: 60%;\n  margin: 0 auto;\n  display: table;\n}\n\n.form-group.has-search input.form-control {\n  background-color: transparent;\n  border: 0;\n  text-indent: 31px;\n  margin-top: 20px;\n  color: #fff !important;\n  outline: none;\n  box-shadow: none !important;\n}\n\n.form-group.has-search input.form-control::-webkit-input-placeholder {\n  color: #fff;\n}\n\n.yesbutton {\n  background: #dedede;\n  color: grey;\n  border-radius: 56px;\n  padding-left: 40px;\n  padding-right: 40px;\n  margin-right: 30px;\n}\n\n.yesbutton:focus {\n  outline: none;\n}\n\n.version {\n  text-align: center;\n  color: white;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  margin-bottom: 5px;\n}\n\n@media (max-width: 1199px) {\n  .footer {\n    width: calc(100% - 150px);\n  }\n}\n@media (max-width: 1024px) {\n  .tab-w-150 {\n    width: 150px !important;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/pages/master-page/master-page.component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;AACF;;AAEA;;;EAGE,YAAA;AACF;;AAEA;EACE,YAAA;AACF;;AAEA;EACE,kBAAA;EACA,gBAAA;EACA,oBAAA;AACF;;AAEA;EACE,kBAAA;EAEA,UAAA;EACA,mBAAA;EACA,2CAAA;AAAF;;AAKA;EACE,aAAA;EACA,4BAAA;EACA,sBAAA;EACA,2BAAA;AAFF;;AAIA;EACE,eAAA;AADF;;AAIA;EACE,cAAA;AADF;;AAGA;EACE,WAAA;AAAF;;AAEA;EACE,gBAAA;EACA,yBAAA;EACA,yCAAA;AACF;;AACA;EACE,WAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AAEF;;AACA;EACE,cAAA;EACA,eAAA;EACA,mBAAA;AAEF;;AAAA;EACE,8BAAA;EAEA,iBAAA;AAEF;;AACA;EACE,YAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;AAEF;;AACA;;EAEE,iBAAA;AAEF;;AACA;EACE,cAAA;AAEF;;AACA;EACE,aAAA;AAEF;;AAAA;EACE,cAAA;AAGF;;AADA;EACE,aAAA;AAIF;;AADA;EACE,aAAA;AAIF;;AAFA;EACE,eAAA;EACA,UAAA;EACA,SAAA;EACA,yBAAA;EACA,YAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;AAKF;;AAHA;EACE,kBAAA;EACA,4BAAA;EACA,UAAA;EACA,uBAAA;EACA,WAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;AAMF;;AAHA;EACE,kBAAA;EACA,UAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,kBAAA;EACA,oBAAA;EACA,WAAA;AAMF;;AAJA;EACE,WAAA;EACA,UAAA;EACA,cAAA;EACA,cAAA;AAOF;;AAJA;EACE,6BAAA;EACA,SAAA;EACA,iBAAA;EACA,gBAAA;EACA,sBAAA;EACA,aAAA;EACA,2BAAA;AAOF;;AALA;EACE,WAAA;AAQF;;AALA;EACE,mBAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;AAQF;;AAHA;EACE,aAAA;AAMF;;AAHA;EACE,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,OAAA;EACA,kBAAA;AAMF;;AAJA;EACE;IACC,yBAAA;EAOD;AACF;AALA;EACE;IACE,uBAAA;EAOF;AACF","sourcesContent":[".app-layout {\r\n  height: 100vh;\r\n}\r\n\r\nmat-sidenav-container,\r\nmat-sidenav-content,\r\nmat-sidenav {\r\n  height: 100%;\r\n}\r\n\r\nmat-sidenav {\r\n  width: 250px;\r\n}\r\n\r\n.sidebar-logo {\r\n  position: relative;\r\n  overflow: hidden;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.app-header {\r\n  position: relative;\r\n  //height: 84px;\r\n  padding: 0;\r\n  background: #3b4f6a;\r\n  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\r\n}\r\n// .mat-toolbar-multiple-rows, .mat-toolbar-row, .mat-toolbar-single-row{\r\n//   min-height: 84px;\r\n// }\r\n.sidebar-lists {\r\n  height: 100vh;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n.example-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n.list-title {\r\n  color: #fff;\r\n}\r\n.mat-nav-list a.is-active {\r\n  background: #fff;\r\n  color: #a92a23 !important;\r\n  border-left: 3px solid #a92a23 !important;\r\n}\r\n.username-show label {\r\n  color: #fff;\r\n  display: block;\r\n  margin-bottom: 0px;\r\n  margin-top: 10px;\r\n  line-height: 8px;\r\n  font-size: 15px;\r\n  text-align: right;\r\n}\r\n\r\n.username-show small {\r\n  color: #90a0b7;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n}\r\n.notifications {\r\n  border-left: 1px solid #95a1b1;\r\n  // padding-left: 16px;\r\n  margin-left: 10px;\r\n}\r\n//  user list page\r\n.mat-nav-list .mat-list-item {\r\n  height: auto;\r\n  text-align: center;\r\n  padding: 10px;\r\n  color: #b4b4b4;\r\n}\r\n\r\nimg.non-active,\r\nimg.now-active {\r\n  margin: 10px auto;\r\n}\r\n\r\na.list-title.mat-list-item img.non-active {\r\n  display: block;\r\n}\r\n\r\na.list-title.mat-list-item img.now-active {\r\n  display: none;\r\n}\r\na.list-title.mat-list-item.is-active img.now-active {\r\n  display: block;\r\n}\r\na.list-title.mat-list-item.is-active img.non-active {\r\n  display: none;\r\n}\r\n\r\na.list-title.mat-list-item.is-active img.now-active img.non-active {\r\n  display: none;\r\n}\r\n.footer {\r\n  position: fixed;\r\n  z-index: 1;\r\n  bottom: 0;\r\n  width: calc(100% - 176px);\r\n  height: 40px;\r\n  background-color: #3b4f6a;\r\n  color: white;\r\n  margin: 0px;\r\n  text-align: center;\r\n  line-height: 40px;\r\n}\r\n.content {\r\n  position: absolute;\r\n  background-color: lightcoral;\r\n  width: 98%;\r\n  border: 1px solid black;\r\n  margin: 5px;\r\n  bottom: -50px;\r\n  height: 80%;\r\n  max-height: 80%;\r\n}\r\n// header search\r\n.has-search .form-control-feedback {\r\n  position: absolute;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 2.375rem;\r\n  height: 2.375rem;\r\n  line-height: 2.375rem;\r\n  text-align: center;\r\n  pointer-events: none;\r\n  color: #aaa;\r\n}\r\n.logo-main {\r\n  height: 60%;\r\n  width: 60%;\r\n  margin: 0 auto;\r\n  display: table;\r\n}\r\n\r\n.form-group.has-search input.form-control {\r\n  background-color: transparent;\r\n  border: 0;\r\n  text-indent: 31px;\r\n  margin-top: 20px;\r\n  color: #fff !important;\r\n  outline: none;\r\n  box-shadow: none !important;\r\n}\r\n.form-group.has-search input.form-control::-webkit-input-placeholder {\r\n  color: #fff;\r\n}\r\n\r\n.yesbutton {\r\n  background: #dedede;\r\n  color: grey;\r\n  border-radius: 56px;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  margin-right: 30px;\r\n  // padding-top: 4px;\r\n  // padding-bottom: 4px;\r\n}\r\n\r\n.yesbutton:focus {\r\n  outline: none;\r\n}\r\n\r\n.version {\r\n  text-align: center;\r\n  color: white;\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  left: 0;\r\n  margin-bottom: 5px;\r\n}\r\n@media (max-width: 1199px) {\r\n  .footer{\r\n   width: calc(100% - 150px);\r\n  }\r\n}\r\n@media (max-width: 1024px) {\r\n  .tab-w-150 {\r\n    width: 150px !important;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 50648:
/*!***************************************************************************!*\
  !*** ./src/app/pages/notification/notification.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.submitbtn {\n  width: 132px;\n  height: 39px;\n  border-radius: 20px;\n  background-color: #A92A23;\n  color: #ffffff;\n  font-size: 16px;\n  border: none;\n}\n\n.totalContent {\n  margin: 0px 150px 0px;\n}\n\n.button-save {\n  margin: 0 auto 0;\n  width: 100px;\n  border-radius: 20px;\n  background-color: rgb(187, 34, 34);\n  color: #fff;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/notification/notification.component.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,uBAAA;EACA,gBAAA;AACJ;;AACI;EACI,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;EACA,YAAA;AAER;;AAAA;EACA,qBAAA;AAGA;;AAAA;EACI,gBAAA;EACA,YAAA;EACA,mBAAA;EACA,kCAAA;EACA,WAAA;AAGJ","sourcesContent":[".footer{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 20px;\r\n    }\r\n    .submitbtn{\r\n        width: 132px;\r\n        height: 39px;\r\n        border-radius: 20px;\r\n        background-color: #A92A23;\r\n        color: #ffffff;\r\n        font-size: 16px;\r\n        border: none;\r\n}\r\n.totalContent{\r\nmargin: 0px 150px 0px;\r\n}\r\n\r\n.button-save {\r\n    margin: 0 auto 0;\r\n    width: 100px;\r\n    border-radius: 20px;\r\n    background-color: rgb(187, 34, 34);\r\n    color: #fff;\r\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 63735:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/update-profile/update-profile.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button {\n  margin-left: 8px;\n}\n\n.breadcrumb-view {\n  width: 100%;\n  background-size: cover;\n  padding: 20px;\n  padding-top: 120px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/update-profile/update-profile.component.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;AACF;;AAEA;EACE,WAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;AACF","sourcesContent":["button {\r\n  margin-left: 8px;\r\n}\r\n\r\n.breadcrumb-view {\r\n  width: 100%;\r\n  background-size: cover;\r\n  padding: 20px;\r\n  padding-top: 120px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 38480:
/*!*******************************************************************!*\
  !*** ./src/app/pages/user/user-details.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button {\n  margin-left: 8px;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.breadcrumb-view {\n  width: 100%;\n  background-size: cover;\n  padding: 20px;\n  padding-top: 120px;\n}\n\n.pic-head {\n  font-style: normal;\n  color: #263238;\n  font-size: 22px;\n  font-weight: 600;\n  padding: 20px 0px;\n}\n\n.col-lg-9 .pic-head {\n  padding-left: 12px;\n}\n\n#profile-pic img {\n  background: #fff;\n  width: 74px;\n  height: 74px;\n  cursor: pointer;\n  margin-bottom: 15px;\n}\n\n#profile-pic .col-lg-6 {\n  font-size: 18px;\n  margin-bottom: 30px;\n}\n\n.profile-img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n.img-files:after {\n  content: \"Change Picture\";\n  position: absolute;\n  top: 45%;\n  left: 20%;\n  font-size: 12px;\n  opacity: 0;\n  color: #fff;\n  font-weight: 500;\n}\n\n.profile-picture {\n  width: 150px;\n  margin: 0 auto;\n  position: relative;\n}\n\n.img-files:hover:after,\n.img-files:hover:before {\n  opacity: 1;\n}\n\n.img-files input {\n  position: absolute;\n  top: 4px;\n  z-index: 99999;\n  opacity: 0;\n  height: 50px !important;\n  width: 50px !important;\n  cursor: pointer;\n}\n\n.img-files:before {\n  content: \"\";\n  background: rgba(35, 41, 55, 0.42);\n  width: 150px;\n  height: 150px;\n  position: absolute;\n  top: 0px;\n  border-radius: 50%;\n  opacity: 0;\n  left: 0;\n}\n\n.label-down mat-label {\n  display: block;\n}\n\n.mat-form-field {\n  margin-bottom: 5px;\n}\n\n#divBn {\n  border-left: 1px solid #ebedf0;\n}\n\n.btn_sec button {\n  margin-left: 10px;\n  width: 110px;\n}\n\n@media (max-width: 1440px) {\n  .img-files:before {\n    right: 30%;\n  }\n}\n@media (max-width: 991px) {\n  #divR-no h2,\n  .col-lg-3 .pic-head {\n    padding-left: 12px;\n  }\n  .permission_sec {\n    padding-left: 30px;\n  }\n  .permission_sec .pic-head {\n    padding-left: 0px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/pages/user/user-details.component.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;AACF;;AACA;EACE,aAAA;AAEF;;AACA;EACE,WAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;AAEF;;AAqGA;EACE,kBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAlGF;;AAoGA;EACE,kBAAA;AAjGF;;AAmGA;EACE,gBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,mBAAA;AAhGF;;AAkGA;EACE,eAAA;EACA,mBAAA;AA/FF;;AAiGA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;AA9FF;;AAgGA;EACE,yBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,eAAA;EACA,UAAA;EACA,WAAA;EACA,gBAAA;AA7FF;;AA+FA;EACE,YAAA;EACA,cAAA;EACA,kBAAA;AA5FF;;AA8FA;;EAEE,UAAA;AA3FF;;AA6FA;EACE,kBAAA;EACA,QAAA;EACA,cAAA;EACA,UAAA;EACA,uBAAA;EACA,sBAAA;EACA,eAAA;AA1FF;;AA4FA;EACE,WAAA;EACA,kCAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,QAAA;EACA,kBAAA;EACA,UAAA;EACA,OAAA;AAzFF;;AA2FA;EACE,cAAA;AAxFF;;AA0FA;EACE,kBAAA;AAvFF;;AAyFA;EACE,8BAAA;AAtFF;;AAwFA;EACE,iBAAA;EACA,YAAA;AArFF;;AAuFA;EACE;IACE,UAAA;EApFF;AACF;AAsFA;EACE;;IAEE,kBAAA;EApFF;EAsFA;IACE,kBAAA;EApFF;EAsFA;IACE,iBAAA;EApFF;AACF","sourcesContent":["button {\r\n  margin-left: 8px;\r\n}\r\nbutton:focus {\r\n  outline: none;\r\n}\r\n\r\n.breadcrumb-view {\r\n  width: 100%;\r\n  background-size: cover;\r\n  padding: 20px;\r\n  padding-top: 120px;\r\n}\r\n\r\n// #P-Content\r\n// {\r\n\r\n//     position: relative;\r\n//     height: 200px;\r\n// }\r\n\r\n// #divP\r\n// {\r\n\r\n//     position: absolute;\r\n//     margin-right: 25px;\r\n//     left: 5px;\r\n//     top: 5px;\r\n//     bottom: 5px;\r\n//     right: 70%;\r\n// }\r\n\r\n// #divB\r\n// {\r\n\r\n//     position: absolute;\r\n//     right: 5px;\r\n//     top: 5px;\r\n//     bottom: 5px;\r\n//     left: 30%;\r\n//     margin-left: 25px;\r\n// }\r\n// #ContentR\r\n// {\r\n\r\n//     position: relative;\r\n//     height: 300px;\r\n// }\r\n\r\n// #divR\r\n// {\r\n\r\n//     position: absolute;\r\n//     margin-right: 25px;\r\n//     left: 5px;\r\n//     top: 5px;\r\n//     bottom: 5px;\r\n//     right: 70%;\r\n// }\r\n\r\n// #divL\r\n// {\r\n\r\n//     position: absolute;\r\n//     right: 5px;\r\n//     top: 5px;\r\n//     bottom: 5px;\r\n//     left: 30%;\r\n//     margin-left: 25px;\r\n// }\r\n\r\n// #profile-pic\r\n// {\r\n\r\n//     position: relative;\r\n//     height: 150px;\r\n// }\r\n\r\n// #profA\r\n// {\r\n\r\n//     position: absolute;\r\n//     margin-right: 25px;\r\n//     left: 5px;\r\n//     top: 5px;\r\n//     bottom: 5px;\r\n//     right: 70%;\r\n// }\r\n\r\n// #profB\r\n// {\r\n\r\n//     position: absolute;\r\n//     margin-right: 25px;\r\n//     left: 130px;\r\n//     top: 5px;\r\n//     bottom: 5px;\r\n//     right: 70%;\r\n// }\r\n// #profC\r\n// {\r\n\r\n//     position: absolute;\r\n//     margin-right: 25px;\r\n//     left: 5px;\r\n//     top: 5px;\r\n//     bottom: 5px;\r\n//     right: 70%;\r\n// }\r\n\r\n// .example-quater-width{\r\n//     width:300px;\r\n// }\r\n\r\n.pic-head {\r\n  font-style: normal;\r\n  color: #263238;\r\n  font-size: 22px;\r\n  font-weight: 600;\r\n  padding: 20px 0px;\r\n}\r\n.col-lg-9 .pic-head {\r\n  padding-left: 12px;\r\n}\r\n#profile-pic img {\r\n  background: #fff;\r\n  width: 74px;\r\n  height: 74px;\r\n  cursor: pointer;\r\n  margin-bottom: 15px;\r\n}\r\n#profile-pic .col-lg-6 {\r\n  font-size: 18px;\r\n  margin-bottom: 30px;\r\n}\r\n.profile-img {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 50%;\r\n  object-fit: cover;\r\n}\r\n.img-files:after {\r\n  content: \"Change Picture\";\r\n  position: absolute;\r\n  top: 45%;\r\n  left: 20%;\r\n  font-size: 12px;\r\n  opacity: 0;\r\n  color: #fff;\r\n  font-weight: 500;\r\n}\r\n.profile-picture {\r\n  width: 150px;\r\n  margin: 0 auto;\r\n  position: relative;\r\n}\r\n.img-files:hover:after,\r\n.img-files:hover:before {\r\n  opacity: 1;\r\n}\r\n.img-files input {\r\n  position: absolute;\r\n  top: 4px;\r\n  z-index: 99999;\r\n  opacity: 0;\r\n  height: 50px !important;\r\n  width: 50px !important;\r\n  cursor: pointer;\r\n}\r\n.img-files:before {\r\n  content: \"\";\r\n  background: rgba(35, 41, 55, 0.42);\r\n  width: 150px;\r\n  height: 150px;\r\n  position: absolute;\r\n  top: 0px;\r\n  border-radius: 50%;\r\n  opacity: 0;\r\n  left: 0;\r\n}\r\n.label-down mat-label {\r\n  display: block;\r\n}\r\n.mat-form-field {\r\n  margin-bottom: 5px;\r\n}\r\n#divBn {\r\n  border-left: 1px solid #ebedf0;\r\n}\r\n.btn_sec button {\r\n  margin-left: 10px;\r\n  width: 110px;\r\n}\r\n@media (max-width: 1440px) {\r\n  .img-files:before {\r\n    right: 30%;\r\n  }\r\n}\r\n@media (max-width: 991px) {\r\n  #divR-no h2,\r\n  .col-lg-3 .pic-head {\r\n    padding-left: 12px;\r\n  }\r\n  .permission_sec {\r\n    padding-left: 30px;\r\n  }\r\n  .permission_sec .pic-head {\r\n    padding-left: 0px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 17038:
/*!****************************************************************!*\
  !*** ./src/app/pages/user/user-list.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".export-button div {\n  padding-bottom: 20px;\n  float: right;\n}\n\n.users-list {\n  margin-top: 52px;\n}\n\n.create-button {\n  background: #fcba16;\n  color: #ffffff;\n  border: 2px;\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  float: right;\n}\n\n.breadcrumb-view {\n  width: 100%;\n  background-size: cover;\n  padding: 20px;\n  padding-top: 120px;\n}\n\n.table-view {\n  margin: 20px;\n  height: 100%;\n  padding-top: 10px;\n}\n\n.ant-table-thead > tr > th,\n.ant-table-tbody > tr > td {\n  padding: 10px 10px;\n}\n\n.mat-form-field {\n  font-size: 14px;\n}\n\n.table-header {\n  color: #000;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.user-profile {\n  background: #fff;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  margin-right: 12px;\n}\n\n.mat-form-field {\n  margin-bottom: 0px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/user/user-list.component.scss"],"names":[],"mappings":"AAAA;EACE,oBAAA;EACA,YAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,mBAAA;EACA,cAAA;EACA,WAAA;EACA,sEAAA;EACA,YAAA;AACF;;AAEA;EACE,WAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;AACF;;AAEA;EACE,YAAA;EACA,YAAA;EACA,iBAAA;AACF;;AAEA;;EAEE,kBAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,WAAA;EACA,iBAAA;EACA,eAAA;AACF;;AAEA;EACE,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;AACF;;AACA;EACE,kBAAA;AAEF","sourcesContent":[".export-button div {\r\n  padding-bottom: 20px;\r\n  float: right;\r\n}\r\n\r\n.users-list {\r\n  margin-top: 52px;\r\n}\r\n\r\n.create-button {\r\n  background: #fcba16;\r\n  color: #ffffff;\r\n  border: 2px;\r\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\r\n  float: right;\r\n}\r\n\r\n.breadcrumb-view {\r\n  width: 100%;\r\n  background-size: cover;\r\n  padding: 20px;\r\n  padding-top: 120px;\r\n}\r\n\r\n.table-view {\r\n  margin: 20px;\r\n  height: 100%;\r\n  padding-top: 10px;\r\n}\r\n\r\n.ant-table-thead > tr > th,\r\n.ant-table-tbody > tr > td {\r\n  padding: 10px 10px;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n}\r\n\r\n.table-header {\r\n  color: #000;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n}\r\n\r\n.user-profile {\r\n  background: #fff;\r\n  border-radius: 50%;\r\n  width: 40px;\r\n  height: 40px;\r\n  cursor: pointer;\r\n  margin-right: 12px;\r\n}\r\n.mat-form-field{\r\n  margin-bottom: 0px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 14933:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/add-participation/add-participation.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popupclosebutton {\n  background-color: #a92a23;\n  height: 40px;\n  width: 40px;\n  border-radius: 70px;\n  position: absolute;\n  top: -26px;\n  right: -18px;\n  padding: 9px;\n  color: white;\n  font-size: x-large;\n  font-weight: 800;\n  left: auto;\n  cursor: pointer;\n}\n\n.addButton {\n  float: right;\n  background: #3d506e;\n  margin-right: 50px;\n  color: #fff;\n  border-radius: 72px;\n  padding: 0.2px 7px 2px 8px;\n}\n\n.part-head {\n  color: #a92a23;\n  margin-left: 40px;\n}\n\n.quater-width {\n  width: 25%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.btn_sec button {\n  margin-left: 30px;\n  width: 110px;\n}", "",{"version":3,"sources":["webpack://./src/app/shared/add-participation/add-participation.component.scss"],"names":[],"mappings":"AAAA;EACI,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,UAAA;EACA,eAAA;AACJ;;AAEA;EACI,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,0BAAA;AACJ;;AAEA;EACI,cAAA;EACA,iBAAA;AACJ;;AAEA;EACI,UAAA;EACA,mBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,iBAAA;EACA,YAAA;AACJ","sourcesContent":[".popupclosebutton {\r\n    background-color: #a92a23;\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 70px;\r\n    position: absolute;\r\n    top: -26px;\r\n    right: -18px;\r\n    padding: 9px;\r\n    color: white;\r\n    font-size: x-large;\r\n    font-weight: 800;\r\n    left: auto;\r\n    cursor: pointer;\r\n}\r\n\r\n.addButton {\r\n    float: right;\r\n    background: #3d506e;\r\n    margin-right: 50px;\r\n    color: #fff;\r\n    border-radius: 72px;\r\n    padding: 0.2px 7px 2px 8px;\r\n}\r\n\r\n.part-head {\r\n    color: #a92a23;\r\n    margin-left: 40px;\r\n}\r\n\r\n.quater-width {\r\n    width: 25%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n}\r\n\r\n.btn_sec button {\r\n    margin-left: 30px;\r\n    width: 110px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 15569:
/*!********************************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".yesbutton {\n  background: #dedede;\n  color: grey;\n  border-radius: 56px;\n  padding-left: 40px;\n  padding-right: 40px;\n  margin-right: 30px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.yesbutton:focus {\n  outline: none;\n}", "",{"version":3,"sources":["webpack://./src/app/shared/confirm-dialog/confirm-dialog.component.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;AACF","sourcesContent":[".yesbutton {\r\n  background: #dedede;\r\n  color: grey;\r\n  border-radius: 56px;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  margin-right: 30px;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n}\r\n\r\n.yesbutton:focus {\r\n  outline: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 50041:
/*!********************************************************************************!*\
  !*** ./src/app/shared/custom-analyze/custom-analyze.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".yesbutton {\n  background: #dedede;\n  color: grey;\n  border-radius: 56px;\n  padding-left: 40px;\n  padding-right: 40px;\n  margin-right: 30px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.yesbutton:focus {\n  outline: none;\n}", "",{"version":3,"sources":["webpack://./src/app/shared/custom-analyze/custom-analyze.component.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AACJ;;AAEE;EACE,aAAA;AACJ","sourcesContent":[".yesbutton {\r\n    background: #dedede;\r\n    color: grey;\r\n    border-radius: 56px;\r\n    padding-left: 40px;\r\n    padding-right: 40px;\r\n    margin-right: 30px;\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n  }\r\n  \r\n  .yesbutton:focus {\r\n    outline: none;\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 47010:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/possible-variants/possible-variants.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".yesbutton {\n  background: #dedede;\n  color: grey;\n  border-radius: 56px;\n  padding-left: 40px;\n  padding-right: 40px;\n  margin-right: 30px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.yesbutton:focus {\n  outline: none;\n}\n\n.synonymouspopupaddbutton {\n  position: relative;\n  right: 30px;\n  top: 6px;\n  background-color: #3b4f6b;\n  border-radius: 70px;\n  color: white;\n  cursor: pointer;\n  margin-top: 15px;\n}", "",{"version":3,"sources":["webpack://./src/app/shared/possible-variants/possible-variants.component.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AACJ;;AAEE;EACE,aAAA;AACJ;;AAEE;EACE,kBAAA;EACA,WAAA;EACA,QAAA;EACA,yBAAA;EACA,mBAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;AACJ","sourcesContent":[".yesbutton {\r\n    background: #dedede;\r\n    color: grey;\r\n    border-radius: 56px;\r\n    padding-left: 40px;\r\n    padding-right: 40px;\r\n    margin-right: 30px;\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n  }\r\n  \r\n  .yesbutton:focus {\r\n    outline: none;\r\n  }\r\n  \r\n  .synonymouspopupaddbutton {\r\n    position: relative;\r\n    right: 30px;\r\n    top: 6px;\r\n    background-color: #3b4f6b;\r\n    border-radius: 70px;\r\n    color: white;\r\n    cursor: pointer;\r\n    margin-top: 15px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4954:
/*!****************************************************************************!*\
  !*** ./src/app/shared/synonyms-add/synonyms-add.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button {\n  margin-left: 8px;\n}\n\n.breadcrumb-view {\n  width: 100%;\n  background-size: cover;\n  padding: 20px;\n  padding-top: 120px;\n}\n\n.example-quater-width {\n  width: 100%;\n}\n\n.synonymsbutton {\n  position: relative;\n  left: -5px;\n  top: 6px;\n  background-color: #1f3251;\n  border-radius: 70;\n  border-radius: 70px;\n}\n\n.synonymouspopupaddbutton {\n  position: relative;\n  right: 30px;\n  top: 6px;\n  background-color: #3b4f6b;\n  border-radius: 70px;\n  color: white;\n  cursor: pointer;\n  margin-top: 15px;\n}\n\n.synonymouspopupremovebutton {\n  position: relative;\n  left: -30px;\n  top: 6px;\n  background-color: #cecece;\n  border-radius: 70px;\n  color: white;\n  margin-top: 15px;\n}\n\n.popupclosebutton {\n  background-color: #a92a23;\n  height: 40px;\n  width: 40px;\n  border-radius: 70px;\n  position: absolute;\n  top: -26px;\n  right: -18px;\n  padding: 8px;\n  color: white;\n  font-size: x-large;\n  font-weight: 800;\n  left: auto;\n  cursor: pointer;\n}\n\n.alphabetsorting {\n  width: 100%;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  word-spacing: 42px;\n  text-align: center;\n}\n\n.crossbutton {\n  background-color: #9c9c9c;\n  border-radius: 70px;\n  color: white;\n}\n\n.fa-pencil-square-o {\n  color: white;\n  background-color: #9c9c9c;\n  border-radius: 70px;\n  height: 30;\n  width: 24px;\n  height: 24px;\n  padding: 4px;\n}\n\n.active {\n  color: #a92a23;\n}", "",{"version":3,"sources":["webpack://./src/app/shared/synonyms-add/synonyms-add.component.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ;;AAEA;EACI,WAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;AACJ;;AAEA;EACI,WAAA;AACJ;;AACA;EACI,kBAAA;EACA,UAAA;EACA,QAAA;EACA,yBAAA;EACA,iBAAA;EACA,mBAAA;AAEJ;;AAAA;EACI,kBAAA;EACA,WAAA;EACA,QAAA;EACA,yBAAA;EACA,mBAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;AAGJ;;AADA;EACI,kBAAA;EACA,WAAA;EACA,QAAA;EACA,yBAAA;EACA,mBAAA;EACA,YAAA;EACA,gBAAA;AAIJ;;AADA;EACI,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,UAAA;EACA,eAAA;AAIJ;;AAFA;EACI,WAAA;EACA,eAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;AAKJ;;AAHA;EACI,yBAAA;EACA,mBAAA;EACA,YAAA;AAMJ;;AAJA;EACI,YAAA;EACA,yBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;AAOJ;;AALA;EACI,cAAA;AAQJ","sourcesContent":["button {\r\n    margin-left: 8px;\r\n}\r\n\r\n.breadcrumb-view {\r\n    width: 100%;\r\n    background-size: cover;\r\n    padding: 20px;\r\n    padding-top: 120px;\r\n}\r\n\r\n.example-quater-width {\r\n    width: 100%;\r\n}\r\n.synonymsbutton {\r\n    position: relative;\r\n    left: -5px;\r\n    top: 6px;\r\n    background-color: #1f3251;\r\n    border-radius: 70;\r\n    border-radius: 70px;\r\n}\r\n.synonymouspopupaddbutton {\r\n    position: relative;\r\n    right: 30px;\r\n    top: 6px;\r\n    background-color: #3b4f6b;\r\n    border-radius: 70px;\r\n    color: white;\r\n    cursor: pointer;\r\n    margin-top: 15px;\r\n}\r\n.synonymouspopupremovebutton {\r\n    position: relative;\r\n    left: -30px;\r\n    top: 6px;\r\n    background-color: #cecece;\r\n    border-radius: 70px;\r\n    color: white;\r\n    margin-top: 15px;\r\n}\r\n\r\n.popupclosebutton {\r\n    background-color: #a92a23;\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 70px;\r\n    position: absolute;\r\n    top: -26px;\r\n    right: -18px;\r\n    padding: 8px;\r\n    color: white;\r\n    font-size: x-large;\r\n    font-weight: 800;\r\n    left: auto;\r\n    cursor: pointer;\r\n}\r\n.alphabetsorting {\r\n    width: 100%;\r\n    cursor: pointer;\r\n    align-items: center;\r\n    justify-content: center;\r\n    word-spacing: 42px;\r\n    text-align: center;\r\n}\r\n.crossbutton {\r\n    background-color: #9c9c9c;\r\n    border-radius: 70px;\r\n    color: white;\r\n}\r\n.fa-pencil-square-o {\r\n    color: white;\r\n    background-color: #9c9c9c;\r\n    border-radius: 70px;\r\n    height: 30;\r\n    width: 24px;\r\n    height: 24px;\r\n    padding: 4px;\r\n}\r\n.active {\r\n    color: #a92a23;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\r\n\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"line-scale-party\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>";

/***/ }),

/***/ 43273:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"forgot-page\">\r\n  &#x00A0;\r\n  <div class=\"logo-main\">\r\n    <img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/logo (2).png\" style=\"width: 188px;margin-right: 12px;margin-top:20px\" alt=\"logo\">\r\n  </div>\r\n  <div class=\"forgot-card\">\r\n    <mat-card class=\"card-view\">\r\n      <div>\r\n        <p style=\"color:#FFF; margin-top:30px;text-align: center;font-size:140%;text-indent:0\">Did you Forgot Your Password?</p>\r\n        <form [formGroup]=\"forgetPasswordForm\" (ngSubmit)=\"submitForm()\">\r\n          <mat-form-field style=\"width: 80%;margin-left: 10%;\">\r\n            <mat-label id=\"forms-fields\">Email</mat-label>\r\n            <input style=\"font-size: 15px; color: #FFF; font-weight: lighter;\" placeholder=\"Ex: example@example.com\"\r\n              matInput formControlName=\"email\" pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\" />\r\n              <a mat-icon-button matSuffix style=\"margin-right: 5px; margin-bottom: 5px;\">\r\n                <mat-icon style=\"font-size: 20px; color: #FFF;\">person</mat-icon>\r\n              </a>\r\n            <mat-error style=\"color:white; \">Please enter the Email!</mat-error>\r\n          </mat-form-field>\r\n\r\n          <div style=\"margin-top: 30px;  display: flex; float: right;\">\r\n\r\n            <div style=\"width: 100%;\">\r\n              <div class=\"button-view\">\r\n                  <button class=\"reset-button\" (click)=\"submit()\">SEND</button>\r\n                  <p style=\"color:white;text-align: justify;font-size: 11px;margin-top:6px;width:74%;margin-left:50px\">Enter your e-mail address and will send you a link to reset your password</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n \r\n        </form>\r\n      </div>\r\n      <div class=\"footer\">Copyright &copy; {{todayDate.getFullYear()}} Management Action Programs, Inc. (MAP)</div>\r\n    </mat-card>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 51951:
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"login-page\">\r\n  &#x00A0;\r\n  <div class=\"logo-main\">\r\n    <img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/logo (2).png\" style=\"width: 188px;margin-right: 12px;margin-top:20px\" alt=\"logo\">\r\n  </div>\r\n  <div class=\"login-card\">\r\n    <mat-card class=\"card-view\">\r\n\r\n      <div class=\"head-view\">\r\n        <p style=\"font-size: 20px;font-style: normal;margin-top:20px;margin-bottom:0\">Hello,</p>\r\n        <p style=\"margin-top:0px;margin-bottom:10px\">Please Login to your Account</p>\r\n      </div>\r\n\r\n      <div>\r\n        <form [formGroup]=\"loginForm\">\r\n\r\n          <mat-form-field style=\"width: 80% !important;margin-left:40px;\">\r\n            <mat-label id=\"forms-fields\">Email</mat-label>\r\n            <input style=\"font-size: 15px; color: #FFF; font-weight: lighter;\" placeholder=\"Ex: example@example.com\"\r\n              matInput formControlName=\"email\" pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\" />\r\n            <a mat-icon-button matSuffix style=\"margin-right: 5px; margin-bottom: 5px;\">\r\n              <mat-icon style=\"font-size: 20px; color: #FFF;\">person</mat-icon>\r\n            </a>\r\n            <mat-error style=\"color:#FFF;\">Please enter the Email!</mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field style=\"width: 80% !important;margin-left:40px;\">\r\n            <mat-label id=\"forms-fields\">Password</mat-label>\r\n            <input matInput [type]=\"hide ? 'password' : 'text'\" placeholder=\"Enter the password\"\r\n              formControlName=\"password\" style=\"color: #FFF;\" (keydown.enter)=\"login()\">\r\n            <a mat-icon-button matSuffix (click)=\"hide = !hide\" style=\"margin-right: 5px; margin-bottom: 5px;\">\r\n              <mat-icon style=\"font-size: 20px; color: #FFF;\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n            </a>\r\n            <mat-error style=\"color:#FFF;\">Please enter the Password!</mat-error>\r\n          </mat-form-field>\r\n\r\n        </form>\r\n      </div>\r\n\r\n      <div style=\"width: 90%;margin-top:0\">\r\n        <div>\r\n          <a class=\"forgot-link\" [routerLink]=\"['/forgot-password']\">Forgot Password?</a>\r\n        </div>\r\n      </div>\r\n\r\n      <p style=\"margin-bottom:23px\">&nbsp;</p>\r\n      <div style=\"width: 100%;\">\r\n        <div class=\"button-view\">\r\n          <button class=\"login-button\" (click)=\"login()\">LOGIN</button>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"footer\">Copyright &copy; {{todayDate.getFullYear()}} Management Action Programs, Inc. (MAP)</div>\r\n    </mat-card>\r\n\r\n  </div>\r\n\r\n</div>";

/***/ }),

/***/ 63095:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"bg-layout\">\r\n\r\n        <div aria-label=\"breadcrumb\"\r\n                style=\" width: 100%; background-size: cover;  padding-top: 10px;\">\r\n                <ol class=\"breadcrumb\" style=\"background: transparent; margin-left: 15px;\">\r\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"['../../dashboard']\"\r\n                                        style=\"color: #a92a23; font-size: 16px;\">Home</a></li>\r\n                        <li class=\"breadcrumb-item\" aria-current=\"page\"><a style=\"color: #a92a23; font-size: 16px;\">Change\r\n                                        Password</a></li>\r\n\r\n                </ol>\r\n        </div>\r\n\r\n\r\n        <div class=\"page-content\" style=\"margin:0px 30px; border-radius: 8px; background: #fff; padding-bottom: 50px;\">\r\n                <form [formGroup]=\"changePasswordForm\" class=\"row change-password\"\r\n                        style=\"padding: 20px; border-radius: 8px;\">\r\n\r\n                        <mat-form-field class=\"col-md-6 pr-5\">\r\n                                <mat-label>Old Password</mat-label>\r\n                                <input matInput [type]=\"hideOldPassword ? 'password' : 'text'\"\r\n                                        formControlName=\"oldPassword\" required>\r\n                                <a mat-icon-button matSuffix (click)=\"hideOldPassword = !hideOldPassword\"\r\n                                        style=\"margin-right: 0px; margin-bottom: 5px;\">\r\n                                        <mat-icon style=\"font-size: 20px; color: #C7C8CB;\">\r\n                                                {{hideOldPassword ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                </a>\r\n                                <mat-error>Please enter the Old Password!</mat-error>\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field class=\"col-md-6 pl-5\">\r\n                                <mat-label>New Password</mat-label>\r\n                                <input matInput [type]=\"hideNewPassword ? 'password' : 'text'\"\r\n                                        formControlName=\"password\" required>\r\n                                <a mat-icon-button matSuffix (click)=\"hideNewPassword = !hideNewPassword\"\r\n                                        style=\"margin-right: 0px; margin-bottom: 5px;\">\r\n                                        <mat-icon style=\"font-size: 20px; color: #C7C8CB;\">\r\n                                                {{hideNewPassword ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                </a>\r\n                                <mat-error>Please enter the New Password!</mat-error>\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field class=\"col-md-6 pr-5\">\r\n                                <mat-label>Confirm Password</mat-label>\r\n                                <input matInput [type]=\"hideConfirmPassword ? 'password' : 'text'\"\r\n                                        formControlName=\"passwordConfirm\" required>\r\n                                <a mat-icon-button matSuffix (click)=\"hideConfirmPassword = !hideConfirmPassword\"\r\n                                        style=\"margin-right: 0px; margin-bottom: 5px;\">\r\n                                        <mat-icon style=\"font-size: 20px; color: #C7C8CB;\">\r\n                                                {{hideConfirmPassword ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                </a>\r\n                                <mat-error>Please enter the Confirm Password!</mat-error>\r\n                        </mat-form-field>\r\n                </form>\r\n\r\n                <div class=\"btn_sec\" style=\"text-align: right; padding-right: 30px;padding-top:30px;\">                        \r\n                        <button class=\"saveButton\" mat-button style=\"background: #a92a23; border-radius: 72px; color: #FFF;\"\r\n                                (click)=\"changePassword()\">Update</button>\r\n                        <button mat-button style=\"margin-right: 3px; background: #DEDEDE;border-radius: 72px; color:grey; \"\r\n                                (click)=\"backlocation()\">Cancel</button>\r\n                </div>\r\n\r\n\r\n\r\n        </div>\r\n\r\n\r\n</div>";

/***/ }),

/***/ 5513:
/*!************************************************************************************!*\
  !*** ./src/app/pages/gropus/aggregate-pdf/aggregate-pdf.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row mt-3 mr-3 justify-content-end\">\r\n    <button class=\"btn btn-success\"  style=\"margin-left: 10px;\" (click)=\"generatePDF()\"><i class=\"fa-solid fa-file-arrow-down\"></i> Download PDF</button>\r\n  </div>\r\n  <div class=\"example-container\">\r\n    <div class=\"container-sm mt-5 pt-3 mb-5\" style=\"border: solid #cccccc 1px\">\r\n      <div id=\"content\" #content>\r\n        <table class=\"logo-table\">\r\n          <tr>\r\n            <td class=\"logo-cell\">\r\n              <img\r\n                src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/logo (2).png\"\r\n                alt=\"Logo\"\r\n                class=\"logo-svg\"\r\n              />\r\n            </td>\r\n            <td class=\"text-cell\">\r\n              <p class=\"text-content mt-3\" style=\"font-weight: 600;\">Insights - {{aggregateName | titlecase}} - Aggregate</p>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n<!-- \r\n      <div class=\"set-height\">\r\n        <div class=\"m-3\" *ngFor=\"let item of aggregateParticpant; let i = index\">\r\n          <p class=\"fw-bold\">{{ i + 1 }}. {{ item?.question_id.question}}</p>\r\n          <textarea\r\n            disabled\r\n            class=\"p-2 px-4 w-100\"\r\n            rows=\"3\"\r\n            cols=\"50\"\r\n            type=\"text\"\r\n            style=\"border: 2px dashed #e0e0e0; font-size: 12px\"\r\n            >{{ item?.questionAnswer }}</textarea\r\n        >\r\n        </div>\r\n      </div> -->\r\n\r\n      <!-- <div class=\"m-3\" *ngFor=\"let ques of result; let i = index\">\r\n      <p class=\"fw-bold\">{{ i + 1 }}. {{ques.question}}</p>\r\n      <div *ngFor=\"let partAns of ques.participantAnswers\">\r\n        <mat-card  style=\"background-color: rgb(141, 167, 255);\">\r\n            <mat-card-content class=\"text-center\" style=\"color: #ffffff; font-weight: 600; font-size: 18px;\">Self</mat-card-content>\r\n          </mat-card>\r\n          <div class=\"py-3\">\r\n        <div disabled class=\"p-2 px-4 w-100\" rows=\"3\" cols=\"50\" type=\"text\" style=\"border: 2px dashed #e0e0e0; font-size: 12px\">{{partAns}}</div>\r\n      </div>\r\n      </div>\r\n      <mat-card  style=\"background-color: rgb(141, 167, 255);\">\r\n        <mat-card-content class=\"text-center\" style=\"color: #ffffff; font-weight: 600; font-size: 18px;\">Peer</mat-card-content>\r\n      </mat-card>\r\n      <div *ngFor=\"let memAns of ques.memberAnswers\">\r\n        <div class=\"py-2\">\r\n        <div disabled class=\"p-2 px-4 w-100\" rows=\"3\" cols=\"50\" type=\"text\" style=\"border: 2px dashed #e0e0e0; font-size: 12px\">{{memAns}}</div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n\r\n\r\n\r\n    <div class=\"m-3\" *ngFor=\"let ques of  aggregateReult; let i = index\">\r\n      <p class=\"fw-bold\" style=\"font-weight: 600;\">{{ i + 1 }}. {{ques.question_id.question}}</p>\r\n      <div *ngFor=\"let partAns of ques.particpantAns\">\r\n        <mat-card  style=\"background-color: #4F81BD\">\r\n            <mat-card-content class=\"text-center\" style=\"color: #ffffff; font-weight: 600; font-size: 16px;\">Self</mat-card-content>\r\n          </mat-card>\r\n          <div class=\"py-3\">\r\n            <p class=\"p-2 px-4 w-100\"\r\n            [attr.id]=\"'editable-paragraph-self-' + i + '-' + j\"\r\n            contenteditable=\"true\"\r\n            (keydown.enter)=\"addLineBreak($event, i, j)\"\r\n            style=\"border: 1px groove #95B3D7; background-color: #DBE5F1; font-size: 12px; white-space: pre-line;\"\r\n            >\r\n              {{ partAns }}\r\n            </p>\r\n          </div>\r\n          \r\n      </div>\r\n    \r\n      <div *ngFor=\"let item of ques.memberAns\">\r\n        <mat-card  style=\"background-color: #4F81BD\">\r\n          <mat-card-content class=\"text-center\" style=\"color: #ffffff; font-weight: 600; font-size: 16px;\">{{(item.category) | titlecase}}</mat-card-content>\r\n        </mat-card>\r\n        <div class=\"py-3\" *ngFor=\"let ans of item.answer\">\r\n        <p disabled class=\"p-2 px-4 w-100\" \r\n        [attr.id]=\"'editable-paragraph-member-' + i + '-' + k + '-' + l\"\r\n        contenteditable=\"true\"\r\n        (keydown.enter)=\"addLineBreak($event, i, k, l)\"\r\n        style=\"border: 1px groove #95B3D7; background-color: #DBE5F1; font-size: 12px; white-space: pre-line;\">{{ans}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n    </div>\r\n  </div>\r\n  ";

/***/ }),

/***/ 99554:
/*!**********************************************************************!*\
  !*** ./src/app/pages/gropus/questions-pdf.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row mt-3 mr-3 justify-content-end\">\r\n  <button class=\"btn btn-success\"  style=\"margin-left: 10px;\" (click)=\"generatePDF()\"><i class=\"fa-solid fa-file-arrow-down\"></i> Download PDF</button>\r\n</div>\r\n<div class=\"example-container\">\r\n  <div class=\"container-sm mt-5 pt-3 mb-5\" style=\"border: solid #cccccc 1px\">\r\n    <div id=\"content\" #content>\r\n      <table class=\"logo-table\">\r\n        <tr>\r\n          <td class=\"logo-cell\">\r\n            <img\r\n              src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/logo (2).png\"\r\n              alt=\"Logo\"\r\n              class=\"logo-svg\"\r\n            />\r\n          </td>\r\n          <td class=\"text-cell\">\r\n            <p class=\"text-content mt-3\" style=\"font-weight: 600;\">Insights - {{participantName | titlecase}} - Response</p>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    <div class=\"set-height\">\r\n      <div class=\"m-3\" *ngFor=\"let item of qArray; let i = index\">\r\n        <p class=\"fw-bold\">{{ i + 1 }}. {{ item?.question_id.question}}</p>\r\n        <p\r\n          disabled\r\n          class=\"p-2 px-4 w-100\"\r\n          rows=\"3\"\r\n          cols=\"50\"\r\n          type=\"text\"\r\n          id=\"editable-paragraph\"\r\n          contenteditable=\"true\"\r\n          (keydown.enter)=\"addLineBreak($event)\"\r\n          style=\"border: 1px groove #95B3D7; background-color: #DBE5F1; font-size: 12px; white-space: pre-line \"\r\n          >{{ item?.questionAnswer }}</p\r\n        >\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n";

/***/ }),

/***/ 14203:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/gropus/respondant-pdf/respondant-pdf.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row mt-3 mr-3 justify-content-end\">\r\n    <button class=\"btn btn-success\"  style=\"margin-left: 10px;\" (click)=\"generatePDF()\"><i class=\"fa-solid fa-file-arrow-down\"></i> Download PDF</button>\r\n  </div>\r\n  <div class=\"example-container\">\r\n    <div class=\"container-sm mt-5 pt-3 mb-5\" style=\"border: solid #cccccc 1px\">\r\n      <div id=\"content\" #content>\r\n        <table class=\"logo-table\">\r\n          <tr>\r\n            <td class=\"logo-cell\">\r\n              <img\r\n                src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/logo (2).png\"\r\n                alt=\"Logo\"\r\n                class=\"logo-svg\"\r\n              />\r\n            </td>\r\n            <td class=\"text-cell\">\r\n              <p class=\"text-content mt-3\" style=\"font-weight: 600;\">Insights - {{memberName | titlecase}} - Response</p>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      <div class=\"set-height\">\r\n        <div class=\"m-3\" *ngFor=\"let item of memberQuestionsArr; let i = index\">\r\n          <p class=\"fw-bold\">{{ i + 1 }}. {{ item?.question_id.question}}</p>\r\n          <!-- <p\r\n            disabled\r\n            class=\"p-2 px-4 w-100\"\r\n            rows=\"3\"\r\n            cols=\"50\"\r\n            type=\"text\"\r\n            style=\"border: 1px groove #cccccc; font-size: 12px \"\r\n            >{{ item?.questionAnswer }}</p> -->\r\n\r\n            <p class=\"p-2 px-4 w-100\" rows=\"3\"\r\n            cols=\"50\"\r\n  id=\"editable-paragraph\"\r\n  contenteditable=\"true\"\r\n  (keydown.enter)=\"addLineBreak($event)\"\r\n  style=\"border: 1px groove #95B3D7; background-color: #DBE5F1; font-size: 12px; white-space: pre-line\"\r\n>{{ item?.questionAnswer }}</p>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  ";

/***/ }),

/***/ 89859:
/*!*********************************************************************!*\
  !*** ./src/app/pages/gropus/response-pdf.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <div class=\"mt-3 mr-3 justify-content-start\">\r\n  <button class=\"btn btn-light\"  style=\"margin-left: 10px;\" (click)=\"back()\">Back</button>\r\n</div> -->\r\n\r\n<div class=\"row mt-3 mr-3 justify-content-end\">\r\n  <button class=\"btn btn-success\"  style=\"margin-left: 10px;\" (click)=\"generatePDF()\"><i class=\"fa-solid fa-file-arrow-down\"></i> Download PDF</button>\r\n</div>\r\n\r\n\r\n<div class=\"container-sm pt-3 mb-5\" style=\"border: solid #cccccc 1px;\">\r\n  <div id=\"content\" #content>\r\n  <table class=\"logo-table\" >\r\n    <tr>\r\n      <td class=\"logo-cell\">\r\n        <img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/logo (2).png\" alt=\"Logo\" class=\"logo-svg\" />\r\n      </td>\r\n      <td class=\"text-cell\">\r\n        <p class=\"text-content\">Insights - {{user | titlecase}} - Response</p>\r\n      </td>\r\n    </tr>\r\n    \r\n  </table>\r\n  <!-- <div *ngFor=\"let response of response\" class=\"mt-3 message\">\r\n    {{ response.content }}\r\n  </div> -->\r\n  <!-- <div>{{this.feedbackContent}}</div> -->\r\n\r\n    <p [attr.contenteditable]=\"editPdf ? 'true' : 'false'\" class=\"mt-3\" *ngFor=\"let line of feedbackContent.split('\\n')\">\r\n      <span *ngIf=\"isHeader(line)\" class=\"header\">{{ line }}</span>\r\n      <span *ngIf=\"!isHeader(line)\" class=\"subcontent\">{{ line }}</span>\r\n      </p>\r\n  </div>\r\n</div>\r\n<div class=\"py-1\"></div>\r\n";

/***/ }),

/***/ 57921:
/*!*************************************************************************!*\
  !*** ./src/app/pages/master-page/master-page.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<mat-sidenav-container class=\"app-layout\" autosize>\r\n\r\n  <mat-sidenav class=\"tab-w-150\" #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\r\n    [fixedInViewport]=\"mobileQuery.matches\" [(opened)]=\"toggleOpen\"\r\n    [ngStyle]=\"{ 'width.em': toggleSidebar  ?  10 : 4 }\">\r\n    <mat-nav-list class=\"left-sidebar-map\" style=\"height: 100%; overflow-y: hidden;\">\r\n      <div class=\"sidebar-logo\">\r\n        <a routerLink=\"dashboard\" target=\"_self\">\r\n          <img *ngIf=\"toggleSidebar\" class=\"logo-main\" src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/logo (2).png\" alt=\"logo\">\r\n          <img *ngIf=\"!toggleSidebar\" class=\"logo-main\" src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/logo (2).png\" alt=\"logo\">\r\n        </a>\r\n      </div>\r\n\r\n      <!-- <mat-divider style=\"background: #3b4f6a; width: 100%; margin-top: 20px; margin-bottom: 20px\"></mat-divider> -->\r\n\r\n      <div class=\"sidebar-lists mt-2\" style=\"background-image: url(https://map-vfs-s3.s3.amazonaws.com/testing/images/bg.png);\">\r\n\r\n        <a mat-list-item routerLink=\"dashboard\" class=\"list-title\" routerLinkActive=\"is-active\">\r\n          <img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/sidebar/dashboard.png\" class=\"non-active\" alt=\"Dashboard\">\r\n          <img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/sidebar/dashboard 1.png\" class=\"now-active\" alt=\"Dashboard\">\r\n          <span *ngIf=\"toggleSidebar\">Dashboard</span>\r\n        </a>\r\n        <a mat-list-item *ngIf=\"role != 'staff'\" routerLink=\"organization\" class=\"list-title\" routerLinkActive=\"is-active\">\r\n          <img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/sidebar/organization.png\" class=\"non-active\" alt=\"organization\">\r\n          <img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/sidebar/organization 1.png\" class=\"now-active\" alt=\"organization\">\r\n          <span *ngIf=\"toggleSidebar\">Organization</span>\r\n        </a>\r\n        <a mat-list-item *ngIf=\"role != 'staff'\" routerLink=\"users\" class=\"list-title\" routerLinkActive=\"is-active\">\r\n          <img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/sidebar/user.png\" class=\"non-active\" alt=\"user\">\r\n          <img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/sidebar/user 1.png\" class=\"now-active\" alt=\"user\">\r\n          <span *ngIf=\"toggleSidebar\">Users</span>\r\n        </a>\r\n        <!-- <a mat-list-item routerLink=\"category\" class=\"list-title\" routerLinkActive=\"is-active\">\r\n          <img src=\"../../../assets/images/sidebar/category.png\" class=\"non-active\" alt=\"category\">\r\n          <img src=\"../../../assets/images/sidebar/category 1.png\" class=\"now-active\" alt=\"category\">\r\n          <span *ngIf=\"toggleSidebar\">Six Essentials</span>\r\n        </a>\r\n        <a mat-list-item routerLink=\"workshop\" class=\"list-title\" routerLinkActive=\"is-active\">\r\n          <img src=\"../../../assets/images/sidebar/workshop.png\" class=\"non-active\" alt=\"workshop\">\r\n          <img src=\"../../../assets/images/sidebar/workshop 1.png\" class=\"now-active\" alt=\"workshop\">\r\n          <span *ngIf=\"toggleSidebar\">Workshop</span>\r\n        </a>\r\n        <a mat-list-item routerLink=\"questionarie\" class=\"list-title\" routerLinkActive=\"is-active\">\r\n          <img src=\"../../../assets/images/sidebar/questionaire pdf.png\" class=\"non-active\" alt=\"questionarie\">\r\n          <img src=\"../../../assets/images/sidebar/questionarie 1.png\" class=\"now-active\" alt=\"questionarie\">\r\n          <span *ngIf=\"toggleSidebar\">Questionnaire PDF</span>\r\n        </a> -->\r\n\r\n        <a mat-list-item routerLink=\"groups\" class=\"list-title\" routerLinkActive=\"is-active\">\r\n          <img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/sidebar/Groups.png\" class=\"non-active\" alt=\"survey\">\r\n          <img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/sidebar/Groups 1.png\" class=\"now-active\" alt=\"survey\">\r\n          <span *ngIf=\"toggleSidebar\">Groups</span>\r\n        </a>\r\n\r\n        <a mat-list-item routerLink=\"survey\" class=\"list-title\" routerLinkActive=\"is-active\">\r\n          <img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/sidebar/survey.png\" class=\"non-active\" alt=\"survey\">\r\n          <img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/sidebar/survey 1.png\" class=\"now-active\" alt=\"survey\">\r\n          <span *ngIf=\"toggleSidebar\">Survey Template</span>\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"version\">\r\n        Ver 1.0.2\r\n      </div>\r\n\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n\r\n    <mat-toolbar class=\"app-header\">\r\n      <mat-toolbar-row>\r\n        <span>\r\n          <div class=\"form-group has-search\">\r\n            <span class=\"fa fa-search form-control-feedback\"></span>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"searchText\" (input)=\"onSearch()\">\r\n          </div>\r\n        </span>\r\n\r\n        <span class=\"example-spacer\"></span>\r\n        <span class=\"username-show\">\r\n          <label for=\"\">{{userName}} </label>\r\n          <small>{{email}}</small>\r\n        </span>\r\n\r\n        <span style=\"padding-left: 8px;\">\r\n          \r\n\r\n          <div *ngIf=\"proImage; else nopic\">\r\n            <img style=\" background: #FFF;   border-radius: 50%; width: 40px; height: 40px; cursor: pointer;font-size: 10px;\"\r\n              (click)=\"updateProfile()\" [src]=\"proImage\" alt=\"logo\">\r\n          </div>\r\n\r\n          <ng-template #nopic>\r\n            <img [src]=\"imageURL\" alt=\"\"\r\n              style=\" background: #FFF;   border-radius: 50%; width: 40px; height: 40px; cursor: pointer;font-size: 10px;\"\r\n              (click)=\"updateProfile()\" class=\"profile-img\" />\r\n          </ng-template>\r\n\r\n        </span>\r\n\r\n        <span style=\"padding-top: 15px;\">\r\n          <mat-menu #appMenu=\"matMenu\">\r\n            <button mat-menu-item (click)=\"updateProfile()\">\r\n              <mat-icon>person</mat-icon>My Profile\r\n            </button>\r\n            <button mat-menu-item (click)=\"changePassword()\">\r\n              <mat-icon>vpn_key</mat-icon>Change Password\r\n            </button>\r\n            <!-- <button mat-menu-item (click)=\"signOut()\">\r\n              <mat-icon>power_settings_new</mat-icon>Sign Out\r\n            </button> -->\r\n          </mat-menu>\r\n\r\n        </span>\r\n\r\n        <span style=\"padding-top: 10px\">\r\n          <a [matMenuTriggerFor]=\"appMenu\">\r\n            <mat-icon style=\"color: #95A1B1; cursor: pointer;\">keyboard_arrow_down</mat-icon>\r\n          </a>\r\n        </span>\r\n        <span class=\"notifications\" style=\"padding-top: 10px\">\r\n          <a [matMenuTriggerFor]=\"appMenu\" class=\"mr-4\">\r\n          </a>\r\n        </span>\r\n        <span class=\"logout\">\r\n\r\n          <a> <img src=\"../../../assets/images/notifications.png\" alt=\"logout\" class=\"mr-3\"\r\n            title=\"Logout\" style=\"cursor: pointer;\">\r\n        </a>\r\n          <!-- <a [matMenuTriggerFor]=\"logMenu\" [routerLink]=\"['/login']\"> -->\r\n          <a (click)=\"signoutpopup()\"> <img src=\"../../../assets/images/logout.png\" alt=\"logout\" class=\"mr-2\"\r\n              title=\"Logout\" style=\"cursor: pointer;\">\r\n          </a>\r\n\r\n        </span>\r\n\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n<div class=\"mb-5\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n    \r\n\r\n    <div class=\"footer\">Copyright &copy; {{todayDate.getFullYear()}} Management Action Programs, Inc. (MAP) </div>\r\n\r\n  </mat-sidenav-content>\r\n  <ng-template #logoutpopup>\r\n    <div>\r\n      <header class=\"logout-head\" style=\"background-color:#3B4E6C;margin-bottom: 20px;color: white;padding: 12px;\"\r\n        fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div class=\"mr-4\">Log Out</div>\r\n\r\n\r\n      </header>\r\n      <div style=\"text-align:center;\">\r\n        <p>Do you want to logout?</p>\r\n        <button class=\"yesbutton\" (click)=\"closeDialog()\" mat-button>No</button>\r\n        <button class=\"yesbutton\" mat-button\r\n          style=\"background: #A92A23;  margin-right: 0px; color: #FFF; border-radius:72px;\"\r\n          (click)=\"signOut()\">Yes</button>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </ng-template>\r\n</mat-sidenav-container>";

/***/ }),

/***/ 15046:
/*!***************************************************************************!*\
  !*** ./src/app/pages/notification/notification.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<mat-card-header style=\"display: flex; justify-content: center;\">\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>\r\n                <img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/MapLogo.png\">\r\n        </mat-card-title>\r\n</mat-card-header>\r\n<div style=\"display: flex; justify-content: center;\">\r\n        <p>Please complete your feedback for {{filteredMembers?.participantFirstName}} below</p>\r\n</div>\r\n\r\n<div class=\"totalContent\">\r\n        <mat-card class=\"example-card\">\r\n                <form [formGroup]=\"notificationForm\">\r\n                        <div class=\"example-container\">\r\n                                <h5 mat-dialog-title class=\"px-3 py-3\"\r\n                                        style=\"display: flex; justify-content: center; background-color: #3b4f6a; color: #fff; height: 65px;\">\r\n                                        The {{filteredMembers.participantFirstName}} of Organizational Communication</h5>\r\n                        </div>\r\n                        <div class=\"totalContent\" style=\"display: block;\">\r\n                                <div formArrayName=\"questions\">\r\n                                        <div *ngFor=\"let question of quesArray; let i = index\" [formGroupName]=\"i\">\r\n                                                <p>{{i + 1}}. {{question.question_name}} </p>\r\n                                                <textarea class=\"p-2 px-4 w-100\" rows=\"3\" cols=\"50\" type=\"text\"\r\n                                                        formControlName=\"question_name\"\r\n                                                        placeholder=\"Dummy Text real txt will be replaced\"\r\n                                                        appCapitalizeFirstLetter\r\n                                                        style=\"border: 2px dashed #E0E0E0; font-size: 12px;\" (click)=\"textArea(question,i)\"></textarea>\r\n                                        </div>\r\n                                </div>\r\n                        </div>\r\n                </form>\r\n                <div class=\"footer\">\r\n                        <button mat-raised-button class=\"submitbtn\" [disabled]=\"disabled\" (click)=\"submit(popup)\">Submit</button>\r\n                </div>\r\n        </mat-card>\r\n</div>\r\n\r\n\r\n<ng-template #popup>\r\n        <div class=\"example-container\">\r\n                <h5 mat-dialog-title class=\"p-2 px-3\" style=\"background-color: #3b4f6a; color: #fff;\"> Submitted\r\n                        Successfully</h5>\r\n                <mat-dialog-content class=\"mx-3 my-2 text-center\">\r\n                        <p>Thanks for raising away</p>\r\n                </mat-dialog-content>\r\n                <mat-dialog-actions class=\"px-2 mb-2 text-center\">\r\n                        <button mat-button class=\"button-save\" (click)=\"okayClose()\">Okay</button>\r\n                </mat-dialog-actions>\r\n        </div>\r\n</ng-template>";

/***/ }),

/***/ 25348:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/update-profile/update-profile.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n<app-user-details></app-user-details>";

/***/ }),

/***/ 71337:
/*!*******************************************************************!*\
  !*** ./src/app/pages/user/user-details.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"bg-layout\">\r\n\r\n    <div aria-label=\"breadcrumb\" style=\"width: 100%; background-size: cover;  padding-top: 10px;\">\r\n        <ol class=\"breadcrumb\" style=\"background: transparent; margin-left: 15px;\">\r\n            <li class=\"breadcrumb-item\" aria-current=\"page\"><a [routerLink]=\"['/map/users']\"\r\n                    style=\"color:  #B2B2B3; font-size: 16px;\">User</a></li>\r\n            <li class=\"breadcrumb-item\" *ngIf=\"!isEdit\" aria-current=\"page\" style=\"color: #a92a23; font-size: 16px\">Add\r\n            </li>\r\n            <li class=\"breadcrumb-item\" *ngIf=\"isEdit\" aria-current=\"page\" style=\"color: #a92a23; font-size: 16px\">Edit\r\n            </li>\r\n        </ol>\r\n    </div>\r\n\r\n\r\n    <div class=\"page-content\"\r\n        style=\"margin-left: 30px; margin-right: 30px; background: #ffffff; border-radius: 8px; padding-bottom: 50px;\">\r\n        <form [formGroup]=\"userForm\" class=\"ant-advanced-search-form\" style=\"padding:0px 20px; border-radius: 8px;\">\r\n            <div id=\"P-Content\" class=\"row\">\r\n                <div id=\"divPn\" class=\"col-lg-3\">\r\n                    <h2 class=\"pic-head\">Profile Picture</h2>\r\n                    <span style=\"padding: 0 14px;\">\r\n                        <form #imageForm=\"ngForm\" style=\"position: relative;\">\r\n                            <div class=\"profile-picture\">\r\n                                <div *ngIf=\"proImage; else nopic\">\r\n                                    <img [src]=\"proImage\" alt=\"\" class=\"img-files\"\r\n                                        style=\" background: #FFF;   border-radius: 50%;  cursor: pointer;\"\r\n                                        (click)=\"editProfile()\" />\r\n                                </div>\r\n                                <!-- <div class=\"hove-profile-pic\"></div> -->\r\n                                <ng-template #nopic>\r\n                                    <img style=\" background: #FFF; width: 150px;  border-radius: 50%; cursor: pointer;\"\r\n                                        [src]=\"imageUrl\" alt=\"logo\" (click)=\"editProfile()\">\r\n                                </ng-template>\r\n                                <div style=\"cursor: pointer\" class=\"img-files\" (click)=\"editProfile()\">\r\n                                    <!-- <input type=\"file\" #image accept=\".jpg,.jpeg,.png,.gif\" (change)=\"handleFileInput($event)\" /> -->\r\n                                </div>\r\n\r\n                            </div>\r\n                        </form>\r\n                    </span>\r\n                    <div id=\"divR-no\">\r\n                        <h2 class=\"pic-head\">Role</h2>\r\n\r\n                        <div id=\"profile-pic\" class=\"row label-down\">\r\n                            <div id=\"profA\" class=\"col-lg-6 col-md-4  text-center\" *ngIf=\"roleName !='admin'|| isEdit\">\r\n                                <img *ngIf=\"userRoleName != 'admin'\" src=\"../../../assets/images/Admin_01.png\"\r\n                                    alt=\"logo\" (click)=\"selectedRole('admin', 'change')\">\r\n                                <img *ngIf=\"userRoleName == 'admin'\" src=\"../../../assets/images/Admin.png\" alt=\"logo\">\r\n                                <mat-label style=\"color:grey;\">Admin</mat-label>\r\n                            </div>\r\n                            <div id=\"profB\" class=\"col-lg-6 col-md-4 text-center\" *ngIf=\"roleName !='admin'|| isEdit\">\r\n                                <img *ngIf=\"userRoleName == 'super-admin'\"\r\n                                    src=\"../../../assets/images/Super Admin_01.png\" alt=\"logo\">\r\n                                <img *ngIf=\"userRoleName != 'super-admin'\" src=\"../../../assets/images/superadmin.jpg\"\r\n                                    alt=\"logo\" (click)=\"selectedRole('super-admin', 'change')\">\r\n                                <mat-label style=\"color:grey;\">Super Admin\r\n                                </mat-label>\r\n                            </div>\r\n                            <div id=\"profC\" class=\"col-lg-6 col-md-4  text-center\">\r\n                                <img *ngIf=\"userRoleName == 'staff'\" src=\"../../../assets/images/Staff_01.png\"\r\n                                    alt=\"logo\">\r\n                                <img *ngIf=\"userRoleName != 'staff'\" src=\"../../../assets/images/staff.jpg\" alt=\"logo\"\r\n                                    (click)=\"selectedRole('staff', 'change')\">\r\n                                <mat-label style=\"color:grey;\">Staff</mat-label>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12 permission_sec\">\r\n                            <h2 class=\"pic-head pt-5\">Permissions</h2>\r\n                            <mat-checkbox formControlName=\"isGlobalSynonymEdit\">Global Terminology Add / Delete\r\n                            </mat-checkbox>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div id=\"divBn\" class=\"col-lg-9\">\r\n                    <h2 class=\"mb-4 pic-head\">Basic Info</h2>\r\n\r\n                    <mat-form-field class=\"example-half-width\">\r\n                        <mat-label>First Name</mat-label>\r\n                        <input matInput placeholder=\"Enter the first name\" formControlName=\"firstName\" required>\r\n                        <mat-error>First name is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"example-half-width\">\r\n                        <mat-label>Last Name</mat-label>\r\n                        <input matInput placeholder=\"Enter the last name\" formControlName=\"lastName\" required>\r\n                        <mat-error>Last name is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"example-half-width\">\r\n                        <mat-label>Email ID</mat-label>\r\n                        <input matInput placeholder=\"ex: example@example.com\" formControlName=\"emailId\"\r\n                            pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\" required [readonly]=\"isEdit\">\r\n                        <mat-error>Email is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"example-half-width\">\r\n                        <mat-label>Mobile</mat-label>\r\n                        <input matInput placeholder=\"Enter the mobile\" formControlName=\"mobile\" [validation]=\"true\"\r\n                            mask=\"(000) 000-0000\" (keypress)=\"keyPress($event)\" pattern=\"[0-9]+\" required>\r\n                        <mat-error>Mobile is required!</mat-error>\r\n                    </mat-form-field>\r\n                    <mat-checkbox formControlName=\"isActive\" style=\"padding-left: 14px;\"\r\n                        [disabled]=\"roleName == 'admin' ? true : false\">Active\r\n                    </mat-checkbox>\r\n\r\n                    <div id=\"divL-no\">\r\n                        <h2 class=\"mb-4 pic-head\">Location Info</h2>\r\n\r\n                        <mat-form-field class=\"example-half-width\">\r\n                            <mat-label>Address</mat-label>\r\n                            <input matInput placeholder=\"Enter the Address\" formControlName=\"address\" required>\r\n                            <mat-error>Address is required!</mat-error>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"example-half-width\">\r\n                            <mat-label>City</mat-label>\r\n                            <input matInput placeholder=\"Enter the city\" formControlName=\"city\" required>\r\n                            <mat-error>City is required!</mat-error>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"example-half-width\">\r\n                            <mat-label>State</mat-label>\r\n                            <input matInput placeholder=\"Enter the state\" formControlName=\"state\" required>\r\n                            <mat-error>State is required!</mat-error>\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field style=\"padding-left: 12px;\" class=\"example-half-width\">\r\n                            <mat-label>Country</mat-label>\r\n                            <input matInput placeholder=\"Enter the country\" formControlName=\"country\" required>\r\n                            <mat-error>Country is required!</mat-error>\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field style=\"padding-left: 12px;\" class=\"example-half-width\">\r\n                            <mat-label>Zipcode</mat-label>\r\n                            <input matInput placeholder=\"Enter the zipCode\" formControlName=\"zipCode\"\r\n                                (keypress)=\"keyPress($event)\" maxlength=\"6\" pattern=\"[0-9]+\" required>\r\n                            <mat-error>Zipcode is required!</mat-error>\r\n                        </mat-form-field>\r\n\r\n                    </div>\r\n                    <div id=\"ContentR-no\" class=\"row\">\r\n\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"text-right pr-4 pt-3 btn_sec\">\r\n                                <button mat-button style=\" background: #DEDEDE; color:grey; border-radius:72px; \"\r\n                                    [routerLink]=\"['/map/users']\" *ngIf=\"!isAdmin\">Cancel</button>\r\n                                <button *ngIf=\"!isEdit\" class=\"saveButton\" mat-button\r\n                                    style=\"background: #a92a23; color: #FFF; border-radius:72px;\"\r\n                                    (click)=\"createUser()\">Save</button>\r\n                                <button *ngIf=\"isEdit && !isAdmin \" class=\"saveButton\" mat-button\r\n                                    style=\"background:#a92a23; color: #FFF;border-radius:72px;\"\r\n                                    (click)=\"updateUser()\">Update</button>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </form>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 33835:
/*!****************************************************************!*\
  !*** ./src/app/pages/user/user-list.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div aria-label=\"breadcrumb\" style=\" width: 100%; background-size: cover;  padding-top: 10px;\">\r\n        <ol class=\"breadcrumb\" style=\"background: transparent; margin-left: 15px;\">\r\n                <li class=\"breadcrumb-item\" aria-current=\"page\"><a style=\"color: #a92a23; font-size: 16px;\">User</a>\r\n                </li>\r\n        </ol>\r\n</div>\r\n<div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                        <div style=\"padding: 0px 15px;\">\r\n                                <div class=\"userlist-table w-100\">\r\n                                        <mat-form-field class=\"filter-search\">\r\n                                                <mat-label>Search</mat-label>\r\n                                                <input matInput [(ngModel)]=\"userSearchValue\" (keyup)=\"searchUser()\"\r\n                                                        placeholder=\"Search by name\">\r\n                                                <mat-icon *ngIf=\"roleName != 'staff'\" aria-hidden=\"false\"\r\n                                                        aria-label=\"Example add icon\" (click)=\"adduser()\">add\r\n                                                </mat-icon>\r\n\r\n                                        </mat-form-field>\r\n                                        <div style=\"overflow-y: auto;\" class=\"table-responsive\">\r\n                                                <table mat-table [dataSource]=\"userList\" matSort\r\n                                                        class=\"mat-elevation-z8 w-100\">\r\n\r\n                                                        <!-- Position Column -->\r\n                                                        <ng-container matColumnDef=\"position\">\r\n                                                                <th mat-header-cell *matHeaderCellDef> S.No </th>\r\n                                                                <td mat-cell *matCellDef=\"let element\">\r\n                                                                        {{element.position}}\r\n                                                                </td>\r\n                                                        </ng-container>\r\n\r\n\r\n                                                        <!-- First Name Column -->\r\n                                                        <ng-container matColumnDef=\"userName\">\r\n                                                                <th mat-header-cell *matHeaderCellDef mat-sort-header\r\n                                                                        mat-sort-header=\"userName\"\r\n                                                                        (click)=\"sortTable()\"> User\r\n                                                                        Name </th>\r\n                                                                <td style=\"color: #17a2b8; cursor: pointer; text-transform: capitalize;\"\r\n                                                                        mat-cell *matCellDef=\"let element\"\r\n                                                                        (click)=\"edituserdetail(element.id)\">\r\n                                                                        <img class=\"user-profile\"\r\n                                                                                [src]=\"element.userProfile ? element.userProfile : '../../../assets/images/profile.jpg'\"\r\n                                                                                alt=\"logo\"> {{element.userName}}\r\n                                                                </td>\r\n                                                        </ng-container>\r\n\r\n                                                        <!-- First Name Column -->\r\n                                                        <ng-container matColumnDef=\"firstname\">\r\n                                                                <th mat-header-cell *matHeaderCellDef mat-sort-header\r\n                                                                        mat-sort-header=\"firstname\"\r\n                                                                        (click)=\"sortTable()\"> First\r\n                                                                        Name </th>\r\n                                                                <td style=\"text-transform: capitalize;\" mat-cell\r\n                                                                        *matCellDef=\"let element\">\r\n                                                                        {{element.firstname}}\r\n                                                                </td>\r\n                                                        </ng-container>\r\n\r\n                                                        <!-- Last Name Column -->\r\n                                                        <ng-container matColumnDef=\"lastname\">\r\n                                                                <th mat-header-cell *matHeaderCellDef mat-sort-header\r\n                                                                        mat-sort-header=\"lastname\"\r\n                                                                        (click)=\"sortTable()\"> Last\r\n                                                                        Name </th>\r\n                                                                <td style=\"text-transform: capitalize;\" mat-cell\r\n                                                                        *matCellDef=\"let element\"> {{element.lastname}}\r\n                                                                </td>\r\n                                                        </ng-container>\r\n\r\n                                                        <!-- Role Column -->\r\n                                                        <ng-container matColumnDef=\"role\">\r\n                                                                <th mat-header-cell *matHeaderCellDef> Role </th>\r\n                                                                <td mat-cell *matCellDef=\"let element\"> {{element.role}}\r\n                                                                </td>\r\n                                                        </ng-container>\r\n\r\n                                                        <!-- Email Column -->\r\n                                                        <ng-container matColumnDef=\"email\">\r\n                                                                <th mat-header-cell *matHeaderCellDef mat-sort-header\r\n                                                                        mat-sort-header=\"email\" (click)=\"sortTable()\">\r\n                                                                        Email\r\n                                                                </th>\r\n                                                                <td mat-cell *matCellDef=\"let element\">\r\n                                                                        {{element.email}} </td>\r\n                                                        </ng-container>\r\n\r\n                                                        <!-- Mobile Column -->\r\n                                                        <!-- <ng-container matColumnDef=\"mobile\">\r\n                                                                <th mat-header-cell *matHeaderCellDef> Mobile </th>\r\n                                                                <td mat-cell *matCellDef=\"let element\">\r\n                                                                        {{element.mobile}} </td>\r\n                                                        </ng-container> -->\r\n\r\n                                                        <!-- createdDate Column -->\r\n                                                        <ng-container matColumnDef=\"createdDate\">\r\n                                                                <th mat-header-cell mat-sort-header\r\n                                                                        mat-sort-header=\"createdDate\"\r\n                                                                        (click)=\"sortTable()\" *matHeaderCellDef> Created\r\n                                                                        Date </th>\r\n                                                                <td mat-cell *matCellDef=\"let element\">\r\n                                                                        {{element.createdDate  | date: 'dd/MM/yyyy'}}\r\n                                                                </td>\r\n                                                        </ng-container>\r\n\r\n                                                        <ng-container matColumnDef=\"actions\">\r\n                                                                <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n                                                                <td mat-cell *matCellDef=\"let row\">\r\n\r\n                                                                        <i matTooltip=\"Edit\" class=\"fas fa-edit\"\r\n                                                                                style=\"font-size: 20px; cursor: pointer; padding-left: 9px; padding-right: 9px; color: gray\"\r\n                                                                                (click)=\"edituserdetail(row.id)\"></i>\r\n\r\n                                                                        <mat-slide-toggle [ngModel]=row.isActive\r\n                                                                                matTooltip=\"Active Status\"\r\n                                                                                (change)=\"userStatusToggle($event, row.id)\"\r\n                                                                                *ngIf=\"roleName != 'admin'\">\r\n                                                                        </mat-slide-toggle>\r\n\r\n                                                                </td>\r\n                                                        </ng-container>\r\n\r\n                                                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                                                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                                                        </tr>\r\n                                                </table>\r\n                                        </div>\r\n                                        <mat-paginator #paginator [length]=totalRecords [pageSize]=\"10\"\r\n                                                (page)=\"nextPage($event)\" [showFirstLastButtons]=\"true\">\r\n                                        </mat-paginator>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n</div>";

/***/ }),

/***/ 695:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/add-participation/add-participation.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div style=\"width: 900px; height: 500px;\">\r\n    <!-- <span (click)=\"closePopup()\">\r\n    <mat-icon aria-hidden=\"false\" class=\"popupclosebutton\" aria-label=\"Example clear icon\">clear</mat-icon>\r\n</span> -->\r\n\r\n    <div style=\"margin: -24px;\">\r\n        <header class=\"accent theme-color \"\r\n            style=\"background-color:#3B4E6C; margin-bottom: 40px; border-radius: 3px 10px 0px 0px;\" fxLayout=\"row\"\r\n            fxLayoutAlign=\"space-between center\">\r\n\r\n            <div style=\"padding: 14px;color:#FFF;\" class=\"mat-dialog-title\" mat-dialog-title=\"\" id=\"mat-dialog-title-2\">\r\n                Add Participant <span style=\"float: right;\" title=\"Close\">\r\n                </span>\r\n            </div>\r\n        </header>\r\n    </div>\r\n\r\n    <form [formGroup]=\"participationForm\" style=\"border-radius: 10px 10px 0px 0px;\">\r\n        <h4>Personal Info</h4>\r\n\r\n        <mat-form-field class=\"quater-width\">\r\n            <mat-label>Title</mat-label>\r\n            <input matInput placeholder=\"Enter the Title\" formControlName=\"title\">\r\n            <mat-error class=\"mb-5\">Title is required!</mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"quater-width\">\r\n            <mat-label>First Name</mat-label>\r\n            <input matInput placeholder=\"Enter the First Name\" formControlName=\"firstName\">\r\n            <mat-error class=\"mb-5\">First Name is required!</mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"quater-width\">\r\n            <mat-label>Last Name</mat-label>\r\n            <input matInput placeholder=\"Enter the Last Name\" formControlName=\"lastName\">\r\n            <mat-error class=\"mb-5\">Last Name is required!</mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"quater-width\">\r\n            <mat-label>Email</mat-label>\r\n            <input matInput placeholder=\"ex: example@example.com\" formControlName=\"email\"\r\n                pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\">\r\n            <mat-error class=\"mb-5\">Email is required!</mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"quater-width\">\r\n            <mat-label>Manager Title</mat-label>\r\n            <input matInput placeholder=\"Enter the Manager Title\" formControlName=\"managertitle\">\r\n            <mat-error class=\"mb-5\">Manager Title is required!</mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"quater-width\">\r\n            <mat-label>Manager Name</mat-label>\r\n            <input matInput placeholder=\"Enter the Manager Name\" formControlName=\"managername\">\r\n            <mat-error class=\"mb-5\">Manager Name is required!</mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"quater-width\">\r\n            <mat-label>Organization Name</mat-label>\r\n            <input matInput placeholder=\"Enter the Organization Name\" formControlName=\"organizationName\">\r\n            <mat-error class=\"mb-5\">Organization Name is required!</mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"quater-width\">\r\n            <mat-label>Office Mobile</mat-label>\r\n            <input matInput placeholder=\"Enter the Office mobile\" formControlName=\"officeMobile\" (keypress)=\"keyPress($event)\"\r\n                [validation]=\"true\" mask=\"(000) 000-0000\">\r\n            <mat-error class=\"mb-5\">Office Mobile is required!</mat-error>\r\n        </mat-form-field>\r\n\r\n        <h4>Address Info</h4>\r\n\r\n        <mat-form-field class=\"quater-width\">\r\n            <mat-label>Address</mat-label>\r\n            <input matInput placeholder=\"Enter the Address\" formControlName=\"address\">\r\n            <mat-error class=\"mb-5\">Address is required!</mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"quater-width\">\r\n            <mat-label>City</mat-label>\r\n            <input matInput placeholder=\"Enter the City\" formControlName=\"city\">\r\n            <mat-error class=\"mb-5\">City is required!</mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"quater-width\">\r\n            <mat-label>State</mat-label>\r\n            <input matInput placeholder=\"Enter the State\" formControlName=\"state\">\r\n            <mat-error class=\"mb-5\">State is required!</mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"quater-width\">\r\n            <mat-label>Country</mat-label>\r\n            <input matInput placeholder=\"Enter the Country\" formControlName=\"country\">\r\n            <mat-error class=\"mb-5\">Country is required!</mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"quater-width\">\r\n            <mat-label>Zipcode</mat-label>\r\n            <input matInput placeholder=\"Enter the Zipcode\" formControlName=\"zipcode\" maxlength=\"7\"\r\n                (keypress)=\"keyPress($event)\">\r\n            <mat-error class=\"mb-5\">Zipcode is required!</mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"quater-width\">\r\n            <mat-label>Mobile</mat-label>\r\n            <input matInput placeholder=\"Enter the mobile\" formControlName=\"mobile\" (keypress)=\"keyPress($event)\"\r\n                [validation]=\"true\" mask=\"(000) 000-0000\">\r\n            <mat-error class=\"mb-5\">Mobile is required!</mat-error>\r\n        </mat-form-field>\r\n        <div class=\"btn_sec\" style=\"text-align:center; margin-top: 20px;\">\r\n            <button mat-button (click)=\"dialogRef.close(true)\"\r\n                style=\"background: #DEDEDE; color:grey; border-radius:72px; width: 10%;\">Cancel</button>\r\n            <button *ngIf=\"!isEdit\" class=\"saveButton\" mat-button\r\n                style=\"background: #a92a23; width: 10%; color: #FFF; border-radius:72px;\" class=\"ml-2\"\r\n                (click)=\"createparticipant()\">Save</button>\r\n            <button *ngIf=\"isEdit\" class=\"saveButton\" mat-button\r\n                style=\"background: #a92a23; width: 10%; color: #FFF; border-radius:72px;\" class=\"ml-2\"\r\n                (click)=\"updateParticipantDetail()\">Update</button>\r\n        </div>\r\n\r\n    </form>\r\n\r\n</div>";

/***/ }),

/***/ 26430:
/*!********************************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"mat-dialog-container\">\r\n    <header class=\"logout-head\" style=\"background-color:#3B4E6C;margin-bottom: 20px;color: white;padding: 12px;\"\r\n        fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div class=\"mr-4\">Confirmation</div>\r\n        <!-- <a mat-icon-button matSuffix style=\"margin-right: 5px; margin-bottom: 2px;\">\r\n          <mat-icon style=\" color: #FFF;\">lock_open</mat-icon>\r\n        </a> -->\r\n\r\n    </header>\r\n    <div style=\"text-align:center;margin-bottom: 25px;\">\r\n        <p style=\"margin-right:20px;margin-left:20px;\">{{confirmMessage}}</p>\r\n        <button class=\"yesbutton\" (click)=\"closeDialog(false)\" mat-button>No</button>\r\n        <button class=\"yesbutton\" mat-button\r\n            style=\"background: #A92A23;  margin-right: 0px; color: #FFF; border-radius:72px;\"\r\n            (click)=\"closeDialog(true)\">Yes</button>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 96056:
/*!********************************************************************************!*\
  !*** ./src/app/shared/custom-analyze/custom-analyze.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n    <header class=\"logout-head\" style=\"background-color:#3B4E6C;margin-bottom: 20px;color: white;padding: 12px;\"\r\n        fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div class=\"mr-4\">Select Essentials for analyze</div>\r\n    </header>\r\n    <div style=\"text-align:center;\">\r\n        <p style=\"margin-right:20px;margin-left:20px;\">Please select and confirm your desired\r\n            essentials\r\n            below before\r\n            analysis</p>\r\n        <div style=\"padding-bottom: 10px;padding-right: 10%;padding-left: 10%;\">\r\n            <span style=\"padding: 10px;\" *ngFor=\"let category of categories; let index=index\">\r\n                <mat-checkbox (change)=\"checkboxChange(index)\" checked=\"category.checked\">{{category.name}}\r\n                </mat-checkbox>\r\n            </span>\r\n        </div>\r\n        <mat-divider style=\"padding-top: 20px;\"></mat-divider>\r\n\r\n        <p style=\"margin-right:20px;margin-left:20px;\">Please select the type of terminology to\r\n            analyze\r\n        </p>\r\n\r\n        <div style=\"padding-bottom: 10px;padding-right: 10%;padding-left: 10%;\">\r\n            <span style=\"padding: 10px;\">\r\n                <mat-checkbox style=\"padding-left: 20px;\" class=\"example-margin\" [(ngModel)]=\"global\" checked=\"global\">\r\n                    Global</mat-checkbox>\r\n                <mat-checkbox style=\"padding-left: 20px;\" class=\"example-margin\" [(ngModel)]=\"your\" checked=\"your\">Your\r\n                </mat-checkbox>\r\n            </span>\r\n        </div>\r\n\r\n        <mat-divider style=\"padding-top: 20px;\"></mat-divider>\r\n\r\n        <button class=\"yesbutton\" (click)=\"closeDialog()\" mat-button>Cancel</button>\r\n        <button class=\"yesbutton\" mat-button\r\n            style=\"background: #A92A23;  margin-right: 0px; color: #FFF; border-radius:72px;\"\r\n            (click)=\"confirmDialog()\">Confirm</button>\r\n\r\n    </div>\r\n</div>";

/***/ }),

/***/ 50573:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/possible-variants/possible-variants.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n    <header class=\"logout-head\" style=\"background-color:#3B4E6C;margin-bottom: 20px;color: white;padding: 12px;\"\r\n        fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div class=\"mr-4\">Possible Variants</div>\r\n        <!-- <a mat-icon-button matSuffix style=\"margin-right: 5px; margin-bottom: 2px;\">\r\n          <mat-icon style=\" color: #FFF;\">lock_open</mat-icon>\r\n        </a> -->\r\n\r\n    </header>\r\n    <!-- <div style=\"text-align:center;\"> -->\r\n        <form [formGroup]=\"variantForm\" class=\"ant-advanced-search-form\">\r\n            <div class=\"row\">\r\n                <div class=\"col-10\">\r\n                    <mat-form-field class=\"example-quater-width \" style=\"width: 100%; padding-left: 110px;\">\r\n                        <mat-label>Edit Word</mat-label>\r\n                        <input matInput placeholder=\"Text here\" formControlName=\"variantRootWord\"\r\n                            (keypress)=\"restrictToAlphabets($event)\" (keydown.enter)=\"checkVariants()\" required>\r\n                        <mat-error class=\"mb-5\">Root Word is required!</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-1\">\r\n                    <mat-icon aria-hidden=\"false\" title=\"Check Variants\" class=\"synonymouspopupaddbutton\" (click)=\"checkVariants()\"\r\n                        aria-label=\"Example add icon\">refresh\r\n                    </mat-icon>\r\n                </div>\r\n            </div>\r\n            <mat-divider></mat-divider>\r\n\r\n            <div *ngIf=\"variantList.length != 0\" style=\"padding: 10px;\">\r\n                <button *ngFor=\"let variant of variantList\" mat-button style=\" background: #FFFFFF; margin: 5px; color:black; border-radius:72px;border: 1px solid;\r\n                    border-color: #9C9C9C;\">{{variant}}\r\n                    <mat-icon aria-hidden=\"false\" style=\"margin-left: 7px;\" aria-label=\"Example clear icon\"\r\n                        class=\"crossbutton\" (click)=\"deleteItem(variant)\">\r\n                        clear</mat-icon>\r\n                </button>\r\n            </div>\r\n            <div *ngIf=\"variantList.length == 0\" style=\"padding: 10px; text-align:center;\">\r\n                No Variants Found\r\n            </div>\r\n\r\n            <mat-divider style=\"padding-bottom: 10px;\"></mat-divider>\r\n\r\n            <!-- <mat-divider style=\"padding-bottom: 15px;\"></mat-divider> -->\r\n            <div style=\"display: flex;justify-content: flex-end; padding-right: 40px;\">\r\n                <button class=\"saveButton\" mat-button\r\n                    style=\"background:#EFEFEF; color: #B1B1B1;border-radius: 40px;width: 122px; margin-right: 10px;\"\r\n                    (click)=\"closeDialog()\">Cancel</button>\r\n                <button class=\"saveButton\" mat-button\r\n                    style=\"background: #a92a23; color: #FFF; border-radius: 40px; width: 122px\"\r\n                    (click)=\"addToSynonyms()\">Add</button>\r\n            </div>\r\n        </form>\r\n\r\n    <!-- </div> -->\r\n</div>";

/***/ }),

/***/ 5859:
/*!****************************************************************************!*\
  !*** ./src/app/shared/profile-crop/profile-crop.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div [className]=\"classes.actions\">\r\n  <button ly-button color=\"primary\" (click)=\"_fileInput.click()\">\r\n    <ly-icon>image</ly-icon>\r\n    <span>Select File</span>\r\n  </button>\r\n  <span [className]=\"classes.flex\"></span>\r\n  <!-- Hidden input -->\r\n  <input #_fileInput type=\"file\" (change)=\"cropper.selectInputEvent($event)\" accept=\"image/*\" hidden>\r\n  <button raised ly-button bg=\"accent\" *ngIf=\"cropper.isCropped\">Upload</button>\r\n</div>\r\n\r\n<div *ngIf=\"cropper.isLoaded\">\r\n  <button (click)=\"cropper.zoomIn()\" ly-button appearance=\"icon\"><ly-icon>zoom_in</ly-icon></button>\r\n  <button (click)=\"cropper.zoomOut()\" ly-button appearance=\"icon\"><ly-icon>zoom_out</ly-icon></button>\r\n  <button (click)=\"cropper.center()\" ly-button appearance=\"icon\"><ly-icon>filter_center_focus</ly-icon></button>\r\n  <button (click)=\"cropper.rotate(-90)\" ly-button appearance=\"icon\"><ly-icon>rotate_90_degrees_ccw</ly-icon></button>\r\n  <button (click)=\"cropper.fit()\" ly-button>Fit</button>\r\n  <button (click)=\"cropper.fitToScreen()\" ly-button>Fit to screen</button>\r\n  <button (click)=\"cropper.setScale(1)\" ly-button>1:1</button>\r\n  <button (click)=\"cropper.clean()\" ly-button>Clean</button>\r\n</div>\r\n\r\n<ly-img-cropper [withClass]=\"classes.cropper\"\r\n  [config]=\"myConfig\"\r\n  (cropped)=\"onCropped($event)\"\r\n  (ready)=\"ready = true\"\r\n  (cleaned)=\"ready = false\"\r\n>\r\n  <span>Drag and drop image</span>\r\n</ly-img-cropper>\r\n\r\n<button *ngIf=\"cropper.isLoaded\" color=\"accent\" (click)=\"cropper.crop()\" ly-button>\r\n  <ly-icon>crop</ly-icon>crop\r\n</button>\r\n\r\n<div><img *ngIf=\"cropper.isCropped\" [src]=\"croppedImage\"></div>";

/***/ }),

/***/ 68969:
/*!****************************************************************************!*\
  !*** ./src/app/shared/synonyms-add/synonyms-add.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <span (click)=\"closeDialog()\">\r\n    <mat-icon aria-hidden=\"false\" class=\"popupclosebutton\" aria-label=\"Example clear icon\">clear</mat-icon>\r\n</span> -->\r\n<header class=\"logout-head\" style=\"background-color:#3B4E6C;margin-bottom: 20px;color: white;padding: 12px;\"\r\n    fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <div class=\"mr-4\">{{dialogType}}Terminology</div>\r\n</header>\r\n<form [formGroup]=\"synonymsAddForm\" class=\"ant-advanced-search-form\">\r\n    <div class=\"row\">\r\n        <div class=\"col-10\">\r\n            <mat-form-field class=\"example-quater-width \" style=\"width: 100%; padding-left: 140px;\">\r\n                <mat-label>{{dialogType}}Terminology</mat-label>\r\n                <input matInput placeholder=\"Text here\" formControlName=\"synonymName\" (keypress)=\"restrictToAlphabets($event)\" (keydown.enter)=\"addItems()\"\r\n                    required>\r\n                <mat-error class=\"mb-5\">Terminology is required!</mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"col-1\" *ngIf=\"!synonymEdit\">\r\n            <mat-icon aria-hidden=\"false\" class=\"synonymouspopupaddbutton\" (click)=\"addItems()\"\r\n                aria-label=\"Example add icon\">add\r\n            </mat-icon>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"synonymsAddNewList.length != 0\" style=\"padding: 10px;\">\r\n        <mat-divider></mat-divider>\r\n        <button *ngFor=\"let synonyms of synonymsAddNewList\" mat-button style=\" background: #FFFFFF; margin: 5px; color:black; border-radius:72px;border: 1px solid;\r\n            border-color: #9C9C9C;\">{{synonyms}}\r\n            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" (click)=\"editItem(synonyms)\"></i>\r\n            <mat-icon aria-hidden=\"false\" style=\"margin-left: 7px;\" aria-label=\"Example clear icon\" class=\"crossbutton\"\r\n                (click)=\"deleteItem(synonyms)\">\r\n                clear</mat-icon>\r\n        </button>\r\n        <mat-divider style=\"padding-bottom: 10px;\"></mat-divider>\r\n    </div>\r\n    <div style=\"display: flex;justify-content: flex-end; padding-right: 40px;\">\r\n        <button class=\"saveButton\" mat-button\r\n            style=\"background:#EFEFEF; color: #B1B1B1;border-radius: 40px;width: 122px\"\r\n            (click)=\"closeDialog()\">Cancel</button>\r\n        <button *ngIf=\"!synonymEdit\" class=\"saveButton\" mat-button\r\n            style=\"background: #a92a23; color: #FFF; border-radius: 40px; width: 122px\"\r\n            (click)=\"confirmCreateDialog()\">Save</button>\r\n        <button *ngIf=\"synonymEdit\" class=\"saveButton\" mat-button\r\n            style=\"background: #a92a23; color: #FFF; border-radius: 40px; width: 122px\"\r\n            (click)=\"confirmUpdateDialog()\">Update</button>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 55382:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 72095:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 61219:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map