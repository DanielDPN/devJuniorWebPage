(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/68l":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/footer/footer.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container\">\n        <!--<div class=\"row\">\n            <div class=\"col-md-6\"><h1 class=\"title\">DevJunior•Net</h1></div>\n            <div class=\"col-md-3\">\n                <ul class=\"nav\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/details']\"> Angular </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/details']\"> Javascript </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/details']\"> Typescript </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/details']\"> CSS </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/details']\"> HTML </a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"col-md-3\">\n                <ul class=\"nav\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/details']\"> Java </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/details']\"> Spring Boot </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/details']\"> Testes Unitários </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/details']\"> Spring Framework </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/list']\"> Ver mais </a>\n                    </li>\n                </ul>\n            </div>\n        </div>-->\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h1 class=\"title\">DevJunior•Net</h1>\n                <div class=\"btn-wrapper profile\">\n                    <a\n                      class=\"btn btn-neutral btn-round btn-simple mr-1\"\n                      href=\"https://github.com/florinpop17/app-ideas\"\n                      target=\"_blank\"\n                    >\n                    Baseado em App Ideas\n                      <i class=\"fab fa-github\"> </i>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                <ul class=\"nav\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/ideas/beginner']\"> Iniciantes </a>\n                    </li>                    \n                </ul>\n            </div>\n            <div class=\"col-md-2\">\n                <ul class=\"nav\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/ideas/intermediate']\"> Intermediários </a>\n                    </li>                    \n                </ul>\n            </div>\n            <div class=\"col-md-2\">\n                <ul class=\"nav\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/ideas/advanced']\"> Avançados </a>\n                    </li>                    \n                </ul>\n            </div>\n        </div>\n    </div>\n</footer>");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/daniel/Angular/devJuniorBLK/src/main.ts */"zUnb");


/***/ }),

/***/ "00il":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/profilepage/profilepage.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> BLK• </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> BLK• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <img class=\"dots\" src=\"assets/img/dots.png\" />\n\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <div class=\"container align-items-center\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6\">\n          <h1 class=\"profile-title text-left\">Mike Scheinder</h1>\n          <h5 class=\"text-on-back\">01</h5>\n          <p class=\"profile-description\">\n            Offices parties lasting outward nothing age few resolve. Impression\n            to discretion understood to we interested he excellence. Him\n            remarkably use projection collecting. Going about eat forty world\n            has round miles.\n          </p>\n          <div class=\"btn-wrapper profile pt-3\">\n            <a\n              class=\"btn btn-icon btn-twitter btn-round mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-facebook btn-round mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-dribbble btn-round\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 ml-auto mr-auto\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img\n                class=\"img-center img-fluid rounded-circle\"\n                src=\"assets/img/mike.jpg\"\n              />\n\n              <h4 class=\"title\">Transactions</h4>\n            </div>\n            <div class=\"card-body\">\n              <tabset\n                class=\"nav-tabs-danger justify-content-center tab-subcategories\"\n              >\n                <tab heading=\"Wallet\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table tablesorter\" id=\"plain-table\">\n                      <thead class=\"text-danger\">\n                        <tr>\n                          <th class=\"header\">COIN</th>\n                          <th class=\"header\">AMOUNT</th>\n                          <th class=\"header\">VALUE</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>BTC</td>\n                          <td>7.342</td>\n                          <td>48,870.75 USD</td>\n                        </tr>\n                        <tr>\n                          <td>ETH</td>\n                          <td>30.737</td>\n                          <td>64,53.30 USD</td>\n                        </tr>\n                        <tr>\n                          <td>XRP</td>\n                          <td>19.242</td>\n                          <td>18,354.96 USD</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </tab>\n                <tab heading=\"Send\">\n                  <div class=\"row\">\n                    <label class=\"col-sm-3 col-form-label\"> Pay to </label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"form-group\">\n                        <input\n                          class=\"form-control\"\n                          placeholder=\"e.g. 1Nasd92348hU984353hfid\"\n                          type=\"text\"\n                        />\n\n                        <span class=\"form-text\">\n                          Please enter a valid address.\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <label class=\"col-sm-3 col-form-label\"> Amount </label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"form-group\">\n                        <input\n                          class=\"form-control\"\n                          placeholder=\"1.587\"\n                          type=\"text\"\n                        />\n                      </div>\n                    </div>\n                  </div>\n                  <button\n                    class=\"btn btn-simple btn-danger btn-icon btn-round float-right\"\n                    type=\"submit\"\n                  >\n                    <i class=\"tim-icons icon-send\"> </i>\n                  </button>\n                </tab>\n                <tab heading=\"News\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table tablesorter\" id=\"plain-table\">\n                      <thead class=\"text-danger\">\n                        <tr>\n                          <th class=\"header\">Latest Crypto News</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>The Daily: Nexo to Pay on Stable...</td>\n                        </tr>\n                        <tr>\n                          <td>Venezuela Begins Public of Nation...</td>\n                        </tr>\n                        <tr>\n                          <td>PR: BitCanna â Dutch Blockchain...</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </tab>\n              </tabset>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section\">\n    <div class=\"container\">\n      <div class=\"row justify-content-between\">\n        <div class=\"col-md-6\">\n          <div class=\"row justify-content-between align-items-center\">\n            <carousel [showIndicators]=\"true\">\n              <slide>\n                <img\n                  alt=\"First slide\"\n                  class=\"d-block\"\n                  src=\"assets/img/denys.jpg\"\n                />\n\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h5>Big City Life, United States</h5>\n                </div>\n              </slide>\n              <slide>\n                <img\n                  alt=\"Second slide\"\n                  class=\"d-block\"\n                  src=\"assets/img/fabien-bazanegue.jpg\"\n                />\n\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h5>Somewhere Beyond, United States</h5>\n                </div>\n              </slide>\n              <slide>\n                <img\n                  alt=\"Third slide\"\n                  class=\"d-block\"\n                  src=\"assets/img/mark-finn.jpg\"\n                />\n\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h5>Stocks, United States</h5>\n                </div>\n              </slide>\n            </carousel>\n          </div>\n        </div>\n        <div class=\"col-md-5\">\n          <h1 class=\"profile-title text-left\">Projects</h1>\n          <h5 class=\"text-on-back\">02</h5>\n          <p class=\"profile-description text-left\">\n            An artist of considerable range, Ryan â the name taken by\n            Melbourne-raised, Brooklyn-based Nick Murphy â writes, performs and\n            records all of his own music, giving it a warm, intimate feel with a\n            solid groove structure. An artist of considerable range.\n          </p>\n          <div class=\"btn-wrapper pt-3\">\n            <button\n              class=\"btn btn-simple btn-danger mr-1\"\n              href=\"javascript:void(0)\"\n            >\n              <i class=\"tim-icons icon-book-bookmark\"> </i> Bookmark\n            </button>\n            <button class=\"btn btn-simple btn-info\" href=\"javascript:void(0)\">\n              <i class=\"tim-icons icon-bulb-63\"> </i> Check it!\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <section class=\"section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"card card-plain\">\n            <div class=\"card-header\">\n              <h1 class=\"profile-title text-left\">Contact</h1>\n              <h5 class=\"text-on-back\">03</h5>\n            </div>\n            <div class=\"card-body\">\n              <form>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Your Name </label>\n                      <input class=\"form-control\" type=\"text\" value=\"Mike\" />\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Email address </label>\n                      <input\n                        class=\"form-control\"\n                        placeholder=\"mike@email.com\"\n                        type=\"email\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Phone </label>\n                      <input\n                        class=\"form-control\"\n                        type=\"text\"\n                        value=\"001-12321345\"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Company </label>\n                      <input\n                        class=\"form-control\"\n                        type=\"text\"\n                        value=\"CreativeTim\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label> Message </label>\n                      <input\n                        class=\"form-control\"\n                        placeholder=\"Hello there!\"\n                        type=\"text\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <button\n                  class=\"btn btn-danger btn-round float-right\"\n                  placement=\"right\"\n                  type=\"submit\"\n                >\n                  Send text\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4 ml-auto\">\n          <div class=\"info info-horizontal\">\n            <div class=\"icon icon-danger\">\n              <i class=\"tim-icons icon-square-pin\"> </i>\n            </div>\n            <div class=\"description\">\n              <h4 class=\"info-title\">Find us at the office</h4>\n              <p>\n                Bld Mihail Kogalniceanu, nr. 8, <br />\n\n                7652 Bucharest, <br />\n\n                Romania\n              </p>\n            </div>\n          </div>\n          <div class=\"info info-horizontal\">\n            <div class=\"icon icon-danger\">\n              <i class=\"tim-icons icon-mobile\"> </i>\n            </div>\n            <div class=\"description\">\n              <h4 class=\"info-title\">Give us a ring</h4>\n              <p>\n                Michael Jordan <br />\n\n                +40 762 321 762 <br />\n\n                Mon - Fri, 8:00-22:00\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">BLK•</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "0R/P":
/*!**************************************************************!*\
  !*** ./src/app/pages/ideas/beginner/beginner.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZWdpbm5lci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "0Sra":
/*!************************************************************!*\
  !*** ./src/app/pages/ideas/advanced/advanced.component.ts ***!
  \************************************************************/
