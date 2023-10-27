(self["webpackChunkmap_frontend"] = self["webpackChunkmap_frontend"] || []).push([["src_app_pages_gropus_gropus_module_ts"],{

/***/ 83259:
/*!************************************!*\
  !*** ./src/app/members.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembersService": () => (/* binding */ MembersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _app_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.configuration */ 5898);






let MembersService = class MembersService {
  updateUserInTable(userDetails) {
    throw new Error('Method not implemented.');
  }
  updateUserDetails(userDetails) {
    throw new Error('Method not implemented.');
  }
  getUserDetails(userId) {
    throw new Error('Method not implemented.');
  }
  // getItemUrl: string = 'http://192.168.101.175:3000/api/v1/group';
  constructor(http, configuration) {
    this.http = http;
    this.configuration = configuration;
    this.apiURL = '';
    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json');
    this.apiURL = this.configuration.members;
  }
  createMembers(data) {
    let API_URL = `${this.apiURL}` + `/bulkCreate`;
    return this.http.post(API_URL, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  delete(id) {
    var API_URL = `${this.apiURL}/${id}`;
    return this.http.delete(API_URL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  getMemberById(id) {
    return this.http.get(`${this.apiURL}/${id}`);
  }
  memberListed() {
    return this.http.get(`${this.apiURL}`);
  }
  listed() {
    return this.http.get(`${this.apiURL}`);
  }
  membersUpdate(id, data) {
    const API_URL = `${this.apiURL}/${id}`;
    return this.http.put(API_URL, data, {
      headers: this.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  handleError(error) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)('Something bad happened; please try again later.');
  }
  getMemberData() {
    return this.http.get(`${this.apiURL}`);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }, {
    type: _app_configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration
  }];
};
MembersService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], MembersService);


/***/ }),

/***/ 97592:
/*!******************************************************!*\
  !*** ./src/app/pages/gropus/add-member.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMemberComponent": () => (/* binding */ AddMemberComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _add_member_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-member.component.html?ngResource */ 62427);
/* harmony import */ var _add_member_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-member.component.scss?ngResource */ 21082);
/* harmony import */ var _add_member_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_member_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_members_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/members.service */ 83259);
/* harmony import */ var src_app_crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/crud-http.service */ 6833);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/excel-service */ 69885);
/* harmony import */ var src_app_shared_services_mobile_number_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/mobile-number-service */ 93426);













let AddMemberComponent = class AddMemberComponent {
  constructor(memberService, crudHttpService, route, fb, router, configuration, toastr, dataService, activeRouter, excel, mobileService) {
    this.memberService = memberService;
    this.crudHttpService = crudHttpService;
    this.route = route;
    this.fb = fb;
    this.router = router;
    this.configuration = configuration;
    this.toastr = toastr;
    this.dataService = dataService;
    this.activeRouter = activeRouter;
    this.excel = excel;
    this.mobileService = mobileService;
    this.isEdit = false;
    this.membersUserList = [];
    this.memberList = [];
    this.organizationionList = [];
    this.checkboxValue = false;
    this.isStep1Completed = false;
    this.isStep1Disabled = false;
    this.isStep2Completed = false;
    this.isStep2Disabled = true;
    this.Category = [{
      value: 'Peer',
      viewValue: 'Peer'
    }, {
      value: 'directReporter',
      viewValue: 'Direct Reporter'
    }];
    this.memberArray = [];
    const memberFormGroup = this.fb.group({
      firstName: [''],
      lastName: [''],
      title: [''],
      organization: [''],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]],
      mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, this.mobileNumberValidator()]],
      roles: [''],
      questTemplate: [''],
      questionsPDF: ['']
    });
    this.membersForm = this.fb.group({
      particfirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      particlastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      partictitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      partciOrganization: [''],
      partciEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]],
      partciMobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, this.mobileNumberValidator()]],
      questionPDF: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      resCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      members: this.fb.array([memberFormGroup])
    });
  }
  ngOnInit() {
    let apiUrl = this.configuration.survey;
    this.activeRouter.queryParams.subscribe(queryParams => {
      this.id = queryParams.ID;
      this.orgName = queryParams.OrgName;
      this.templateId = queryParams.temp; // Parse as an integer
    });

    this.dataService.getById(apiUrl, this.templateId).subscribe(data => {
      this.tempName = data.data.temple.templateName;
      this.patchData();
    });
    this.getOrganizationList();
    this.getSurveyList();
    this.membersList();
  }
  patchData() {
    const particiOrg = this.membersForm.get('partciOrganization');
    const quesPDF = this.membersForm.get('questionPDF');
    quesPDF.setValue(this.tempName);
    quesPDF.disable();
    particiOrg.setValue(this.orgName);
    particiOrg.disable();
    const membersArray = this.membersForm.get('members');
    membersArray.controls.forEach(member => {
      const memberArray = member.get('organization');
      const quesArray = member.get('questionsPDF');
      quesArray.setValue(this.tempName);
      quesArray.disable();
      memberArray.setValue(this.orgName);
      memberArray.disable();
    });
  }
  get members() {
    return this.membersForm.get('members');
  }
  addMember() {
    const dropdownValue = this.membersForm.get('resCategory').value;
    this.members.push(this.fb.group({
      firstName: [''],
      lastName: [''],
      title: [''],
      organization: [''],
      email: [''],
      roles: [dropdownValue],
      mobile: [''],
      questTemplate: [''],
      questionsPDF: ['']
    }));
    const membersArray = this.membersForm.get('members');
    membersArray.controls.forEach(member => {
      const memberArray = member.get('organization');
      const quesArray = member.get('questionsPDF');
      quesArray.setValue(this.tempName);
      quesArray.disable();
      memberArray.setValue(this.orgName);
      memberArray.disable();
    });
  }
  deletedTable(i) {
    this.members.removeAt(i);
  }
  removeMember(index) {
    this.members.removeAt(index);
  }
  roles(item) {
    let dropdownValue = this.membersForm.get('resCategory').value;
    let rolesField = this.membersForm.get('members');
    // Get the last control in the FormArray
    let lastControlIndex = rolesField.length - 1;
    let lastMember = rolesField.at(lastControlIndex);
    if (lastMember) {
      let roles = lastMember.get('roles');
      roles.patchValue(dropdownValue);
    }
  }
  onCheckboxChange(event) {
    this.checkboxValue = !this.checkboxValue;
    if (this.checkboxValue) {
      this.Category.push({
        value: 'Supervisor',
        viewValue: 'SuperVisor'
      });
    } else {
      let index = this.Category.indexOf({
        value: 'Supervisor',
        viewValue: 'SuperVisor'
      });
      this.Category.splice(index, 1);
    }
  }
  membersList() {
    this.memberService.memberListed().subscribe(response => {
      this.memberList = response;
    }, error => {});
  }
  mobileNumberValidator() {
    return control => {
      const mobileNumber = control.value;
      const isValid = /^\d{10}$/.test(mobileNumber);
      return isValid ? null : {
        'invalidMobileNumber': true
      };
    };
  }
  submitParticipe() {
    const participantFirstName = this.membersForm.controls.particfirstName;
    const participantLastName = this.membersForm.controls.particlastName;
    const participantTitle = this.membersForm.controls.partictitle;
    const participantEmail = this.membersForm.controls.partciEmail;
    const participantMobile = this.membersForm.controls.partciMobile;
    if (participantFirstName.invalid) {
      this.toastr.warning('Please enter a valid first name.');
      return;
    }
    if (participantLastName.invalid) {
      this.toastr.warning('Please enter a valid last name.');
      return;
    }
    if (participantTitle.invalid) {
      this.toastr.warning('Please enter a valid title.');
      return;
    }
    if (participantEmail.invalid) {
      this.toastr.warning('Please enter a valid email address.');
      return;
    }
    if (participantMobile.invalid) {
      this.toastr.warning('Please enter a valid mobile number.');
      return;
    }
    let apiUrl = this.configuration.participe;
    let participantData = {
      participantFirstName: this.membersForm.controls.particfirstName.value,
      participantLastName: this.membersForm.controls.particlastName.value,
      participantTitle: this.membersForm.controls.partictitle.value,
      group_id: this.id,
      template_id: this.templateId,
      participantEmail: this.membersForm.controls.partciEmail.value,
      participantMobile: this.membersForm.controls.partciMobile.value
    };
    this.dataService.addParticipant(apiUrl, participantData).subscribe(data => {
      this.participantID = data.data._id;
      this.toastr.success('Participant Created Succesfully');
      this.stepper.next();
    }, err => {
      this.toastr.error('Something Went Wrong');
    });
  }
  submitMembers() {
    if (this.participantID) {
      let formArrayValue = this.members.value;
      // Check each member data individually
      for (let i = 0; i < formArrayValue.length; i++) {
        const value = formArrayValue[i];
        // Check if the firstName is empty
        if (!value.firstName || value.firstName.trim() === '') {
          this.toastr.warning(`Please fill in the First Name for member ${i + 1}.`);
          return;
        }
        // Check if the lastName is empty
        if (!value.lastName || value.lastName.trim() === '') {
          this.toastr.warning(`Please fill in the Last Name for member ${i + 1}.`);
          return;
        }
        // Check if the email is empty and has a valid format
        if (!value.email || !this.isValidEmail(value.email)) {
          this.toastr.warning(`Please enter a valid email for member ${i + 1}.`);
          return;
        }
        // Check if the mobile is empty and has a valid format
        if (!value.mobile || !this.isValidPhone(value.mobile)) {
          this.toastr.warning(`Please enter a valid phone number for member ${i + 1}.`);
          return;
        }
        // Check if the roles field is empty
        if (!value.roles) {
          this.toastr.warning(`Please select a role for member ${i + 1}.`);
          return;
        }
        // Check other fields similarly...
        let memberData = {
          firstName: value.firstName,
          lastName: value.lastName,
          title: value.title,
          email: value.email,
          mobile: value.mobile,
          participant_id: this.participantID,
          template_id: this.templateId,
          catogory: value.roles
        };
        this.memberArray.push(memberData);
      }
    }
    this.memberService.createMembers(this.memberArray).subscribe(item => {
      this.toastr.success('Members Created Successfully !!!');
      this.router.navigate(['/map/groups/group-details'], {
        queryParams: {
          isEdit: 'true',
          ID: this.id.toString()
        }
      });
    }, error => {
      this.toastr.error('please fill the all required fields');
    });
  }
  // Function to validate email format
  isValidEmail(email) {
    // Use a regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  // Function to validate phone number format
  isValidPhone(phone) {
    // Use a regular expression for basic phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  }
  keyPress(event) {
    const pattern = /[0-9\+\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  getOrganizationList() {
    this.crudHttpService.getItems().subscribe(response => {
      this.organizationionList = response.data;
      // const sample = this.organizationionList.organizationName
    }, error => {});
  }
  getSurveyList(currentPage, searchData) {
    if (searchData) {
      var service = this.configuration.survey + `?search=${searchData}&orderType=DESC`;
    } else {
      var service = this.configuration.survey + `?page=${currentPage ? currentPage : 0}&size=${10}&orderType=DESC`;
    }
    // this.spinner.show();
    this.dataService.getQuestionList(service).subscribe(result => {
      this.questionList = [];
      if (result.isSuccess && result.data.length > 0) {
        this.questionList = result.data;
      }
    }, error => console.log(error.message));
  }
  organization(item) {
    this.organizationId = item._id;
  }
  template(item) {
    this.templateId = item._id;
  }
  getparticipantList(currentPage, searchData) {
    if (searchData) {
      var service = this.configuration.participe + `?search=${searchData}&orderType=DESC`;
    } else {
      var service = this.configuration.participe + `?page=${currentPage ? currentPage : 0}&size=${10}&orderType=DESC`;
    }
    this.dataService.getParticipantList(service).subscribe(result => {
      this.participantList = [];
      if (result.isSuccess && result.data.length > 0) {
        this.participantList = result.data;
        this.toastr.success(result.message);
      }
    }), error => {
      this.toastr.error(error.message);
    };
  }
  cancel() {
    this.router.navigate(['/map/groups']);
  }
  adduser() {
    this.router.navigate(['/map/groups/howard-members']);
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_members_service__WEBPACK_IMPORTED_MODULE_2__.MembersService
  }, {
    type: src_app_crud_http_service__WEBPACK_IMPORTED_MODULE_3__.CrudHttpService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_5__.Configuration
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService
  }, {
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
  }, {
    type: src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__.ExcelService
  }, {
    type: src_app_shared_services_mobile_number_service__WEBPACK_IMPORTED_MODULE_7__.MobileService
  }];
  static #_2 = this.propDecorators = {
    stepper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
      args: ['stepper']
    }]
  };
};
AddMemberComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-add-member',
  template: _add_member_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_add_member_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AddMemberComponent);


/***/ }),

/***/ 19100:
/*!*******************************************************!*\
  !*** ./src/app/pages/gropus/gropus-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GropusRoutingModule": () => (/* binding */ GropusRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _group_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-list.component */ 88657);
/* harmony import */ var _group_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-details.component */ 56110);
/* harmony import */ var _uno_members_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uno-members.component */ 88963);
/* harmony import */ var _howard_members_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./howard-members.component */ 18006);
/* harmony import */ var _add_member_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-member.component */ 97592);
/* harmony import */ var _response_pdf_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./response-pdf.component */ 50722);









const routes = [{
  path: '',
  component: _group_list_component__WEBPACK_IMPORTED_MODULE_0__.GroupListComponent
}, {
  path: 'group-details',
  component: _group_details_component__WEBPACK_IMPORTED_MODULE_1__.GroupDetailsComponent
}, {
  path: 'uno-members',
  component: _uno_members_component__WEBPACK_IMPORTED_MODULE_2__.UnoMembersComponent
}, {
  path: 'howard-members',
  component: _howard_members_component__WEBPACK_IMPORTED_MODULE_3__.HowardMembersComponent
}, {
  path: 'add-member',
  component: _add_member_component__WEBPACK_IMPORTED_MODULE_4__.AddMemberComponent
}, {
  path: 'response-pdf',
  component: _response_pdf_component__WEBPACK_IMPORTED_MODULE_5__.ResponsePdfComponent
}];
let GropusRoutingModule = class GropusRoutingModule {};
GropusRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
})], GropusRoutingModule);


/***/ }),

/***/ 86981:
/*!***********************************************!*\
  !*** ./src/app/pages/gropus/gropus.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GropusModule": () => (/* binding */ GropusModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _gropus_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gropus-routing.module */ 19100);
/* harmony import */ var _group_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-list.component */ 88657);
/* harmony import */ var _group_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group-details.component */ 56110);
/* harmony import */ var _uno_members_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uno-members.component */ 88963);
/* harmony import */ var _howard_members_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./howard-members.component */ 18006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var src_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/material.module */ 90370);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ 33351);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _add_member_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-member.component */ 97592);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/stepper */ 42261);
/* harmony import */ var _questions_pdf_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./questions-pdf.component */ 2248);
/* harmony import */ var _respondant_pdf_respondant_pdf_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./respondant-pdf/respondant-pdf.component */ 52311);
/* harmony import */ var _aggregate_pdf_aggregate_pdf_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aggregate-pdf/aggregate-pdf.component */ 68656);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-mask */ 7038);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ 42777);






















const maskConfig = {
  validation: false
};
let GropusModule = class GropusModule {};
GropusModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  declarations: [_group_list_component__WEBPACK_IMPORTED_MODULE_1__.GroupListComponent, _group_details_component__WEBPACK_IMPORTED_MODULE_2__.GroupDetailsComponent, _uno_members_component__WEBPACK_IMPORTED_MODULE_3__.UnoMembersComponent, _howard_members_component__WEBPACK_IMPORTED_MODULE_4__.HowardMembersComponent, _add_member_component__WEBPACK_IMPORTED_MODULE_6__.AddMemberComponent, _questions_pdf_component__WEBPACK_IMPORTED_MODULE_7__.QuestionsPdfComponent, _respondant_pdf_respondant_pdf_component__WEBPACK_IMPORTED_MODULE_8__.RespondantPdfComponent, _aggregate_pdf_aggregate_pdf_component__WEBPACK_IMPORTED_MODULE_9__.AggregatePdfComponent],
  imports: [_gropus_routing_module__WEBPACK_IMPORTED_MODULE_0__.GropusRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, src_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepperModule, ngx_mask__WEBPACK_IMPORTED_MODULE_21__.NgxMaskModule.forRoot(maskConfig)],
  exports: [ngx_spinner__WEBPACK_IMPORTED_MODULE_19__.NgxSpinnerModule]
})], GropusModule);


/***/ }),

/***/ 56110:
/*!*********************************************************!*\
  !*** ./src/app/pages/gropus/group-details.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupDetailsComponent": () => (/* binding */ GroupDetailsComponent)
/* harmony export */ });
/* harmony import */ var D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _group_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-details.component.html?ngResource */ 51876);
/* harmony import */ var _group_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group-details.component.scss?ngResource */ 12626);
/* harmony import */ var _group_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_group_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var src_app_crud_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/crud-http.service */ 6833);
/* harmony import */ var src_app_members_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/members.service */ 83259);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 63186);
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/excel-service */ 69885);

















