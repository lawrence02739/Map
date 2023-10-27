(self["webpackChunkmap_frontend"] = self["webpackChunkmap_frontend"] || []).push([["src_app_pages_workshop_workshop_module_ts"],{

/***/ 50763:
/*!*************************************************************!*\
  !*** ./src/app/pages/workshop/workshop-detail.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkshopDetailComponent": () => (/* binding */ WorkshopDetailComponent)
/* harmony export */ });
/* harmony import */ var D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _workshop_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workshop-detail.component.html?ngResource */ 93208);
/* harmony import */ var _workshop_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workshop-detail.component.scss?ngResource */ 76610);
/* harmony import */ var _workshop_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_workshop_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 25852);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 22887);
/* harmony import */ var src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/storage-setting/storage-configuration */ 46352);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_shared_add_participation_add_participation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/add-participation/add-participation.component */ 43721);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 86942);


















let WorkshopDetailComponent = class WorkshopDetailComponent {
  constructor(fb, storageConfiguration, configuration, dataService, http, router, route, toastr, dialog, spinner, _matDialog) {
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
    this._matDialog = _matDialog;
    this.participantList = [];
    this.roles = [];
    this.isEdit = false;
    this.showAdminContent = true;
    this.showManagerContent = true;
    this.pageSizeOptions = [5, 10, 25, 100];
    this.pageNumber = 1;
    this.displayedColumns = ['position', 'firstName', 'lastName', 'email', 'mobile', 'address', 'actions'];
    this.userList = [];
    this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl();
    this.minDate = new Date();
    this.pageSize = 10;
    this.workshopForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      workshopDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      dueDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      conductedBy: [''],
      createdDate: [''],
      createdBy: ['']
    });
  }
  ngOnInit() {
    this.roleName = this.storageConfiguration.sessionGetItem(this.storageConfiguration.name);
    this.getUserList();
    this.route.params.subscribe(params => {
      this.workshopId = params.workshopId;
    });
    this.getRoles();
    this.showAdminContent = true;
    this.showManagerContent = false;
    if (this.workshopId != '' && this.workshopId != undefined) {
      this.isEdit = true;
      this.editworkshopDetails();
      this.getParticipantList();
    }
  }
  createparticipant() {
    if (this.workshopForm.valid) {
      let workshopForm = this.workshopForm.value;
      let parsedDate = new Date(workshopForm.workshopDate);
      let actualUTCWorkshopDate = new Date(Date.UTC(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate())).toISOString();
      let workshopModel = {
        name: workshopForm.name,
        dueDate: workshopForm.dueDate,
        workshopDate: actualUTCWorkshopDate,
        conductedBy: this.selectedUserId,
        createdBy: this.storageConfiguration.sessionGetItem(this.storageConfiguration.id),
        updatedBy: this.storageConfiguration.sessionGetItem(this.storageConfiguration.id)
      };
      this.spinner.show();
      this.dataService.addUser(this.configuration.workshop, workshopModel).subscribe(data => {
        if (data.isSuccess == true) {
          this.toastr.success('Workshop Created Successfully!!');
          this.workshopId = data.data._id;
          this.router.navigate(['/map/workshop/workshop-detail', {
            workshopId: data.data._id
          }]);
          this.editworkshopDetails();
          this.spinner.hide();
        }
      }, err => {
        this.spinner.show();
        if (err.error.data.errmsg == 'Email Already Exists') {
          this.toastr.error('Email Already Exists.');
        }
        this.spinner.hide();
      });
    } else {
      for (const i in this.workshopForm.controls) {
        this.workshopForm.controls[i].markAsDirty();
        this.workshopForm.controls[i].updateValueAndValidity();
      }
      this.toastr.error('Please enter the required fields.');
    }
  }
  editworkshopDetails() {
    this.spinner.show();
    this.dataService.getSingle(this.workshopId, this.configuration.workshop + '/').subscribe(data => {
      let workshopInfo = data.data;
      this.workshopForm.patchValue({
        name: workshopInfo.name,
        workshopDate: workshopInfo.workshopDate,
        dueDate: workshopInfo.dueDate,
        conductedBy: workshopInfo.conductedBy ? workshopInfo.conductedBy.firstName + ' ' + workshopInfo.conductedBy.lastName : '',
        createdDate: workshopInfo.createdDate,
        createdBy: workshopInfo.createdBy ? workshopInfo.createdBy.firstName + ' ' + workshopInfo.createdBy.lastName : ''
      });
      this.isProfileImage = true;
      this.conductedByUserImage = workshopInfo.conductedBy ? workshopInfo.conductedBy.profileImageURL : '';
      this.createdByUserImage = workshopInfo.createdBy ? workshopInfo.createdBy.profileImageURL : '';
      this.createdDate = workshopInfo.createdDate;
      this.createdBy = workshopInfo.createdBy ? workshopInfo.createdBy._id : '';
      this.selectedUserId = workshopInfo.conductedBy ? workshopInfo.conductedBy._id : '';
    }, err => {
      this.spinner.hide();
    });
    this.spinner.hide();
  }
  updateworkshop() {
    let workshopForm = this.workshopForm.value;
    let parsedDate = new Date(workshopForm.workshopDate);
    let actualUTCWorkshopDate = new Date(Date.UTC(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate())).toISOString();
    let workshopModel = {
      name: workshopForm.name,
      dueDate: workshopForm.dueDate,
      workshopDate: actualUTCWorkshopDate,
      conductedBy: this.selectedUserId,
      createdDate: this.createdDate,
      createdBy: this.createdBy,
      updatedBy: this.storageConfiguration.sessionGetItem(this.storageConfiguration.id)
    };
    this.dataService.updateUser(this.workshopId, this.configuration.workshop + '/', workshopModel).subscribe(data => {
      this.toastr.success('Workshop Updated Successfully.');
    }, err => {
      this.toastr.error(err.error.message);
    });
  }
  getParticipantList() {
    this.spinner.show();
    this.dataService.getAll(this.configuration.participant + '?workshop=' + this.workshopId).subscribe(data => {
      let participantList = data.data;
      this.totalRecords = data.totalRecords;
      this.participantList = this.participantListTableData(participantList);
      this.spinner.hide();
    }, err => {});
  }
  participantListTableData(workData) {
    let participantListData = [];
    workData.forEach((element, index) => {
      participantListData.push({
        id: element._id,
        position: index + 1 + (this.pageNumber - 1) * this.pageSize,
        firstName: element.firstName,
        lastName: element.lastName,
        email: element.email,
        address: element.address.addressLine,
        mobile: element.address.mobile
      });
    });
    return participantListData;
  }
  nextPage(event) {
    this.spinner.show();
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize ? event.pageSize : 10;
    this.dataService.getAll(this.configuration.participant + '?workshop=' + this.workshopId + '&pageNumber=' + this.pageNumber + '&pageSize=' + this.pageSize).subscribe(data => {
      let participantList = data.data;
      this.totalRecords = data.totalRecords;
      this.participantList = this.participantListTableData(participantList);
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
  }
  addparticipationPopup() {
    this.addparticipationDialog = this.dialog.open(src_app_shared_add_participation_add_participation_component__WEBPACK_IMPORTED_MODULE_7__.AddParticipationComponent, {
      disableClose: false,
      data: {
        workshopId: this.workshopId
      }
    });
    this.addparticipationDialog.afterClosed().subscribe(result => {
      if (result) {
        this.getParticipantList();
      }
    });
  }
  editparticipationdetail(participantId) {
    this.addparticipationDialog = this.dialog.open(src_app_shared_add_participation_add_participation_component__WEBPACK_IMPORTED_MODULE_7__.AddParticipationComponent, {
      disableClose: false,
      data: {
        workshopId: this.workshopId,
        participantId: participantId,
        type: 'edit'
      }
    });
    this.addparticipationDialog.afterClosed().subscribe(result => {
      if (result) {
        this.getParticipantList();
      }
    });
  }
  deleteParticipant(participantId) {
    let message = {
      message: 'Do you want to delete this participant?'
    };
    this.confirmDialogRef = this.dialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogComponent, {
      panelClass: 'confirm',
      disableClose: false,
      data: message
    });
    // this.confirmDialogRef.componentInstance.confirmMessage = 'Do you want to delete this participant?';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.delete(participantId, this.configuration.participant + '/').subscribe(data => {
          this.toastr.success('Participant Deleted Successfully.');
          this.getParticipantList();
        }, err => {});
      }
    });
  }
  getUserList() {
    this.dataService.getAll(this.configuration.user + '?sortBy=createdDate&orderBy=desc').subscribe(data => {
      let userList = data.data;
      this.totalRecords = data.totalRecords;
      this.userList = this.userListTableData(userList);
      this.getFilteredValue();
    }, err => {});
  }
  getFilteredValue() {
    if (this.userList.length > 0) {
      this.filteredOptions = this.myControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(data => this._filter(data)));
    }
  }
  _filter(value) {
    let customerData = JSON.stringify(this.userList);
    let customerList = JSON.parse(customerData);
    const filterValue = value.toLowerCase();
    return customerList.filter(option => option.fullName.toString().toLowerCase().includes(filterValue));
  }
  onSelectedUser(event) {
    this.selectedUserId = event.option.id.id;
    this.conductedByUserImage = event.option.id.profileImageURL;
    this.isProfileImage = true;
  }
  searchUser() {
    var _this = this;
    return (0,D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.myControl.value != undefined && _this.myControl.value != "") {
        _this.userList = [];
        yield _this.dataService.getAll(_this.configuration.user + '?firstName=' + _this.myControl.value).subscribe(data => {
          let userList = data.data;
          _this.userList = _this.userListTableData(userList);
          _this.getFilteredValue();
        }, err => {});
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
        role: element.role.displayName,
        firstname: element.firstName,
        lastname: element.lastName,
        fullName: element.firstName + ' ' + element.lastName,
        email: element.email,
        profileImageURL: element.profileImageURL,
        isActive: element.isActive == true
      });
    });
    return userListData;
  }
  getRoles() {
    var _this2 = this;
    return (0,D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.dataService.getAll(_this2.configuration.roles).subscribe(data => {
        _this2.roles = data.data.data;
      });
    })();
  }
  selectedRole(role) {
    this.workshopForm.controls['roleName'].setValue(role);
    let roleExists = this.roles.find(roleItems => roleItems.name == role);
    if (roleExists) {
      this.selectedRoleId = roleExists._id;
      this.selectedRoleName = roleExists.name;
    }
  }
  keyPress(event) {
    const pattern = /[0-9\+\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  deleteWorkshop() {
    let message = {
      message: 'Do you want to delete this workshop?'
    };
    this.confirmDialogRef = this._matDialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmDialogComponent, {
      panelClass: 'confirm',
      disableClose: false,
      data: message
    });
    // this.confirmDialogRef.componentInstance.confirmMessage = 'Do you want to delete this workshop?';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.delete(this.workshopId, this.configuration.workshop + '/').subscribe(data => {
          this.toastr.success('Workshop deleted successfully!!');
          this.router.navigate(['/map/workshop']);
        }, err => {});
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder
  }, {
    type: src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_4__.StorageConfiguration
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_5__.Configuration
  }, {
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService
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
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
      args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, {
        static: true
      }]
    }],
    formPopUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
      args: ["formPopUp", {
        static: false
      }]
    }]
  };
};
WorkshopDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: 'app-workshop-detail',
  template: _workshop_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_workshop_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], WorkshopDetailComponent);