/*! exports provided: AdvancedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedComponent", function() { return AdvancedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_advanced_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./advanced.component.html */ "53lf");
/* harmony import */ var _advanced_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advanced.component.scss */ "7Kkh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AdvancedComponent = /** @class */ (function () {
    function AdvancedComponent() {
        this.page = 1;
    }
    AdvancedComponent.prototype.scrollToDownload = function (element) {
        element.scrollIntoView({ behavior: "smooth" });
    };
    AdvancedComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("index-page");
    };
    AdvancedComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("index-page");
    };
    AdvancedComponent.ctorParameters = function () { return []; };
    AdvancedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-advanced',
            template: _raw_loader_advanced_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_advanced_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AdvancedComponent);
    return AdvancedComponent;
}());



/***/ }),

/***/ "31kf":
/*!*************************************************************!*\
  !*** ./src/app/pages/list/frontend/frontend.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcm9udGVuZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "4Tzv":
/*!*********************************************************!*\
  !*** ./src/app/pages/list/backend/backend.component.ts ***!
  \*********************************************************/
/*! exports provided: BackendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendComponent", function() { return BackendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_backend_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./backend.component.html */ "xfGB");
/* harmony import */ var _backend_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend.component.scss */ "8ysE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var BackendComponent = /** @class */ (function () {
    function BackendComponent() {
        this.page = 1;
    }
    BackendComponent.prototype.scrollToDownload = function (element) {
        element.scrollIntoView({ behavior: "smooth" });
    };
    BackendComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("index-page");
    };
    BackendComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("index-page");
    };
    BackendComponent.ctorParameters = function () { return []; };
    BackendComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-backend',
            template: _raw_loader_backend_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_backend_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BackendComponent);
    return BackendComponent;
}());



/***/ }),

/***/ "53lf":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ideas/advanced/advanced.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"page-header header-filter\">\n    <img class=\"path\" src=\"assets/img/path1.png\" style=\"width: 35%;left: 25%;top: 10%;\"/>\n    <div class=\"container\">\n      <div class=\"content-center brand\">\n        <h1 class=\"h1-seo\" style=\"font-size: 3em; font-weight: 300;\">Desafios Avançados</h1>\n        <h3 style=\"font-weight: 300;\">\n            Desenvolvedores que estão aprendendo técnicas mais avançadas, como implementar aplicações de back-end e serviços de banco de dados.\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"main\">\n    <div class=\"section section-javascript\" id=\"javascriptComponents\">\n      <img class=\"path\" src=\"assets/img/path5.png\" style=\"width: 50%;left: 40%;\"/>\n\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\n      \n      <div class=\"section\" style=\"padding: 25px 0;\">\n        <div *ngIf=\"page == 1\" class=\"container\">\n          <!--<div class=\"title\"><h3>Avançados</h3></div>-->\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Battleship Game Engine</h2>\n              <p class=\"text-white mt-4\">\n                O Battleship Game Engine (BGE) implementa o clássico jogo de tabuleiro baseado em turnos como um pacote separado de qualquer camada de apresentação. Esse é um tipo de padrão de arquitetura útil em muitas aplicações, pois permite que qualquer número de aplicações utilizem o mesmo serviço.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Battleship-Game-Engine.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Battleship Bot</h2>\n              <p class=\"text-white mt-4\">\n                Battleship Bot leva o Battleship Game Engine para o próximo nível. Este desafio usa seu Battleship Game Engine para criar uma camada de apresentação usando a API de bot do Discord para permitir que você jogue o jogo por meio de um bate-papo do Discord.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Battleship-Bot.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>          \n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Boole Bots Game</h2>\n              <p class=\"text-white mt-4\">\n                Boole Bots é um jogo que não é apenas divertido, mas também ajuda a entender a lógica booleana básica. Este jogo tem uma arena de 8x8 peças de jogo em que seus bots se movem em velocidades e trajetórias aleatórias. Os Bots recebem valores booleanos de 0 ou 1 e operações booleanas - AND, OR, NOR, NOT.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Boole-Bot-Game.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Calendar</h2>\n              <p class=\"text-white mt-4\">\n                Crie uma aplicação de calendário para organizar sua vida diária. Adicione funcionalidade para adicionar eventos e lembretes.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calendar-App.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Calorie Counter</h2>\n              <p class=\"text-white mt-4\">\n                O objetivo da aplicação Calorie Counter é ajudar o usuário a atender às necessidades nutricionais contando calorias para vários alimentos.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Calorie-Counter-App.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>          \n        </div> \n      </div>\n      <div class=\"section\" style=\"padding: 25px 0;\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <pagination\n                class=\"pagination-info justify-content-center\"\n                [(ngModel)]=\"page\"\n                [totalItems]=\"10\"\n                previousText=\"&lsaquo;\"\n                nextText=\"&rsaquo;\"\n                firstText=\"&laquo;\"\n                lastText=\"&raquo;\"  \n              >\n              </pagination>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>  \n</div>\n");

/***/ }),

/***/ "6OTY":
/*!***********************************************************!*\
  !*** ./src/app/pages/list/frontend/frontend.component.ts ***!
  \***********************************************************/
/*! exports provided: FrontendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontendComponent", function() { return FrontendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_frontend_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./frontend.component.html */ "Bz8s");
/* harmony import */ var _frontend_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frontend.component.scss */ "31kf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var FrontendComponent = /** @class */ (function () {
    function FrontendComponent() {
        this.page = 1;
    }
    FrontendComponent.prototype.scrollToDownload = function (element) {
        element.scrollIntoView({ behavior: "smooth" });
    };
    FrontendComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("index-page");
    };
    FrontendComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("index-page");
    };
    FrontendComponent.ctorParameters = function () { return []; };
    FrontendComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-frontend',
            template: _raw_loader_frontend_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_frontend_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FrontendComponent);
    return FrontendComponent;
}());



/***/ }),

