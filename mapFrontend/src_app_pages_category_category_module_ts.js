(self["webpackChunkmap_frontend"] = self["webpackChunkmap_frontend"] || []).push([["src_app_pages_category_category_module_ts"],{

/***/ 72437:
/*!**************************************************************!*\
  !*** ./src/app/pages/category/category-details.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryDetailsComponent": () => (/* binding */ CategoryDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _category_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-details.component.html?ngResource */ 92978);
/* harmony import */ var _category_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-details.component.scss?ngResource */ 32553);
/* harmony import */ var _category_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_category_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-color-picker */ 83439);
/* harmony import */ var src_app_shared_synonyms_add_synonyms_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/synonyms-add/synonyms-add.component */ 10907);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/storage-setting/storage-configuration */ 46352);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 22887);















let CategoryDetailsComponent = class CategoryDetailsComponent {
  constructor(fb, storageConfiguration, cpService, configuration, spinner, dataService, toastr, router, route, _matDialog, dialog) {
    this.fb = fb;
    this.storageConfiguration = storageConfiguration;
    this.cpService = cpService;
    this.configuration = configuration;
    this.spinner = spinner;
    this.dataService = dataService;
    this.toastr = toastr;
    this.router = router;
    this.route = route;
    this._matDialog = _matDialog;
    this.dialog = dialog;
    this.colorPickerHexValue = '#ffffff';
    this.isCreated = false;
    this.defaultImg = 'assets/images/profile.jpg';
    this.isEdit = false;
    this.createdDate = '';
    this.selectedType = 'Global';
    this.synonymsIndividualList = [];
    this.synonymsGlobalList = [];
    this.alphabetsGlobalCount = [{
      letter: 'A',
      count: 0
    }, {
      letter: 'B',
      count: 0
    }, {
      letter: 'C',
      count: 0
    }, {
      letter: 'D',
      count: 0
    }, {
      letter: 'E',
      count: 0
    }, {
      letter: 'F',
      count: 0
    }, {
      letter: 'G',
      count: 0
    }, {
      letter: 'H',
      count: 0
    }, {
      letter: 'I',
      count: 0
    }, {
      letter: 'J',
      count: 0
    }, {
      letter: 'K',
      count: 0
    }, {
      letter: 'L',
      count: 0
    }, {
      letter: 'M',
      count: 0
    }, {
      letter: 'N',
      count: 0
    }, {
      letter: 'O',
      count: 0
    }, {
      letter: 'P',
      count: 0
    }, {
      letter: 'Q',
      count: 0
    }, {
      letter: 'R',
      count: 0
    }, {
      letter: 'S',
      count: 0
    }, {
      letter: 'T',
      count: 0
    }, {
      letter: 'U',
      count: 0
    }, {
      letter: 'V',
      count: 0
    }, {
      letter: 'W',
      count: 0
    }, {
      letter: 'X',
      count: 0
    }, {
      letter: 'Y',
      count: 0
    }, {
      letter: 'Z',
      count: 0
    }];
    this.alphabetsIndividualCount = [{
      letter: 'A',
      count: 0
    }, {
      letter: 'B',
      count: 0
    }, {
      letter: 'C',
      count: 0
    }, {
      letter: 'D',
      count: 0
    }, {
      letter: 'E',
      count: 0
    }, {
      letter: 'F',
      count: 0
    }, {
      letter: 'G',
      count: 0
    }, {
      letter: 'H',
      count: 0
    }, {
      letter: 'I',
      count: 0
    }, {
      letter: 'J',
      count: 0
    }, {
      letter: 'K',
      count: 0
    }, {
      letter: 'L',
      count: 0
    }, {
      letter: 'M',
      count: 0
    }, {
      letter: 'N',
      count: 0
    }, {
      letter: 'O',
      count: 0
    }, {
      letter: 'P',
      count: 0
    }, {
      letter: 'Q',
      count: 0
    }, {
      letter: 'R',
      count: 0
    }, {
      letter: 'S',
      count: 0
    }, {
      letter: 'T',
      count: 0
    }, {
      letter: 'U',
      count: 0
    }, {
      letter: 'V',
      count: 0
    }, {
      letter: 'W',
      count: 0
    }, {
      letter: 'X',
      count: 0
    }, {
      letter: 'Y',
      count: 0
    }, {
      letter: 'Z',
      count: 0
    }];
    this.isIndividualCreated = false;
    this.synonymsGlobalListView = [];
    this.synonymsIndividualListView = [];
    this.edit = false;
    this.globalSelectedIndex = 0;
    this.individualSelectedIndex = 0;
    this.isToggleListView = true;
    this.categoryForm = this.fb.group({
      categoryName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      // numberofsynonyms: ['', Validators.required],
      createdDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      abbreviation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      createdBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      colorPicker: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      isActive: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
    });
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.isEdit = JSON.parse(params.isEdit) == true ? true : false;
      this.role = this.storageConfiguration.sessionGetItem(this.storageConfiguration.name);
      if (this.role == "staff") {
        this.isStaff = false;
      } else {
        this.isStaff = true;
      }
      this.categoryId = params.categoryId;
      if (!this.isEdit) {
        this.setDefaults();
      } else {
        this.profileImg = this.defaultImg;
        this.isCreated = true;
        this.editCategory();
      }
    });
    // this.isGlobalSynonymEdit = JSON.parse(this.storageConfiguration.sessionGetItem(this.storageConfiguration.isGlobalSynonymEdit));
  }

  setDefaults() {
    let currentUserName = this.storageConfiguration.sessionGetItem(this.storageConfiguration.userName);
    this.createdBy = this.storageConfiguration.sessionGetItem(this.storageConfiguration.id);
    this.profileImg = this.storageConfiguration.sessionGetItem(this.storageConfiguration.profileImg);
    this.profileImg = this.profileImg == 'undefined' ? this.defaultImg : this.profileImg;
    this.categoryForm.controls['createdDate'].setValue(new Date());
    this.categoryForm.controls['createdBy'].setValue(currentUserName);
    this.categoryForm.controls['isActive'].setValue(true);
  }
  tabChanged(tabChangeEvent) {
    if (tabChangeEvent.index == 0) {
      this.selectedType = 'Global';
    } else {
      this.selectedType = 'Your';
      this.getIndividualSynonyms();
      this.selectedIndividualAlphabet(0);
    }
  }
  editCategory() {
    this.getCurrentUserDetails();
    this.spinner.show();
    this.createdDate = '';
    this.dataService.getSingleUser(this.categoryId, this.configuration.category + '/').subscribe(data => {
      let documentInfo = data.data;
      this.createdDate = documentInfo.createdDate;
      this.categoryForm.patchValue({
        categoryName: documentInfo.type,
        colorPicker: documentInfo.color,
        abbreviation: documentInfo.abbreviation,
        isActive: documentInfo.isActive,
        createdDate: documentInfo.createdDate,
        createdBy: documentInfo.createdBy.fullName
      });
      this.profileImg = documentInfo.createdBy.profileImageURL == undefined ? this.defaultImg : documentInfo.createdBy.profileImageURL;
      this.createdBy = documentInfo.createdBy._id;
      this.colorPickerHexValue = documentInfo.color;
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
    this.getGlobalSynonyms();
    this.getIndividualSynonyms();
  }
  getGlobalSynonyms() {
    this.spinner.show();
    this.dataService.getSingleUser(this.categoryId, this.configuration.synonyms + '/category/').subscribe(data => {
      this.spinner.hide();
      this.synonymsGlobalId = data.data._id;
      this.synonymsGlobalList = data.data.synonyms.sort((a, b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });
      this.selectedGlobalAlphabet(0);
      this.globalSelectedIndex = 0;
      this.updateCountStartsWith();
    }, err => {
      // this.toastr.error('Cannot get Synonyms!');
      this.spinner.hide();
    });
  }
  getIndividualSynonyms() {
    this.spinner.show();
    let currentUserId = this.storageConfiguration.sessionGetItem(this.storageConfiguration.id);
    this.dataService.getAll(this.configuration.synonyms + '/category/' + this.categoryId + '?userId=' + currentUserId).subscribe(data => {
      this.synonymsIndividualId = data.data._id;
      this.synonymsIndividualList = data.data.synonyms.sort((a, b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });
      this.isIndividualCreated = true;
      this.updateCountStartsWith();
      this.selectedIndividualAlphabet(0);
      this.individualSelectedIndex = 0;
      this.spinner.hide();
    }, err => {
      if (err.error.message == "Not Found!!") {
        this.isIndividualCreated = false;
      }
      // this.toastr.error('Cannot get Synonyms!');
      this.spinner.hide();
    });
  }
  updateCategory() {
    this.spinner.show();
    if (this.categoryForm.valid) {
      let categoryForm = this.categoryForm.value;
      let categoryModel = {
        type: categoryForm.categoryName,
        color: categoryForm.colorPicker,
        abbreviation: categoryForm.abbreviation,
        isActive: categoryForm.isActive,
        createdDate: this.createdDate
      };
      this.dataService.updateUser(this.categoryId, this.configuration.category + '/', categoryModel).subscribe(data => {
        this.spinner.hide();
        this.createdDate = '';
        this.toastr.success('Updated Successfully.');
        // this.router.navigate(['/map/users']);
      }, err => {
        this.toastr.error(err.error.message);
        this.spinner.hide();
      });
    } else {
      for (const i in this.categoryForm.controls) {
        this.categoryForm.controls[i].markAsDirty();
        this.categoryForm.controls[i].updateValueAndValidity();
      }
      this.spinner.hide();
      this.toastr.error('Please enter the required fields.');
    }
  }
  onColorPickerChange(event, data) {
    if (event != 'colorPickerOpen' && event != 'colorPickerClose') {
      this.categoryForm.controls['colorPicker'].setValue(data.color);
    } else {
      this.categoryForm.controls['colorPicker'].setValue(data);
    }
  }
  synonymsPopup() {
    let sendData = {
      type: this.selectedType,
      synonymsGlobalId: this.synonymsGlobalId,
      synonymsIndividualId: this.synonymsIndividualId,
      isIndividualCreated: this.isIndividualCreated,
      synonymsIndividualList: this.synonymsIndividualList,
      synonymsGlobalList: this.synonymsGlobalList,
      isEdit: this.edit,
      editSynonym: this.editSynonym
    };
    this.Addpopup = this.dialog.open(src_app_shared_synonyms_add_synonyms_add_component__WEBPACK_IMPORTED_MODULE_3__.SynonymsAddComponent, {
      width: '800px',
      panelClass: 'synonym-add',
      data: sendData,
      disableClose: true
    });
    this.Addpopup.afterClosed().subscribe(result => {
      if (this.selectedType == 'Global') {
        this.getGlobalSynonyms();
      } else if (result.isIndividualCreated == true) {
        this.getIndividualSynonyms();
      }
      if (this.edit) {
        this.edit = false;
        this.editSynonym = '';
      }
    });
  }
  confirmCreateDialog() {
    let message = {
      message: 'Do you want to create this Six Essentials?'
    };
    this.confirmDialogRef = this._matDialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialogComponent, {
      panelClass: 'confirm',
      data: message
    });
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.createCategory();
      }
    });
  }
  createCategory() {
    this.spinner.show();
    if (this.categoryForm.valid) {
      let categoryForm = this.categoryForm.value;
      let categoryModel = {
        type: categoryForm.categoryName,
        color: categoryForm.colorPicker,
        abbreviation: categoryForm.abbreviation,
        createdBy: this.createdBy
      };
      this.dataService.addUser(this.configuration.category, categoryModel).subscribe(data => {
        if (data.message == 'Category Created Successfully!!') {
          this.toastr.success('Created Successfully.');
          this.router.navigate(['/map/category/category-details'], {
            queryParams: {
              categoryId: data.data._id,
              isEdit: true
            }
          });
          this.isEdit = true;
          this.createGlobalSynonyms(data);
          this.getCurrentUserDetails();
          this.spinner.hide();
        }
      }, err => {
        this.spinner.hide();
        if (err.error.data.errmsg == 'Category Name Already Exists') {
          this.toastr.error('Name Already Exists.');
        }
      });
    } else {
      this.toastr.error('Please enter the required fields');
      this.spinner.hide();
    }
  }
  createGlobalSynonyms(data) {
    this.spinner.show();
    this.isCreated = true;
    let synonymModel = {};
    synonymModel.synonyms = [];
    synonymModel.category = data.data._id;
    this.dataService.addUser(this.configuration.synonyms, synonymModel).subscribe(data => {
      if (data.message == 'Terminology Created Successfully!!') {
        // this.toastr.success('Synonyms Global created Successfully.');
        this.spinner.hide();
        this.synonymsGlobalId = data.data._id;
      }
    }, err => {
      this.spinner.hide();
      this.toastr.error('Global Terminology not created!');
    });
  }
  createCancelCategory() {
    this.router.navigate(['map/category']);
  }
  Closepopup() {
    this.Addpopup.close();
  }
  searchByPatientAlphabet(alphabet) {
    this.searchPatientAlphabetText = alphabet;
  }
  selectedGlobalAlphabet(event) {
    if (event != -1) {
      this.synonymsGlobalListView = this.filter(this.synonymsGlobalList, this.alphabetsGlobalCount[event].letter);
    }
  }
  selectedIndividualAlphabet(event) {
    if (event != -1) {
      this.synonymsIndividualListView = this.filter(this.synonymsIndividualList, this.alphabetsIndividualCount[event].letter);
    }
  }
  filter(names, letter) {
    let filteredNames = names.filter(word => {
      let upperCaseWord = word.toUpperCase();
      return upperCaseWord.charAt(0) === letter;
    });
    return filteredNames;
  }
  updateCountStartsWith() {
    this.alphabetsGlobalCount.forEach(element => {
      let letter = element.letter;
      let filter = this.filter(this.synonymsGlobalList, letter);
      element.count = filter.length;
    });
    this.alphabetsIndividualCount.forEach(element => {
      let letter = element.letter;
      let filter = this.filter(this.synonymsIndividualList, letter);
      element.count = filter.length;
    });
  }
  deleteGlobalItem(synonyms) {
    let message = {
      message: 'Do you want to delete this Global Terminology?'
    };
    this.confirmDialogRef = this._matDialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialogComponent, {
      panelClass: 'confirm',
      data: message
    });
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.spinner.show();
        let findIndex = this.synonymsGlobalList.indexOf(synonyms);
        if (findIndex > -1) {
          this.synonymsGlobalList.splice(findIndex, 1);
          let synonymModel = {};
          synonymModel.synonyms = this.synonymsGlobalList;
          this.dataService.updateSwitch(this.synonymsGlobalId, this.configuration.synonyms + '/', synonymModel).subscribe(data => {
            if (data.message == 'Updated Successfully!!') {
              this.toastr.success('Global Terminology updated Successfully.');
              this.getGlobalSynonyms();
              this.spinner.hide();
            }
          }, err => {
            this.spinner.hide();
            this.toastr.error('Global Terminology not updated!');
          });
        }
      }
    });
  }
  deleteIndividualItem(synonyms) {
    let message = {
      message: 'Do you want to delete this Your Terminology?'
    };
    this.confirmDialogRef = this._matDialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialogComponent, {
      panelClass: 'confirm',
      data: message
    });
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.spinner.show();
        let findIndex = this.synonymsIndividualList.indexOf(synonyms);
        if (findIndex > -1) {
          this.synonymsIndividualList.splice(findIndex, 1);
          let synonymModel = {};
          synonymModel.synonyms = this.synonymsIndividualList;
          this.dataService.updateSwitch(this.synonymsIndividualId, this.configuration.synonyms + '/', synonymModel).subscribe(data => {
            if (data.message == 'Updated Successfully!!') {
              this.toastr.success('Your Terminology updated Successfully.');
              this.getIndividualSynonyms();
              this.spinner.hide();
            }
          }, err => {
            this.spinner.hide();
            this.toastr.error('Your Terminology not updated!');
          });
        }
      }
    });
  }
  editItem(synonyms) {
    this.editSynonym = synonyms;
    this.edit = true;
    this.synonymsPopup();
  }
  categoryDelete() {
    let message = {
      message: 'Do you want to delete this Six Essentials?'
    };
    this.confirmDialogRef = this._matDialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialogComponent, {
      panelClass: 'confirm',
      disableClose: false,
      data: message
    });
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.delete(this.categoryId, this.configuration.category + '/').subscribe(data => {
          this.toastr.error('Deleted successfully.');
          this.router.navigate(['/map/category']);
        });
      }
    });
  }
  getCurrentUserDetails() {
    this.dataService.getSingleUser(this.storageConfiguration.sessionGetItem(this.storageConfiguration.id), this.configuration.user + '/').subscribe(data => {
      let personalInfo = data.data;
      this.isGlobalSynonymEdit = personalInfo.isGlobalSynonymEdit;
    }, err => {});
  }
  toggleView() {
    this.isToggleListView = !this.isToggleListView;
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder
  }, {
    type: src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_6__.StorageConfiguration
  }, {
    type: ngx_color_picker__WEBPACK_IMPORTED_MODULE_2__.ColorPickerService
  }, {
    type: src_app_app_configuration__WEBPACK_IMPORTED_MODULE_5__.Configuration
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService
  }, {
    type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService
  }, {
    type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog
  }, {
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog
  }];
};
CategoryDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-category-details',
  template: _category_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewEncapsulation.None,
  styles: [(_category_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CategoryDetailsComponent);


/***/ }),

