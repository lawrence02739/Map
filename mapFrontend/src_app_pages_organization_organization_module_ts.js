(self["webpackChunkmap_frontend"] = self["webpackChunkmap_frontend"] || []).push([["src_app_pages_organization_organization_module_ts"],{

/***/ 98201:
/*!**********************************************************************!*\
  !*** ./src/app/pages/organization/organization-details.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganizationDetailsComponent": () => (/* binding */ OrganizationDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _organization_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organization-details.component.html?ngResource */ 82224);
/* harmony import */ var _organization_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organization-details.component.scss?ngResource */ 42763);
/* harmony import */ var _organization_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_organization_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var src_app_crud_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/crud-http.service */ 6833);









function addressLengthValidator(control) {
  const value = control.value;
  if (value && value.length > 50) {
    return {
      'maxLengthExceeded': true
    };
  }
  return null;
}
let OrganizationDetailsComponent = class OrganizationDetailsComponent {
  constructor(fb, crudHttpService, toastr, router, route, spinner) {
    this.fb = fb;
    this.crudHttpService = crudHttpService;
    this.toastr = toastr;
    this.router = router;
    this.route = route;
    this.spinner = spinner;
    this.states = [{
      value: 'Tamil Nadu-0',
      viewValue: 'Tamil Nadu'
    }, {
      value: 'Uttar Pradesh-1',
      viewValue: 'Uttar Pradesh'
    }, {
      value: 'Gujarat-2',
      viewValue: 'Gujarat'
    }, {
      value: 'Madhya Pradesh-3',
      viewValue: 'Madhya Pradesh'
    }, {
      value: 'Odisha-4',
      viewValue: 'Odisha'
    }, {
      value: 'Bihar-5',
      viewValue: 'Bihar'
    }, {
      value: 'Andhra Pradesh-6',
      viewValue: 'Andhra Pradesh'
    }, {
      value: 'Haryana-7',
      viewValue: 'Haryana'
    }, {
      value: 'Maharashtra-8',
      viewValue: 'Maharashtra'
    }];
    this.countries = [{
      value: 'United States-0',
      viewValue: 'United States'
    }, {
      value: 'Zimbabwe-1',
      viewValue: 'Zimbabwe'
    }, {
      value: 'Oman-2',
      viewValue: 'Oman'
    }, {
      value: 'Yemen-3',
      viewValue: 'Yemen'
    }, {
      value: 'Qatar-4',
      viewValue: 'Qatar'
    }, {
      value: 'Vanuatu-5',
      viewValue: 'Vanuatu'
    }, {
      value: 'United Kingdom-6',
      viewValue: 'United Kingdom'
    }, {
      value: 'Hungary-7',
      viewValue: 'Hungary'
    }, {
      value: 'Finland-8',
      viewValue: 'Finland'
    }];
    this.isEdit = false;
    this.todoList = [];
    this.createUserList = [];
    this.organizationForm = this.fb.group({
      // organizationName: ['', Validators.required],
      organizationName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(15)]],
      // organizationAddress: ['', Validators.required],
      organizationAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, addressLengthValidator]],
      organizationCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      organizationState: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      organizationZip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      organizationCountry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  producedregisteration() {
    if (this.organizationForm.valid) {} else {
      this.alert('warning');
    }
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const dataList = JSON.parse(params['data']);
      this.isEdit = params.isEdit;
      if (params.isEdit === 'true') {
        this.userId = params.userId;
        this.organizationForm.patchValue({
          organizationName: dataList.organizationName,
          organizationAddress: dataList.address,
          organizationCity: dataList.city,
          organizationState: dataList.state,
          organizationZip: dataList.zipCode,
          organizationCountry: dataList.country
        });
      }
    });
    this.listTodos();
  }
  listTodos() {
    this.spinner.show();
    this.crudHttpService.list().subscribe(response => {
      this.todoList = response;
      this.spinner.hide();
      console.log('this.todoList', this.todoList);
    }, error => {
      this.spinner.hide();
    });
  }
  //   createTodo(){
  //     let payload = {
  //       organizationName: this.organizationForm.controls.organizationName.value,
  //       address:this.organizationForm.controls.organizationAddress.value,
  //       city: this.organizationForm.controls.organizationCity.value,
  //       state:this.organizationForm.controls.organizationState.value,
  //       zipCode:this.organizationForm.controls.organizationZip.value,
  //       country:this.organizationForm.controls.organizationCountry.value
  //     }
  //     if(this.isEdit == false){
  //       this.spinner.show();
  //     this.crudHttpService.create(payload).subscribe((response)=>{
  //       this.createUserList = response
  //       this.spinner.hide();
  //       this.listTodos();   
  //       this.router.navigate(['/map/organization']);
  //     },(error=>{
  //       this.spinner.hide();
  //     }));
  //   }else{
  //     this.crudHttpService.update(this.userId, payload).subscribe((result)=>{
  //       if(result){
  //         this.router.navigate(['/map/organization']);
  //       }
  //     })
  //   }
  // }
  createTodo() {
    // this.spinner.show();
    if (this.organizationForm.valid) {
      let payload = {
        organizationName: this.organizationForm.controls.organizationName.value,
        address: this.organizationForm.controls.organizationAddress.value,
        city: this.organizationForm.controls.organizationCity.value,
        state: this.organizationForm.controls.organizationState.value,
        zipCode: this.organizationForm.controls.organizationZip.value,
        country: this.organizationForm.controls.organizationCountry.value
      };
      if (this.isEdit == false) {
        // this.spinner.show();
        this.crudHttpService.create(payload).subscribe(response => {
          this.createUserList = response;
          // this.spinner.hide();
          this.listTodos();
          this.router.navigate(['/map/organization']);
          this.toastr.success('Successfully created a new organization!', 'Success');
        }, error => {
          // this.spinner.hide();
          this.toastr.error('Failed to create organization. Please try again.');
        });
      } else {
        this.crudHttpService.update(this.userId, payload).subscribe(result => {
          if (result) {
            // this.spinner.hide();
            this.router.navigate(['/map/organization']);
            this.toastr.success('Successfully updated organization!');
          } else {
            this.toastr.error('Failed to update organization. Please try again.');
          }
        });
      }
    } else {
      this.toastr.error('Please fill in all required fields.');
    }
  }
  cancel() {
    this.router.navigate(['/map/organization']);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder
  }, {
    type: src_app_crud_http_service__WEBPACK_IMPORTED_MODULE_2__.CrudHttpService
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService
  }];
};
OrganizationDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-organization-details',
  template: _organization_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_organization_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], OrganizationDetailsComponent);