let GroupDetailsComponent = class GroupDetailsComponent {
  constructor(fb, router, crudHttpService, route, memberService, spinner, dialog, dataService, configuration, toastr, cd, excel) {
    this.fb = fb;
    this.router = router;
    this.crudHttpService = crudHttpService;
    this.route = route;
    this.memberService = memberService;
    this.spinner = spinner;
    this.dialog = dialog;
    this.dataService = dataService;
    this.configuration = configuration;
    this.toastr = toastr;
    this.cd = cd;
    this.excel = excel;
    this.datasourced = false;
    this.isEdit = false;
    this.selectedFile = null;
    this.groupUserList = [];
    this.todoList = [];
    this.memberList = [];
    this.membersUserList = [];
    this.filteredData = [];
    this.displayedColumns = ['position', 'firstName', 'lastName', 'title', 'organization', 'email', 'mobile', 'pdf', 'actions'];
    this.workShop_data = [];
    this.organizationionList = [];
    this.organizationId = [];
    this.participantArray = [];
    this.usersData = [];
    this.columnsToDisplay = ['position', 'firstName', 'lastName', 'title', 'organization', 'email', 'mobile', 'pdf', 'actions'];
    this.innerDisplayedColumns = ['firstName', 'lastName', 'title', 'roles', 'organization', 'email', 'response pdf', 'actions'];
    this.showWorkshopFields = false;
    this.spin = [];
    this.groupsForm = this.fb.group({
      groupsName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      createdBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      createdDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      groupOrganization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      questionPDF: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      feedbackDue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      workshopStart: [''],
      workshopEnd: [''],
      workshopLeaderName: [''],
      workshopLeaderEmail: [''],
      id: ['']
    });
  }
  equals(objOne, objTwo) {
    if (typeof objOne !== 'undefined' && typeof objTwo !== 'undefined') {
      return objOne.id === objTwo.id;
    }
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.groupsForm.get('questionPDF').setValue(file);
    }
  }
  validateFileExtension(control) {
    const allowedExtensions = ['.pdf'];
    const file = control.value;
    if (file instanceof File) {
      const fileName = file.name.toLowerCase();
      if (!allowedExtensions.some(ext => fileName.endsWith(ext))) {
        return {
          invalidExtension: true
        };
      }
    }
    return null;
  }
  ngOnInit() {
    this.spinner.show();
    this.route.queryParams.subscribe(params => {
      // this.edit = true
      this.edit = params.isEdit;
      this.groupid = params.ID;
      const isEditId = params['ID'];
      this.groupId = params['ID'];
      this.showWorkshopFields = false;
      if (isEditId) {
        this.editId = isEditId;
        this.isEdit = true;
        let apiUrl = this.configuration.group;
        this.dataService.getGroupById(isEditId, apiUrl).subscribe(dataList => {
          this.dataGroupId = dataList?.data.group._id;
          if (this.dataGroupId == this.groupid) {
            dataList.data.workShop.forEach(re => {
              this.workshopId = re._id;
            });
          }
          if (dataList?.data?.workShop[0]) {
            this.showWorkshopFields = true;
          }
          this.example = dataList.data.workShop[0];
          this.SelectOrganizationName = dataList?.data?.group?.groupOranization_id;
          this.groupName = dataList?.data?.group?.groupName;
          this.Template = dataList?.data?.group?.tempalte_id?._id;
          this.groupsForm.patchValue({
            groupsName: dataList?.data?.group?.groupName,
            createdBy: dataList?.data?.group?.createdBy_Id,
            createdDate: dataList?.data?.group?.createdDate,
            groupOrganization: this.SelectOrganizationName,
            feedbackDue: dataList?.data?.group?.feedbackDueDate,
            questionPDF: dataList?.data?.group?.tempalte_id?._id,
            workshopStart: dataList?.data?.workShop[0]?.workshopStartDate,
            workshopEnd: dataList?.data?.workShop[0]?.workshopEndDate,
            workshopLeaderName: dataList?.data?.workShop[0]?.workshopLeaderName,
            workshopLeaderEmail: dataList?.data?.workShop[0]?.workshopLeaderEmail,
            name: dataList?.data?.workShop[0]?.name,
            id: dataList?.data?.workShop[0]?._id
          });
          this.membersUserList = dataList?.data?.participe;
        });
      }
    });
    this.userTodos();
    this.memberslistTodos();
    this.getMemberList();
    this.getOrganizationList();
    this.getSurveyList();
    this.getPartcipeMembers();
  }
  createWorkShop() {
    const payload = {
      "group_id": this.groupId,
      "name": this.groupsForm.value.groupsName || "",
      "workshopStartDate": this.groupsForm.value.workshopStart,
      "workshopEndDate": this.groupsForm.value.workshopEnd,
      "workshopLeaderName": this.groupsForm.value.workshopLeaderName,
      "workshopLeaderEmail": this.groupsForm.value.workshopLeaderEmail
    };
    this.dataService.workShopCreate(this.configuration.workShop, payload).subscribe(result => {
      this.groupUserList = [];
      this.groupUserList = result.data;
      this.toastr.success('Created WorkShop Data Without Group');
      this.router.navigate(['/map/groups']);
    }, error => console.log(error));
  }
  getPartcipeMembers() {
    console.log('group IDDDDDDDDDDD', this.groupId);
    this.usersData = []; // Clear the existing data array
    this.memberData = [];
    this.spinner.show();
    this.dataService?.getAll(this.configuration?.participe).subscribe(data => {
      this.spinner.hide();
      let membersData = data?.data;
      let filteredMembers = membersData.filter(item => item.group_id === this.groupId);
      this.memberData = filteredMembers;
      this.memberData.forEach((user, index) => {
        user.index = index + 1;
        if (user.Members && Array.isArray(user.Members) && user.Members?.length) {
          this.usersData = [...this.usersData, {
            ...user,
            Members: new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(user.Members)
          }];
        } else {
          this.usersData = [...this.usersData, user];
        }
      });
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.usersData);
      this.dataSource.sort = this.sort;
      console.log('this.dataSource', this.dataSource);
    }, error => {
      this.spinner.hide();
    });
  }
  toggleWorkshopFields(event) {
    this.showWorkshopFields = event.checked;
    const workShop = this.groupsForm.get('workshopStart');
    const workEnd = this.groupsForm.get('workshopEnd');
    const leaderName = this.groupsForm.get('workshopLeaderName');
    const leaderEmail = this.groupsForm.get('workshopLeaderEmail');
    // const workShopId = this.groupsForm.get('id')
    if (this.showWorkshopFields === true) {
      if (workShop) {
        workShop.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
        workShop.updateValueAndValidity();
      }
      if (workEnd) {
        workEnd.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
        workEnd.updateValueAndValidity();
      }
      if (leaderName) {
        leaderName.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
        leaderName.updateValueAndValidity();
      }
      if (leaderEmail) {
        leaderEmail.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]);
        leaderEmail.updateValueAndValidity();
      }
    } else {
      if (workShop) {
        workShop.clearValidators();
        workShop.updateValueAndValidity();
      }
      if (workEnd) {
        workEnd.clearValidators();
        workEnd.updateValueAndValidity();
      }
      if (leaderName) {
        leaderName.clearValidators();
        leaderName.updateValueAndValidity();
      }
      if (leaderEmail) {
        leaderEmail.clearValidators();
        leaderEmail.updateValueAndValidity();
      }
    }
  }
  uploadResults(data, i) {
    this.index = i;
    this.id = data?._id;
    if (data?.prompt) {
      this.tempPrompt = data?.prompt;
    } else {
      const tempUrl = this.configuration.survey;
      this.dataService.getById(tempUrl, this.Template).subscribe(data => {
        this.tempPrompt = data?.data?.prompt[0].prompt;
      });
    }
    const participe = this.configuration.participe;
    this.dataService.getById(participe, this.id).subscribe(data => {
      if (data?.data[0]?.Result_pdf[0]?._id) {
        this.resultPDFid = data?.data[0]?.Result_pdf[0]?._id;
      }
    });
    this.fileInput.nativeElement.value = '';
    this.fileInput.nativeElement.click();
  }
  onInputPdf(event) {
    this.pdfTemp = event?.target?.files[0]?.name;
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.handleSendFile();
    }
  }
  handleSendFile() {
    var _this = this;
    return (0,D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // const userPrompt = `You are a consultant. Using your expert analysis skills, tell me what is the employee biggest Strengths and Weaknesses are based on the Supervisor and Peer Feedback only, while ignoring the Numeric Feedback, and make sure to include 3 specific comments to reinforce each strength and weakness, from either his Supervisor or his Peers and making sure to label who it came from at the end of each comment for each of the 6 Functions of Management which are COMMUNICATING (e.g., style, effectiveness, frequency, internal, external, etc.), PLANNING (e.g., no formal planning, unclear goals or projects, etc.), STAFFING (e.g., recruiting, selecting the right people, training, development, retaining, etc.), ORGANIZING (e.g., personal organization, availability of supplies, equipment, financial resources, time, organizational structure, etc.), CONTROLLING (e.g., accountability, follow-through, taking corrective action, cost and inventory control, productivity, quality, etc.) and LEADING (e.g., clear vision, motivation, teamwork, initiating action, innovation, commitment to team goals, etc.)? Then summarize his Top 3 Strengths and Top 2 Weaknesses based on frequency of feedback mentioned, including 3 Comments to reinforce each Strength and Weakness and making sure to label who each comment came from at the end and the number of times that this feedback is mentioned, including a total.`
      if (_this.selectedFile === null || _this.tempPrompt === ' ') {
        _this.toastr.warning('Enter The Prompt');
      } else {
        _this.spin[_this.index] = true;
        _this.anyTrueValue = _this.spin.some(value => value === true);
        _this.dataService.uploadPdfAndData(_this.selectedFile, _this.tempPrompt, _this.selectedFile.name).subscribe(data => {
          _this.feedbackContent = data;
          let surveyUrl = _this.configuration.resultPDF;
          let postData = {
            participant_id: _this.id,
            text: _this.feedbackContent,
            template_id: _this.Template,
            fileName: _this.pdfTemp
          };
          _this.dataService.add(surveyUrl, postData).subscribe(res => {
            // this.router.navigate['/map/groups/group-details']; 
            window.location.reload();
            _this.spin[_this.index] = false;
            _this.anyTrueValue = _this.spin.some(value => value === true);
          }, err => {
            if (err?.error?.message === `Result PDF already created!!`) {
              let updatePayload = {
                text: _this.feedbackContent,
                fileName: _this.pdfTemp
              };
              _this.dataService.update(_this.resultPDFid, surveyUrl, updatePayload).subscribe(val => {
                _this.toastr.success('PDF Uploaded');
                _this.spin[_this.index] = false;
                _this.anyTrueValue = _this.spin.some(value => value === true);
              }, err => {
                _this.toastr.error('Something Went Wrong');
                _this.spin[_this.index] = false;
                _this.anyTrueValue = _this.spin.some(value => value === true);
              });
            } else {
              _this.toastr.error('Something Went Wrong');
              _this.spin[_this.index] = false;
              _this.anyTrueValue = _this.spin.some(value => value === true);
            }
          });
        }, err => {
          _this.spin[_this.index] = false;
          _this.anyTrueValue = _this.spin.some(value => value === true);
          _this.toastr.error('Something Went Wrong');
        });
        // this.userPrompt = ' '
      }
    })();
  }

  aggregate(type) {
    // this.route.navigate(['/aggregate-pdf'])
    const baseUrl1 = window.location.origin;
    const url = this.router.createUrlTree(['/aggregate-pdf'], {
      queryParams: {
        groupId: this.groupId,
        temp: this.Template,
        partId: type._id
      }
    }).toString();
    window.open(`${baseUrl1}${window.location.pathname}#${url}`, "_blank");
  }
  manualGenerate(data) {
    let payLoad = {
      aggregatePdf: true
    };
    this.dataService.update(data._id, this.configuration.participe, payLoad).subscribe(data => {
      this.toastr.success("Aggreagate PDF Generated");
      this.ngOnInit();
    }, err => {
      this.toastr.error("Something Went Wrong");
    });
  }
  routeRespondantPdf(id) {
    const baseUrl = window.location.origin;
    const url = this.router.createUrlTree(["/respondant-pdf"], {
      queryParams: {
        isEdit: this.isEdit,
        ID: id,
        groupId: this.groupId,
        temp: this.Template
      }
    }).toString();
    window.open(`${baseUrl}${window.location.pathname}#${url}`, "_blank");
  }
  resendMail(id) {
    const apiUrl = this.configuration.sendparticipe;
    this.dataService.sendParticipe(apiUrl, id, id).subscribe(res => {
      this.toastr.success('E-mail Sent Successfully');
    }, error => {});
  }
  routeResponsePdf(data) {
    this.id = data?._id;
    const OrganName = [];
    this.SelectOrganizationName.map(data => {
      OrganName.push(data.organizationName);
    });
    const url = this.router.createUrlTree(['/response-pdf'], {
      queryParams: {
        isEdit: this.isEdit,
        ID: this.id,
        groupId: this.groupId,
        OrgName: OrganName,
        temp: this.Template
      }
    }).toString();
    window.open(`${window.location.origin}${window.location.pathname}#${url}`, '_blank');
  }
  toggleRow(element) {
    if (element.Members && this.memberData.length) {
      this.expandedElement = this.expandedElement === element ? null : element;
      this.cd.detectChanges();
      this.innerTables.forEach((table, index) => table.dataSource.sort = this.innerSort.toArray()[index]);
    }
  }
  applyFilter(filterValue) {
    this.innerTables.forEach((table, index) => table.dataSource.filter = filterValue.trim().toLowerCase());
  }
  userTodos() {}
  memberslistTodos() {}
  getMemberList() {}
  getSurveyList(currentPage, searchData) {
    if (searchData) {
      var service = this.configuration.survey + `?search=${searchData}&orderType=DESC`;
    } else {
      var service = this.configuration.survey + `?page=${currentPage ? currentPage : 0}&pageSize=${100}&orderType=DESC`;
    }
    this.spinner.show();
    this.dataService.getQuestionList(service).subscribe(result => {
      this.spinner.hide();
      this.questionList = [];
      if (result.isSuccess && result.data.length > 0) {
        this.questionList = result.data;
      }
    }, error => {
      this.spinner.hide();
    });
  }
  getOrganizationList() {
    this.spinner.show();
    this.crudHttpService.getItems().subscribe(response => {
      this.spinner.hide();
      this.organizationionList = response.data;
    }, error => {
      this.spinner.hide();
    });
  }
  organization(item) {}
  template(item) {
    this.templateId = item._id;
  }
  onSubmit() {
    this.spinner.show();
    if (this.groupsForm.valid) {
      if (this.edit == true && this.showWorkshopFields) {
        const payload = {
          "id": this.groupsForm.value._id,
          "name": " ",
          "workshopStartDate": this.groupsForm.value.workshopStart,
          "workshopEndDate": this.groupsForm.value.workshopEnd,
          "workshopLeaderName": this.groupsForm.value.workshopLeaderName,
          "workshopLeaderEmail": this.groupsForm.value.workshopLeaderEmail
        };
        this.dataService.workshopEdit(this.configuration.worksgopEdit, payload, this.workshopId).subscribe(res => {});
      }
      const groupOrga = this.groupsForm.get('groupOrganization').value;
      let apiUrl = this.configuration.group;
      if (this.showWorkshopFields) {
        let workshopLeaderName = this.groupsForm.controls?.workshopLeaderName?.value;
        let workshopLeaderEmail = this.groupsForm.controls?.workshopLeaderEmail?.value;
        let id = this.groupsForm.controls?.id?.value;
        if (!workshopLeaderName || !workshopLeaderEmail) {
          this.toastr.warning('Workshop Leader Name and Email are required.');
          this.spinner.hide();
          return;
        }
        let groupData = {
          "groupName": this.groupsForm.controls?.groupsName?.value,
          "createdBy_Id": this.groupsForm.controls?.createdBy?.value,
          "groupOranization_id": groupOrga,
          "tempalte_id": this.groupsForm.get('questionPDF').value,
          "createdDate": this.groupsForm.controls?.createdDate?.value,
          "feedbackDueDate": this.groupsForm.controls?.feedbackDue?.value,
          "workShop_data": {
            "id": id,
            "name": " ",
            "workshopStartDate": "2021-05-03T18:30:00.000Z",
            "workshopEndDate": "2021-05-03T18:30:00.000Z",
            "workshopLeaderName": workshopLeaderName,
            "workshopLeaderEmail": workshopLeaderEmail
          }
        };
        if (this.isEdit == false) {
          this.dataService.createGroup(apiUrl, groupData).subscribe(response => {
            this.groupUserList = response;
            this.toastr.success('Successfully Create the Data');
            this.dataService.sendPopupdata(true);
            this.cancel();
            this.spinner.hide();
          }, error => {});
        } else {
          this.dataService.updateGroup(this.editId, apiUrl, groupData).subscribe(result => {
            if (result) {
              this.spinner.hide();
              this.toastr.success('Successfully Update the Data');
              this.router.navigate(['/map/groups']);
            }
            ;
          });
        }
        ;
      } else if (!this.showWorkshopFields) {
        let groupData = {
          "groupName": this.groupsForm.controls?.groupsName?.value,
          "createdBy_Id": this.groupsForm.controls?.createdBy?.value,
          "groupOranization_id": groupOrga,
          "tempalte_id": this.groupsForm.get('questionPDF').value,
          "createdDate": this.groupsForm.controls?.createdDate?.value,
          "feedbackDueDate": this.groupsForm.controls?.feedbackDue?.value,
          ischecked: this.showWorkshopFields
        };
        if (this.isEdit == false) {
          this.dataService.createGroup(apiUrl, groupData).subscribe(response => {
            this.groupUserList = response;
            this.toastr.success('Successfully Create the Data');
            this.dataService.sendPopupdata(true);
            this.cancel();
            this.spinner.hide();
          }, error => {});
        } else {
          this.dataService.updateGroup(this.editId, apiUrl, groupData).subscribe(result => {
            if (result) {
              this.spinner.hide();
              this.toastr.success('Successfully Update the Data');
              this.router.navigate(['/map/groups']);
            }
            ;
          });
        }
        ;
      }
      this.spinner.hide();
    } else {
      // Form is invalid, display toaster message
      this.toastr.error('Form is invalid. Please fill in all required fields.');
      this.spinner.hide();
    }
  }
  cancel() {
    this.router.navigate(['/map/groups']);
    this.dialog.closeAll();
  }
  adduser(orgName) {
    const OrganName = [];
    orgName.map(data => {
      OrganName.push(data.organizationName);
    });
    this.router.navigate(['/map/groups/add-member'], {
      queryParams: {
        isEdit: 'true',
        ID: this.editId.toString(),
        OrgName: OrganName,
        temp: this.Template
      }
    });
  }
  membersDelete(membersId, content, data) {
    this.dialog.open(content, {
      width: '25%'
    });
    if (data === `participants`) {
      this.apiURL = this.configuration.participe;
    }
    if (data === `members`) {}
    this.membersId = membersId;
  }
  closeDialog() {
    this.dataService.deleteGroup(this.configuration.participe, this.membersId).subscribe(res => {
      this.getPartcipeMembers();
      this.toastr.success('Successfully Deleted');
      this.cancelDialog();
    });
  }
  cancelDialog() {
    this.dialog.closeAll();
  }
  editmemberdetail(id, OrgName) {
    if (id) {}
    const OrganName = [];
    OrgName.map(data => {
      OrganName.push(data.organizationName);
    });
    this.router.navigate(['/map/groups/howard-members'], {
      queryParams: {
        isEdit: 'true',
        ID: id.toString(),
        groupId: this.groupId,
        OrgName: OrganName,
        temp: this.Template
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }, {
    type: src_app_crud_http_service__WEBPACK_IMPORTED_MODULE_4__.CrudHttpService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
  }, {
    type: src_app_members_service__WEBPACK_IMPORTED_MODULE_5__.MembersService
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog
  }, {
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef
  }, {
    type: src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_7__.ExcelService
  }];
  static #_2 = this.propDecorators = {
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
      args: ['outerSort', {
        static: true
      }]
    }],
    innerSort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChildren,
      args: ['innerSort']
    }],
    innerTables: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChildren,
      args: ['innerTables']
    }],
    fileInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
      args: ['fileInput']
    }]
  };
};
GroupDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-group-details',
  template: _group_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.trigger)('detailExpand', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({
    height: '0px',
    minHeight: '0'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({
    height: '*'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.animate)('100ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])],
  styles: [(_group_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], GroupDetailsComponent);

// const USERS: User[] = [
//   {
//     name: "Mason",
//     email: "mason@test.com",
//     phone: "9864785214",
//     addresses: [
//       {
//         street: "Street 1",
//         zipCode: "78542",
//         city: "Kansas"
//       },
//       {
//         street: "Street 2",
//         zipCode: "78554",
//         city: "Texas"
//       }
//     ]
//   },
//   {
//     name: "Eugene",
//     email: "eugene@test.com",
//     phone: "8786541234",
//   },
//   {
//     name: "Jason",
//     email: "jason@test.com",
//     phone: "7856452187",
//     addresses: [
//       {
//         street: "Street 5",
//         zipCode: "23547",
//         city: "Utah"
//       },
//       {
//         street: "Street 5",
//         zipCode: "23547",
//         city: "Ohio"
//       }
//     ]
//   }
// ];

/***/ }),

/***/ 88657:
/*!******************************************************!*\
  !*** ./src/app/pages/gropus/group-list.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupListComponent": () => (/* binding */ GroupListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _group_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-list.component.html?ngResource */ 44095);
/* harmony import */ var _group_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-list.component.scss?ngResource */ 98318);
/* harmony import */ var _group_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_group_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var src_app_crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/crud-http.service */ 6833);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/storage-setting/storage-configuration */ 46352);
/* harmony import */ var _group_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-details.component */ 56110);













let GroupListComponent = class GroupListComponent {
  constructor(router, crudHttpService, storageConfiguration, spinner, dialog, dataService, configuration, cdr, toastr) {
    this.router = router;
    this.crudHttpService = crudHttpService;
    this.storageConfiguration = storageConfiguration;
    this.spinner = spinner;
    this.dialog = dialog;
    this.dataService = dataService;
    this.configuration = configuration;
    this.cdr = cdr;
    this.toastr = toastr;
    this.groupUserList = [];
    this.displayedColumns = ['position', 'groupName', 'createdBy', 'createdDate', 'groupOrganization', 'feedbackDueDate', 'questionPDF', 'actions'];
    this.pageNumber = 1;
    this.todoList = [];
    this.filteredData = [];
    this.totalRecords = 0;
    this.pageSize = 10;
    this.currentPage = 0;
    this.pageIndex = 0;
    this.noResultsFound = false;
    this.dataService.getPopupdata.subscribe(res => {
      if (res) this.getGroupList();
    });
  }
  ngOnInit() {
    this.roleName = this.storageConfiguration.sessionGetItem(this.storageConfiguration.role);
    this.getGroupList();
  }
  ngAfterViewInit() {
    this.getGroupList();
  }
  // ngDoCheck() {
  //   this.getGroupList();
  // }
  getGroupList(pageNation) {
    this.spinner.show();
    let apiUrl = this.configuration.group;
    if (typeof pageNation === 'number' && pageNation > 0) {
      apiUrl += `?pageNumber=${pageNation}`;
    }
    this.dataService.getGroupList(apiUrl).subscribe(response => {
      console.log('get', response);
      this.spinner.hide();
      this.groupUserList = response?.data.reverse();
      this.tempGroupUserList = this.groupUserList;
      this.totalRecords = response.totalRecords;
      this.pageSize = response.pageSize;
      this.currentPage = response.currentPage;
    }, error => {
      this.spinner.hide();
    });
    this.cdr.detectChanges();
  }
  trackByFn(index, item) {
    return item._id; // Replace with a unique identifier property in your data
  }

  GroupListTable(categoryList) {
    let groupListTable = [];
    categoryList.forEach((element, index) => {
      groupListTable.push({
        id: element._id,
        position: index + 1 + (this.pageNumber - 1) * 10,
        groupName: element.type,
        createdBy_Id: element.createdBy_Id,
        createdDate: element.createdDate,
        tempalte_id: element.tempalte_id ? element.tempalte_id : '',
        feedbackDueDate: element.feedbackDueDate,
        isActive: element.isActive,
        isDeleted: element.isDeleted
      });
    });
    return groupListTable;
  }
  onPageChanges(event) {
    this.pageIndex = event.pageIndex + 1;
    this.getGroupList(this.pageIndex);
  }
  grouplistTodos() {
    this.crudHttpService.listed().subscribe(response => {
      this.todoList = response;
    }, error => {});
  }
  getgroupUserList() {
    this.crudHttpService.listed().subscribe(data => {
      this.filteredData = data;
      // this.groupUserList = [...this.filteredData];
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
  }
  openAddUserPopup() {
    const dialogRef = this.dialog.open(_group_details_component__WEBPACK_IMPORTED_MODULE_6__.GroupDetailsComponent, {
      width: '1146px'
    });
    if (this.roleName === 'super-admin' || this.roleName === 'admin') {
      this.router.navigate(['/map/groups'], {
        queryParams: {
          isEdit: false,
          isSuperAdmin: true
        }
      });
    }
    dialogRef.afterClosed().subscribe(result => {});
  }
  filterData() {
    if (this.groupSearchValue != '') {
      this.groupUserList = this.tempGroupUserList.filter(item => {
        return item.groupName.toLowerCase().includes(this.groupSearchValue.toLowerCase());
      });
      if (this.groupUserList.length === 0) {
        this.noResultsFound = true;
      } else {
        this.noResultsFound = false;
      }
    } else {
      this.groupUserList = [...this.tempGroupUserList];
      this.noResultsFound = false;
    }
  }
  resetFilter() {
    this.groupSearchValue = '';
    this.groupUserList = [...this.filteredData];
  }
  edituser(id, item) {
    this.router.navigate(['/map/groups/group-details'], {
      queryParams: {
        ID: id,
        isEdit: true
      }
    });
  }
  edituserdetail(id) {
    const indexToUpdate = this.groupUserList.findIndex(ele => ele._id === id);
    const filterData = this.groupUserList.filter(i => i._id == id);
    // if (indexToUpdate !== -1) {
    //   this.groupUserList[indexToUpdate] = {
    //     ...this.groupUserList[indexToUpdate],
    //     // createdBy_Id: this.groupUserList.createdBy_Id,
    //     // createdDate: this.groupUserList.createdDate,
    //     // feedbackDueDate: this.groupUserList.feedbackDueDate,
    //     // groupName: this.groupUserList.groupName,
    //   };
    // }
    const payload = {
      createdBy_Id: filterData[0].createdBy_Id,
      createdDate: filterData[0].createdDate,
      feedbackDueDate: filterData[0].feedbackDueDate,
      groupName: filterData[0].groupName,
      groupOranization_id: filterData[0].groupOranization_id,
      questionPDF: filterData[0].tempalte_id
    };
    this.dataService.updateGroups(this.configuration.group, id, payload).subscribe(data => {
      this.dataList = data;
    });
  }
  categoryDelete(categoryId, content) {
    this.dialog.open(content, {
      width: '25%'
    });
    this.categoryId = categoryId;
  }
  closeDialog() {
    this.dataService.deleteGroup(this.configuration.group, this.categoryId).subscribe(res => {
      this.dialog.closeAll();
      this.getgroupUserList();
      this.getGroupList();
      this.toastr.success('Successfully Deleted');
    });
  }
  cancelDialog() {
    this.dialog.closeAll();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: src_app_crud_http_service__WEBPACK_IMPORTED_MODULE_3__.CrudHttpService
  }, {
    type: src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_5__.StorageConfiguration
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog
  }, {
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService
  }];
  static #_2 = this.propDecorators = {
    trailperiod: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: ['trailperiod', {
        static: true
      }]
    }]
  };
};
GroupListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-group-list',
  template: _group_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_group_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], GroupListComponent);


/***/ }),

/***/ 18006:
/*!**********************************************************!*\
  !*** ./src/app/pages/gropus/howard-members.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowardMembersComponent": () => (/* binding */ HowardMembersComponent)
/* harmony export */ });
/* harmony import */ var D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _howard_members_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howard-members.component.html?ngResource */ 64056);
/* harmony import */ var _howard_members_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./howard-members.component.scss?ngResource */ 31602);
/* harmony import */ var _howard_members_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_howard_members_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/excel-service */ 69885);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var _uno_members_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uno-members.component */ 88963);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 58987);