/***/ "7Kkh":
/*!**************************************************************!*\
  !*** ./src/app/pages/ideas/advanced/advanced.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZHZhbmNlZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "8jZd":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/landingpage/landingpage.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> BLK• </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> BLK• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <img class=\"path\" src=\"assets/img/blob.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path2.png\" />\n\n    <img class=\"shapes triangle\" src=\"assets/img/triunghiuri.png\" />\n\n    <img class=\"shapes wave\" src=\"assets/img/waves.png\" />\n\n    <img class=\"shapes squares\" src=\"assets/img/patrat.png\" />\n\n    <img class=\"shapes circle\" src=\"assets/img/cercuri.png\" />\n\n    <div class=\"content-center\">\n      <div\n        class=\"row row-grid justify-content-between align-items-center text-left\"\n      >\n        <div class=\"col-lg-6 col-md-6\">\n          <h1 class=\"text-white\">\n            We keep your coin <br />\n\n            <span class=\"text-white\"> secured </span>\n          </h1>\n          <p class=\"text-white mb-3\">\n            A wonderful serenity has taken possession of my entire soul, like\n            these sweet mornings of spring which I enjoy with my whole heart. I\n            am alone, and feel...\n          </p>\n          <div class=\"btn-wrapper mb-3\">\n            <p class=\"category text-success d-inline mr-1\">From 9.99%/mo</p>\n            <a\n              class=\"btn btn-success btn-link btn-sm\"\n              href=\"javascript:void(0)\"\n            >\n              <i class=\"tim-icons icon-minimal-right\"> </i>\n            </a>\n          </div>\n          <div class=\"btn-wrapper\">\n            <div class=\"button-container\">\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-twitter\"> </i>\n              </button>\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-dribbble\"> </i>\n              </button>\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-facebook\"> </i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-5\">\n          <img\n            alt=\"Circle image\"\n            class=\"img-fluid\"\n            src=\"assets/img/etherum.png\"\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n  <section class=\"section section-lg\">\n    <section class=\"section\">\n      <img class=\"path\" src=\"assets/img/path4.png\" />\n\n      <div class=\"container\">\n        <div class=\"row row-grid justify-content-between\">\n          <div class=\"col-md-5 mt-lg-5\">\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-trophy text-warning\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">3,237</p>\n                          <p></p>\n                          <p class=\"card-category\">Awards</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats upper bg-default\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-coins text-white\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">3,653</p>\n                          <p></p>\n                          <p class=\"card-category\">Commits</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-gift-2 text-info\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">593</p>\n                          <p></p>\n                          <p class=\"card-category\">Presents</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-credit-card text-success\">\n                          </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">10,783</p>\n                          <p></p>\n                          <p class=\"card-category\">Forks</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"pl-md-5\">\n              <h1>\n                Large <br />\n\n                Achivements\n              </h1>\n              <p>\n                I should be capable of drawing a single stroke at the present\n                moment; and yet I feel that I never was a greater artist than\n                now.\n              </p>\n              <br />\n\n              <p>\n                When, while the lovely valley teems with vapour around me, and\n                the meridian sun strikes the upper surface of the impenetrable\n                foliage of my trees, and but a few stray.\n              </p>\n              <br />\n\n              <a\n                class=\"font-weight-bold text-info mt-5\"\n                href=\"javascript:void(0)\"\n              >\n                Show all <i class=\"tim-icons icon-minimal-right text-info\"> </i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </section>\n  <section class=\"section section-lg\">\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path5.png\" />\n\n    <img class=\"path3\" src=\"assets/img/path2.png\" />\n\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <h1 class=\"text-center\">Your best benefit</h1>\n          <div class=\"row row-grid justify-content-center\">\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-primary\">\n                  <i class=\"tim-icons icon-money-coins\"> </i>\n                </div>\n                <h4 class=\"info-title\">Low Commission</h4>\n                <hr class=\"line-primary\" />\n\n                <p>\n                  Divide details about your work into parts. Write a few lines\n                  about each one. A paragraph describing a feature will.\n                </p>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-warning\">\n                  <i class=\"tim-icons icon-chart-pie-36\"> </i>\n                </div>\n                <h4 class=\"info-title\">High Incomes</h4>\n                <hr class=\"line-warning\" />\n\n                <p>\n                  Divide details about your product or agency work into parts.\n                  Write a few lines about each one. A paragraph describing\n                  feature will be a feature.\n                </p>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-success\">\n                  <i class=\"tim-icons icon-single-02\"> </i>\n                </div>\n                <h4 class=\"info-title\">Verified People</h4>\n                <hr class=\"line-success\" />\n\n                <p>\n                  Divide details about your product or agency work into parts.\n                  Write a few lines about each one. A paragraph describing be\n                  enough.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg section-safe\">\n    <img class=\"path\" src=\"assets/img/path5.png\" />\n\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-between\">\n        <div class=\"col-md-5\">\n          <img class=\"img-fluid floating\" src=\"assets/img/chester-wade.jpg\" />\n\n          <div class=\"card card-stats bg-danger\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">100%</p>\n                  <p class=\"card-category text-white\">Safe</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-stats bg-info\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">573 K</p>\n                  <p class=\"card-category text-white\">Satisfied customers</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-stats bg-default\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">10 425</p>\n                  <p class=\"card-category text-white\">Business</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"px-md-5\">\n            <hr class=\"line-success\" />\n\n            <h3>Awesome features</h3>\n            <p>\n              The design system comes with three pre-built pages to help you get\n              started faster. You can change the text and images and you're good\n              to go.\n            </p>\n            <ul class=\"list-unstyled mt-5\">\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-vector\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Carefully crafted components</h6></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-tap-02\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Amazing page examples</h6></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-single-02\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Super friendly support team</h6></div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg\">\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path2.png\" />\n\n    <div class=\"col-md-12\">\n      <div class=\"card card-chart card-plain\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 text-left\">\n              <hr class=\"line-primary\" />\n\n              <h5 class=\"card-category\">Total Investments</h5>\n              <h2 class=\"card-title\">Performance</h2>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\"><canvas id=\"chartBig\"> </canvas></div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg section-coins\">\n    <img class=\"path\" src=\"assets/img/path3.png\" />\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <hr class=\"line-info\" />\n\n          <h1>\n            Choose the coin\n            <span class=\"text-info\"> that fits your needs </span>\n          </h1>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/bitcoin.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Light Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-primary\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">50 messages</li>\n                  <li class=\"list-group-item\">100 emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-primary btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/etherum.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Dark Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-success\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">150 messages</li>\n                  <li class=\"list-group-item\">1000 emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-success btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/ripp.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Bright Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-info\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">350 messages</li>\n                  <li class=\"list-group-item\">10K emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-info btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">BLK•</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog?ref=blkdsa-footer\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "8ysE":
/*!***********************************************************!*\
  !*** ./src/app/pages/list/backend/backend.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWNrZW5kLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "Bz8s":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/frontend/frontend.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"page-header header-filter\">\n    <img class=\"path\" src=\"assets/img/path1.png\" style=\"width: 35%;left: 25%;top: 10%;\"/>\n    <div class=\"container\">\n      <div class=\"content-center brand\">\n        <h1 class=\"h1-seo\" style=\"font-size: 3em; font-weight: 300;\">Frontend</h1><!--Trazer esse título por input-->\n        <h3 style=\"font-weight: 300;\">\n          Frontend web é o desenvolvimento da interface gráfica do usuário de um site, por meio do uso de HTML, CSS e JavaScript, para que os usuários possam visualizar e interagir com aquele site.<!--Trazer esse descritivo por input-->\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"main\">\n    <div class=\"section section-javascript\" id=\"javascriptComponents\">\n      <img class=\"path\" src=\"assets/img/path5.png\" style=\"width: 50%;left: 40%;\"/>\n\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\n      \n      <div class=\"section\" style=\"padding: 25px 0;\">\n        <div *ngIf=\"page == 1\" class=\"container\">\n          <!--<div class=\"title\"><h3>Publicados recentemente</h3></div>-->\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Angular</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">JavaScript</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">TypeScript</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">CSS</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">HTML</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>          \n        </div>\n      </div>\n      <div class=\"section\" style=\"padding: 25px 0;\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <pagination\n                class=\"pagination-info justify-content-center\"\n                [(ngModel)]=\"page\"\n                [totalItems]=\"10\"\n                previousText=\"&lsaquo;\"\n                nextText=\"&rsaquo;\"\n                firstText=\"&laquo;\"\n                lastText=\"&raquo;\"  \n              >\n              </pagination>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>  \n</div>\n");

/***/ }),

/***/ "F149":
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/profilepage/profilepage.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfilepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepageComponent", function() { return ProfilepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profilepage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profilepage.component.html */ "00il");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var ProfilepageComponent = /** @class */ (function () {
    function ProfilepageComponent() {
        this.isCollapsed = true;
    }
    ProfilepageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("profile-page");
    };
    ProfilepageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("profile-page");
    };
    ProfilepageComponent.ctorParameters = function () { return []; };
    ProfilepageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-profilepage",
            template: _raw_loader_profilepage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProfilepageComponent);
    return ProfilepageComponent;
}());



/***/ }),

/***/ "IGfe":
/*!************************************************!*\
  !*** ./src/app/pages/list/list.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "IfWR":
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/landingpage/landingpage.component.ts ***!
  \*********************************************************************/
/*! exports provided: LandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function() { return LandingpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_landingpage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./landingpage.component.html */ "8jZd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);




var LandingpageComponent = /** @class */ (function () {
    function LandingpageComponent() {
        this.isCollapsed = true;
    }
    LandingpageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("landing-page");
        var canvas = document.getElementById("chartBig");
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
        gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
        gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
        var chartBig = new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(ctx, {
            type: "line",
            responsive: true,
            data: {
                labels: [
                    "JUN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC"
                ],
                datasets: [
                    {
                        label: "Data",
                        fill: true,
                        backgroundColor: gradientFill,
                        borderColor: "#e44cc4",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: "#e44cc4",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "#be55ed",
                        //pointHoverBorderColor:'rgba(35,46,55,1)',
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: [80, 160, 200, 160, 250, 280, 220, 190, 200, 250, 290, 320]
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    backgroundColor: "#fff",
                    titleFontColor: "#ccc",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest"
                },
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0.0)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                display: false,
                                suggestedMin: 0,
                                suggestedMax: 350,
                                padding: 20,
                                fontColor: "#9a9a9a"
                            }
                        }
                    ],
                    xAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9a9a9a"
                            }
                        }
                    ]
                }
            }
        });
    };
    LandingpageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("landing-page");
    };
    LandingpageComponent.ctorParameters = function () { return []; };
    LandingpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-landingpage",
            template: _raw_loader_landingpage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LandingpageComponent);
    return LandingpageComponent;
}());