/***/ }),

/***/ 17855:
/*!*******************************************************************!*\
  !*** ./src/app/pages/organization/organization-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganizationListComponent": () => (/* binding */ OrganizationListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _organization_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organization-list.component.html?ngResource */ 97648);
/* harmony import */ var _organization_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organization-list.component.scss?ngResource */ 77150);
/* harmony import */ var _organization_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_organization_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 49272);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 25852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/storage-setting/storage-configuration */ 46352);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var src_app_crud_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/crud-http.service */ 6833);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 94817);














let OrganizationListComponent = class OrganizationListComponent {
  constructor(router, configuration, dataService, storageConfiguration, spinner, crudHttpService, dialog, toastr) {
    this.router = router;
    this.configuration = configuration;
    this.dataService = dataService;
    this.storageConfiguration = storageConfiguration;
    this.spinner = spinner;
    this.crudHttpService = crudHttpService;
    this.dialog = dialog;
    this.toastr = toastr;
    this.userList = [];
    this.createUserList = [];
    this.displayedColumns = ['position', 'organizationName', 'organizationAddress', 'country', 'actions'];
    this.pageSizeOptions = [5, 10, 25, 100];
    this.pageNumber = 1;
    this.todoList = [];
    this.filteredData = [];
    this.noResultsFound = false;
  }
  ngOnInit() {
    this.getOrganizationList();
    this.listTodos();
    this.getUserList();
    this.roleName = this.storageConfiguration.sessionGetItem(this.storageConfiguration.role);
  }
  getOrganizationList() {
    this.crudHttpService.getItems().subscribe(response => {}, error => {});
  }
  listTodos() {
    this.crudHttpService.list().subscribe(response => {
      this.todoList = response;
    }, error => {});
  }
  getUserList() {
    this.spinner.show();
    this.crudHttpService.list().subscribe(res => {
      this.filteredData = res.data;
      this.createUserList = [...this.filteredData].reverse();
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
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
  }
  // async searchUser() {
  //   if (this.userSearchValue != undefined && this.userSearchValue != "") {
  //     await this.crudHttpService.getAll().subscribe((data: any) => {
  //       let createUserList = data.data;
  //       this.totalRecords = data.data.length;
  //       this.pageNumber = 1;
  //       this.paginator.pageIndex = 0;
  //       this.createUserList = this.userListTableData(createUserList)
  //     }, err => {
  //       this.spinner.hide();
  //     });
  //   } else {
  //     this.getUserList()
  //   }
  // }
  filterData() {
    this.createUserList = this.filteredData.filter(item => {
      return item.organizationName.toLowerCase().includes(this.userSearchValue.toLowerCase());
    });
    this.noResultsFound = this.createUserList.length === 0;
  }
  resetFilter() {
    this.userSearchValue = '';
    this.createUserList = [...this.filteredData];
  }
  //   userListTableData(createUserList) {
  //     let createListData = [];
  //     createUserList.forEach((todos,index) =>{
  //       createListData.push({
  //         id: todos._id,
  //         position: (index + 1) + (this.pageNumber - 1) * 10,
  //         organizationName: todos.type,
  //         organizationAddress: todos.organizationAddress,
  //         organizationCity:todos.organizationCity,
  //         organizationState: todos.organizationState,
  //         organizationZip:todos.organizationZip,
  //         organizationCountry:todos.organizationCountry
  //       })
  //     })
  // return createListData
  //   }
  adduser() {
    if (this.roleName === 'super-admin' || this.roleName === 'admin') {
      this.router.navigate(['/map/organization/organization-details'], {
        queryParams: {
          isEdit: false,
          isSuperAdmin: true
        }
      });
    }
  }
  edituserdetail(id) {
    this.crudHttpService.getUserById(id).subscribe(res => {
      this.dataList = res.data;
      const queryParams = {
        userId: id,
        isEdit: true,
        isSuperAdmin: this.roleName === 'super-admin' || this.roleName === 'admin',
        data: JSON.stringify(this.dataList)
      };
      this.router.navigate(['/map/organization/organization-details'], {
        queryParams
      });
    });
  }
  // categoryDelete(categoryId: number) {
  //   if (confirm('Are you sure you want to delete this category?')) {
  //     this.crudHttpService.delete(categoryId).subscribe(
  //       (response) => {
  //         this.getUserList()
  //       },
  //       (error) => {
  //       }
  //     );
  //   }
  // }
  deleteDialog() {
    this.crudHttpService.delete(this.categoryId).subscribe(response => {
      this.getUserList();
      this.dialog.closeAll();
    }, err => {
      if (err === `Something bad happened; please try again later.`) {
        this.toastr.error('The Organization ID has already been associated with a group and, therefore, cannot be deleted');
      }
    });
  }
  categoryDelete(categoryId, content) {
    this.dialog.open(content, {
      width: '25%'
    });
    this.categoryId = categoryId;
  }
  cancelDialog() {
    this.dialog.closeAll();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration
  }, {
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
  }, {
    type: src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_4__.StorageConfiguration
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService
  }, {
    type: src_app_crud_http_service__WEBPACK_IMPORTED_MODULE_5__.CrudHttpService
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService
  }];
  static #_2 = this.propDecorators = {
    sorting: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, {
        static: true
      }]
    }],
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, {
        static: true
      }]
    }]
  };
};
OrganizationListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-organization-list',
  template: _organization_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_organization_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], OrganizationListComponent);