let HowardMembersComponent = class HowardMembersComponent {
  constructor(document, dataService, fb, route, excel, toastr, dialog, activeRouter, configuration, http) {
    this.document = document;
    this.dataService = dataService;
    this.fb = fb;
    this.route = route;
    this.excel = excel;
    this.toastr = toastr;
    this.dialog = dialog;
    this.activeRouter = activeRouter;
    this.configuration = configuration;
    this.http = http;
    this.spinner = false;
    this.version = _angular_core__WEBPACK_IMPORTED_MODULE_7__.VERSION;
    this.displayedColumns = ["position", "firstName", "lastName", "title", "roles", "organization", "email", "mobile", "pdf", "actions"];
    this.base64File = null;
    this.filename = null;
    this.isEdit = false;
    this.pdfUploaded = false;
    this.membersUserList = [];
    this.pdfString = `Results PDF`;
    this.pdfString1 = `Response PDF`;
    this.pdfString2 = `Aggregate PDF`;
    this.participantId = [];
    this.quesName = [];
    this.quesAnswerName = [];
    this.showAggregate = false;
    this.isResponse = false;
    this.aggArray = [];
    this.howardForm = this.fb.group({
      firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(),
      lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(),
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(),
      org: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(),
      mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(),
      prompt: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl()
    });
  }
  ngOnInit() {
    const storedShowAggregate = localStorage.getItem('showAggregate');
    if (storedShowAggregate === 'false') {
      this.showAggregate = false;
    }
    this.activeRouter.queryParams.subscribe(queryParams => {
      this.isEdit = queryParams.isEdit === "true";
      this.id = queryParams.ID; // Parse as an integer
      this.orgName = queryParams.OrgName;
      this.groupID = queryParams.groupId;
      this.tempID = queryParams.temp;
    });
    this.howardForm.get("org").setValue(this.orgName);
    this.howardForm.get("org").disable();
    if (this.isEdit) {
      this.getParticipant();
    }
    // this.getMemberPdf('652173d6a34416002f7cca40')
  }

  handleSendFile() {
    var _this = this;
    return (0,D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('send file');
      _this.userPrompt = _this.howardForm.get("prompt").value;
      console.log(_this.selectedFile, _this.userPrompt);
      // const userPrompt = `You are a consultant. Using your expert analysis skills, tell me what is the employee biggest Strengths and Weaknesses are based on the Supervisor and Peer Feedback only, while ignoring the Numeric Feedback, and make sure to include 3 specific comments to reinforce each strength and weakness, from either his Supervisor or his Peers and making sure to label who it came from at the end of each comment for each of the 6 Functions of Management which are COMMUNICATING (e.g., style, effectiveness, frequency, internal, external, etc.), PLANNING (e.g., no formal planning, unclear goals or projects, etc.), STAFFING (e.g., recruiting, selecting the right people, training, development, retaining, etc.), ORGANIZING (e.g., personal organization, availability of supplies, equipment, financial resources, time, organizational structure, etc.), CONTROLLING (e.g., accountability, follow-through, taking corrective action, cost and inventory control, productivity, quality, etc.) and LEADING (e.g., clear vision, motivation, teamwork, initiating action, innovation, commitment to team goals, etc.)? Then summarize his Top 3 Strengths and Top 2 Weaknesses based on frequency of feedback mentioned, including 3 Comments to reinforce each Strength and Weakness and making sure to label who each comment came from at the end and the number of times that this feedback is mentioned, including a total.`
      if (_this.selectedFile === null || _this.userPrompt === " ") {
        _this.toastr.warning("Enter The Prompt");
      } else {
        _this.spinner = true;
        _this.dataService.uploadPdfAndData(_this.selectedFile, _this.userPrompt, _this.selectedFile.name).subscribe(data => {
          console.log("data", data);
          _this.feedbackContent = data;
          _this.resultPDFUpload();
        }, err => {
          _this.spinner = false;
          console.log("err", err.error);
          _this.toastr.error("Something Went Wrong");
        });
        console.log("Upload Completed");
        console.log('this.pdfString', _this.pdfString);
        // this.userPrompt = ' '
      }
    })();
  }

  resultPDFUpload() {
    let surveyUrl = this.configuration.resultPDF;
    let postData = {
      participant_id: this.participantId,
      text: this.feedbackContent,
      template_id: this.tempID,
      fileName: this.pdfTemp
    };
    this.dataService.add(surveyUrl, postData).subscribe(res => {
      this.spinner = false;
    }, err => {
      if (err?.error?.message === `Result PDF already created!!`) {
        let updatePayload = {
          text: this.feedbackContent,
          fileName: this.pdfTemp
        };
        console.log('this.pdfTemp', this.pdfTemp);
        this.dataService.update(this.resultPDFid, surveyUrl, updatePayload).subscribe(val => {
          console.log('val*****', val);
          this.toastr.success("PDF Uploaded");
          this.spinner = false;
        }, err => {
          this.toastr.error("Something Went Wrong");
          this.spinner = false;
        });
      } else {
        this.toastr.error("Something Went Wrong");
        this.spinner = false;
      }
    });
    this.pdfString = this.pdfTemp;
    this.pdfUploaded = true;
  }
  getParticipant() {
    const apiUrl = this.configuration.participe;
    const tempUrl = this.configuration.survey;
    this.dataService.getById(apiUrl, this.id).subscribe(data => {
      console.log("-----partici", data?.data);
      this.membersData = data?.data[0];
      this.showAggregate = this.membersData?.aggregatePdf;
      console.log("member", this.membersData._id);
      this.participantId = this.membersData._id;
      this.pFirstName = this.membersData.participantFirstName;
      this.pLastName = this.membersData.participantLastName;
      this.fullName = this.pFirstName + this.pLastName;
      this.partFullName = this.fullName + '- response .Pdf';
      console.log('this.partFullName', this.partFullName);
      this.isResponse = this.membersData.responsed;
      this.aggregatePDF = this.membersData.aggregatePdf;
      if (this.membersData?.prompt) {
        this.howardForm.get("prompt").setValue(this.membersData?.prompt);
      } else {
        this.dataService.getById(tempUrl, this.tempID).subscribe(data => {
          this.howardForm.get("prompt").setValue(data?.data?.prompt[0].prompt);
        });
      }
      this.howardForm.patchValue({
        firstName: this.membersData?.participantFirstName,
        lastName: this.membersData?.participantLastName,
        title: this.membersData?.participantTitle,
        email: this.membersData?.participantEmail,
        mobile: this.membersData?.participantMobile
      });
      this.user = this.membersData?.participantFirstName;
      if (this.membersData?.Result_pdf[0]) {
        this.pdfString = this.membersData?.Result_pdf[0]?.fileName;
        this.feedbackContent = this.membersData?.Result_pdf[0]?.text;
      }
      this.membersUserList = this.membersData?.Members.reverse();
      if (this.membersData?.Result_pdf[0]?._id) {
        this.resultPDFid = this.membersData?.Result_pdf[0]?._id;
      }
      console.log(this.membersUserList, "memberUserList");
      this.getAggeregateData();
    });
  }
  demoPdf() {
    this.dataService.getById(this.configuration.aggregate, this.participantId).subscribe(res => {
      console.log('demoPdf', res.participant.data);
      this.aggregateReult = res.participant.data.map(participantItem => {
        const matchingMembers = res.members.map(aggregateMember => aggregateMember.data).flat().filter(memberItem => memberItem.question_id._id === participantItem.question_id._id);
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
      console.log('result', this.aggregateReult);
      this.aggregateReult.map(agg => {
        console.log('----------', agg);
        const memArray = [];
        agg.memberAns.map(memb => {
          let value = {
            role: memb.category,
            answer: memb.answer[0]
          };
          memArray.push(value);
        });
        memArray.push({
          role: 'Self',
          answer: agg.particpantAns[0]
        });
        console.log(memArray);
        let payload = {
          question: agg.question_id.question,
          answer: memArray
        };
        this.aggArray.push(payload);
      });
      // this.aggArray.push({questionForchatGpt:this.howardForm.get('prompt').value + '' + 'provide in plain text format'})
    });

    console.log('----aggArray', this.aggArray);
    this.getGPTRes();
  }
  onCancel() {
    this.route.navigate(['/map/groups/group-details'], {
      queryParams: {
        isEdit: 'true',
        ID: this.groupID
      }
    });
    console.log('maniId', this.id);
  }
  getGPTRes() {
    let payload = {
      "messages": this.aggArray,
      "prompt": this.howardForm.get('prompt').value + '' + 'from below array provide in plain text format'
    };
    console.log('--payLoad', payload);
    this.http.post('http://192.168.101.176:5000/chats', payload).subscribe(dataRes => {
      console.log('--gpt', dataRes.message);
      this.feedbackContent = dataRes.message;
      this.pdfTemp = this.fullName;
      this.resultPDFUpload();
    }, err => {
      this.toastr.error('Something Went Error');
    });
  }
  resendMail(id) {
    this.dataService.getParticipantResponse(this.configuration.participantRes, this.participantId).subscribe(res => {
      console.log('parrrrrr', res);
      this.particidata = res.data;
      console.log(' this.particidata', this.particidata);
    });
    console.log('idddddddddd++++++', id);
    this.sentpartci = id;
    const apiUrl = this.configuration.sendparticipe;
    console.log('const apiUrl', apiUrl);
    this.dataService.sendParticipe(apiUrl, this.sentpartci, id).subscribe(res => {
      console.log('response.pdf result', res);
      this.toastr.success('E-mail Sent Successfully');
    }, error => {
      console.log('errrrrrrrr', error);
    });
  }
  keyPress(event) {
    const pattern = /[0-9\+\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  getAggeregateData() {
    this.dataService.getById(this.configuration.aggregate, this.participantId).subscribe(res => {
      console.log('aggrrr resss', res);
      const data = [{
        isSuccess: true,
        id: 1
      }, {
        isSuccess: true,
        id: 2
      }, {
        isSuccess: false,
        id: 3
      }];
      const aggreagateMembers = res.members;
      this.showAggregate = aggreagateMembers.every(item => item.isSuccess);
      console.log('this.showAggregate', this.showAggregate);
      // aggreagateMembers.forEach(element => {
      //   if(!element.isSuccess) {
      //     this.showAggregate = false;
      //   }else{
      //     this.showAggregate = true;
      //   }
      // });
    });
  }
  // aggregate(type: any){
  //   // this.route.navigate(['/aggregate-pdf'])
  //   const baseUrl1 = this.document.location.origin;
  //   console.log('baseUrl1',baseUrl1)
  //   const url = this.route.createUrlTree(['/aggregate-pdf'],{queryParams: {
  //     groupId: this.groupID,
  //     temp: this.tempID,
  //     partId:this.participantId
  //   },
  //   }).toString();
  //   console.log("url", url);
  //   console.log("window.location.pathname", window.location.pathname);
  //   if(type == 'no') {
  //     this.showAggregate = true;
  //     window.open(`${baseUrl1}${window.location.pathname}#${url}`, "_blank");
  //   } else if(type == 'yes' && this.showAggregate == true) {
  //     window.open(`${baseUrl1}${window.location.pathname}#${url}`, "_blank");
  //   }
  // } 
  aggregate(type) {
    const baseUrl = this.document.location.origin;
    const url = this.route.createUrlTree(['/aggregate-pdf'], {
      queryParams: {
        groupId: this.groupID,
        temp: this.tempID,
        partId: this.participantId
      }
    }).toString();
    if (type === 'no') {
      if (this.showAggregate === false) {
        let payload = {
          aggregatePdf: true
        };
        this.dataService.update(this.participantId, this.configuration.participe, payload).subscribe(data => {
          this.toastr.success('Manual Generate PDF.');
        });
      }
      if (this.showAggregate === true) {
        this.demoPdf();
      }
      this.showAggregate = true;
      localStorage.setItem('showAggregate', 'true');
    } else if (type === 'yes' && this.showAggregate === true) {
      window.open(`${baseUrl}${window.location.pathname}#${url}`, '_blank');
    }
  }
  adduser() {}
  onSubmit() {
    if (this.howardForm.invalid) {
      this.toastr.error('please fill in all required fields');
      return;
    }
    let payLoad = {
      participantFirstName: this.howardForm.get("firstName").value,
      participantLastName: this.howardForm.get("lastName").value,
      participantTitle: this.howardForm.get("title").value,
      participantEmail: this.howardForm.get("email").value,
      participantMobile: this.howardForm.get("mobile").value,
      prompt: this.howardForm.get("prompt").value
    };
    this.dataService.update(this.id, this.configuration.participe, payLoad).subscribe(data => {
      // this.toastr.success("Record Updated");
    }, err => {
      this.toastr.error("Something Went Wrong");
    });
  }
  membersDelete(membersId, content, data) {
    console.log(membersId._id);
    this.membersId = membersId._id;
    this.dialog.open(content, {
      width: "25%"
    });
    if (data === `participants`) {
      this.apiURL = this.configuration.participe;
    }
    if (data === `members`) {}
    console.log("membersID", this.membersId);
  }
  routeResponsePdfwithAnswer(id) {
    const baseUrl1 = this.document.location.origin;
    console.log('baseUrl1', baseUrl1);
    const url = this.route.createUrlTree(['/questions-pdf'], {
      queryParams: {
        isEdit: this.isEdit,
        ID: this.id,
        groupId: this.groupID,
        OrgName: this.orgName,
        temp: this.tempID,
        partId: this.participantId
      }
    }).toString();
    console.log("url", url);
    console.log("window.location.pathname", window.location.pathname);
    window.open(`${baseUrl1}${window.location.pathname}#${url}`, "_blank");
    // this.dataService.getParticipantResponse(this.configuration.participantRes, this.participantId).subscribe((res) => {
    //     console.log("participant res", res);
    // });
    // this.dataService.getById(this.configuration.survey, this.tempID).subscribe((res: any) => {
    //     console.log('res',res)
    //     this.questionAnsArr = res.data.question;
    //     console.log("questionAnsArr", this.questionAnsArr);
    //     this.questionAnsArr.forEach((e: any) => {
    //       this.ques = e.question_name;
    //       e.QuestionAnswers.forEach((t) => {
    //          this.quesAns =  t.questionAnswer,
    //          this.quesName.push({
    //           name:this.ques,
    //           answer:this.quesAns
    //         })        
    //       });
    //     });
    //   });
    // const dialogRef = this.dialog.open(this.popPdfTemplate, {
    //   width: "1300px",
    // });
    // dialogRef.afterClosed().subscribe((result) => {});
    this.resendMail(id);
  }
  closeDialog() {
    this.dataService.deleteGroup(this.configuration.members, this.membersId).subscribe(res => {
      this.ngOnInit();
      this.toastr.success("Successfully Deleted");
      this.cancelDialog();
    });
  }
  cancelDialog() {
    this.dialog.closeAll();
  }
  openDialog() {}
  openAddUserPopup() {
    const dialogRef = this.dialog.open(_uno_members_component__WEBPACK_IMPORTED_MODULE_6__.UnoMembersComponent, {
      width: "1146px"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit();
    });
  }
  selectFile() {
    console.log("element Clicked");
    this.fileInput.nativeElement.value = "";
    this.fileInput.nativeElement.click();
  }
  onFileSelected(event) {
    console.log("event", event);
    console.log("element file chose");
    console.log(event.target.files[0].name);
    this.pdfTemp = event?.target?.files[0]?.name;
    this.selectedFile = event.target.files[0];
    console.log(' this.selectedFile', this.selectedFile);
    if (this.selectedFile) {
      console.log("Selected File:", this.selectedFile);
      this.handleSendFile();
    }
  }
  routeResponsePdf() {
    const baseUrl = this.document.location.origin;
    console.log('baseUrl', baseUrl);
    if (this.feedbackContent) {
      const url = this.route.createUrlTree(["/response-pdf"], {
        queryParams: {
          isEdit: this.isEdit,
          ID: this.id,
          groupId: this.groupID,
          OrgName: this.orgName,
          temp: this.tempID
        }
      }).toString();
      console.log("url", url);
      console.log("window.location.pathname", window.location.pathname);
      window.open(`${baseUrl}${window.location.pathname}#${url}`, "_blank");
    }
  }
  editmemberdetail(id) {
    const dialogRef = this.dialog.open(_uno_members_component__WEBPACK_IMPORTED_MODULE_6__.UnoMembersComponent, {
      width: "1146px",
      data: {
        memberId: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit();
    });
  }
  textToFormData(textData, filename) {
    const blob = new Blob([textData], {
      type: 'application/pdf'
    });
    const file = new File([blob], filename, {
      type: 'application/pdf'
    });
    console.log('file', file);
    return file;
  }
  // sendPdToEmail() {
  //   const URL = this.document.location.origin;
  //   console.log('URL',URL)
  //   const link = this.route.createUrlTree(['response-pdf'],{queryParams: {
  //     isEdit: this.isEdit,
  //     ID: this.id,
  //     groupId: this.groupID,
  //     OrgName: this.orgName,
  //     temp: this.tempID,
  //   },
  //   }).toString();
  //   console.log("url", link);
  //   console.log("window.location.pathname", window.location.pathname);
  //     window.open(`${URL}${window.location.pathname}#${link}`, "_blank");
  //   console.log('this.feedbackContent', this.feedbackContent);
  //   const selectedFile = this.selectedFile ? this.selectedFile : this.textToFormData(this.feedbackContent, this.pdfString);
  //   console.log('temp', selectedFile);
  //   const payLoad = {
  //   "link": `${URL}${window.location.pathname}#${link}`,
  //   "email": this.membersData?.participantEmail
  //   }
  //   const apiUrl = this.configuration.resultMailSend;
  //   console.log('const apiUrl',apiUrl);
  //   this.dataService.sendResultMail(apiUrl, payLoad).subscribe(
  //     (res: any) => {
  //       console.log('resssssssss', res);
  //       this.fileUrl = res.fileDetails.url;
  //       console.log('this.fileUrl', this.fileUrl);
  //       this.toastr.success('E-mail sent successfully')
  //       this.spinner = false;
  //     },
  //   )
  // }
  sendPdToEmail() {
    const URL = this.document.location.origin;
    console.log('URL', URL);
    const link = this.route.createUrlTree(['response-pdf'], {
      queryParams: {
        isEdit: this.isEdit,
        ID: this.id,
        groupId: this.groupID,
        OrgName: this.orgName,
        temp: this.tempID
      }
    }).toString();
    console.log('url', link);
    console.log('window.location.pathname', window.location.pathname);
    const payLoad = {
      link: `${URL}${window.location.pathname}#${link}`,
      email: this.membersData?.participantEmail
    };
    const apiUrl = this.configuration.resultMailSend;
    console.log('const apiUrl', apiUrl);
    this.dataService.sendResultMail(apiUrl, payLoad).subscribe(res => {
      console.log('resssssssss', res);
      this.toastr.success('E-mail sent successfully');
      this.fileUrl = res.fileDetails.url;
      console.log('this.fileUrl', this.fileUrl);
      this.spinner = false;
    });
  }
  routeRespondantPdf(id) {
    this.routerId = id;
    const baseUrl = this.document.location.origin;
    console.log(baseUrl);
    const url = this.route.createUrlTree(["/respondant-pdf"], {
      queryParams: {
        isEdit: this.isEdit,
        ID: id,
        groupId: this.groupID,
        OrgName: this.orgName,
        temp: this.tempID
      }
    }).toString();
    window.open(`${baseUrl}${window.location.pathname}#${url}`, "_blank");
  }
  static #_ = this.ctorParameters = () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT]
    }]
  }, {
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }, {
    type: src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_4__.ExcelService
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_5__.Configuration
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient
  }];
  static #_2 = this.propDecorators = {
    popPdfTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: ["popPdf", {
        static: true
      }]
    }],
    fileInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: ["fileInput"]
    }]
  };
};
HowardMembersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: "app-howard-members",
  template: _howard_members_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_howard_members_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], HowardMembersComponent);


/***/ }),

/***/ 88963:
/*!*******************************************************!*\
  !*** ./src/app/pages/gropus/uno-members.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnoMembersComponent": () => (/* binding */ UnoMembersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _uno_members_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uno-members.component.html?ngResource */ 85529);
/* harmony import */ var _uno_members_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uno-members.component.scss?ngResource */ 37923);
/* harmony import */ var _uno_members_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_uno_members_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);










let UnoMembersComponent = class UnoMembersComponent {
  constructor(fb, dialog, activeRouter, configuration, dataService, toastr, data) {
    this.fb = fb;
    this.dialog = dialog;
    this.activeRouter = activeRouter;
    this.configuration = configuration;
    this.dataService = dataService;
    this.toastr = toastr;
    this.data = data;
    this.Category = [{
      value: 'Peer',
      viewValue: 'Peer'
    }, {
      value: 'directReporter',
      viewValue: 'Direct Reporter'
    }];
    this.checkboxValue = false;
    this.respondentForm = this.fb.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      organization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      questionTemplate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      roles: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  ngOnInit() {
    let apiUrl = this.configuration.survey;
    let membersUrl = this.configuration.members;
    this.activeRouter.queryParams.subscribe(queryParams => {
      this.orgName = queryParams.OrgName;
      this.quesTemplate = queryParams.temp;
      this.participantID = queryParams.ID;
      this.isEdit = queryParams.isEdit;
    });
    this.dataService.getById(apiUrl, this.quesTemplate).subscribe(data => {
      this.tempName = data.data.temple.templateName;
      this.patchData();
    });
    if (this.data?.memberId) {
      this.dataService.getById(membersUrl, this.data.memberId).subscribe(data => {
        this.patchFields(data);
      });
    }
  }
  patchFields(data) {
    this.respondentForm.get('firstName').patchValue(data?.data?.firstName), this.respondentForm.get('lastName').patchValue(data?.data?.lastName), this.respondentForm.get('email').patchValue(data?.data?.email), this.respondentForm.get('mobile').patchValue(data?.data?.mobile), this.respondentForm.get('title').patchValue(data?.data?.title);
    if (data?.data?.catogory === `Supervisor`) {
      this.checkboxValue = true;
      this.Category.push({
        value: 'Supervisor',
        viewValue: 'SuperVisor'
      });
      this.respondentForm.get('roles').patchValue(data?.data?.catogory);
    } else {
      this.respondentForm.get('roles').patchValue(data?.data?.catogory);
    }
  }
  cancel() {
    this.dialog.closeAll();
  }
  onCheckboxChange(event) {
    this.checkboxValue = event.checked;
    if (this.checkboxValue) {
      const valueToCheck = {
        value: 'Supervisor',
        viewValue: 'SuperVisor'
      };
      const exists = this.Category.some(item => {
        return item.value === valueToCheck.value && item.viewValue === valueToCheck.viewValue;
      });
      if (!exists) {
        this.Category.push({
          value: 'Supervisor',
          viewValue: 'SuperVisor'
        });
      }
    } else {
      let index = this.Category.indexOf({
        value: 'Supervisor',
        viewValue: 'SuperVisor'
      });
      this.Category.splice(index, 1);
    }
  }
  patchData() {
    this.respondentForm.get('organization').setValue(this.orgName);
    this.respondentForm.get('organization').disable();
    this.respondentForm.get('questionTemplate').setValue(this.tempName);
    this.respondentForm.get('questionTemplate').disable();
  }
  keyPress(event) {
    const pattern = /[0-9\+\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  onSubmit() {
    let apiURl = this.configuration.members;
    let payLoad = {
      firstName: this.respondentForm.get('firstName').value,
      lastName: this.respondentForm.get('lastName').value,
      email: this.respondentForm.get('email').value,
      mobile: this.respondentForm.get('mobile').value,
      participant_id: this.participantID,
      template_id: this.quesTemplate,
      title: this.respondentForm.get('title').value,
      catogory: this.respondentForm.get('roles').value
    };
    if (this.data?.memberId) {
      this.dataService.update(this.data.memberId, apiURl, payLoad).subscribe(data => {
        this.toastr.success('Respondent Updated Succesfully');
        this.cancel();
      }, err => {
        this.toastr.error('Something went wrong');
      });
    } else {
      this.dataService.addParticipant(apiURl, payLoad).subscribe(data => {
        this.toastr.success('Respondent Created Succesfully');
        this.cancel();
      }, err => {
        this.toastr.error('Please Required The Field');
      });
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration
  }, {
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject,
      args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA]
    }]
  }];
};
UnoMembersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-uno-members',
  template: _uno_members_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_uno_members_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UnoMembersComponent);


/***/ }),

/***/ 15159:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdkStep": () => (/* binding */ CdkStep),
/* harmony export */   "CdkStepHeader": () => (/* binding */ CdkStepHeader),
/* harmony export */   "CdkStepLabel": () => (/* binding */ CdkStepLabel),
/* harmony export */   "CdkStepper": () => (/* binding */ CdkStepper),
/* harmony export */   "CdkStepperModule": () => (/* binding */ CdkStepperModule),
/* harmony export */   "CdkStepperNext": () => (/* binding */ CdkStepperNext),
/* harmony export */   "CdkStepperPrevious": () => (/* binding */ CdkStepperPrevious),
/* harmony export */   "MAT_STEPPER_GLOBAL_OPTIONS": () => (/* binding */ MAT_STEPPER_GLOBAL_OPTIONS),
/* harmony export */   "STEPPER_GLOBAL_OPTIONS": () => (/* binding */ STEPPER_GLOBAL_OPTIONS),
/* harmony export */   "STEP_STATE": () => (/* binding */ STEP_STATE),
/* harmony export */   "StepperSelectionEvent": () => (/* binding */ StepperSelectionEvent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ 37927);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 87511);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 9561);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ 57929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 85921);









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function CdkStep_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
const _c0 = ["*"];
class CdkStepHeader {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
  /** Focuses the step header. */
  focus() {
    this._elementRef.nativeElement.focus();
  }
}
CdkStepHeader.ɵfac = function CdkStepHeader_Factory(t) {
  return new (t || CdkStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
CdkStepHeader.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkStepHeader,
  selectors: [["", "cdkStepHeader", ""]],
  hostAttrs: ["role", "tab"]
});
CdkStepHeader.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkStepHeader]',
      host: {
        'role': 'tab'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class CdkStepLabel {
  constructor( /** @docs-private */template) {
    this.template = template;
  }
}
CdkStepLabel.ɵfac = function CdkStepLabel_Factory(t) {
  return new (t || CdkStepLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
CdkStepLabel.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkStepLabel,
  selectors: [["", "cdkStepLabel", ""]]
});
CdkStepLabel.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkStepLabel]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Used to generate unique ID for each stepper component. */
let nextId = 0;
/** Change event emitted on selection changes. */
class StepperSelectionEvent {}
/** Enum to represent the different states of the steps. */
const STEP_STATE = {
  NUMBER: 'number',
  EDIT: 'edit',
  DONE: 'done',
  ERROR: 'error'
};
/** InjectionToken that can be used to specify the global stepper options. */
const STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('STEPPER_GLOBAL_OPTIONS');
/**
 * InjectionToken that can be used to specify the global stepper options.
 * @deprecated Use `STEPPER_GLOBAL_OPTIONS` instead.
 * @breaking-change 8.0.0.
 */