/***/ }),

/***/ 74005:
/*!***********************************************************!*\
  !*** ./src/app/pages/workshop/workshop-list.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkshopListComponent": () => (/* binding */ WorkshopListComponent)
/* harmony export */ });
/* harmony import */ var D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _workshop_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workshop-list.component.html?ngResource */ 11596);
/* harmony import */ var _workshop_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workshop-list.component.scss?ngResource */ 59361);
/* harmony import */ var _workshop_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_workshop_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 25852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/storage-setting/storage-configuration */ 46352);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 49272);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 22887);















let WorkshopListComponent = class WorkshopListComponent {
  constructor(router, configuration, dataService, storageConfiguration, toastr, spinner, _matDialog) {
    this.router = router;
    this.configuration = configuration;
    this.dataService = dataService;
    this.storageConfiguration = storageConfiguration;
    this.toastr = toastr;
    this.spinner = spinner;
    this._matDialog = _matDialog;
    this.workshopList = [];
    this.showAdminContent = true;
    this.showManagerContent = true;
    this.displayedColumns = ['position', 'workshopName', 'workshopDate', 'dueDate', 'createdDate', 'conductedBy', 'createdBy', 'actions'];
    this.pageSizeOptions = [5, 10, 25, 100];
    this.pageNumber = 1;
  }
  ngOnInit() {
    this.showAdminContent = true;
    this.showManagerContent = false;
    this.roleName = this.storageConfiguration.sessionGetItem(this.storageConfiguration.role);
    this.id = this.storageConfiguration.sessionGetItem(this.storageConfiguration.id);
    if (this.roleName == 'staff') {
      this.path = 'sortBy=createdDate&orderBy=desc&createdBy=' + this.id;
    } else {
      this.path = 'sortBy=createdDate&orderBy=desc';
    }
    this.getWorkshopList();
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
  getWorkshopList() {
    this.spinner.show();
    this.workshopList = [];
    this.dataService.getAll(this.configuration.workshop + '?' + this.path).subscribe(data => {
      let workshopList = data.data;
      this.totalRecords = data.totalRecords;
      this.workshopList = this.workshopListTableData(workshopList);
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
  }
  searchWorkshop() {
    var _this = this;
    return (0,D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.workshopSearchValue != undefined && _this.workshopSearchValue != "") {
        yield _this.dataService.getAll(_this.configuration.workshop + '?name=' + _this.workshopSearchValue + '&' + _this.path).subscribe(data => {
          let workshopList = data.data;
          _this.totalRecords = data.data.length;
          _this.pageNumber = 1;
          _this.paginator.pageIndex = 0;
          _this.workshopList = _this.workshopListTableData(workshopList);
        }, err => {
          _this.spinner.hide();
        });
      } else {
        _this.getWorkshopList();
      }
    })();
  }
  workshopListTableData(workData) {
    let workListData = [];
    workData.forEach((element, index) => {
      workListData.push({
        workshopId: element._id,
        position: index + 1 + (this.pageNumber - 1) * 10,
        workshopName: element.name,
        workshopDate: element.workshopDate,
        dueDate: element.dueDate,
        createdDate: element.createdDate,
        conductedByName: element.conductedBy ? element.conductedBy.firstName + ' ' + element.conductedBy.lastName : '',
        conductedByImage: element.conductedBy ? element.conductedBy.profileImageURL : '',
        createdByName: element.createdBy ? element.createdBy.fullName : '',
        createdByImage: element.createdBy ? element.createdBy.profileImageURL : ''
      });
    });
    return workListData;
  }
  nextPage(event) {
    this.spinner.show();
    this.pageNumber = event.pageIndex + 1;
    this.dataService.getAll(this.configuration.workshop + '?pageNumber=' + this.pageNumber + '&' + this.path).subscribe(data => {
      let workshopList = data.data;
      this.totalRecords = data.totalRecords;
      this.workshopList = this.workshopListTableData(workshopList);
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
  }
  applyFilter(event) {}
  deleteWorkshop(workshopId) {
    let message = {
      message: 'Do you want to delete this workshop?'
    };
    this.confirmDialogRef = this._matDialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialogComponent, {
      panelClass: 'confirm',
      disableClose: false,
      data: message
    });
    // this.confirmDialogRef.componentInstance.confirmMessage = 'Do you want to delete this workshop?';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.delete(workshopId, this.configuration.workshop + '/').subscribe(data => {
          this.toastr.success('Workshop deleted successfully!!');
          this.getWorkshopList();
        }, err => {});
      }
    });
  }
  editWorkshopDetail(workshopId) {
    this.router.navigate(['/map/workshop/workshop-detail', {
      workshopId: workshopId
    }]);
  }
  createWorkshop() {
    this.router.navigate(['/map/workshop/workshop-create']);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration
  }, {
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
  }, {
    type: src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_5__.StorageConfiguration
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog
  }];
  static #_2 = this.propDecorators = {
    sorting: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, {
        static: true
      }]
    }],
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
      args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, {
        static: true
      }]
    }]
  };
};
WorkshopListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-workshop-list',
  template: _workshop_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_workshop_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], WorkshopListComponent);