/***/ }),

/***/ "K95V":
/*!************************************************************!*\
  !*** ./src/app/components/menu/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "/68l");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.scss */ "foPA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "KoLJ":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ideas/intermediate/intermediate.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"page-header header-filter\">\n    <img class=\"path\" src=\"assets/img/path1.png\" style=\"width: 35%;left: 25%;top: 10%;\"/>\n    <div class=\"container\">\n      <div class=\"content-center brand\">\n        <h1 class=\"h1-seo\" style=\"font-size: 3em; font-weight: 300;\">Desafios Intermediários</h1>\n        <h3 style=\"font-weight: 300;\">\n            Desenvolvedores em estágio intermediário de aprendizado e experiência. Eles se sentem confortáveis em UI/UX, usando ferramentas de desenvolvimento e criando aplicações que usam serviços de API.\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"main\">\n    <div class=\"section section-javascript\" id=\"javascriptComponents\">\n      <img class=\"path\" src=\"assets/img/path5.png\" style=\"width: 50%;left: 40%;\"/>\n\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\n      \n      <div class=\"section\" style=\"padding: 25px 0;\">\n        <div *ngIf=\"page == 1\" class=\"container\">\n          <!--<div class=\"title\"><h3>Intermediários</h3></div>-->\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Bit Masks</h2>\n              <p class=\"text-white mt-4\">\n                O objetivo da aplicação Bit Masks é demonstrar como usar máscaras de bits para avaliar sequências mais longas de comutadores sem precisar depender de longas sequências de instruções condicionais.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Bit-Masks-App.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Book Finder App</h2>\n              <p class=\"text-white mt-4\">\n                Crie uma aplicação que permitirá aos usuários pesquisar livros inserindo uma consulta (Título, Autor, etc). Exiba os livros resultantes em uma lista na página com todos os dados correspondentes.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Book-Finder-App.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Calculator CLI</h2>\n              <p class=\"text-white mt-4\">\n                Crie uma calculadora básica com recurso de adição.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Calculator-CLI.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Card Memory Game</h2>\n              <p class=\"text-white mt-4\">\n                Card Memory é um jogo onde você tem que clicar em um cartão para ver qual imagem está embaixo dele e tentar encontrar a imagem correspondente embaixo dos outros cartões.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Card-Memory-Game.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Charity Finder App</h2>\n              <p class=\"text-white mt-4\">\n                O objetivo desta aplicação é utilizar a API de organizações de doação global para fornecer aos seus usuários uma lista de instituições de caridade globais que eles podem pesquisar para encontrar uma instituição de caridade que corresponda aos seus interesses filantrópicos.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Charity-Finder-App.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>          \n        </div>\n      </div>\n      <div class=\"section\" style=\"padding: 25px 0;\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <pagination\n                class=\"pagination-info justify-content-center\"\n                [(ngModel)]=\"page\"\n                [totalItems]=\"10\"\n                previousText=\"&lsaquo;\"\n                nextText=\"&rsaquo;\"\n                firstText=\"&laquo;\"\n                lastText=\"&raquo;\"  \n              >\n              </pagination>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>  \n</div>\n");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "S062":