const MAT_STEPPER_GLOBAL_OPTIONS = STEPPER_GLOBAL_OPTIONS;
class CdkStep {
  /** @breaking-change 8.0.0 remove the `?` after `stepperOptions` */
  constructor(_stepper, stepperOptions) {
    this._stepper = _stepper;
    /** Whether user has seen the expanded step content or not. */
    this.interacted = false;
    this._editable = true;
    this._optional = false;
    this._completedOverride = null;
    this._customError = null;
    this._stepperOptions = stepperOptions ? stepperOptions : {};
    this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
    this._showError = !!this._stepperOptions.showError;
  }
  /** Whether the user can return to this step once it has been marked as completed. */
  get editable() {
    return this._editable;
  }
  set editable(value) {
    this._editable = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
  }
  /** Whether the completion of step is optional. */
  get optional() {
    return this._optional;
  }
  set optional(value) {
    this._optional = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
  }
  /** Whether step is marked as completed. */
  get completed() {
    return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
  }
  set completed(value) {
    this._completedOverride = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
  }
  _getDefaultCompleted() {
    return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
  }
  /** Whether step has an error. */
  get hasError() {
    return this._customError == null ? this._getDefaultError() : this._customError;
  }
  set hasError(value) {
    this._customError = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
  }
  _getDefaultError() {
    return this.stepControl && this.stepControl.invalid && this.interacted;
  }
  /** Selects this step component. */
  select() {
    this._stepper.selected = this;
  }
  /** Resets the step to its initial state. Note that this includes resetting form data. */
  reset() {
    this.interacted = false;
    if (this._completedOverride != null) {
      this._completedOverride = false;
    }
    if (this._customError != null) {
      this._customError = false;
    }
    if (this.stepControl) {
      this.stepControl.reset();
    }
  }
  ngOnChanges() {
    // Since basically all inputs of the MatStep get proxied through the view down to the
    // underlying MatStepHeader, we have to make sure that change detection runs correctly.
    this._stepper._stateChanged();
  }
}
CdkStep.ɵfac = function CdkStep_Factory(t) {
  return new (t || CdkStep)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CdkStepper)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](STEPPER_GLOBAL_OPTIONS, 8));
};
CdkStep.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CdkStep,
  selectors: [["cdk-step"]],
  contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkStepLabel, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
    }
  },
  viewQuery: function CdkStep_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  inputs: {
    editable: "editable",
    optional: "optional",
    completed: "completed",
    hasError: "hasError",
    stepControl: "stepControl",
    label: "label",
    errorMessage: "errorMessage",
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    state: "state"
  },
  exportAs: ["cdkStep"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CdkStep_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
CdkStep.ctorParameters = () => [{
  type: CdkStepper,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CdkStepper)]
  }]
}, {
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [STEPPER_GLOBAL_OPTIONS]
  }]
}];
CdkStep.propDecorators = {
  stepLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
    args: [CdkStepLabel]
  }],
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
    args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
      static: true
    }]
  }],
  stepControl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  errorMessage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  ariaLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
    args: ['aria-label']
  }],
  ariaLabelledby: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
    args: ['aria-labelledby']
  }],
  state: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  editable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  optional: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  completed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  hasError: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStep, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'cdk-step',
      exportAs: 'cdkStep',
      template: '<ng-template><ng-content></ng-content></ng-template>',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: CdkStepper,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CdkStepper)]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [STEPPER_GLOBAL_OPTIONS]
      }]
    }];
  }, {
    editable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optional: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    completed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hasError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    stepLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [CdkStepLabel]
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
        static: true
      }]
    }],
    stepControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    errorMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    state: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class CdkStepper {
  constructor(_dir, _changeDetectorRef,
  // @breaking-change 8.0.0 `_elementRef` and `_document` parameters to become required.
  _elementRef, _document) {
    this._dir = _dir;
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    /** Emits when the component is destroyed. */
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Steps that belong to the current stepper, excluding ones from nested steppers. */
    this.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    this._linear = false;
    this._selectedIndex = 0;
    /** Event emitted when the selected step has changed. */
    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._orientation = 'horizontal';
    this._groupId = nextId++;
    this._document = _document;
  }
  /** Whether the validity of previous steps should be checked or not. */
  get linear() {
    return this._linear;
  }
  set linear(value) {
    this._linear = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
  }
  /** The index of the selected step. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(index) {
    const newIndex = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(index);
    if (this.steps && this._steps) {
      // Ensure that the index can't be out of bounds.
      if (!this._isValidIndex(index) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
      }
      const selectedStep = this.selected;
      if (selectedStep) {
        // TODO: this should really be called something like `visited` instead. Just because
        // the user has seen the step doesn't guarantee that they've interacted with it.
        selectedStep.interacted = true;
      }
      if (this._selectedIndex !== newIndex && !this._anyControlsInvalidOrPending(newIndex) && (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
        this._updateSelectedItemIndex(index);
      }
    } else {
      this._selectedIndex = newIndex;
    }
  }
  /** The step that is selected. */
  get selected() {
    // @breaking-change 8.0.0 Change return type to `CdkStep | undefined`.
    return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
  }
  set selected(step) {
    this.selectedIndex = this.steps ? this.steps.toArray().indexOf(step) : -1;
  }
  ngAfterContentInit() {
    this._steps.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)(this._steps), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed)).subscribe(steps => {
      this.steps.reset(steps.filter(step => step._stepper === this));
      this.steps.notifyOnChanges();
    });
  }
  ngAfterViewInit() {
    // Note that while the step headers are content children by default, any components that
    // extend this one might have them as view children. We initialize the keyboard handling in
    // AfterViewInit so we're guaranteed for both view and content children to be defined.
    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusKeyManager(this._stepHeader).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation === 'vertical');
    (this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)(this._layoutDirection()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed)).subscribe(direction => this._keyManager.withHorizontalOrientation(direction));
    this._keyManager.updateActiveItem(this._selectedIndex);
    // No need to `takeUntil` here, because we're the ones destroying `steps`.
    this.steps.changes.subscribe(() => {
      if (!this.selected) {
        this._selectedIndex = Math.max(this._selectedIndex - 1, 0);
      }
    });
    // The logic which asserts that the selected index is within bounds doesn't run before the
    // steps are initialized, because we don't how many steps there are yet so we may have an
    // invalid index on init. If that's the case, auto-correct to the default so we don't throw.
    if (!this._isValidIndex(this._selectedIndex)) {
      this._selectedIndex = 0;
    }
  }
  ngOnDestroy() {
    this.steps.destroy();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Selects and focuses the next step in list. */
  next() {
    this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
  }
  /** Selects and focuses the previous step in list. */
  previous() {
    this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
  }
  /** Resets the stepper to its initial state. Note that this includes clearing form data. */
  reset() {
    this._updateSelectedItemIndex(0);
    this.steps.forEach(step => step.reset());
    this._stateChanged();
  }
  /** Returns a unique id for each step label element. */
  _getStepLabelId(i) {
    return `cdk-step-label-${this._groupId}-${i}`;
  }
  /** Returns unique id for each step content element. */
  _getStepContentId(i) {
    return `cdk-step-content-${this._groupId}-${i}`;
  }
  /** Marks the component to be change detected. */
  _stateChanged() {
    this._changeDetectorRef.markForCheck();
  }
  /** Returns position state of the step with the given index. */
  _getAnimationDirection(index) {
    const position = index - this._selectedIndex;
    if (position < 0) {
      return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
    } else if (position > 0) {
      return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
    }
    return 'current';
  }
  /** Returns the type of icon to be displayed. */
  _getIndicatorType(index, state = STEP_STATE.NUMBER) {
    const step = this.steps.toArray()[index];
    const isCurrentStep = this._isCurrentStep(index);
    return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) : this._getGuidelineLogic(step, isCurrentStep, state);
  }
  _getDefaultIndicatorLogic(step, isCurrentStep) {
    if (step._showError && step.hasError && !isCurrentStep) {
      return STEP_STATE.ERROR;
    } else if (!step.completed || isCurrentStep) {
      return STEP_STATE.NUMBER;
    } else {
      return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
    }
  }
  _getGuidelineLogic(step, isCurrentStep, state = STEP_STATE.NUMBER) {
    if (step._showError && step.hasError && !isCurrentStep) {
      return STEP_STATE.ERROR;
    } else if (step.completed && !isCurrentStep) {
      return STEP_STATE.DONE;
    } else if (step.completed && isCurrentStep) {
      return state;
    } else if (step.editable && isCurrentStep) {
      return STEP_STATE.EDIT;
    } else {
      return state;
    }
  }
  _isCurrentStep(index) {
    return this._selectedIndex === index;
  }
  /** Returns the index of the currently-focused step header. */
  _getFocusIndex() {
    return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
  }
  _updateSelectedItemIndex(newIndex) {
    const stepsArray = this.steps.toArray();
    this.selectionChange.emit({
      selectedIndex: newIndex,
      previouslySelectedIndex: this._selectedIndex,
      selectedStep: stepsArray[newIndex],
      previouslySelectedStep: stepsArray[this._selectedIndex]
    });
    // If focus is inside the stepper, move it to the next header, otherwise it may become
    // lost when the active step content is hidden. We can't be more granular with the check
    // (e.g. checking whether focus is inside the active step), because we don't have a
    // reference to the elements that are rendering out the content.
    this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItem(newIndex);
    this._selectedIndex = newIndex;
    this._stateChanged();
  }
  _onKeydown(event) {
    const hasModifier = (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event);
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    if (manager.activeItemIndex != null && !hasModifier && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER)) {
      this.selectedIndex = manager.activeItemIndex;
      event.preventDefault();
    } else {
      manager.onKeydown(event);
    }
  }
  _anyControlsInvalidOrPending(index) {
    if (this._linear && index >= 0) {
      return this.steps.toArray().slice(0, index).some(step => {
        const control = step.stepControl;
        const isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
        return isIncomplete && !step.optional && !step._completedOverride;
      });
    }
    return false;
  }
  _layoutDirection() {
    return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
  }
  /** Checks whether the stepper contains the focused element. */
  _containsFocus() {
    if (!this._document || !this._elementRef) {
      return false;
    }
    const stepperElement = this._elementRef.nativeElement;
    const focusedElement = this._document.activeElement;
    return stepperElement === focusedElement || stepperElement.contains(focusedElement);
  }
  /** Checks whether the passed-in index is a valid step index. */
  _isValidIndex(index) {
    return index > -1 && (!this.steps || index < this.steps.length);
  }
}
CdkStepper.ɵfac = function CdkStepper_Factory(t) {
  return new (t || CdkStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT));
};
CdkStepper.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkStepper,
  selectors: [["", "cdkStepper", ""]],
  contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkStep, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkStepHeader, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._steps = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
    }
  },
  inputs: {
    linear: "linear",
    selectedIndex: "selectedIndex",
    selected: "selected"
  },
  outputs: {
    selectionChange: "selectionChange"
  },
  exportAs: ["cdkStepper"]
});
CdkStepper.ctorParameters = () => [{
  type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
  }]
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}, {
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT]
  }]
}];
CdkStepper.propDecorators = {
  _steps: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
    args: [CdkStep, {
      descendants: true
    }]
  }],
  _stepHeader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
    args: [CdkStepHeader, {
      descendants: true
    }]
  }],
  linear: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  selectedIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  selected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  selectionChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkStepper]',
      exportAs: 'cdkStepper'
    }]
  }], function () {
    return [{
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT]
      }]
    }];
  }, {
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    linear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _steps: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [CdkStep, {
        descendants: true
      }]
    }],
    _stepHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [CdkStepHeader, {
        descendants: true
      }]
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Button that moves to the next step in a stepper workflow. */
class CdkStepperNext {
  constructor(_stepper) {
    this._stepper = _stepper;
    /** Type of the next button. Defaults to "submit" if not specified. */
    this.type = 'submit';
  }
  // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
  // In Ivy the `host` bindings will be merged when this class is extended, whereas in
  // ViewEngine they're overwritten.
  // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
  // tslint:disable-next-line:no-host-decorator-in-concrete
  _handleClick() {
    this._stepper.next();
  }
}
CdkStepperNext.ɵfac = function CdkStepperNext_Factory(t) {
  return new (t || CdkStepperNext)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkStepper));
};
CdkStepperNext.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkStepperNext,
  selectors: [["button", "cdkStepperNext", ""]],
  hostVars: 1,
  hostBindings: function CdkStepperNext_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkStepperNext_click_HostBindingHandler() {
        return ctx._handleClick();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
    }
  },
  inputs: {
    type: "type"
  }
});
CdkStepperNext.ctorParameters = () => [{
  type: CdkStepper
}];
CdkStepperNext.propDecorators = {
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  _handleClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['click']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepperNext, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'button[cdkStepperNext]',
      host: {
        '[type]': 'type'
      }
    }]
  }], function () {
    return [{
      type: CdkStepper
    }];
  }, {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click']
    }]
  });
})();
/** Button that moves to the previous step in a stepper workflow. */
class CdkStepperPrevious {
  constructor(_stepper) {
    this._stepper = _stepper;
    /** Type of the previous button. Defaults to "button" if not specified. */
    this.type = 'button';
  }
  // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
  // In Ivy the `host` bindings will be merged when this class is extended, whereas in
  // ViewEngine they're overwritten.
  // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
  // tslint:disable-next-line:no-host-decorator-in-concrete
  _handleClick() {
    this._stepper.previous();
  }
}
CdkStepperPrevious.ɵfac = function CdkStepperPrevious_Factory(t) {
  return new (t || CdkStepperPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkStepper));
};
CdkStepperPrevious.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkStepperPrevious,
  selectors: [["button", "cdkStepperPrevious", ""]],
  hostVars: 1,
  hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkStepperPrevious_click_HostBindingHandler() {
        return ctx._handleClick();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
    }
  },
  inputs: {
    type: "type"
  }
});
CdkStepperPrevious.ctorParameters = () => [{
  type: CdkStepper
}];
CdkStepperPrevious.propDecorators = {
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  _handleClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['click']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepperPrevious, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'button[cdkStepperPrevious]',
      host: {
        '[type]': 'type'
      }
    }]
  }], function () {
    return [{
      type: CdkStepper
    }];
  }, {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click']
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class CdkStepperModule {}
CdkStepperModule.ɵfac = function CdkStepperModule_Factory(t) {
  return new (t || CdkStepperModule)();
};
CdkStepperModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CdkStepperModule
});
CdkStepperModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.BidiModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepperModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.BidiModule],
      exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
      declarations: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CdkStepperModule, {
    declarations: function () {
      return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious];
    },
    imports: function () {
      return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.BidiModule];
    },
    exports: function () {
      return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious];
    }
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 42261:
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_STEPPER_INTL_PROVIDER": () => (/* binding */ MAT_STEPPER_INTL_PROVIDER),
/* harmony export */   "MAT_STEPPER_INTL_PROVIDER_FACTORY": () => (/* binding */ MAT_STEPPER_INTL_PROVIDER_FACTORY),
/* harmony export */   "MatHorizontalStepper": () => (/* binding */ MatHorizontalStepper),
/* harmony export */   "MatStep": () => (/* binding */ MatStep),
/* harmony export */   "MatStepHeader": () => (/* binding */ MatStepHeader),
/* harmony export */   "MatStepLabel": () => (/* binding */ MatStepLabel),
/* harmony export */   "MatStepper": () => (/* binding */ MatStepper),
/* harmony export */   "MatStepperIcon": () => (/* binding */ MatStepperIcon),
/* harmony export */   "MatStepperIntl": () => (/* binding */ MatStepperIntl),
/* harmony export */   "MatStepperModule": () => (/* binding */ MatStepperModule),
/* harmony export */   "MatStepperNext": () => (/* binding */ MatStepperNext),
/* harmony export */   "MatStepperPrevious": () => (/* binding */ MatStepperPrevious),
/* harmony export */   "MatVerticalStepper": () => (/* binding */ MatVerticalStepper),
/* harmony export */   "matStepperAnimations": () => (/* binding */ matStepperAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/portal */ 83820);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/stepper */ 15159);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 84369);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 37927);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 87511);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 24851);













/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






function MatStepHeader_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
  }
}
function MatStepHeader_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6._getDefaultTextForState(ctx_r6.state));
  }
}
function MatStepHeader_ng_container_4_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7._getDefaultTextForState(ctx_r7.state));
  }
}
function MatStepHeader_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatStepHeader_ng_container_4_span_1_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatStepHeader_ng_container_4_mat_icon_2_Template, 2, 1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "number");
  }
}
function MatStepHeader_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2._templateLabel().template);
  }
}
function MatStepHeader_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.label);
  }
}
function MatStepHeader_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4._intl.optionalLabel);
  }
}
function MatStepHeader_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.errorMessage);
  }
}
function MatStep_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
const _c0 = ["*"];
function MatHorizontalStepper_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
  }
}
function MatHorizontalStepper_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-step-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatHorizontalStepper_ng_container_1_Template_mat_step_header_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const step_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](step_r2.select());
    })("keydown", function MatHorizontalStepper_ng_container_1_Template_mat_step_header_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8._onKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatHorizontalStepper_ng_container_1_div_2_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const isLast_r4 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", ctx_r0._getFocusIndex() === i_r3 ? 0 : -1)("id", ctx_r0._getStepLabelId(i_r3))("index", i_r3)("state", ctx_r0._getIndicatorType(i_r3, step_r2.state))("label", step_r2.stepLabel || step_r2.label)("selected", ctx_r0.selectedIndex === i_r3)("active", step_r2.completed || ctx_r0.selectedIndex === i_r3 || !ctx_r0.linear)("optional", step_r2.optional)("errorMessage", step_r2.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple)("color", step_r2.color || ctx_r0.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-posinset", i_r3 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r3))("aria-selected", ctx_r0.selectedIndex == i_r3)("aria-label", step_r2.ariaLabel || null)("aria-labelledby", !step_r2.ariaLabel && step_r2.ariaLabelledby ? step_r2.ariaLabelledby : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r4);
  }
}
function MatHorizontalStepper_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@stepTransition.done", function MatHorizontalStepper_div_3_Template_div_animation_stepTransition_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11._animationDone.next($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@stepTransition", ctx_r1._getAnimationDirection(i_r10))("id", ctx_r1._getStepContentId(i_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r1._getStepLabelId(i_r10))("aria-expanded", ctx_r1.selectedIndex === i_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r9.content);
  }
}
function MatVerticalStepper_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "mat-step-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatVerticalStepper_div_0_Template_mat_step_header_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const step_r1 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](step_r1.select());
    })("keydown", function MatVerticalStepper_div_0_Template_mat_step_header_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6._onKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@stepTransition.done", function MatVerticalStepper_div_0_Template_div_animation_stepTransition_done_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7._animationDone.next($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const isLast_r3 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", ctx_r0._getFocusIndex() == i_r2 ? 0 : -1)("id", ctx_r0._getStepLabelId(i_r2))("index", i_r2)("state", ctx_r0._getIndicatorType(i_r2, step_r1.state))("label", step_r1.stepLabel || step_r1.label)("selected", ctx_r0.selectedIndex === i_r2)("active", step_r1.completed || ctx_r0.selectedIndex === i_r2 || !ctx_r0.linear)("optional", step_r1.optional)("errorMessage", step_r1.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple)("color", step_r1.color || ctx_r0.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-posinset", i_r2 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r2))("aria-selected", ctx_r0.selectedIndex === i_r2)("aria-label", step_r1.ariaLabel || null)("aria-labelledby", !step_r1.ariaLabel && step_r1.ariaLabelledby ? step_r1.ariaLabelledby : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-stepper-vertical-line", !isLast_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@stepTransition", ctx_r0._getAnimationDirection(i_r2))("id", ctx_r0._getStepContentId(i_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r0._getStepLabelId(i_r2))("aria-expanded", ctx_r0.selectedIndex === i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r1.content);
  }
}
const _c1 = ".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n";
class MatStepLabel extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepLabel {}
MatStepLabel.ɵfac = /*@__PURE__*/function () {
  let ɵMatStepLabel_BaseFactory;
  return function MatStepLabel_Factory(t) {
    return (ɵMatStepLabel_BaseFactory || (ɵMatStepLabel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatStepLabel)))(t || MatStepLabel);
  };
}();
MatStepLabel.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatStepLabel,
  selectors: [["", "matStepLabel", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matStepLabel]'
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Stepper data that is required for internationalization. */
class MatStepperIntl {
  constructor() {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Label that is rendered below optional steps. */
    this.optionalLabel = 'Optional';
  }
}
MatStepperIntl.ɵfac = function MatStepperIntl_Factory(t) {
  return new (t || MatStepperIntl)();
};
MatStepperIntl.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
  factory: function MatStepperIntl_Factory() {
    return new MatStepperIntl();
  },
  token: MatStepperIntl,
  providedIn: "root"
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperIntl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/** @docs-private */
function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatStepperIntl();
}
/** @docs-private */
const MAT_STEPPER_INTL_PROVIDER = {
  provide: MatStepperIntl,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatStepperIntl]],
  useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatStepHeader.
