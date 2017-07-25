webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_student_student_list_component__ = __webpack_require__("../../../../../src/app/components/student/student-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_subject_subject_component__ = __webpack_require__("../../../../../src/app/components/subject/subject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_student_student_manage_component__ = __webpack_require__("../../../../../src/app/components/student/student-manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_club_club_component__ = __webpack_require__("../../../../../src/app/components/club/club.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_teacher_teacher_list_component__ = __webpack_require__("../../../../../src/app/components/teacher/teacher-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_teacher_teacher_manage_component__ = __webpack_require__("../../../../../src/app/components/teacher/teacher-manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_position_position_component__ = __webpack_require__("../../../../../src/app/components/position/position.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Route config let's you map routes to components
var routes = [
    {
        path: 'students',
        component: __WEBPACK_IMPORTED_MODULE_2__components_student_student_list_component__["a" /* StudentListComponent */],
    },
    {
        path: 'student-manage/add',
        component: __WEBPACK_IMPORTED_MODULE_4__components_student_student_manage_component__["a" /* StudentManageComponent */],
    },
    {
        path: 'student-manage/:personid',
        component: __WEBPACK_IMPORTED_MODULE_4__components_student_student_manage_component__["a" /* StudentManageComponent */],
    },
    {
        path: 'teacher',
        component: __WEBPACK_IMPORTED_MODULE_6__components_teacher_teacher_list_component__["a" /* TeacherListComponent */],
    },
    {
        path: 'teacher-manage/add',
        component: __WEBPACK_IMPORTED_MODULE_7__components_teacher_teacher_manage_component__["a" /* TeacherManageComponent */],
    },
    {
        path: 'teacher-manage/:personid',
        component: __WEBPACK_IMPORTED_MODULE_7__components_teacher_teacher_manage_component__["a" /* TeacherManageComponent */],
    },
    {
        path: 'clubs',
        component: __WEBPACK_IMPORTED_MODULE_5__components_club_club_component__["a" /* ClubComponent */],
    },
    {
        path: 'subjects',
        component: __WEBPACK_IMPORTED_MODULE_3__components_subject_subject_component__["a" /* SubjectComponent */],
    },
    {
        path: 'positions',
        component: __WEBPACK_IMPORTED_MODULE_8__components_position_position_component__["a" /* PositionComponent */],
    },
    // map '/' to '/students' as our default route
    {
        path: '',
        redirectTo: '/teacher',
        pathMatch: 'full'
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*ul {\r\n  margin: 0;\r\n  padding: 0;\r\n}*/\r\n\r\n.header-panel {\r\n  /*background-color: red;*/\r\n  color: blue;\r\n  width: 100%;\r\n  height: auto;\r\n  float: top;\r\n}\r\n\r\n.working-panel {\r\n  /*background-color: yellow;*/\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 100%;\r\n  float: bottom;\r\n}\r\n\r\n.navigation-panel {\r\n  /*background-color: green;*/\r\n  width: auto;\r\n  height: 100%;\r\n  float: left;\r\n}\r\n\r\n.navigation-panel ul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.navigation-panel li {\r\n  margin: 10px;\r\n  list-style-type: none;\r\n}\r\n\r\n.elements-panel {\r\n  /*background-color: aqua;*/\r\n  width: auto;\r\n  height: 100%;\r\n  float: left;\r\n}\r\n\r\nli a:hover {\r\n  color: darkblue;\r\n  text-decoration: underline;\r\n  /*font-weight: bold;*/\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-panel\">\n  <h1>\n    {{title}}\n  </h1>\n</div>\n<div class=\"working-panel\">\n  <div class=\"navigation-panel\">\n    <ul>\n      <br>\n      <li><a (click)=\"switchToStudents()\">Students</a></li>\n      <li><a (click)=\"switchToTeachers()\">Teachers</a></li>\n      <li><a (click)=\"switchToClubs()\">Dictionary clubs</a></li>\n      <li><a (click)=\"switchToSubjects()\">Dictionary subjects</a></li>\n      <li><a (click)=\"switchToPositions()\">Dictionary positions</a></li>\n    </ul>\n  </div>\n  <div class=\"elements-panel\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'University Project';
    }
    AppComponent.prototype.switchToStudents = function () {
        this.router.navigate(['/students']);
    };
    AppComponent.prototype.switchToTeachers = function () {
        this.router.navigate(['/teacher']);
    };
    AppComponent.prototype.switchToClubs = function () {
        this.router.navigate(['/clubs']);
    };
    AppComponent.prototype.switchToSubjects = function () {
        this.router.navigate(['/subjects']);
    };
    AppComponent.prototype.switchToPositions = function () {
        this.router.navigate(['/positions']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_student_student_list_component__ = __webpack_require__("../../../../../src/app/components/student/student-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_student_student_manage_component__ = __webpack_require__("../../../../../src/app/components/student/student-manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_teacher_teacher_list_component__ = __webpack_require__("../../../../../src/app/components/teacher/teacher-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_teacher_teacher_manage_component__ = __webpack_require__("../../../../../src/app/components/teacher/teacher-manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_club_club_component__ = __webpack_require__("../../../../../src/app/components/club/club.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_club_clubs_list_component__ = __webpack_require__("../../../../../src/app/components/club/clubs-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_subject_subject_component__ = __webpack_require__("../../../../../src/app/components/subject/subject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_subject_subjects_list_component__ = __webpack_require__("../../../../../src/app/components/subject/subjects-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_position_position_component__ = __webpack_require__("../../../../../src/app/components/position/position.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_position_position_list_component__ = __webpack_require__("../../../../../src/app/components/position/position-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_student_student_service__ = __webpack_require__("../../../../../src/app/components/student/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_teacher_teacher_service__ = __webpack_require__("../../../../../src/app/components/teacher/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_club_club_service__ = __webpack_require__("../../../../../src/app/components/club/club.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_subject_subject_service__ = __webpack_require__("../../../../../src/app/components/subject/subject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_position_position_service__ = __webpack_require__("../../../../../src/app/components/position/position.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_data_service__ = __webpack_require__("../../../../../src/app/components/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_student_student_manage_component__["a" /* StudentManageComponent */], __WEBPACK_IMPORTED_MODULE_6__components_student_student_list_component__["a" /* StudentListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_teacher_teacher_manage_component__["a" /* TeacherManageComponent */], __WEBPACK_IMPORTED_MODULE_8__components_teacher_teacher_list_component__["a" /* TeacherListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_club_club_component__["a" /* ClubComponent */], __WEBPACK_IMPORTED_MODULE_11__components_club_clubs_list_component__["a" /* ClubsListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_subject_subject_component__["a" /* SubjectComponent */], __WEBPACK_IMPORTED_MODULE_13__components_subject_subjects_list_component__["a" /* SubjectsListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_position_position_component__["a" /* PositionComponent */], __WEBPACK_IMPORTED_MODULE_15__components_position_position_list_component__["a" /* PositionsListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_22__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdNativeDateModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__components_student_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_17__components_teacher_teacher_service__["a" /* TeacherService */],
            __WEBPACK_IMPORTED_MODULE_18__components_club_club_service__["a" /* ClubService */],
            __WEBPACK_IMPORTED_MODULE_19__components_subject_subject_service__["a" /* SubjectService */],
            __WEBPACK_IMPORTED_MODULE_20__components_position_position_service__["a" /* PositionService */],
            __WEBPACK_IMPORTED_MODULE_21__components_data_service__["a" /* DataService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/club/club.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\r\n  color:darkblue;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  border: 1px dashed grey;\r\n}\r\n\r\nli button {\r\n  float: right;\r\n}\r\n\r\n.selected {\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/club/club.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  {{title}}\r\n</h2>\r\n\r\n<club-list\r\n  [clubItems]=\"clubItems\"\r\n  [multiSelectionMode]=\"false\"\r\n  (notifyOnSelect) = \"onNotify($event)\">\r\n</club-list>\r\n<p> - click on item to select/de-select it</p>\r\n\r\n<input #newClubInput type=\"text\" placeholder=\"new club\">\r\n<button (click)=\"addClub(newClubInput.value); newClubInput.value = ''\">add</button>\r\n<br><br>\r\n<input #editClubInput type=\"text\"\r\n       [disabled] = \"selectedIndexes.length != 1\"\r\n       [value]=\"(selectedIndexes.length != 0) ? clubItems[selectedIndexes[0]].club.clubName: ''\">\r\n<button (click)=\"editClubByIndex(selectedIndexes[0], editClubInput.value)\"\r\n        [disabled] =\"selectedIndexes.length != 1\">edit</button>\r\n\r\n<button (click)=\"deleteClubByIndex(selectedIndexes[0])\"\r\n        [disabled] =\"selectedIndexes.length != 1\">delete</button>\r\n\r\n<!--<button (click)=\"check()\">check</button>-->\r\n\r\n\r\n<!--<input #editClubInput type=\"text\"\r\n       [disabled] = \"getSelectedItemsIndexes().length != 1\"\r\n       [value]=\"(getSelectedItemsIndexes().length != 0) ? clubItems[getSelectedItemsIndexes()[0]].club.clubName: ''\">\r\n<button (click)=\"editClubByIndex(getSelectedItemsIndexes()[0], editClubInput.value)\"\r\n        [disabled] =\"getSelectedItemsIndexes().length != 1\">edit</button>-->\r\n\r\n\r\n<!--<button (click)=\"deleteClubByIndex(selectedItemIndex)\"\r\n        [hidden] = \"clubsList.selectedItemIndex == null\">remove</button>-->\r\n\r\n\r\n\r\n<!--*ngIf=\"getSelectedItemsIndexes().length == 1\"-->\r\n\r\n\r\n<!--\r\n<input #editClubInput type=\"text\" [hidden] = \"clubsList.selectedItemIndex == null\" [value] = \"getNameByIndex(clubsList.selectedItemIndex)\">\r\n<button (click)=\"editClubByIndex(clubsList.selectedItemIndex, editClubInput.value)\" [hidden] = \"clubsList.selectedItemIndex == null\">edit</button>\r\n<button (click)=\"deleteClubByIndex(clubsList.selectedItemIndex)\" [hidden] = \"clubsList.selectedItemIndex == null\">remove</button>\r\n-->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/club/club.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__club_service__ = __webpack_require__("../../../../../src/app/components/club/club.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClubComponent = (function () {
    function ClubComponent(clubService) {
        this.clubService = clubService;
        this.title = 'Clubs management';
        this.clubItems = [];
        this.selectedIndexes = [];
        this.errorMessage = '';
        this.isLoading = false;
    }
    ClubComponent.prototype.onNotify = function (message) {
        this.selectedIndexes = message;
    };
    ClubComponent.prototype.ngOnInit = function () {
        var _this = this;
        var selectedFlag = false;
        this.clubService
            .getClubs()
            .subscribe(function (p) { return _this.clubItems = p.map(function f(club) {
            return { club: club, selectedFlag: selectedFlag };
        }); }, function (e) { return _this.errorMessage = e; }, function () { return _this.isLoading = false; });
    };
    ClubComponent.prototype.addClub = function (clubName) {
        var _this = this;
        var selectedFlag = false;
        if (!clubName) {
            return;
        }
        this.clubService.saveClub(clubName)
            .subscribe(function (club) {
            _this.clubItems.push({ club: club, selectedFlag: selectedFlag });
        }, function (error) { return _this.errorMessage = error; }, function () { return _this.isLoading = false; });
    };
    ClubComponent.prototype.editClubByIndex = function (clubIndex, clubNewName) {
        var _this = this;
        var club = {
            clubId: this.clubItems[clubIndex].club.clubId,
            clubName: clubNewName
        };
        this.clubService.updateClub(club)
            .subscribe(function (success) { return _this.clubItems[clubIndex].club = success; }, function (error) { return _this.errorMessage = error; });
    };
    ClubComponent.prototype.deleteClubByIndex = function (clubIndex) {
        var _this = this;
        this.clubService.deleteClub(this.clubItems[clubIndex].club.clubId)
            .subscribe(function (success) {
            _this.clubItems.splice(clubIndex, 1);
            _this.selectedIndexes.length = 0;
        }, function (error) { return _this.errorMessage = error; });
    };
    ClubComponent.prototype.getIndexById = function (clubId) {
        /*return this.clubsList.clubs.findIndex(club => club.clubId == clubId);*/
        return 0;
    };
    ClubComponent.prototype.getNameByIndex = function (clubIndex) {
        /* if ((clubIndex == null) || isUndefined((clubIndex))) {
         return '';
         } else {
         return this.clubsList.clubs[clubIndex].clubName;
         }*/
        return '';
    };
    ClubComponent.prototype.getSelectedItemsIndexes = function () {
        var res = [];
        for (var i = 0; i < this.clubItems.length; i++) {
            if (this.clubItems[i].selectedFlag) {
                res[res.length] = i;
            }
        }
        return res;
    };
    return ClubComponent;
}());
ClubComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'club',
        template: __webpack_require__("../../../../../src/app/components/club/club.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/club/club.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__club_service__["a" /* ClubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__club_service__["a" /* ClubService */]) === "function" && _a || Object])
], ClubComponent);

var _a;
//# sourceMappingURL=club.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/club/club.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClubService = (function () {
    function ClubService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api'; // URL to web API
    }
    ClubService.prototype.getClubs = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var clubs$ = this.http.get(this.baseUrl + "/club/", options)
            .map(mapClubs)
            .catch(handleError);
        return clubs$;
    };
    ClubService.prototype.getClub = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var club$ = this.http
            .get(this.baseUrl + "/club/" + id, options)
            .map(mapClubs)
            .catch(handleError);
        return club$;
    };
    ClubService.prototype.saveClub = function (clubName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this
            .http
            .post(this.baseUrl + "/club/", JSON.stringify({ clubId: 0, clubName: clubName }), options)
            .map(mapClubs);
    };
    ClubService.prototype.deleteClub = function (clubId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this
            .http
            .delete(this.baseUrl + "/club/" + clubId, options);
    };
    ClubService.prototype.updateClub = function (club) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this
            .http
            .put(this.baseUrl + "/club/", club, options)
            .map(mapClubs);
    };
    return ClubService;
}());
ClubService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ClubService);

function mapClubs(response) {
    var body = response.json();
    return body || {};
}
function handleError(error) {
    // log error
    var errorMsg = error.message || "Unable to complete operation!";
    console.error(errorMsg);
    // throw an application level error
    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errorMsg);
}
var _a;
//# sourceMappingURL=club.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/club/clubs-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClubsListComponent = (function () {
    function ClubsListComponent() {
        this.selectedItemsCount = 0;
        this.notifyOnSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    ClubsListComponent.prototype.selectClubItem = function (itemIndex) {
        var initState = this.clubItems[itemIndex].selectedFlag;
        // MultiSelection mode
        if (this.multiSelectionMode) {
            this.clubItems[itemIndex].selectedFlag = !this.clubItems[itemIndex].selectedFlag;
            this.selectedItemsCount = (initState) ? this.selectedItemsCount - 1 : this.selectedItemsCount + 1;
        }
        else {
            // SingleSelection mode
            if (this.selectedItemsCount = 0) {
                // SingleSelection mode - nothing selected -> select
                this.clubItems[itemIndex].selectedFlag = true;
                this.selectedItemsCount = 1;
            }
            else {
                if (this.clubItems[itemIndex].selectedFlag) {
                    // SingleSelection mode - requested item is selected -> de-select
                    this.clubItems[itemIndex].selectedFlag = false;
                    this.selectedItemsCount = 0;
                }
                else {
                    // SingleSelection mode - requested item is not selected -> de-select all items
                    this.clubItems.forEach(function f(value, i, arr) { value.selectedFlag = false; });
                    // select required item
                    this.clubItems[itemIndex].selectedFlag = true;
                    this.selectedItemsCount = 1;
                }
            }
        }
        this.notifyOnSelect.emit(this.getSelectedIndexes(this.clubItems));
    };
    ClubsListComponent.prototype.addClubItem = function (clubItem) {
        this.clubItems.push(clubItem);
    };
    ClubsListComponent.prototype.getSelectedItems = function () {
        return this.clubItems.filter(function f(item) {
            return item.selectedFlag;
        });
    };
    ClubsListComponent.prototype.getSelectedIndexes = function (clubItems) {
        var res = [];
        clubItems.forEach(function f(item, index) {
            if (item.selectedFlag) {
                res.push(index);
            }
        });
        return res;
    };
    return ClubsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], ClubsListComponent.prototype, "clubItems", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], ClubsListComponent.prototype, "multiSelectionMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], ClubsListComponent.prototype, "notifyOnSelect", void 0);
ClubsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'club-list',
        template: "\n    <ul>\n      <li *ngFor=\"let clubItem of clubItems; let i = index\"\n          (click)=\"selectClubItem(i)\"\n          [class.selected]=\"clubItem.selectedFlag\">\n        {{clubItem.club.clubId}}. {{clubItem.club.clubName}}\n      </li>\n    </ul>\n  ",
        styles: [__webpack_require__("../../../../../src/app/components/club/club.component.css")],
    })
], ClubsListComponent);