/***/ }),

/***/ 87982:
/*!*******************************************************************!*\
  !*** ./src/app/pages/organization/organization-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganizationRoutingModule": () => (/* binding */ OrganizationRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _organization_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organization-list.component */ 17855);
/* harmony import */ var _organization_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organization-details.component */ 98201);





const routes = [{
  path: '',
  component: _organization_list_component__WEBPACK_IMPORTED_MODULE_0__.OrganizationListComponent
}, {
  path: 'organization-details',
  component: _organization_details_component__WEBPACK_IMPORTED_MODULE_1__.OrganizationDetailsComponent
}];
let OrganizationRoutingModule = class OrganizationRoutingModule {};
OrganizationRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], OrganizationRoutingModule);


/***/ }),

/***/ 24426:
/*!***********************************************************!*\
  !*** ./src/app/pages/organization/organization.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganizationModule": () => (/* binding */ OrganizationModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _organization_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organization-routing.module */ 87982);
/* harmony import */ var _organization_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organization-details.component */ 98201);
/* harmony import */ var _organization_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organization-list.component */ 17855);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 62544);
/* harmony import */ var src_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/material.module */ 90370);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 33351);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 72288);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 65342);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 76246);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 42777);















let OrganizationModule = class OrganizationModule {};
OrganizationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_organization_details_component__WEBPACK_IMPORTED_MODULE_1__.OrganizationDetailsComponent, _organization_list_component__WEBPACK_IMPORTED_MODULE_2__.OrganizationListComponent],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _organization_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrganizationRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, src_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbarModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerModule]
})], OrganizationModule);


/***/ }),