/** @docs-private */
class MatStepHeaderBase extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepHeader {
  constructor(elementRef) {
    super(elementRef);
  }
}
const _MatStepHeaderMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinColor)(MatStepHeaderBase, 'primary');
class MatStepHeader extends _MatStepHeaderMixinBase {
  constructor(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
    super(_elementRef);
    this._intl = _intl;
    this._focusMonitor = _focusMonitor;
    this._intlSubscription = _intl.changes.subscribe(() => changeDetectorRef.markForCheck());
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }
  ngOnDestroy() {
    this._intlSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /** Focuses the step header. */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._elementRef, origin, options);
    } else {
      this._elementRef.nativeElement.focus(options);
    }
  }
  /** Returns string label of given step if it is a text label. */
  _stringLabel() {
    return this.label instanceof MatStepLabel ? null : this.label;
  }
  /** Returns MatStepLabel if the label of given step is a template label. */
  _templateLabel() {
    return this.label instanceof MatStepLabel ? this.label : null;
  }
  /** Returns the host HTML element. */
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  /** Template context variables that are exposed to the `matStepperIcon` instances. */
  _getIconContext() {
    return {
      index: this.index,
      active: this.active,
      optional: this.optional
    };
  }
  _getDefaultTextForState(state) {
    if (state == 'number') {
      return `${this.index + 1}`;
    }
    if (state == 'edit') {
      return 'create';
    }
    if (state == 'error') {
      return 'warning';
    }
    return state;
  }
}
MatStepHeader.ɵfac = function MatStepHeader_Factory(t) {
  return new (t || MatStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatStepperIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
MatStepHeader.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatStepHeader,
  selectors: [["mat-step-header"]],
  hostAttrs: ["role", "tab", 1, "mat-step-header", "mat-focus-indicator"],
  inputs: {
    color: "color",
    state: "state",
    label: "label",
    errorMessage: "errorMessage",
    iconOverrides: "iconOverrides",
    index: "index",
    selected: "selected",
    active: "active",
    optional: "optional",
    disableRipple: "disableRipple"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 10,
  vars: 19,
  consts: [["matRipple", "", 1, "mat-step-header-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content", 3, "ngSwitch"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchDefault"], [1, "mat-step-label"], ["class", "mat-step-text-label", 4, "ngIf"], ["class", "mat-step-optional", 4, "ngIf"], ["class", "mat-step-sub-label-error", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "mat-step-text-label"], [3, "ngTemplateOutlet"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"]],
  template: function MatStepHeader_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div")(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatStepHeader_ng_container_3_Template, 1, 2, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatStepHeader_ng_container_4_Template, 3, 2, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatStepHeader_div_6_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MatStepHeader_div_7_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MatStepHeader_div_8_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MatStepHeader_div_9_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mat-step-icon-state-", ctx.state, " mat-step-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-step-icon-selected", ctx.selected);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", !!(ctx.iconOverrides && ctx.iconOverrides[ctx.state]));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._templateLabel());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._stringLabel());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.optional && ctx.state != "error");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state == "error");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchDefault, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple],
  styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],
  encapsulation: 2,
  changeDetection: 0
});
MatStepHeader.ctorParameters = () => [{
  type: MatStepperIntl
}, {
  type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
}];
MatStepHeader.propDecorators = {
  state: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  errorMessage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  iconOverrides: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  index: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  selected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  active: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  optional: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  disableRipple: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-step-header',
      template: "<div class=\"mat-step-header-ripple\" matRipple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disableRipple\"></div>\n\n<div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\">\n  <div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\">\n    <ng-container\n      *ngSwitchCase=\"true\"\n      [ngTemplateOutlet]=\"iconOverrides[state]\"\n      [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container>\n    <ng-container *ngSwitchDefault [ngSwitch]=\"state\">\n      <span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span>\n      <mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon>\n    </ng-container>\n  </div>\n</div>\n<div class=\"mat-step-label\"\n     [class.mat-step-label-active]=\"active\"\n     [class.mat-step-label-selected]=\"selected\"\n     [class.mat-step-label-error]=\"state == 'error'\">\n  <!-- If there is a label template, use it. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_templateLabel()\">\n    <ng-container [ngTemplateOutlet]=\"_templateLabel()!.template\"></ng-container>\n  </div>\n  <!-- If there is no label template, fall back to the text label. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div>\n\n  <div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div>\n  <div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div>\n</div>\n\n",
      inputs: ['color'],
      host: {
        'class': 'mat-step-header mat-focus-indicator',
        'role': 'tab'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
    }]
  }], function () {
    return [{
      type: MatStepperIntl
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    state: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    errorMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    iconOverrides: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    index: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optional: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by the Material steppers.
 * @docs-private
 */
const matStepperAnimations = {
  /** Animation that transitions the step along the X axis in a horizontal stepper. */
  horizontalStepTransition: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('stepTransition', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('previous', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
    transform: 'translate3d(-100%, 0, 0)',
    visibility: 'hidden'
  })),
  // Transition to `inherit`, rather than `visible`,
  // because visibility on a child element the one from the parent,
  // making this element focusable inside of a `hidden` element.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('current', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
    transform: 'none',
    visibility: 'inherit'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('next', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
    transform: 'translate3d(100%, 0, 0)',
    visibility: 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('500ms cubic-bezier(0.35, 0, 0.25, 1)'))]),
  /** Animation that transitions the step along the Y axis in a vertical stepper. */
  verticalStepTransition: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('stepTransition', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('previous', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
    height: '0px',
    visibility: 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('next', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
    height: '0px',
    visibility: 'hidden'
  })),
  // Transition to `inherit`, rather than `visible`,
  // because visibility on a child element the one from the parent,
  // making this element focusable inside of a `hidden` element.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('current', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
    height: '*',
    visibility: 'inherit'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* <=> current', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Template to be used to override the icons inside the step header.
 */
class MatStepperIcon {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
MatStepperIcon.ɵfac = function MatStepperIcon_Factory(t) {
  return new (t || MatStepperIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
MatStepperIcon.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatStepperIcon,
  selectors: [["ng-template", "matStepperIcon", ""]],
  inputs: {
    name: ["matStepperIcon", "name"]
  }
});
MatStepperIcon.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
}];
MatStepperIcon.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
    args: ['matStepperIcon']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[matStepperIcon]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matStepperIcon']
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatStep extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStep {
  /** @breaking-change 8.0.0 remove the `?` after `stepperOptions` */
  constructor(stepper, _errorStateMatcher, stepperOptions) {
    super(stepper, stepperOptions);
    this._errorStateMatcher = _errorStateMatcher;
  }
  /** Custom error state matcher that additionally checks for validity of interacted form. */
  isErrorState(control, form) {
    const originalErrorState = this._errorStateMatcher.isErrorState(control, form);
    // Custom error state checks for the validity of form that is not submitted or touched
    // since user can trigger a form change by calling for another step without directly
    // interacting with the current form.
    const customErrorState = !!(control && control.invalid && this.interacted);
    return originalErrorState || customErrorState;
  }
}
MatStep.ɵfac = function MatStep_Factory(t) {
  return new (t || MatStep)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatStepper)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.STEPPER_GLOBAL_OPTIONS, 8));
};
MatStep.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatStep,
  selectors: [["mat-step"]],
  contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStepLabel, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
    }
  },
  inputs: {
    color: "color"
  },
  exportAs: ["matStep"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher,
    useExisting: MatStep
  }, {
    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStep,
    useExisting: MatStep
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatStep_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatStep_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
MatStep.ctorParameters = () => [{
  type: MatStepper,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatStepper)]
  }]
}, {
  type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
  }]
}, {
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.STEPPER_GLOBAL_OPTIONS]
  }]
}];
MatStep.propDecorators = {
  stepLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
    args: [MatStepLabel]
  }],
  color: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStep, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-step',
      template: "<ng-template><ng-content></ng-content></ng-template>\n",
      providers: [{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher,
        useExisting: MatStep
      }, {
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStep,
        useExisting: MatStep
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matStep',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: MatStepper,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatStepper)]
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.STEPPER_GLOBAL_OPTIONS]
      }]
    }];
  }, {
    stepLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatStepLabel]
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MatStepper extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper {
  constructor() {
    super(...arguments);
    /** Steps that belong to the current stepper, excluding ones from nested steppers. */
    this.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    /** Event emitted when the current step is done transitioning in. */
    this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Consumer-specified template-refs to be used to override the header icons. */
    this._iconOverrides = {};
    /** Stream of animation `done` events when the body expands/collapses. */
    this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  ngAfterContentInit() {
    super.ngAfterContentInit();
    this._icons.forEach(({
      name,
      templateRef
    }) => this._iconOverrides[name] = templateRef);
    // Mark the component for change detection whenever the content children query changes
    this.steps.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(() => {
      this._stateChanged();
    });
    this._animationDone.pipe(
    // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
    // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
    // See https://github.com/angular/angular/issues/24084
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)((x, y) => x.fromState === y.fromState && x.toState === y.toState), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(event => {
      if (event.toState === 'current') {
        this.animationDone.emit();
      }
    });
  }
}
MatStepper.ɵfac = /*@__PURE__*/function () {
  let ɵMatStepper_BaseFactory;
  return function MatStepper_Factory(t) {
    return (ɵMatStepper_BaseFactory || (ɵMatStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatStepper)))(t || MatStepper);
  };
}();
MatStepper.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatStepper,
  selectors: [["", "matStepper", ""]],
  contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStep, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStepperIcon, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._steps = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._icons = _t);
    }
  },
  viewQuery: function MatStepper_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatStepHeader, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
    }
  },
  inputs: {
    disableRipple: "disableRipple",
    color: "color"
  },
  outputs: {
    animationDone: "animationDone"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper,
    useExisting: MatStepper
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
MatStepper.propDecorators = {
  _stepHeader: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
    args: [MatStepHeader]
  }],
  _steps: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
    args: [MatStep, {
      descendants: true
    }]
  }],
  _icons: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
    args: [MatStepperIcon, {
      descendants: true
    }]
  }],
  animationDone: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  disableRipple: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  color: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matStepper]',
      providers: [{
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper,
        useExisting: MatStepper
      }]
    }]
  }], null, {
    animationDone: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _stepHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
      args: [MatStepHeader]
    }],
    _steps: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatStep, {
        descendants: true
      }]
    }],
    _icons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatStepperIcon, {
        descendants: true
      }]
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MatHorizontalStepper extends MatStepper {
  constructor() {
    super(...arguments);
    /** Whether the label should display in bottom or end position. */
    this.labelPosition = 'end';
  }
}
MatHorizontalStepper.ɵfac = /*@__PURE__*/function () {
  let ɵMatHorizontalStepper_BaseFactory;
  return function MatHorizontalStepper_Factory(t) {
    return (ɵMatHorizontalStepper_BaseFactory || (ɵMatHorizontalStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHorizontalStepper)))(t || MatHorizontalStepper);
  };
}();
MatHorizontalStepper.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatHorizontalStepper,
  selectors: [["mat-horizontal-stepper"]],
  hostAttrs: ["aria-orientation", "horizontal", "role", "tablist", 1, "mat-stepper-horizontal"],
  hostVars: 4,
  hostBindings: function MatHorizontalStepper_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-stepper-label-position-end", ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.labelPosition == "bottom");
    }
  },
  inputs: {
    selectedIndex: "selectedIndex",
    labelPosition: "labelPosition"
  },
  exportAs: ["matHorizontalStepper"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MatStepper,
    useExisting: MatHorizontalStepper
  }, {
    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper,
    useExisting: MatHorizontalStepper
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 2,
  consts: [[1, "mat-horizontal-stepper-header-container"], [4, "ngFor", "ngForOf"], [1, "mat-horizontal-content-container"], ["class", "mat-horizontal-stepper-content", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], [1, "mat-horizontal-stepper-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color", "click", "keydown"], ["class", "mat-stepper-horizontal-line", 4, "ngIf"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"]],
  template: function MatHorizontalStepper_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatHorizontalStepper_ng_container_1_Template, 3, 19, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatHorizontalStepper_div_3_Template, 2, 5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, MatStepHeader],
  styles: [_c1],
  encapsulation: 2,
  data: {
    animation: [matStepperAnimations.horizontalStepTransition]
  },
  changeDetection: 0
});
MatHorizontalStepper.propDecorators = {
  labelPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHorizontalStepper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-horizontal-stepper',
      exportAs: 'matHorizontalStepper',
      template: "<div class=\"mat-horizontal-stepper-header-container\">\n  <ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\">\n    <mat-step-header class=\"mat-horizontal-stepper-header\"\n                     (click)=\"step.select()\"\n                     (keydown)=\"_onKeydown($event)\"\n                     [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\"\n                     [id]=\"_getStepLabelId(i)\"\n                     [attr.aria-posinset]=\"i + 1\"\n                     [attr.aria-setsize]=\"steps.length\"\n                     [attr.aria-controls]=\"_getStepContentId(i)\"\n                     [attr.aria-selected]=\"selectedIndex == i\"\n                     [attr.aria-label]=\"step.ariaLabel || null\"\n                     [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                     [index]=\"i\"\n                     [state]=\"_getIndicatorType(i, step.state)\"\n                     [label]=\"step.stepLabel || step.label\"\n                     [selected]=\"selectedIndex === i\"\n                     [active]=\"step.completed || selectedIndex === i || !linear\"\n                     [optional]=\"step.optional\"\n                     [errorMessage]=\"step.errorMessage\"\n                     [iconOverrides]=\"_iconOverrides\"\n                     [disableRipple]=\"disableRipple\"\n                     [color]=\"step.color || color\">\n    </mat-step-header>\n    <div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div>\n  </ng-container>\n</div>\n\n<div class=\"mat-horizontal-content-container\">\n  <div *ngFor=\"let step of steps; let i = index\"\n       class=\"mat-horizontal-stepper-content\" role=\"tabpanel\"\n       [@stepTransition]=\"_getAnimationDirection(i)\"\n       (@stepTransition.done)=\"_animationDone.next($event)\"\n       [id]=\"_getStepContentId(i)\"\n       [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n       [attr.aria-expanded]=\"selectedIndex === i\">\n    <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n  </div>\n</div>\n",
      inputs: ['selectedIndex'],
      host: {
        'class': 'mat-stepper-horizontal',
        '[class.mat-stepper-label-position-end]': 'labelPosition == "end"',
        '[class.mat-stepper-label-position-bottom]': 'labelPosition == "bottom"',
        'aria-orientation': 'horizontal',
        'role': 'tablist'
      },
      animations: [matStepperAnimations.horizontalStepTransition],
      providers: [{
        provide: MatStepper,
        useExisting: MatHorizontalStepper
      }, {
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper,
        useExisting: MatHorizontalStepper
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
    }]
  }], null, {
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MatVerticalStepper extends MatStepper {
  constructor(dir, changeDetectorRef,
  // @breaking-change 8.0.0 `elementRef` and `_document` parameters to become required.
  elementRef, _document) {
    super(dir, changeDetectorRef, elementRef, _document);
    this._orientation = 'vertical';
  }
}
MatVerticalStepper.ɵfac = function MatVerticalStepper_Factory(t) {
  return new (t || MatVerticalStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT));
};
MatVerticalStepper.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatVerticalStepper,
  selectors: [["mat-vertical-stepper"]],
  hostAttrs: ["aria-orientation", "vertical", "role", "tablist", 1, "mat-stepper-vertical"],
  inputs: {
    selectedIndex: "selectedIndex"
  },
  exportAs: ["matVerticalStepper"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MatStepper,
    useExisting: MatVerticalStepper
  }, {
    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper,
    useExisting: MatVerticalStepper
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 1,
  consts: [["class", "mat-step", 4, "ngFor", "ngForOf"], [1, "mat-step"], [1, "mat-vertical-stepper-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color", "click", "keydown"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "ngTemplateOutlet"]],
  template: function MatVerticalStepper_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatVerticalStepper_div_0_Template, 6, 25, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, MatStepHeader],
  styles: [_c1],
  encapsulation: 2,
  data: {
    animation: [matStepperAnimations.verticalStepTransition]
  },
  changeDetection: 0
});
MatVerticalStepper.ctorParameters = () => [{
  type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
  }]
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}, {
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
  }]
}];
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatVerticalStepper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-vertical-stepper',
      exportAs: 'matVerticalStepper',
      template: "<div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\">\n  <mat-step-header class=\"mat-vertical-stepper-header\"\n                   (click)=\"step.select()\"\n                   (keydown)=\"_onKeydown($event)\"\n                   [tabIndex]=\"_getFocusIndex() == i ? 0 : -1\"\n                   [id]=\"_getStepLabelId(i)\"\n                   [attr.aria-posinset]=\"i + 1\"\n                   [attr.aria-setsize]=\"steps.length\"\n                   [attr.aria-controls]=\"_getStepContentId(i)\"\n                   [attr.aria-selected]=\"selectedIndex === i\"\n                   [attr.aria-label]=\"step.ariaLabel || null\"\n                   [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                   [index]=\"i\"\n                   [state]=\"_getIndicatorType(i, step.state)\"\n                   [label]=\"step.stepLabel || step.label\"\n                   [selected]=\"selectedIndex === i\"\n                   [active]=\"step.completed || selectedIndex === i || !linear\"\n                   [optional]=\"step.optional\"\n                   [errorMessage]=\"step.errorMessage\"\n                   [iconOverrides]=\"_iconOverrides\"\n                   [disableRipple]=\"disableRipple\"\n                   [color]=\"step.color || color\">\n  </mat-step-header>\n\n  <div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\">\n    <div class=\"mat-vertical-stepper-content\" role=\"tabpanel\"\n         [@stepTransition]=\"_getAnimationDirection(i)\"\n         (@stepTransition.done)=\"_animationDone.next($event)\"\n         [id]=\"_getStepContentId(i)\"\n         [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n         [attr.aria-expanded]=\"selectedIndex === i\">\n      <div class=\"mat-vertical-content\">\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n",
      inputs: ['selectedIndex'],
      host: {
        'class': 'mat-stepper-vertical',
        'aria-orientation': 'vertical',
        'role': 'tablist'
      },
      animations: [matStepperAnimations.verticalStepTransition],
      providers: [{
        provide: MatStepper,
        useExisting: MatVerticalStepper
      }, {
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper,
        useExisting: MatVerticalStepper
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
    }]
  }], function () {
    return [{
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
      }]
    }];
  }, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Button that moves to the next step in a stepper workflow. */
class MatStepperNext extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperNext {}
MatStepperNext.ɵfac = /*@__PURE__*/function () {
  let ɵMatStepperNext_BaseFactory;
  return function MatStepperNext_Factory(t) {
    return (ɵMatStepperNext_BaseFactory || (ɵMatStepperNext_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatStepperNext)))(t || MatStepperNext);
  };
}();
MatStepperNext.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatStepperNext,
  selectors: [["button", "matStepperNext", ""]],
  hostAttrs: [1, "mat-stepper-next"],
  hostVars: 1,
  hostBindings: function MatStepperNext_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
    }
  },
  inputs: {
    type: "type"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperNext, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'button[matStepperNext]',
      host: {
        'class': 'mat-stepper-next',
        '[type]': 'type'
      },
      inputs: ['type']
    }]
  }], null, null);
})();
/** Button that moves to the previous step in a stepper workflow. */
class MatStepperPrevious extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperPrevious {}
MatStepperPrevious.ɵfac = /*@__PURE__*/function () {
  let ɵMatStepperPrevious_BaseFactory;
  return function MatStepperPrevious_Factory(t) {
    return (ɵMatStepperPrevious_BaseFactory || (ɵMatStepperPrevious_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatStepperPrevious)))(t || MatStepperPrevious);
  };
}();
MatStepperPrevious.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatStepperPrevious,
  selectors: [["button", "matStepperPrevious", ""]],
  hostAttrs: [1, "mat-stepper-previous"],
  hostVars: 1,
  hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
    }
  },
  inputs: {
    type: "type"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperPrevious, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'button[matStepperPrevious]',
      host: {
        'class': 'mat-stepper-previous',
        '[type]': 'type'
      },
      inputs: ['type']
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatStepperModule {}
MatStepperModule.ɵfac = function MatStepperModule_Factory(t) {
  return new (t || MatStepperModule)();
};
MatStepperModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatStepperModule
});
MatStepperModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher],
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.PortalModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStepperModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.PortalModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon],
      declarations: [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon],
      providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatStepperModule, {
    declarations: function () {
      return [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon];
    },
    imports: function () {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.PortalModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule];
    },
    exports: function () {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon];
    }
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 21082:
/*!*******************************************************************!*\
  !*** ./src/app/pages/gropus/add-member.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".category-info {\n  padding: 20px;\n  border-radius: 8px;\n  background: white;\n  margin: 0px 30px;\n}\n\n.questionbtn {\n  height: 40px;\n  border-radius: 20px;\n  background-color: #3D506E;\n  color: #ffffff;\n  font-size: 16px;\n}\n\n.plusbtn {\n  width: 28px;\n  height: 26px;\n  color: #ffffff;\n  border-radius: 20px;\n}\n\n.savebtn {\n  width: 132px;\n  height: 39px;\n  border-radius: 20px;\n  background-color: #A92A23;\n  color: #ffffff;\n  font-size: 16px;\n}\n\n.cancel {\n  width: 132px;\n  height: 39px;\n  border-radius: 20px;\n  background-color: #DEDEDE;\n  color: #9C9C9C;\n  font-size: 16px;\n}\n\n.padding {\n  border-radius: 20px;\n}\n\n.mat-form-field {\n  margin-top: 16px;\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.nxtbtn {\n  width: 132px;\n  height: 39px;\n  border-radius: 20px;\n  background-color: #A92A23;\n  color: #ffffff;\n  font-size: 16px;\n}\n\n.addRespondent {\n  border: 1px solid #CECFD1;\n  padding: 30px;\n  margin-top: 30px;\n  border-radius: 10px;\n}\n\n.deletebtn {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.deletedIcon {\n  height: 39px;\n  border-radius: 20px;\n  background-color: #DEDEDE;\n  font-size: 16px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/gropus/add-member.component.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;AACJ;;AACA;EACI,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;AAEJ;;AAAE;EACE,WAAA;EACA,YAAA;EACA,cAAA;EACA,mBAAA;AAGJ;;AADE;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;AAIJ;;AAFE;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;AAKJ;;AAHE;EACE,mBAAA;AAMJ;;AAHE;EACE,gBAAA;AAMJ;;AAHE;EACE,aAAA;EACA,uBAAA;EACA,gBAAA;AAMJ;;AAJE;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;AAOJ;;AAJE;EACE,yBAAA;EACA,aAAA;EACA,gBAAA;EACA,mBAAA;AAOJ;;AALE;EACE,aAAA;EACA,yBAAA;AAQJ;;AANE;EACE,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,eAAA;AASJ","sourcesContent":[".category-info {\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    background: white;\r\n    margin: 0px 30px;\r\n}\r\n.questionbtn{\r\n    height: 40px;\r\n    border-radius: 20px;\r\n    background-color: #3D506E;\r\n    color: #ffffff;\r\n    font-size: 16px;\r\n  }\r\n  .plusbtn{\r\n    width: 28px;\r\n    height: 26px;\r\n    color: #ffffff;\r\n    border-radius: 20px;\r\n  }\r\n  .savebtn{\r\n    width: 132px;\r\n    height: 39px;\r\n    border-radius: 20px;\r\n    background-color: #A92A23;\r\n    color: #ffffff;\r\n    font-size: 16px;\r\n  }\r\n  .cancel{\r\n    width: 132px;\r\n    height: 39px;\r\n    border-radius: 20px;\r\n    background-color: #DEDEDE;\r\n    color: #9C9C9C;\r\n    font-size: 16px;\r\n  }\r\n  .padding{\r\n    border-radius: 20px;\r\n    }\r\n\r\n  .mat-form-field {\r\n    margin-top: 16px;\r\n  }\r\n\r\n  .footer{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 20px;\r\n  }\r\n  .nxtbtn{\r\n    width: 132px;\r\n    height: 39px;\r\n    border-radius: 20px;\r\n    background-color: #A92A23;\r\n    color: #ffffff;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .addRespondent{\r\n    border: 1px solid #CECFD1;\r\n    padding: 30px;\r\n    margin-top: 30px;\r\n    border-radius: 10px;\r\n  }\r\n  .deletebtn{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n  }\r\n  .deletedIcon{\r\n    height: 39px;\r\n    border-radius: 20px;\r\n    background-color: #DEDEDE;\r\n    font-size: 16px;\r\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 12626:
/*!**********************************************************************!*\
  !*** ./src/app/pages/gropus/group-details.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".category-info {\n  padding: 20px;\n  border-radius: 8px;\n  background: white;\n  margin: 0px 30px;\n}\n\n.footer {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n\n::ng-deep.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon {\n  width: 2em !important;\n}\n\n.questionbtn {\n  width: 150px;\n  height: 40px;\n  border-radius: 20px;\n  background-color: #3D506E;\n  color: #ffffff;\n  font-size: 16px;\n}\n\n.plusbtn {\n  width: 28px;\n  height: 28px;\n  background-color: #1F3251;\n  color: #ffffff;\n  border-radius: 20px;\n}\n\n.tab-button {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.savebtn {\n  width: 132px;\n  height: 39px;\n  border-radius: 20px;\n  background-color: #A92A23;\n  color: #ffffff;\n  font-size: 16px;\n  margin-right: 15px;\n}\n\n.cancel {\n  width: 132px;\n  height: 39px;\n  border-radius: 20px;\n  background-color: #DEDEDE;\n  color: #9C9C9C;\n  font-size: 16px;\n}\n\n.table-header {\n  color: #000;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.table-view {\n  margin: 20px;\n  height: 100%;\n  padding-top: 10px;\n}\n\n.ant-table-thead > tr > th,\n.ant-table-tbody > tr > td {\n  padding: 10px 10px;\n}\n\ntable {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #e9f3fc;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n\n.inner-table {\n  width: 100%;\n}\n\n.inner-table mat-form-field {\n  margin-top: 15px;\n  width: 100%;\n}\n\n.button-save {\n  margin: 15px;\n  width: 100px;\n  border-radius: 20px;\n  background-color: rgb(187, 34, 34);\n  color: #fff;\n}\n\n.button-cancel {\n  margin: 15px;\n  border-radius: 20px;\n  width: 100px;\n  background-color: #bac0c9;\n  color: #fff;\n}\n\n.span-text {\n  color: #9f9f9f;\n  font-size: 13px;\n}\n\n.innertable-tr {\n  background-color: #e9f3fc;\n  color: black;\n}\n\n.disabled {\n  opacity: 0.5; /* Reduce opacity to make it appear disabled */\n  pointer-events: none; /* Disable click events */\n}", "",{"version":3,"sources":["webpack://./src/app/pages/gropus/group-details.component.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;AACJ;;AACA;EACI,aAAA;EACA,yBAAA;EACA,gBAAA;AAEJ;;AAAA;EACI,qBAAA;AAGJ;;AAAA;EACI,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;AAGJ;;AADE;EACE,WAAA;EACA,YAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;AAIJ;;AADE;EACE,aAAA;EACA,yBAAA;AAIJ;;AADE;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;EACA,kBAAA;AAIJ;;AAFE;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;AAKJ;;AAFE;EACE,WAAA;EACA,iBAAA;EACA,eAAA;AAKJ;;AAFE;EACE,YAAA;EACA,YAAA;EACA,iBAAA;AAKJ;;AAFE;;EAEE,kBAAA;AAKJ;;AAFE;EACE,WAAA;AAKJ;;AAFE;EACE,SAAA;AAKJ;;AAFE;EACE,mBAAA;AAKJ;;AAFE;EACE,mBAAA;AAKJ;;AAFE;EACE,sBAAA;AAKJ;;AAFE;EACE,gBAAA;EACA,aAAA;AAKJ;;AAFE;EACE,eAAA;EACA,uBAAA;EACA,YAAA;EACA,oBAAA;EACA,aAAA;EACA,aAAA;AAKJ;;AAFE;EACE,iBAAA;EACA,eAAA;EACA,mBAAA;AAKJ;;AAFE;EACE,aAAA;AAKJ;;AAFE;EACE,YAAA;AAKJ;;AAFE;EACE,WAAA;AAKJ;;AAFE;EACE,gBAAA;EACA,WAAA;AAKJ;;AAHE;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,kCAAA;EACA,WAAA;AAMJ;;AAJE;EACE,YAAA;EACA,mBAAA;EACA,YAAA;EACA,yBAAA;EACA,WAAA;AAOJ;;AAJG;EACC,cAAA;EACA,eAAA;AAOJ;;AALE;EACF,yBAAA;EACA,YAAA;AAQA;;AANE;EACE,YAAA,EAAA,8CAAA;EACA,oBAAA,EAAA,yBAAA;AASJ","sourcesContent":[".category-info {\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    background: white;\r\n    margin: 0px 30px;\r\n}\r\n.footer {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    margin-top: 20px;\r\n  }\r\n::ng-deep.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon {\r\n    width: 2em !important;\r\n}\r\n\r\n.questionbtn{\r\n    width: 150px;\r\n    height: 40px;\r\n    border-radius: 20px;\r\n    background-color: #3D506E;\r\n    color: #ffffff;\r\n    font-size: 16px;\r\n  }\r\n  .plusbtn{\r\n    width: 28px;\r\n    height: 28px;\r\n    background-color: #1F3251;\r\n    color: #ffffff;\r\n    border-radius: 20px;\r\n  }\r\n\r\n  .tab-button {\r\n    display: flex;\r\n    justify-content: flex-end; \r\n  }\r\n\r\n  .savebtn{\r\n    width: 132px;\r\n    height: 39px;\r\n    border-radius: 20px;\r\n    background-color: #A92A23;\r\n    color: #ffffff;\r\n    font-size: 16px;\r\n    margin-right: 15px;\r\n  }\r\n  .cancel{\r\n    width: 132px;\r\n    height: 39px;\r\n    border-radius: 20px;\r\n    background-color: #DEDEDE;\r\n    color: #9C9C9C;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .table-header {\r\n    color: #000;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .table-view {\r\n    margin: 20px;\r\n    height: 100%;\r\n    padding-top: 10px;\r\n  }\r\n  \r\n  .ant-table-thead > tr > th,\r\n  .ant-table-tbody > tr > td {\r\n    padding: 10px 10px;\r\n  }\r\n  \r\n  table {\r\n    width: 100%;\r\n  }\r\n  \r\n  tr.example-detail-row {\r\n    height: 0;\r\n  }\r\n  \r\n  tr.example-element-row:not(.example-expanded-row):hover {\r\n    background: #e9f3fc;\r\n  }\r\n  \r\n  tr.example-element-row:not(.example-expanded-row):active {\r\n    background: #efefef;\r\n  }\r\n  \r\n  .example-element-row td {\r\n    border-bottom-width: 0;\r\n  }\r\n  \r\n  .example-element-detail {\r\n    overflow: hidden;\r\n    display: flex;\r\n  }\r\n  \r\n  .example-element-diagram {\r\n    min-width: 80px;\r\n    border: 2px solid black;\r\n    padding: 8px;\r\n    font-weight: lighter;\r\n    margin: 8px 0;\r\n    height: 104px;\r\n  }\r\n  \r\n  .example-element-symbol {\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n    line-height: normal;\r\n  }\r\n  \r\n  .example-element-description {\r\n    padding: 16px;\r\n  }\r\n  \r\n  .example-element-description-attribution {\r\n    opacity: 0.5;\r\n  }\r\n  \r\n  .inner-table {\r\n    width: 100%;\r\n  }\r\n  \r\n  .inner-table mat-form-field {\r\n    margin-top: 15px;\r\n    width: 100%;\r\n  }\r\n  .button-save {\r\n    margin: 15px;\r\n    width: 100px;\r\n    border-radius: 20px;\r\n    background-color: rgb(187, 34, 34);\r\n    color: #fff;\r\n  }\r\n  .button-cancel {\r\n    margin: 15px;\r\n    border-radius: 20px;\r\n    width: 100px;\r\n    background-color: #bac0c9;\r\n    color: #fff;\r\n   }\r\n\r\n   .span-text{\r\n    color: #9f9f9f;\r\n    font-size: 13px;\r\n  }\r\n  .innertable-tr{\r\nbackground-color: #e9f3fc;\r\ncolor: black;\r\n  }\r\n  .disabled {\r\n    opacity: 0.5; /* Reduce opacity to make it appear disabled */\r\n    pointer-events: none; /* Disable click events */\r\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 98318:
/*!*******************************************************************!*\
  !*** ./src/app/pages/gropus/group-list.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".close-button {\n  float: right;\n  top: -25px;\n  right: -15px;\n  background-color: #BB2222;\n  color: #fff;\n  width: 30px;\n  height: 30px;\n}\n\n.close-icon {\n  transition: 1s ease-in-out;\n}\n\n.button-save {\n  margin: 15px;\n  width: 100px;\n  border-radius: 20px;\n  background-color: rgb(187, 34, 34);\n  color: #fff;\n}\n\n.button-cancel {\n  margin: 15px;\n  border-radius: 20px;\n  width: 100px;\n  background-color: #bac0c9;\n  color: #fff;\n}\n\n.mat-dialog-container {\n  display: block;\n  padding: 0px !important;\n  border-radius: 4px;\n  box-sizing: border-box;\n  overflow: auto;\n  outline: 0;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/gropus/group-list.component.scss"],"names":[],"mappings":"AAiBA;EACI,YAAA;EACE,UAAA;EACA,YAAA;EACA,yBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;AAhBN;;AAmBE;EACE,0BAAA;AAhBJ;;AAmBA;EACI,YAAA;EACA,YAAA;EACA,mBAAA;EACA,kCAAA;EACA,WAAA;AAhBJ;;AAkBE;EACE,YAAA;EACA,mBAAA;EACA,YAAA;EACA,yBAAA;EACA,WAAA;AAfJ;;AAiBI;EACA,cAAA;EACA,uBAAA;EACA,kBAAA;EACA,sBAAA;EACA,cAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mBAAA;AAdJ","sourcesContent":["// .table-header {\r\n//     color: #000;\r\n//     font-weight: bold;\r\n//     font-size: 14px;\r\n//   }\r\n  \r\n//   .table-view {\r\n//     margin: 20px;\r\n//     height: 100%;\r\n//     padding-top: 10px;\r\n//   }\r\n  \r\n//   .ant-table-thead > tr > th,\r\n//   .ant-table-tbody > tr > td {\r\n//     padding: 10px 10px;\r\n//   }\r\n  \r\n.close-button{\r\n    float: right;\r\n      top: -25px;\r\n      right: -15px;\r\n      background-color: #BB2222;\r\n      color: #fff;\r\n      width: 30px;\r\n      height: 30px;\r\n  }\r\n\r\n  .close-icon {\r\n    transition: 1s ease-in-out;\r\n  }\r\n\r\n.button-save {\r\n    margin: 15px;\r\n    width: 100px;\r\n    border-radius: 20px;\r\n    background-color: rgb(187, 34, 34);\r\n    color: #fff;\r\n  }\r\n  .button-cancel {\r\n    margin: 15px;\r\n    border-radius: 20px;\r\n    width: 100px;\r\n    background-color: #bac0c9;\r\n    color: #fff;\r\n   }\r\n    .mat-dialog-container {\r\n    display: block;\r\n    padding: 0px !important;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    overflow: auto;\r\n    outline: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    min-height: inherit;\r\n    max-height: inherit;\r\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 31602:
/*!***********************************************************************!*\
  !*** ./src/app/pages/gropus/howard-members.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".category-info {\n  padding: 20px;\n  border-radius: 8px;\n  background: white;\n  margin: 0px 30px;\n}\n\n.category-info {\n  padding: 20px;\n  border-radius: 8px;\n  background: white;\n  margin: 0px 30px;\n}\n\n.footer {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n\n::ng-deep.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon {\n  width: 2em !important;\n}\n\n.questionbtn {\n  width: 150px;\n  height: 40px;\n  border-radius: 20px;\n  background-color: #3D506E;\n  color: #ffffff;\n  font-size: 16px;\n}\n\n.plusbtn {\n  width: 28px;\n  height: 28px;\n  background-color: #1F3251;\n  color: #ffffff;\n  border-radius: 20px;\n}\n\n.tab-button {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.savebtn {\n  width: 132px;\n  height: 39px;\n  border-radius: 20px;\n  background-color: #A92A23;\n  color: #ffffff;\n  font-size: 16px;\n}\n\n.cancel {\n  width: 132px;\n  height: 39px;\n  border-radius: 20px;\n  background-color: #DEDEDE;\n  color: #9C9C9C;\n  font-size: 16px;\n}\n\n.table-header {\n  color: #000;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.table-view {\n  margin: 20px;\n  height: 100%;\n  padding-top: 10px;\n}\n\n.ant-table-thead > tr > th,\n.ant-table-tbody > tr > td {\n  padding: 10px 10px;\n}\n\n.span-text {\n  color: #9f9f9f;\n  font-size: 13px;\n}\n\n.button-save {\n  margin: 15px;\n  width: 100px;\n  border-radius: 20px;\n  background-color: rgb(187, 34, 34);\n  color: #fff;\n}\n\n.button-cancel {\n  margin: 15px;\n  border-radius: 20px;\n  width: 100px;\n  background-color: #bac0c9;\n  color: #fff;\n}\n\n.set-height {\n  height: 500px;\n  overflow-y: scroll;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/gropus/howard-members.component.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;AACF;;AACA;EACE,aAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;AAEF;;AAAA;EACE,aAAA;EACA,yBAAA;EACA,gBAAA;AAGF;;AADA;EACE,qBAAA;AAIF;;AADA;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;AAIF;;AAFA;EACE,WAAA;EACA,YAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;AAKF;;AAFA;EACE,aAAA;EACA,yBAAA;AAKF;;AAFA;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;AAKF;;AAHA;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;AAMF;;AAHA;EACE,WAAA;EACA,iBAAA;EACA,eAAA;AAMF;;AAHA;EACE,YAAA;EACA,YAAA;EACA,iBAAA;AAMF;;AAHA;;EAEE,kBAAA;AAMF;;AAJA;EACE,cAAA;EACA,eAAA;AAOF;;AALA;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,kCAAA;EACA,WAAA;AAQF;;AANA;EACE,YAAA;EACA,mBAAA;EACA,YAAA;EACA,yBAAA;EACA,WAAA;AASF;;AAPA;EACE,aAAA;EACA,kBAAA;AAUF","sourcesContent":[".category-info {\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  background: white;\r\n  margin: 0px 30px;\r\n}\r\n.category-info {\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  background: white;\r\n  margin: 0px 30px;\r\n}\r\n.footer {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-top: 20px;\r\n}\r\n::ng-deep.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon {\r\n  width: 2em !important;\r\n}\r\n\r\n.questionbtn{\r\n  width: 150px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  background-color: #3D506E;\r\n  color: #ffffff;\r\n  font-size: 16px;\r\n}\r\n.plusbtn{\r\n  width: 28px;\r\n  height: 28px;\r\n  background-color: #1F3251;\r\n  color: #ffffff;\r\n  border-radius: 20px;\r\n}\r\n\r\n.tab-button {\r\n  display: flex;\r\n  justify-content: flex-end; \r\n}\r\n\r\n.savebtn{\r\n  width: 132px;\r\n  height: 39px;\r\n  border-radius: 20px;\r\n  background-color: #A92A23;\r\n  color: #ffffff;\r\n  font-size: 16px;\r\n}\r\n.cancel{\r\n  width: 132px;\r\n  height: 39px;\r\n  border-radius: 20px;\r\n  background-color: #DEDEDE;\r\n  color: #9C9C9C;\r\n  font-size: 16px;\r\n}\r\n\r\n.table-header {\r\n  color: #000;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n}\r\n\r\n.table-view {\r\n  margin: 20px;\r\n  height: 100%;\r\n  padding-top: 10px;\r\n}\r\n\r\n.ant-table-thead > tr > th,\r\n.ant-table-tbody > tr > td {\r\n  padding: 10px 10px;\r\n}\r\n.span-text{\r\n  color: #9f9f9f;\r\n  font-size: 13px;\r\n}\r\n.button-save {\r\n  margin: 15px;\r\n  width: 100px;\r\n  border-radius: 20px;\r\n  background-color: rgb(187, 34, 34);\r\n  color: #fff;\r\n}\r\n.button-cancel {\r\n  margin: 15px;\r\n  border-radius: 20px;\r\n  width: 100px;\r\n  background-color: #bac0c9;\r\n  color: #fff;\r\n }\r\n.set-height{\r\n  height:500px;\r\n  overflow-y: scroll;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 37923:
/*!********************************************************************!*\
  !*** ./src/app/pages/gropus/uno-members.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".category-info {\n  padding: 20px;\n  border-radius: 8px;\n  background: white;\n  margin: 0px 30px;\n}\n\n.footer {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n\n.savebtn {\n  width: 132px;\n  height: 39px;\n  border-radius: 20px;\n  background-color: #A92A23;\n  color: #ffffff;\n  font-size: 16px;\n}\n\n.cancel {\n  width: 132px;\n  height: 39px;\n  border-radius: 20px;\n  background-color: #DEDEDE;\n  color: #9C9C9C;\n  font-size: 16px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/gropus/uno-members.component.scss"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;AAAJ;;AAEA;EACI,aAAA;EACA,yBAAA;EACA,gBAAA;AACJ;;AACE;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;AAEJ;;AAAE;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;AAGJ","sourcesContent":["\r\n.category-info {\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    background: white;\r\n    margin: 0px 30px;\r\n}\r\n.footer {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    margin-top: 20px;\r\n  }\r\n  .savebtn{\r\n    width: 132px;\r\n    height: 39px;\r\n    border-radius: 20px;\r\n    background-color: #A92A23;\r\n    color: #ffffff;\r\n    font-size: 16px;\r\n  }\r\n  .cancel{\r\n    width: 132px;\r\n    height: 39px;\r\n    border-radius: 20px;\r\n    background-color: #DEDEDE;\r\n    color: #9C9C9C;\r\n    font-size: 16px;\r\n  }\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 62427:
/*!*******************************************************************!*\
  !*** ./src/app/pages/gropus/add-member.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <div class=\"bg-layout\">\r\n    <div aria-label=\"breadcrumb\" style=\"width: 100%; background-size: cover;  padding-top: 10px;\">\r\n        <ol class=\"breadcrumb\" style=\"background: transparent; margin-left: 15px;\">\r\n            <li class=\"breadcrumb-item\" aria-current=\"page\"><a [routerLink]=\"['/map/groups']\"\r\n                    style=\"color:  #B2B2B3; font-size: 16px;\">Home</a></li>\r\n            <li class=\"breadcrumb-item\" *ngIf=\"!isEdit\" aria-current=\"page\" style=\"color: #a92a23; font-size: 16px\">UNO Group & Members\r\n            </li>\r\n            <li class=\"breadcrumb-item\" *ngIf=\"isEdit\" aria-current=\"page\" style=\"color: #a92a23; font-size: 16px\">Edit\r\n            </li>\r\n        </ol>\r\n    </div>\r\n</div>\r\n\r\n\r\n<form [formGroup]=\"membersForm\">\r\n    <div class=\"page-content category-info\">\r\n       \r\n        <div class=\"breadcrumb\" style=\"background: transparent;\">\r\n            <p class=\"breadcrumb-item\" aria-current=\"page\">UNO Group Details</p>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Participant First Name\" formControlName=\"particfirstName\" required>\r\n                <mat-error *ngIf=\"membersForm.get('particfirstName').hasError('required')\" class=\"mb-5\">Participant First Name is required!</mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Participant Last Name\" formControlName=\"particlastName\" required>\r\n                <mat-error *ngIf=\"membersForm.get('particlastName').hasError('required')\" class=\"mb-5\">Participant Last Name is required!</mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Participant Title\" formControlName=\"partictitle\" required>\r\n                <mat-error *ngIf=\"membersForm.get('partictitle').hasError('required')\" class=\"mb-5\">Participant Title is required!</mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-4\">\r\n                <mat-select formControlName=\"partciOrganization\">\r\n                    <mat-option *ngFor = \"let item of organizationionList\" [value]=\"item.organizationName\" (click)=\"organization(item)\">\r\n                        {{item.organizationName}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Participant Email\" formControlName=\"partciEmail\" required>\r\n                <mat-error *ngIf=\"membersForm.get('partciEmail').hasError('required')\" class=\"mb-5\">Participant Email is required!</mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Participant Mobile\" formControlName=\"partciMobile\" required>\r\n                <mat-error *ngIf=\"membersForm.get('partciMobile').hasError('required')\" class=\"mb-5\">Participant Mobile is required!</mat-error>\r\n            </mat-form-field>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Questions PDF\" formControlName=\"questionPDF\" required>\r\n                <mat-error *ngIf=\"membersForm.get('questionPDF').hasError('required')\" class=\"mb-5\">Questions PDF is required!</mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n         <mat-form-field class=\"col-md-4\">\r\n                <mat-select formControlName=\"resCategory\" required placeholder=\"Select Respondent Category\">\r\n                  <mat-option *ngFor=\"let item of Category\" [value]=\"item.value\">\r\n                    {{item.viewValue}}\r\n                  </mat-option>\r\n                </mat-select>\r\n                <mat-error *ngIf=\"membersForm.get('resCategory').hasError('required')\" class=\"mb-5\">Select Respondent Category is required!</mat-error>\r\n              </mat-form-field>\r\n\r\n            \r\n            <div   class=\"tab-button\"> <button mat-raised-button class=\"questionbtn\" (click)=\"adduser()\">\r\n                <mat-icon class=\"plusbtn\">add</mat-icon></button>&nbsp;&nbsp; <span style=\"color: \r\n                #3C4F6D; font-weight: 400; font-size: 18px;\">Add Respondent Category </span>\r\n            </div>\r\n              \r\n                <div class=\"py-3\">\r\n                    &nbsp;&nbsp; <mat-checkbox formControlName=\"addworkShop\"><span style=\"color: #9C9C9C;\">Add Workshop</span></mat-checkbox>\r\n                </div>\r\n                      \r\n        </div>\r\n\r\n        \r\n        \r\n\r\n        <div class=\"row\">\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"First Name\" formControlName=\"firstName\" required>\r\n                <mat-error  class=\"mb-5\">First Name is required!</mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Last Name\" formControlName=\"lastName\" required>\r\n                <mat-error  class=\"mb-5\">Last Name is required!</mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Title\" formControlName=\"title\" required>\r\n                <mat-error  class=\"mb-5\">Title is required!</mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Organization (s)\" formControlName=\"organization\" required>\r\n                <mat-error  class=\"mb-5\">Organization is required!</mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                <mat-error  class=\"mb-5\">Email is required!</mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Mobile\" formControlName=\"mobile\" required>\r\n                <mat-error  class=\"mb-5\">Mobile is required!</mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <mat-form-field class=\"col-md-4\">\r\n                <mat-select formControlName=\"questTemplate\">\r\n                    <mat-option *ngFor=\"let item of questionList\" [value]=\"item.templateName\" (click)=\"template(item)\">\r\n                        {{item.templateName}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Questions PDF\" formControlName=\"questionsPDF\" required>\r\n                <mat-error  class=\"mb-5\">Questions PDF is required!</mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n        \r\n        <div class=\"d-flex align-items-center justify-content-center py-4\">\r\n            <button mat-raised-button class=\"savebtn\" (click)=\"onSubmit()\">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;\r\n            <button mat-raised-button class=\"cancel\" (click)=\"cancel()\">Cancel</button>\r\n          </div>\r\n          \r\n    </div>\r\n    \r\n    </form> -->\r\n\r\n<div class=\"bg-layout\">\r\n    <div aria-label=\"breadcrumb\" style=\"width: 100%; background-size: cover;  padding-top: 10px;\">\r\n        <ol class=\"breadcrumb\" style=\"background: transparent; margin-left: 15px;\">\r\n            <li class=\"breadcrumb-item\" aria-current=\"page\"><a [routerLink]=\"['/map/groups']\"\r\n                    style=\"color:  #B2B2B3; font-size: 16px;\">Home</a></li>\r\n                    <li class=\"breadcrumb-item\" aria-current=\"page\">\r\n                        <a [routerLink]=\"['/map/groups/group-details']\"\r\n                           [queryParams]=\"{ ID: this.id, isEdit: 'true' }\"\r\n                           fragment=\"\"\r\n                           style=\"color: #B2B2B3; font-size: 16px;\">\r\n                          Groups\r\n                        </a>\r\n                      </li>\r\n                      \r\n            <li class=\"breadcrumb-item\" *ngIf=\"!isEdit\" aria-current=\"page\" style=\"color: #a92a23; font-size: 16px\">\r\n                Members & Respondent\r\n            </li>\r\n            <li class=\"breadcrumb-item\" *ngIf=\"isEdit\" aria-current=\"page\" style=\"color: #a92a23; font-size: 16px\">Edit\r\n            </li>\r\n        </ol>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"breadcrumb\" style=\"background: transparent;\">\r\n    <!-- <p class=\"breadcrumb-item\" aria-current=\"page\">Group Details</p> -->\r\n</div>\r\n\r\n<mat-horizontal-stepper labelPosition=\"bottom\" #stepper>\r\n    <mat-step [stepControl]=\"membersForm\" [editable]=\"true\">\r\n        <ng-template matStepLabel>Add Member</ng-template>\r\n        <form [formGroup]=\"membersForm\">\r\n            <div class=\"page-content category-info\">\r\n\r\n                <div class=\"row\">\r\n                    <mat-form-field class=\"col-md-4\">\r\n                        <input matInput placeholder=\"Participant First Name\" formControlName=\"particfirstName\" required>\r\n                        <mat-error *ngIf=\"membersForm.get('particfirstName').hasError('required')\"\r\n                            class=\"mb-5\">Participant First Name is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"col-md-4\">\r\n                        <input matInput placeholder=\"Participant Last Name\" formControlName=\"particlastName\" required>\r\n                        <mat-error *ngIf=\"membersForm.get('particlastName').hasError('required')\"\r\n                            class=\"mb-5\">Participant Last Name is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"col-md-4\">\r\n                        <input matInput placeholder=\"Participant Title\" formControlName=\"partictitle\" required>\r\n                        <mat-error *ngIf=\"membersForm.get('partictitle').hasError('required')\" class=\"mb-5\">Participant\r\n                            Title is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"col-md-4\">\r\n\r\n                        <input matInput placeholder=\"Participant Organization(s)\" formControlName=\"partciOrganization\"\r\n                            disabled>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"col-md-4\">\r\n                        <input matInput placeholder=\"Participant Email\" formControlName=\"partciEmail\" required>\r\n                        <mat-error *ngIf=\"membersForm.get('partciEmail').hasError('required')\" class=\"mb-5\">Participant\r\n                            Email is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <!-- <mat-form-field class=\"col-md-4\">\r\n                        <input matInput placeholder=\"Participant Mobile\" mask=\"(000) 000-0000\"\r\n                            (keypress)=\"keyPress($event)\" pattern=\"[0-9]+\" formControlName=\"partciMobile\" required>\r\n                        <mat-error *ngIf=\"membersForm.get('partciMobile').hasError('required')\" class=\"mb-5\">Participant\r\n                            Mobile is required!</mat-error>\r\n                    </mat-form-field> -->\r\n\r\n\r\n                    <mat-form-field class=\"col-md-4\">\r\n                        <mat-label>Mobile</mat-label>\r\n                        <input matInput formControlName=\"partciMobile\" [validation]=\"true\"\r\n                            mask=\"(000) 000-0000\" (keypress)=\"keyPress($event)\" pattern=\"[0-9]+\" required>\r\n                            <mat-error *ngIf=\"membersForm.get('partciMobile').hasError('required')\" class=\"mb-5\">Participant\r\n                                Mobile is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n                <div class=\"row\">\r\n                    <mat-form-field class=\"col-md-4\">\r\n                        <input matInput placeholder=\"Questions PDF\" formControlName=\"questionPDF\" required>\r\n                        <mat-error *ngIf=\"membersForm.get('questionPDF').hasError('required')\" class=\"mb-5\">Questions\r\n                            PDF is required!</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <div class=\"footer\">\r\n                <button mat-button (click)=\"submitParticipe()\" class=\"nxtbtn\">Save</button>\r\n            </div>\r\n        </form>\r\n    </mat-step>\r\n\r\n    <mat-step [stepControl]=\"membersForm\" [editable]=\"false\">\r\n        <ng-template matStepLabel>Respondent Category</ng-template>\r\n        <form [formGroup]=\"membersForm\">\r\n            <div class=\"page-content category-info\">\r\n\r\n                <div class=\"row align-items-center display-flex\">\r\n                    <mat-form-field class=\"col-md-4 mb-1\">\r\n                        <mat-select formControlName=\"resCategory\" required placeholder=\"Select Respondent Category\">\r\n                            <mat-option *ngFor=\"let item of Category\" [value]=\"item.value\" (click)=\"roles(item)\">\r\n                                {{item.viewValue}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                        <mat-error *ngIf=\"membersForm.get('resCategory').hasError('required')\" class=\"mb-5\">Select\r\n                            Respondent Category is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <!-- <div class=\"tab-button\"> <button mat-raised-button class=\"questionbtn\" type=\"button\" (click)=\"addMember()\">\r\n                        <mat-icon class=\"plusbtn\">add</mat-icon></button>&nbsp;&nbsp; <span style=\"color: \r\n                        #3C4F6D; font-weight: 400; font-size: 18px;\">Add Respondent Category </span>\r\n                    </div>\r\n                      \r\n                        <div class=\"py-3\">\r\n                            &nbsp;&nbsp; <mat-checkbox (click)=\"onCheckboxChange($event)\"><span style=\"color: #9C9C9C;\">Add Supervisor</span></mat-checkbox>\r\n                        </div>  -->\r\n\r\n                    <div class=\"mx-3\">\r\n                        <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->\r\n                        <!-- <button mat-raised-button class=\"questionbtn\" type=\"button\" (click)=\"addMember()\"> -->\r\n                            <!-- <mat-icon class=\"plusbtn\">add</mat-icon> -->\r\n                            <!-- </button> -->\r\n                        \r\n                            <!-- <span style=\"color: \r\n                        #3C4F6D; font-weight: 400; font-size: 18px;\">&nbsp;&nbsp;&nbsp; Add Respondent Category </span> -->\r\n                        <img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Add.jpg\" alt=\"img\" class=\"padding mr-3\" (click)=\"addMember()\">\r\n                        <span> Add Respondent Category</span>   \r\n                    </div>\r\n                    \r\n                        <mat-checkbox class=\"mt-1\" style=\"margin-left: 16rem;\" (click)=\"onCheckboxChange($event)\"><span\r\n                            >Add Supervisor</span>\r\n                        </mat-checkbox>\r\n                      \r\n                </div>\r\n\r\n                <div class=\"mb-5\" formArrayName=\"members\">\r\n                    <div *ngFor=\"let member of members.controls; let i = index\"\r\n                        [ngClass]=\" i != -1 ? 'addRespondent' : ''\">\r\n                        <div [formGroupName]=\"i\">\r\n                            <div class=\"deletebtn\" *ngIf=\"i != 0\">\r\n                                <button mat-button class=\"deletedIcon\" (click)=\"deletedTable(i)\">\r\n                                    <mat-icon>delete</mat-icon></button>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <mat-form-field class=\"col-md-4\">\r\n                                    <input matInput placeholder=\"First Name\" formControlName=\"firstName\" required>\r\n                                    <mat-error class=\"mb-5\">First Name is required!</mat-error>\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field class=\"col-md-4\">\r\n                                    <input matInput placeholder=\"Last Name\" formControlName=\"lastName\" required>\r\n                                    <mat-error class=\"mb-5\">Last Name is required!</mat-error>\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field class=\"col-md-4\">\r\n                                    <input matInput placeholder=\"Title\" formControlName=\"title\" required>\r\n                                    <mat-error class=\"mb-5\">Title is required!</mat-error>\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n\r\n                            <div class=\"row\">\r\n                                <mat-form-field class=\"col-md-4\">\r\n                                    <input matInput placeholder=\"Organization (s)\" formControlName=\"organization\"\r\n                                        required>\r\n                                    <mat-error class=\"mb-5\">Organization is required!</mat-error>\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field class=\"col-md-4\">\r\n                                    <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                                    <mat-error class=\"mb-5\">Email is required!</mat-error>\r\n                                </mat-form-field>\r\n\r\n                                <!-- <mat-form-field class=\"col-md-4\">\r\n                                    <input matInput placeholder=\"Mobile\" formControlName=\"mobile\" required>\r\n                                    <mat-error class=\"mb-5\">Mobile is required!</mat-error>\r\n                                </mat-form-field> -->\r\n\r\n                                <mat-form-field class=\"col-md-4\">\r\n                                    <input matInput placeholder=\"Mobile\" formControlName=\"mobile\" [validation]=\"true\"\r\n                                        mask=\"(000) 000-0000\" (keypress)=\"keyPress($event)\" pattern=\"[0-9]+\" required>\r\n                                        <mat-error class=\"mb-5\">Mobile is required!</mat-error>\r\n                                </mat-form-field>\r\n\r\n\r\n                            </div>\r\n\r\n\r\n                            <div class=\"row\">\r\n                                <!-- <mat-form-field class=\"col-md-4\">\r\n                                <mat-select formControlName=\"questTemplate\" placeholder=\"Questions Template\">\r\n                                    <mat-option *ngFor=\"let item of questionList\" [value]=\"item.templateName\" (click)=\"template(item)\">\r\n                                        {{item.templateName}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field> -->\r\n\r\n                                <mat-form-field class=\"col-md-4\">\r\n                                    <input matInput placeholder=\"Questions PDF\" formControlName=\"questionsPDF\" required>\r\n                                    <mat-error class=\"mb-5\">Questions PDF is required!</mat-error>\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field class=\"col-md-4\">\r\n                                    <mat-select formControlName=\"roles\" required placeholder=\"Roles\">\r\n                                        <mat-option *ngFor=\"let item of Category\" [value]=\"item.value\">\r\n                                            {{item.viewValue}}\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n                                    <mat-error *ngIf=\"membersForm.get('resCategory').hasError('required')\"\r\n                                        class=\"mb-5\">Select Respondent Category is required!</mat-error>\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"d-flex align-items-center justify-content-center py-4\">\r\n                    <!-- <button mat-button matStepperPrevious class=\"cancel\">Back</button>&nbsp;&nbsp;&nbsp;&nbsp; -->\r\n                    <button mat-raised-button class=\"savebtn\"\r\n                        (click)=\"submitMembers()\">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <button mat-raised-button class=\"cancel\" (click)=\"cancel()\">Cancel</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </mat-step>\r\n\r\n</mat-horizontal-stepper>";

/***/ }),