var _a;
//# sourceMappingURL=clubs-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataService = (function () {
    function DataService() {
        this.dataObs$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
    }
    DataService.prototype.getData = function () {
        return this.dataObs$;
    };
    DataService.prototype.updateData = function (data) {
        this.dataObs$.next(data);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/position/position-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PositionsListComponent = (function () {
    function PositionsListComponent() {
        this.selectedItemsCount = 0;
        this.notifyOnSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    PositionsListComponent.prototype.selectPositionItem = function (itemIndex) {
        var initState = this.positionItems[itemIndex].selectedFlag;
        // MultiSelection mode
        if (this.multiSelectionMode) {
            this.positionItems[itemIndex].selectedFlag = !this.positionItems[itemIndex].selectedFlag;
            this.selectedItemsCount = (initState) ? this.selectedItemsCount - 1 : this.selectedItemsCount + 1;
        }
        else {
            // SingleSelection mode
            if (this.selectedItemsCount = 0) {
                // SingleSelection mode - nothing selected -> select
                this.positionItems[itemIndex].selectedFlag = true;
                this.selectedItemsCount = 1;
            }
            else {
                if (this.positionItems[itemIndex].selectedFlag) {
                    // SingleSelection mode - requested item is selected -> de-select
                    this.positionItems[itemIndex].selectedFlag = false;
                    this.selectedItemsCount = 0;
                }
                else {
                    // SingleSelection mode - requested item is not selected -> de-select all items
                    this.positionItems.forEach(function f(value, i, arr) { value.selectedFlag = false; });
                    // select required item
                    this.positionItems[itemIndex].selectedFlag = true;
                    this.selectedItemsCount = 1;
                }
            }
        }
        this.notifyOnSelect.emit(this.getSelectedIndexes(this.positionItems));
    };
    PositionsListComponent.prototype.addPositionItem = function (positionItem) {
        this.positionItems.push(positionItem);
    };
    PositionsListComponent.prototype.getSelectedItems = function () {
        return this.positionItems.filter(function f(item) {
            return item.selectedFlag;
        });
    };
    PositionsListComponent.prototype.getSelectedIndexes = function (positionItems) {
        var res = [];
        positionItems.forEach(function f(item, index) {
            if (item.selectedFlag) {
                res.push(index);
            }
        });
        return res;
    };
    return PositionsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], PositionsListComponent.prototype, "positionItems", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], PositionsListComponent.prototype, "multiSelectionMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], PositionsListComponent.prototype, "notifyOnSelect", void 0);
PositionsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'position-list',
        template: "\n    <ul>\n      <li *ngFor=\"let positionItem of positionItems; let i = index\"\n          (click)=\"selectPositionItem(i)\"\n          [class.selected]=\"positionItem.selectedFlag\">\n        {{positionItem.position.positionId}}. {{positionItem.position.positionName}}\n      </li>\n    </ul>\n  ",
        styles: [__webpack_require__("../../../../../src/app/components/position/position.component.css")],
    })
], PositionsListComponent);