/***/ }),

/***/ 2815:
/*!***************************************************!*\
  !*** ./src/app/pages/workshop/workshop.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkshopModule": () => (/* binding */ WorkshopModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _workshop_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workshop-list.component */ 74005);
/* harmony import */ var _workshop_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workshop-detail.component */ 50763);
/* harmony import */ var _workshop_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workshop.routing.module */ 95531);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ 59129);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);









let WorkshopModule = class WorkshopModule {};
WorkshopModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _workshop_routing_module__WEBPACK_IMPORTED_MODULE_3__.WorkshopRoutingModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltipModule],
  declarations: [_workshop_list_component__WEBPACK_IMPORTED_MODULE_1__.WorkshopListComponent, _workshop_detail_component__WEBPACK_IMPORTED_MODULE_2__.WorkshopDetailComponent],
  providers: []
})], WorkshopModule);


/***/ }),

/***/ 95531:
/*!***********************************************************!*\
  !*** ./src/app/pages/workshop/workshop.routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkshopRoutingModule": () => (/* binding */ WorkshopRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _workshop_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workshop-detail.component */ 50763);
/* harmony import */ var _workshop_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workshop-list.component */ 74005);





const routes = [{
  path: '',
  component: _workshop_list_component__WEBPACK_IMPORTED_MODULE_1__.WorkshopListComponent
}, {
  path: 'workshop-create',
  component: _workshop_detail_component__WEBPACK_IMPORTED_MODULE_0__.WorkshopDetailComponent
}, {
  path: 'workshop-detail',
  component: _workshop_detail_component__WEBPACK_IMPORTED_MODULE_0__.WorkshopDetailComponent
}];
let WorkshopRoutingModule = class WorkshopRoutingModule {};
WorkshopRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], WorkshopRoutingModule);