/*!**********************************************************************!*\
  !*** ./src/app/pages/ideas/intermediate/intermediate.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcm1lZGlhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Sgwh":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/header/header.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        placement=\"bottom\"\n        [routerLink]=\"['/home']\"\n        tooltip=\"DevJunior.Net\"\n      >\n        <span> DevJunior•</span>Net\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a class=\"nav-item p-0\" [routerLink]=\"['/home']\" style=\"color: white;\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n            > DevJunior•Net </a>\n          </div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            [routerLink]=\"['/ideas/beginner']\"\n            placement=\"bottom\"\n            tooltip=\"Desafios Iniciantes\"\n            [attr.aria-expanded]=\"!isCollapsed\"\n            (click)=\"isCollapsed = !isCollapsed\"\n          >\n          Iniciantes\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            [routerLink]=\"['/ideas/intermediate']\"\n            placement=\"bottom\"\n            tooltip=\"Desafios Intermediários\"\n            [attr.aria-expanded]=\"!isCollapsed\"\n            (click)=\"isCollapsed = !isCollapsed\"\n          >\n          Intermediários\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            [routerLink]=\"['/ideas/advanced']\"\n            placement=\"bottom\"\n            tooltip=\"Desafios Avançados\"\n            [attr.aria-expanded]=\"!isCollapsed\"\n            (click)=\"isCollapsed = !isCollapsed\"\n          >\n          Avançados\n          </a>\n        </li>\n        <!--\n        <li class=\"dropdown nav-item\" dropdown>\n          <a\n            class=\"dropdown-toggle nav-link dropdown-toggle\"\n            data-toggle=\"dropdown\"\n            dropdownToggle\n            href=\"javascript:void(0)\"\n          >\n            <i class=\"fa fa-angle-right d-lg-none d-xl-none\"> </i> Frontend\n          </a>\n          <div class=\"dropdown-menu dropdown-with-icons\" *dropdownMenu>\n            <a class=\"dropdown-item\" [routerLink]=\"['/details']\">\n              Angular\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/details']\">\n              Javascript\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/details']\">\n              Typescript\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/list/frontend']\">\n              Ver mais\n            </a>\n          </div>\n        </li>\n        <li class=\"dropdown nav-item\" dropdown>\n          <a\n            class=\"dropdown-toggle nav-link dropdown-toggle\"\n            data-toggle=\"dropdown\"\n            dropdownToggle\n            href=\"javascript:void(0)\"\n          >\n            <i class=\"fa fa-angle-right d-lg-none d-xl-none\"> </i> Backend\n          </a>\n          <div class=\"dropdown-menu dropdown-with-icons\" *dropdownMenu>\n            <a class=\"dropdown-item\" [routerLink]=\"['/details']\">\n              Java\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/details']\">\n              Spring Boot\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/details']\">\n              Testes Unitários\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/list/backend']\">\n              Ver mais\n            </a>\n          </div>\n        </li>\n        <li class=\"dropdown nav-item\" dropdown>\n          <a\n            class=\"dropdown-toggle nav-link dropdown-toggle\"\n            data-toggle=\"dropdown\"\n            dropdownToggle\n            href=\"javascript:void(0)\"\n          >\n            <i class=\"fa fa-angle-right d-lg-none d-xl-none\"> </i> Mais\n          </a>\n          <div class=\"dropdown-menu dropdown-with-icons\" *dropdownMenu>\n            <a class=\"dropdown-item\" [routerLink]=\"['/details']\">\n              POO\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/details']\">\n              Estrutura de Dados\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/details']\">\n              Mensageria\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/list']\">\n              Ver mais\n            </a>\n          </div>\n        </li>-->\n        <!--<li class=\"nav-item\">\n          <form>\n            <div class=\"form-group\">              \n              <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                <option>Assunto 1</option>\n                <option>Assunto 2</option>\n                <option>Assunto 3</option>\n                <option>Assunto 4</option>\n                <option>Assunto 5</option>\n              </select>\n            </div>\n          </form>\n        </li>-->  \n      </ul>\n    </div>\n  </div>\n</nav>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, location, document) {
        this.renderer = renderer;
        this.location = location;
    }
    AppComponent.prototype.onWindowScroll = function (e) {
        if (window.pageYOffset > 100) {
            var element = document.getElementById("navbar-top");
            if (element) {
                element.classList.remove("navbar-transparent");
                element.classList.add("bg-default");
            }
        }
        else {
            var element = document.getElementById("navbar-top");
            if (element) {
                element.classList.add("navbar-transparent");
                element.classList.remove("bg-default");
            }
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.onWindowScroll(event);
    };
    AppComponent.prototype.onActivate = function (event) {
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    AppComponent.propDecorators = {
        onWindowScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["window:scroll", ["$event"],] }]
    };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-root",
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], Object])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "TiMl":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/details/details.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <img class=\"path\" src=\"assets/img/blob.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path2.png\" />\n\n    <img class=\"shapes triangle\" src=\"assets/img/triunghiuri.png\" />\n\n    <img class=\"shapes wave\" src=\"assets/img/waves.png\" />\n\n    <img class=\"shapes squares\" src=\"assets/img/patrat.png\" />\n\n    <img class=\"shapes circle\" src=\"assets/img/cercuri.png\" />    \n  </div>\n  <section class=\"section section-lg\">\n    <div class=\"content-center\" style=\"padding: 10%;\">\n      <div\n        class=\"row row-grid justify-content-between align-items-center text-left\"\n      >\n        <div class=\"col-lg-6 col-md-6\">\n          <h1 class=\"text-white\">\n            We keep your coin <br />\n\n            <span class=\"text-white\"> secured </span>\n          </h1>\n          <p class=\"text-white mb-3\">\n            A wonderful serenity has taken possession of my entire soul, like\n            these sweet mornings of spring which I enjoy with my whole heart. I\n            am alone, and feel...\n          </p>\n          <div class=\"btn-wrapper mb-3\">\n            <p class=\"category text-success d-inline mr-1\">From 9.99%/mo</p>\n            <a\n              class=\"btn btn-success btn-link btn-sm\"\n              href=\"javascript:void(0)\"\n            >\n              <i class=\"tim-icons icon-minimal-right\"> </i>\n            </a>\n          </div>\n          <div class=\"btn-wrapper\">\n            <div class=\"button-container\">\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-twitter\"> </i>\n              </button>\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-dribbble\"> </i>\n              </button>\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-facebook\"> </i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-5\">\n          <img\n            alt=\"Circle image\"\n            class=\"img-fluid\"\n            src=\"assets/img/etherum.png\"\n          />\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg\">\n    <section class=\"section\">\n      <img class=\"path\" src=\"assets/img/path4.png\" />\n\n      <div class=\"container\">\n        <div class=\"row row-grid justify-content-between\">\n          <div class=\"col-md-5 mt-lg-5\">\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-trophy text-warning\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">3,237</p>\n                          <p></p>\n                          <p class=\"card-category\">Awards</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats upper bg-default\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-coins text-white\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">3,653</p>\n                          <p></p>\n                          <p class=\"card-category\">Commits</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-gift-2 text-info\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">593</p>\n                          <p></p>\n                          <p class=\"card-category\">Presents</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-credit-card text-success\">\n                          </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">10,783</p>\n                          <p></p>\n                          <p class=\"card-category\">Forks</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"pl-md-5\">\n              <h1>\n                Large <br />\n\n                Achivements\n              </h1>\n              <p>\n                I should be capable of drawing a single stroke at the present\n                moment; and yet I feel that I never was a greater artist than\n                now.\n              </p>\n              <br />\n\n              <p>\n                When, while the lovely valley teems with vapour around me, and\n                the meridian sun strikes the upper surface of the impenetrable\n                foliage of my trees, and but a few stray.\n              </p>\n              <br />\n\n              <a\n                class=\"font-weight-bold text-info mt-5\"\n                href=\"javascript:void(0)\"\n              >\n                Show all <i class=\"tim-icons icon-minimal-right text-info\"> </i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </section>\n  <section class=\"section section-lg\">\n    \n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <h1 class=\"text-center\">Your best benefit</h1>\n          <div class=\"row row-grid justify-content-center\">\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-primary\">\n                  <i class=\"tim-icons icon-money-coins\"> </i>\n                </div>\n                <h4 class=\"info-title\">Low Commission</h4>\n                <hr class=\"line-primary\" />\n\n                <p>\n                  Divide details about your work into parts. Write a few lines\n                  about each one. A paragraph describing a feature will.\n                </p>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-warning\">\n                  <i class=\"tim-icons icon-chart-pie-36\"> </i>\n                </div>\n                <h4 class=\"info-title\">High Incomes</h4>\n                <hr class=\"line-warning\" />\n\n                <p>\n                  Divide details about your product or agency work into parts.\n                  Write a few lines about each one. A paragraph describing\n                  feature will be a feature.\n                </p>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-success\">\n                  <i class=\"tim-icons icon-single-02\"> </i>\n                </div>\n                <h4 class=\"info-title\">Verified People</h4>\n                <hr class=\"line-success\" />\n\n                <p>\n                  Divide details about your product or agency work into parts.\n                  Write a few lines about each one. A paragraph describing be\n                  enough.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg section-safe\">\n    <img class=\"path\" src=\"assets/img/path5.png\" />\n\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-between\">\n        <div class=\"col-md-5\">\n          <img class=\"img-fluid floating\" src=\"assets/img/chester-wade.jpg\" />\n\n          <div class=\"card card-stats bg-danger\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">100%</p>\n                  <p class=\"card-category text-white\">Safe</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-stats bg-info\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">573 K</p>\n                  <p class=\"card-category text-white\">Satisfied customers</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-stats bg-default\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">10 425</p>\n                  <p class=\"card-category text-white\">Business</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"px-md-5\">\n            <hr class=\"line-success\" />\n\n            <h3>Awesome features</h3>\n            <p>\n              The design system comes with three pre-built pages to help you get\n              started faster. You can change the text and images and you're good\n              to go.\n            </p>\n            <ul class=\"list-unstyled mt-5\">\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-vector\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Carefully crafted components</h6></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-tap-02\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Amazing page examples</h6></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-single-02\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Super friendly support team</h6></div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg\">\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <div class=\"col-md-12\">\n      <div class=\"card card-chart card-plain\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 text-left\">\n              <hr class=\"line-primary\" />\n\n              <h5 class=\"card-category\">Total Investments</h5>\n              <h2 class=\"card-title\">Performance</h2>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\"><canvas id=\"chartBig\"> </canvas></div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg section-coins\">\n    <img class=\"path\" src=\"assets/img/path3.png\" />\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <hr class=\"line-info\" />\n\n          <h1>\n            Choose the coin\n            <span class=\"text-info\"> that fits your needs </span>\n          </h1>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/bitcoin.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Light Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-primary\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">50 messages</li>\n                  <li class=\"list-group-item\">100 emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-primary btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/etherum.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Dark Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-success\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">150 messages</li>\n                  <li class=\"list-group-item\">1000 emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-success btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/ripp.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Bright Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-info\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">350 messages</li>\n                  <li class=\"list-group-item\">10K emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-info btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section> \n</div>\n");

/***/ }),