/***/ 1071:
/*!***********************************************************!*\
  !*** ./src/app/pages/category/category-list.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryListComponent": () => (/* binding */ CategoryListComponent)
/* harmony export */ });
/* harmony import */ var D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _category_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-list.component.html?ngResource */ 11373);
/* harmony import */ var _category_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-list.component.scss?ngResource */ 85323);
/* harmony import */ var _category_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_category_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 25852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_app_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.configuration */ 5898);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/data-service */ 55122);
/* harmony import */ var src_app_shared_storage_setting_storage_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/storage-setting/storage-configuration */ 46352);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 86991);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 49272);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 42777);
/* harmony import */ var src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/confirm-dialog/confirm-dialog.component */ 22887);















let CategoryListComponent = class CategoryListComponent {
  constructor(router, configuration, dataService, storageConfiguration, toastr, _matDialog, spinner) {
    this.router = router;
    this.configuration = configuration;
    this.dataService = dataService;
    this.storageConfiguration = storageConfiguration;
    this.toastr = toastr;
    this._matDialog = _matDialog;
    this.spinner = spinner;
    this.displayedColumns = ['position', 'categoryName', 'color', 'codingAbbreviation', 'createdBy', 'createdDate'];
    this.categoryList = [];
    this.pageNumber = 1;
    this.defaultImg = 'assets/images/profile.jpg';
    this.isEdit = false;
    this.isGlobalSynonymEdit = false;
  }
  ngOnInit() {
    this.isGlobalSynonymEdit = JSON.parse(this.storageConfiguration.sessionGetItem(this.storageConfiguration.isGlobalSynonymEdit));
    this.role = this.storageConfiguration.sessionGetItem(this.storageConfiguration.name);
    if (this.role != 'staff') {
      this.displayedColumns.push('actions');
    }
    this.getCategoryList();
  }
  getCategoryList() {
    this.spinner.show();
    this.dataService.getAll(this.configuration.category + '?sortBy=sortOrder&orderBy=asc').subscribe(data => {
      let categoryList = data.data;
      this.totalRecords = data.totalRecords;
      this.categoryList = this.categoryListTableData(categoryList);
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
  }
  nextPage(event) {
    this.spinner.show();
    this.pageNumber = event.pageIndex + 1;
    this.dataService.getAll(this.configuration.category + '?pageNumber=' + this.pageNumber + '&sortBy=createdDate&orderBy=desc').subscribe(data => {
      let categoryList = data.data;
      this.totalRecords = data.totalRecords;
      this.categoryList = this.categoryListTableData(categoryList);
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
  }
  sortTable() {
    this.spinner.show();
    this.dataService.getAll(this.configuration.category + '?sortBy=' + this.sorting.active + '&orderBy=' + this.sorting.direction).subscribe(data => {
      let categoryList = data.data;
      this.categoryList = this.categoryListTableData(categoryList);
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
  }
  searchcategory() {
    var _this = this;
    return (0,D_Map_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.categorySearchValue != undefined && _this.categorySearchValue != "") {
        yield _this.dataService.getAll(_this.configuration.category + '?type=' + _this.categorySearchValue + '&sortBy=createdDate&orderBy=desc').subscribe(data => {
          let categoryList = data.data;
          _this.totalRecords = data.data.length;
          _this.pageNumber = 1;
          _this.paginator.pageIndex = 0;
          _this.categoryList = _this.categoryListTableData(categoryList);
        }, err => {
          _this.spinner.hide();
        });
      } else {
        _this.getCategoryList();
      }
    })();
  }
  categoryListTableData(categoryList) {
    let categoryListData = [];
    categoryList.forEach((element, index) => {
      categoryListData.push({
        id: element._id,
        position: index + 1 + (this.pageNumber - 1) * 10,
        categoryName: element.type,
        color: element.color,
        createdBy: element.createdBy,
        codingAbbreviation: element.abbreviation ? element.abbreviation : '',
        createdDate: element.createdDate,
        isActive: element.isActive,
        isDeleted: element.isDeleted
      });
    });
    return categoryListData;
  }
  categoryStatusToggle(event, categoryId) {
    let categoryStatus = event.checked == true ? 'Activate' : 'Deactivate';
    let message = {
      message: 'Do you want to ' + categoryStatus + ' this Six Essentials?'
    };
    this.confirmDialogRef = this._matDialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialogComponent, {
      panelClass: 'confirm',
      data: message
    });
    this.confirmDialogRef.afterClosed().subscribe(result => {
      let editElement = this.categoryList.findIndex(element => element.id == categoryId);
      if (result == true) {
        this.categoryList[editElement].isActive = event.checked;
        this.categoryActivateDeactivate(event, categoryId);
      } else {
        this.categoryList = JSON.parse(JSON.stringify(this.categoryList));
      }
    });
  }
  categoryActivateDeactivate(event, categoryId) {
    if (event.checked === false) {
      let updateModel = {
        isActive: false
      };
      this.dataService.updateSwitch(categoryId, this.configuration.category + '/', updateModel).subscribe(data => {
        this.toastr.error('De-activated successfully.');
      });
    } else {
      let updateModel = {
        isActive: true
      };
      this.dataService.updateSwitch(categoryId, this.configuration.category + '/', updateModel).subscribe(data => {
        this.toastr.success('Activated successfully.');
      });
    }
  }
  categoryDelete(categoryId) {
    let message = {
      message: 'Do you want to delete this Six Essentials?'
    };
    this.confirmDialogRef = this._matDialog.open(src_app_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialogComponent, {
      panelClass: 'confirm',
      disableClose: false,
      data: message
    });
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.delete(categoryId, this.configuration.category + '/').subscribe(data => {
          this.toastr.error('Deleted successfully.');
          this.getCategoryList();
        });
      }
    });
  }
  edituserdetail(id) {
    this.router.navigate(['/map/category/category-details'], {
      queryParams: {
        categoryId: id,
        isEdit: true
      }
    });
  }
  addcategory() {
    this.router.navigate(['/map/category/category-details'], {
      queryParams: {
        isEdit: false
      }
    });
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
    type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService
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
CategoryListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-category',
  template: _category_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_category_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CategoryListComponent);


/***/ }),