/***/ }),

/***/ 76610:
/*!**************************************************************************!*\
  !*** ./src/app/pages/workshop/workshop-detail.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".breadcrumb-view {\n  background-image: url('login-bg.png');\n  width: 100%;\n  background-size: cover;\n  padding: 20px;\n  padding-top: 120px;\n}\n\n.logo-icon {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n}\n\n.btn_sec button {\n  margin-left: 30px;\n  width: 110px;\n}\n\n.del_icon {\n  float: right;\n  margin-top: -58px;\n  margin-right: 30px;\n  font-size: 21px;\n  padding: 8px 10px;\n  color: #a92a23;\n  border-radius: 6px;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/workshop/workshop-detail.component.scss"],"names":[],"mappings":"AAAA;EACI,qCAAA;EACA,WAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;AACJ;;AACA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;AAEJ;;AAGA;EACI,iBAAA;EACA,YAAA;AAAJ;;AAEA;EACI,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;EAEA,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,eAAA;AAAJ","sourcesContent":[".breadcrumb-view {\r\n    background-image: url(\"../../../assets/images/login-bg.png\");\r\n    width: 100%;\r\n    background-size: cover;\r\n    padding: 20px;\r\n    padding-top: 120px;\r\n}\r\n.logo-icon {\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n}\r\n.mat-form-field {\r\n    // margin-bottom: 10px;\r\n}\r\n.btn_sec button {\r\n    margin-left: 30px;\r\n    width: 110px;\r\n}\r\n.del_icon {\r\n    float: right;\r\n    margin-top: -58px;\r\n    margin-right: 30px;\r\n    font-size: 21px;\r\n    //background: #a92a23;\r\n    padding: 8px 10px;\r\n    color: #a92a23;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 59361:
/*!************************************************************************!*\
  !*** ./src/app/pages/workshop/workshop-list.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mat-form-field {\n  margin-bottom: 0px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/workshop/workshop-list.component.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;AACJ","sourcesContent":[".mat-form-field{\r\n    margin-bottom: 0px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 93208:
/*!**************************************************************************!*\
  !*** ./src/app/pages/workshop/workshop-detail.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"bg-layout\">\r\n\r\n    <div aria-label=\"breadcrumb\" style=\"width: 100%; background-size: cover;  padding-top: 10px;\">\r\n        <ol class=\"breadcrumb\" style=\"background: transparent; margin-left: 7px;\">\r\n            <li class=\"breadcrumb-item\" aria-current=\"page\"><a [routerLink]=\"['../']\"\r\n                    style=\"color:  #B2B2B3; font-size: 16px;\">Workshop </a></li>\r\n            <li class=\"breadcrumb-item\" *ngIf=\"!isEdit\" aria-current=\"page\" style=\"color: #a92a23; font-size: 16px\">Add\r\n            </li>\r\n            <li class=\"breadcrumb-item\" *ngIf=\"isEdit\" aria-current=\"page\" style=\"color: #a92a23; font-size: 16px\">Edit\r\n            </li>\r\n        </ol>\r\n        <i *ngIf=\"isEdit\" class=\"fas fa-trash-alt del_icon\" style=\"float: right;\" (click)=\"deleteWorkshop()\"></i>\r\n    </div>\r\n\r\n\r\n    <div class=\"page-content pb-4\" style=\"margin: 20px; margin-bottom: 0px; border-radius: 8px;\">\r\n\r\n        <form [formGroup]=\"workshopForm\" class=\"ant-advanced-search-form\"\r\n            style=\"padding: 20px; border-radius: 8px; background: #FFFF;\">\r\n\r\n            <h5 class=\"pb-3 pt-3\" style=\"color: #a92a23; font-size: 22px; font-weight: 600;\">Workshop Info</h5>\r\n\r\n            <div class=\"row\">\r\n\r\n                <mat-form-field class=\"col-md-6\">\r\n                    <mat-label>Workshop Name</mat-label>\r\n                    <input matInput placeholder=\"Workshop Name\" formControlName=\"name\" required>\r\n                    <mat-error class=\"mb-5\">Workshop name is required!</mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-6\">\r\n                    <input matInput formControlName=\"workshopDate\" [matDatepicker]=\"picker1\" placeholder=\"Workshop Date\"\r\n                        required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker1></mat-datepicker>\r\n                    <mat-error class=\"mb-5\">Workshop Date is required!</mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-6\" style=\"margin-top: 19px;\">\r\n                    <input matInput formControlName=\"dueDate\" [matDatepicker]=\"picker2\" placeholder=\"Workshop Due Date\"\r\n                        [min]=\"workshopForm.value.workshopDate\" required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker2></mat-datepicker>\r\n                    <mat-error class=\"mb-5\">Workshop Due Date is required!</mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"col-md-6\">\r\n                    <mat-label>Search Conducted By</mat-label>\r\n                    <img *ngIf=\"isProfileImage\" style=\"cursor: pointer; max-width: none; float: left;\" class=\"logo-icon\"\r\n                        [src]=\"conductedByUserImage ? conductedByUserImage  : '../../../assets/images/profile.jpg'\">\r\n                    <input style=\"float: left; width: 70%\" class=\"inputclass mt-2 ml-2\"\r\n                        placeholder=\"Search Conducted By\" matInput [formControl]=\"myControl\"\r\n                        formControlName=\"conductedBy\" (keyup)=\"searchUser()\" [matAutocomplete]=\"auto\" />\r\n                    <mat-icon matSuffix>search</mat-icon>\r\n                    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"onSelectedUser($event);\">\r\n                        <mat-option *ngFor=\"let option of (filteredOptions | async)\"\r\n                            [(value)]=\"option.fullName\">\r\n                            <img style=\"cursor: pointer; max-width: none\" class=\"logo-icon\"\r\n                                [src]=\"option.profileImageURL ? option.profileImageURL  : '../../../assets/images/profile.jpg' \">\r\n                            {{ option.fullName }}\r\n                        </mat-option>\r\n                    </mat-autocomplete>\r\n                    <mat-error>Please select the Conducted By!</mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field *ngIf=\"isEdit\" class=\"col-md-6\">\r\n                    <input matInput formControlName=\"createdDate\" [matDatepicker]=\"picker3\" placeholder=\"Created Date\"\r\n                        disabled readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker3 [startAt]=\"createdDate\"></mat-datepicker>\r\n                    <mat-error class=\"mb-5\">Created Date is required!</mat-error>\r\n                </mat-form-field>\r\n\r\n                <div class=\"col-md-6\">\r\n                    <img *ngIf=\"isEdit\" style=\"cursor: pointer; max-width: none\" class=\"logo-icon\"\r\n                        [src]=\"createdByUserImage ? createdByUserImage  : '../../../assets/images/profile.jpg' \">\r\n                    <mat-form-field *ngIf=\"isEdit\" style=\"padding-left: 15px;width:calc(100% - 40px);\">\r\n                        <mat-label>Created By</mat-label>\r\n                        <input matInput placeholder=\"Created By\" formControlName=\"createdBy\" required readonly>\r\n                        <mat-error class=\"mb-5\">Created By is required!</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"btn_sec pb-3\" style=\"margin-right: 20px; text-align: right;margin-top:20px;\">\r\n                <button mat-button style=\" background: #DEDEDE; color:grey; border-radius:72px; \"\r\n                    [routerLink]=\"['../']\">Cancel</button>\r\n                <button *ngIf=\"!isEdit\" class=\"saveButton\" mat-button\r\n                    style=\"background: #a92a23; color: #FFF; border-radius:72px; margin-left: 10px\"\r\n                    (click)=\"createparticipant()\">Save</button>\r\n                <button *ngIf=\"isEdit\" class=\"saveButton\" mat-button\r\n                    style=\"background:#a92a23; color: #FFF;border-radius:72px; margin-left: 10px\"\r\n                    (click)=\"updateworkshop()\">Update</button>\r\n            </div>\r\n        </form>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"isEdit\" style=\"margin: 20px; margin-top: 0px; border-radius: 8px; background: #FFFF; \">\r\n        <div style=\"padding-bottom: 10px;\">\r\n\r\n            <h5 class=\"pl-3 pt-3\" style=\"color: #a92a23; font-size: 22px; font-weight: 600;\">Participant List</h5>\r\n\r\n            <button mat-raised-button color=\"default\" class=\"saveButton\" (click)=\"addparticipationPopup()\"\r\n                style=\"background: #3b4f6a; color: #FFF; float: right; margin-top: 15px; margin-bottom: 15px; margin-right: 30px\">\r\n                <span style=\"font-size: 25px;\" class=\"fa fa-plus-circle mr-1\">\r\n                </span>\r\n                Participant </button>\r\n        </div>\r\n\r\n        <div class=\"page-content\"\r\n            style=\"margin-left: 15px; margin-right: 15px; background: #ffffff; border-radius: 8px; padding-bottom: 40px;\">\r\n\r\n            <div style=\"overflow-y: auto;\" class=\"userlist-table w-100 table-responsive\">\r\n\r\n                <table mat-table [dataSource]=\"participantList\" class=\"mat-elevation-z8 w-100\">\r\n\r\n                    <!-- Position Column -->\r\n                    <ng-container matColumnDef=\"position\">\r\n                        <th mat-header-cell *matHeaderCellDef> S.No </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- First Name Column -->\r\n                    <ng-container matColumnDef=\"firstName\">\r\n                        <th mat-header-cell *matHeaderCellDef> First Name </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.firstName}}\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Last Name Column -->\r\n                    <ng-container matColumnDef=\"lastName\">\r\n                        <th mat-header-cell *matHeaderCellDef> Last Name</th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.lastName}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Email Column -->\r\n                    <ng-container matColumnDef=\"email\">\r\n                        <th mat-header-cell *matHeaderCellDef>Email</th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Mobile Column -->\r\n                    <ng-container matColumnDef=\"mobile\">\r\n                        <th mat-header-cell *matHeaderCellDef> Mobile </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.mobile}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Address Column -->\r\n                    <ng-container matColumnDef=\"address\">\r\n                        <th mat-header-cell *matHeaderCellDef> Address </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"actions\">\r\n                        <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n                        <td mat-cell *matCellDef=\"let row\">\r\n\r\n                            <i matTooltip=\"Edit\" class=\"fas fa-edit\"\r\n                                style=\"font-size: 20px; cursor: pointer; padding-left: 9px; padding-right: 9px; color: gray\"\r\n                                (click)=\"editparticipationdetail(row.id)\"></i>\r\n\r\n                            <i matTooltip=\"Delete\" class=\"fas fa-trash-alt\"\r\n                                style=\"font-size: 20px; cursor: pointer; padding-left: 7px; padding-right: 7px; color: #ef4f4f\"\r\n                                (click)=\"deleteParticipant(row.id)\"></i>\r\n\r\n                        </td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                </table>\r\n\r\n                <mat-paginator #paginator [length]=totalRecords [pageSizeOptions]=\"[5, 10, 20]\" [pageSize]=\"10\"\r\n                    (page)=\"nextPage($event)\" [showFirstLastButtons]=\"true\">\r\n                </mat-paginator>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>";

/***/ }),