var _a;
//# sourceMappingURL=position-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/position/position.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\r\n  color:darkblue;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  border: 1px dashed grey;\r\n}\r\n\r\nli button {\r\n  float: right;\r\n}\r\n\r\n.selected {\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/position/position.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  {{title}}\r\n</h2>\r\n\r\n<position-list\r\n  [positionItems]=\"positionItems\"\r\n  [multiSelectionMode]=\"false\"\r\n  (notifyOnSelect) = \"onNotify($event)\">\r\n</position-list>\r\n<p> - click on item to select/de-select it</p>\r\n\r\n<input #newPositionInput type=\"text\" placeholder=\"new position\">\r\n<button (click)=\"addPosition(newPositionInput.value); newPositionInput.value = ''\">add</button>\r\n<br><br>\r\n<input #editPositionInput type=\"text\"\r\n       [disabled] = \"selectedIndexes.length != 1\"\r\n       [value]=\"(selectedIndexes.length != 0) ? positionItems[selectedIndexes[0]].position.positionName: ''\">\r\n<button (click)=\"editPositionByIndex(selectedIndexes[0], editPositionInput.value)\"\r\n        [disabled] =\"selectedIndexes.length != 1\">edit</button>\r\n\r\n<button (click)=\"deletePositionByIndex(selectedIndexes[0])\"\r\n        [disabled] =\"selectedIndexes.length != 1\">delete</button>\r\n\r\n<!--<button (click)=\"check()\">check</button>-->\r\n\r\n\r\n<!--<input #editPositionInput type=\"text\"\r\n       [disabled] = \"getSelectedItemsIndexes().length != 1\"\r\n       [value]=\"(getSelectedItemsIndexes().length != 0) ? positionItems[getSelectedItemsIndexes()[0]].position.positionName: ''\">\r\n<button (click)=\"editPositionByIndex(getSelectedItemsIndexes()[0], editPositionInput.value)\"\r\n        [disabled] =\"getSelectedItemsIndexes().length != 1\">edit</button>-->\r\n\r\n\r\n<!--<button (click)=\"deletePositionByIndex(selectedItemIndex)\"\r\n        [hidden] = \"positionsList.selectedItemIndex == null\">remove</button>-->\r\n\r\n\r\n\r\n<!--*ngIf=\"getSelectedItemsIndexes().length == 1\"-->\r\n\r\n\r\n<!--\r\n<input #editPositionInput type=\"text\" [hidden] = \"positionsList.selectedItemIndex == null\" [value] = \"getNameByIndex(positionsList.selectedItemIndex)\">\r\n<button (click)=\"editPositionByIndex(positionsList.selectedItemIndex, editPositionInput.value)\" [hidden] = \"positionsList.selectedItemIndex == null\">edit</button>\r\n<button (click)=\"deletePositionByIndex(positionsList.selectedItemIndex)\" [hidden] = \"positionsList.selectedItemIndex == null\">remove</button>\r\n-->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/position/position.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__position_service__ = __webpack_require__("../../../../../src/app/components/position/position.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PositionComponent = (function () {
    function PositionComponent(positionService) {
        this.positionService = positionService;
        this.title = 'Positions management';
        this.positionItems = [];
        this.selectedIndexes = [];
        this.errorMessage = '';
        this.isLoading = false;
    }
    PositionComponent.prototype.onNotify = function (message) {
        this.selectedIndexes = message;
    };
    PositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var selectedFlag = false;
        this.positionService
            .getPositions()
            .subscribe(function (p) { return _this.positionItems = p.map(function f(position) {
            return { position: position, selectedFlag: selectedFlag };
        }); }, function (e) { return _this.errorMessage = e; }, function () { return _this.isLoading = false; });
    };
    PositionComponent.prototype.addPosition = function (positionName) {
        var _this = this;
        var selectedFlag = false;
        if (!positionName) {
            return;
        }
        this.positionService.savePosition(positionName)
            .subscribe(function (position) {
            _this.positionItems.push({ position: position, selectedFlag: selectedFlag });
        }, function (error) { return _this.errorMessage = error; }, function () { return _this.isLoading = false; });
    };
    PositionComponent.prototype.editPositionByIndex = function (positionIndex, positionNewName) {
        var _this = this;
        var position = {
            positionId: this.positionItems[positionIndex].position.positionId,
            positionName: positionNewName
        };
        this.positionService.updatePosition(position)
            .subscribe(function (success) { return _this.positionItems[positionIndex].position = success; }, function (error) { return _this.errorMessage = error; });
    };
    PositionComponent.prototype.deletePositionByIndex = function (positionIndex) {
        var _this = this;
        this.positionService.deletePosition(this.positionItems[positionIndex].position.positionId)
            .subscribe(function (success) {
            _this.positionItems.splice(positionIndex, 1);
            _this.selectedIndexes.length = 0;
        }, function (error) { return _this.errorMessage = error; });
    };
    PositionComponent.prototype.getIndexById = function (positionId) {
        /*return this.positionsList.positions.findIndex(position => position.positionId == positionId);*/
        return 0;
    };
    PositionComponent.prototype.getNameByIndex = function (positionIndex) {
        /* if ((positionIndex == null) || isUndefined((positionIndex))) {
         return '';
         } else {
         return this.positionsList.positions[positionIndex].positionName;
         }*/
        return '';
    };
    PositionComponent.prototype.getSelectedItemsIndexes = function () {
        var res = [];
        for (var i = 0; i < this.positionItems.length; i++) {
            if (this.positionItems[i].selectedFlag) {
                res[res.length] = i;
            }
        }
        return res;
    };
    return PositionComponent;
}());
PositionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'position',
        template: __webpack_require__("../../../../../src/app/components/position/position.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/position/position.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__position_service__["a" /* PositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__position_service__["a" /* PositionService */]) === "function" && _a || Object])
], PositionComponent);