/***/ 51876:
/*!**********************************************************************!*\
  !*** ./src/app/pages/gropus/group-details.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"example-container\" *ngIf=\"!isEdit\">\r\n  <div mat-dialog-title class=\"p-2 px-3\" style=\"background-color: #3b4f6a; color: #fff; height: 64.17px;\">\r\n    <p class=\"py-2\" style=\"font-size: 20px;\">Add Groups</p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"bg-layout\" *ngIf=\"isEdit\">\r\n  <div aria-label=\"breadcrumb\" style=\"width: 100%; background-size: cover;  padding-top: 10px;\">\r\n    <ol class=\"breadcrumb\" style=\"background: transparent; margin-left: 15px;\">\r\n      <li class=\"breadcrumb-item\" aria-current=\"page\"><a [routerLink]=\"['/map/groups']\"\r\n          style=\"color:  #B2B2B3; font-size: 16px;\">Home</a></li>\r\n      <li class=\"breadcrumb-item\" *ngIf=\"!isEdit\" aria-current=\"page\" style=\"color: #a92a23; font-size: 16px\">Groups\r\n      </li>\r\n      <li class=\"breadcrumb-item\" *ngIf=\"isEdit\" aria-current=\"page\" style=\"color: #a92a23; font-size: 16px\">Edit\r\n      </li>\r\n    </ol>\r\n  </div>\r\n</div>\r\n\r\n\r\n<form [formGroup]=\"groupsForm\">\r\n  <div class=\"page-content category-info\">\r\n\r\n    <div class=\"breadcrumb\" style=\"background: transparent;\">\r\n      <p class=\"breadcrumb-item\" aria-current=\"page\" style=\"font-weight: 600;\">{{groupName | titlecase}} Group Details\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <mat-form-field class=\"col-md-4\">\r\n        <input matInput placeholder=\"Group Name\" formControlName=\"groupsName\" required>\r\n        <mat-error *ngIf=\"groupsForm.get('groupsName').hasError('required')\" class=\"mb-5\">Group Name is\r\n          required!</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"col-md-4\">\r\n        <input matInput placeholder=\"Created By\" formControlName=\"createdBy\" required>\r\n        <mat-error *ngIf=\"groupsForm.get('createdBy').hasError('required')\" class=\"mb-5\">Created By is\r\n          required!</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"col-md-4\">\r\n        <input matInput formControlName=\"createdDate\" placeholder=\"Created Date\" [matDatepicker]=\"picker1\" required>\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker1></mat-datepicker>\r\n        <mat-error *ngIf=\"groupsForm.get('createdDate').hasError('required')\" class=\"mb-5\">Created Date is\r\n          required!</mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field class=\"col-md-4\">\r\n        <!-- <input matInput placeholder=\"Group Organization(s)\" formControlName=\"groupOrganization\" required> -->\r\n        <!-- <mat-error *ngIf=\"groupsForm.get('groupOrganization').hasError('required')\" class=\"mb-5\">Group Organization is required!</mat-error> -->\r\n        <mat-select formControlName=\"groupOrganization\" placeholder=\"Group Organization(s)\"\r\n          [(ngModel)]=\"OrganizationName\" [compareWith]=\"equals\" multiple>\r\n          <mat-option *ngFor=\"let item of organizationionList\" [value]=\"item._id\" (click)=\"organization(item)\">\r\n            {{item.organizationName}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"col-md-4\">\r\n        <!-- <input type=\"text\" (change)=\"onFileSelected($event)\" matInput placeholder=\"Question PDF\" [formControl]=\"groupsForm.get('questionPDF')\" required />\r\n          <mat-error *ngIf=\"groupsForm.get('questionPDF').hasError('required')\" class=\"mb-5\">Question PDF is required!</mat-error> -->\r\n        <!-- <mat-error *ngIf=\"groupsForm.get('questionPDF').hasError('invalidExtension')\">Invalid file format. Only PDF files are allowed.</mat-error> -->\r\n        <mat-select formControlName=\"questionPDF\" placeholder=\"Questions PDF\">\r\n          <mat-option *ngFor=\"let item of questionList\" [value]=\"item._id\" (click)=\"template(item)\">\r\n            {{item.templateName}}\r\n          </mat-option>\r\n        </mat-select>\r\n        <mat-error *ngIf=\"groupsForm.get('questionPDF').hasError('required')\">Question PDF is required!</mat-error>\r\n      </mat-form-field>\r\n\r\n      <!-- <mat-form-field class=\"col-md-4\">\r\n          <input type=\"file\" (change)=\"onFileSelected($event)\" style=\"display: none\" #fileInput />\r\n          <input matInput placeholder=\"Question PDF\" [value]=\"selectedFile?.name\" [readonly]=\"true\" required/>\r\n          <button mat-icon-button (click)=\"fileInput.click()\">\r\n            <mat-icon>attach_file</mat-icon>\r\n          </button>\r\n          <mat-error *ngIf=\"groupsForm.get('questionPDF').hasError('required')\" class=\"mb-5\">Question PDF is required!</mat-error>\r\n          <mat-error *ngIf=\"groupsForm.get('questionPDF').hasError('invalidExtension')\">Invalid file format. Only PDF files are allowed.</mat-error>\r\n        </mat-form-field>         -->\r\n\r\n\r\n      <mat-form-field class=\"col-md-4\">\r\n        <input matInput formControlName=\"feedbackDue\" placeholder=\"Feedback Due Date\" [matDatepicker]=\"picker2\"\r\n          required>\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker2></mat-datepicker>\r\n        <mat-error *ngIf=\"groupsForm.get('feedbackDue').hasError('required')\" class=\"mb-5\">Feedback Due Date is\r\n          required!</mat-error>\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <div class=\"py-3\">\r\n      &nbsp;&nbsp; <mat-checkbox [checked]=\"showWorkshopFields\" (change)=\"toggleWorkshopFields($event)\"><span\r\n          style=\"color: #9C9C9C;\">Add Workshop</span></mat-checkbox>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"showWorkshopFields\">\r\n      <mat-form-field class=\"col-md-6\">\r\n        <input matInput formControlName=\"workshopStart\" placeholder=\"Workshop Start Date\" [matDatepicker]=\"picker3\"\r\n          required>\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker3></mat-datepicker>\r\n        <mat-error *ngIf=\"groupsForm.get('workshopStart').hasError('required')\" class=\"mb-5\">Workshop Start Date is\r\n          required!</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"col-md-6\">\r\n        <input matInput formControlName=\"workshopEnd\" placeholder=\"Workshop End Date\" [matDatepicker]=\"picker4\"\r\n          required>\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker4></mat-datepicker>\r\n        <mat-error *ngIf=\"groupsForm.get('workshopEnd').hasError('required')\" class=\"mb-5\">Workshop End Date is\r\n          required!</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"col-md-6\">\r\n        <input matInput formControlName=\"workshopLeaderName\" placeholder=\"Workshop Leader Name\" required>\r\n        <mat-error *ngIf=\"groupsForm.get('workshopLeaderName').hasError('required')\" class=\"mb-5\">Workshop Leader Name\r\n          is required!</mat-error>\r\n      </mat-form-field>\r\n\r\n      <!-- <mat-form-field class=\"col-md-6\">\r\n            <input matInput formControlName=\"workshopLeaderEmail\" placeholder=\"Workshop Leader Email\" required>\r\n            <mat-error *ngIf=\"groupsForm.get('workshopLeaderEmail').hasError('required')\" class=\"mb-5\">Workshop Leader Email is required!</mat-error>\r\n        </mat-form-field> -->\r\n      <mat-form-field class=\"col-md-6\">\r\n        <input matInput formControlName=\"workshopLeaderEmail\" placeholder=\"Workshop Leader Email\" required>\r\n        <mat-error *ngIf=\"groupsForm.get('workshopLeaderEmail').hasError('required')\" class=\"mb-5\">Workshop Leader Email\r\n          is required!</mat-error>\r\n        <mat-error *ngIf=\"groupsForm.get('workshopLeaderEmail').hasError('email')\" class=\"mb-5\">Invalid email\r\n          format!</mat-error>\r\n      </mat-form-field>\r\n\r\n    </div>\r\n    \r\n    <div class=\"footer\">\r\n      <!-- {{edit}}\r\n      {{showWorkshopFields}}\r\n      {{this.example}} -->\r\n      <button mat-raised-button class=\"savebtn\" (click)=\"createWorkShop()\"\r\n        *ngIf=\"edit == 'true' && showWorkshopFields && !this.example\">\r\n        Save\r\n      </button>\r\n\r\n      <button mat-raised-button class=\"savebtn\" (click)=\"onSubmit()\"\r\n        *ngIf=\"edit == 'true' && showWorkshopFields && this.example\">\r\n        Update\r\n      </button>\r\n\r\n      <button mat-raised-button class=\"savebtn\" (click)=\"onSubmit()\" *ngIf=\"edit == 'true' && !showWorkshopFields\">\r\n        Update\r\n      </button>\r\n\r\n      <button mat-raised-button class=\"savebtn\" (click)=\"onSubmit()\" *ngIf=\"edit == 'false'\">\r\n        Save\r\n      </button>\r\n\r\n      <button mat-raised-button class=\"cancel\" (click)=\"cancel()\">Cancel</button>\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n\r\n\r\n<form [formGroup]=\"membersForm\" *ngIf=\"isEdit\">\r\n  <div class=\"page-content category-info\">\r\n\r\n    <div class=\"breadcrumb\" style=\"background: transparent;display: block;\">\r\n      <p class=\"breadcrumb-item\" aria-current=\"page\" style=\"color: #a92a23; font-size: 16px\">Members</p>\r\n\r\n      <div class=\"tab-button\"> <button mat-raised-button class=\"questionbtn\" (click)=\"adduser(SelectOrganizationName)\">\r\n          <mat-icon class=\"plusbtn\">add</mat-icon>&nbsp;&nbsp; Member</button>\r\n      </div>\r\n    </div>\r\n    <input type=\"file\" style=\"display: none;\" #fileInput accept=\".pdf\" (change)=\"onInputPdf($event)\">\r\n    <div class=\"userlist-table w-100\">\r\n\r\n      <table mat-table #outerSort=\"matSort\" [dataSource]=\"dataSource\" multiTemplateDataRows class=\"mat-elevation-z8\"\r\n        matSort>\r\n        <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ column }}</th>\r\n          <td mat-cell *matCellDef=\"let element\">{{ element[column] }}</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"position\">\r\n          <th mat-header-cell *matHeaderCellDef>S.No</th>\r\n          <td mat-cell *matCellDef=\"let element; let i = index\">\r\n            <i (click)=\"toggleRow(element)\" style=\"cursor: pointer;\" class=\"fa-solid fa-sort-down span-text mr-3\"></i>\r\n            {{element.index}}\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"firstName\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> First Name </th>\r\n          <td mat-cell *matCellDef=\"let element;let i = index;\"> {{element.participantFirstName | titlecase}}</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"lastName\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </th>\r\n          <td mat-cell *matCellDef=\"let element;let i = index;\"> {{element.participantLastName | titlecase}}</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"title\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\r\n          <td mat-cell *matCellDef=\"let element;let i = index;\"> {{element.participantTitle| titlecase}}</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"organization\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Organizations </th>\r\n          <td mat-cell *matCellDef=\"let element;let i = index;\"><ng-container\r\n              *ngFor=\"let data of SelectOrganizationName; let last = last\">\r\n              <span>{{ data?.organizationName }}</span>\r\n              <ng-container *ngIf=\"!last\">, </ng-container>\r\n            </ng-container></td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"email\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\r\n          <td mat-cell *matCellDef=\"let element;let i = index;\"> {{element.participantEmail}}</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"mobile\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Mobile </th>\r\n          <td mat-cell *matCellDef=\"let element;let i = index;\"> {{element.participantMobile}}</td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"pdf\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> PDF </th>\r\n          <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n            <div *ngIf=\"spin[element.index]\" class=\"spinner-border text-primary spinner-border-sm mr-3\" role=\"status\">\r\n              <span class=\"sr-only\">Loading...</span>\r\n            </div>\r\n            <span *ngIf=\"!spin[element.index]\" [class.disabled]=\"anyTrueValue\" class=\"mr-3\" matTooltip=\"Upload PDF\"\r\n              style=\"cursor: pointer;\" (click)=\"uploadResults(element,element.index)\"><i class=\"fa fa-upload\"\r\n                aria-hidden=\"true\"></i></span>\r\n            <span class=\"mr-1\" matTooltip=\"Manual Generate PDF\" (click)=\"manualGenerate(element)\"><img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Group 233.svg\"\r\n                alt=\"\"></span>\r\n            <span class=\"mr-1\"  [class.disabled]=\"!element?.aggregatePdf\" matTooltip=\"Aggregated PDF\" (click)=\"aggregate(element)\"><img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Group 232.svg\"\r\n                alt=\"\"></span>\r\n            <span [class.disabled]=\"!element?.resultPdf\" (click)=\"routeResponsePdf(element)\" matTooltip=\"Results PDF\">\r\n              <img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Group 234.svg\" alt=\"\"></span>\r\n\r\n\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"actions\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\r\n          <td mat-cell *matCellDef=\"let row\">\r\n            <i matTooltip=\"Edit\" class=\"fas fa-edit\"\r\n              style=\"font-size: 20px; cursor: pointer; padding-left: 9px; padding-right: 9px; color: gray\"\r\n              (click)=\"editmemberdetail(row?._id,SelectOrganizationName)\"></i>\r\n\r\n            <i matTooltip=\"Delete\" class=\"fas fa-trash-alt\"\r\n              style=\"font-size: 20px; cursor: pointer; padding-left: 7px; padding-right: 7px; color: #797A7C\"\r\n              (click)=\"membersDelete(row?._id, delete,'participants')\"></i>\r\n\r\n          </td>\r\n        </ng-container>\r\n\r\n        <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\r\n        <ng-container matColumnDef=\"expandedDetail\">\r\n          <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\r\n            <div class=\"example-element-detail\" *ngIf=\"element?.Members?.data?.length\"\r\n              [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n              <div class=\"inner-table mat-elevation-z8\" *ngIf=\"expandedElement\">\r\n                <table #innerTables mat-table #innerSort=\"matSort\" [dataSource]=\"element.Members\" matSort>\r\n                  <ng-container matColumnDef=\"{{innerColumn}}\" *ngFor=\"let innerColumn of innerDisplayedColumns\">\r\n                    <th class=\"innertable-tr\" mat-header-cell *matHeaderCellDef mat-sort-header>{{ innerColumn }}</th>\r\n                    <td mat-cell *matCellDef=\"let innerElement\">{{ innerElement[innerColumn] }}</td>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"Position\">\r\n                    <th class=\"innertable-tr\" mat-header-cell *matHeaderCellDef mat-sort-header>S.No</th>\r\n                    <td mat-cell *matCellDef=\"let element;let i=index;\">{{i + 1}}</td>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"firstName\">\r\n                    <th class=\"innertable-tr\" mat-header-cell *matHeaderCellDef mat-sort-header> First Name </th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\"> {{element.firstName}}</td>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"lastName\">\r\n                    <th class=\"innertable-tr\" mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\"> {{element.lastName}}</td>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"title\">\r\n                    <th class=\"innertable-tr\" mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\"> {{element.title}}</td>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"roles\">\r\n                    <th class=\"innertable-tr\" mat-header-cell *matHeaderCellDef mat-sort-header> Roles </th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\"> {{element.catogory | titlecase}}</td>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"organization\">\r\n                    <th class=\"innertable-tr\" mat-header-cell *matHeaderCellDef mat-sort-header> Organizations </th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\"><ng-container\r\n                        *ngFor=\"let data of SelectOrganizationName; let last = last\">\r\n                        <span>{{ data?.organizationName }}</span>\r\n                        <ng-container *ngIf=\"!last\">, </ng-container>\r\n                      </ng-container></td>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"email\">\r\n                    <th class=\"innertable-tr\" mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\"> {{element.email}}</td>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"response pdf\">\r\n                    <th class=\"innertable-tr\" mat-header-cell *matHeaderCellDef mat-sort-header> PDF </th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index;\">\r\n                      <img [class.disabled]=\"!element?.responsed\" (click)=\"routeRespondantPdf(element?._id)\" style=\"cursor: pointer;\" class=\"ml-4\" src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Group.svg\" alt=\"\">\r\n                    </td>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"actions\">\r\n                    <th class=\"innertable-tr\" mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\r\n                    <td mat-cell *matCellDef=\"let row\">\r\n                      <img [class.disabled]=\"row?.responsed\" style=\"cursor: pointer;\"  (click)=\"resendMail(row?._id)\" class=\"ml-5\" src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Vector (1).svg\" alt=\"\">\r\n\r\n                    </td>\r\n                  </ng-container>\r\n                  <tr mat-header-row *matHeaderRowDef=\"innerDisplayedColumns\"></tr>\r\n\r\n                  <tr mat-row *matRowDef=\"let row; columns: innerDisplayedColumns;\"></tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n\r\n        <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\r\n          [class.example-element-row]=\"element.Members?.data?.length\"\r\n          [class.example-expanded-row]=\"expandedElement === element\">\r\n        </tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n      </table>\r\n      <div *ngIf=\"!dataSource.data.length\" class=\"text-center py-5\">No results found</div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</form>\r\n\r\n\r\n<ng-template #delete class=\"mat-dialog-container\">\r\n  <div class=\"example-container\">\r\n    <h5 mat-dialog-title class=\"p-2 px-3\" style=\"background-color: #3b4f6a; color: #fff;\"> Alert\r\n      <!-- <button mat-icon-button\r\n        class=\"close-button\" [mat-dialog-close]=\"true\">\r\n        <mat-icon class=\"close-icon mb-2\" (click)=\"cancel()\">close </mat-icon>\r\n      </button> -->\r\n    </h5>\r\n    <mat-dialog-content class=\"mx-3 my-2 text-center\">\r\n      <p>Are you sure, want to Delete ?</p>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions class=\"px-2 mb-2 text-center\">\r\n      <button mat-button class=\"button-save\" (click)=\"closeDialog()\">Yes</button>\r\n      <button mat-button class=\"button-cancel\" mat-dialog-close (click)=\"cancelDialog()\">Cancel</button>\r\n    </mat-dialog-actions>\r\n  </div>\r\n</ng-template>";

/***/ }),

/***/ 44095:
/*!*******************************************************************!*\
  !*** ./src/app/pages/gropus/group-list.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div aria-label=\"breadcrumb\" style=\" width: 100%; background-size: cover;  padding-top: 10px;\">\r\n  <ol class=\"breadcrumb\" style=\"background: transparent; margin-left: 15px;\">\r\n    <li class=\"breadcrumb-item\" aria-current=\"page\"><a style=\"color: #a92a23; font-size: 16px;\">Home</a>\r\n    </li>\r\n  </ol>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div style=\"padding: 0px 15px;\">\r\n        <div class=\"userlist-table w-100\">\r\n          <mat-form-field class=\"filter-search\">\r\n            <mat-label>Search</mat-label>\r\n            <input matInput [(ngModel)]=\"groupSearchValue\" (keyup)=\"filterData()\" placeholder=\"Search by name\">\r\n            <mat-icon *ngIf=\"roleName != 'staff'\" aria-hidden=\"false\" aria-label=\"Example add icon\"\r\n              (click)=\"openAddUserPopup()\">add\r\n            </mat-icon>\r\n          </mat-form-field>\r\n\r\n          <div style=\"overflow-y: auto;\" class=\"table-responsive\">\r\n            <table mat-table [dataSource]=\"groupUserList\" matSort class=\"mat-elevation-z8 w-100\" [trackBy]=\"trackByFn\">\r\n              <ng-container matColumnDef=\"position\">\r\n                <th mat-header-cell *matHeaderCellDef>S.No</th>\r\n                <td mat-cell *matCellDef=\"let element; let i = index;\">{{ pageIndex === 0 ? i + 1 :  i + 1 + (pageSize * (pageIndex - 1)) }}</td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"groupName\">\r\n                <th mat-header-cell *matHeaderCellDef> Group Name </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.groupName | titlecase}} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"createdBy\">\r\n                <th mat-header-cell *matHeaderCellDef> Created By </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.createdBy_Id | titlecase }} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"createdDate\">\r\n                <th mat-header-cell *matHeaderCellDef> Created Date </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.createdDate| date:'M/d/yy'}} </td>\r\n              </ng-container>\r\n\r\n              <!-- <ng-container matColumnDef=\"groupOrganization\">\r\n                <th mat-header-cell *matHeaderCellDef> Group Organization </th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                  <p *ngFor=\"let data of element.groupOranization_id\">{{data.organizationName}}</p>\r\n                  </td>\r\n              </ng-container> -->\r\n\r\n              <ng-container matColumnDef=\"groupOrganization\">\r\n                <th mat-header-cell *matHeaderCellDef> Group Organization </th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                  <ng-container *ngIf=\"element.groupOranization_id.length > 0; else noOrganizations\">\r\n                    <span *ngFor=\"let data of element.groupOranization_id; let last = last\">\r\n                      {{ data.organizationName | titlecase}}{{ last ? '' : ', ' }}\r\n                    </span>\r\n                  </ng-container>\r\n                  <ng-template #noOrganizations>No organizations selected</ng-template>\r\n                </td>\r\n              </ng-container>\r\n\r\n\r\n              <ng-container matColumnDef=\"questionPDF\">\r\n                <th mat-header-cell *matHeaderCellDef> Question PDF </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.tempalte_id.templateName}}</td>\r\n              </ng-container>\r\n\r\n              \r\n              <ng-container matColumnDef=\"feedbackDueDate\">\r\n                <th mat-header-cell *matHeaderCellDef>Feedback Due Date </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.feedbackDueDate| date:'M/d/yy'}} </td>\r\n              </ng-container>\r\n\r\n\r\n\r\n              <ng-container matColumnDef=\"actions\">\r\n                <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n                <td mat-cell *matCellDef=\"let row\">\r\n                  <i matTooltip=\"Edit\" class=\"fas fa-edit\"\r\n                    style=\"font-size: 20px; cursor: pointer; padding-left: 9px; padding-right: 9px; color: gray\"\r\n                    (click)=\"edituser(row?._id,row)\"></i>\r\n\r\n                  <i matTooltip=\"Delete\" class=\"fas fa-trash-alt\"\r\n                    style=\"font-size: 20px; cursor: pointer; padding-left: 7px; padding-right: 7px; color: #797A7C\"\r\n                    (click)=\"categoryDelete(row?._id, delete)\"></i>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n            <div *ngIf=\"!groupUserList.length\" class=\"text-center py-5\">No results found</div>\r\n          </div>\r\n          <!-- <mat-paginator\r\n          [length]=\"totalRecords\"\r\n          [pageSize]=\"pageSize\"\r\n          (page)=\"onPageChanges($event)\"\r\n          [showFirstLastButtons]=\"true\"\r\n        ></mat-paginator> -->\r\n    \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- <ng-template #delete>\r\n  <h2 mat-dialog-title>Alert</h2>\r\n  <div mat-dialog-content>\r\n    <p>Are you sure you want to delete?</p>\r\n  </div>\r\n  <div mat-dialog-actions>\r\n    <button mat-button (click)=\"closeDialog()\">Yes</button>\r\n    <button mat-button (click)=\"cancelDialog()\">Cancel</button>\r\n  </div>\r\n</ng-template> -->\r\n\r\n\r\n<!-- <ng-template #delete class=\"mat-dialog-container\">\r\n\r\n  <div class=\"example-container\">\r\n\r\n    <h5 mat-dialog-title class=\"p-2 px-3\" style=\"background-color: #3b4f6a; color: #fff;\"> Alert \r\n      <button mat-icon-button\r\n        class=\"close-button\" [mat-dialog-close]=\"true\">\r\n        <mat-icon class=\"close-icon mb-2\" (click)=\"cancel()\">close </mat-icon>\r\n      </button>\r\n    </h5>\r\n    <mat-dialog-content class=\"mx-3 my-2 text-center\">\r\n      <p>Are you sure, want to Delete ?</p>\r\n    </mat-dialog-content>\r\n\r\n    <mat-dialog-actions class=\"px-2 mb-2 text-center\">\r\n      <button mat-button class=\"button-save\" (click)=\"closeDialog()\">Yes</button>\r\n      <button mat-button class=\"button-cancel\" mat-dialog-close (click)=\"cancelDialog()\">Cancel</button>\r\n    </mat-dialog-actions>\r\n  </div>\r\n</ng-template> -->\r\n\r\n<ng-template #delete class=\"mat-dialog-container\">\r\n  <div class=\"example-container\">\r\n    <h5 mat-dialog-title class=\"p-2 px-3\" style=\"background-color: #3b4f6a; color: #fff;\"> Alert \r\n      <!-- <button mat-icon-button\r\n        class=\"close-button\" [mat-dialog-close]=\"true\">\r\n        <mat-icon class=\"close-icon mb-2\" (click)=\"cancel()\">close </mat-icon>\r\n      </button> -->\r\n    </h5>\r\n    <mat-dialog-content class=\"mx-3 my-2 text-center\">\r\n      <p>Are you sure, want to Delete ?</p>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions class=\"px-2 mb-2 text-center\">\r\n      <button mat-button class=\"button-save\" (click)=\"cancel()\" (click)=\"closeDialog()\">Yes</button>\r\n      <button mat-button class=\"button-cancel\" mat-dialog-close (click)=\"cancelDialog()\">Cancel</button>\r\n    </mat-dialog-actions>\r\n  </div>\r\n</ng-template>\r\n";

/***/ }),