/***/ "V/Tm":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/index.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"page-header header-filter\">\n    <img class=\"path\" src=\"assets/img/path1.png\" style=\"width: 35%;left: 25%;top: 10%;\"/>\n    <div class=\"container\">\n      <div class=\"content-center brand\">\n        <h1 class=\"h1-seo\">DevJunior•Net</h1>\n        <h3 style=\"font-weight: 300;\">\n          Pratique programação com desafios de uma coleção de ideias de aplicações que podem ser usadas para melhorar suas habilidades de codificação.\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"main\">\n    <div class=\"section section-javascript\" id=\"javascriptComponents\">\n      <img class=\"path\" src=\"assets/img/path5.png\" style=\"width: 50%;left: 40%;\"/>\n\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\n      \n      <div class=\"section\" style=\"padding: 25px 0;\">\n        <div *ngIf=\"page == 1\" class=\"container\">\n          <div class=\"title\"><h3>Iniciantes</h3></div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Bin2Dec</h2>\n              <p class=\"text-white mt-4\">\n                Binário é o sistema numérico em que todos os computadores digitais se baseiam. Portanto, é importante que os desenvolvedores entendam a matemática binária ou de base 2. O objetivo do Bin2Dec é fornecer prática e compreensão sobre os cálculos binários.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Border Radius Previewer</h2>\n              <p class=\"text-white mt-4\">\n                A propriedade border-radius pode ter vários valores alterados. Visualize a aparência da forma ao alterar esses valores.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Border-Radius-Previewer.md\"\n                target=\"_blank\">                \n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Calculator</h2>\n              <p class=\"text-white mt-4\">\n                As calculadoras não são apenas uma das ferramentas mais úteis disponíveis, mas também são uma ótima maneira de entender a interface do usuário e o processamento de eventos em uma aplicação. Neste problema, você criará uma calculadora que suporta cálculos aritméticos básicos com números inteiros.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calculator-App.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Christmas Lights</h2>\n              <p class=\"text-white mt-4\">\n                A aplicação ChristmasLights conta com seus talentos de desenvolvimento para criar uma exibição de luz fascinante. Sua tarefa é desenhar sete círculos coloridos seguidos e com base em um cronômetro alterar a intensidade de cada círculo. Quando um círculo é iluminado, seu predecessor retorna à sua intensidade normal.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Christmas-Lights-App.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Cause Effect App</h2>\n              <p class=\"text-white mt-4\">\n                Os padrões são parte integrante da engenharia de software e representam componentes potencialmente reutilizáveis ​​na lógica do programa. No entanto, os padrões não são usados ​​apenas para a lógica do programa, eles existem em outros domínios, como DevOps, suporte ao usuário e interface do usuário.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Cause-Effect-App.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>          \n        </div>\n        <div *ngIf=\"page == 2\" class=\"container\">\n          <div class=\"title\"><h3>Intermediários</h3></div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Bit Masks</h2>\n              <p class=\"text-white mt-4\">\n                O objetivo da aplicação Bit Masks é demonstrar como usar máscaras de bits para avaliar sequências mais longas de comutadores sem precisar depender de longas sequências de instruções condicionais.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Bit-Masks-App.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Book Finder App</h2>\n              <p class=\"text-white mt-4\">\n                Crie uma aplicação que permitirá aos usuários pesquisar livros inserindo uma consulta (Título, Autor, etc). Exiba os livros resultantes em uma lista na página com todos os dados correspondentes.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Book-Finder-App.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Calculator CLI</h2>\n              <p class=\"text-white mt-4\">\n                Crie uma calculadora básica com recurso de adição.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Calculator-CLI.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Card Memory Game</h2>\n              <p class=\"text-white mt-4\">\n                Card Memory é um jogo onde você tem que clicar em um cartão para ver qual imagem está embaixo dele e tentar encontrar a imagem correspondente embaixo dos outros cartões.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Card-Memory-Game.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Charity Finder App</h2>\n              <p class=\"text-white mt-4\">\n                O objetivo desta aplicação é utilizar a API de organizações de doação global para fornecer aos seus usuários uma lista de instituições de caridade globais que eles podem pesquisar para encontrar uma instituição de caridade que corresponda aos seus interesses filantrópicos.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Charity-Finder-App.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>          \n        </div>\n        <div *ngIf=\"page == 3\" class=\"container\">\n          <div class=\"title\"><h3>Avançados</h3></div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Battleship Game Engine</h2>\n              <p class=\"text-white mt-4\">\n                O Battleship Game Engine (BGE) implementa o clássico jogo de tabuleiro baseado em turnos como um pacote separado de qualquer camada de apresentação. Esse é um tipo de padrão de arquitetura útil em muitas aplicações, pois permite que qualquer número de aplicações utilizem o mesmo serviço.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Battleship-Game-Engine.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Battleship Bot</h2>\n              <p class=\"text-white mt-4\">\n                Battleship Bot leva o Battleship Game Engine para o próximo nível. Este desafio usa seu Battleship Game Engine para criar uma camada de apresentação usando a API de bot do Discord para permitir que você jogue o jogo por meio de um bate-papo do Discord.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Battleship-Bot.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>          \n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Boole Bots Game</h2>\n              <p class=\"text-white mt-4\">\n                Boole Bots é um jogo que não é apenas divertido, mas também ajuda a entender a lógica booleana básica. Este jogo tem uma arena de 8x8 peças de jogo em que seus bots se movem em velocidades e trajetórias aleatórias. Os Bots recebem valores booleanos de 0 ou 1 e operações booleanas - AND, OR, NOR, NOT.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Boole-Bot-Game.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Calendar</h2>\n              <p class=\"text-white mt-4\">\n                Crie uma aplicação de calendário para organizar sua vida diária. Adicione funcionalidade para adicionar eventos e lembretes.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calendar-App.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Calorie Counter</h2>\n              <p class=\"text-white mt-4\">\n                O objetivo da aplicação Calorie Counter é ajudar o usuário a atender às necessidades nutricionais contando calorias para vários alimentos.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Calorie-Counter-App.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>          \n        </div>        \n      </div>\n      <div class=\"section\" style=\"padding: 25px 0;\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <pagination\n                class=\"pagination-info justify-content-center\"\n                [(ngModel)]=\"page\"\n                [totalItems]=\"30\"\n                previousText=\"&lsaquo;\"\n                nextText=\"&rsaquo;\"\n                firstText=\"&laquo;\"\n                lastText=\"&raquo;\"  \n              >\n              </pagination>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>  \n</div>\n");

/***/ }),

/***/ "Vs9a":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/registerpage/registerpage.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> BLK• </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> BLK• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <div class=\"page-header-image\"></div>\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-5 col-md-6 offset-lg-0 offset-md-3\">\n            <div class=\"square square-7\" id=\"square7\"></div>\n            <div class=\"square square-8\" id=\"square8\"></div>\n            <div class=\"card card-register\">\n              <div class=\"card-header\">\n                <img\n                  alt=\"Card image\"\n                  class=\"card-img\"\n                  src=\"assets/img/square1-red.png\"\n                />\n\n                <h4 class=\"card-title\">Register</h4>\n              </div>\n              <div class=\"card-body\">\n                <form class=\"form\">\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-single-02\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Full Name\"\n                      type=\"text\"\n                      (focus)=\"focus = true\"\n                      (blur)=\"focus = false\"\n                    />\n                  </div>\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus1 === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-email-85\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Email\"\n                      type=\"text\"\n                      (focus)=\"focus1 = true\"\n                      (blur)=\"focus1 = false\"\n                    />\n                  </div>\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus2 === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-lock-circle\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Password\"\n                      type=\"text\"\n                      (focus)=\"focus2 = true\"\n                      (blur)=\"focus2 = false\"\n                    />\n                  </div>\n                  <div class=\"form-check text-left\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" />\n\n                      <span class=\"form-check-sign\"> </span> I agree to the\n                      <a href=\"javascript:void(0)\"> terms and conditions </a> .\n                    </label>\n                  </div>\n                </form>\n              </div>\n              <div class=\"card-footer\">\n                <a\n                  class=\"btn btn-danger btn-round btn-lg\"\n                  href=\"javascript:void(0)\"\n                >\n                  Get Started\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"register-bg\"></div>\n        <div class=\"square square-1\" id=\"square1\"></div>\n        <div class=\"square square-2\" id=\"square2\"></div>\n        <div class=\"square square-3\" id=\"square3\"></div>\n        <div class=\"square square-4\" id=\"square4\"></div>\n        <div class=\"square square-5\" id=\"square5\"></div>\n        <div class=\"square square-6\" id=\"square6\"></div>\n      </div>\n    </div>\n  </div>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">BLK•</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog?ref=blkdsa-footer\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "WhX/":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ideas/beginner/beginner.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"page-header header-filter\">\n    <img class=\"path\" src=\"assets/img/path1.png\" style=\"width: 35%;left: 25%;top: 10%;\"/>\n    <div class=\"container\">\n      <div class=\"content-center brand\">\n        <h1 class=\"h1-seo\" style=\"font-size: 3em; font-weight: 300;\">Desafios Iniciantes</h1>\n        <h3 style=\"font-weight: 300;\">\n            Desenvolvedores nos estágios iniciais de sua jornada de aprendizado. Aqueles que normalmente estão focados na criação de aplicações voltadas para o usuário.\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"main\">\n    <div class=\"section section-javascript\" id=\"javascriptComponents\">\n      <img class=\"path\" src=\"assets/img/path5.png\" style=\"width: 50%;left: 40%;\"/>\n\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\n      \n      <div class=\"section\" style=\"padding: 25px 0;\">\n        <div *ngIf=\"page == 1\" class=\"container\">\n          <!--<div class=\"title\"><h3>Iniciantes</h3></div>-->\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Bin2Dec</h2>\n              <p class=\"text-white mt-4\">\n                Binário é o sistema numérico em que todos os computadores digitais se baseiam. Portanto, é importante que os desenvolvedores entendam a matemática binária ou de base 2. O objetivo do Bin2Dec é fornecer prática e compreensão sobre os cálculos binários.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Border Radius Previewer</h2>\n              <p class=\"text-white mt-4\">\n                A propriedade border-radius pode ter vários valores alterados. Visualize a aparência da forma ao alterar esses valores.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Border-Radius-Previewer.md\"\n                target=\"_blank\">                \n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Calculator</h2>\n              <p class=\"text-white mt-4\">\n                As calculadoras não são apenas uma das ferramentas mais úteis disponíveis, mas também são uma ótima maneira de entender a interface do usuário e o processamento de eventos em uma aplicação. Neste problema, você criará uma calculadora que suporta cálculos aritméticos básicos com números inteiros.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calculator-App.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Christmas Lights</h2>\n              <p class=\"text-white mt-4\">\n                A aplicação ChristmasLights conta com seus talentos de desenvolvimento para criar uma exibição de luz fascinante. Sua tarefa é desenhar sete círculos coloridos seguidos e com base em um cronômetro alterar a intensidade de cada círculo. Quando um círculo é iluminado, seu predecessor retorna à sua intensidade normal.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Christmas-Lights-App.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Cause Effect App</h2>\n              <p class=\"text-white mt-4\">\n                Os padrões são parte integrante da engenharia de software e representam componentes potencialmente reutilizáveis ​​na lógica do programa. No entanto, os padrões não são usados ​​apenas para a lógica do programa, eles existem em outros domínios, como DevOps, suporte ao usuário e interface do usuário.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\"\n                href=\"https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Cause-Effect-App.md\"\n                target=\"_blank\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>          \n        </div>\n      </div>\n      <div class=\"section\" style=\"padding: 25px 0;\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <pagination\n                class=\"pagination-info justify-content-center\"\n                [(ngModel)]=\"page\"\n                [totalItems]=\"10\"\n                previousText=\"&lsaquo;\"\n                nextText=\"&rsaquo;\"\n                firstText=\"&laquo;\"\n                lastText=\"&raquo;\"  \n              >\n              </pagination>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>  \n</div>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var _components_menu_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/menu/header/header.component */ "drjC");
/* harmony import */ var _components_menu_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/menu/footer/footer.component */ "K95V");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_menu_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _components_menu_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]
                // IndexComponent,
                // ProfilepageComponent,
                // RegisterpageComponent,
                // LandingpageComponent
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(),
                // ProgressbarModule.forRoot(),
                // TooltipModule.forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(),
                // TabsModule.forRoot(),
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_10__["PagesModule"]
                // PaginationModule.forRoot(),
                // AlertModule.forRoot(),
                // BsDatepickerModule.forRoot(),
                // CarouselModule.forRoot(),
                // ModalModule.forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "b7v9":