/***/ 11596:
/*!************************************************************************!*\
  !*** ./src/app/pages/workshop/workshop-list.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div aria-label=\"breadcrumb\" style=\" width: 100%; background-size: cover;  padding-top: 10px;\">\r\n    <ol class=\"breadcrumb\" style=\"background: transparent; margin-left: 15px;\">\r\n        <li class=\"breadcrumb-item\" aria-current=\"page\"><a style=\"color: #a92a23; font-size: 16px;\">Workshop</a></li>\r\n    </ol>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"px-3\">\r\n\r\n                <div class=\"userlist-table w-100\">\r\n                    <mat-form-field class=\"filter-search\">\r\n                        <mat-label>Search</mat-label>\r\n                        <input matInput [(ngModel)]=\"workshopSearchValue\" (keyup)=\"searchWorkshop()\"\r\n                            placeholder=\"Search by workshop name\">\r\n                        <mat-icon aria-hidden=\"false\" aria-label=\"Example add icon\" (click)=\"createWorkshop()\">addss\r\n                        </mat-icon>\r\n                    </mat-form-field>\r\n\r\n                    <div style=\"overflow-y: auto;\" class=\"workshop-list table-responsive\">\r\n\r\n                        <table mat-table [dataSource]=\"workshopList\" matSort class=\"mat-elevation-z8 w-100\">\r\n\r\n                            <!-- Position Column -->\r\n                            <ng-container matColumnDef=\"position\">\r\n                                <th mat-header-cell *matHeaderCellDef (click)=\"sortTable()\">\r\n                                    S.No\r\n                                </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n                            </ng-container>\r\n\r\n                            <!-- Workshop Name Name Column -->\r\n                            <ng-container matColumnDef=\"workshopName\">\r\n                                <th mat-header-cell *matHeaderCellDef (click)=\"sortTable()\">\r\n                                    Workshop\r\n                                    Name </th>\r\n                                <td style=\"color: #17a2b8; cursor: pointer; text-transform: capitalize;\" mat-cell\r\n                                    *matCellDef=\"let element\" (click)=\"editWorkshopDetail(element.workshopId)\">\r\n                                    {{element.workshopName}} </td>\r\n                            </ng-container>\r\n\r\n                            <!-- Workshop Date Column -->\r\n                            <ng-container matColumnDef=\"workshopDate\">\r\n                                <th mat-header-cell *matHeaderCellDef (click)=\"sortTable()\">\r\n                                    Workshop Date </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.workshopDate | date: 'MM/dd/yyyy'}}\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <!-- Due Date Column -->\r\n                            <ng-container matColumnDef=\"dueDate\">\r\n                                <th mat-header-cell *matHeaderCellDef (click)=\"sortTable()\">\r\n                                    Due\r\n                                    Date </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.dueDate | date: 'MM/dd/yyyy'}} </td>\r\n                            </ng-container>\r\n\r\n                            <!-- Created Date Column -->\r\n                            <ng-container matColumnDef=\"createdDate\">\r\n                                <th mat-header-cell *matHeaderCellDef (click)=\"sortTable()\">\r\n                                    Created\r\n                                    Date </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.createdDate | date: 'MM/dd/yyyy'}}\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"conductedBy\">\r\n                                <th mat-header-cell *matHeaderCellDef (click)=\"sortTable()\">\r\n                                    Conducted By </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> <img class=\"work-list-img\"\r\n                                        [src]=\"element.conductedByImage ? element.conductedByImage  : '../../../assets/images/profile.jpg'\"\r\n                                        alt=\"logo\"> {{element.conductedByName}}\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"createdBy\">\r\n                                <th mat-header-cell *matHeaderCellDef>\r\n                                    Created By </th>\r\n                                <td mat-cell *matCellDef=\"let element\"><img class=\"work-list-img\"\r\n                                        [src]=\"element.createdByImage ? element.createdByImage  : '../../../assets/images/profile.jpg'\"\r\n                                        alt=\"logo\"> {{element.createdByName}}\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"actions\">\r\n                                <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n                                <td mat-cell *matCellDef=\"let row\">\r\n\r\n                                    <i matTooltip=\"Edit\" class=\"fas fa-edit edit-icons\"\r\n                                        (click)=\"editWorkshopDetail(row.workshopId)\"></i>\r\n\r\n                                    <i matTooltip=\"Delete\" class=\"fas fa-trash-alt del-icons\"\r\n                                        (click)=\"deleteWorkshop(row.workshopId)\"></i>\r\n\r\n                                </td>\r\n                            </ng-container>\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                        </table>\r\n\r\n                        <mat-paginator #paginator [length]=totalRecords [pageSize]=\"10\" (page)=\"nextPage($event)\"\r\n                            [showFirstLastButtons]=\"true\">\r\n                        </mat-paginator>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_workshop_workshop_module_ts.js.map