/***/ 64056:
/*!***********************************************************************!*\
  !*** ./src/app/pages/gropus/howard-members.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"bg-layout\">\r\n  <div\r\n    aria-label=\"breadcrumb\"\r\n    style=\"width: 100%; background-size: cover; padding-top: 10px\"\r\n  >\r\n    <ol class=\"breadcrumb\" style=\"background: transparent; margin-left: 15px\">\r\n      <li class=\"breadcrumb-item\" aria-current=\"page\">\r\n        <a\r\n          [routerLink]=\"['/map/groups']\"\r\n          style=\"color: #b2b2b3; font-size: 16px\"\r\n          >Home</a\r\n        >\r\n      </li>\r\n      <li class=\"breadcrumb-item\" aria-current=\"page\">\r\n        <a\r\n          [routerLink]=\"['/map/groups/group-details']\"\r\n          [queryParams]=\"{ ID: this.groupID, isEdit: 'true' }\"\r\n          style=\"color: #b2b2b3; font-size: 16px\"\r\n          >Groups</a\r\n        >\r\n      </li>\r\n      <li class=\"breadcrumb-item\" *ngIf=\"!isEdit\" aria-current=\"page\">\r\n        <a\r\n          style=\"color: #b2b2b3; font-size: 16px\"\r\n          [routerLink]=\"['/map/groups/add-member']\"\r\n          >UNO Group & Members\r\n        </a>\r\n      </li>\r\n      <li\r\n        class=\"breadcrumb-item\"\r\n        *ngIf=\"!isEdit\"\r\n        aria-current=\"page\"\r\n        style=\"color: #a92a23; font-size: 16px\"\r\n      >\r\n        Member Details\r\n      </li>\r\n      <li\r\n        class=\"breadcrumb-item\"\r\n        *ngIf=\"isEdit\"\r\n        aria-current=\"page\"\r\n        style=\"color: #a92a23; font-size: 16px\"\r\n      >\r\n        Edit\r\n      </li>\r\n    </ol>\r\n  </div>\r\n</div>\r\n\r\n<form [formGroup]=\"howardForm\">\r\n  <div class=\"page-content category-info\">\r\n    <div class=\"breadcrumb\" style=\"background: transparent\">\r\n      <p class=\"breadcrumb-item\" aria-current=\"page\" style=\"font-weight: 600\">\r\n        {{ user | titlecase }} Member Details\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <mat-form-field class=\"col-md-4\">\r\n        <input\r\n          matInput\r\n          placeholder=\"First Name\"\r\n          formControlName=\"firstName\"\r\n          required\r\n        />\r\n        <mat-error class=\"mb-5\">First Name is required!</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"col-md-4\">\r\n        <input\r\n          matInput\r\n          placeholder=\"Last Name\"\r\n          formControlName=\"lastName\"\r\n          required\r\n        />\r\n        <mat-error class=\"mb-5\">Last Name is required!</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"col-md-4\">\r\n        <input matInput placeholder=\"Title\" formControlName=\"title\" required />\r\n        <mat-error class=\"mb-5\">Title is required!</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <mat-form-field class=\"col-md-4\">\r\n        <input\r\n          disabled\r\n          matInput\r\n          placeholder=\"Organization(s)\"\r\n          formControlName=\"org\"\r\n          required\r\n        />\r\n        <mat-error class=\"mb-5\">Organization(s) is required!</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"col-md-4\">\r\n        <input matInput placeholder=\"Email\" formControlName=\"email\" required />\r\n        <mat-error class=\"mb-5\">Email is required!</mat-error>\r\n      </mat-form-field>\r\n\r\n      <!-- <mat-form-field class=\"col-md-4\">\r\n        <input\r\n          matInput\r\n          placeholder=\"Mobile\"\r\n          formControlName=\"mobile\"\r\n          required\r\n        />\r\n        <mat-error class=\"mb-5\">Mobile is required!</mat-error>\r\n      </mat-form-field> -->\r\n\r\n      <mat-form-field class=\"col-md-4\">\r\n        <input matInput placeholder=\"Mobile\" formControlName=\"mobile\" [validation]=\"true\"\r\n            mask=\"(000) 000-0000\" (keypress)=\"keyPress($event)\" pattern=\"[0-9]+\" required>\r\n            <mat-error class=\"mb-5\">Mobile is required!</mat-error>\r\n    </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <!-- <mat-form-field floatPlaceholder=\"never\">\r\n            <input [hidden]=\"true\" (change)=\"onFileSelected($event)\" type=\"file\" accept=\".pdf\" #fileSelect>\r\n            <input readonly matInput [(ngModel)]=\"filename\" placeholder=\"Select file...\"/>\r\n            <button *ngIf=\"this.base64File\" (click)=\"this.base64File = null; this.filename = null\" matSuffix matTooltip=\"Remove selected file\"\r\n                    [matTooltipPosition]=\"'above'\" type=\"button\" color=\"warn\" mat-icon-button>\r\n                    <mat-icon>close</mat-icon>\r\n                  </button>\r\n            <button matSuffix mat-icon-button (click)=\"fileSelect.click();\"  matTooltip=\"Select a file\" [matTooltipPosition]=\"'above'\">\r\n              <mat-icon>file_upload</mat-icon>\r\n            </button> \r\n          </mat-form-field> -->\r\n\r\n    <div class=\"row mt-2\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row mx-3\">\r\n          <img\r\n            class=\"mr-3\"\r\n            style=\"cursor: pointer\"\r\n            src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Group.svg\"\r\n            alt=\"\"\r\n          /><span class=\"span-text\">Response PDF</span> <br />\r\n        </div>\r\n\r\n        <div class=\"row m-0\">\r\n          <div class=\"col-xl-12 mx-auto\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xl-8\">\r\n                <div class=\"mx-3 mt-3\"\r\n                style=\"cursor: pointer\"\r\n                (click)=\"routeResponsePdfwithAnswer()\">\r\n                <span>{{(partFullName ? partFullName : pdfString1) | titlecase}}\r\n                  <!-- <span  *ngIf=\"pdfString !== 'Results PDF'\" >-Response</span> -->\r\n                </span>\r\n              </div>\r\n              </div>\r\n              <div class=\"col-xl-4 mt-3\">\r\n                <span style=\"display: flex; justify-content: end;\">\r\n                  <button style=\"border-radius: 50%; border: none; background-color: #fff;\">\r\n                  <img  *ngIf=\"!isResponse\" (click)=\"resendMail(id)\" src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Vector (1).svg\" alt=\"\"/>\r\n                  <img *ngIf=\"isResponse\" src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Vector (1).svg\" alt=\"\" style=\"opacity: 0.5;\"/>\r\n                </button>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-5 mx-3\">\r\n          <img\r\n            class=\"mr-3\"\r\n            style=\"cursor: pointer\"\r\n            src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Group 234.svg\"\r\n            alt=\"\"\r\n          /><span class=\"span-text\">Results PDF</span> <br />\r\n        </div>\r\n\r\n\r\n        <div class=\"row m-0\">\r\n          <div class=\"col-xl-12 mx-auto\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xl-8\">\r\n                <div\r\n                class=\"mx-3 mt-3 d-flex justify-content-between\"\r\n                style=\"cursor: pointer\"\r\n                (click)=\"routeResponsePdf()\"\r\n              >\r\n                <span\r\n                  >{{ pdfString | titlecase}}\r\n                  <span *ngIf=\"pdfString !== 'Results PDF'\">-Result PDF</span>\r\n                </span>\r\n              </div>\r\n              </div>\r\n              <div class=\"col-xl-4 mt-4\">\r\n                <span style=\"display: flex; justify-content: end; cursor: pointer;\"\r\n                ><img\r\n                  src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Vector (1).svg\"\r\n                  alt=\"\"\r\n                  (click)=\"sendPdToEmail()\"\r\n              />\r\n              <!-- <div class=\"col-xl-4 mt-3\">\r\n                <span style=\"display: flex; justify-content: end;cursor: pointer;\">\r\n                  <button style=\"border-radius: 50%; border: none; background-color: #fff;\">\r\n                    <img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Vector (1).svg\" alt=\"\" (click)=\"sendPdToEmail()\"/>\r\n                </button>\r\n                </span>\r\n              </div> -->\r\n              \r\n            </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row mx-3\">\r\n          <img\r\n            class=\"mr-3\"\r\n            style=\"cursor: pointer\"\r\n            src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Group 232.svg\"\r\n            alt=\"\"\r\n            (click)=\"routeResponsePdf()\"\r\n          /><span class=\"span-text\">Aggregated PDF</span>\r\n        </div>\r\n        <div (click)=\"aggregate('yes')\" *ngIf=\"showAggregate\" style=\"cursor: pointer;\" class=\"mx-3 mt-3\">{{ (fullName) | titlecase}} - Aggregated PDF</div>\r\n\r\n        <div class=\"mt-5 mx-3\">\r\n          <img\r\n            class=\"mr-3\"\r\n            style=\"cursor: pointer\"\r\n            src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Group 233.svg\"\r\n            alt=\"\"\r\n          /><span class=\"span-text\">Manual Generate PDF</span>\r\n        </div>\r\n        <button class=\"btn btn-primary mt-3 ml-3\" (click)=\"aggregate('no')\">Manual Generate PDF</button>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <span class=\"span-text\">Upload PDF</span>\r\n        <button\r\n          *ngIf=\"!spinner && !pdfUploaded\"\r\n          mat-button\r\n          style=\"\r\n            padding: 64px;\r\n            width: 100%;\r\n            border: solid 1px #dfeaff;\r\n            max-height: 202px;\r\n          \"\r\n          (click)=\"selectFile()\"\r\n        >\r\n          <i class=\"fa fa-upload\" aria-hidden=\"true\"></i><br />Upload PDF\r\n        </button>\r\n\r\n        <button\r\n          *ngIf=\"spinner\"\r\n          [disabled]=\"true\"\r\n          mat-button\r\n          style=\"\r\n            padding: 64px;\r\n            width: 100%;\r\n            border: solid 1px #dfeaff;\r\n            max-height: 202px;\r\n          \"\r\n        >\r\n          <div class=\"spinner-border text-primary\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div>\r\n          <br />PDF Uploading...\r\n        </button>\r\n\r\n        <button\r\n          aria-expanded=\"false\"\r\n          *ngIf=\"!spinner && pdfUploaded\"\r\n          mat-button\r\n          style=\"\r\n            padding: 64px;\r\n            width: 100%;\r\n            border: solid 1px #dfeaff;\r\n            background-color: #4d8be547;\r\n            max-height: 202px;\r\n          \"\r\n          (click)=\"selectFile()\"\r\n        >\r\n          <i class=\"fa fa-upload\" aria-hidden=\"true\"></i><br />Upload PDF<br />\r\n          <span *ngIf=\"pdfString !== 'Results PDF'\"\r\n            ><i\r\n              class=\"fa fa-star mr-2\"\r\n              style=\"color: #e7e703\"\r\n              aria-hidden=\"true\"\r\n            ></i\r\n            >{{ pdfString }}</span\r\n          >\r\n        </button>\r\n\r\n        <input\r\n          type=\"file\"\r\n          style=\"display: none\"\r\n          #fileInput\r\n          accept=\".pdf\"\r\n          (change)=\"onFileSelected($event)\"\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"row\">\r\n            <div class=\"col-md d-flex align-items-center\">\r\n                <img class=\"mr-3\" style=\"cursor: pointer;\" src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Group 234.svg\" alt=\"\" (click)=\"routeResponsePdf()\"> Response PDF   \r\n              </div>\r\n    \r\n              <div class=\"col \">\r\n                <button *ngIf=\"!spinner\" class=\"mt-5\" mat-button style=\"padding: 64px;\r\n                width: 50%;border: solid 1px #dfeaff;\" (click)=\"selectFile()\" ><i class=\"fa fa-upload\" aria-hidden=\"true\"></i><br>Upload PDF</button>\r\n               \r\n               <button *ngIf=\"spinner\" [disabled]=\"true\" class=\"mt-5\" mat-button style=\"padding: 64px;\r\n               width: 50%;border: solid 1px #dfeaff;\"><div class=\"spinner-border text-primary\" role=\"status\">\r\n  <span class=\"sr-only\">Loading...</span>\r\n</div><br>PDF Uploading...</button>\r\n\r\n                <input type=\"file\" style=\"display: none;\" #fileInput accept=\".pdf\"  (change)=\"onFileSelected($event)\"> \r\n              </div>\r\n          </div> -->\r\n    <div class=\"col-md-12 py-3\">\r\n      <label class=\"span-text\">Chat GPT</label>\r\n      <textarea\r\n        class=\"p-2 px-4 w-100\"\r\n        rows=\"3\"\r\n        cols=\"50\"\r\n        formControlName=\"prompt\"\r\n        appCapitalizeFirstLetter\r\n        style=\"border: 2px dashed #e0e0e0; font-size: 12px\"\r\n      ></textarea>\r\n    </div>\r\n\r\n    <div class=\"footer\">\r\n      <button mat-raised-button (click)=\"onSubmit()\" class=\"savebtn\">\r\n        Save\r\n      </button>\r\n      &nbsp;&nbsp;\r\n      <button mat-raised-button class=\"cancel\" (click)=\"onCancel()\">Cancel</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<div class=\"\"></div>\r\n\r\n<form [formGroup]=\"membersForm\">\r\n  <div class=\"page-content category-info\">\r\n    <div class=\"breadcrumb\" style=\"background: transparent; display: block\">\r\n      <p\r\n        class=\"breadcrumb-item\"\r\n        aria-current=\"page\"\r\n        style=\"color: #a92a23; font-size: 16px\"\r\n      >\r\n        Respondent Category\r\n      </p>\r\n\r\n      <div class=\"tab-button\">\r\n        <button\r\n          mat-raised-button\r\n          class=\"questionbtn\"\r\n          (click)=\"openAddUserPopup()\"\r\n        >\r\n          <mat-icon class=\"plusbtn\">add</mat-icon>&nbsp;Respondent\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"userlist-table w-100\">\r\n      <div style=\"overflow-y: auto\" class=\"table-responsive\">\r\n        <table\r\n          mat-table\r\n          [dataSource]=\"membersUserList\"\r\n          matSort\r\n          class=\"mat-elevation-z8 w-100\"\r\n        >\r\n          <ng-container matColumnDef=\"position\">\r\n            <th mat-header-cell *matHeaderCellDef>S.No</th>\r\n            <td mat-cell *matCellDef=\"let element; let i = index\">\r\n              {{ i + 1 }}\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"firstName\">\r\n            <th mat-header-cell *matHeaderCellDef>First Name</th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              {{ element?.firstName | titlecase }}\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"lastName\">\r\n            <th mat-header-cell *matHeaderCellDef>Last Name</th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              {{ element?.lastName | titlecase }}\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"title\">\r\n            <th mat-header-cell *matHeaderCellDef>\r\n              Title&nbsp;&nbsp;&nbsp;&nbsp;\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              {{ element?.title | titlecase }}\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"roles\">\r\n            <th mat-header-cell *matHeaderCellDef>\r\n              Roles&nbsp;&nbsp;&nbsp;&nbsp;\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              {{ element?.catogory | titlecase }}\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"organization\">\r\n            <th mat-header-cell *matHeaderCellDef>Organization(s)</th>\r\n            <td mat-cell *matCellDef=\"let element\">{{ orgName }}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"email\">\r\n            <th mat-header-cell *matHeaderCellDef>\r\n              Email &nbsp;&nbsp;&nbsp;&nbsp;\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            </th>\r\n            <td mat-cell *matCellDef=\"let element\">{{ element?.email }}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"mobile\">\r\n            <th mat-header-cell *matHeaderCellDef>\r\n              Mobile&nbsp;&nbsp;&nbsp;&nbsp;\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            </th>\r\n            <td mat-cell *matCellDef=\"let element\">{{ element?.mobile }}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"pdf\">\r\n            <th mat-header-cell *matHeaderCellDef>\r\n              PDF &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <img *ngIf=\"element.responsed\"\r\n                class=\"ml-4\"\r\n                style=\"cursor: pointer\"\r\n                (click)=\"routeRespondantPdf(element._id)\"\r\n                src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Group.svg\"\r\n                alt=\"\"/>\r\n                <img *ngIf=\"!element.responsed\"\r\n                class=\"ml-4\" style=\"opacity: 0.4;\"\r\n                src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Group.svg\"\r\n                alt=\"\"/>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"actions\">\r\n            <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n            <td mat-cell *matCellDef=\"let row\">\r\n              <img (click)=\"resendMail(id)\" *ngIf=\"!row.responsed\" style=\"cursor: pointer\" class=\"mr-3 ml-3\" src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Vector (1).svg\" alt=\"\"/>\r\n              <img *ngIf=\"row.responsed\" src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/Vector (1).svg\" class=\"mr-3 ml-3\" alt=\"\" style=\"opacity: 0.5;\"/>\r\n              <i\r\n                matTooltip=\"Edit\"\r\n                class=\"fas fa-edit\"\r\n                style=\"\r\n                  font-size: 20px;\r\n                  cursor: pointer;\r\n                  padding-left: 9px;\r\n                  padding-right: 9px;\r\n                  color: gray;\r\n                \"\r\n                (click)=\"editmemberdetail(row?._id)\"\r\n              ></i>\r\n\r\n              <i\r\n                matTooltip=\"Delete\"\r\n                class=\"fas fa-trash-alt\"\r\n                style=\"\r\n                  font-size: 20px;\r\n                  cursor: pointer;\r\n                  padding-left: 7px;\r\n                  padding-right: 7px;\r\n                  color: #797A7C;\r\n                \"\r\n                (click)=\"membersDelete(row, delete)\"\r\n              ></i>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<ng-template #delete class=\"mat-dialog-container\">\r\n  <div class=\"example-container\">\r\n    <h5\r\n      mat-dialog-title\r\n      class=\"p-2 px-3\"popPdf\r\n      style=\"background-color: #3b4f6a; color: #fff\"\r\n    >\r\n      Alert\r\n      <!-- <button mat-icon-button\r\n        class=\"close-button\" [mat-dialog-close]=\"true\">\r\n        <mat-icon class=\"close-icon mb-2\" (click)=\"cancel()\">close </mat-icon>\r\n      </button> -->\r\n    </h5>\r\n    <mat-dialog-content class=\"mx-3 my-2 text-center\">\r\n      <p>Are you sure, want to Delete ?</p>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions class=\"px-2 mb-2 text-center\">\r\n      <button mat-button class=\"button-save\" (click)=\"closeDialog()\">\r\n        Yes\r\n      </button>\r\n      <button\r\n        mat-button\r\n        class=\"button-cancel\"\r\n        mat-dialog-close\r\n        (click)=\"cancelDialog()\"\r\n      >\r\n        Cancel\r\n      </button>\r\n    </mat-dialog-actions>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #popPdf>\r\n  <div class=\"example-container\">\r\n    <mat-card-header style=\"display: flex; justify-content: center\">\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title>\r\n        <img src=\"https://map-vfs-s3.s3.amazonaws.com/testing/images/MapLogo.png\" />\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <div class=\"py-3\" style=\"display: flex; justify-content: center\">\r\n      <p>Please complete your feedback for below</p>\r\n    </div>\r\n    <mat-dialog-content class=\"py-3 text-center\"\r\n      style=\"display: flex;\r\n        justify-content: center;\r\n        background-color: #3b4f6a;\r\n        color: #fff;\r\n        height: 65px;\">\r\n      <p>The of Organizational Communication</p>\r\n    </mat-dialog-content>\r\n    <div class=\"set-height\">\r\n      <div class=\"m-3\" *ngFor=\"let item of quesName; let i = index\">\r\n        <p class=\"fw-bold\">{{i+1}}. {{ item?.name }}</p>\r\n        <textarea disabled class=\"p-2 px-4 w-100\" rows=\"3\" cols=\"50\" type=\"text\" style=\"border: 2px dashed #E0E0E0; font-size: 12px;\">{{ item?.answer }}</textarea>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n";

/***/ }),

/***/ 85529:
/*!********************************************************************!*\
  !*** ./src/app/pages/gropus/uno-members.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n<div class=\"example-container\">\r\n    <div mat-dialog-title class=\"p-2 px-3\" style=\"background-color: #3b4f6a; color: #fff; height: 64.17px;\">\r\n      <p class=\"py-2\" style=\"font-size: 20px;\">Add Respondent</p>\r\n    </div>\r\n  </div>\r\n<form [formGroup]=\"respondentForm\">\r\n    <div class=\"page-content category-info\">\r\n        <div class=\"row\">\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"First Name\" formControlName=\"firstName\" required>\r\n                <mat-error class=\"mb-5\">First Name is required!</mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Last Name\" formControlName=\"lastName\" required>\r\n                <mat-error class=\"mb-5\">Last Name is required!</mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Title\" formControlName=\"title\" required>\r\n                <mat-error class=\"mb-5\">Title is required!</mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Organization (s)\" formControlName=\"organization\" required>\r\n                <mat-error class=\"mb-5\">First Name is required!</mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                <mat-error class=\"mb-5\">Last Name is required!</mat-error>\r\n            </mat-form-field>\r\n\r\n            <!-- <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Mobile\" formControlName=\"mobile\" required>\r\n                <mat-error class=\"mb-5\">Title is required!</mat-error>\r\n            </mat-form-field> -->\r\n\r\n\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Mobile\" formControlName=\"mobile\" [validation]=\"true\"\r\n                    mask=\"(000) 000-0000\" (keypress)=\"keyPress($event)\" pattern=\"[0-9]+\" required>\r\n                    <mat-error class=\"mb-5\">Mobile is required!</mat-error>\r\n            </mat-form-field>\r\n            \r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Questions Template\" formControlName=\"questionTemplate\" required>\r\n                <mat-error class=\"mb-5\">Questions Template is required!</mat-error>\r\n            </mat-form-field>\r\n\r\n            <!-- <mat-form-field class=\"col-md-4\">\r\n                <input matInput placeholder=\"Questions PDF\" formControlName=\"questionPDF\" required>\r\n                <mat-error class=\"mb-5\">Questions PDF is required!</mat-error>\r\n            </mat-form-field> -->\r\n\r\n            <mat-form-field class=\"col-md-4\">\r\n                <mat-select formControlName=\"roles\" required placeholder=\"Roles\">\r\n                    <mat-option *ngFor=\"let item of Category\" [value]=\"item.value\">\r\n                        {{item.viewValue}}\r\n                    </mat-option>\r\n                </mat-select>\r\n                <mat-error *ngIf=\"respondentForm.get('roles').hasError('required')\"\r\n                    class=\"mb-5\">Select Respondent Category is required!</mat-error>\r\n            </mat-form-field>\r\n\r\n\r\n\r\n            <div class=\"col-md-4 d-flex align-items-center\">\r\n                <mat-checkbox [checked]=\"checkboxValue\" (change)=\"onCheckboxChange($event)\" ><span style=\"color: #9C9C9C;\">Add Supervisor</span></mat-checkbox>\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"footer\">\r\n            <button mat-raised-button class=\"savebtn\" (click)=\"onSubmit()\">Save</button> &nbsp;&nbsp; \r\n            <button mat-raised-button class=\"cancel\" (click)=\"cancel()\">Cancel</button>\r\n        </div>\r\n    </div>\r\n</form>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_gropus_gropus_module_ts.js.map