/***/ 42763:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/organization/organization-details.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button {\n  margin-left: 8px;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.breadcrumb-view {\n  width: 100%;\n  background-size: cover;\n  padding: 20px;\n  padding-top: 120px;\n}\n\n.pic-head {\n  font-style: normal;\n  color: #263238;\n  font-size: 22px;\n  font-weight: 600;\n  padding: 20px 0px;\n}\n\n.col-lg-9 .pic-head {\n  padding-left: 12px;\n}\n\n#profile-pic img {\n  background: #fff;\n  width: 74px;\n  height: 74px;\n  cursor: pointer;\n  margin-bottom: 15px;\n}\n\n#profile-pic .col-lg-6 {\n  font-size: 18px;\n  margin-bottom: 30px;\n}\n\n.profile-img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n.img-files:after {\n  content: \"Change Picture\";\n  position: absolute;\n  top: 45%;\n  left: 20%;\n  font-size: 12px;\n  opacity: 0;\n  color: #fff;\n  font-weight: 500;\n}\n\n.profile-picture {\n  width: 150px;\n  margin: 0 auto;\n  position: relative;\n}\n\n.img-files:hover:after,\n.img-files:hover:before {\n  opacity: 1;\n}\n\n.img-files input {\n  position: absolute;\n  top: 4px;\n  z-index: 99999;\n  opacity: 0;\n  height: 50px !important;\n  width: 50px !important;\n  cursor: pointer;\n}\n\n.img-files:before {\n  content: \"\";\n  background: rgba(35, 41, 55, 0.42);\n  width: 150px;\n  height: 150px;\n  position: absolute;\n  top: 0px;\n  border-radius: 50%;\n  opacity: 0;\n  left: 0;\n}\n\n.label-down mat-label {\n  display: block;\n}\n\n.mat-form-field {\n  margin-bottom: 5px;\n}\n\n#divBn {\n  border-left: 1px solid #ebedf0;\n}\n\n.btn_sec button {\n  margin-left: 10px;\n  width: 110px;\n}\n\n@media (max-width: 1440px) {\n  .img-files:before {\n    right: 30%;\n  }\n}\n@media (max-width: 991px) {\n  #divR-no h2,\n  .col-lg-3 .pic-head {\n    padding-left: 12px;\n  }\n  .permission_sec {\n    padding-left: 30px;\n  }\n  .permission_sec .pic-head {\n    padding-left: 0px;\n  }\n}\n.category-info {\n  padding: 20px;\n  border-radius: 8px;\n  background: white;\n  margin: 0px 30px;\n}\n\n.footer {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n\n.savebtn {\n  width: 132px;\n  height: 39px;\n  border-radius: 20px;\n  background-color: #A92A23;\n  color: #ffffff;\n  font-size: 16px;\n}\n\n.cancel {\n  width: 132px;\n  height: 39px;\n  border-radius: 20px;\n  background-color: #DEDEDE;\n  color: #9C9C9C;\n  font-size: 16px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/organization/organization-details.component.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ;;AACE;EACE,aAAA;AAEJ;;AACE;EACE,WAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;AAEJ;;AAqGE;EACE,kBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAlGJ;;AAoGE;EACE,kBAAA;AAjGJ;;AAmGE;EACE,gBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,mBAAA;AAhGJ;;AAkGE;EACE,eAAA;EACA,mBAAA;AA/FJ;;AAiGE;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;AA9FJ;;AAgGE;EACE,yBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,eAAA;EACA,UAAA;EACA,WAAA;EACA,gBAAA;AA7FJ;;AA+FE;EACE,YAAA;EACA,cAAA;EACA,kBAAA;AA5FJ;;AA8FE;;EAEE,UAAA;AA3FJ;;AA6FE;EACE,kBAAA;EACA,QAAA;EACA,cAAA;EACA,UAAA;EACA,uBAAA;EACA,sBAAA;EACA,eAAA;AA1FJ;;AA4FE;EACE,WAAA;EACA,kCAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,QAAA;EACA,kBAAA;EACA,UAAA;EACA,OAAA;AAzFJ;;AA2FE;EACE,cAAA;AAxFJ;;AA0FE;EACE,kBAAA;AAvFJ;;AAyFE;EACE,8BAAA;AAtFJ;;AAwFE;EACE,iBAAA;EACA,YAAA;AArFJ;;AAuFE;EACE;IACE,UAAA;EApFJ;AACF;AAsFE;EACE;;IAEE,kBAAA;EApFJ;EAsFE;IACE,kBAAA;EApFJ;EAsFE;IACE,iBAAA;EApFJ;AACF;AAuFE;EACE,aAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;AArFJ;;AAuFA;EACI,aAAA;EACA,yBAAA;EACA,gBAAA;AApFJ;;AAsFE;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;AAnFJ;;AAqFE;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;AAlFJ","sourcesContent":["button {\r\n    margin-left: 8px;\r\n  }\r\n  button:focus {\r\n    outline: none;\r\n  }\r\n  \r\n  .breadcrumb-view {\r\n    width: 100%;\r\n    background-size: cover;\r\n    padding: 20px;\r\n    padding-top: 120px;\r\n  }\r\n  \r\n  // #P-Content\r\n  // {\r\n  \r\n  //     position: relative;\r\n  //     height: 200px;\r\n  // }\r\n  \r\n  // #divP\r\n  // {\r\n  \r\n  //     position: absolute;\r\n  //     margin-right: 25px;\r\n  //     left: 5px;\r\n  //     top: 5px;\r\n  //     bottom: 5px;\r\n  //     right: 70%;\r\n  // }\r\n  \r\n  // #divB\r\n  // {\r\n  \r\n  //     position: absolute;\r\n  //     right: 5px;\r\n  //     top: 5px;\r\n  //     bottom: 5px;\r\n  //     left: 30%;\r\n  //     margin-left: 25px;\r\n  // }\r\n  // #ContentR\r\n  // {\r\n  \r\n  //     position: relative;\r\n  //     height: 300px;\r\n  // }\r\n  \r\n  // #divR\r\n  // {\r\n  \r\n  //     position: absolute;\r\n  //     margin-right: 25px;\r\n  //     left: 5px;\r\n  //     top: 5px;\r\n  //     bottom: 5px;\r\n  //     right: 70%;\r\n  // }\r\n  \r\n  // #divL\r\n  // {\r\n  \r\n  //     position: absolute;\r\n  //     right: 5px;\r\n  //     top: 5px;\r\n  //     bottom: 5px;\r\n  //     left: 30%;\r\n  //     margin-left: 25px;\r\n  // }\r\n  \r\n  // #profile-pic\r\n  // {\r\n  \r\n  //     position: relative;\r\n  //     height: 150px;\r\n  // }\r\n  \r\n  // #profA\r\n  // {\r\n  \r\n  //     position: absolute;\r\n  //     margin-right: 25px;\r\n  //     left: 5px;\r\n  //     top: 5px;\r\n  //     bottom: 5px;\r\n  //     right: 70%;\r\n  // }\r\n  \r\n  // #profB\r\n  // {\r\n  \r\n  //     position: absolute;\r\n  //     margin-right: 25px;\r\n  //     left: 130px;\r\n  //     top: 5px;\r\n  //     bottom: 5px;\r\n  //     right: 70%;\r\n  // }\r\n  // #profC\r\n  // {\r\n  \r\n  //     position: absolute;\r\n  //     margin-right: 25px;\r\n  //     left: 5px;\r\n  //     top: 5px;\r\n  //     bottom: 5px;\r\n  //     right: 70%;\r\n  // }\r\n  \r\n  // .example-quater-width{\r\n  //     width:300px;\r\n  // }\r\n  \r\n  .pic-head {\r\n    font-style: normal;\r\n    color: #263238;\r\n    font-size: 22px;\r\n    font-weight: 600;\r\n    padding: 20px 0px;\r\n  }\r\n  .col-lg-9 .pic-head {\r\n    padding-left: 12px;\r\n  }\r\n  #profile-pic img {\r\n    background: #fff;\r\n    width: 74px;\r\n    height: 74px;\r\n    cursor: pointer;\r\n    margin-bottom: 15px;\r\n  }\r\n  #profile-pic .col-lg-6 {\r\n    font-size: 18px;\r\n    margin-bottom: 30px;\r\n  }\r\n  .profile-img {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    object-fit: cover;\r\n  }\r\n  .img-files:after {\r\n    content: \"Change Picture\";\r\n    position: absolute;\r\n    top: 45%;\r\n    left: 20%;\r\n    font-size: 12px;\r\n    opacity: 0;\r\n    color: #fff;\r\n    font-weight: 500;\r\n  }\r\n  .profile-picture {\r\n    width: 150px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n  }\r\n  .img-files:hover:after,\r\n  .img-files:hover:before {\r\n    opacity: 1;\r\n  }\r\n  .img-files input {\r\n    position: absolute;\r\n    top: 4px;\r\n    z-index: 99999;\r\n    opacity: 0;\r\n    height: 50px !important;\r\n    width: 50px !important;\r\n    cursor: pointer;\r\n  }\r\n  .img-files:before {\r\n    content: \"\";\r\n    background: rgba(35, 41, 55, 0.42);\r\n    width: 150px;\r\n    height: 150px;\r\n    position: absolute;\r\n    top: 0px;\r\n    border-radius: 50%;\r\n    opacity: 0;\r\n    left: 0;\r\n  }\r\n  .label-down mat-label {\r\n    display: block;\r\n  }\r\n  .mat-form-field {\r\n    margin-bottom: 5px;\r\n  }\r\n  #divBn {\r\n    border-left: 1px solid #ebedf0;\r\n  }\r\n  .btn_sec button {\r\n    margin-left: 10px;\r\n    width: 110px;\r\n  }\r\n  @media (max-width: 1440px) {\r\n    .img-files:before {\r\n      right: 30%;\r\n    }\r\n  }\r\n  @media (max-width: 991px) {\r\n    #divR-no h2,\r\n    .col-lg-3 .pic-head {\r\n      padding-left: 12px;\r\n    }\r\n    .permission_sec {\r\n      padding-left: 30px;\r\n    }\r\n    .permission_sec .pic-head {\r\n      padding-left: 0px;\r\n    }\r\n  }\r\n  \r\n  .category-info {\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    background: white;\r\n    margin: 0px 30px;\r\n}\r\n.footer {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    margin-top: 20px;\r\n  }\r\n  .savebtn{\r\n    width: 132px;\r\n    height: 39px;\r\n    border-radius: 20px;\r\n    background-color: #A92A23;\r\n    color: #ffffff;\r\n    font-size: 16px;\r\n  }\r\n  .cancel{\r\n    width: 132px;\r\n    height: 39px;\r\n    border-radius: 20px;\r\n    background-color: #DEDEDE;\r\n    color: #9C9C9C;\r\n    font-size: 16px;\r\n  }\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 77150:
/*!********************************************************************************!*\
  !*** ./src/app/pages/organization/organization-list.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".export-button div {\n  padding-bottom: 20px;\n  float: right;\n}\n\n.users-list {\n  margin-top: 52px;\n}\n\n.create-button {\n  background: #fcba16;\n  color: #ffffff;\n  border: 2px;\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  float: right;\n}\n\n.breadcrumb-view {\n  width: 100%;\n  background-size: cover;\n  padding: 20px;\n  padding-top: 120px;\n}\n\n.table-view {\n  margin: 20px;\n  height: 100%;\n  padding-top: 10px;\n}\n\n.ant-table-thead > tr > th,\n.ant-table-tbody > tr > td {\n  padding: 10px 10px;\n}\n\n.mat-form-field {\n  font-size: 14px;\n}\n\n.table-header {\n  color: #000;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.user-profile {\n  background: #fff;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  margin-right: 12px;\n}\n\n.mat-form-field {\n  margin-bottom: 0px;\n}\n\n.close-button {\n  float: right;\n  top: -25px;\n  right: -15px;\n  background-color: #BB2222;\n  color: #fff;\n  width: 30px;\n  height: 30px;\n}\n\n.close-icon {\n  transition: 1s ease-in-out;\n}\n\n.button-save {\n  margin: 15px;\n  width: 100px;\n  border-radius: 20px;\n  background-color: rgb(187, 34, 34);\n  color: #fff;\n}\n\n.button-cancel {\n  margin: 15px;\n  border-radius: 20px;\n  width: 100px;\n  background-color: #bac0c9;\n  color: #fff;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/organization/organization-list.component.scss"],"names":[],"mappings":"AAAA;EACI,oBAAA;EACA,YAAA;AACJ;;AAEE;EACE,gBAAA;AACJ;;AAEE;EACE,mBAAA;EACA,cAAA;EACA,WAAA;EACA,sEAAA;EACA,YAAA;AACJ;;AAEE;EACE,WAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;AACJ;;AAEE;EACE,YAAA;EACA,YAAA;EACA,iBAAA;AACJ;;AAEE;;EAEE,kBAAA;AACJ;;AAEE;EACE,eAAA;AACJ;;AAEE;EACE,WAAA;EACA,iBAAA;EACA,eAAA;AACJ;;AAEE;EACE,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;AACJ;;AACE;EACE,kBAAA;AAEJ;;AACE;EACE,YAAA;EACE,UAAA;EACA,YAAA;EACA,yBAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;AAEN;;AACE;EACE,0BAAA;AAEJ;;AACE;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,kCAAA;EACA,WAAA;AAEJ;;AAAE;EACE,YAAA;EACA,mBAAA;EACA,YAAA;EACA,yBAAA;EACA,WAAA;AAGJ","sourcesContent":[".export-button div {\r\n    padding-bottom: 20px;\r\n    float: right;\r\n  }\r\n  \r\n  .users-list {\r\n    margin-top: 52px;\r\n  }\r\n  \r\n  .create-button {\r\n    background: #fcba16;\r\n    color: #ffffff;\r\n    border: 2px;\r\n    font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\r\n    float: right;\r\n  }\r\n  \r\n  .breadcrumb-view {\r\n    width: 100%;\r\n    background-size: cover;\r\n    padding: 20px;\r\n    padding-top: 120px;\r\n  }\r\n  \r\n  .table-view {\r\n    margin: 20px;\r\n    height: 100%;\r\n    padding-top: 10px;\r\n  }\r\n  \r\n  .ant-table-thead > tr > th,\r\n  .ant-table-tbody > tr > td {\r\n    padding: 10px 10px;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .table-header {\r\n    color: #000;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .user-profile {\r\n    background: #fff;\r\n    border-radius: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    cursor: pointer;\r\n    margin-right: 12px;\r\n  }\r\n  .mat-form-field{\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  .close-button{\r\n    float: right;\r\n      top: -25px;\r\n      right: -15px;\r\n      background-color: #BB2222;\r\n      color: #fff;\r\n      width: 30px;\r\n      height: 30px;\r\n  }\r\n\r\n  .close-icon {\r\n    transition: 1s ease-in-out;\r\n  }\r\n\r\n  .button-save {\r\n    margin: 15px;\r\n    width: 100px;\r\n    border-radius: 20px;\r\n    background-color: rgb(187, 34, 34);\r\n    color: #fff;\r\n  }\r\n  .button-cancel {\r\n    margin: 15px;\r\n    border-radius: 20px;\r\n    width: 100px;\r\n    background-color: #bac0c9;\r\n    color: #fff;\r\n   }\r\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 82224:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/organization/organization-details.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"bg-layout\">\r\n\r\n    <div aria-label=\"breadcrumb\" style=\"width: 100%; background-size: cover;  padding-top: 10px;\">\r\n        <ol class=\"breadcrumb\" style=\"background: transparent; margin-left: 15px;\">\r\n            <li class=\"breadcrumb-item\" aria-current=\"page\"><a [routerLink]=\"['/map/organization']\"\r\n                    style=\"color:  #B2B2B3; font-size: 16px;\">Home</a></li>\r\n            <li class=\"breadcrumb-item\" *ngIf=\"!isEdit\" aria-current=\"page\" style=\"color: #a92a23; font-size: 16px\">Organization\r\n            </li>\r\n            <li class=\"breadcrumb-item\" *ngIf=\"isEdit\" aria-current=\"page\" style=\"color: #a92a23; font-size: 16px\">Edit\r\n            </li>\r\n        </ol>\r\n    </div>\r\n</div>\r\n\r\n<form [formGroup]=\"organizationForm\">\r\n<div class=\"page-content category-info\">\r\n   \r\n        <div class=\"breadcrumb\" style=\"background: transparent;\">\r\n            <p class=\"breadcrumb-item\" aria-current=\"page\" style=\"font-weight: 600;\">Add Organizations</p>\r\n        </div>\r\n        <div class=\"row\">\r\n\r\n            <!-- <mat-form-field class=\"col-md-6\">\r\n                <input matInput placeholder=\"Organization Name\" formControlName=\"organizationName\" required>\r\n                <mat-error *ngIf=\"organizationForm.get('organizationName').hasError('required')\" class=\"mb-5\">Organization Name is required!</mat-error>\r\n            </mat-form-field> -->\r\n\r\n            <mat-form-field class=\"col-md-6\">\r\n                <input matInput placeholder=\"Organization Name\" formControlName=\"organizationName\" required>\r\n                <mat-error *ngIf=\"organizationForm.get('organizationName').hasError('required')\" class=\"mb-5\">Organization Name is required!</mat-error>\r\n                <mat-error *ngIf=\"organizationForm.get('organizationName').hasError('maxlength')\" class=\"mb-5\">Maximum length is 15 characters!</mat-error>\r\n              </mat-form-field>              \r\n              \r\n            \r\n            <!-- <mat-form-field class=\"col-md-6\">\r\n                <input matInput  matInput placeholder=\"Organization Address\" formControlName=\"organizationAddress\" required>\r\n                <mat-error *ngIf=\"organizationForm.get('organizationAddress').hasError('required')\" class=\"mb-5\">Organization Address is required!</mat-error>\r\n            </mat-form-field> -->\r\n\r\n\r\n            <mat-form-field class=\"col-md-6\">\r\n                <input matInput placeholder=\"Organization Address\" formControlName=\"organizationAddress\" required>\r\n                <mat-error *ngIf=\"organizationForm.get('organizationAddress').hasError('required')\" class=\"mb-5\">Organization Address is required!</mat-error>\r\n                <mat-error *ngIf=\"organizationForm.get('organizationAddress').hasError('maxLengthExceeded')\" class=\"mb-5\">Maximum length exceeded (50 characters max)!</mat-error>\r\n              </mat-form-field>\r\n              \r\n\r\n            <mat-form-field class=\"col-md-6\">\r\n                <input matInput placeholder=\"Organization City\" formControlName=\"organizationCity\" required>\r\n                <mat-error *ngIf=\"organizationForm.get('organizationCity').hasError('required')\" class=\"mb-5\">Organization City is required!</mat-error>\r\n            </mat-form-field>\r\n\r\n            <!-- <mat-form-field class=\"col-md-6\">\r\n                <input matInput placeholder=\"Organization State\" formControlName=\"organizationState\" required>\r\n                <mat-error *ngIf=\"organizationForm.get('organizationState').hasError('required')\" class=\"mb-5\">Organization State is required!</mat-error>\r\n            </mat-form-field> -->\r\n\r\n\r\n            <mat-form-field class=\"col-md-6\">\r\n                <mat-select placeholder=\"Organization State\" formControlName=\"organizationState\" required>\r\n                  <mat-option *ngFor=\"let item of states\" [value]=\"item.value\">\r\n                    {{item.viewValue}}\r\n                  </mat-option>\r\n                </mat-select>\r\n                <mat-error *ngIf=\"organizationForm.get('organizationState').hasError('required')\" class=\"mb-5\">Organization State is required!</mat-error>\r\n              </mat-form-field>\r\n\r\n\r\n\r\n            <mat-form-field class=\"col-md-6\">\r\n                <input matInput placeholder=\"Organization Zip Code\" formControlName=\"organizationZip\" required>\r\n                <mat-error *ngIf=\"organizationForm.get('organizationZip').hasError('required')\" class=\"mb-5\">Organization Zip Code is required!</mat-error>\r\n            </mat-form-field>\r\n\r\n            <!-- <mat-form-field class=\"col-md-6\">\r\n                <input matInput placeholder=\"Organization Country\" formControlName=\"organizationCountry\" required>\r\n                <mat-error *ngIf=\"organizationForm.get('organizationCountry').hasError('required')\" class=\"mb-5\">Organization Country is required!</mat-error>\r\n            </mat-form-field> -->\r\n\r\n\r\n            <mat-form-field class=\"col-md-6\">\r\n                <mat-select placeholder=\"Organization Country\" formControlName=\"organizationCountry\" required>\r\n                  <mat-option *ngFor=\"let list of countries\" [value]=\"list.value\">\r\n                    {{list.viewValue}}\r\n                  </mat-option>\r\n                </mat-select>\r\n                <mat-error *ngIf=\"organizationForm.get('organizationState').hasError('required')\" class=\"mb-5\">Organization State is required!</mat-error>\r\n              </mat-form-field>\r\n            \r\n    </div>\r\n    <!-- <div class=\"footer\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"organizationForm.invalid\" (click)=\"createTodo()\">Submit</button>\r\n    </div> -->\r\n\r\n    <div class=\"footer\">\r\n        <button mat-raised-button class=\"savebtn\" (click)=\"createTodo()\">Save</button> &nbsp;&nbsp; \r\n        <button mat-raised-button class=\"cancel\" (click)=\"cancel()\">Cancel</button>\r\n    </div>\r\n    \r\n</div>\r\n\r\n</form>\r\n\r\n";

/***/ }),