var _a;
//# sourceMappingURL=position.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/position/position.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PositionService = (function () {
    function PositionService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api'; // URL to web API
    }
    PositionService.prototype.getPositions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var positions$ = this.http.get(this.baseUrl + "/position/", options)
            .map(mapPositions)
            .catch(handleError);
        return positions$;
    };
    PositionService.prototype.getPosition = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var position$ = this.http
            .get(this.baseUrl + "/position/" + id, options)
            .map(mapPositions)
            .catch(handleError);
        return position$;
    };
    PositionService.prototype.savePosition = function (positionName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this
            .http
            .post(this.baseUrl + "/position/", JSON.stringify({ positionId: 0, positionName: positionName }), options)
            .map(mapPositions);
    };
    PositionService.prototype.deletePosition = function (positionId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this
            .http
            .delete(this.baseUrl + "/position/" + positionId, options);
    };
    PositionService.prototype.updatePosition = function (position) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this
            .http
            .put(this.baseUrl + "/position/", position, options)
            .map(mapPositions);
    };
    return PositionService;
}());
PositionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], PositionService);

function mapPositions(response) {
    var body = response.json();
    return body || {};
}
function handleError(error) {
    // log error
    var errorMsg = error.message || "Unable to complete operation!";
    console.error(errorMsg);
    // throw an application level error
    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errorMsg);
}
var _a;
//# sourceMappingURL=position.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/student/student-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\r\n  color:darkblue;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  border: 1px dashed grey;\r\n}\r\n\r\nli button {\r\n  float: right;\r\n}\r\n\r\n.selected {\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/student/student-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  {{title}}\r\n</h2>\r\n\r\n<ul>\r\n  <li *ngFor=\"let student of students; let i = index\"\r\n      (click)=\"selectItem(i)\"\r\n      [class.selected]=\"i == selectedItemIndex\">\r\n    {{student.personId}}. {{student.personLastName}} {{student.personFirstName}} ({{student.personBirthday | date:'yyyy-MM-dd'}})\r\n    {{subjectsToString(i)}}\r\n    {{clubsToString(i)}}\r\n  </li>\r\n</ul>\r\n\r\n<p> - click on item to select/de-select it</p>\r\n\r\n<button (click)=\"addStudent();\">add</button>\r\n<button *ngIf=\"selectedItemIndex != null\" (click)=\"manageStudent(students[selectedItemIndex]);\">edit</button>\r\n<button *ngIf=\"selectedItemIndex != null\" (click)=\"deleteStudentByIndex(selectedItemIndex);\">delete</button>\r\n<br>\r\n<br><br>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/student/student-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__student_service__ = __webpack_require__("../../../../../src/app/components/student/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/components/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentListComponent = (function () {
    function StudentListComponent(studentService, route, router, dataService) {
        this.studentService = studentService;
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.title = 'Students management';
        this.students = [];
        this.selectedItemIndex = null;
        this.errorMessage = '';
        this.isLoading = false;
    }
    StudentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadStudents();
        this.sub = this.dataService.getData().subscribe(function (data) {
            _this.loadStudents();
        });
    };
    StudentListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    StudentListComponent.prototype.loadStudents = function () {
        var _this = this;
        this.studentService
            .getStudents()
            .subscribe(function (p) { return _this.students = p; }, function (e) { return _this.errorMessage = e; }, function () { return _this.isLoading = false; });
    };
    StudentListComponent.prototype.selectItem = function (itemIndex) {
        if (this.selectedItemIndex == itemIndex) {
            this.selectedItemIndex = null;
        }
        else {
            this.selectedItemIndex = itemIndex;
        }
    };
    StudentListComponent.prototype.addStudent = function () {
        this.router.navigate(['/student-manage/add']);
    };
    StudentListComponent.prototype.manageStudent = function (student) {
        this.router.navigate(['/student-manage', (student == null) ? 0 : student.personId]);
    };
    StudentListComponent.prototype.deleteStudentByIndex = function (studentIndex) {
        var _this = this;
        this.studentService.deleteStudent(this.students[this.selectedItemIndex].personId)
            .subscribe(function (success) {
            _this.students.splice(studentIndex, 1);
            _this.selectedItemIndex = null;
        }, function (error) { return _this.errorMessage = error; });
    };
    StudentListComponent.prototype.subjectsToString = function (studentIndex) {
        var subjectsStr = this
            .students[studentIndex]
            .subjects
            .map(function (item) {
            return item.subjectName;
        })
            .join('; ');
        if (subjectsStr.length > 0) {
            subjectsStr = 'Subjects:' + subjectsStr;
        }
        return subjectsStr;
    };
    StudentListComponent.prototype.clubsToString = function (studentIndex) {
        var clubsStr = this
            .students[studentIndex]
            .clubs
            .map(function (item) {
            return item.clubName;
        })
            .join('; ');
        if (clubsStr.length > 0) {
            clubsStr = 'Clubs:' + clubsStr;
        }
        return clubsStr;
    };
    return StudentListComponent;
}());
StudentListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'student-list',
        template: __webpack_require__("../../../../../src/app/components/student/student-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/student/student-list.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]) === "function" && _d || Object])
], StudentListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=student-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/student/student-manage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/student/student-manage.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <link href=\"https://unpkg.com/@angular/material/prebuilt-themes/indigo-pink.css\" rel=\"stylesheet\">\r\n</head>\r\n\r\n<label>Last name:</label>\r\n<input #studentNewLastNameInput type=\" text\"\r\n       [value]=\"(student ==null)? '' : student.personLastName\">\r\n\r\n<br>\r\n<label>First name:</label>\r\n<input #studentNewFirstNameInput [value]=\"(student ==null)? '' : student.personFirstName\" type=\"text\">\r\n\r\n<br>\r\n<label>Birthday:</label>\r\n<!--<input #studentNewBirthdayInput [value]=\"(student ==null)? '' : student.personBirthday  | date:'yyyy-MM-dd'\" type=\"date\">-->\r\n\r\n<input #studentNewBirthdayInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"\r\n       [value]=\"(student ==null)? '' : student.personBirthday | date:'yyyy-MM-dd'\"\r\n>\r\n<md-datepicker #picker></md-datepicker>\r\n<button mdSuffix [mdDatepickerToggle]=\"picker\"></button>\r\n\r\n<br>\r\n<br>\r\n<label>Subjects:</label>\r\n<subject-list\r\n  [subjectItems]=\"subjectItems\"\r\n  [multiSelectionMode]=\"true\">\r\n</subject-list>\r\n\r\n<br>\r\n<label>Clubs:</label>\r\n<club-list\r\n  [clubItems]=\"clubItems\"\r\n  [multiSelectionMode]=\"true\">\r\n</club-list>\r\n\r\n<br>\r\n<button\r\n  (click)=\"submit(studentNewLastNameInput.value, studentNewFirstNameInput.value, studentNewBirthdayInput.value)\">\r\n  Submit\r\n</button>\r\n<button (click)=\"goToStudentList()\">Back</button>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/student/student-manage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__student_service__ = __webpack_require__("../../../../../src/app/components/student/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__club_club_service__ = __webpack_require__("../../../../../src/app/components/club/club.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subject_subject_service__ = __webpack_require__("../../../../../src/app/components/subject/subject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/components/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentManageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentManageComponent = (function () {
    function StudentManageComponent(studentService, clubService, subjectService, route, router, dataService) {
        this.studentService = studentService;
        this.clubService = clubService;
        this.subjectService = subjectService;
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.student = null;
        this.clubItems = [];
        this.subjectItems = [];
        this.errorMessage = '';
        this.notifyOnStudentManageComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    StudentManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Upload student
        if (this.router.url == '/student-manage/add') {
            this.student = {
                personId: 0,
                personLastName: '',
                personFirstName: '',
                personBirthday: '',
                subjects: [],
                clubs: []
            };
            this.loadClubs();
            this.loadSubjects();
        }
        else {
            this.sub = this.route.params.subscribe(function (params) {
                var id = Number.parseInt(params['personid']);
                _this.studentService
                    .getStudent(id)
                    .subscribe(function (p) {
                    _this.student = p;
                    _this.loadClubs();
                    _this.loadSubjects();
                }, function (e) { return _this.errorMessage = e; });
            });
        }
    };
    StudentManageComponent.prototype.loadClubs = function () {
        var _this = this;
        var selectedFlag = false;
        this.clubService
            .getClubs()
            .subscribe(function (p) {
            _this.clubItems = p.map(function f(club) {
                return { club: club, selectedFlag: selectedFlag };
            });
            for (var i = 0; i < _this.clubItems.length; i++) {
                for (var j = 0; j < _this.student.clubs.length; j++) {
                    if (_this.student.clubs[j].clubName == _this.clubItems[i].club.clubName) {
                        _this.clubItems[i].selectedFlag = true;
                        break;
                    }
                }
            }
        }, function (e) { return _this.errorMessage = e; });
    };
    StudentManageComponent.prototype.loadSubjects = function () {
        var _this = this;
        var selectedFlag = false;
        this.subjectService
            .getSubjects()
            .subscribe(function (p) {
            _this.subjectItems = p.map(function f(subject) {
                return { subject: subject, selectedFlag: selectedFlag };
            });
            for (var i = 0; i < _this.subjectItems.length; i++) {
                for (var j = 0; j < _this.student.subjects.length; j++) {
                    if (_this.student.subjects[j].subjectName == _this.subjectItems[i].subject.subjectName) {
                        _this.subjectItems[i].selectedFlag = true;
                        break;
                    }
                }
            }
        }, function (e) { return _this.errorMessage = e; });
    };
    StudentManageComponent.prototype.ngOnDestroy = function () {
        if (this.router.url == '/student-manage/add') {
            this.sub.unsubscribe();
        }
    };
    StudentManageComponent.prototype.submit = function (studentNewLastName, studentNewFirstName, studentNewBirthday) {
        var _this = this;
        this.student.personLastName = studentNewLastName;
        this.student.personFirstName = studentNewFirstName;
        var bd = studentNewBirthday.split('.');
        this.student.personBirthday = bd[2] + '-' + bd[1] + '-' + bd[0];
        this.student.subjects = this.subjectItems
            .filter(function f(item) {
            return item.selectedFlag;
        })
            .map(function f(item) {
            return item.subject;
        });
        this.student.clubs = this.clubItems
            .filter(function f(item) {
            return item.selectedFlag;
        })
            .map(function f(item) {
            return item.club;
        });
        this.studentService.updateStudent(this.student)
            .subscribe(function (success) {
            _this.student = success;
            _this.dataService.updateData(true);
        }, function (error) { return _this.errorMessage = error; });
        this.router.navigate(['/students']);
    };
    StudentManageComponent.prototype.goToStudentList = function () {
        this.router.navigate(['/students']);
    };
    return StudentManageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], StudentManageComponent.prototype, "notifyOnStudentManageComplete", void 0);
StudentManageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'student-manage',
        template: __webpack_require__("../../../../../src/app/components/student/student-manage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/student/student-manage.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__club_club_service__["a" /* ClubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__club_club_service__["a" /* ClubService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__subject_subject_service__["a" /* SubjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__subject_subject_service__["a" /* SubjectService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]) === "function" && _g || Object])
], StudentManageComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=student-manage.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/student/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentService = (function () {
    function StudentService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api'; // URL to web API
    }
    StudentService.prototype.getStudents = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var students$ = this.http.get(this.baseUrl + "/student/", options)
            .map(mapStudents)
            .catch(handleError);
        return students$;
    };
    StudentService.prototype.getStudent = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var student$ = this.http
            .get(this.baseUrl + "/student/" + id, options)
            .map(mapStudents)
            .catch(handleError);
        return student$;
    };
    StudentService.prototype.saveStudent = function (student) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this
            .http
            .post(this.baseUrl + "/student/", JSON.stringify(student), options)
            .map(mapStudents);
    };
    StudentService.prototype.deleteStudent = function (studentId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this
            .http
            .delete(this.baseUrl + "/student/" + studentId, options);
    };
    StudentService.prototype.updateStudent = function (student) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this
            .http
            .put(this.baseUrl + "/student/", student, options)
            .map(mapStudents);
    };
    return StudentService;
}());
StudentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], StudentService);