/*!****************************************************!*\
  !*** ./src/app/pages/details/details.component.ts ***!
  \****************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./details.component.html */ "TiMl");
/* harmony import */ var _details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.component.scss */ "hqzq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);





var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
        this.isCollapsed = true;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("landing-page");
        var canvas = document.getElementById("chartBig");
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
        gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
        gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
        var chartBig = new chart_js__WEBPACK_IMPORTED_MODULE_4___default.a(ctx, {
            type: "line",
            responsive: true,
            data: {
                labels: [
                    "JUN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC"
                ],
                datasets: [
                    {
                        label: "Data",
                        fill: true,
                        backgroundColor: gradientFill,
                        borderColor: "#e44cc4",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: "#e44cc4",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "#be55ed",
                        //pointHoverBorderColor:'rgba(35,46,55,1)',
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: [80, 160, 200, 160, 250, 280, 220, 190, 200, 250, 290, 320]
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    backgroundColor: "#fff",
                    titleFontColor: "#ccc",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest"
                },
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0.0)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                display: false,
                                suggestedMin: 0,
                                suggestedMax: 350,
                                padding: 20,
                                fontColor: "#9a9a9a"
                            }
                        }
                    ],
                    xAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9a9a9a"
                            }
                        }
                    ]
                }
            }
        });
    };
    DetailsComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("landing-page");
    };
    DetailsComponent.ctorParameters = function () { return []; };
    DetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-details',
            template: _raw_loader_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "daNH":
/*!**************************************************************!*\
  !*** ./src/app/components/menu/header/header.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "yyhP");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/alert */ "psEu");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./index/index.component */ "sqmE");
/* harmony import */ var _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/profilepage/profilepage.component */ "F149");
/* harmony import */ var _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./examples/registerpage/registerpage.component */ "r5Xs");
/* harmony import */ var _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./examples/landingpage/landingpage.component */ "IfWR");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./details/details.component */ "b7v9");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./list/list.component */ "kzYG");
/* harmony import */ var _list_frontend_frontend_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./list/frontend/frontend.component */ "6OTY");
/* harmony import */ var _list_backend_backend_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./list/backend/backend.component */ "4Tzv");
/* harmony import */ var _ideas_beginner_beginner_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ideas/beginner/beginner.component */ "h5Uv");
/* harmony import */ var _ideas_intermediate_intermediate_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ideas/intermediate/intermediate.component */ "sZma");
/* harmony import */ var _ideas_advanced_advanced_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ideas/advanced/advanced.component */ "0Sra");



























var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                //BsDropdownModule.forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_15__["PopoverModule"].forRoot(),
                // CollapseModule.forRoot(),
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_14__["JwBootstrapSwitchNg2Module"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_10__["AlertModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot()
            ],
            declarations: [
                _index_index_component__WEBPACK_IMPORTED_MODULE_16__["IndexComponent"],
                _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_17__["ProfilepageComponent"],
                _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_18__["RegisterpageComponent"],
                _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_19__["LandingpageComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_20__["DetailsComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_21__["ListComponent"],
                _list_frontend_frontend_component__WEBPACK_IMPORTED_MODULE_22__["FrontendComponent"],
                _list_backend_backend_component__WEBPACK_IMPORTED_MODULE_23__["BackendComponent"],
                _ideas_beginner_beginner_component__WEBPACK_IMPORTED_MODULE_24__["BeginnerComponent"],
                _ideas_intermediate_intermediate_component__WEBPACK_IMPORTED_MODULE_25__["IntermediateComponent"],
                _ideas_advanced_advanced_component__WEBPACK_IMPORTED_MODULE_26__["AdvancedComponent"]
            ],
            exports: [
                _index_index_component__WEBPACK_IMPORTED_MODULE_16__["IndexComponent"],
                _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_17__["ProfilepageComponent"],
                _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_18__["RegisterpageComponent"],
                _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_19__["LandingpageComponent"]
            ],
            providers: []
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "drjC":
/*!************************************************************!*\
  !*** ./src/app/components/menu/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "Sgwh");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "daNH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.isCollapsed = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.ctorParameters = function () { return []; };
    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-header',
            template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "foPA":
/*!**************************************************************!*\
  !*** ./src/app/components/menu/footer/footer.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "h5Uv":
/*!************************************************************!*\
  !*** ./src/app/pages/ideas/beginner/beginner.component.ts ***!
  \************************************************************/
/*! exports provided: BeginnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeginnerComponent", function() { return BeginnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_beginner_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./beginner.component.html */ "WhX/");
/* harmony import */ var _beginner_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beginner.component.scss */ "0R/P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var BeginnerComponent = /** @class */ (function () {
    function BeginnerComponent() {
        this.page = 1;
    }
    BeginnerComponent.prototype.scrollToDownload = function (element) {
        element.scrollIntoView({ behavior: "smooth" });
    };
    BeginnerComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("index-page");
    };
    BeginnerComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("index-page");
    };
    BeginnerComponent.ctorParameters = function () { return []; };
    BeginnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-beginner',
            template: _raw_loader_beginner_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_beginner_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BeginnerComponent);
    return BeginnerComponent;
}());



/***/ }),

/***/ "hqzq":
/*!******************************************************!*\
  !*** ./src/app/pages/details/details.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "kzYG":
/*!**********************************************!*\
  !*** ./src/app/pages/list/list.component.ts ***!
  \**********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list.component.html */ "mn8A");
/* harmony import */ var _list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.component.scss */ "IGfe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.page = 1;
    }
    ListComponent.prototype.scrollToDownload = function (element) {
        element.scrollIntoView({ behavior: "smooth" });
    };
    ListComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("index-page");
    };
    ListComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("index-page");
    };
    ListComponent.ctorParameters = function () { return []; };
    ListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-list',
            template: _raw_loader_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "mn8A":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/list.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"page-header header-filter\">\n    <img class=\"path\" src=\"assets/img/path1.png\" style=\"width: 35%;left: 25%;top: 10%;\"/>\n    <div class=\"container\">\n      <div class=\"content-center brand\">\n        <h1 class=\"h1-seo\" style=\"font-size: 3em; font-weight: 300;\">Base de Conhecimento</h1><!--Trazer esse título por input-->\n        <h3 style=\"font-weight: 300;\">\n          Diversos assuntos relacionados a programação em um só lugar.<!--Trazer esse descritivo por input-->\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"main\">\n    <div class=\"section section-javascript\" id=\"javascriptComponents\">\n      <img class=\"path\" src=\"assets/img/path5.png\" style=\"width: 50%;left: 40%;\"/>\n\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\n      \n      <div class=\"section\" style=\"padding: 25px 0;\">\n        <div *ngIf=\"page == 1\" class=\"container\">\n          <div class=\"title\"><h3>Publicados recentemente</h3></div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Programação Orientada a Objetos</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Estrutura de Dados</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Mensageria</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Microsserviços</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">APIs</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>          \n        </div>\n        <div *ngIf=\"page == 2\" class=\"container\">\n          <div class=\"title\"><h3>Publicados recentemente</h3></div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Testes Unitários</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Git</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Jenkins</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Sonar</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Fortify</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>          \n        </div>\n        <div *ngIf=\"page == 3\" class=\"container\">\n          <div class=\"title\"><h3>Publicados recentemente</h3></div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Spring Initializr</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Spring Framework</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Spring Boot</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Spring | Principais Conceitos</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Spring Projects</h2>\n              <p class=\"text-white mt-4\">\n                https://spring.io/projects\n                \n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>          \n        </div>\n        <div *ngIf=\"page == 4\" class=\"container\">\n          <div class=\"title\"><h3>Publicados recentemente</h3></div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Angular</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">JavaScript</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">TypeScript</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">CSS</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">HTML</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>          \n        </div>\n      </div>\n      <div class=\"section\" style=\"padding: 25px 0;\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <pagination\n                class=\"pagination-info justify-content-center\"\n                [(ngModel)]=\"page\"\n                [totalItems]=\"40\"\n                previousText=\"&lsaquo;\"\n                nextText=\"&rsaquo;\"\n                firstText=\"&laquo;\"\n                lastText=\"&raquo;\"  \n              >\n              </pagination>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>  \n</div>\n");