/***/ 38712:
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryModule": () => (/* binding */ CategoryModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ 59129);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.routing.module */ 91802);
/* harmony import */ var _category_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-list.component */ 1071);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color-picker */ 83439);
/* harmony import */ var _category_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category-details.component */ 72437);










let CategoryModule = class CategoryModule {};
CategoryModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [src_app_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _category_routing_module__WEBPACK_IMPORTED_MODULE_1__.CategoryRoutingModule, ngx_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPickerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule],
  declarations: [_category_list_component__WEBPACK_IMPORTED_MODULE_2__.CategoryListComponent, _category_details_component__WEBPACK_IMPORTED_MODULE_4__.CategoryDetailsComponent],
  providers: []
})], CategoryModule);


/***/ }),

/***/ 91802:
/*!***********************************************************!*\
  !*** ./src/app/pages/category/category.routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryRoutingModule": () => (/* binding */ CategoryRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _category_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-list.component */ 1071);
/* harmony import */ var _category_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-details.component */ 72437);





const routes = [{
  path: '',
  component: _category_list_component__WEBPACK_IMPORTED_MODULE_0__.CategoryListComponent
}, {
  path: 'category-details',
  component: _category_details_component__WEBPACK_IMPORTED_MODULE_1__.CategoryDetailsComponent
}];
let CategoryRoutingModule = class CategoryRoutingModule {};
CategoryRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], CategoryRoutingModule);