function mapStudents(response) {
    var body = response.json();
    return body || {};
}
function handleError(error) {
    // log error
    var errorMsg = error.message || "Unable to complete operation!";
    console.error(errorMsg);
    // throw an application level error
    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errorMsg);
}
var _a;
//# sourceMappingURL=student.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/subject/subject.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\r\n  color:darkblue;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  border: 1px dashed grey;\r\n}\r\n\r\nli button {\r\n  float: right;\r\n}\r\n\r\n.selected {\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/subject/subject.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  {{title}}\r\n</h2>\r\n\r\n<subject-list\r\n  [subjectItems]=\"subjectItems\"\r\n  [multiSelectionMode]=\"false\"\r\n  (notifyOnSelect) = \"onNotify($event)\">\r\n</subject-list>\r\n<p> - click on item to select/de-select it</p>\r\n\r\n<input #newSubjectInput type=\"text\" placeholder=\"new subject\">\r\n<button (click)=\"addSubject(newSubjectInput.value); newSubjectInput.value = ''\">add</button>\r\n<br><br>\r\n<input #editSubjectInput type=\"text\"\r\n       [disabled] = \"selectedIndexes.length != 1\"\r\n       [value]=\"(selectedIndexes.length != 0) ? subjectItems[selectedIndexes[0]].subject.subjectName: ''\">\r\n<button (click)=\"editSubjectByIndex(selectedIndexes[0], editSubjectInput.value)\"\r\n        [disabled] =\"selectedIndexes.length != 1\">edit</button>\r\n\r\n<button (click)=\"deleteSubjectByIndex(selectedIndexes[0])\"\r\n        [disabled] =\"selectedIndexes.length != 1\">delete</button>\r\n\r\n<!--<button (click)=\"check()\">check</button>-->\r\n\r\n\r\n<!--<input #editSubjectInput type=\"text\"\r\n       [disabled] = \"getSelectedItemsIndexes().length != 1\"\r\n       [value]=\"(getSelectedItemsIndexes().length != 0) ? subjectItems[getSelectedItemsIndexes()[0]].subject.subjectName: ''\">\r\n<button (click)=\"editSubjectByIndex(getSelectedItemsIndexes()[0], editSubjectInput.value)\"\r\n        [disabled] =\"getSelectedItemsIndexes().length != 1\">edit</button>-->\r\n\r\n\r\n<!--<button (click)=\"deleteSubjectByIndex(selectedItemIndex)\"\r\n        [hidden] = \"subjectsList.selectedItemIndex == null\">remove</button>-->\r\n\r\n\r\n\r\n<!--*ngIf=\"getSelectedItemsIndexes().length == 1\"-->\r\n\r\n\r\n<!--\r\n<input #editSubjectInput type=\"text\" [hidden] = \"subjectsList.selectedItemIndex == null\" [value] = \"getNameByIndex(subjectsList.selectedItemIndex)\">\r\n<button (click)=\"editSubjectByIndex(subjectsList.selectedItemIndex, editSubjectInput.value)\" [hidden] = \"subjectsList.selectedItemIndex == null\">edit</button>\r\n<button (click)=\"deleteSubjectByIndex(subjectsList.selectedItemIndex)\" [hidden] = \"subjectsList.selectedItemIndex == null\">remove</button>\r\n-->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/subject/subject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subject_service__ = __webpack_require__("../../../../../src/app/components/subject/subject.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubjectComponent = (function () {
    function SubjectComponent(subjectService) {
        this.subjectService = subjectService;
        this.title = 'Subjects management';
        this.subjectItems = [];
        this.selectedIndexes = [];
        this.errorMessage = '';
        this.isLoading = false;
    }
    SubjectComponent.prototype.onNotify = function (message) {
        this.selectedIndexes = message;
    };
    SubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var selectedFlag = false;
        this.subjectService
            .getSubjects()
            .subscribe(function (p) { return _this.subjectItems = p.map(function f(subject) {
            return { subject: subject, selectedFlag: selectedFlag };
        }); }, function (e) { return _this.errorMessage = e; }, function () { return _this.isLoading = false; });
    };
    SubjectComponent.prototype.addSubject = function (subjectName) {
        var _this = this;
        var selectedFlag = false;
        if (!subjectName) {
            return;
        }
        this.subjectService.saveSubject(subjectName)
            .subscribe(function (subject) {
            _this.subjectItems.push({ subject: subject, selectedFlag: selectedFlag });
        }, function (error) { return _this.errorMessage = error; }, function () { return _this.isLoading = false; });
    };
    SubjectComponent.prototype.editSubjectByIndex = function (subjectIndex, subjectNewName) {
        var _this = this;
        var subject = {
            subjectId: this.subjectItems[subjectIndex].subject.subjectId,
            subjectName: subjectNewName
        };
        this.subjectService.updateSubject(subject)
            .subscribe(function (success) { return _this.subjectItems[subjectIndex].subject = success; }, function (error) { return _this.errorMessage = error; });
    };
    SubjectComponent.prototype.deleteSubjectByIndex = function (subjectIndex) {
        var _this = this;
        this.subjectService.deleteSubject(this.subjectItems[subjectIndex].subject.subjectId)
            .subscribe(function (success) {
            _this.subjectItems.splice(subjectIndex, 1);
            _this.selectedIndexes.length = 0;
        }, function (error) { return _this.errorMessage = error; });
    };
    SubjectComponent.prototype.getIndexById = function (subjectId) {
        /*return this.subjectsList.subjects.findIndex(subject => subject.subjectId == subjectId);*/
        return 0;
    };
    SubjectComponent.prototype.getNameByIndex = function (subjectIndex) {
        /* if ((subjectIndex == null) || isUndefined((subjectIndex))) {
         return '';
         } else {
         return this.subjectsList.subjects[subjectIndex].subjectName;
         }*/
        return '';
    };
    SubjectComponent.prototype.getSelectedItemsIndexes = function () {
        var res = [];
        for (var i = 0; i < this.subjectItems.length; i++) {
            if (this.subjectItems[i].selectedFlag) {
                res[res.length] = i;
            }
        }
        return res;
    };
    return SubjectComponent;
}());
SubjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'subject',
        template: __webpack_require__("../../../../../src/app/components/subject/subject.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/subject/subject.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__subject_service__["a" /* SubjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__subject_service__["a" /* SubjectService */]) === "function" && _a || Object])
], SubjectComponent);