/***/ 97648:
/*!********************************************************************************!*\
  !*** ./src/app/pages/organization/organization-list.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div aria-label=\"breadcrumb\" style=\" width: 100%; background-size: cover;  padding-top: 10px;\">\r\n    <ol class=\"breadcrumb\" style=\"background: transparent; margin-left: 15px;\">\r\n            <li class=\"breadcrumb-item\" aria-current=\"page\"><a style=\"color: #a92a23; font-size: 16px;\">Organization</a>\r\n            </li>\r\n    </ol>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                    <div style=\"padding: 0px 15px;\">\r\n                            <div class=\"userlist-table w-100\">\r\n                                    <mat-form-field class=\"filter-search\">\r\n                                            <mat-label>Search</mat-label>\r\n                                            <input matInput [(ngModel)]=\"userSearchValue\" (keyup)=\"filterData()\"\r\n                                                    placeholder=\"Search by name\">\r\n                                               \r\n                                            <mat-icon *ngIf=\"roleName != 'staff'\" aria-hidden=\"false\"\r\n                                                    aria-label=\"Example add icon\" (click)=\"adduser()\">add\r\n                                            </mat-icon>\r\n\r\n                                    </mat-form-field>\r\n                                    <div style=\"overflow-y: auto;\" class=\"table-responsive\">\r\n                                            <table mat-table [dataSource]=\"createUserList\" matSort\r\n                                                    class=\"mat-elevation-z8 w-100\">\r\n\r\n\r\n                                                    <ng-container matColumnDef=\"position\">\r\n                                                            <th mat-header-cell *matHeaderCellDef> S.No </th>   \r\n                                                            <td mat-cell *matCellDef=\"let todos; let i = index;\">{{i+1}} \r\n                                                                   \r\n                                                            </td>\r\n                                                    </ng-container>\r\n\r\n\r\n                                                    <ng-container matColumnDef=\"organizationName\">\r\n                                                            <th mat-header-cell *matHeaderCellDef mat-sort-header\r\n                                                                    mat-sort-header=\"organizationName\"\r\n                                                                   >Organization Name</th>\r\n                                                            <td style=\"text-transform: capitalize;\"\r\n                                                                    mat-cell *matCellDef=\"let todos\">{{todos?.organizationName | titlecase}}\r\n                                                             \r\n                                                            </td>\r\n                                                    </ng-container>\r\n\r\n\r\n                                                    <ng-container matColumnDef=\"organizationAddress\">\r\n                                                            <th mat-header-cell *matHeaderCellDef mat-sort-header\r\n                                                                    mat-sort-header=\"organizationAddress\"\r\n                                                                   >Organization Address</th>\r\n                                                            <td style=\"text-transform: capitalize;\" mat-cell *matCellDef=\"let todos\"\r\n                                                                    >{{todos?.address}}\r\n                                                                    \r\n                                                            </td>\r\n                                                    </ng-container>\r\n\r\n\r\n                                                    <ng-container matColumnDef=\"country\">\r\n                                                            <th mat-header-cell *matHeaderCellDef mat-sort-header\r\n                                                                    mat-sort-header=\"country\"\r\n                                                                    >Country</th>\r\n                                                            <td style=\"text-transform: capitalize;\" mat-cell mat-cell *matCellDef=\"let todos\"\r\n                                                                   > {{todos?.country}}\r\n                                                            </td>\r\n                                                    </ng-container>\r\n\r\n                                                    <ng-container matColumnDef=\"actions\">\r\n                                                            <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n                                                            <td mat-cell *matCellDef=\"let row\">\r\n                                                                    <i matTooltip=\"Edit\" class=\"fas fa-edit\"\r\n                                                                            style=\"font-size: 20px; cursor: pointer; padding-left: 9px; padding-right: 9px; color: gray\"\r\n                                                                            (click)=\"edituserdetail(row?._id)\"></i>\r\n\r\n                                                                            <i matTooltip=\"Delete\" class=\"fas fa-trash-alt\"\r\n                                                                            style=\"font-size: 20px; cursor: pointer; padding-left: 7px; padding-right: 7px; color: #797A7C\"\r\n                                                                            (click)=\"categoryDelete(row._id, delete)\"></i>\r\n                                                                            \r\n                                                            </td>\r\n                                                    </ng-container>\r\n\r\n                                                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                                                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                                                    </tr>\r\n                                            </table>\r\n                                            <div *ngIf=\"!createUserList.length\" class=\"text-center py-5\">No results found</div>\r\n                                    </div>\r\n                                    <!-- <mat-paginator #paginator [length]=totalRecords [pageSize]=\"10\"\r\n                                            (page)=\"nextPage($event)\" [showFirstLastButtons]=\"true\">\r\n                                    </mat-paginator> -->\r\n                            </div>\r\n                    </div>\r\n            </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<ng-template #delete class=\"mat-dialog-container\">\r\n        <div class=\"example-container\">\r\n          <h5 mat-dialog-title class=\"p-2 px-3\" style=\"background-color: #3b4f6a; color: #fff;\"> Alert \r\n            <!-- <button mat-icon-button\r\n              class=\"close-button\" [mat-dialog-close]=\"true\">\r\n              <mat-icon class=\"close-icon mb-2\" (click)=\"cancel()\">close </mat-icon>\r\n            </button> -->\r\n          </h5>\r\n          <mat-dialog-content class=\"mx-3 my-2 text-center\">\r\n            <p>Are you sure, want to Delete ?</p>\r\n          </mat-dialog-content>\r\n          <mat-dialog-actions class=\"px-2 mb-2 text-center\">\r\n            <button mat-button class=\"button-save\" (click)=\"cancel()\" (click)=\"deleteDialog()\">Yes</button>\r\n            <button mat-button class=\"button-cancel\" mat-dialog-close (click)=\"cancelDialog()\">Cancel</button>\r\n          </mat-dialog-actions>\r\n        </div>\r\n      </ng-template>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_organization_organization_module_ts.js.map