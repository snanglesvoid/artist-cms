function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/page/page.component */
    "./src/app/components/page/page.component.ts");
    /* harmony import */


    var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home-page/home-page.component */
    "./src/app/components/home-page/home-page.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
    }, {
      path: ':slug',
      component: _components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/nav/nav.component */
    "./src/app/components/nav/nav.component.ts");
    /* harmony import */


    var _components_modal_images_modal_images_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/modal-images/modal-images.component */
    "./src/app/components/modal-images/modal-images.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'frontend';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-modal-images");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _components_modal_images_modal_images_component__WEBPACK_IMPORTED_MODULE_3__["ModalImagesComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.less']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_page_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/page/page.component */
    "./src/app/components/page/page.component.ts");
    /* harmony import */


    var _components_markdown_markdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/markdown/markdown.component */
    "./src/app/components/markdown/markdown.component.ts");
    /* harmony import */


    var _components_image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/image-gallery/image-gallery.component */
    "./src/app/components/image-gallery/image-gallery.component.ts");
    /* harmony import */


    var _components_picture_picture_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/picture/picture.component */
    "./src/app/components/picture/picture.component.ts");
    /* harmony import */


    var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/nav/nav.component */
    "./src/app/components/nav/nav.component.ts");
    /* harmony import */


    var _components_text_flip_text_flip_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/text-flip/text-flip.component */
    "./src/app/components/text-flip/text-flip.component.ts");
    /* harmony import */


    var _components_masonry_masonry_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/masonry/masonry.component */
    "./src/app/components/masonry/masonry.component.ts");
    /* harmony import */


    var _scroll_to_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./scroll-to.directive */
    "./src/app/scroll-to.directive.ts");
    /* harmony import */


    var _components_three_d_heading_three_d_heading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/three-d-heading/three-d-heading.component */
    "./src/app/components/three-d-heading/three-d-heading.component.ts");
    /* harmony import */


    var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/home-page/home-page.component */
    "./src/app/components/home-page/home-page.component.ts");
    /* harmony import */


    var _components_modal_images_modal_images_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/modal-images/modal-images.component */
    "./src/app/components/modal-images/modal-images.component.ts");
    /* harmony import */


    var _components_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/slideshow/slideshow.component */
    "./src/app/components/slideshow/slideshow.component.ts");
    /* harmony import */


    var _components_slideshow_controller_slideshow_controller_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/slideshow-controller/slideshow-controller.component */
    "./src/app/components/slideshow-controller/slideshow-controller.component.ts");
    /* harmony import */


    var _modal_images_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./modal-images.directive */
    "./src/app/modal-images.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_page_page_component__WEBPACK_IMPORTED_MODULE_7__["PageComponent"], _components_markdown_markdown_component__WEBPACK_IMPORTED_MODULE_8__["MarkdownComponent"], _components_image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_9__["ImageGalleryComponent"], _components_picture_picture_component__WEBPACK_IMPORTED_MODULE_10__["PictureComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"], _components_text_flip_text_flip_component__WEBPACK_IMPORTED_MODULE_12__["TextFlipComponent"], _components_masonry_masonry_component__WEBPACK_IMPORTED_MODULE_13__["MasonryComponent"], _scroll_to_directive__WEBPACK_IMPORTED_MODULE_14__["ScrollToDirective"], _components_three_d_heading_three_d_heading_component__WEBPACK_IMPORTED_MODULE_15__["ThreeDHeadingComponent"], _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_16__["HomePageComponent"], _components_modal_images_modal_images_component__WEBPACK_IMPORTED_MODULE_17__["ModalImagesComponent"], _components_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_18__["SlideshowComponent"], _components_slideshow_controller_slideshow_controller_component__WEBPACK_IMPORTED_MODULE_19__["SlideshowControllerComponent"], _modal_images_directive__WEBPACK_IMPORTED_MODULE_20__["ModalImagesDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_page_page_component__WEBPACK_IMPORTED_MODULE_7__["PageComponent"], _components_markdown_markdown_component__WEBPACK_IMPORTED_MODULE_8__["MarkdownComponent"], _components_image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_9__["ImageGalleryComponent"], _components_picture_picture_component__WEBPACK_IMPORTED_MODULE_10__["PictureComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"], _components_text_flip_text_flip_component__WEBPACK_IMPORTED_MODULE_12__["TextFlipComponent"], _components_masonry_masonry_component__WEBPACK_IMPORTED_MODULE_13__["MasonryComponent"], _scroll_to_directive__WEBPACK_IMPORTED_MODULE_14__["ScrollToDirective"], _components_three_d_heading_three_d_heading_component__WEBPACK_IMPORTED_MODULE_15__["ThreeDHeadingComponent"], _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_16__["HomePageComponent"], _components_modal_images_modal_images_component__WEBPACK_IMPORTED_MODULE_17__["ModalImagesComponent"], _components_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_18__["SlideshowComponent"], _components_slideshow_controller_slideshow_controller_component__WEBPACK_IMPORTED_MODULE_19__["SlideshowControllerComponent"], _modal_images_directive__WEBPACK_IMPORTED_MODULE_20__["ModalImagesDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorModule"].forRoot()],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home-page/home-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/home-page/home-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppComponentsHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/settings.service */
    "./src/app/settings.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _three_d_heading_three_d_heading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../three-d-heading/three-d-heading.component */
    "./src/app/components/three-d-heading/three-d-heading.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var HomePageComponent =
    /*#__PURE__*/
    function () {
      function HomePageComponent(settings, sanitizer) {
        var _this = this;

        _classCallCheck(this, HomePageComponent);

        this.settings = settings;
        this.sanitizer = sanitizer;
        this.backgroundUrl$ = this.settings.titleImage$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
          return _this.sanitizer.bypassSecurityTrustUrl(x);
        }));
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
      return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]));
    };

    HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["app-home-page"]],
      decls: 8,
      vars: 9,
      consts: [[3, "text", "texture"], [1, "page"], [1, "background", 3, "src"]],
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-three-d-heading", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.settings.bannerText$))("texture", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx.settings.bannerTexture$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, ctx.backgroundUrl$), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_three_d_heading_three_d_heading_component__WEBPACK_IMPORTED_MODULE_4__["ThreeDHeadingComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".background[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  z-index: -1;\n  width: 100vw;\n  height: 100vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvQzovVXNlcnMvamFuaWtpL0RvY3VtZW50cy93b3JrL2p1bGUvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogLTE7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59IiwiLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-page',
          templateUrl: './home-page.component.html',
          styleUrls: ['./home-page.component.less']
        }]
      }], function () {
        return [{
          type: src_app_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/image-gallery/image-gallery.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/image-gallery/image-gallery.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ImageGalleryComponent */

  /***/
  function srcAppComponentsImageGalleryImageGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageGalleryComponent", function () {
      return ImageGalleryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_lib_observeProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/lib/observeProperty */
    "./src/app/lib/observeProperty.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_components_masonry_masonry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/masonry/masonry.component */
    "./src/app/components/masonry/masonry.component.ts");
    /* harmony import */


    var src_app_services_graphql_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/graphql-api.service */
    "./src/app/services/graphql-api.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _modal_images_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../modal-images.directive */
    "./src/app/modal-images.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _scroll_to_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../scroll-to.directive */
    "./src/app/scroll-to.directive.ts");

    function ImageGalleryComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inViewport", function ImageGalleryComponent_div_2_Template_div_inViewport_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.inViewportChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImageGalleryComponent_div_2_Template_img_load_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.imageLoaded($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var picture_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", 0.4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", picture_r3.safeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ImageGalleryComponent =
    /*#__PURE__*/
    function () {
      function ImageGalleryComponent(api, sanitizer) {
        _classCallCheck(this, ImageGalleryComponent);

        this.api = api;
        this.sanitizer = sanitizer;
        this.gallery$ = Object(src_app_lib_observeProperty__WEBPACK_IMPORTED_MODULE_1__["observeProperty"])(this, 'gallery');
      }

      _createClass(ImageGalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.pictures$ = this.gallery$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (gallery) {
            var query = "\n          query($id: ID!) {\n            ImageGallery(where: {id: $id}) {\n              pictures {\n                title\n                gridArea\n                picture {\n                  publicUrl\n                }\n              }\n            }\n          }\n        ";
            var variables = {
              id: gallery.id
            };
            return _this2.api.graphql(query, variables);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
            return x.data.ImageGallery.pictures;
          }), // tap(console.log),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (xs) {
            return xs.filter(function (x) {
              return x.picture && x.picture.publicUrl;
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (xs) {
            return xs.forEach(function (x) {
              return x.safeUrl = _this2.safeUrl(x);
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (xs) {
            return xs.sort(function (a, b) {
              return a.gridArea - b.gridArea;
            });
          }));
          window.gallery = this;
        }
      }, {
        key: "safeUrl",
        value: function safeUrl(picture) {
          console.log('safeUrl');
          return this.sanitizer.bypassSecurityTrustResourceUrl(picture.picture.publicUrl);
        }
      }, {
        key: "imageLoaded",
        value: function imageLoaded(event) {
          var img;
          img = event.target;
          console.log('image loaded', event.target);
          img.style.opacity = '1.0';
          img.parentElement.classList.add('in-view');
          this.masonry.pack();
        }
      }, {
        key: "inViewportChange",
        value: function inViewportChange(event) {
          // console.log('change')
          var gridItem = event.el.nativeElement;
          var pos = event.pos;

          if (pos < 1) {
            gridItem.classList.add('in-view');
          } else {
            gridItem.classList.remove('in-view');
          }
        }
      }]);

      return ImageGalleryComponent;
    }();

    ImageGalleryComponent.ɵfac = function ImageGalleryComponent_Factory(t) {
      return new (t || ImageGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_graphql_api_service__WEBPACK_IMPORTED_MODULE_4__["GraphqlApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]));
    };

    ImageGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageGalleryComponent,
      selectors: [["app-image-gallery"]],
      viewQuery: function ImageGalleryComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](src_app_components_masonry_masonry_component__WEBPACK_IMPORTED_MODULE_3__["MasonryComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.masonry = _t.first);
        }
      },
      inputs: {
        gallery: "gallery"
      },
      decls: 4,
      vars: 3,
      consts: [["appModalImages", ""], ["masonry", ""], ["class", "grid-item", "appScrollTo", "", 3, "ratio", "inViewport", 4, "ngFor", "ngForOf"], ["appScrollTo", "", 1, "grid-item", 3, "ratio", "inViewport"], ["gridItem", ""], ["alt", "", 3, "src", "load"]],
      template: function ImageGalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-masonry", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageGalleryComponent_div_2_Template, 3, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.pictures$));
        }
      },
      directives: [src_app_components_masonry_masonry_component__WEBPACK_IMPORTED_MODULE_3__["MasonryComponent"], _modal_images_directive__WEBPACK_IMPORTED_MODULE_6__["ModalImagesDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _scroll_to_directive__WEBPACK_IMPORTED_MODULE_8__["ScrollToDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtZ2FsbGVyeS9pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-image-gallery',
          templateUrl: './image-gallery.component.html',
          styleUrls: ['./image-gallery.component.less']
        }]
      }], function () {
        return [{
          type: src_app_services_graphql_api_service__WEBPACK_IMPORTED_MODULE_4__["GraphqlApiService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }];
      }, {
        gallery: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        masonry: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [src_app_components_masonry_masonry_component__WEBPACK_IMPORTED_MODULE_3__["MasonryComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/markdown/markdown.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/markdown/markdown.component.ts ***!
    \***********************************************************/

  /*! exports provided: MarkdownComponent */

  /***/
  function srcAppComponentsMarkdownMarkdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkdownComponent", function () {
      return MarkdownComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var MarkdownComponent =
    /*#__PURE__*/
    function () {
      function MarkdownComponent(sanitizer) {
        _classCallCheck(this, MarkdownComponent);

        this.sanitizer = sanitizer;
        this._markdown = '';
      }

      _createClass(MarkdownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "markdown",
        get: function get() {
          return this._markdown;
        },
        set: function set(value) {
          this._markdown = value;
          this._html = marked(value);
        }
      }, {
        key: "html",
        get: function get() {
          return this.sanitizer.bypassSecurityTrustHtml(this._html);
        }
      }]);

      return MarkdownComponent;
    }();

    MarkdownComponent.ɵfac = function MarkdownComponent_Factory(t) {
      return new (t || MarkdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    MarkdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MarkdownComponent,
      selectors: [["app-markdown"]],
      inputs: {
        markdown: "markdown"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "innerHTML"]],
      template: function MarkdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.html, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFya2Rvd24vbWFya2Rvd24uY29tcG9uZW50Lmxlc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-markdown',
          templateUrl: './markdown.component.html',
          styleUrls: ['./markdown.component.less']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, {
        markdown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/masonry/masonry.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/masonry/masonry.component.ts ***!
    \*********************************************************/

  /*! exports provided: MasonryComponent */

  /***/
  function srcAppComponentsMasonryMasonryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MasonryComponent", function () {
      return MasonryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/client.service */
    "./src/app/services/client.service.ts");
    /* harmony import */


    var src_app_services_easing_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/easing-functions.service */
    "./src/app/services/easing-functions.service.ts");

    var _c0 = ["gridItem"];
    var _c1 = ["grid"];
    var _c2 = ["*"];

    var MasonryComponent =
    /*#__PURE__*/
    function () {
      function MasonryComponent(client, el, easingFunctions) {
        _classCallCheck(this, MasonryComponent);

        this.client = client;
        this.el = el;
        this.easingFunctions = easingFunctions;
        this.gutter = 12;
        this.transitionDuration = '0.5s';
        this.resizeEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._rowItemWidth = 100;
        this.centerItemIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(MasonryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.resizeEventT$ = this.resizeEvent$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(150));
          this.resizeEventT$.subscribe(function (_) {
            _this3.resize();

            setTimeout(function () {
              _this3.pack();
            }, 100);
          });
          window.masonry = this;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this4 = this;

          this.resize();
          setTimeout(function (_) {
            return _this4.pack();
          }, 100);
        }
      }, {
        key: "pack",
        value: function pack() {
          if (this.gridItems.length == 0) return;
          this.gridItems.forEach(function (x) {
            return x.nativeElement.style.transition = 'transform 0';
          });
          var t = new Date();
          var width = this.el.nativeElement.getBoundingClientRect().width;
          var cols = width <= this.client.sizeSm ? 1 : width <= this.client.sizeMd ? 2 : width <= this.client.sizeXl ? 3 : 4;

          var _ref = cols == 1 ? {
            itemWidth: '100%',
            gutter: 12
          } : cols == 2 ? {
            itemWidth: 'calc(50% - 6px)',
            gutter: 12
          } : cols == 3 ? {
            itemWidth: 'calc(33% - 8px)',
            gutter: 12
          } : {
            itemWidth: 'calc(25% - 9px)',
            gutter: 12
          },
              itemWidth = _ref.itemWidth,
              gutter = _ref.gutter;

          this.gridItems.forEach(function (item) {
            var e = item.nativeElement;
            e.style.width = itemWidth;
            e.style.height = 'auto';
          });
          this.gutter = gutter;
          this.grid.nativeElement.style.width = '100%';

          if (!this.packery) {
            this.packery = new Packery(this.grid.nativeElement, {
              gutter: this.gutter,
              transitionDuration: this.transitionDuration,
              stagger: 30
            });
          } else {
            // this.packery.options.originTop = true
            this.packery.layout();
          } // console.log('pack took ', new Date().getTime() - t.getTime(), 'ms')

        }
      }, {
        key: "imagesLoaded",
        value: function imagesLoaded(event) {
          var _this5 = this;

          // console.log('masonry images loaded', event)
          setTimeout(function () {
            return _this5.pack();
          }, 20);
        }
      }, {
        key: "hostResized",
        value: function hostResized() {
          this.resizeEvent$.next();
        }
      }, {
        key: "resize",
        value: function resize() {
          var w = this.el.nativeElement.getBoundingClientRect().width;
          this.rowItemWidth = w <= this.client.sizeSm ? 100 : w <= this.client.sizeMd ? 150 : 200;
          console.log('resize', w, this.rowItemWidth);
        } // @Input()

      }, {
        key: "scrollBy",
        value: function scrollBy(dx) {
          var _this6 = this;

          var duration = 50 + Math.abs(0.5 * dx);
          var el = this.el.nativeElement;
          var startingX = el.scrollLeft;
          var start;

          var step = function step(timestamp) {
            start = !start ? timestamp : start;
            var time = timestamp - start;

            var ratio = _this6.easingFunctions.easeOutQuad(Math.min(time / duration, 1));

            el.scrollLeft = startingX + dx * ratio;

            if (time < duration) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
        }
      }, {
        key: "nextPicture",
        value: function nextPicture() {
          this.scrollBy(this.rowItemWidth + this.gutter);
        }
      }, {
        key: "previousPicture",
        value: function previousPicture() {
          this.scrollBy(-this.rowItemWidth - this.gutter);
        }
      }, {
        key: "rowItemWidth",
        get: function get() {
          return this._rowItemWidth;
        },
        set: function set(value) {
          this._rowItemWidth = value;
        }
      }, {
        key: "rowItemHeight",
        get: function get() {
          return this.rowItemWidth;
        }
      }, {
        key: "row_100",
        get: function get() {
          return this.rowItemWidth == 100;
        }
      }, {
        key: "row_150",
        get: function get() {
          return this.rowItemWidth == 150;
        }
      }, {
        key: "row_200",
        get: function get() {
          return this.rowItemWidth == 200;
        }
      }]);

      return MasonryComponent;
    }();

    MasonryComponent.ɵfac = function MasonryComponent_Factory(t) {
      return new (t || MasonryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_easing_functions_service__WEBPACK_IMPORTED_MODULE_4__["EasingFunctionsService"]));
    };

    MasonryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MasonryComponent,
      selectors: [["app-masonry"]],
      contentQueries: function MasonryComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gridItems = _t);
        }
      },
      viewQuery: function MasonryComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
        }
      },
      hostVars: 6,
      hostBindings: function MasonryComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function MasonryComponent_resize_HostBindingHandler() {
            return ctx.hostResized();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("row_100", ctx.row_100)("row_150", ctx.row_150)("row_200", ctx.row_200);
        }
      },
      inputs: {
        transitionDuration: "transitionDuration"
      },
      outputs: {
        centerItemIndex: "centerItemIndex"
      },
      ngContentSelectors: _c2,
      decls: 5,
      vars: 0,
      consts: [[1, "grid", 3, "imagesLoaded"], ["grid", ""], [1, "grid-item"]],
      template: function MasonryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imagesLoaded", function MasonryComponent_Template_div_imagesLoaded_0_listener($event) {
            return ctx.imagesLoaded($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-width: 100%;\n  overflow-y: visible;\n  overflow-x: auto;\n}\n[_nghost-%COMP%]     img {\n  -webkit-transition: all 500ms ease;\n  transition: all 500ms ease;\n  max-width: 100%;\n  max-height: 100%;\n}\n[_nghost-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n[_nghost-%COMP%]     .grid-item {\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  overflow: hidden;\n}\n.row[_nghost-%COMP%]     .caption {\n  display: none !important;\n}\n.row.row_100[_nghost-%COMP%]     img.carousel {\n  width: 100px !important;\n  height: 100px !important;\n}\n.row.row_150[_nghost-%COMP%]     img.carousel {\n  width: 150px !important;\n  height: 150px !important;\n}\n.row.row_200[_nghost-%COMP%]     img.carousel {\n  width: 200px !important;\n  height: 200px !important;\n}\n.grid[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXNvbnJ5L0M6L1VzZXJzL2phbmlraS9Eb2N1bWVudHMvd29yay9qdWxlL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9tYXNvbnJ5L21hc29ucnkuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFzb25yeS9tYXNvbnJ5LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURFRTtFQUNFLGtDQUFBO0VBQUEsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdFO0VBQ0UsUUFBQTtBQ0RKO0FESUU7RUFDRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBREtFO0VBQ0Usd0JBQUE7QUNISjtBREtFO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQ0hKO0FES0U7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FDSEo7QURLRTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7QUNISjtBRE1FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFzb25yeS9tYXNvbnJ5LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cbiAgXG4gIDpob3N0IDo6bmctZGVlcCBpbWcge1xuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICA6aG9zdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIFxuICA6aG9zdCA6Om5nLWRlZXAgLmdyaWQtaXRlbSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICA6aG9zdC5yb3cgOjpuZy1kZWVwIC5jYXB0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgOmhvc3Qucm93LnJvd18xMDAgOjpuZy1kZWVwIGltZy5jYXJvdXNlbCB7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICB9XG4gIDpob3N0LnJvdy5yb3dfMTUwIDo6bmctZGVlcCBpbWcuY2Fyb3VzZWwge1xuICAgIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgfVxuICA6aG9zdC5yb3cucm93XzIwMCA6Om5nLWRlZXAgaW1nLmNhcm91c2VsIHtcbiAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5ncmlkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB9IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIGltZyB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG46aG9zdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZ3JpZC1pdGVtIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0LnJvdyA6Om5nLWRlZXAgLmNhcHRpb24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG46aG9zdC5yb3cucm93XzEwMCA6Om5nLWRlZXAgaW1nLmNhcm91c2VsIHtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cbjpob3N0LnJvdy5yb3dfMTUwIDo6bmctZGVlcCBpbWcuY2Fyb3VzZWwge1xuICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xufVxuOmhvc3Qucm93LnJvd18yMDAgOjpuZy1kZWVwIGltZy5jYXJvdXNlbCB7XG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG59XG4uZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasonryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-masonry',
          templateUrl: './masonry.component.html',
          styleUrls: ['./masonry.component.less']
        }]
      }], function () {
        return [{
          type: src_app_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: src_app_services_easing_functions_service__WEBPACK_IMPORTED_MODULE_4__["EasingFunctionsService"]
        }];
      }, {
        grid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['grid', {
            static: false
          }]
        }],
        gridItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: ['gridItem']
        }],
        transitionDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hostResized: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize']
        }],
        row_100: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.row_100']
        }],
        row_150: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.row_150']
        }],
        row_200: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.row_200']
        }],
        centerItemIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/modal-images/modal-images.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/modal-images/modal-images.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ModalImagesComponent */

  /***/
  function srcAppComponentsModalImagesModalImagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalImagesComponent", function () {
      return ModalImagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../slideshow/slideshow.component */
    "./src/app/components/slideshow/slideshow.component.ts");
    /* harmony import */


    var src_app_services_modal_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/modal-images.service */
    "./src/app/services/modal-images.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _slideshow_controller_slideshow_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../slideshow-controller/slideshow-controller.component */
    "./src/app/components/slideshow-controller/slideshow-controller.component.ts");

    var _c0 = ["container"];

    function ModalImagesComponent_div_0_app_slideshow_controller_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-slideshow-controller", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("animationDone", function ModalImagesComponent_div_0_app_slideshow_controller_4_Template_app_slideshow_controller_animationDone_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r35.animationFinished();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slideshow", ctx_r34.slideshow);
      }
    }

    function ModalImagesComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalImagesComponent_div_0_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.modal.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-slideshow", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("panleft", function ModalImagesComponent_div_0_Template_app_slideshow_panleft_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.next($event);
        })("panRight", function ModalImagesComponent_div_0_Template_app_slideshow_panRight_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.previous($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalImagesComponent_div_0_app_slideshow_controller_4_Template, 1, 1, "app-slideshow-controller", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx_r32.modal.images)("currentSlide", ctx_r32.modal.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r32.modal.loading);
      }
    }

    var ModalImagesComponent =
    /*#__PURE__*/
    function () {
      function ModalImagesComponent(modal) {
        _classCallCheck(this, ModalImagesComponent);

        this.modal = modal;
        this.animationDone = false;
      }

      _createClass(ModalImagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "animationFinished",
        value: function animationFinished() {
          this.animationDone = true;
        }
      }, {
        key: "previous",
        value: function previous(event) {
          if (event.stopPropagation) {
            event.stopPropagation();
          }

          if (event.preventDefault) {
            event.preventDefault();
          }

          this.slideshow.previousSlide();
        }
      }, {
        key: "next",
        value: function next(event) {
          if (event.stopPropagation) {
            event.stopPropagation();
          }

          if (event.preventDefault) {
            event.preventDefault();
          }

          this.slideshow.nextSlide();
        }
      }, {
        key: "pointerEvents",
        get: function get() {
          return this.modal.isOpen ? 'all' : 'none';
        }
      }]);

      return ModalImagesComponent;
    }();

    ModalImagesComponent.ɵfac = function ModalImagesComponent_Factory(t) {
      return new (t || ModalImagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_modal_images_service__WEBPACK_IMPORTED_MODULE_3__["ModalImagesService"]));
    };

    ModalImagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalImagesComponent,
      selectors: [["app-modal-images"]],
      viewQuery: function ModalImagesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_2__["SlideshowComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slideshow = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function ModalImagesComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("pointer-events", ctx.pointerEvents);
        }
      },
      decls: 1,
      vars: 1,
      consts: [["class", "modal-container", 3, "click", 4, "ngIf"], [1, "modal-container", 3, "click"], ["container", ""], [1, "top"], ["imageClass", "modal-img", 3, "images", "currentSlide", "panleft", "panRight"], [3, "slideshow", "animationDone", 4, "ngIf"], [3, "slideshow", "animationDone"]],
      template: function ModalImagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalImagesComponent_div_0_Template, 5, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modal.isOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_2__["SlideshowComponent"], _slideshow_controller_slideshow_controller_component__WEBPACK_IMPORTED_MODULE_5__["SlideshowControllerComponent"]],
      styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  display: block;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 999999;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .modal-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.94);\n}\n[_nghost-%COMP%]   .modal-container[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  width: 100%;\n  height: calc(100% - 40px);\n  text-align: center;\n  position: relative;\n}\n[_nghost-%COMP%]   .modal-container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  text-align: center !important;\n  color: #a0a09f !important;\n}\n[_nghost-%COMP%]   .modal-container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  color: #a0a09f !important;\n}\n[_nghost-%COMP%]   .modal-container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  width: 70%;\n}\n[_nghost-%COMP%]   .modal-container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: #a0a09f !important;\n}\n[_nghost-%COMP%]   .modal-container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 1.2rem;\n  line-height: 1.5rem;\n}\n[_nghost-%COMP%]   .modal-container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   .artist-name[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\nbody.dektop   [_nghost-%COMP%]   .modal-container[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.previous-image-button[_ngcontent-%COMP%] {\n  width: 15%;\n  line-height: 100px;\n  font-size: 3rem;\n}\n.next-image-button[_ngcontent-%COMP%] {\n  width: 15%;\n  line-height: 100px;\n  font-size: 3rem;\n}\n[_nghost-%COMP%]     .modal-img {\n  display: inline-block;\n  height: 100%;\n  max-width: 100%;\n  -o-object-fit: contain !important;\n     object-fit: contain !important;\n}\napp-slideshow-controller[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -20px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n@media screen and (max-width: 480px) {\n  .top[_ngcontent-%COMP%] {\n    padding-top: 0;\n    height: calc(100% - 100px);\n  }\n  .bottom[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n  .bottom[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n    padding-top: 12px;\n  }\n  .bottom[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    max-width: 100%;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin-bottom: 4px;\n  }\n  .bottom[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1pbWFnZXMvQzovVXNlcnMvamFuaWtpL0RvY3VtZW50cy93b3JrL2p1bGUvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL21vZGFsLWltYWdlcy9tb2RhbC1pbWFnZXMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtaW1hZ2VzL21vZGFsLWltYWdlcy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEVEE7RUFXTSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FDQ047QURkQTtFQWdCUSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDUjtBRHJCQTtFQXdCUSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0VBRUEseUJBQUE7QUNEUjtBRDVCQTtFQWdDVSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0VBQ0EseUJBQUE7QUNEVjtBRGxDQTtFQXVDVSxnQkFBQTtFQUNBLFVBQUE7QUNGVjtBRHRDQTtFQTBDWSx5QkFBQTtBQ0RaO0FEekNBO0VBNkNZLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0RaO0FEOUNBO0VBbURZLGlCQUFBO0VBQ0EsaUJBQUE7QUNGWjtBRFNFO0VBS1UsV0FBQTtBQ1haO0FEa0JFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2hCSjtBRG1CRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNqQko7QURxQkU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7S0FBQSw4QkFBQTtBQ25CSjtBRHNCRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDcEJKO0FEdUJFO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsMEJBQUE7RUNyQko7RUR1QkU7SUFDRSxhQUFBO0VDckJKO0VEb0JFO0lBR0ksaUJBQUE7RUNwQk47RURpQkU7SUFNTSxlQUFBO0lBQ0EsZUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQ3BCUjtFRFVFO0lBYU0saUJBQUE7SUFDQSxpQkFBQTtFQ3BCUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1pbWFnZXMvbW9kYWwtaW1hZ2VzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAgIC5tb2RhbC1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTQpO1xuICBcbiAgICAgIC50b3Age1xuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gIFxuICAgICAgLmJvdHRvbSB7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgXG4gICAgICAgIGNvbG9yOiAjYTBhMDlmICFpbXBvcnRhbnQ7XG4gIFxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gICAgICAgICAgY29sb3I6ICNhMGEwOWYgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLmNhcHRpb24ge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYTBhMDlmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hcnRpc3QtbmFtZSB7XG4gICAgICAgICAgICAvLyBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBib2R5LmRla3RvcCB7XG4gICAgOmhvc3Qge1xuICAgICAgLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgICAgIC5ib3R0b20ge1xuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAucHJldmlvdXMtaW1hZ2UtYnV0dG9uIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgLy8gY29sb3I6ICNmZmY7XG4gIH1cbiAgLm5leHQtaW1hZ2UtYnV0dG9uIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgLy8gY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIDpob3N0IDo6bmctZGVlcCAubW9kYWwtaW1nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb250YWluICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIGFwcC1zbGlkZXNob3ctY29udHJvbGxlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTIwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAudG9wIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gICAgfVxuICAgIC5ib3R0b20ge1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIC5jYXB0aW9uIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gIFxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSIsIjpob3N0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCAubW9kYWwtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjk0KTtcbn1cbjpob3N0IC5tb2RhbC1jb250YWluZXIgLnRvcCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IC5tb2RhbC1jb250YWluZXIgLmJvdHRvbSB7XG4gIGhlaWdodDogMTQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNhMGEwOWYgIWltcG9ydGFudDtcbn1cbjpob3N0IC5tb2RhbC1jb250YWluZXIgLmJvdHRvbSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIGNvbG9yOiAjYTBhMDlmICFpbXBvcnRhbnQ7XG59XG46aG9zdCAubW9kYWwtY29udGFpbmVyIC5ib3R0b20gLmNhcHRpb24ge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICB3aWR0aDogNzAlO1xufVxuOmhvc3QgLm1vZGFsLWNvbnRhaW5lciAuYm90dG9tIC5jYXB0aW9uICoge1xuICBjb2xvcjogI2EwYTA5ZiAhaW1wb3J0YW50O1xufVxuOmhvc3QgLm1vZGFsLWNvbnRhaW5lciAuYm90dG9tIC5jYXB0aW9uIHAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59XG46aG9zdCAubW9kYWwtY29udGFpbmVyIC5ib3R0b20gLmNhcHRpb24gLmFydGlzdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuYm9keS5kZWt0b3AgOmhvc3QgLm1vZGFsLWNvbnRhaW5lciAuYm90dG9tIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wcmV2aW91cy1pbWFnZS1idXR0b24ge1xuICB3aWR0aDogMTUlO1xuICBsaW5lLWhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cbi5uZXh0LWltYWdlLWJ1dHRvbiB7XG4gIHdpZHRoOiAxNSU7XG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb2RhbC1pbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluICFpbXBvcnRhbnQ7XG59XG5hcHAtc2xpZGVzaG93LWNvbnRyb2xsZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTIwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnRvcCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gIH1cbiAgLmJvdHRvbSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAuYm90dG9tIC5jYXB0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgfVxuICAuYm90dG9tIC5jYXB0aW9uIGgyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG4gIC5ib3R0b20gLmNhcHRpb24gcCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cbiJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms 0ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms 0ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalImagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modal-images',
          templateUrl: './modal-images.component.html',
          styleUrls: ['./modal-images.component.less'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms 0ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms 0ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          }))])])]
        }]
      }], function () {
        return [{
          type: src_app_services_modal_images_service__WEBPACK_IMPORTED_MODULE_3__["ModalImagesService"]
        }];
      }, {
        pointerEvents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.pointer-events']
        }],
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['container', {
            static: false
          }]
        }],
        slideshow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_2__["SlideshowComponent"], {
            static: false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/nav/nav.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/nav/nav.component.ts ***!
    \*************************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppComponentsNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_graphql_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/graphql-api.service */
    "./src/app/services/graphql-api.service.ts");
    /* harmony import */


    var src_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/settings.service */
    "./src/app/settings.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _text_flip_text_flip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../text-flip/text-flip.component */
    "./src/app/components/text-flip/text-flip.component.ts");

    function NavComponent_ng_container_12_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r15.menuLabel, " ");
      }
    }

    function NavComponent_ng_container_12_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_ng_container_12_li_2_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.toggleNav();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-text-flip", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + page_r19.slug);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", page_r19.name);
      }
    }

    function NavComponent_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavComponent_ng_container_12_li_1_Template, 3, 1, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavComponent_ng_container_12_li_2_Template, 3, 2, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var category_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r15.menuLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r15.pages);
      }
    }

    var NavComponent =
    /*#__PURE__*/
    function () {
      function NavComponent(api, settings) {
        _classCallCheck(this, NavComponent);

        this.api = api;
        this.settings = settings;
        this.visibility = 'hidden';
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var query = "\n      query {\n        allPageCategories {\n          name\n          menuLabel\n          pages {\n            name\n            slug\n            order\n          }\n        }\n        allPages{\n          name\n          slug\n          order\n        }\n      }\n    ";
          this.pages$ = this.api.graphql(query, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
            return x.data.allPages;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (xs) {
            return xs.sort(function (a, b) {
              return a.order - b.order;
            });
          }));
          this.pageCategories$ = this.api.graphql(query, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
            return x.data.allPageCategories;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) {
            return x.forEach(function (xs) {
              return xs.pages = xs.pages.sort(function (a, b) {
                return a.order - b.order;
              });
            });
          })); // this.settings.settings$.pipe(tap(x => console.log('NAV ___ ', x)))
        }
      }, {
        key: "toggleNav",
        value: function toggleNav() {
          this.visibility = this.visibility == 'hidden' ? 'visible' : 'hidden';
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_graphql_api_service__WEBPACK_IMPORTED_MODULE_3__["GraphqlApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]));
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 14,
      vars: 22,
      consts: [[1, "toggle", 3, "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "routerLink", "click"], [3, "text"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_div_click_0_listener() {
            return ctx.toggleNav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavComponent_ng_container_12_Template, 3, 2, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.visibility === "visible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 12, ctx.settings.primaryColor$), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 14, ctx.settings.primaryColor$), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 16, ctx.settings.primaryColor$), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 18, ctx.settings.primaryColor$), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@toggle", ctx.visibility);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 20, ctx.pageCategories$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _text_flip_text_flip_component__WEBPACK_IMPORTED_MODULE_7__["TextFlipComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 32px;\n  overflow: visible;\n  text-align: right;\n}\n[_nghost-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  padding: 12px;\n  box-sizing: content-box;\n  height: 24px;\n  width: 32px;\n  overflow: hidden;\n  float: right;\n}\n[_nghost-%COMP%]   .toggle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 4px;\n  margin-bottom: 6px;\n  width: 100%;\n  -webkit-transition: -webkit-transform 0.6s ease;\n  transition: -webkit-transform 0.6s ease;\n  transition: transform 0.6s ease;\n  transition: transform 0.6s ease, -webkit-transform 0.6s ease;\n}\n[_nghost-%COMP%]   .toggle.open[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  -webkit-transform: translateY(10px) rotate(45deg);\n          transform: translateY(10px) rotate(45deg);\n}\n[_nghost-%COMP%]   .toggle.open[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n[_nghost-%COMP%]   .toggle.open[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  -webkit-transform: translateY(-10px) rotate(-45deg);\n          transform: translateY(-10px) rotate(-45deg);\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 12px;\n  display: block;\n  width: 100vw;\n  height: 100vh;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding-left: 0;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  text-transform: uppercase;\n  line-height: 32px;\n  color: white;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  text-transform: lowercase;\n  line-height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvQzovVXNlcnMvamFuaWtpL0RvY3VtZW50cy93b3JrL2p1bGUvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEUkE7RUFTTSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0VOO0FEaEJBO0VBa0JRLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwrQ0FBQTtFQUFBLHVDQUFBO0VBQUEsK0JBQUE7RUFBQSw0REFBQTtBQ0NSO0FEdEJBO0VBMkJRLGlEQUFBO1VBQUEseUNBQUE7QUNGUjtBRHpCQTtFQThCUSwyQkFBQTtVQUFBLG1CQUFBO0FDRlI7QUQ1QkE7RUFpQ1EsbURBQUE7VUFBQSwyQ0FBQTtBQ0ZSO0FEL0JBO0VBdUNNLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0xOO0FEdENBO0VBNkNRLHFCQUFBO0VBQ0EsZUFBQTtBQ0pSO0FEMUNBO0VBZ0RVLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDSFY7QURqREE7RUF1RFUsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNIViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAudG9nZ2xlIHtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgXG4gICAgICBkaXYge1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMTk5LCAxNjksIDEpO1xuICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC50b2dnbGUub3BlbiB7XG4gICAgICBkaXY6Zmlyc3QtY2hpbGQge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cbiAgICAgIGRpdjpudGgtY2hpbGQoMikge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgfVxuICAgICAgZGl2Omxhc3QtY2hpbGQge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgdWwge1xuICAgICAgLy8gYmFja2dyb3VuZDogcmdiYSgyNDcsIDE5OSwgMTY5LCAxKTtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwdnc7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIGgzIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG46aG9zdCAudG9nZ2xlIHtcbiAgcGFkZGluZzogMTJweDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDMycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsb2F0OiByaWdodDtcbn1cbjpob3N0IC50b2dnbGUgZGl2IHtcbiAgaGVpZ2h0OiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2U7XG59XG46aG9zdCAudG9nZ2xlLm9wZW4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpIHJvdGF0ZSg0NWRlZyk7XG59XG46aG9zdCAudG9nZ2xlLm9wZW4gZGl2Om50aC1jaGlsZCgyKSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG46aG9zdCAudG9nZ2xlLm9wZW4gZGl2Omxhc3QtY2hpbGQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHJvdGF0ZSgtNDVkZWcpO1xufVxuOmhvc3QgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAxMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuOmhvc3QgdWwgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbjpob3N0IHVsIGxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgdWwgbGkgaDMge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuIl19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('toggle', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1.0,
          transform: 'translateX(100%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1.0,
          transform: 'translateX(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease'))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.less'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('toggle', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1.0,
            transform: 'translateX(100%)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1.0,
            transform: 'translateX(0)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease'))])]
        }]
      }], function () {
        return [{
          type: src_app_services_graphql_api_service__WEBPACK_IMPORTED_MODULE_3__["GraphqlApiService"]
        }, {
          type: src_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/page/page.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/page/page.component.ts ***!
    \***************************************************/

  /*! exports provided: PageComponent */

  /***/
  function srcAppComponentsPagePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageComponent", function () {
      return PageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_graphql_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/graphql-api.service */
    "./src/app/services/graphql-api.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _markdown_markdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../markdown/markdown.component */
    "./src/app/components/markdown/markdown.component.ts");
    /* harmony import */


    var _picture_picture_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../picture/picture.component */
    "./src/app/components/picture/picture.component.ts");
    /* harmony import */


    var _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../image-gallery/image-gallery.component */
    "./src/app/components/image-gallery/image-gallery.component.ts");

    function PageComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-markdown", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var textblock_r11 = ctx.$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("grid-area", ctx_r8.safeGridArea(textblock_r11));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("markdown", textblock_r11.content);
      }
    }

    function PageComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-picture", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var picture_r12 = ctx.$implicit;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("grid-area", ctx_r9.safeGridArea(picture_r12));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("picture", picture_r12);
      }
    }

    function PageComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-image-gallery", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var gallery_r13 = ctx.$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("grid-area", ctx_r10.safeGridArea(gallery_r13));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gallery", gallery_r13);
      }
    }

    var PageComponent =
    /*#__PURE__*/
    function () {
      function PageComponent(route, api, sanitizer) {
        _classCallCheck(this, PageComponent);

        this.route = route;
        this.api = api;
        this.sanitizer = sanitizer;
      }

      _createClass(PageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.pageData$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
            return _this7.api.getPage(params.get('slug'));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
          this.pageTitle$ = this.pageData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (page) {
            return page.name;
          }));
          this.textblocks$ = this.pageData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (page) {
            return page.textblocks;
          }));
          this.pictures$ = this.pageData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (page) {
            return page.pictures;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (pictures) {
            var query = "\n          query picturesWithIds($ids: [ID], $transformation: CloudinaryImageFormat) {\n            allPictures(where: { id_in:$ids }) {\n              id\n              title\n              slug\n              gridArea\n              picture {\n                id\n                filename\n                originalFilename\n                publicUrl\n                publicUrlTransformed(transformation: $transformation)\n              }\n            }\n          }\n        ";
            var variables = {
              ids: pictures.map(function (x) {
                return x.id;
              }),
              transformation: {
                opacity: ".5"
              }
            };
            return _this7.api.graphql(query, variables);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
            return x.data.allPictures;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(console.log));
          this.galleries$ = this.pageData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (page) {
            return page.galleries;
          }));
        }
      }, {
        key: "safeGridArea",
        value: function safeGridArea(item) {
          // console.log(item)
          if (!item.gridArea) return '1';
          return this.sanitizer.bypassSecurityTrustStyle(item.gridArea);
        }
      }]);

      return PageComponent;
    }();

    PageComponent.ɵfac = function PageComponent_Factory(t) {
      return new (t || PageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_graphql_api_service__WEBPACK_IMPORTED_MODULE_3__["GraphqlApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]));
    };

    PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageComponent,
      selectors: [["app-page"]],
      decls: 8,
      vars: 9,
      consts: [[1, "page"], [1, "grid"], [3, "grid-area", 4, "ngFor", "ngForOf"], [3, "markdown"], [3, "picture"], [3, "gallery"]],
      template: function PageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageComponent_div_2_Template, 2, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PageComponent_div_4_Template, 2, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PageComponent_div_6_Template, 2, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.textblocks$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ctx.pictures$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, ctx.galleries$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _markdown_markdown_component__WEBPACK_IMPORTED_MODULE_6__["MarkdownComponent"], _picture_picture_component__WEBPACK_IMPORTED_MODULE_7__["PictureComponent"], _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_8__["ImageGalleryComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-row-gap: 1rem;\n  grid-template-rows: auto auto auto auto auto auto auto auto auto auto auto auto auto auto;\n  grid-template-columns: 100%;\n  grid-template-areas: \"1\" \"2\" \"3\" \"4\" \"5\" \"6\" \"7\" \"8\" \"9\" \"10\" \"11\" \"12\" \"13\" \"14\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlL0M6L1VzZXJzL2phbmlraS9Eb2N1bWVudHMvd29yay9qdWxlL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlL3BhZ2UuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUZBQUE7RUFDQSwyQkFBQTtFQUNBLGlGQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2UvcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtcm93LWdhcDogMXJlbTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIxXCIgXCIyXCIgXCIzXCIgXCI0XCIgXCI1XCIgXCI2XCIgXCI3XCIgXCI4XCIgXCI5XCIgXCIxMFwiIFwiMTFcIiBcIjEyXCIgXCIxM1wiIFwiMTRcIjtcbn0iLCIuZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtcm93LWdhcDogMXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIxXCIgXCIyXCIgXCIzXCIgXCI0XCIgXCI1XCIgXCI2XCIgXCI3XCIgXCI4XCIgXCI5XCIgXCIxMFwiIFwiMTFcIiBcIjEyXCIgXCIxM1wiIFwiMTRcIjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page',
          templateUrl: './page.component.html',
          styleUrls: ['./page.component.less']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_graphql_api_service__WEBPACK_IMPORTED_MODULE_3__["GraphqlApiService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/picture/picture.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/picture/picture.component.ts ***!
    \*********************************************************/

  /*! exports provided: PictureComponent */

  /***/
  function srcAppComponentsPicturePictureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PictureComponent", function () {
      return PictureComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var PictureComponent =
    /*#__PURE__*/
    function () {
      function PictureComponent(sanitizer) {
        _classCallCheck(this, PictureComponent);

        this.sanitizer = sanitizer;
      }

      _createClass(PictureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "url",
        get: function get() {
          // console.log(this.picture)
          if (!this.picture || !this.picture.picture) return "";
          return this.sanitizer.bypassSecurityTrustUrl(this.picture.picture.publicUrl);
        }
      }]);

      return PictureComponent;
    }();

    PictureComponent.ɵfac = function PictureComponent_Factory(t) {
      return new (t || PictureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    PictureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PictureComponent,
      selectors: [["app-picture"]],
      inputs: {
        picture: "picture"
      },
      decls: 2,
      vars: 1,
      consts: [["alt", "", 3, "src"]],
      template: function PictureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waWN0dXJlL0M6L1VzZXJzL2phbmlraS9Eb2N1bWVudHMvd29yay9qdWxlL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9waWN0dXJlL3BpY3R1cmUuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGljdHVyZS9waWN0dXJlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGljdHVyZS9waWN0dXJlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59IiwiaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PictureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-picture',
          templateUrl: './picture.component.html',
          styleUrls: ['./picture.component.less']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, {
        picture: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/slideshow-controller/slideshow-controller.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/slideshow-controller/slideshow-controller.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: SlideshowControllerComponent */

  /***/
  function srcAppComponentsSlideshowControllerSlideshowControllerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideshowControllerComponent", function () {
      return SlideshowControllerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SlideshowControllerComponent_ul_0_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideshowControllerComponent_ul_0_li_1_Template_li_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var image_r43 = ctx.$implicit;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r44.selectImage($event, image_r43);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r43 = ctx.$implicit;

        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r42.isImageActive(image_r43));
      }
    }

    function SlideshowControllerComponent_ul_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@listAnimation.done", function SlideshowControllerComponent_ul_0_Template_ul_animation_listAnimation_done_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.animationDidFinish($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SlideshowControllerComponent_ul_0_li_1_Template, 1, 2, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@listAnimation", ctx_r41.slideshow.images.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r41.slideshow.images);
      }
    }

    var SlideshowControllerComponent =
    /*#__PURE__*/
    function () {
      function SlideshowControllerComponent() {
        _classCallCheck(this, SlideshowControllerComponent);

        this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SlideshowControllerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectImage",
        value: function selectImage(event, image) {
          if (event.stopPropagation) {
            event.stopPropagation();
          }

          if (event.preventDefault) {
            event.preventDefault();
          }

          this.slideshow.currentSlide = image;
        }
      }, {
        key: "isImageActive",
        value: function isImageActive(image) {
          if (this.slideshow) {
            return this.slideshow.currentSlide === image;
          } else {
            return false;
          }
        }
      }, {
        key: "animationDidFinish",
        value: function animationDidFinish(event) {
          // console.log('animation finished')
          this.animationDone.emit(event);
        }
      }, {
        key: "slideshow",
        get: function get() {
          return this._slideshow;
        },
        set: function set(s) {
          this._slideshow = s;
        }
      }]);

      return SlideshowControllerComponent;
    }();

    SlideshowControllerComponent.ɵfac = function SlideshowControllerComponent_Factory(t) {
      return new (t || SlideshowControllerComponent)();
    };

    SlideshowControllerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SlideshowControllerComponent,
      selectors: [["app-slideshow-controller"]],
      inputs: {
        slideshow: "slideshow"
      },
      outputs: {
        animationDone: "animationDone"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"]],
      template: function SlideshowControllerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SlideshowControllerComponent_ul_0_Template, 2, 2, "ul", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slideshow);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: nowrap;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.5);\n  margin-left: 3px;\n  margin-right: 3px;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.75);\n  -webkit-transform: scale(1.25);\n          transform: scale(1.25);\n}\nbody.desktop   [_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n}\nbody.desktop   [_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:hover {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXNob3ctY29udHJvbGxlci9DOi9Vc2Vycy9qYW5pa2kvRG9jdW1lbnRzL3dvcmsvanVsZS9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVzaG93LWNvbnRyb2xsZXIvc2xpZGVzaG93LWNvbnRyb2xsZXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVzaG93LWNvbnRyb2xsZXIvc2xpZGVzaG93LWNvbnRyb2xsZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7QURGQTtFQUdNLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0VOO0FEVkE7RUFVUSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7QUNHUjtBRHBCQTtFQXFCUSxxQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNFUjtBREdFO0VBSVEsNkJBQUE7VUFBQSxxQkFBQTtBQ0pWO0FEQUU7RUFPUSw2QkFBQTtVQUFBLHFCQUFBO0FDSlYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NsaWRlc2hvdy1jb250cm9sbGVyL3NsaWRlc2hvdy1jb250cm9sbGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHVsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgfVxuICBcbiAgICAgIGxpLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBib2R5LmRlc2t0b3Age1xuICAgIDpob3N0IHtcbiAgICAgIHVsIHtcbiAgICAgICAgbGk6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICAgICAgfVxuICAgICAgICBsaS5hY3RpdmU6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cbjpob3N0IHVsIGxpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XG59XG5ib2R5LmRlc2t0b3AgOmhvc3QgdWwgbGk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5ib2R5LmRlc2t0b3AgOmhvc3QgdWwgbGkuYWN0aXZlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuIl19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('listAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0.0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(150, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(0.0)',
          opacity: 0.0,
          offset: 0.0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(1.5)',
          opacity: 1.0,
          offset: 0.8
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(1.0)',
          opacity: 1.0,
          offset: 1.0
        })]))])], {
          optional: true
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(150, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(1.0)',
          opacity: 1.0,
          offset: 0.0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(1.2)',
          opacity: 1.0,
          offset: 0.8
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(0.0)',
          opacity: 0.0,
          offset: 1.0
        })]))])], {
          optional: true
        })])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideshowControllerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-slideshow-controller',
          templateUrl: './slideshow-controller.component.html',
          styleUrls: ['./slideshow-controller.component.less'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('listAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(150, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'scale(0.0)',
            opacity: 0.0,
            offset: 0.0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'scale(1.5)',
            opacity: 1.0,
            offset: 0.8
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'scale(1.0)',
            opacity: 1.0,
            offset: 1.0
          })]))])], {
            optional: true
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(150, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'scale(1.0)',
            opacity: 1.0,
            offset: 0.0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'scale(1.2)',
            opacity: 1.0,
            offset: 0.8
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'scale(0.0)',
            opacity: 0.0,
            offset: 1.0
          })]))])], {
            optional: true
          })])])]
        }]
      }], function () {
        return [];
      }, {
        slideshow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animationDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/slideshow/slideshow.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/slideshow/slideshow.component.ts ***!
    \*************************************************************/

  /*! exports provided: SlideshowComponent */

  /***/
  function srcAppComponentsSlideshowSlideshowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideshowComponent", function () {
      return SlideshowComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SlideshowComponent_img_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function SlideshowComponent_img_1_Template_img_load_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.imageLoaded($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r29 = ctx.$implicit;

        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r28.imageClass)("@fade", image_r29 == ctx_r28.currentSlide ? "in" : "out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", image_r29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var SlideshowComponent =
    /*#__PURE__*/
    function () {
      function SlideshowComponent() {
        _classCallCheck(this, SlideshowComponent);

        this._currentIndex = 0;
        this.imageFit = 'cover';
        this.imageClass = '';
        this.slideChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contentRendered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageLoadProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._imagesLoaded = 0;
      }

      _createClass(SlideshowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {}
      }, {
        key: "imageLoaded",
        value: function imageLoaded(event) {
          console.log('slideshow load progress', event);
          this._imagesLoaded++;
          this.imageLoadProgress.emit({
            loaded: this._imagesLoaded,
            total: this.images.length,
            ratio: this._imagesLoaded / this.images.length
          });
        }
      }, {
        key: "nextSlide",
        value: function nextSlide() {
          this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }
      }, {
        key: "previousSlide",
        value: function previousSlide() {
          this.currentIndex = (this.images.length + this.currentIndex - 1) % this.images.length;
        }
      }, {
        key: "images",
        get: function get() {
          return this._images;
        },
        set: function set(value) {
          if (!value || value.length == 0) return;
          this._images = value.filter(function (x) {
            return x;
          });
          this._currentIndex = -1;
        }
      }, {
        key: "currentSlide",
        get: function get() {
          return this._currentSlide;
        },
        set: function set(slide) {
          if (!slide) {
            this._currentSlide = undefined;
            this._currentIndex = -1;
            return;
          }

          this._currentSlide = slide;
          this._currentIndex = this.images.indexOf(slide);
          this.slideChanged.emit({
            image: this.currentSlide,
            index: this.currentIndex
          });
          this.currentSlideChange.emit(this.currentSlide);
        }
      }, {
        key: "currentIndex",
        get: function get() {
          return this._currentIndex;
        },
        set: function set(value) {
          this._currentIndex = value;

          if (value < 0) {
            this.currentSlide = undefined;
          } else if (this.images && this.images.length > 0) {
            this.currentSlide = this.images[value];
          }
        }
      }]);

      return SlideshowComponent;
    }();

    SlideshowComponent.ɵfac = function SlideshowComponent_Factory(t) {
      return new (t || SlideshowComponent)();
    };

    SlideshowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SlideshowComponent,
      selectors: [["app-slideshow"]],
      inputs: {
        images: "images",
        currentSlide: "currentSlide",
        currentIndex: "currentIndex",
        imageFit: "imageFit",
        imageClass: "imageClass"
      },
      outputs: {
        slideChanged: "slideChanged",
        currentSlideChange: "currentSlideChange",
        contentRendered: "contentRendered",
        imageLoadProgress: "imageLoadProgress"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "container"], [3, "ngClass", "load", 4, "ngFor", "ngForOf"], [3, "ngClass", "load"]],
      template: function SlideshowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SlideshowComponent_img_1_Template, 1, 3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".container[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  height: 100%;\n  width: 100%;\n  max-height: 100%;\n  max-width: 100%;\n  -webkit-transition: opacity 0.5s ease;\n  transition: opacity 0.5s ease;\n}\n.hidden[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n[_nghost-%COMP%]     img {\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n}\n[_nghost-%COMP%]     img.contain, [_nghost-%COMP%]     img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXNob3cvQzovVXNlcnMvamFuaWtpL0RvY3VtZW50cy93b3JrL2p1bGUvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3NsaWRlc2hvdy9zbGlkZXNob3cuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVzaG93L3NsaWRlc2hvdy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtBQ0NKO0FERUU7RUFFSSxVQUFBO0FDRE47QURLRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSEo7QURNRTs7RUFFRSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLFlBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVzaG93L3NsaWRlc2hvdy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2U7XG4gIH1cbiAgXG4gIDpob3N0LmhpZGRlbiB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgOmhvc3QgOjpuZy1kZWVwIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIFxuICA6aG9zdCA6Om5nLWRlZXAgaW1nLmNvbnRhaW4sXG4gIDpob3N0IDo6bmctZGVlcCBpbWcge1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfSIsIi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xufVxuOmhvc3QuaGlkZGVuIC5jb250YWluZXIge1xuICBvcGFjaXR5OiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuOmhvc3QgOjpuZy1kZWVwIGltZy5jb250YWluLFxuOmhvc3QgOjpuZy1kZWVwIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0.0,
          'pointer-events': 'none'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1.0,
          'pointer-events': 'all'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('in => out', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms 0ms ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => in', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms 0ms ease-in')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => in', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0.0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms 0ms ease-in')])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideshowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-slideshow',
          templateUrl: './slideshow.component.html',
          styleUrls: ['./slideshow.component.less'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.0,
            'pointer-events': 'none'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1.0,
            'pointer-events': 'all'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('in => out', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms 0ms ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => in', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms 0ms ease-in')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => in', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms 0ms ease-in')])])]
        }]
      }], function () {
        return [];
      }, {
        images: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        currentSlide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        currentIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageFit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slideChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        currentSlideChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        contentRendered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        imageLoadProgress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/text-flip/text-flip.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/text-flip/text-flip.component.ts ***!
    \*************************************************************/

  /*! exports provided: TextFlipComponent */

  /***/
  function srcAppComponentsTextFlipTextFlipComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextFlipComponent", function () {
      return TextFlipComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TextFlipComponent_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var letter_r24 = ctx.$implicit;
        var i_r25 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transition-delay", i_r25 * 25 + "ms");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", letter_r24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function TextFlipComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var letter_r26 = ctx.$implicit;
        var i_r27 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transition-delay", i_r27 * 25 + "ms");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", letter_r26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var TextFlipComponent =
    /*#__PURE__*/
    function () {
      function TextFlipComponent() {
        _classCallCheck(this, TextFlipComponent);

        this._hover = false;
        this.flipOnHover = true;
      }

      _createClass(TextFlipComponent, [{
        key: "onMouseEnter",
        value: function onMouseEnter() {
          this._hover = true;
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          this._hover = false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "lowercaseMove",
        value: function lowercaseMove() {
          return this.hover ? 'right' : 'centered';
        }
      }, {
        key: "uppercaseMove",
        value: function uppercaseMove() {
          return this.hover ? 'centered' : 'left';
        }
      }, {
        key: "text",
        get: function get() {
          return this._text;
        },
        set: function set(value) {
          this._text = value;
          this._letters = value.split('').map(function (x) {
            return x == ' ' ? '&nbsp;' : x;
          });
        }
      }, {
        key: "letters",
        get: function get() {
          return this._letters;
        }
      }, {
        key: "hover",
        get: function get() {
          return this._hover;
        }
      }]);

      return TextFlipComponent;
    }();

    TextFlipComponent.ɵfac = function TextFlipComponent_Factory(t) {
      return new (t || TextFlipComponent)();
    };

    TextFlipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TextFlipComponent,
      selectors: [["app-text-flip"]],
      hostBindings: function TextFlipComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function TextFlipComponent_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          })("mouseleave", function TextFlipComponent_mouseleave_HostBindingHandler() {
            return ctx.onMouseLeave();
          });
        }
      },
      inputs: {
        text: "text",
        flipOnHover: "flipOnHover"
      },
      decls: 4,
      vars: 6,
      consts: [[1, "letter-container", "lowercase"], ["class", "letter", 4, "ngFor", "ngForOf"], [1, "letter-container", "capitalize"], [1, "letter"], [3, "innerHtml"]],
      template: function TextFlipComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TextFlipComponent_span_1_Template, 2, 3, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TextFlipComponent_span_3_Template, 2, 3, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.hover);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.letters);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.hover);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.letters);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  position: relative;\n  \n  \n  font-size: 200%;\n}\nspan[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\nspan.letter-container[_ngcontent-%COMP%]:nth-child(2) {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\nspan.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  letter-spacing: 1px;\n}\nspan.lowercase[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n  letter-spacing: 1px;\n}\n.letter-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  -webkit-transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1);\n  transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1);\n}\n.letter-container.capitalize[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n.letter-container.lowercase[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n.letter-container.active[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXh0LWZsaXAvQzovVXNlcnMvamFuaWtpL0RvY3VtZW50cy93b3JrL2p1bGUvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3RleHQtZmxpcC90ZXh0LWZsaXAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGV4dC1mbGlwL3RleHQtZmxpcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUNDRixrQkFBa0I7RUFDbEIsaUJBQWlCO0VEQ2YsZUFBQTtBQ0NKO0FERUU7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7QUNBSjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQ0RKO0FESUU7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FDRko7QURJRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNGSjtBREtFO0VBQ0UsNERBQUE7RUFBQSxvREFBQTtBQ0hKO0FES0U7RUFDRSxvQ0FBQTtVQUFBLDRCQUFBO0FDSEo7QURLRTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7QUNISjtBREtFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZXh0LWZsaXAvdGV4dC1mbGlwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogaGVpZ2h0OiAyMHB4OyAqL1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgfVxuICBcbiAgc3BhbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfVxuICBcbiAgc3Bhbi5sZXR0ZXItY29udGFpbmVyOm50aC1jaGlsZCgyKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICB9XG4gIFxuICBzcGFuLmNhcGl0YWxpemUge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbiAgc3Bhbi5sb3dlcmNhc2Uge1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuICBcbiAgLmxldHRlci1jb250YWluZXIgPiBzcGFuID4gc3BhbiB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTtcbiAgfVxuICAubGV0dGVyLWNvbnRhaW5lci5jYXBpdGFsaXplID4gc3BhbiA+IHNwYW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbiAgLmxldHRlci1jb250YWluZXIubG93ZXJjYXNlID4gc3BhbiA+IHNwYW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxuICAubGV0dGVyLWNvbnRhaW5lci5hY3RpdmUgPiBzcGFuID4gc3BhbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogaGVpZ2h0OiAyMHB4OyAqL1xuICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgZm9udC1zaXplOiAyMDAlO1xufVxuc3BhbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuc3Bhbi5sZXR0ZXItY29udGFpbmVyOm50aC1jaGlsZCgyKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuc3Bhbi5jYXBpdGFsaXplIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5zcGFuLmxvd2VyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4ubGV0dGVyLWNvbnRhaW5lciA+IHNwYW4gPiBzcGFuIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTtcbn1cbi5sZXR0ZXItY29udGFpbmVyLmNhcGl0YWxpemUgPiBzcGFuID4gc3BhbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG4ubGV0dGVyLWNvbnRhaW5lci5sb3dlcmNhc2UgPiBzcGFuID4gc3BhbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbn1cbi5sZXR0ZXItY29udGFpbmVyLmFjdGl2ZSA+IHNwYW4gPiBzcGFuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuIl19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('move', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('centered', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(0%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(100%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateX(-100%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('50ms ease'))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextFlipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-text-flip',
          templateUrl: './text-flip.component.html',
          styleUrls: ['./text-flip.component.less'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('move', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('centered', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(0%)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(100%)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateX(-100%)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('50ms ease'))])]
        }]
      }], function () {
        return [];
      }, {
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        flipOnHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onMouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseenter']
        }],
        onMouseLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseleave']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/three-d-heading/three-d-heading.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/three-d-heading/three-d-heading.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ThreeDHeadingComponent */

  /***/
  function srcAppComponentsThreeDHeadingThreeDHeadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThreeDHeadingComponent", function () {
      return ThreeDHeadingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! three */
    "./node_modules/three/build/three.module.js");
    /* harmony import */


    var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! gsap */
    "./node_modules/gsap/index.js");

    var ThreeDHeadingComponent =
    /*#__PURE__*/
    function () {
      function ThreeDHeadingComponent(el) {
        _classCallCheck(this, ThreeDHeadingComponent);

        this.el = el;
        this.background = 0xffffff; // 0xe6e6fa

        this.backgroundAlpha = 0.0;
        this.fontSize = 10.0;
        this.fontHeight = 0.8;
        this.texture = 'assets/textures/gold.jpg';
        this.ready = false;
        this.animationData = {
          groupRotateX: 0.0,
          groupRotateY: 0.0,
          cameraPositionZ: 10
        };
      }

      _createClass(ThreeDHeadingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          setTimeout(function (_) {
            return _this8.setup();
          }, 150);
        }
      }, {
        key: "setup",
        value: function setup() {
          var _this9 = this;

          this.ready = true;
          this.scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
          this.renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({
            antialias: true,
            alpha: true
          });
          this.renderer.setClearColor(this.background, this.backgroundAlpha);
          this.renderer.setPixelRatio(window.devicePixelRatio);
          this.camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](75, 1, 0.01, 200);
          this.camera.position.z = this.animationData.cameraPositionZ;
          this.resize();
          this.initLights();
          this.group = new three__WEBPACK_IMPORTED_MODULE_1__["Group"]();
          var texture = new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]().load(this.texture);
          var meshMaterial = new three__WEBPACK_IMPORTED_MODULE_1__["MeshPhongMaterial"]({
            transparent: false,
            map: texture,
            shininess: 50,
            reflectivity: 0.2,
            side: three__WEBPACK_IMPORTED_MODULE_1__["DoubleSide"]
          });
          var fontLoader = new three__WEBPACK_IMPORTED_MODULE_1__["FontLoader"]();
          fontLoader.load('assets/fonts/helvetiker_regular.typeface.json', function (font) {
            _this9.geometry = new three__WEBPACK_IMPORTED_MODULE_1__["TextGeometry"](_this9.text, {
              font: font,
              size: _this9.fontSize,
              height: _this9.fontHeight,
              curveSegments: 24
            });

            _this9.geometry.center(); // this.geometry.translate(0, 0, 10)


            _this9.bufferGeometry = new three__WEBPACK_IMPORTED_MODULE_1__["BufferGeometry"]().fromGeometry(_this9.geometry);

            _this9.group.add(new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](_this9.bufferGeometry, meshMaterial));

            _this9.scene.add(_this9.group);

            _this9.el.nativeElement.appendChild(_this9.renderer.domElement); // window.addEventListener('resize', _ => this.resize())


            window.requestAnimationFrame(function (_) {
              return _this9.animate();
            });
            gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(_this9.animationData, 5, {
              cameraPositionZ: 50,
              ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].easeOut,
              onUpdate: function onUpdate(_) {
                _this9.camera.position.z = _this9.animationData.cameraPositionZ;
              }
            });
          });
        }
      }, {
        key: "initLights",
        value: function initLights() {
          var _this10 = this;

          this.lights = [[0, 200, 0], [100, 200, 100], [-100, -200, -200]].map(function (x) {
            var pl = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0xffffff, 1, 0);
            pl.position.set(x[0], x[1], x[2]);

            _this10.scene.add(pl);

            return pl;
          });
          this.lightPositions = this.lights.map(function (l) {
            return {
              x: l.position.x,
              y: l.position.y,
              z: l.position.z
            };
          });
          this.lightsRotations = {
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0
          };
        }
      }, {
        key: "resize",
        value: function resize() {
          var el = this.el.nativeElement;
          this.width = el.getBoundingClientRect().width; // this.height = el.getBoundingClientRect().height

          this.height = this.width / 4;
          el.style.height = this.height + 'px';
          console.log('resize', this.width, this.height);
          this.camera.aspect = this.width / this.height;
          this.camera.updateProjectionMatrix();
          this.renderer.setSize(this.width, this.height);
        }
      }, {
        key: "flip",
        value: function flip() {
          var _this11 = this;

          if (!this.ready) return;
          gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(this.animationData, 1, {
            groupRotateX: 2 * Math.PI,
            ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].easeOut,
            onUpdate: function onUpdate(_) {
              _this11.group.rotation.x = _this11.animationData.groupRotateX;
            }
          });
        }
      }, {
        key: "unflip",
        value: function unflip() {
          var _this12 = this;

          if (!this.ready) return;
          gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(this.animationData, 1, {
            groupRotateX: 0,
            ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].easeOut,
            onUpdate: function onUpdate(_) {
              _this12.group.rotation.x = _this12.animationData.groupRotateX;
            }
          });
        }
      }, {
        key: "animate",
        value: function animate() {
          var _this13 = this;

          window.requestAnimationFrame(function (_) {
            return _this13.animate();
          }); // console.log('render')
          // this.group.rotation.x += 0.04 //rotationX;
          // this.group.rotation.y += 0.0 //rotationY;

          this.lightsRotations.rotationZ += 0.005;
          this.lightsRotations.rotationX += 0.01;
          this.lightsRotations.rotationY -= 0.008;
          var sinz = Math.sin(this.lightsRotations.rotationZ);
          var cosz = Math.cos(this.lightsRotations.rotationZ);
          var siny = Math.sin(this.lightsRotations.rotationY);
          var cosy = Math.cos(this.lightsRotations.rotationY);
          var sinx = Math.sin(this.lightsRotations.rotationX);
          var cosx = Math.cos(this.lightsRotations.rotationX);
          this.lights.slice(0, 3).forEach(function (l, i) {
            var pos = _this13.lightPositions[i];
            l.position.x = pos.x * cosz - pos.y * sinz;
            l.position.y = pos.x * sinz + pos.y * cosz;
            l.position.z = pos.z;
            pos = {
              x: l.position.x,
              y: l.position.y,
              z: l.position.z
            };
            l.position.x = pos.x * cosy + pos.z * siny;
            l.position.y = pos.y;
            l.position.z = -pos.x * siny + pos.z * cosy;
            pos = {
              x: l.position.x,
              y: l.position.y,
              z: l.position.z
            };
            l.position.x = pos.x;
            l.position.y = pos.y * cosx - pos.z * sinx;
            l.position.z = pos.y * sinx + pos.z * cosx;
          });
          this.renderer.render(this.scene, this.camera);
        }
      }]);

      return ThreeDHeadingComponent;
    }();

    ThreeDHeadingComponent.ɵfac = function ThreeDHeadingComponent_Factory(t) {
      return new (t || ThreeDHeadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ThreeDHeadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ThreeDHeadingComponent,
      selectors: [["app-three-d-heading"]],
      hostBindings: function ThreeDHeadingComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ThreeDHeadingComponent_resize_HostBindingHandler() {
            return ctx.resize();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mouseover", function ThreeDHeadingComponent_mouseover_HostBindingHandler() {
            return ctx.flip();
          })("mouseout", function ThreeDHeadingComponent_mouseout_HostBindingHandler() {
            return ctx.unflip();
          });
        }
      },
      inputs: {
        text: "text",
        background: "background",
        backgroundAlpha: "backgroundAlpha",
        fontSize: "fontSize",
        fontHeight: "fontHeight",
        texture: "texture"
      },
      decls: 0,
      vars: 0,
      template: function ThreeDHeadingComponent_Template(rf, ctx) {},
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  height: 240px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aHJlZS1kLWhlYWRpbmcvQzovVXNlcnMvamFuaWtpL0RvY3VtZW50cy93b3JrL2p1bGUvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3RocmVlLWQtaGVhZGluZy90aHJlZS1kLWhlYWRpbmcuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGhyZWUtZC1oZWFkaW5nL3RocmVlLWQtaGVhZGluZy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGhyZWUtZC1oZWFkaW5nL3RocmVlLWQtaGVhZGluZy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgfSAiLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI0MHB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThreeDHeadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-three-d-heading',
          templateUrl: './three-d-heading.component.html',
          styleUrls: ['./three-d-heading.component.less']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        background: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundAlpha: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fontSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fontHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        texture: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize']
        }],
        flip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseover']
        }],
        unflip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseout']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/lib/observeProperty.ts":
  /*!****************************************!*\
    !*** ./src/app/lib/observeProperty.ts ***!
    \****************************************/

  /*! exports provided: observeProperty */

  /***/
  function srcAppLibObservePropertyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "observeProperty", function () {
      return observeProperty;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    function observeProperty(target, key) {
      var subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](target[key]);
      Object.defineProperty(target, key, {
        get: function get() {
          return subject.getValue();
        },
        set: function set(newValue) {
          if (newValue !== subject.getValue()) {
            subject.next(newValue);
          }
        }
      });
      return subject.asObservable();
    }
    /***/

  },

  /***/
  "./src/app/modal-images.directive.ts":
  /*!*******************************************!*\
    !*** ./src/app/modal-images.directive.ts ***!
    \*******************************************/

  /*! exports provided: ModalImagesDirective */

  /***/
  function srcAppModalImagesDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalImagesDirective", function () {
      return ModalImagesDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_modal_images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/modal-images.service */
    "./src/app/services/modal-images.service.ts");

    var ModalImagesDirective =
    /*#__PURE__*/
    function () {
      function ModalImagesDirective(modal, el) {
        _classCallCheck(this, ModalImagesDirective);

        this.modal = modal;
        this.el = el;
      }

      _createClass(ModalImagesDirective, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this14 = this;

          var imgNodes = this.el.nativeElement.querySelectorAll('img');
          console.log('modal images', imgNodes.length);

          if (imgNodes.length == 0) {
            console.log('try again');
            return setTimeout(function (_) {
              return _this14.ngAfterContentInit();
            }, 1000);
          }

          this.items = imgNodes;
          this.initListeners(); // this.changeSubscription = this.items.changes.subscribe(_ => {
          //   this.initListeners()
          // })
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {// this.subscriptions.forEach(s => s.unsubscribe())
          // this.changeSubscription.unsubscribe()
        }
      }, {
        key: "initListeners",
        value: function initListeners() {
          var _this15 = this;

          console.log('init listeners');
          this.urls = [];
          this.items.forEach(function (img) {
            // console.log(img)
            img.addEventListener('click', function (event) {
              return _this15.imageClicked(img, event);
            });

            _this15.urls.push(img.src);
          });
        }
      }, {
        key: "imageClicked",
        value: function imageClicked(img, event) {
          console.log('image clicked');
          this.modal.open(this.urls, img.src);
        }
      }]);

      return ModalImagesDirective;
    }();

    ModalImagesDirective.ɵfac = function ModalImagesDirective_Factory(t) {
      return new (t || ModalImagesDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modal_images_service__WEBPACK_IMPORTED_MODULE_1__["ModalImagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ModalImagesDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ModalImagesDirective,
      selectors: [["", "appModalImages", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalImagesDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appModalImages]'
        }]
      }], function () {
        return [{
          type: _services_modal_images_service__WEBPACK_IMPORTED_MODULE_1__["ModalImagesService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/scroll-to.directive.ts":
  /*!****************************************!*\
    !*** ./src/app/scroll-to.directive.ts ***!
    \****************************************/

  /*! exports provided: ScrollToDirective */

  /***/
  function srcAppScrollToDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollToDirective", function () {
      return ScrollToDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    function cumulativeOffset(element) {
      var top = 0;

      do {
        top += element.offsetTop || 0;
        element = element.offsetParent;
      } while (element);

      return top;
    }

    var ScrollToDirective =
    /*#__PURE__*/
    function () {
      function ScrollToDirective(el) {
        _classCallCheck(this, ScrollToDirective);

        this.el = el;
        this.offset = 0; // pixel offset for trigger

        this.ratio = 0.5; //ratio of element that needs to be in Viewport

        this.inViewport = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._inViewport = 0;
      }

      _createClass(ScrollToDirective, [{
        key: "windowScrolled",
        // @HostListener('window:scroll', [])
        value: function windowScrolled() {
          this.isInViewport = this.isScrolledIntoView();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.windowScrolled();
          this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["throttle"])(function (_) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(50);
          })).subscribe(function (_) {
            _this16.windowScrolled();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "isScrolledIntoView",
        value: function isScrolledIntoView() {
          var docViewTop = window.scrollY;
          var docViewBottom = docViewTop + window.innerHeight;
          var elem = this.el.nativeElement;
          var elemTop = cumulativeOffset(elem) + this.offset;
          var elemHeight = elem.offsetHeight;
          var elemBottom = elemTop + elemHeight;
          var isStart = Math.max(docViewTop, elemTop);
          var isEnd = Math.min(docViewBottom, elemBottom);
          return isEnd - isStart > elemHeight * this.ratio ? 0 : elemTop > docViewTop ? 1 : -1;
        }
      }, {
        key: "isInViewport",
        get: function get() {
          return this._inViewport;
        },
        set: function set(value) {
          if (value !== this._inViewport) {
            this._inViewport = value;
            this.inViewport.emit({
              el: this.el,
              pos: value
            });
          }
        }
      }]);

      return ScrollToDirective;
    }();

    ScrollToDirective.ɵfac = function ScrollToDirective_Factory(t) {
      return new (t || ScrollToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ScrollToDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ScrollToDirective,
      selectors: [["", "appScrollTo", ""]],
      inputs: {
        offset: "offset",
        ratio: "ratio"
      },
      outputs: {
        inViewport: "inViewport"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollToDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appScrollTo]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        offset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ratio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inViewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/client.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/client.service.ts ***!
    \********************************************/

  /*! exports provided: ClientService */

  /***/
  function srcAppServicesClientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientService", function () {
      return ClientService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");

    var ClientService =
    /*#__PURE__*/
    function () {
      function ClientService(deviceDetector) {
        _classCallCheck(this, ClientService);

        this.deviceDetector = deviceDetector;
        this._fullScreenImageResolution = {
          width: 0,
          height: 0
        };
        this._largeImageResolution = {
          width: 0,
          height: 0
        };
        this._halfScreenImageResolution = {
          width: 0,
          height: 0
        };
        this._smallImageResolution = {
          width: 0,
          height: 0
        };
        this.mediaSizeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setup();
      }

      _createClass(ClientService, [{
        key: "setup",
        value: function setup() {
          var _this17 = this;

          this._deviceInfo = this.deviceDetector.getDeviceInfo();
          this._fullScreenImageResolution = this.isMobile ? {
            width: 640,
            height: 1280
          } : this.screenMax <= 640 ? {
            width: 640,
            height: 1280
          } : this.screenMax <= 1024 ? {
            width: 1024,
            height: 1280
          } : this.screenMax <= 1280 ? {
            width: 1280,
            height: 1280
          } : this.screenMax <= 1600 ? {
            width: 1600,
            height: 1600
          } : this.screenMax <= 2048 ? {
            width: 2048,
            height: 2048
          } : this.screenMax <= 2560 ? {
            width: 2560,
            height: 2560
          } : true ? {
            width: 3840,
            height: 3840
          } : undefined;
          this._largeImageResolution = this.isMobile ? {
            width: 640,
            height: 1024
          } : this.screenMax <= 640 ? {
            width: 640,
            height: 1024
          } : this.screenMax <= 1024 ? {
            width: 1024,
            height: 1024
          } : this.screenMax <= 1280 ? {
            width: 1024,
            height: 1024
          } : this.screenMax <= 1600 ? {
            width: 1280,
            height: 1280
          } : this.screenMax <= 2048 ? {
            width: 1600,
            height: 1600
          } : this.screenMax <= 2560 ? {
            width: 2048,
            height: 2048
          } : true ? {
            width: 2560,
            height: 2560
          } : undefined;
          this._halfScreenImageResolution = this.isMobile ? {
            width: 640,
            height: 1024
          } : this.screenMax <= 640 ? {
            width: 640,
            height: 1024
          } : this.screenMax <= 1024 ? {
            width: 640,
            height: 1024
          } : this.screenMax <= 1280 ? {
            width: 640,
            height: 1024
          } : this.screenMax <= 1600 ? {
            width: 840,
            height: 1024
          } : this.screenMax <= 2048 ? {
            width: 1024,
            height: 1024
          } : this.screenMax <= 2560 ? {
            width: 1280,
            height: 1024
          } : true ? {
            width: 2048,
            height: 1200
          } : undefined;
          this._smallImageResolution = this.isMobile ? {
            width: 320,
            height: 640
          } : this.screenMax <= 640 ? {
            width: 320,
            height: 640
          } : this.screenMax <= 1024 ? {
            width: 320,
            height: 640
          } : this.screenMax <= 1280 ? {
            width: 480,
            height: 960
          } : this.screenMax <= 1600 ? {
            width: 640,
            height: 1280
          } : this.screenMax <= 2048 ? {
            width: 640,
            height: 1280
          } : this.screenMax <= 2560 ? {
            width: 800,
            height: 1280
          } : true ? {
            width: 1280,
            height: 1600
          } : undefined;

          var resize = function resize() {
            var ms = _this17.isMediaSm() ? 'sm' : _this17.isMediaMd() ? 'md' : _this17.isMediaLg() ? 'lg' : _this17.isMediaXl() ? 'xl' : 'lg';

            if (ms !== _this17._mediaSize) {
              _this17.mediaSizeChanged.emit(ms);
            }

            _this17._mediaSize = ms;
          };

          window.addEventListener('resize', resize);
          resize();
          document.body.classList.add(this.isDesktop ? 'desktop' : 'touch');
        }
      }, {
        key: "isMediaSm",
        value: function isMediaSm() {
          return window.innerWidth <= this.sizeSm;
        }
      }, {
        key: "isMediaMd",
        value: function isMediaMd() {
          return window.innerWidth > this.sizeSm && window.innerWidth <= this.sizeMd;
        }
      }, {
        key: "isMediaLg",
        value: function isMediaLg() {
          return window.innerWidth > this.sizeMd && window.innerWidth <= this.sizeXl;
        }
      }, {
        key: "isMediaXl",
        value: function isMediaXl() {
          return window.innerWidth > this.sizeXl;
        }
      }, {
        key: "fullScreenImageRes",
        get: function get() {
          return this._fullScreenImageResolution;
        }
      }, {
        key: "largeImageRes",
        get: function get() {
          return this._largeImageResolution;
        }
      }, {
        key: "halfScreenImageRes",
        get: function get() {
          return this._halfScreenImageResolution;
        }
      }, {
        key: "smallImageRes",
        get: function get() {
          return this._smallImageResolution;
        }
      }, {
        key: "deviceInfo",
        get: function get() {
          return this._deviceInfo;
        }
      }, {
        key: "isMobile",
        get: function get() {
          return this.deviceDetector.isMobile();
        }
      }, {
        key: "isTablet",
        get: function get() {
          return this.deviceDetector.isTablet();
        }
      }, {
        key: "isDesktop",
        get: function get() {
          return this.deviceDetector.isDesktop();
        }
      }, {
        key: "screenWidth",
        get: function get() {
          return screen.availWidth;
        }
      }, {
        key: "screenHeight",
        get: function get() {
          return screen.availHeight;
        }
      }, {
        key: "screenMin",
        get: function get() {
          return Math.min(this.screenWidth, this.screenHeight);
        }
      }, {
        key: "screenMax",
        get: function get() {
          return Math.max(this.screenWidth, this.screenHeight);
        }
      }, {
        key: "sizeSm",
        get: function get() {
          return 480;
        }
      }, {
        key: "sizeMd",
        get: function get() {
          return 768;
        }
      }, {
        key: "sizeLg",
        get: function get() {
          return 1200;
        }
      }, {
        key: "sizeXl",
        get: function get() {
          return 1600;
        }
      }, {
        key: "marginLeft",
        get: function get() {
          return 190;
        }
      }, {
        key: "headerHeight",
        get: function get() {
          return 120;
        }
      }, {
        key: "tabbarOffsetY",
        get: function get() {
          return 158;
        }
      }, {
        key: "tabbarOffsetYSm",
        get: function get() {
          return 0;
        }
      }, {
        key: "headerHeightMd",
        get: function get() {
          return 80;
        }
      }, {
        key: "headerHeightSm",
        get: function get() {
          return 80;
        }
      }, {
        key: "mediaSize",
        get: function get() {
          return this._mediaSize;
        }
      }]);

      return ClientService;
    }();

    ClientService.ɵfac = function ClientService_Factory(t) {
      return new (t || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__["DeviceDetectorService"]));
    };

    ClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ClientService,
      factory: ClientService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__["DeviceDetectorService"]
        }];
      }, {
        mediaSizeChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/easing-functions.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/easing-functions.service.ts ***!
    \******************************************************/

  /*! exports provided: EasingFunctionsService */

  /***/
  function srcAppServicesEasingFunctionsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EasingFunctionsService", function () {
      return EasingFunctionsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EasingFunctionsService =
    /*#__PURE__*/
    function () {
      function EasingFunctionsService() {
        _classCallCheck(this, EasingFunctionsService);
      } // no easing, no acceleration


      _createClass(EasingFunctionsService, [{
        key: "linear",
        value: function linear(t) {
          return t;
        } // accelerating from zero velocity

      }, {
        key: "easeInQuad",
        value: function easeInQuad(t) {
          return t * t;
        } // decelerating to zero velocity

      }, {
        key: "easeOutQuad",
        value: function easeOutQuad(t) {
          return t * (2 - t);
        } // acceleration until halfway, then deceleration

      }, {
        key: "easeInOutQuad",
        value: function easeInOutQuad(t) {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        } // accelerating from zero velocity

      }, {
        key: "easeInCubic",
        value: function easeInCubic(t) {
          return t * t * t;
        } // decelerating to zero velocity

      }, {
        key: "easeOutCubic",
        value: function easeOutCubic(t) {
          return --t * t * t + 1;
        } // acceleration until halfway, then deceleration

      }, {
        key: "easeInOutCubic",
        value: function easeInOutCubic(t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        } // accelerating from zero velocity

      }, {
        key: "easeInQuart",
        value: function easeInQuart(t) {
          return t * t * t * t;
        } // decelerating to zero velocity

      }, {
        key: "easeOutQuart",
        value: function easeOutQuart(t) {
          return 1 - --t * t * t * t;
        } // acceleration until halfway, then deceleration

      }, {
        key: "easeInOutQuart",
        value: function easeInOutQuart(t) {
          return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
        } // accelerating from zero velocity

      }, {
        key: "easeInQuint",
        value: function easeInQuint(t) {
          return t * t * t * t * t;
        } // decelerating to zero velocity

      }, {
        key: "easeOutQuint",
        value: function easeOutQuint(t) {
          return 1 + --t * t * t * t * t;
        } // acceleration until halfway, then deceleration

      }, {
        key: "easeInOutQuint",
        value: function easeInOutQuint(t) {
          return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
        }
      }]);

      return EasingFunctionsService;
    }();

    EasingFunctionsService.ɵfac = function EasingFunctionsService_Factory(t) {
      return new (t || EasingFunctionsService)();
    };

    EasingFunctionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EasingFunctionsService,
      factory: EasingFunctionsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EasingFunctionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/graphql-api.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/graphql-api.service.ts ***!
    \*************************************************/

  /*! exports provided: GraphqlApiService */

  /***/
  function srcAppServicesGraphqlApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphqlApiService", function () {
      return GraphqlApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var apiPrefix = '/admin/api';

    function _graphql(query) {
      var variables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(fetch('/admin/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          variables: variables,
          query: query
        })
      }).then(function (result) {
        return result.json();
      }));
    }

    var GraphqlApiService =
    /*#__PURE__*/
    function () {
      function GraphqlApiService() {
        _classCallCheck(this, GraphqlApiService);
      }

      _createClass(GraphqlApiService, [{
        key: "getPage",
        value: function getPage(slug) {
          var query = "\n      query PageBySlug($slug: String!) {\n        allPages(where: { slug: $slug }) {\n          name\n          slug\n          id\n          pictures {\n            id\n            title\n            gridArea\n          }\n          galleries {\n            id\n            title\n            gridArea\n          }\n          textblocks {\n            id\n            title\n            gridArea\n            content\n          }\n        }\n      }\n    ";
          var variables = {
            slug: slug
          };
          return _graphql(query, variables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
            return x.data.allPages[0];
          }));
        }
      }, {
        key: "getTextblock",
        value: function getTextblock(slug) {
          var query = "\n      query TextBlockBySlug($slug: String!) {\n        allTextBlocks(where: { slug: $slug }) {\n          title\n          slug\n          id\n          content\n        }\n      }\n    ";
          var variables = {
            slug: slug
          };
          return _graphql(query, variables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
            return x.data.allTextBlocks[0];
          }));
        }
      }, {
        key: "allPages",
        value: function allPages() {
          var query = "\n      query {\n        allPages {\n          name\n          id\n        }\n        _allPagesMeta {\n          count\n        }\n      }\n    ";
          return _graphql(query);
        }
      }, {
        key: "allTextblocks",
        value: function allTextblocks() {
          var query = "\n      query {\n        allTextBlocks {\n          title\n          id\n        }\n        _allTextBlocksMeta {\n          count\n        }\n      }\n    ";
          return _graphql(query);
        }
      }, {
        key: "graphql",
        value: function graphql(query, variables) {
          return _graphql(query, variables);
        }
      }]);

      return GraphqlApiService;
    }();

    GraphqlApiService.ɵfac = function GraphqlApiService_Factory(t) {
      return new (t || GraphqlApiService)();
    };

    GraphqlApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GraphqlApiService,
      factory: GraphqlApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphqlApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/modal-images.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/modal-images.service.ts ***!
    \**************************************************/

  /*! exports provided: ModalImagesService */

  /***/
  function srcAppServicesModalImagesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalImagesService", function () {
      return ModalImagesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ModalImagesService =
    /*#__PURE__*/
    function () {
      function ModalImagesService(router) {
        var _this18 = this;

        _classCallCheck(this, ModalImagesService);

        this._isOpen = false;
        this._loading = true;
        router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            _this18.close();
          }
        });
      }

      _createClass(ModalImagesService, [{
        key: "open",
        value: function open(images, active) {
          var _this19 = this;

          console.log('modal images open');
          this._images = images;
          this._active = active;
          this._isOpen = true;
          this._loading = true;
          setTimeout(function () {
            return _this19._loading = false;
          }, 500);
          document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        }
      }, {
        key: "close",
        value: function close() {
          console.log('modal images close');
          this._images = null;
          this._active = null;
          this._isOpen = false;
          document.getElementsByTagName('body')[0].style.overflow = 'unset';
        }
      }, {
        key: "isOpen",
        get: function get() {
          return this._isOpen;
        }
      }, {
        key: "images",
        get: function get() {
          return this._images;
        }
      }, {
        key: "active",
        get: function get() {
          return this._active;
        },
        set: function set(image) {
          this._active = image;
        }
      }, {
        key: "loading",
        get: function get() {
          return this._loading;
        }
      }]);

      return ModalImagesService;
    }();

    ModalImagesService.ɵfac = function ModalImagesService_Factory(t) {
      return new (t || ModalImagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ModalImagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalImagesService,
      factory: ModalImagesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalImagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/settings.service.ts":
  /*!*************************************!*\
    !*** ./src/app/settings.service.ts ***!
    \*************************************/

  /*! exports provided: SettingsService */

  /***/
  function srcAppSettingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
      return SettingsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_graphql_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/graphql-api.service */
    "./src/app/services/graphql-api.service.ts");

    var SettingsService = function SettingsService(api) {
      _classCallCheck(this, SettingsService);

      this.api = api;
      this.query = "\n    query {\n      allSettings(where: { active: true }) {\n        name\n        titleImage {\n          publicUrl\n        }\n        bannerTexture {\n          publicUrl\n        }\n        active\n        primaryColor\n        bannerText\n      }\n    }\n  ";
      this.settings$ = this.api.graphql(this.query, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
        return x.data.allSettings[0];
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
      this.primaryColor$ = this.settings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
        return x.primaryColor;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
      this.bannerText$ = this.settings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
        return x.bannerText;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
      this.titleImage$ = this.settings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
        return x.titleImage.publicUrl;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
      this.bannerTexture$ = this.settings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
        return x.bannerTexture.publicUrl;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
    };

    SettingsService.ɵfac = function SettingsService_Factory(t) {
      return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_graphql_api_service__WEBPACK_IMPORTED_MODULE_2__["GraphqlApiService"]));
    };

    SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SettingsService,
      factory: SettingsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_graphql_api_service__WEBPACK_IMPORTED_MODULE_2__["GraphqlApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\janiki\Documents\work\jule\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map