/***/ }),

/***/ 32553:
/*!***************************************************************************!*\
  !*** ./src/app/pages/category/category-details.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button {\n  margin-left: 8px;\n}\n\n.breadcrumb-view {\n  width: 100%;\n  background-size: cover;\n  padding: 20px;\n  padding-top: 120px;\n}\n\n.synonymsbutton {\n  position: relative;\n  left: -5px;\n  top: 6px;\n  background-color: #1f3251;\n  border-radius: 70;\n  border-radius: 70px;\n}\n\n.synonymouspopupaddbutton {\n  position: relative;\n  left: -30px;\n  top: 6px;\n  background-color: #3b4f6b;\n  border-radius: 70px;\n  color: white;\n  margin-top: 15px;\n}\n\n.synonymouspopupremovebutton {\n  position: relative;\n  left: -30px;\n  top: 6px;\n  background-color: #cecece;\n  border-radius: 70px;\n  color: white;\n  margin-top: 15px;\n}\n\n.popupclosebutton {\n  background-color: #a92a23;\n  height: 40px;\n  width: 40px;\n  border-radius: 70px;\n  position: absolute;\n  top: -26px;\n  right: -18px;\n  padding: 9px;\n  color: white;\n  font-size: x-large;\n  font-weight: 800;\n  left: auto;\n  cursor: pointer;\n}\n\n.alphabetsorting {\n  width: 100%;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  word-spacing: 42px;\n  text-align: center;\n}\n\n.crossbutton {\n  background-color: #9c9c9c;\n  border-radius: 70px;\n  color: white;\n}\n\n.fa-pencil-square-o {\n  color: white;\n  background-color: #9c9c9c;\n  border-radius: 70px;\n  height: 30;\n  width: 24px;\n  height: 24px;\n  padding: 4px;\n}\n\n.active {\n  color: #a92a23;\n}\n\n.mat-tab-label {\n  min-width: 59px !important;\n}\n\n.mat-menu-panel {\n  overflow: hidden;\n}\n\n/* Styles for the active tab label */\n.mat-tab-label.mat-tab-label-active {\n  min-width: 59px !important;\n}\n\n.mat-badge-content {\n  background: #3b4f6a;\n}\n\n.category-info {\n  padding: 20px;\n  border-radius: 8px;\n  background: white;\n  margin: 0px 30px;\n}\n\n.btn_sec button {\n  margin-left: 30px;\n  width: 110px;\n}\n\n.del_icon {\n  float: right;\n  margin-top: -58px;\n  margin-right: 30px;\n  font-size: 21px;\n  padding: 8px 10px;\n  color: #a92a23;\n  border-radius: 6px;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/category/category-details.component.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ;;AAEA;EACI,WAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,UAAA;EACA,QAAA;EACA,yBAAA;EACA,iBAAA;EACA,mBAAA;AACJ;;AACA;EACI,kBAAA;EACA,WAAA;EACA,QAAA;EACA,yBAAA;EACA,mBAAA;EACA,YAAA;EACA,gBAAA;AAEJ;;AAAA;EACI,kBAAA;EACA,WAAA;EACA,QAAA;EACA,yBAAA;EACA,mBAAA;EACA,YAAA;EACA,gBAAA;AAGJ;;AAAA;EACI,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,UAAA;EACA,eAAA;AAGJ;;AADA;EACI,WAAA;EACA,eAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;AAIJ;;AAFA;EACI,yBAAA;EACA,mBAAA;EACA,YAAA;AAKJ;;AAHA;EACI,YAAA;EACA,yBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;AAMJ;;AAJA;EACI,cAAA;AAOJ;;AAJA;EACI,0BAAA;AAOJ;;AAJA;EACI,gBAAA;AAOJ;;AAJA,oCAAA;AACA;EACI,0BAAA;AAOJ;;AAJA;EACI,mBAAA;AAOJ;;AAJA;EACI,aAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;AAOJ;;AAFA;EACI,iBAAA;EACA,YAAA;AAKJ;;AAHA;EACI,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;EAEA,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,eAAA;AAKJ","sourcesContent":["button {\r\n    margin-left: 8px;\r\n}\r\n\r\n.breadcrumb-view {\r\n    width: 100%;\r\n    background-size: cover;\r\n    padding: 20px;\r\n    padding-top: 120px;\r\n}\r\n\r\n.synonymsbutton {\r\n    position: relative;\r\n    left: -5px;\r\n    top: 6px;\r\n    background-color: #1f3251;\r\n    border-radius: 70;\r\n    border-radius: 70px;\r\n}\r\n.synonymouspopupaddbutton {\r\n    position: relative;\r\n    left: -30px;\r\n    top: 6px;\r\n    background-color: #3b4f6b;\r\n    border-radius: 70px;\r\n    color: white;\r\n    margin-top: 15px;\r\n}\r\n.synonymouspopupremovebutton {\r\n    position: relative;\r\n    left: -30px;\r\n    top: 6px;\r\n    background-color: #cecece;\r\n    border-radius: 70px;\r\n    color: white;\r\n    margin-top: 15px;\r\n}\r\n\r\n.popupclosebutton {\r\n    background-color: #a92a23;\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 70px;\r\n    position: absolute;\r\n    top: -26px;\r\n    right: -18px;\r\n    padding: 9px;\r\n    color: white;\r\n    font-size: x-large;\r\n    font-weight: 800;\r\n    left: auto;\r\n    cursor: pointer;\r\n}\r\n.alphabetsorting {\r\n    width: 100%;\r\n    cursor: pointer;\r\n    align-items: center;\r\n    justify-content: center;\r\n    word-spacing: 42px;\r\n    text-align: center;\r\n}\r\n.crossbutton {\r\n    background-color: #9c9c9c;\r\n    border-radius: 70px;\r\n    color: white;\r\n}\r\n.fa-pencil-square-o {\r\n    color: white;\r\n    background-color: #9c9c9c;\r\n    border-radius: 70px;\r\n    height: 30;\r\n    width: 24px;\r\n    height: 24px;\r\n    padding: 4px;\r\n}\r\n.active {\r\n    color: #a92a23;\r\n}\r\n\r\n.mat-tab-label {\r\n    min-width: 59px !important;\r\n}\r\n\r\n.mat-menu-panel {\r\n    overflow: hidden;\r\n}\r\n\r\n/* Styles for the active tab label */\r\n.mat-tab-label.mat-tab-label-active {\r\n    min-width: 59px !important;\r\n}\r\n\r\n.mat-badge-content {\r\n    background: #3b4f6a;\r\n}\r\n\r\n.category-info {\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    background: #ffff;\r\n    margin: 0px 30px;\r\n}\r\n.mat-form-field {\r\n    // margin-bottom: 5px;\r\n}\r\n.btn_sec button {\r\n    margin-left: 30px;\r\n    width: 110px;\r\n}\r\n.del_icon {\r\n    float: right;\r\n    margin-top: -58px;\r\n    margin-right: 30px;\r\n    font-size: 21px;\r\n    //background: #a92a23;\r\n    padding: 8px 10px;\r\n    color: #a92a23;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 85323:
/*!************************************************************************!*\
  !*** ./src/app/pages/category/category-list.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".addbuttton {\n  background-color: #a92a23;\n  width: 60px;\n  height: 60px;\n  padding: 18px;\n  border-radius: 70px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.square {\n  height: 15px;\n  width: 15px;\n  float: left;\n  margin-right: 5px;\n}\n\n.mat-form-field {\n  margin-bottom: 0px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/category/category-list.component.scss"],"names":[],"mappings":"AAAA;EACI,yBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;AACJ;;AAEA;EACI,YAAA;EACA,WAAA;EACA,WAAA;EACA,iBAAA;AACJ;;AACE;EACE,kBAAA;AAEJ","sourcesContent":[".addbuttton{\r\n    background-color: #a92a23;\r\n    width: 60px;\r\n    height: 60px;\r\n    padding: 18px;\r\n    border-radius: 70px;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.square {\r\n    height: 15px;\r\n    width: 15px;\r\n    float: left;\r\n    margin-right: 5px;\r\n  }\r\n  .mat-form-field{\r\n    margin-bottom: 0px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 92978:
/*!***************************************************************************!*\
  !*** ./src/app/pages/category/category-details.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"bg-layout\">\r\n\r\n    <div aria-label=\"breadcrumb\" style=\"width: 100%; background-size: cover;  padding-top: 10px;\">\r\n        <ol class=\"breadcrumb\" style=\"background: transparent; margin-left: 15px;\">\r\n            <li class=\"breadcrumb-item\" aria-current=\"page\"><a [routerLink]=\"['/map/category']\"\r\n                    style=\"color:  #B2B2B3; font-size: 16px;\">Six Essentials </a></li>\r\n            <li class=\"breadcrumb-item\" *ngIf=\"!isEdit \" aria-current=\"page\" style=\"color: #a92a23; font-size: 16px\">Add\r\n            </li>\r\n            <li class=\"breadcrumb-item\" *ngIf=\"isEdit\" aria-current=\"page\" style=\"color: #a92a23; font-size: 16px\">Edit\r\n            </li>\r\n        </ol>\r\n        <i *ngIf=\"isEdit && isStaff\" class=\"fas fa-trash-alt del_icon\" style=\"float: right;\" (click)=\"categoryDelete()\"></i>\r\n    </div>\r\n\r\n\r\n    <form [formGroup]=\"categoryForm\" class=\"ant-advanced-search-form\">\r\n\r\n        <div class=\"page-content category-info\">\r\n\r\n            <h5 class=\"pt-3 pb-3\" style=\"color: #a92a23; font-size: 22px; font-weight: 600;\">Six Essentials Info</h5>\r\n\r\n            <div class=\"row\">\r\n\r\n                <mat-form-field class=\"col-md-6\">\r\n                    <mat-label>Name</mat-label>\r\n                    <input matInput placeholder=\"Enter the Category name\" formControlName=\"categoryName\" required [readonly]=\"!isStaff\">\r\n                    <mat-error class=\"mb-5\">Name is required!</mat-error>\r\n                </mat-form-field>\r\n\r\n\r\n                <mat-form-field class=\"col-md-6\">\r\n                    <mat-label>Color Code</mat-label>\r\n                    <input matInput [style.background]=\"colorPickerHexValue\" [(colorPicker)]=\"colorPickerHexValue\"\r\n                        placeholder=\"Enter the Color picker\" [cpOKButton]=\"false\" [cpOKButtonText]=\"'Select'\"\r\n                        [cpCancelButton]=\"false\" autocomplete=\"off\" [cpSaveClickOutside]=\"'true'\"\r\n                        [cpDisableInput]=\"'false'\" [cpAlphaChannel]=\"'disabled'\" [cpOutputFormat]=\"'hex'\"\r\n                        [cpAddColorButton]=\"false\" (colorPickerOpen)=\"onColorPickerChange('colorPickerOpen',$event)\"\r\n                        (colorPickerClose)=\"onColorPickerChange('colorPickerClose',$event)\"\r\n                        (cpInputChange)=\"onColorPickerChange('cpInputChange',$event)\"\r\n                        (cpSliderDragStart)=\"onColorPickerChange('cpSliderDragStart',$event)\"\r\n                        (cpSliderDragEnd)=\"onColorPickerChange('cpSliderDragEnd',$event)\" formControlName=\"colorPicker\"\r\n                        readonly required>\r\n                    <mat-error>Color picker is required!</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-md-6\">\r\n                    <mat-label>Abbreviation</mat-label>\r\n                    <input matInput placeholder=\"Enter the Abbreviation\" formControlName=\"abbreviation\" required [readonly]=\"!isStaff\">\r\n                    <mat-error class=\"mb-5\">Abbreviation is required!</mat-error>\r\n                </mat-form-field>\r\n                <div class=\"col-md-6\">\r\n                    <img style=\" background: #FFF;   border-radius: 50%; width: 40px; height: 40px; cursor: pointer;\"\r\n                        [src]=\"profileImg\" alt=\"logo\">\r\n\r\n                    <mat-form-field style=\"padding-left: 15px; width: calc(100% - 40px);\">\r\n                        <mat-label>Created By</mat-label>\r\n                        <input matInput placeholder=\"Created By\" formControlName=\"createdBy\" required readonly>\r\n                        <mat-error class=\"mb-5\">Created By is required!</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n                <mat-form-field class=\"col-md-6\">\r\n                    <mat-label>Created date</mat-label>\r\n                    <input formControlName=\"createdDate\" matInput [matDatepicker]=\"createdDate\" readonly>\r\n                    <mat-datepicker #createdDate></mat-datepicker>\r\n                    <!-- <mat-error>Created dateis required!</mat-error> -->\r\n                </mat-form-field>\r\n\r\n                <mat-checkbox class=\"col-md-6 mt-3\" formControlName=\"isActive\" [disabled]=\"!isStaff\" >\r\n                    Active\r\n                </mat-checkbox>\r\n\r\n                <!-- <div class=\"col-12\">\r\n                    <mat-form-field class=\"example-half-width\">\r\n                        <mat-label>Number of synonyms</mat-label>\r\n                        <input matInput placeholder=\"Enter the Number of synonyms\" formControlName=\"numberofsynonyms\">\r\n                        <mat-error>Number of synonyms is required!</mat-error>\r\n                    </mat-form-field>\r\n                </div> -->\r\n\r\n            </div>\r\n\r\n            <div class=\"btn_sec pt-4 pb-2\" style=\" padding-right: 40px; text-align: right;\">\r\n                <button mat-button style=\" background: #DEDEDE; color:grey; border-radius:72px; \"\r\n                    (click)=\"createCancelCategory()\" *ngIf=\"isStaff\">Cancel</button>\r\n                <button *ngIf=\"!isEdit\" class=\"saveButton\" mat-button\r\n                    style=\"background: #A92A23; color: #FFF; border-radius:72px; margin-left: 10px\"\r\n                    (click)=\"confirmCreateDialog()\">Save</button>\r\n                <button *ngIf=\"isEdit && isStaff\" class=\"saveButton\" mat-button\r\n                    style=\"background: #A92A23; color: #FFF; border-radius:72px; margin-left: 10px\"\r\n                    (click)=\"updateCategory()\">Update</button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"isCreated\" style=\"margin-top:20px;\" class=\"category-info\">\r\n            <div class=\"row\">\r\n                <h5 class=\"col pt-3\" style=\"color: #a92a23; font-size: 22px; font-weight: 600; width:50%\">Terminology List\r\n                </h5>\r\n\r\n                <div class=\"col\" style=\"clear: both; padding-top: 10px; padding-bottom: 10px;width:50%; float: right;\">\r\n\r\n                    <div\r\n                        style=\"float: left; width: 100%; display: flex; align-items: flex-start; justify-content: flex-end;\">\r\n                        <span *ngIf=\"!isToggleListView\">\r\n                            <button mat-button title=\"List view\"\r\n                                style=\" background: #3B4E6C; color:white;margin-right: 10px;\" (click)=\"toggleView()\">\r\n                                <mat-icon aria-hidden=\"false\" aria-label=\"Example add icon\">view_week\r\n                                </mat-icon>\r\n                            </button>\r\n                        </span>\r\n                        <span *ngIf=\"isToggleListView\">\r\n                            <button mat-button title=\"Tab view\"\r\n                                style=\" background: #3B4E6C; color:white;margin-right: 10px;\" (click)=\"toggleView()\">\r\n                                <mat-icon aria-hidden=\"false\"  aria-label=\"Example add icon\">view_module\r\n                                </mat-icon>\r\n                            </button>\r\n                        </span>\r\n\r\n                        <button *ngIf=\"(isGlobalSynonymEdit || selectedType == 'Your')&&isStaff \" mat-button style=\" background: #3B4E6C; color:white;\"\r\n                            (click)=\"synonymsPopup()\"><span>\r\n                                <mat-icon aria-hidden=\"false\" class=\"synonymsbutton\" aria-label=\"Example add icon\">add\r\n                                </mat-icon>\r\n                            </span>{{selectedType}} Terminology</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div>\r\n\r\n                <mat-tab-group (selectedTabChange)=\"tabChanged($event)\">\r\n                    <mat-tab>\r\n                        <ng-template matTabLabel *ngIf=\"isStaff\">\r\n                            <span matBadge=\"{{synonymsGlobalList.length}}\"\r\n                                [matBadgeHidden]=\"synonymsGlobalList.length==0\" matBadgeOverlap=\"false\">Global\r\n                                Terminology</span>\r\n                        </ng-template>\r\n                        <span *ngIf=\"!isToggleListView\">\r\n                            <mat-tab-group (selectedIndexChange)=\"selectedGlobalAlphabet($event)\"\r\n                                [(selectedIndex)]=\"globalSelectedIndex\">\r\n                                <mat-tab *ngFor=\"let tab of alphabetsGlobalCount; let index = index\" class=\"setWidth\">\r\n                                    <ng-template matTabLabel>\r\n                                        <span matBadge=\"{{tab.count}}\" matBadgeColor=\"primary\"\r\n                                            [matBadgeHidden]=\"tab.count==0\"\r\n                                            matBadgeOverlap=\"false\">{{tab.letter}}</span>\r\n                                    </ng-template>\r\n                                    <div *ngIf=\"synonymsGlobalListView.length != 0\" style=\"padding: 10px;\">\r\n                                        <button *ngFor=\"let synonymsGlobal of synonymsGlobalListView\" mat-button style=\" background: #FFFFFF; margin: 5px; color:black; border-radius:72px;border: 1px solid;\r\n                                        border-color: #9C9C9C;\">{{synonymsGlobal}}\r\n                                            <i *ngIf=\"isGlobalSynonymEdit\" class=\"fa fa-pencil-square-o\"\r\n                                                aria-hidden=\"true\" (click)=\"editItem(synonymsGlobal)\"></i>\r\n                                            <mat-icon *ngIf=\"isGlobalSynonymEdit\" aria-hidden=\"false\"\r\n                                                style=\"margin-left: 7px;\" aria-label=\"Example clear icon\"\r\n                                                class=\"crossbutton\" (click)=\"deleteGlobalItem(synonymsGlobal)\">\r\n                                                clear</mat-icon>\r\n                                        </button>\r\n                                    </div>\r\n                                    <div *ngIf=\"synonymsGlobalListView.length == 0\" style=\"padding: 10px;\">\r\n                                        No Terminology found\r\n                                    </div>\r\n                                </mat-tab>\r\n\r\n                            </mat-tab-group>\r\n                        </span>\r\n\r\n                        <span *ngIf=\"isToggleListView \">\r\n                            <div *ngIf=\"synonymsGlobalList.length != 0\" style=\"padding: 10px;\">\r\n                                <button *ngFor=\"let synonymsGlobal of synonymsGlobalList\" mat-button style=\" background: #FFFFFF; margin: 5px; color:black; border-radius:72px;border: 1px solid;\r\n                                border-color: #9C9C9C;\">{{synonymsGlobal}}\r\n                                    <i *ngIf=\"isGlobalSynonymEdit && isStaff\" class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"\r\n                                        (click)=\"editItem(synonymsGlobal)\"></i>\r\n                                    <mat-icon *ngIf=\"isGlobalSynonymEdit && isStaff\" aria-hidden=\"false\" style=\"margin-left: 7px;\"\r\n                                        aria-label=\"Example clear icon\" class=\"crossbutton\"\r\n                                        (click)=\"deleteGlobalItem(synonymsGlobal)\">\r\n                                        clear</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                            <div *ngIf=\"synonymsGlobalList.length == 0\" style=\"padding: 10px;\">\r\n                                No Terminology found\r\n                            </div>\r\n                        </span>\r\n                    </mat-tab>\r\n                    <mat-tab>\r\n                        <ng-template matTabLabel>\r\n                            <span matBadge=\"{{synonymsIndividualList.length}}\"\r\n                                [matBadgeHidden]=\"synonymsIndividualList.length==0\" matBadgeOverlap=\"false\">Your\r\n                                Terminology</span>\r\n                        </ng-template>\r\n                        <span *ngIf=\"!isToggleListView\">\r\n                            <mat-tab-group (selectedIndexChange)=\"selectedIndividualAlphabet($event)\"\r\n                                [(selectedIndex)]=\"individualSelectedIndex\">\r\n                                <mat-tab *ngFor=\"let tab of alphabetsIndividualCount; let index = index\"\r\n                                    class=\"setWidth\">\r\n                                    <ng-template matTabLabel>\r\n                                        <span matBadge=\"{{tab.count}}\" [matBadgeHidden]=\"tab.count==0\"\r\n                                            matBadgeOverlap=\"false\">{{tab.letter}}</span>\r\n                                    </ng-template>\r\n                                    <div *ngIf=\"synonymsIndividualListView.length != 0\" style=\"padding: 10px;\">\r\n                                        <button *ngFor=\"let synonymsIndividual of synonymsIndividualListView\" mat-button\r\n                                            style=\" background: #FFFFFF; margin: 5px; color:black; border-radius:72px;border: 1px solid;\r\n                                            border-color: #9C9C9C;\">{{synonymsIndividual}}\r\n                                            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"\r\n                                                (click)=\"editItem(synonymsIndividual)\" *ngIf=\"isStaff\"></i>\r\n                                            <mat-icon aria-hidden=\"false\" style=\"margin-left: 7px;\"\r\n                                                aria-label=\"Example clear icon\" class=\"crossbutton\"\r\n                                                (click)=\"deleteIndividualItem(synonymsIndividual)\" *ngIf=\"isStaff\">\r\n                                                clear</mat-icon>\r\n                                        </button>\r\n                                    </div>\r\n                                    <div *ngIf=\"synonymsIndividualListView.length == 0\" style=\"padding: 10px;\">\r\n                                        No Terminology found\r\n                                    </div>\r\n                                </mat-tab>\r\n                            </mat-tab-group>\r\n                        </span>\r\n                        <span *ngIf=\"isToggleListView\">\r\n                            <div *ngIf=\"synonymsIndividualList.length != 0\" style=\"padding: 10px;\">\r\n                                <button *ngFor=\"let synonymsIndividual of synonymsIndividualList\" mat-button style=\" background: #FFFFFF; margin: 5px; color:black; border-radius:72px;border: 1px solid;\r\n                                    border-color: #9C9C9C;\">{{synonymsIndividual}}\r\n                                    <i class=\"fa fa-pencil-square-o\" *ngIf=\"isStaff\" aria-hidden=\"true\"\r\n                                        (click)=\"editItem(synonymsIndividual)\"></i>\r\n                                    <mat-icon aria-hidden=\"false\" style=\"margin-left: 7px;\"\r\n                                        aria-label=\"Example clear icon\" class=\"crossbutton\"\r\n                                        (click)=\"deleteIndividualItem(synonymsIndividual)\" *ngIf=\"isStaff\">\r\n                                        clear</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                            <div *ngIf=\"synonymsIndividualList.length == 0\" style=\"padding: 10px;\">\r\n                                No Terminology found\r\n                            </div>\r\n                        </span>\r\n\r\n                    </mat-tab>\r\n                </mat-tab-group>\r\n\r\n            </div>\r\n        </div>\r\n    </form>";

/***/ }),