/***/ }),

/***/ "r5Xs":
/*!***********************************************************************!*\
  !*** ./src/app/pages/examples/registerpage/registerpage.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterpageComponent", function() { return RegisterpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registerpage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registerpage.component.html */ "Vs9a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var RegisterpageComponent = /** @class */ (function () {
    function RegisterpageComponent() {
        this.isCollapsed = true;
    }
    RegisterpageComponent.prototype.onMouseMove = function (e) {
        var squares1 = document.getElementById("square1");
        var squares2 = document.getElementById("square2");
        var squares3 = document.getElementById("square3");
        var squares4 = document.getElementById("square4");
        var squares5 = document.getElementById("square5");
        var squares6 = document.getElementById("square6");
        var squares7 = document.getElementById("square7");
        var squares8 = document.getElementById("square8");
        var posX = e.clientX - window.innerWidth / 2;
        var posY = e.clientY - window.innerWidth / 6;
        squares1.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares2.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares3.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares4.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares5.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares6.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares7.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)";
        squares8.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)";
    };
    RegisterpageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("register-page");
        this.onMouseMove(event);
    };
    RegisterpageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("register-page");
    };
    RegisterpageComponent.ctorParameters = function () { return []; };
    RegisterpageComponent.propDecorators = {
        onMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ["document:mousemove", ["$event"],] }]
    };
    RegisterpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-registerpage",
            template: _raw_loader_registerpage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], RegisterpageComponent);
    return RegisterpageComponent;
}());



/***/ }),

/***/ "sZma":
/*!********************************************************************!*\
  !*** ./src/app/pages/ideas/intermediate/intermediate.component.ts ***!
  \********************************************************************/
/*! exports provided: IntermediateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntermediateComponent", function() { return IntermediateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_intermediate_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./intermediate.component.html */ "KoLJ");
/* harmony import */ var _intermediate_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intermediate.component.scss */ "S062");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var IntermediateComponent = /** @class */ (function () {
    function IntermediateComponent() {
        this.page = 1;
    }
    IntermediateComponent.prototype.scrollToDownload = function (element) {
        element.scrollIntoView({ behavior: "smooth" });
    };
    IntermediateComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("index-page");
    };
    IntermediateComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("index-page");
    };
    IntermediateComponent.ctorParameters = function () { return []; };
    IntermediateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-intermediate',
            template: _raw_loader_intermediate_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_intermediate_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], IntermediateComponent);
    return IntermediateComponent;
}());



/***/ }),

/***/ "sqmE":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index.component.html */ "V/Tm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        this.page = 1;
    }
    IndexComponent.prototype.scrollToDownload = function (element) {
        element.scrollIntoView({ behavior: "smooth" });
    };
    IndexComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("index-page");
    };
    IndexComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("index-page");
    };
    IndexComponent.ctorParameters = function () { return []; };
    IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-index",
            template: _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index/index.component */ "sqmE");
/* harmony import */ var _pages_examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/examples/profilepage/profilepage.component */ "F149");
/* harmony import */ var _pages_examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/examples/registerpage/registerpage.component */ "r5Xs");
/* harmony import */ var _pages_examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/examples/landingpage/landingpage.component */ "IfWR");
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/details/details.component */ "b7v9");
/* harmony import */ var _pages_list_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/list/list.component */ "kzYG");
/* harmony import */ var _pages_list_frontend_frontend_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/list/frontend/frontend.component */ "6OTY");
/* harmony import */ var _pages_list_backend_backend_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/list/backend/backend.component */ "4Tzv");
/* harmony import */ var _pages_ideas_beginner_beginner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/ideas/beginner/beginner.component */ "h5Uv");
/* harmony import */ var _pages_ideas_intermediate_intermediate_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/ideas/intermediate/intermediate.component */ "sZma");
/* harmony import */ var _pages_ideas_advanced_advanced_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/ideas/advanced/advanced.component */ "0Sra");
















var routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"] },
    { path: "profile", component: _pages_examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_6__["ProfilepageComponent"] },
    { path: "register", component: _pages_examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_7__["RegisterpageComponent"] },
    { path: "landing", component: _pages_examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_8__["LandingpageComponent"] },
    { path: "details", component: _pages_details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"] },
    { path: "list", component: _pages_list_list_component__WEBPACK_IMPORTED_MODULE_10__["ListComponent"] },
    { path: "list/frontend", component: _pages_list_frontend_frontend_component__WEBPACK_IMPORTED_MODULE_11__["FrontendComponent"] },
    { path: "list/backend", component: _pages_list_backend_backend_component__WEBPACK_IMPORTED_MODULE_12__["BackendComponent"] },
    { path: "ideas/beginner", component: _pages_ideas_beginner_beginner_component__WEBPACK_IMPORTED_MODULE_13__["BeginnerComponent"] },
    { path: "ideas/intermediate", component: _pages_ideas_intermediate_intermediate_component__WEBPACK_IMPORTED_MODULE_14__["IntermediateComponent"] },
    { path: "ideas/advanced", component: _pages_ideas_advanced_advanced_component__WEBPACK_IMPORTED_MODULE_15__["AdvancedComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "xfGB":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/backend/backend.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"page-header header-filter\">\n    <img class=\"path\" src=\"assets/img/path1.png\" style=\"width: 35%;left: 25%;top: 10%;\"/>\n    <div class=\"container\">\n      <div class=\"content-center brand\">\n        <h1 class=\"h1-seo\" style=\"font-size: 3em; font-weight: 300;\">Backend</h1><!--Trazer esse título por input-->\n        <h3 style=\"font-weight: 300;\">\n            Backend é a estrutura que possibilita a operação do sistema, enquanto o frontend é responsável pela parte visual, como apresentação, design, linguagens, cores, entre outros.\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"main\">\n    <div class=\"section section-javascript\" id=\"javascriptComponents\">\n      <img class=\"path\" src=\"assets/img/path5.png\" style=\"width: 50%;left: 40%;\"/>\n\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\n      \n      <div class=\"section\" style=\"padding: 25px 0;\">\n        <div *ngIf=\"page == 1\" class=\"container\">\n          <div class=\"title\"><h3>Publicados recentemente</h3></div>          \n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Microsserviços</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">APIs</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div> \n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Testes Unitários</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Git</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Jenkins</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>         \n        </div>\n        <div *ngIf=\"page == 2\" class=\"container\">\n          <div class=\"title\"><h3>Publicados recentemente</h3></div>          \n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Sonar</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Fortify</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div> \n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Spring Initializr</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Spring Framework</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Spring Boot</h2>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>         \n        </div>\n        <div *ngIf=\"page == 3\" class=\"container\">\n          <div class=\"title\"><h3>Publicados recentemente</h3></div>                    \n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-12 mb-5 mb-lg-0\">\n              <h2 class=\"text-white font-weight-light\">Spring Projects</h2>\n              <p class=\"text-white mt-4\">\n                https://spring.io/projects\n                \n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a class=\"btn btn-default btn-sm mt-4 mb-5\" [routerLink]=\"['/details']\">\n                Continuar lendo <i class=\"fa fa-angle-right\"> </i>\n              </a>\n            </div>\n          </div>          \n        </div>\n      </div>\n      <div class=\"section\" style=\"padding: 25px 0;\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <pagination\n                class=\"pagination-info justify-content-center\"\n                [(ngModel)]=\"page\"\n                [totalItems]=\"30\"\n                previousText=\"&lsaquo;\"\n                nextText=\"&rsaquo;\"\n                firstText=\"&laquo;\"\n                lastText=\"&raquo;\"  \n              >\n              </pagination>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>  \n</div>\n");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*
=========================================================
* BLK Design System Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-angular
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map