var _a;
//# sourceMappingURL=subject.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/subject/subject.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubjectService = (function () {
    function SubjectService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api'; // URL to web API
    }
    SubjectService.prototype.getSubjects = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var subjects$ = this.http.get(this.baseUrl + "/subject/", options)
            .map(mapSubjects)
            .catch(handleError);
        return subjects$;
    };
    SubjectService.prototype.getSubject = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var subject$ = this.http
            .get(this.baseUrl + "/subject/" + id, options)
            .map(mapSubjects)
            .catch(handleError);
        return subject$;
    };
    SubjectService.prototype.saveSubject = function (subjectName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this
            .http
            .post(this.baseUrl + "/subject/", JSON.stringify({ subjectId: 0, subjectName: subjectName }), options)
            .map(mapSubjects);
    };
    SubjectService.prototype.deleteSubject = function (subjectId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this
            .http
            .delete(this.baseUrl + "/subject/" + subjectId, options);
    };
    SubjectService.prototype.updateSubject = function (subject) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this
            .http
            .put(this.baseUrl + "/subject/", subject, options)
            .map(mapSubjects);
    };
    return SubjectService;
}());
SubjectService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], SubjectService);

function mapSubjects(response) {
    var body = response.json();
    return body || {};
}
function handleError(error) {
    // log error
    var errorMsg = error.message || "Unable to complete operation!";
    console.error(errorMsg);
    // throw an application level error
    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errorMsg);
}
var _a;
//# sourceMappingURL=subject.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/subject/subjects-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubjectsListComponent = (function () {
    function SubjectsListComponent() {
        this.selectedItemsCount = 0;
        this.notifyOnSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    SubjectsListComponent.prototype.selectSubjectItem = function (itemIndex) {
        var initState = this.subjectItems[itemIndex].selectedFlag;
        // MultiSelection mode
        if (this.multiSelectionMode) {
            this.subjectItems[itemIndex].selectedFlag = !this.subjectItems[itemIndex].selectedFlag;
            this.selectedItemsCount = (initState) ? this.selectedItemsCount - 1 : this.selectedItemsCount + 1;
        }
        else {
            // SingleSelection mode
            if (this.selectedItemsCount = 0) {
                // SingleSelection mode - nothing selected -> select
                this.subjectItems[itemIndex].selectedFlag = true;
                this.selectedItemsCount = 1;
            }
            else {
                if (this.subjectItems[itemIndex].selectedFlag) {
                    // SingleSelection mode - requested item is selected -> de-select
                    this.subjectItems[itemIndex].selectedFlag = false;
                    this.selectedItemsCount = 0;
                }
                else {
                    // SingleSelection mode - requested item is not selected -> de-select all items
                    this.subjectItems.forEach(function f(value, i, arr) { value.selectedFlag = false; });
                    // select required item
                    this.subjectItems[itemIndex].selectedFlag = true;
                    this.selectedItemsCount = 1;
                }
            }
        }
        this.notifyOnSelect.emit(this.getSelectedIndexes(this.subjectItems));
    };
    SubjectsListComponent.prototype.addSubjectItem = function (subjectItem) {
        this.subjectItems.push(subjectItem);
    };
    SubjectsListComponent.prototype.getSelectedItems = function () {
        return this.subjectItems.filter(function f(item) {
            return item.selectedFlag;
        });
    };
    SubjectsListComponent.prototype.getSelectedIndexes = function (subjectItems) {
        var res = [];
        subjectItems.forEach(function f(item, index) {
            if (item.selectedFlag) {
                res.push(index);
            }
        });
        return res;
    };
    return SubjectsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], SubjectsListComponent.prototype, "subjectItems", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], SubjectsListComponent.prototype, "multiSelectionMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], SubjectsListComponent.prototype, "notifyOnSelect", void 0);
SubjectsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'subject-list',
        template: "\n    <ul>\n      <li *ngFor=\"let subjectItem of subjectItems; let i = index\"\n          (click)=\"selectSubjectItem(i)\"\n          [class.selected]=\"subjectItem.selectedFlag\">\n        {{subjectItem.subject.subjectId}}. {{subjectItem.subject.subjectName}}\n      </li>\n    </ul>\n  ",
        styles: [__webpack_require__("../../../../../src/app/components/subject/subject.component.css")],
    })
], SubjectsListComponent);

var _a;
//# sourceMappingURL=subjects-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/teacher/teacher-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\r\n  color:darkblue;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  border: 1px dashed grey;\r\n}\r\n\r\nli button {\r\n  float: right;\r\n}\r\n\r\n.selected {\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/teacher/teacher-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  {{title}}\r\n</h2>\r\n\r\n<ul>\r\n  <li *ngFor=\"let teacher of teachers; let i = index\"\r\n      (click)=\"selectItem(i)\"\r\n      [class.selected]=\"i == selectedItemIndex\">\r\n    {{teacher.personId}}. {{teacher.personLastName}} {{teacher.personFirstName}} ({{teacher.personBirthday | date:'yyyy-MM-dd'}})\r\n    Position: {{(teacher.position != null)? teacher.position.positionName: '(not specified)'}}\r\n    Subject: {{(teacher.subject != null)? teacher.subject.subjectName: '(not specified)'}}\r\n  </li>\r\n</ul>\r\n\r\n<p> - click on item to select/de-select it</p>\r\n\r\n<button (click)=\"addTeacher();\">add</button>\r\n<button *ngIf=\"selectedItemIndex != null\" (click)=\"manageTeacher(teachers[selectedItemIndex]);\">edit</button>\r\n<button *ngIf=\"selectedItemIndex != null\" (click)=\"deleteTeacherByIndex(selectedItemIndex);\">delete</button>\r\n<br>\r\n<br><br>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/teacher/teacher-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__teacher_service__ = __webpack_require__("../../../../../src/app/components/teacher/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/components/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeacherListComponent = (function () {
    function TeacherListComponent(teacherService, route, router, dataService) {
        this.teacherService = teacherService;
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.title = 'Teachers management';
        this.teachers = [];
        this.selectedItemIndex = null;
        this.errorMessage = '';
        this.isLoading = false;
    }
    TeacherListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadTeachers();
        this.sub = this.dataService.getData().subscribe(function (data) {
            _this.loadTeachers();
        });
    };
    TeacherListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TeacherListComponent.prototype.loadTeachers = function () {
        var _this = this;
        this.teacherService
            .getTeachers()
            .subscribe(function (p) { return _this.teachers = p; }, function (e) { return _this.errorMessage = e; }, function () { return _this.isLoading = false; });
    };
    TeacherListComponent.prototype.selectItem = function (itemIndex) {
        if (this.selectedItemIndex == itemIndex) {
            this.selectedItemIndex = null;
        }
        else {
            this.selectedItemIndex = itemIndex;
        }
    };
    TeacherListComponent.prototype.addTeacher = function () {
        this.router.navigate(['/teacher-manage/add']);
    };
    TeacherListComponent.prototype.manageTeacher = function (teacher) {
        this.router.navigate(['/teacher-manage', (teacher == null) ? 0 : teacher.personId]);
    };
    TeacherListComponent.prototype.deleteTeacherByIndex = function (teacherIndex) {
        var _this = this;
        this.teacherService.deleteTeacher(this.teachers[this.selectedItemIndex].personId)
            .subscribe(function (success) {
            _this.teachers.splice(teacherIndex, 1);
            _this.selectedItemIndex = null;
        }, function (error) { return _this.errorMessage = error; });
    };
    return TeacherListComponent;
}());
TeacherListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'teacher-list',
        template: __webpack_require__("../../../../../src/app/components/teacher/teacher-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/teacher/teacher-list.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__teacher_service__["a" /* TeacherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__teacher_service__["a" /* TeacherService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]) === "function" && _d || Object])
], TeacherListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=teacher-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/teacher/teacher-manage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/teacher/teacher-manage.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <link href=\"https://unpkg.com/@angular/material/prebuilt-themes/indigo-pink.css\" rel=\"stylesheet\">\r\n</head>\r\n\r\n<label>Last name:</label>\r\n<input #teacherNewLastNameInput type=\" text\"\r\n       [value]=\"(teacher ==null)? '' : teacher.personLastName\">\r\n\r\n<br>\r\n<label>First name:</label>\r\n<input #teacherNewFirstNameInput [value]=\"(teacher ==null)? '' : teacher.personFirstName\" type=\"text\">\r\n\r\n<br>\r\n<label>Birthday:</label>\r\n<input #teacherNewBirthdayInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\"\r\n       [value]=\"(teacher ==null)? '' : teacher.personBirthday | date:'yyyy-MM-dd'\"\r\n>\r\n<md-datepicker #picker></md-datepicker>\r\n<button mdSuffix [mdDatepickerToggle]=\"picker\"></button>\r\n\r\n<br>\r\n<br>\r\n<label>Subjects:</label>\r\n<subject-list\r\n  [subjectItems]=\"subjectItems\"\r\n  [multiSelectionMode]=\"false\">\r\n</subject-list>\r\n\r\n<br>\r\n<label>Positions:</label>\r\n<position-list\r\n  [positionItems]=\"positionItems\"\r\n  [multiSelectionMode]=\"false\">\r\n</position-list>\r\n\r\n<br>\r\n<button\r\n  (click)=\"submit(teacherNewLastNameInput.value, teacherNewFirstNameInput.value, teacherNewBirthdayInput.value)\">\r\n  Submit\r\n</button>\r\n<button (click)=\"goToTeacherList()\">Back</button>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/teacher/teacher-manage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_service__ = __webpack_require__("../../../../../src/app/components/teacher/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/components/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_components_subject_subject_service__ = __webpack_require__("../../../../../src/app/components/subject/subject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__position_position_service__ = __webpack_require__("../../../../../src/app/components/position/position.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherManageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeacherManageComponent = (function () {
    function TeacherManageComponent(teacherService, subjectService, positionService, route, router, dataService) {
        this.teacherService = teacherService;
        this.subjectService = subjectService;
        this.positionService = positionService;
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.teacher = null;
        this.subjectItems = [];
        this.positionItems = [];
        this.errorMessage = '';
        this.notifyOnTeacherManageComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    TeacherManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Upload teacher
        if (this.router.url == '/teacher-manage/add') {
            this.teacher = {
                personId: 0,
                personLastName: '',
                personFirstName: '',
                personBirthday: '',
                position: null,
                subject: null,
            };
            this.loadSubjects();
            this.loadPositions();
        }
        else {
            this.sub = this.route.params.subscribe(function (params) {
                var id = Number.parseInt(params['personid']);
                _this.teacherService
                    .getTeacher(id)
                    .subscribe(function (p) {
                    _this.teacher = p;
                    _this.loadSubjects();
                    _this.loadPositions();
                }, function (e) { return _this.errorMessage = e; });
            });
        }
    };
    TeacherManageComponent.prototype.loadSubjects = function () {
        var _this = this;
        var selectedFlag = false;
        this.subjectService
            .getSubjects()
            .subscribe(function (p) {
            _this.subjectItems = p.map(function f(subject) {
                return { subject: subject, selectedFlag: selectedFlag };
            });
            if (_this.teacher.subject != null) {
                for (var i = 0; i < _this.subjectItems.length; i++) {
                    if (_this.teacher.subject.subjectName == _this.subjectItems[i].subject.subjectName) {
                        _this.subjectItems[i].selectedFlag = true;
                        break;
                    }
                }
            }
        }, function (e) { return _this.errorMessage = e; });
    };
    TeacherManageComponent.prototype.loadPositions = function () {
        var _this = this;
        var selectedFlag = false;
        this.positionService
            .getPositions()
            .subscribe(function (p) {
            _this.positionItems = p.map(function f(position) {
                return { position: position, selectedFlag: selectedFlag };
            });
            if (_this.teacher.position != null) {
                for (var i = 0; i < _this.positionItems.length; i++) {
                    if (_this.teacher.position.positionName == _this.positionItems[i].position.positionName) {
                        _this.positionItems[i].selectedFlag = true;
                        break;
                    }
                }
            }
        }, function (e) { return _this.errorMessage = e; });
    };
    TeacherManageComponent.prototype.ngOnDestroy = function () {
        if (this.router.url == '/teacher-manage/add') {
            this.sub.unsubscribe();
        }
    };
    TeacherManageComponent.prototype.submit = function (teacherNewLastName, teacherNewFirstName, teacherNewBirthday) {
        var _this = this;
        this.teacher.personLastName = teacherNewLastName;
        this.teacher.personFirstName = teacherNewFirstName;
        var bd = teacherNewBirthday.split('.');
        this.teacher.personBirthday = bd[2] + '-' + bd[1] + '-' + bd[0];
        var selectedSubjectItems = this.subjectItems
            .filter(function f(item) {
            return item.selectedFlag;
        });
        if (selectedSubjectItems.length > 0) {
            this.teacher.subject = selectedSubjectItems[0].subject;
        }
        else {
            this.teacher.subject = null;
        }
        var selectedPositionItems = this.positionItems
            .filter(function f(item) {
            return item.selectedFlag;
        });
        if (selectedPositionItems.length > 0) {
            this.teacher.position = selectedPositionItems[0].position;
        }
        else {
            this.teacher.position = null;
        }
        this.teacherService.updateTeacher(this.teacher)
            .subscribe(function (success) {
            _this.teacher = success;
            _this.dataService.updateData(true);
        }, function (error) { return _this.errorMessage = error; });
        this.router.navigate(['/teacher']);
    };
    TeacherManageComponent.prototype.goToTeacherList = function () {
        this.router.navigate(['/teacher']);
    };
    return TeacherManageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], TeacherManageComponent.prototype, "notifyOnTeacherManageComplete", void 0);
TeacherManageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'teacher-manage',
        template: __webpack_require__("../../../../../src/app/components/teacher/teacher-manage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/teacher/teacher-manage.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__teacher_service__["a" /* TeacherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__teacher_service__["a" /* TeacherService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_components_subject_subject_service__["a" /* SubjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_components_subject_subject_service__["a" /* SubjectService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__position_position_service__["a" /* PositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__position_position_service__["a" /* PositionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]) === "function" && _g || Object])
], TeacherManageComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=teacher-manage.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/teacher/teacher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeacherService = (function () {
    function TeacherService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api'; // URL to web API
    }
    TeacherService.prototype.getTeachers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var teachers$ = this.http.get(this.baseUrl + "/teacher/", options)
            .map(mapTeachers)
            .catch(handleError);
        return teachers$;
    };
    TeacherService.prototype.getTeacher = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var teacher$ = this.http
            .get(this.baseUrl + "/teacher/" + id, options)
            .map(mapTeachers)
            .catch(handleError);
        return teacher$;
    };
    TeacherService.prototype.saveTeacher = function (teacher) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this
            .http
            .post(this.baseUrl + "/teacher/", JSON.stringify(teacher), options)
            .map(mapTeachers);
    };
    TeacherService.prototype.deleteTeacher = function (teacherId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this
            .http
            .delete(this.baseUrl + "/teacher/" + teacherId, options);
    };
    TeacherService.prototype.updateTeacher = function (teacher) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this
            .http
            .put(this.baseUrl + "/teacher/", teacher, options)
            .map(mapTeachers);
    };
    return TeacherService;
}());
TeacherService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], TeacherService);

function mapTeachers(response) {
    var body = response.json();
    return body || {};
}
function handleError(error) {
    // log error
    var errorMsg = error.message || "Unable to complete operation!";
    console.error(errorMsg);
    // throw an application level error
    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errorMsg);
}
var _a;
//# sourceMappingURL=teacher.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map