/***/ 11373:
/*!************************************************************************!*\
  !*** ./src/app/pages/category/category-list.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div aria-label=\"breadcrumb\" style=\" width: 100%; background-size: cover;  padding-top: 10px;\">\r\n  <ol class=\"breadcrumb\" style=\"background: transparent; margin-left: 15px;\">\r\n    <li class=\"breadcrumb-item\" aria-current=\"page\"><a style=\"color: #a92a23; font-size: 16px;\">Six Essentials</a>\r\n    </li>\r\n  </ol>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"px-3\">\r\n\r\n        <div class=\"userlist-table w-100\">\r\n          <mat-form-field class=\"filter-search\">\r\n            <mat-label>Search</mat-label>\r\n            <input matInput [(ngModel)]=\"categorySearchValue\" (keyup)=\"searchcategory()\"\r\n              placeholder=\"Search by category name\">\r\n            <mat-icon *ngIf=\"role != 'staff'\" aria-hidden=\"false\" aria-label=\"Example add icon\" (click)=\"addcategory()\">\r\n              add</mat-icon>\r\n          </mat-form-field>\r\n\r\n          <div style=\"overflow-y: auto;\" class=\"table-responsive\">\r\n            <table mat-table [dataSource]=\"categoryList\" class=\"mat-elevation-z8 w-100\">\r\n\r\n              <!-- Position Column -->\r\n              <ng-container matColumnDef=\"position\">\r\n                <th mat-header-cell *matHeaderCellDef> S.No </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Category Name Column -->\r\n              <ng-container matColumnDef=\"categoryName\">\r\n                <th mat-header-cell *matHeaderCellDef> Name </th>\r\n                <td style=\"color: #17a2b8; cursor: pointer; text-transform: capitalize;\" mat-cell\r\n                  *matCellDef=\"let element\" (click)=\"edituserdetail(element.id)\"> {{element.categoryName}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Color Column -->\r\n              <ng-container matColumnDef=\"color\">\r\n                <th mat-header-cell *matHeaderCellDef> Color Code </th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                  <div class=\"square\" [style.background-color]=\"element.color\"></div>{{element.color}}\r\n                </td>\r\n              </ng-container>\r\n\r\n              <!-- Coding Abbreviation Column -->\r\n              <ng-container matColumnDef=\"codingAbbreviation\">\r\n                <th mat-header-cell *matHeaderCellDef> Coding Abbreviation </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.codingAbbreviation}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Created By Column -->\r\n              <ng-container matColumnDef=\"createdBy\">\r\n                <th mat-header-cell *matHeaderCellDef> Created By </th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                  <div *ngIf=\"element.createdBy.profileImageURL; else nopic\">\r\n                    <img style=\" background: #FFF;   border-radius: 50%; width: 40px; height: 40px; cursor: pointer;\"\r\n                      [src]=\"element.createdBy.profileImageURL\" alt=\"logo\"> {{element.createdBy.fullName}}\r\n                  </div>\r\n                  <ng-template #nopic>\r\n                    <img style=\" background: #FFF;   border-radius: 50%; width: 40px; height: 40px; cursor: pointer;\"\r\n                      [src]=\"defaultImg\" alt=\"logo\"> {{element.createdBy.fullName}}\r\n                  </ng-template>\r\n                </td>\r\n\r\n              </ng-container>\r\n\r\n              <!-- Created Date Column -->\r\n              <ng-container matColumnDef=\"createdDate\">\r\n                <th mat-header-cell *matHeaderCellDef> Created Date </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.createdDate | date: 'dd/MM/yyyy'}} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"actions\">\r\n                <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n                <td mat-cell *matCellDef=\"let row\">\r\n\r\n                  <i matTooltip=\"Edit\" class=\"fas fa-edit\"\r\n                    style=\"font-size: 20px; cursor: pointer; padding-left: 9px; padding-right: 9px; color: gray\"\r\n                    (click)=\"edituserdetail(row.id)\"></i>\r\n\r\n                  <mat-slide-toggle [ngModel]=row.isActive matTooltip=\"Active Status\"\r\n                    (change)=\"categoryStatusToggle($event, row.id)\" class=\"mr-2\">\r\n                  </mat-slide-toggle>\r\n\r\n                  <i matTooltip=\"Delete\" class=\"fas fa-trash-alt\"\r\n                    style=\"font-size: 20px; cursor: pointer; padding-left: 7px; padding-right: 7px; color: #ef4f4f\"\r\n                    (click)=\"categoryDelete(row.id)\"></i>\r\n\r\n                </td>\r\n\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n          </div>\r\n          <mat-paginator #paginator [length]=totalRecords [pageSize]=\"10\" (page)=\"nextPage($event)\"\r\n            [showFirstLastButtons]=\"true\">\r\n          </mat-paginator>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_category_category_module_ts.js.map