webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(4);
	// require('./directive');
	// require('./app.css');
	__webpack_require__(6);
	__webpack_require__(12);
	__webpack_require__(20);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(11);


/***/ },
/* 7 */
/***/ function(module, exports) {

	//@require "./**/*.html"
	(function() {
	    angular.module('RegionApp', ['ngRoute','ngAnimate','ngTable','ui.bootstrap','ngCookies']);
	}());


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	(function() {
	  angular.module('RegionApp').config(['$routeProvider' , function ($routeProvider) {
	    $routeProvider
	    .when('/newsearch', {
	        template: __webpack_require__(9),
	        controller: 'regionSearchController',
	        controllerAs: 'RegionApp',
	        requireLogin: true
	      })
	    .when('/branchList', {
				template : __webpack_require__(10),
				controller : 'branchListController',
				controllerAs : 'RegionApp',
				requireLogin : true
			})
	      
	    .otherwise({
	        redirectTo: '/branchList'
	      });
	   }]).run(['$rootScope', '$location', 'sessionService',
	        function ($rootScope, $location, sessionService)
	  {

	   }]);
	  }());


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class=\"hold-transition skin-blue sidebar-mini\">\n\t<div class=\"wrapper\">\n\t\t<ng-include src=\"'navigation_template.html'\"></ng-include>\n\t\t<div class=\"content-wrapper\">\n\t\t\t<section class=\"content-header\">\n\t\t\t\t<h1>\n\t\t\t\t\t<span>Regions Editing</span>\n\t\t\t\t</h1>\n\t\t\t</section>\n\t\t\t<section class=\"content\">\n\t\t\t\t<div class=\"box box-info\">\n\t\t\t\t\t<div class=\"box-header with-border\">\n\n\t\t\t\t\t\t\t\t<!-- form start -->\n<form class=\"form-horizontal\">\n<div class=\"box-body\">\n<div class=\"form-group\">\n<label for=\"inputEmail3\" class=\"col-sm-2 control-label pull-left\"\nng-model=\"searchedKey\"></label>\n    <div class=\"col-sm-2\"></div>\n<div class=\"col-sm-6\">\n<select ng-model=\"seclectedKey\" class=\"col-sm-2\" style=\"height: 34px;\" id=\"dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--                <option value=\"\">select</option>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option ng-selected=\"true\" value=\"description\">RegionUse</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"regiontitle\">RegionTitle</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"normalizedregiontitle\">normalizedRegionTitle</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"ncid\">NCID</option>\n</select> <input type=\"input\" class=\" form-control col-sm-11 pull-left\"\nstyle=\"width: 80%;\"\nplaceholder=\"Please select RegionUse/RegionTitle/normalRegionTitle or NCID by selecting dropdown\"\nng-model=\"searchKey\"> <label ng-show=\"myErrr\" style=\"color: red\">Please Enter Search Key</label> <label class=\"bg-warning\" ng-show=\"showError\" style=\"color: red\">No\nresult Found !!!</label>\n</div>\n<div class=\"col-sm-2\">\n<button type=\"button\" class=\"btn btn-primary\" ng-click=\"search()\">search {{searchedKey}}</button>\n</div>\n</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- /.box-body -->\n\t\t\t\t\t\t\t\t\t<div class=\"box-footer\">\n<!--\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary pull-right\"\n\t\t\t\t\t\t\t\t\t\t\tng-click=\"search()\">search {{searchedKey}}</button>\n-->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n<div class=\"row\" ng-show=\"isResultEnabled\">\n<div class=\"col-xs-12\">\n<div class=\"box box-info\">\n<div class=\"box-header with-border\">\n<h3 class=\"box-title\">Region Result</h3>\n</div>\n<div class=\"box-header\">\n<label ng-show=\"savedMessage\" style=\"color: blue\">Saved the Edited/Deleted Region</label> \n<label ng-show=\"saveErrr\" style=\"color: red\">Unable to Edit/Delete</label>\n<label ng-show=\"requiredErrr\" style=\"color: red\">Please Provide all values</label>\n</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- /.box-header -->\n\n    <div class=\"box-body\">\n        <table ng-table=\"tableParams\" class=\"table table-condensed table-bordered table-striped\">\n        <tr ng-repeat=\"regionObj in $data\" ng-class='{selected: $index==selectedRow}'>\n        <td data-title=\"'(Raw)RegionTitle'\" sortable=\"'regionTitle'\" filter=\"{regionTitle:'text'}\">{{regionObj.regionTitle}}</td>\n        <td data-title=\"'NormalizedRegionTitle'\" sortable=\"'normalizedRegionTitle'\" filter=\"{ variantId: 'text'}\">{{regionObj.normalizedRegionTitle}}</td>\n        <td data-title=\"'RegionUse'\" sortable=\"'regionUse'\" filter=\"{ regionUse: 'text'}\">{{regionObj.regionUse}}</td>\n        \n        <td data-title=\"'Action'\"  sortable=\"'Action'\" >\n        <div class=\"btn-group\">\n            <button class=\"btn btn-primary btn-sm\" ng-disabled=\"!regionObj.canCloned  \" ng-click=\"clonedRow($index)\" ><span class=\"glyphicon glyphicon-ok\"></span></button>\n<!--            <button class=\"btn btn-danger btn-sm\" ng-click=\"deleteCopyRow($index)\"  ng-disabled=\"!regionObj.canRemoved\">Delete</button>-->\n        \n            </div>\n        </td>\n        </tr>\n        </table>\n        </div>\n\t<!--ng-click=\"editRegionRow(regionObj.regionId)\"-->\t\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- /.box-body -->\n    </div>\n    \n    <div class=\"container\">\n  \n\n  <!-- Modal -->\n  <div class=\"modal hide\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n    \n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\" style=\"background: #333;color: white;\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" ng-click=\"close()\">&times;</button>\n          <h4 class=\"modal-title\">Select RegionUse</h4>\n        </div>\n        <div class=\"modal-body\">\n          \n            \n\n                        <div class=\"col-md-4 section\">\n                            <h3  ng-repeat=\"region in regionsName|limitTo:1\" ng-if=\"region.title\" style=\"min-height:60px\">mapping NormalizedRegionTitle</h3>        \n                                \n              <h3  ng-repeat=\"region in regionsName|limitTo:1\" ng-if=\"region.description\" style=\"min-height:60px\">mapping Region Use</h3>\n<!--                            <h3> New Region Use </h3>-->\n                            <select multiple id=\"textAreaLastCell\"  class = \"selectcontainer\">\n                            </select>\n                        </div>\n            <div class=\"col-md-4 section btnGroup\">\n                \n                            <button ng-click=\"shiftData()\" class=\"btnClass\">&#8678;</button>\n                            <button ng-click=\"shiftLastCell()\" class=\"btnClass\">&#8680;</button>\n                        </div>\n            <div class=\"col-md-4 section\">\n                            \n               <h3  ng-repeat=\"region in regionsName|limitTo:1 \" ng-if=\"region.title\" style=\"min-height:60px\">Available NormalizedRegionTitle</h3>        \n                                \n              <h3  ng-repeat=\"region in regionsName|limitTo:1\" ng-if=\"region.description\" style=\"min-height:60px\">Available RegionUse</h3>\n                  <select multiple id=\"selId\"  class=\"selectcontainer\">\n                       \n                                <option data-optionname=\"reguse\" ng-repeat=\"region in regionsName\" ng-if=\"region.description\" value=\"{{region.description}}\" filter=\"{reguse: 'text'}\">{{ region.description}}</option>\n                      \n                                <option data-optionname=\"NormRT\" ng-repeat=\"region in regionsName\" ng-if=\"region.title\" value=\"{{region.title}}\" >{{ region.title}}</option>\n                           \n                        </select>\n                        </div>\n          </div>\n        <div class=\"modal-footer\" style=\"background: #333; color: white; clear:both;\">\n            \n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" ng-click=\"regionUseSave()\">Save</button>\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" ng-click=\"close()\">Close</button>\n        </div>\n        </div>\n      \n    </div>\n  </div>\n  \n</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n                <form name=\"myForm\">\n     <div class=\"row\" ng-show=\"isResultEnabled\">\n      <div class=\"col-xs-12\">\n        \n              <div class=\"box box-info\">\n            <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Edit RegionList</h3>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n        <div class=\"brn-group pull-right\">\n        <button class=\"btn btn-primary\"  ng-click=\"add()\">\n        <span class=\"glyphicon glyphicon-button\">Add</span>\n        </button>\n            \n            \n            </div>\n              <div ng-model=\"checked_editId\"></div>\n       </div>\n              <table ng-table=\"editParams\" class=\"table table-condensed table-bordered table-striped\" class=\"ng-pristine ng-scope ng-invalid ng-invalid-required\" disable-filter=\"isAdding\" ng-form=\"regionObj.tableForm\"  >\n            <tr ng-repeat=\"regionObj in $data track by $index \" >\n            <td >\n            <div ng-if=\"regionObj.action !== ''\">\n                <input  type=\"checkbox\" name=\"selection\" value=\"{{regionObj.editId}}\" check-list=\"checked_editId\" dataeditId = \"regionObj.testId\" ng-click=\"setRowSelection(regionObj.index,regionObj.testId)\"   ng-disabled=\"isEditing\"/>\n            </div>\n            </td>\n            <td title=\"'Action'\" filter=\"{action: 'text'}\" sortable=\"'Dictionary'\" ng-switch=\"row.isEditing\" ng-class=\"name.$dirty ? 'bg-warning' : ''\" ng-form=\"action\" demo-tracked-table-cell>\n            <span ng-switch-default class=\"editable-text\">{{regionObj.action}}</span>\n            <div class=\"controls\" ng-class=\"dictionary.$invalid && dictionary.$dirty ? 'has-error' : ''\" ng-switch-when=\"true\">\n              <input type=\"text\"  name=\"action\" ng-model=\"row.action = 'Add'\" class=\"editable-input form-control input-sm\" value=\"Add\" required />\n                </div></td>\n            \n            <td title=\"'(Raw)RegionTitle'\" sortable=\"'regionTitle'\" filter=\"{regionTitle:'text'}\"   ng-switch=\"regionObj.isEditing\" demo-tracked-table-cell >\n            \n            <span ng-switch-default class=\"editable-text\">{{regionObj.regionTitle}}</span>\n            <div class=\"controls\"  ng-switch-when=\"true\">\n            <input type=\"text\" name=\"regionTitle\" ng-model=\"regionObj.regionTitle\"  ng-keyup=\"(regionObj.regionTitle.length >= 3) && regionTitleFilter(regionObj.regionTitle)\" class=\"editable-input form-control input-sm\" required />\n                          </div>\n            </td>\n\n            <td title=\"'NormalizedRegionTitle'\" sortable=\"'normalizedRegionTitle'\" filter=\"{normalizedRegionTitle:'text'}\"   ng-switch=\"regionObj.isEditing\" demo-tracked-table-cell >\n            <span ng-switch-default class=\"editable-text\">{{regionObj.normalizedRegionTitle}}</span>\n            <div class=\"controls\"  ng-switch-when=\"true\">\n            <input type=\"text\" name=\"normalizedRegionTitle\" ng-model=\"regionObj.normalizedRegionTitle\" id=\"nromRTId\" class=\"editable-input form-control input-sm\" required />\n                <input type=\"button\" value=\"clickme\"\nng-model=\"regionObj.editedRegionTitle\" ng-click=\"normalizedregtitle()\">\n                          </div>\n            </td>\n                \n                 <td title=\"'RegionUse'\" sortable=\"'regionUse'\" filter=\"{regionUse:'text'}\"   ng-switch=\"regionObj.isEditing\" demo-tracked-table-cell >\n            <span ng-switch-default class=\"editable-text\">{{regionObj.regionUse}}</span>\n            <div class=\"controls\"  ng-switch-when=\"true\">\n            <input type=\"text\" name=\"regionUse\" ng-model=\"regionObj.regionUse\" id=\"reguseId\" class=\"editable-input form-control input-sm\" required />\n                <input type=\"button\" value=\"clickme\"\nng-model=\"regionObj.editedRegionTitle\" ng-click=\"reguse()\">\n                          </div>\n            </td>\n            <td title=\"'Row Action'\"   >\n        <div class=\"btn-group\">\n        <button class=\"btn btn-primary\" value=\"{{$index}}\" ng-click=\"save(regionObj, rowForm, $index)\" ng-if=\"regionObj.isEditing\" ng-disabled=\"rowForm.$pristine || rowForm.$invalid\"><span class=\"glyphicon glyphicon-ok\"></span></button>\n        <button class=\"btn btn-default btn-sm\" ng-click=\"cancel(regionObj, rowForm)\" ng-if=\"regionObj.isEditing\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n        <button class=\"btn btn-primary\" ng-click=\"regionObj.isEditing = true\" ng-if=\"!regionObj.isEditing\">Edit</button>\n        <div ng-if=\"regionObj.action == 'Delete' \">\n        <button class=\"btn btn-danger\"  ng-click=\"deleteRowWithWarning($index)\">\n        <span  ng-confirm-click=\"Are you sure, you want to Delete\" ng-disabled=\"!regionObj.canRemoved\" >Revert</span></button>\n                </div>\n                </div>\n            </td>\n                  </tr>\n              </table>\n        </div>\n      </div>\n      <!-- /.box -->\n    </div>\n     </form>\n                \n                \n                \n\t\t\t</section>\n\t\t</div>\n\t\t<ng-include src=\"'footer_template.html'\"></ng-include>\n\t\t<script>\n\t\t\t$(\"#regTabs li\").on(\"click\", function(){\n\t\t        $(\"#regTabs li\").removeClass(\"active\");\n\t\t        $(this).addClass(\"active\");\n\t\t        $(\"#tcontent > div\").removeClass(\"active\");\n\t\t        \n\t\t        var tabName = $(this).find(\"a\").attr(\"data-target\");\n\n\t\t        if(tabName !== \"\"){            \n\t\t            $(\"#tcontent \"+tabName +\" \").addClass(\"active\");            \n\t\t        }\n\t\t        \n\t\t    });\n\t\t</script>\n\t</div>\n</div>";

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<!-- Content Header (Page header) -->\n<div id=\"maindiv\" class=\"hold-transition skin-blue sidebar-mini\">\n\t<div class=\"wrapper\">\n\t\t<ng-include src=\"'navigation_template.html'\"></ng-include>\n\t\t<div class=\"content-wrapper\" style=\"min-height: 925px\">\n\t\t\t<section class=\"content-header\">\n\t\t\t\t<!--    style=\"color:red;\"-->\n\t\t\t\t<h1>\n\t\t\t\t\t<span> Regions workspace</span>\n\t\t\t\t</h1>\n\t\t\t</section>\n\t\t\t<section class=\"content\">\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<!-- Horizontal Form -->\n\t\t\t\t\t<div class=\"box box-info\">\n\t\t\t\t\t\t<div class=\"box-header with-border\">\n\t\t\t\t\t\t\t<h3 class=\"box-title\">Add Region</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- /.box-header -->\n\t\t\t\t\t\t<!-- form start -->\n\t\t\t\t\t\t<form class=\"form-horizontal\">\n\t\t\t\t\t\t\t<div class=\"box-body\">\n\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-4 control-label \">\n                                        </label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\n\t\t\t\t\t\t\t\t\t\t<input type=\"input\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter  workspace Name\" ng-model=\"branchName\">\n                                        \n\t\t\t\t\t\t\t\t\t\t<label ng-show=\"myErr\" style=\"color: red\">Please Enter\n\t\t\t\t\t\t\t\t\t\t\tRegion Name</label> <label ng-show=\"WorkspaceErr\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red\">Region Name already exist</label>\n\t\t\t\t\t\t\t\t\t</div>\n                                    <div class=\"col-sm-2\"><button type=\"button\" \n\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary\" class=\"form-control\" ng-click=\"addBranch()\">Add\n\t\t\t\t\t\t\t\t\tWorkspace{{branchedName}}</button></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- /.box-body -->\n\t\t\t\t\t\t\t<div class=\"box-footer\">\n<!--\n\t\t\t\t\t\t\t\t<button type=\"button\" data-toggle=\"tooltip\" data-placement=\"top\"\n\t\t\t\t\t\t\t\t\ttitle=\"Click here to  add branch\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary  pull-right\" ng-click=\"addBranch()\">Add\n\t\t\t\t\t\t\t\t\tWorkspace{{branchedName}}</button>\n-->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<div class=\"box box-info\">\n\n\t\t\t\t\t\t\t<div class=\"box-header with-border\">\n\t\t\t\t\t\t\t\t<h3 class=\"box-title\">List of Regions</h3>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<!-- /.box-header -->\n\t\t\t\t\t\t\t<div class=\"box-body\">\n\t\t\t\t\t\t\t\t<table ng-table=\"tableParams\"\n\t\t\t\t\t\t\t\t\tclass=\"table table-bordered table-hover table-condensed editable-table statuscheck \"\n\t\t\t\t\t\t\t\t\tng-form=\"tableForm\" demo-tracked-table=\"tableTracker\">\n\n\t\t\t\t\t\t\t\t\t<tr ng-repeat=\"row in $data track by $index\" ng-form=\"rowForm\"\n\t\t\t\t\t\t\t\t\t\tdemo-tracked-table-row=\"row\" value=\"{{row.data.releaseId}}\"\n\t\t\t\t\t\t\t\t\t\tng-class=\"(row.status=='Discard') ? 'statusInactive' : 'statusActive'\">\n\t\t\t\t\t\t\t\t\t\t<td title=\"'Name'\" sortable=\"'name'\" filter=\"{name:'text'}\"\n\t\t\t\t\t\t\t\t\t\t\tng-switch=\"row.isEditing\" demo-tracked-table-cell><span\n\t\t\t\t\t\t\t\t\t\t\tclass=\"editable-text\"><a\n\t\t\t\t\t\t\t\t\t\t\t\thref=\"#/newsearch?{{row.branchId}}\" ng-disabled=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\tng-click=\"getBranchName($event)\" data=\"{{row.name}}\">{{row.name}}</a></span>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td title=\"'UserId'\" sortable=\"'userId'\"\n\t\t\t\t\t\t\t\t\t\t\tfilter=\"{userId:'text'}\" ng-switch=\"row.isEditing\"\n\t\t\t\t\t\t\t\t\t\t\tdemo-tracked-table-cell><span class=\"editable-text\">{{row.userId}}</span>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td title=\"'CreatedTimeOn'\" sortable=\"'createdTimeOn'\"\n\t\t\t\t\t\t\t\t\t\t\tfilter=\"{createdOn:'text'}\" ng-switch=\"row.isEditing\"\n\t\t\t\t\t\t\t\t\t\t\tdemo-tracked-table-cell><span class=\"editable-text\">{{row.createdOn}}</span>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td title=\"'LastUpdatedTimeOn'\" sortable=\"'lastUpdatedTimeOn'\"\n\t\t\t\t\t\t\t\t\t\t\tfilter=\"{lastUpdatedOn:'text'}\" ng-switch=\"row.isEditing\"\n\t\t\t\t\t\t\t\t\t\t\tdemo-tracked-table-cell><span class=\"editable-text\">{{row.lastUpdatedOn}}</span>\n\t\t\t\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t\t\t\t<td title=\"'Status'\" filter=\"{status: 'text'}\"\n\t\t\t\t\t\t\t\t\t\t\tsortable=\"'status'\" ng-switch=\"row.isEditing\"\n\t\t\t\t\t\t\t\t\t\t\tng-class=\"status.$dirty ? 'bg-warning' : ''\" ng-form=\"status\"\n\t\t\t\t\t\t\t\t\t\t\tdemo-tracked-table-cell><span ng-switch-default\n\t\t\t\t\t\t\t\t\t\t\tclass=\"editable-text\" ng-show=\"myVar\">{{row.status}}</span> <span\n\t\t\t\t\t\t\t\t\t\t\tng-switch-default class=\"editable-text\" ng-show=\"myVarSel\"></span>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"controls\"\n\t\t\t\t\t\t\t\t\t\t\t\tng-class=\"status.$invalid && status.$dirty ? 'has-error' : ''\"\n\t\t\t\t\t\t\t\t\t\t\t\tng-switch-when=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t<select ng-model=\"seclectedoption\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tng-change=\"updateStatus( row.name,seclectedoption,{{row.branchId}})\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Active\">Active</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Discard\">Discard</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"ReadyToMerge\">ReadytoMerge</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"Merged\">Merged</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\n\t\t\t\t\t\t\t\t\t\t\t</div></td>\n\n\t\t\t\t\t\t\t\t\t\t<td ng-switch=\"row.isEditing\" demo-tracked-table-cell>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\"\n\t\t\t\t\t\t\t\t\t\t\t\tng-click=\"saveChanges()\" ng-if=\"row.isEditing\"\n\t\t\t\t\t\t\t\t\t\t\t\tng-disabled=\"rowForm.$pristine || rowForm.$invalid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ok\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-sm\"\n\t\t\t\t\t\t\t\t\t\t\t\tng-click=\"cancel(row, rowForm)\" ng-if=\"row.isEditing\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-remove\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\"\n\t\t\t\t\t\t\t\t\t\t\t\tng-click=\"row.isEditing = true\" ng-if=\"!row.isEditing\"\n\t\t\t\t\t\t\t\t\t\t\t\tng-click=\"edit()\">\n\t\t\t\t\t\t\t\t\t\t\t\tEdit\n\t\t\t\t\t\t\t\t\t\t\t\t<!--          <span class=\"glyphicon glyphicon-pencil\"></span>-->\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- /.box-body -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- /.box -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t</div>\n\t\t<ng-include src=\"'footer_template.html'\"></ng-include>\n\t</div>\n</div>\n";

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	(function() {
		var config = {
			//--- APIBackend ---> basepath(8585) &(region-content-portal) are used to hit backend, we user(region-content-portal) while generating dist files as backend team need. No more mockpath using now.
	        basePath : 'http://localhost:8587',
			//	  basePath : "http://localhost:8081" + "/rapid-content-region-portal",
			//basePath : "http://" + window.location.host + "/rapid-content-region-portal",
			//mockPath : 'http://localhost:3000',
			//	  basePath : 'http://localhost:3000',
			//--- APIend ----------->
			urls : {

				//--- start Search page
				regionUses : '/api/v1/regionuses?limit=100',//GET
				regionTitles : '/api/v1/regiontitles?limit=100',//GET
				normalizedRegionTitles : '/api/v1/normalizedregiontitles?limit=417',//GET
				regionUsesPost : '/api/v1/regionuses',//POST
				regionTitlesPost : '/api/v1/regiontitles',//POST
				normalizedRegionTitlesPost : '/api/v1/normalizedregiontitles',//POST
				regionSearch : '/api/v1/regions?key=',//GET
				//editedRegions : '/api/v1/editedregions?branchId=',//GET
				saveEditedRegionsPost : '/api/v1/regions',//POST
				saveDeletedRegionsPost : '/api/v1/regions',//POST
	            branchlist : '/api/v1/branches/',
				branchretrive : '/api/v1/branches/?userid=1',
				status : '/api/v1/branches/',
				edit : '/api/v1/edits/?branchId=',//get
				getrelease : '/api/v1/branches/ready?userId=1',
				UpStatus : '/api/v1/branches/',
				//-- end
	            //-- mapping
	            
	            
	            mappingRegionUse : '/api/v1/regionuses',//get
	        normalizedRegUse : '/api/v1/regionuses/',
	            regionFilter : '/api/v1/regiontitles?key=regiontitle&value=',
	            regionsSave  : '/api/v1/regions',
				login : '/login'
			}
		};
		angular.module('RegionApp').constant('urlConfig', config);
	}());


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(13);
	__webpack_require__(17);
	__webpack_require__(10);
	__webpack_require__(18);
	__webpack_require__(19);


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('RegionApp').run(['$templateCache', function($templateCache)
	 {
	     <!-- Template for main & navigation bar -->
	                $templateCache.put('branch_list/branch_list.html',   __webpack_require__(10));
	                $templateCache.put('navigation_template.html', __webpack_require__(14));
	                $templateCache.put('footer_template.html',   __webpack_require__(16));
	            
	 }]);


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<header class=\"main-header col-md-12\"><a href=\"#/\">\n  <!-- Logo -->\n<!--    style=\"color:red;\"-->\n    <div >\n    <div class=\"pull-left image\" style=\"background-color:#2c2d33\">\n        <img src=\"" + __webpack_require__(15) + "\" class=\"img-circle\" alt=\"User Image\"  style=\"width:30px; height:30px; margin:10px 0px 10px 10px\">\n      </div>\n  <a href=\"#\" class=\"logo\" style=\"text-align:left\">\n      \n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\" style=\"color:red;\"><b>DF</b></span>\n    <!-- logo for regular state and mobile devices -->\n    <span  class=\"logo-lg\"><b>Regions</b></span>\n  </a>\n</div>\n    \n     <div class=\"pull-right\">\n         <h1 style=\"margin:0px;margin-top:10px;color:#ff0000;margin-right: 50px;\">No PHI</h1>\n    </div>\n    \n\n<!--\n<div class=\"navbar navbar-default navbar-fixed-top \" role=\"navigation\">\n    <div class=\"container\" >\n        \n        <div class=\"collapse navbar-collapse pull-right\">\n            \n            <ul class=\"nav navbar-nav\">\n                <li>\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Manage <b class=\"caret\"></b></a>\n                    <ul class=\"dropdown-menu multi-level\">\n                        <li class=\"active\"><a href=\"#/branchList\"><i class=\"fa fa-circle-o\"></i> Branch</a></li>\n                        <li><a href=\"#/releaseContent\"><i class=\"fa fa-circle-o\"></i> Release</a></li>\n                    </ul>\n                </li>\n            </ul>         </div>/.nav-collapse \n    </div>\n</div>\n-->\n\n    </a>\n    <script type=\"text/javascript\">\n jQuery('.navbar a.dropdown-toggle').on('click', function(e) {\nvar $el =  jQuery(this);\n    \nvar $parent =  jQuery(this).offsetParent(\".dropdown-menu\");\njQuery(this).parent(\"li\").toggleClass('open');\nif(!$parent.parent().hasClass('nav')) {\n$el.next().css({\"top\": $el[0].offsetTop, \"left\": $parent.outerWidth() - 4});\n}\njQuery('.nav li.open').not($(this).parents(\"li\")).removeClass(\"open\");\nreturn false;\n});\n   jQuery('.dropdown-menu li').on('click', function(e){\n   jQuery('.dropdown-menu').find(\"li.active\").removeClass(\"active\");      \n   jQuery(this).addClass(\"active\");       \n       \n   }); \n    </script>\n</header>\n\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "27645121c0532a4c28440eefdd3f912e.jpg";

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<footer class=\"main-footer\">\n  <!-- To the right -->\n<!--    style=\"color:red;\"-->\n  <div class=\"pull-right hidden-xs\" >\n   <strong> 3M Health Information System</strong>\n  </div>\n    \n  <strong >Copyright &copy; 3MHIS <a href=\"#\"></a></strong> \n</footer>\n<div class=\"control-sidebar-bg\"></div>\n  \n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';
	(function() {
		var branchListController = function($scope, NgTableParams, branchService, sessionService) {
			$scope.searchedContent = [];
			$scope.tableParams = getNgtableParam($scope.searchedContent);
			//$scope.branchName = "";
			$scope.isEditing = false;
			$scope.searchedContentEdit = [];
			$scope.deleteCount = 0;
			$scope.currentPage = 0;
			$scope.selectedActionRow = 0;
			$scope.myVar = false;
			$scope.myVar = true;
			$scope.myVarSel = false;
			$scope.cols = "";
			$scope.myErr = false;
			$scope.WorkspaceErr = false;
			$scope.search = function() {
				jQuery(document).ready(function() {
					jQuery(".content-wrapper").css('min-height', jQuery(window).height() - (jQuery('.main-footer').outerHeight() + jQuery('.main-header').outerHeight()));
				});
				$scope.showError = false;
				$scope.isRewsultEnabled = false;
				$scope.displayAllBranches();
			};
			$scope.addBranch = function() {
				// console.log($scope.branchName);
				if ($scope.branchName === "" || $scope.branchName === undefined) {
					// console.log("branchName");
					$scope.myErr = true;
					$scope.WorkspaceErr = false;
				} else {
					$scope.myErr = false;
					$scope.WorkspaceErr = false;
					branchService.getBranchList($scope.branchName).then(function(response) {
						console.log(response.data.branchId);

						if (response.data.message === "Branch name is already exists") {
							console.log($scope.WorkspaceErr);
							$scope.WorkspaceErr = true;
						} else {
							$scope.WorkspaceErr = false;
							$scope.branchName = "";
							$scope.displayAllBranches();
							$scope.tableParams.reload();
							$scope.tableParams.page(1);
							$scope.tableParams.sorting({});
						}
					}, function(response) {
						//console.log("Error Happned while Calling Service");
					});
				}
			};

			$scope.getBranchName = function(obj) {

				// console.log(obj);

				localStorage.setItem("dispalyBranchName", obj.target.attributes.data.value);

			}

			$scope.displayAllBranches = function() {
				//console.log("displayAllBranches");
				branchService.getBranchRevert().then(function(response) {
					$scope.searchedContent = createUIDataModel(response.data);
					//console.log(response);  
					$scope.tableParams = getNgtableParam($scope.searchedContent);
					console.log($scope.searchedContent);
					$scope.tableParams.reload();
					$scope.tableParams.page(1);
					$scope.tableParams.sorting({});

				}, function(response) {
					//console.log("Error Happned while Calling Service");
				});

			}
			function createUIDataModel(data) {
				var results = [];
				var branches = data.branches;
				for (var i = 0; i < branches.length; i++) {
					var branch = branches[i];
					var resBranch = {};
					resBranch.data = branch;
					resBranch.name = branch.name;
					resBranch.branchId = branch.branchId;
					//console.log(branch.branchId);
					resBranch.userId = branch.userId;
					resBranch.createdOn = branch.createdOn;
					resBranch.lastUpdatedOn = branch.lastUpdatedOn;
					resBranch.status = branch.status;

					results.push(resBranch);
				}
				return results;
			}
			;
			$scope.updateStatus = function(name, seclectedoption, branchId) {
				// console.log(name,seclectedoption, branchId); 
				branchService.getBranchStatus(name, seclectedoption, branchId).then(function(response) {
					// console.log(response);
					$scope.search();
					//    console.log(seclectedoption);
					if (seclectedoption === "active") {
						console.log(jQuery(this));
						jQuery(this).parent().addClass("text");
					} else {
						//      console.log(jQuery(this));
						jQuery(this).parent().addClass("pipe");
					}
				});
			};

			function getNgtableParam(data) {
				var ngtable = new NgTableParams({
					page : 1,
					count : 5,
					sorting : {
						name : "asc"
					}
				}, {
					dataset : data
				});
				return ngtable;
			}
			;

			$scope.cancel = function(row, rowForm) {
				row.isEditing = false;
				var originalRow = resetRow(row, rowForm);
				angular.extend(row, originalRow);
				$scope.myVar = true;
				$scope.myVarSel = false;

			};
			function resetRow(row, rowForm) {
				row.isEditing = false;
				rowForm.$setPristine();
				self.tableTracker.untrack(row);
				return _.findWhere(originalData, function(r) {
					return r.id === row.id;
				});
			}
			$scope.saveChanges = function() {
				$scope.isEditing = false;
				$scope.myVar = true;
				$scope.myVarSel = false;
			};

			$scope.edit = function(selectedActionRow) {

				if ($scope.selectedActionRow != null) {
					$scope.myVar = false;
					$scope.myVarSel = true;
					$scope.isEditing = true;
					var varient = $scope.searchedContentEdit[$scope.selectedActionRow];

					//varient.isEditing = true;
				}
				//$scope.isEditing = true;

			};
			$scope.setRowSelection = function(id) {
				$scope.selectedActionRow = id;
			};
			$scope.search();
		};

		angular.module('RegionApp').controller('branchListController', [ '$scope', 'NgTableParams', 'branchService', 'sessionService', branchListController ]);
	}());

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery, $) {'use strict';
	(function() {
		var regionSearchController = function($scope, NgTableParams, $routeParams, regionSearchService, $filter) {

			console.log("JS Loaded");
			$scope.searchedContent = [];
			$scope.searchedEditContent = [];
	        $scope.editContent = [];
			$scope.editedTableParams = [];
			$scope.searchKey = "";
	        $scope.isEditing = false;
	        $scope.isAdding = false;
			$scope.isResultEnabled = false;
			$scope.myErrr = false;
			$scope.showError = false;
			$scope.tableParams;
	        $scope.editParams;

			$scope.isEditResultEnabled = true;

			$scope.init = function() {// called to aviod page container issue
				jQuery(document).ready(function() {
					jQuery(".content-wrapper").css('min-height', jQuery(window).height() - (jQuery('.main-footer').outerHeight() + jQuery('.main-header').outerHeight()));

				});
			};

			$scope.search = function() {
				
				$scope.myErrr = false;
				if ($scope.searchKey === "" || $scope.searchKey === undefined) {
					$scope.myErrr = true;
				} else {
					$scope.myErrr = false;
					if ($scope.seclectedKey === "" || $scope.seclectedKey === undefined) {
						$scope.seclectedKey = "description";
					}
					if ($scope.searchKey) {
						regionSearchService.serach($scope.seclectedKey, $scope.searchKey).then(function(response) {
							$scope.isResultEnabled = false;

							$scope.searchedContent = createUIDataModel(response.data);

							if ($scope.searchedContent.length > 0) {
								$scope.isResultEnabled = true;
								$scope.myErrr = false;
								$scope.showError = false;
								$scope.tableParams = getNgtableParam($scope.searchedContent);
								$scope.tableParams.reload();
								$scope.tableParams.page(1);
								$scope.tableParams.sorting({});
							} else {
								$scope.myErrr = false;
								$scope.showError = true;
								$scope.isResultEnabled = false;
							}
						}, function(response) {
							console.log("Error Happned while Calling Service");
							$scope.myErrr = false;
							$scope.showError = true;
						});

					} else {
						$scope.tableParams = getNgtableParam($scope.searchedContent);
						reloadTableContent($scope.tableParams);
					}

				}
			};

			$scope.cancelRegionRow = function(index) {
				console.log("editRegionRow index : " + index);
				var region = getRegionById(index);
				region.isEdited = false;
				region.editedNormalizedRegionTitle = "";
				region.editedRegionTitle = "";
				region.editedRegionUse = "";
				region.editedNcid = "";

				$scope.savedMessage = false;
				$scope.saveErrr = false;
				$scope.requiredErrr = false;
				$scope.myErrr = false;

				console.log($scope.tableParams);
			};

			$scope.acceptRegionRow = function(index) {
				console.log("editRegionRow index : " + index);

				var region = getRegionById(index);
				region.action = "Added";

				$scope.savedMessage = false;
				$scope.saveErrr = false;
				$scope.requiredErrr = false;
				$scope.myErrr = false;

				if (region.editedRegionUse === "" || region.editedNcid === "" || region.editedNormalizedRegionTitle === "" || region.editedRegionTitle === "") {
					$scope.requiredErrr = true;
					region.isEdited = true;
					return;
				}

				regionSearchService.saveEditedRegion(region.editedRegionUse, region.editedNcid, region.editedNormalizedRegionTitle, region.editedRegionTitle).then(function(response) {

					$scope.savedMessage = true;
					region.editedNormalizedRegionTitle = "";
					region.editedRegionTitle = "";
					region.editedRegionUse = "";
	//				region.editedNcid = "";

				}, function(response) {
					console.log("Error Happned while Calling Service");
					$scope.saveErrr = true;
					region.isEdited = true;
				});

	//			$scope.loadEditTableData();
			};
	        
	        $scope.save = function(regionObj,rowForm,index){
	            regionObj.isEditing = false;
	            console.log(regionObj);
	        var getCurrentUrl = window.location.href;
	                var getBranchid = getCurrentUrl.split("?").pop();
	               console.log(getBranchid);
	            var varient = $scope.editContent[regionObj];
	            console.log(varient);
	            
	            var nromzledArray = [];
	            var nrm =jQuery("#nromRTId").val();
	            var nrmChange = nrm.split(",");
	           console.log(nrmChange.length);
	            for( var i=0;i< parseInt(nrmChange.length)-1;i++){
	                console.log(i);
	                nromzledArray.push(nrmChange[i]);
	                
	            }
	            var regUseArray = [];
	            
	            console.log(nromzledArray);
	            var regnam =jQuery("#reguseId").val();
	            var regChange = regnam.split(",");
	           console.log(regChange.length);
	            for( var i=0;i< parseInt(regChange.length)-1;i++){
	                console.log(i);
	                regUseArray.push(regChange[i]);
	                
	            }
	            console.log(regUseArray);
	            

	          var rUse =  toObject(nromzledArray, regUseArray);
	            console.log(rUse);
	            function toObject(nromzledArray,regUseArray) {
	                var result = {};

	    for (var i = 0; i < nromzledArray.length; i++) {
	        result[nromzledArray[i]] = regUseArray[i];
	    }

	        console.log(result);
	                
	        return result;
	            }   
	                var request = [
		{
			"regionTitle": regionObj.regionTitle,
			"normalizedRegionTitles": nromzledArray,
			"action" : regionObj.action,
			"regionUses": rUse,
			"branchId" : parseInt(getBranchid)
		
		}
	]
	                
	          console.log(request);
	            regionSearchService.regSave(request).then(function(response){
	                console.log(response);
	            });
	//           
	        };
	//        function reloadTableData(){
	//            
	//            var getCurrentUrl = window.location.href;
	//                var getBranchid = getCurrentUrl.split("/").pop();
	//           console.log(getBranchid); varientSearchService.editList(getBranchid).then(function(response){
	//            console.log(response);
	//            $scope.editContent = createDataModel(response.data);
	//            console.log(response);  
	//            $scope.isResultEnabled = true;
	//            $scope.editParams = getNgtableParam($scope.editContent);
	//            reloadTableContent( $scope.editParams);
	//            $scope.editParams.page(1);
	//            $scope.editParams.sorting({});
	//            }, 
	//            function(response) {
	//            console.log("Error Happned while Calling Service");
	//            });
	//        }
	        
	         $scope.cancel = function(regionObj, rowForm)
	        {
	             $scope.isEditing = false;
	            regionObj.isEditing = false;
	            
	        }
	        
	        
	//        $scope.save = function(regionObj, rowForm,index)
	//        { 
	//            
	//            if($scope.selectedActionRow!=null)
	//            {
	//                
	//                var varient = $scope.editContent[regionObj];
	//                $scope.isEditing = false;
	//               // varient.isEditing = false;
	//               var getCurrentUrl = window.location.href;
	//                var getBranchid = getCurrentUrl.split("?").pop();
	//               console.log(getBranchid); regionSearchService.regSave(getBranchid,$scope.editContent[regionObj],$scope.gettestId,'Clone').then(function(response)
	//                {
	//                    
	//                    console.log(response);
	//                    if(response.data.message=== "Added successfully"){
	//                        console.log("status");
	//                        localStorage.setItem("newTestId",response.data.testId);
	//                        console.log(response.data.testId);
	//                        $scope.gettestId=response.data.testId;
	//                        
	////                        reloadTableData();
	//                        
	//                    }
	//                    $scope.editParams = getNgtableParam($scope.editContent);
	//                }, function(response) {
	//                    console.log("Exception while calling the deleting records");
	//                });
	//         }
	//    };
	//        
	//        
	        $scope.close = function(){
	           
	          jQuery(document).find("#myModal").removeClass("show").addClass("hide"); 
	            
	        };
	        $scope.regionuse = function(){
	            $scope.regionsName= "";
	            regionSearchService
								.tblRegionUseLimit()
								.then(
										function(response) {
	                                      console.log(response);
	                                      $scope.regionsName =  response.data.regions; 
	                                    
	                 });         
	        };
	        $scope.normalizedregiontitle = function(){
	            $scope.regionsName= "";
	            regionSearchService
								.getNormalizedRegionTitle()
								.then(
										function(response) {
	                                      console.log(response);
	                                      $scope.regionsName =  response.data.regions; 
	                                      console.log($scope.regionsName.title);
	                                    
	                 });         
	        };
	         $scope.regionTitleFilter = function(regTitle){
	            $scope.regionsName= "";
	             console.log(regTitle);
	            regionSearchService
								.getRegionFilter("history")
								.then(
										function(response) {
	                                      console.log(response);
	                                      $scope.regionsName =  response.data.regions; 
	                                      console.log($scope.regionsName.title);
	                                    
	                 });         
	        };
	        
	        $scope.normalizedregtitle = function(){
	            jQuery(document).find("#textAreaLastCell").empty();
	            $scope.normalizedregiontitle();
	            
	            var popupnrt = jQuery(document).find("#myModal");
	           if (popupnrt.hasClass('hide'))
	           {
	               
	               popupnrt.toggleClass("show"); 
	            } 
	            
	        };
	        $scope.reguse = function(){
	            jQuery(document).find("#textAreaLastCell").empty();
	           $scope.regionuse();
	            
	            var popupnrt = jQuery(document).find("#myModal");
	           if (popupnrt.hasClass('hide'))
	           {
	               
	               popupnrt.toggleClass("show"); 
	            } 
	        };
	        
			$scope.shiftData = function() {
				var optionsVal=jQuery(document).find("#selId").val();
				var optionsAdd = jQuery(document).find("#selId").find('option:selected');	
				//var option = abbb.attr('value');
					
				for(var x in optionsVal) {
					optionsAdd.remove();
					jQuery(document).find("#textAreaLastCell").append("<option value ='"+optionsVal[x]+"'>"+optionsVal[x]+"</option>");
				}
			};

			$scope.shiftLastCell = function() {
				var shiftCellVal=jQuery(document).find("#textAreaLastCell").val();
				var selShiftCell = jQuery(document).find("#textAreaLastCell").find('option:selected');	
				//var option = abbb.attr('value');
					
				for(var x in shiftCellVal) {
					selShiftCell.remove();
					jQuery(document).find("#selId").append("<option value ='"+shiftCellVal[x]+"'>"+shiftCellVal[x]+"</option>");
				}
			};
	           $scope.add = function () {
	            $scope.isAdding = true;
	            
	            $scope.editParams.settings().dataset.unshift({
	                regionTitle:"",
	                normalizedRegionTitle:"",
	                regionUse:"",
	               
	            });
	            
	            reloadTableContent($scope.editParams);
	           $scope.editParams= getNgtableParam($scope.editParams);
	           reloadTableContent($scope.editParams);
	            $scope.isEditing = true;
	            var varient = $scope.editContent[$scope.selectedActionRow];
	            varient.isEditing = true;
	    };
	        $scope.regionUseSave = function(){
	            var regionOptn = jQuery(document).find("#selId option").data( "optionname" );
	            var str = "";
	            jQuery(document).find("#textAreaLastCell option").each(function () { 
	                str += $(this).text() + ","; 
	            });
	            console.log(regionOptn);
	            if(regionOptn === "reguse") {

	                jQuery(document).find("#reguseId").val(str);
	            } else {
	            
	                jQuery(document).find("#nromRTId").val(str);
	            }
	            console.log(str);
	            $scope.close();
	        };
	        $scope.clonedRow = function(index)
	       {
	        console.log("clonedRow index"+ index);
	           var varient =  $scope.searchedContent[index];
	           varient.action = "Edit";
	           var cloneObject = clone(varient);
	           cloneObject.isEditing = false;
	           console.log(cloneObject);
	           $scope.editContent.push(cloneObject);
	           $scope.editParams = getNgtableParam($scope.editContent);
	           console.log($scope.editContent);
	            console.log($scope.editParams);
	           reloadTableContent($scope.editParams);
	           //$scope.tableParams= getNgtableParam($scope.searchedContent);
	           //console.log($scope.searchedContent);
	           //reloadTableContent($scope.tableParams)
	       };
	        
	        
	        
	        function clone(obj) {
	            if (null == obj || "object" != typeof obj) return obj;
	            console.log(obj);
	            var copy = obj.constructor();
	            
	            for (var attr in obj) {
	                console.log(attr);
	                console.log(obj.hasOwnProperty(attr));
	                if(attr == "varString"){ 
	                    obj[attr]="";
	                } 
	                
	                if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
	                }
	            
	            console.log(copy);
	            return copy;
	        }
	        $scope.deleteCopyRow = function(index) {
				var region = getRegionById(index);
				region.action = "Delete";

				$scope.savedMessage = false;
				$scope.saveErrr = false;
				$scope.requiredErrr = false;

				regionSearchService.saveDeletedRegion(region.regionUse, region.ncid, region.normalizedRegionTitle, region.regionTitle).then(function(response) {
					$scope.savedMessage = false;
					region.isDeleted = true;

				}, function(response) {
					console.log("Error Happned while Calling Service");
					$scope.saveErrr = true;
					region.isDeleted = false;
				});

	//			$scope.loadEditTableData();

			}

			$scope.editRegionRow = function(index) {
				console.log("editRegionRow index : " + index);
	            
				resetEditedRows();
				var region = getRegionById(index);
	            
				region.isEdited = true;
				console.log(region);
				$scope.savedMessage = false;
				$scope.saveErrr = false;
				$scope.requiredErrr = false;

			}

	//		$scope.loadEditTableData = function() {
	//
	//			var branchid = "";
	//			regionSearchService.loadEditedList().then(function(response) {
	//				$scope.isEditResultEnabled = false;
	//
	//				$scope.searchedEditContent = createDataModel(response.data);
	//
	//				if ($scope.searchedEditContent.length > 0) {
	//					$scope.isEditResultEnabled = true;
	//					$scope.myErrr = false;
	//					$scope.showError = false;
	//					$scope.editedTableParams = getNgtableParam($scope.searchedEditContent);
	//					$scope.editedTableParams.reload();
	//					$scope.editedTableParams.page(1);
	//					$scope.editedTableParams.sorting({});
	//				} else {
	//					$scope.myErrr = false;
	//					$scope.showError = true;
	//					$scope.isEditResultEnabled = false;
	//				}
	//			}, function(response) {
	//				console.log("Error Happned while Calling Service");
	//			});
	//		}

			function createUIDataModel(data) {
				var results = [];
				var regions = data.regions;
				for (var i = 0; i < regions.length; i++) {
					var region = regions[i];
					var resRegion = {};
					resRegion.data = region;

					resRegion.regionId = i;
					resRegion.regionUse = region.description;
					resRegion.regionTitle = region.regionTitle;
					resRegion.normalizedRegionTitle = region.normalizedRegionTitle;
					resRegion.editedNormalizedRegionTitle = "";
					resRegion.editedRegionTitle = "";
					resRegion.ncid = region.ncid;
	                resRegion.canRemoved = true;
	                resRegion.canCloned = true;
					resRegion.isDeleted = false;
					resRegion.isEdited = false;

					results.push(resRegion);
				}
				return results;
			}
			;

			function getRegionById(regId) {
				var region = $filter('filter')($scope.searchedContent, {
					regionId : regId
				}, true);
				return region[0];
			}

			function resetEditedRows() {
	//			for (var i = 0; i < $scope.searchedContent.length; i++) {
					var region = $scope.searchedContent[0];
	                console.log(region.ncid);
					if (region.isEdited) {
						region.isEdited = true;
						region.editedNormalizedRegionTitle = region.normalizedRegionTitle;
						region.editedRegionTitle = region.regionTitle;
						region.editedRegionUse = region.regionUse;
						region.editedNcid = region.ncid;
					
				}
			}

			function createDataModel(data) {
				var results = [];
				var edits = data.regions;
				for (var i = 0; i < edits.length; i++) {
					var edit = edits[i];
					var resRegion = {};
					resRegion.data = edit;
					resRegion.regionUse = edit.description;
					resRegion.regionTitle = edit.regionTitle;
					resRegion.normalizedRegionTitle = edit.normalizedRegionTitle;
					//resRegion.ncid = edit.ncid;
					results.push(resRegion);
				}
				return results;
			}

			function reloadTableContent(table) {
				table.reload();
				table.page(1);
				table.sorting({});
			}

			function getNgtableParam(data) {
				var ngtable = new NgTableParams({
					page : 1,
					count : 5,
					sorting : {
						name : "asc"
					}
				}, {
					dataset : data
				});
				return ngtable;
			}

	//		$scope.loadEditTableData();
	        $scope.init();
		};
		angular.module('RegionApp').controller('regionSearchController', [ '$scope', 'NgTableParams', '$routeParams', 'regionSearchService', '$filter', regionSearchController ]);

	}());

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(3)))

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<div class=\\\"hold-transition skin-blue sidebar-mini\\\">\\n\\t<div class=\\\"wrapper\\\">\\n\\t\\t<ng-include src=\\\"'navigation_template.html'\\\"></ng-include>\\n\\t\\t<div class=\\\"content-wrapper\\\">\\n\\t\\t\\t<section class=\\\"content-header\\\">\\n\\t\\t\\t\\t<h1>\\n\\t\\t\\t\\t\\t<span>Regions Editing</span>\\n\\t\\t\\t\\t</h1>\\n\\t\\t\\t</section>\\n\\t\\t\\t<section class=\\\"content\\\">\\n\\t\\t\\t\\t<div class=\\\"box box-info\\\">\\n\\t\\t\\t\\t\\t<div class=\\\"box-header with-border\\\">\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t<!-- form start -->\\n<form class=\\\"form-horizontal\\\">\\n<div class=\\\"box-body\\\">\\n<div class=\\\"form-group\\\">\\n<label for=\\\"inputEmail3\\\" class=\\\"col-sm-2 control-label pull-left\\\"\\nng-model=\\\"searchedKey\\\"></label>\\n    <div class=\\\"col-sm-2\\\"></div>\\n<div class=\\\"col-sm-6\\\">\\n<select ng-model=\\\"seclectedKey\\\" class=\\\"col-sm-2\\\" style=\\\"height: 34px;\\\" id=\\\"dropdown\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<!--                <option value=\\\"\\\">select</option>-->\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<option ng-selected=\\\"true\\\" value=\\\"description\\\">RegionUse</option>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\\"regiontitle\\\">RegionTitle</option>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\\"normalizedregiontitle\\\">normalizedRegionTitle</option>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\\"ncid\\\">NCID</option>\\n</select> <input type=\\\"input\\\" class=\\\" form-control col-sm-11 pull-left\\\"\\nstyle=\\\"width: 80%;\\\"\\nplaceholder=\\\"Please select RegionUse/RegionTitle/normalRegionTitle or NCID by selecting dropdown\\\"\\nng-model=\\\"searchKey\\\"> <label ng-show=\\\"myErrr\\\" style=\\\"color: red\\\">Please Enter Search Key</label> <label class=\\\"bg-warning\\\" ng-show=\\\"showError\\\" style=\\\"color: red\\\">No\\nresult Found !!!</label>\\n</div>\\n<div class=\\\"col-sm-2\\\">\\n<button type=\\\"button\\\" class=\\\"btn btn-primary\\\" ng-click=\\\"search()\\\">search {{searchedKey}}</button>\\n</div>\\n</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<!-- /.box-body -->\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"box-footer\\\">\\n<!--\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<button type=\\\"button\\\" class=\\\"btn btn-primary pull-right\\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tng-click=\\\"search()\\\">search {{searchedKey}}</button>\\n-->\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t</form>\\n<div class=\\\"row\\\" ng-show=\\\"isResultEnabled\\\">\\n<div class=\\\"col-xs-12\\\">\\n<div class=\\\"box box-info\\\">\\n<div class=\\\"box-header with-border\\\">\\n<h3 class=\\\"box-title\\\">Region Result</h3>\\n</div>\\n<div class=\\\"box-header\\\">\\n<label ng-show=\\\"savedMessage\\\" style=\\\"color: blue\\\">Saved the Edited/Deleted Region</label> \\n<label ng-show=\\\"saveErrr\\\" style=\\\"color: red\\\">Unable to Edit/Delete</label>\\n<label ng-show=\\\"requiredErrr\\\" style=\\\"color: red\\\">Please Provide all values</label>\\n</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<!-- /.box-header -->\\n\\n    <div class=\\\"box-body\\\">\\n        <table ng-table=\\\"tableParams\\\" class=\\\"table table-condensed table-bordered table-striped\\\">\\n        <tr ng-repeat=\\\"regionObj in $data\\\" ng-class='{selected: $index==selectedRow}'>\\n        <td data-title=\\\"'(Raw)RegionTitle'\\\" sortable=\\\"'regionTitle'\\\" filter=\\\"{regionTitle:'text'}\\\">{{regionObj.regionTitle}}</td>\\n        <td data-title=\\\"'NormalizedRegionTitle'\\\" sortable=\\\"'normalizedRegionTitle'\\\" filter=\\\"{ variantId: 'text'}\\\">{{regionObj.normalizedRegionTitle}}</td>\\n        <td data-title=\\\"'RegionUse'\\\" sortable=\\\"'regionUse'\\\" filter=\\\"{ regionUse: 'text'}\\\">{{regionObj.regionUse}}</td>\\n        \\n        <td data-title=\\\"'Action'\\\"  sortable=\\\"'Action'\\\" >\\n        <div class=\\\"btn-group\\\">\\n            <button class=\\\"btn btn-primary btn-sm\\\" ng-disabled=\\\"!regionObj.canCloned  \\\" ng-click=\\\"clonedRow($index)\\\" ><span class=\\\"glyphicon glyphicon-ok\\\"></span></button>\\n<!--            <button class=\\\"btn btn-danger btn-sm\\\" ng-click=\\\"deleteCopyRow($index)\\\"  ng-disabled=\\\"!regionObj.canRemoved\\\">Delete</button>-->\\n        \\n            </div>\\n        </td>\\n        </tr>\\n        </table>\\n        </div>\\n\\t<!--ng-click=\\\"editRegionRow(regionObj.regionId)\\\"-->\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<!-- /.box-body -->\\n    </div>\\n    \\n    <div class=\\\"container\\\">\\n  \\n\\n  <!-- Modal -->\\n  <div class=\\\"modal hide\\\" id=\\\"myModal\\\" role=\\\"dialog\\\">\\n    <div class=\\\"modal-dialog\\\">\\n    \\n      <!-- Modal content-->\\n      <div class=\\\"modal-content\\\">\\n        <div class=\\\"modal-header\\\" style=\\\"background: #333;color: white;\\\">\\n          <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"modal\\\" ng-click=\\\"close()\\\">&times;</button>\\n          <h4 class=\\\"modal-title\\\">Select RegionUse</h4>\\n        </div>\\n        <div class=\\\"modal-body\\\">\\n          \\n            \\n\\n                        <div class=\\\"col-md-4 section\\\">\\n                            <h3  ng-repeat=\\\"region in regionsName|limitTo:1\\\" ng-if=\\\"region.title\\\" style=\\\"min-height:60px\\\">mapping NormalizedRegionTitle</h3>        \\n                                \\n              <h3  ng-repeat=\\\"region in regionsName|limitTo:1\\\" ng-if=\\\"region.description\\\" style=\\\"min-height:60px\\\">mapping Region Use</h3>\\n<!--                            <h3> New Region Use </h3>-->\\n                            <select multiple id=\\\"textAreaLastCell\\\"  class = \\\"selectcontainer\\\">\\n                            </select>\\n                        </div>\\n            <div class=\\\"col-md-4 section btnGroup\\\">\\n                \\n                            <button ng-click=\\\"shiftData()\\\" class=\\\"btnClass\\\">&#8678;</button>\\n                            <button ng-click=\\\"shiftLastCell()\\\" class=\\\"btnClass\\\">&#8680;</button>\\n                        </div>\\n            <div class=\\\"col-md-4 section\\\">\\n                            \\n               <h3  ng-repeat=\\\"region in regionsName|limitTo:1 \\\" ng-if=\\\"region.title\\\" style=\\\"min-height:60px\\\">Available NormalizedRegionTitle</h3>        \\n                                \\n              <h3  ng-repeat=\\\"region in regionsName|limitTo:1\\\" ng-if=\\\"region.description\\\" style=\\\"min-height:60px\\\">Available RegionUse</h3>\\n                  <select multiple id=\\\"selId\\\"  class=\\\"selectcontainer\\\">\\n                       \\n                                <option data-optionname=\\\"reguse\\\" ng-repeat=\\\"region in regionsName\\\" ng-if=\\\"region.description\\\" value=\\\"{{region.description}}\\\" filter=\\\"{reguse: 'text'}\\\">{{ region.description}}</option>\\n                      \\n                                <option data-optionname=\\\"NormRT\\\" ng-repeat=\\\"region in regionsName\\\" ng-if=\\\"region.title\\\" value=\\\"{{region.title}}\\\" >{{ region.title}}</option>\\n                           \\n                        </select>\\n                        </div>\\n          </div>\\n        <div class=\\\"modal-footer\\\" style=\\\"background: #333; color: white; clear:both;\\\">\\n            \\n          <button type=\\\"button\\\" class=\\\"btn btn-danger\\\" data-dismiss=\\\"modal\\\" ng-click=\\\"regionUseSave()\\\">Save</button>\\n          <button type=\\\"button\\\" class=\\\"btn btn-danger\\\" data-dismiss=\\\"modal\\\" ng-click=\\\"close()\\\">Close</button>\\n        </div>\\n        </div>\\n      \\n    </div>\\n  </div>\\n  \\n</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\n                <form name=\\\"myForm\\\">\\n     <div class=\\\"row\\\" ng-show=\\\"isResultEnabled\\\">\\n      <div class=\\\"col-xs-12\\\">\\n        \\n              <div class=\\\"box box-info\\\">\\n            <div class=\\\"box-header with-border\\\">\\n            <h3 class=\\\"box-title\\\">Edit RegionList</h3>\\n          </div>\\n          <!-- /.box-header -->\\n          <div class=\\\"box-body\\\">\\n        <div class=\\\"brn-group pull-right\\\">\\n        <button class=\\\"btn btn-primary\\\"  ng-click=\\\"add()\\\">\\n        <span class=\\\"glyphicon glyphicon-button\\\">Add</span>\\n        </button>\\n            \\n            \\n            </div>\\n              <div ng-model=\\\"checked_editId\\\"></div>\\n       </div>\\n              <table ng-table=\\\"editParams\\\" class=\\\"table table-condensed table-bordered table-striped\\\" class=\\\"ng-pristine ng-scope ng-invalid ng-invalid-required\\\" disable-filter=\\\"isAdding\\\" ng-form=\\\"regionObj.tableForm\\\"  >\\n            <tr ng-repeat=\\\"regionObj in $data track by $index \\\" >\\n            <td >\\n            <div ng-if=\\\"regionObj.action !== ''\\\">\\n                <input  type=\\\"checkbox\\\" name=\\\"selection\\\" value=\\\"{{regionObj.editId}}\\\" check-list=\\\"checked_editId\\\" dataeditId = \\\"regionObj.testId\\\" ng-click=\\\"setRowSelection(regionObj.index,regionObj.testId)\\\"   ng-disabled=\\\"isEditing\\\"/>\\n            </div>\\n            </td>\\n            <td title=\\\"'Action'\\\" filter=\\\"{action: 'text'}\\\" sortable=\\\"'Dictionary'\\\" ng-switch=\\\"row.isEditing\\\" ng-class=\\\"name.$dirty ? 'bg-warning' : ''\\\" ng-form=\\\"action\\\" demo-tracked-table-cell>\\n            <span ng-switch-default class=\\\"editable-text\\\">{{regionObj.action}}</span>\\n            <div class=\\\"controls\\\" ng-class=\\\"dictionary.$invalid && dictionary.$dirty ? 'has-error' : ''\\\" ng-switch-when=\\\"true\\\">\\n              <input type=\\\"text\\\"  name=\\\"action\\\" ng-model=\\\"row.action = 'Add'\\\" class=\\\"editable-input form-control input-sm\\\" value=\\\"Add\\\" required />\\n                </div></td>\\n            \\n            <td title=\\\"'(Raw)RegionTitle'\\\" sortable=\\\"'regionTitle'\\\" filter=\\\"{regionTitle:'text'}\\\"   ng-switch=\\\"regionObj.isEditing\\\" demo-tracked-table-cell >\\n            \\n            <span ng-switch-default class=\\\"editable-text\\\">{{regionObj.regionTitle}}</span>\\n            <div class=\\\"controls\\\"  ng-switch-when=\\\"true\\\">\\n            <input type=\\\"text\\\" name=\\\"regionTitle\\\" ng-model=\\\"regionObj.regionTitle\\\"  ng-keyup=\\\"(regionObj.regionTitle.length >= 3) && regionTitleFilter(regionObj.regionTitle)\\\" class=\\\"editable-input form-control input-sm\\\" required />\\n                          </div>\\n            </td>\\n\\n            <td title=\\\"'NormalizedRegionTitle'\\\" sortable=\\\"'normalizedRegionTitle'\\\" filter=\\\"{normalizedRegionTitle:'text'}\\\"   ng-switch=\\\"regionObj.isEditing\\\" demo-tracked-table-cell >\\n            <span ng-switch-default class=\\\"editable-text\\\">{{regionObj.normalizedRegionTitle}}</span>\\n            <div class=\\\"controls\\\"  ng-switch-when=\\\"true\\\">\\n            <input type=\\\"text\\\" name=\\\"normalizedRegionTitle\\\" ng-model=\\\"regionObj.normalizedRegionTitle\\\" id=\\\"nromRTId\\\" class=\\\"editable-input form-control input-sm\\\" required />\\n                <input type=\\\"button\\\" value=\\\"clickme\\\"\\nng-model=\\\"regionObj.editedRegionTitle\\\" ng-click=\\\"normalizedregtitle()\\\">\\n                          </div>\\n            </td>\\n                \\n                 <td title=\\\"'RegionUse'\\\" sortable=\\\"'regionUse'\\\" filter=\\\"{regionUse:'text'}\\\"   ng-switch=\\\"regionObj.isEditing\\\" demo-tracked-table-cell >\\n            <span ng-switch-default class=\\\"editable-text\\\">{{regionObj.regionUse}}</span>\\n            <div class=\\\"controls\\\"  ng-switch-when=\\\"true\\\">\\n            <input type=\\\"text\\\" name=\\\"regionUse\\\" ng-model=\\\"regionObj.regionUse\\\" id=\\\"reguseId\\\" class=\\\"editable-input form-control input-sm\\\" required />\\n                <input type=\\\"button\\\" value=\\\"clickme\\\"\\nng-model=\\\"regionObj.editedRegionTitle\\\" ng-click=\\\"reguse()\\\">\\n                          </div>\\n            </td>\\n            <td title=\\\"'Row Action'\\\"   >\\n        <div class=\\\"btn-group\\\">\\n        <button class=\\\"btn btn-primary\\\" value=\\\"{{$index}}\\\" ng-click=\\\"save(regionObj, rowForm, $index)\\\" ng-if=\\\"regionObj.isEditing\\\" ng-disabled=\\\"rowForm.$pristine || rowForm.$invalid\\\"><span class=\\\"glyphicon glyphicon-ok\\\"></span></button>\\n        <button class=\\\"btn btn-default btn-sm\\\" ng-click=\\\"cancel(regionObj, rowForm)\\\" ng-if=\\\"regionObj.isEditing\\\"><span class=\\\"glyphicon glyphicon-remove\\\"></span></button>\\n        <button class=\\\"btn btn-primary\\\" ng-click=\\\"regionObj.isEditing = true\\\" ng-if=\\\"!regionObj.isEditing\\\">Edit</button>\\n        <div ng-if=\\\"regionObj.action == 'Delete' \\\">\\n        <button class=\\\"btn btn-danger\\\"  ng-click=\\\"deleteRowWithWarning($index)\\\">\\n        <span  ng-confirm-click=\\\"Are you sure, you want to Delete\\\" ng-disabled=\\\"!regionObj.canRemoved\\\" >Revert</span></button>\\n                </div>\\n                </div>\\n            </td>\\n                  </tr>\\n              </table>\\n        </div>\\n      </div>\\n      <!-- /.box -->\\n    </div>\\n     </form>\\n                \\n                \\n                \\n\\t\\t\\t</section>\\n\\t\\t</div>\\n\\t\\t<ng-include src=\\\"'footer_template.html'\\\"></ng-include>\\n\\t\\t<script>\\n\\t\\t\\t$(\\\"#regTabs li\\\").on(\\\"click\\\", function(){\\n\\t\\t        $(\\\"#regTabs li\\\").removeClass(\\\"active\\\");\\n\\t\\t        $(this).addClass(\\\"active\\\");\\n\\t\\t        $(\\\"#tcontent > div\\\").removeClass(\\\"active\\\");\\n\\t\\t        \\n\\t\\t        var tabName = $(this).find(\\\"a\\\").attr(\\\"data-target\\\");\\n\\n\\t\\t        if(tabName !== \\\"\\\"){            \\n\\t\\t            $(\\\"#tcontent \\\"+tabName +\\\" \\\").addClass(\\\"active\\\");            \\n\\t\\t        }\\n\\t\\t        \\n\\t\\t    });\\n\\t\\t</script>\\n\\t</div>\\n</div>\";"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	(function() {
	    var sessionService = function($cookies) {
	      this.setUserAuthentication = function(username,session) {
	         var sessionInfo = {
	           "username" : username,
	           "password" : session
	         };
	          $cookies.putObject('seesionInfo', sessionInfo);
	      };

	      this.removeAuthentication = function() {
	          $cookies.putObject('seesionInfo', null);
	      };
	      this.getUsername = function() {
	          var username = '';
	          var sessionInfo= $cookies.getObject('seesionInfo');
	          if(sessionInfo != null)
	              username = sessionInfo.username;
	          return username;
	      };
	      this.isUserAuthenticated = function(value) {
	      var sessionInfo= $cookies.getObject('seesionInfo');
	      if(sessionInfo !=null)
	        return true;
	        return false;
	      };
	    };
	    angular.module('RegionApp').service('sessionService',['$cookies',sessionService]);
	}());


/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	(function() {
	    var regionSearchService = function($http,urlConfig,$httpParamSerializer) {
	        this.serach = function(searchKey,searchValue) {
	          // console.log(currentPage);
	          return $http({
	                  method : "GET",
	                  url : urlConfig.basePath + urlConfig.urls.regionSearch+searchKey+"&value="+ searchValue+"&limit=100"
	              });
	        };
	//        this.loadEditedList = function(branchId) {
	//          console.log(branchId);
	//          return $http({
	//                  method : "GET",
	//                  url : urlConfig.basePath + urlConfig.urls.editedRegions
	//              });
	//        };
	        
	        this.tblRegionUseLimit = function() {
	          
	          return $http({
	                  method : "GET",
	                  url : urlConfig.basePath + urlConfig.urls.mappingRegionUse+"?limit=20"
	              });
	        };//mappingRegionUse
	        
	        this.tblRegionUse = function(regionUseId) {
	          return $http({
	                  method : "GET",
	                  url : urlConfig.basePath + urlConfig.urls.normalizedRegUse+regionUseId+"?limit=20"
	              });
	        };
	        
			this.saveEditedRegion = function(editedRegionUse, editedNcid, editedNormalizedRegionTitle, editedRegionTitle) {
				var request = {
						regionTitle : editedRegionTitle,
						normalizedRegionTitle : editedNormalizedRegionTitle,
						ncid : editedNcid,
						description : editedRegionUse,
						action: "Add"
				};
				
				return $http({
					method : "POST",
					url : urlConfig.basePath + urlConfig.urls.saveEditedRegionsPost,
					data : angular.toJson(request),
					headers : {
						'Content-Type' : 'application/json'
					}
				});
			};
			
			this.saveDeletedRegion = function(editedRegionUse, editedNcid, editedNormalizedRegionTitle, editedRegionTitle) {
				var request = {
						regionTitle : editedRegionTitle,
						normalizedRegionTitle : editedNormalizedRegionTitle,
						ncid : editedNcid,
						description : editedRegionUse,
						action: "Delete"
				};
				
				return $http({
					method : "POST",
					url : urlConfig.basePath + urlConfig.urls.saveDeletedRegionsPost,
					data : angular.toJson(request),
					headers : {
						'Content-Type' : 'application/json'
					}
				});
			};
	        this.tblRegionUseLimit = function() {
	          
	          return $http({
	                  method : "GET",
	                  url : urlConfig.basePath + urlConfig.urls.mappingRegionUse+"?limit=20"
	              });
	        };
	        
	        this.tblRegionUse = function(regionUseId) {
	          return $http({
	                  method : "GET",
	                  url : urlConfig.basePath + urlConfig.urls.normalizedRegUse+regionUseId+"?limit=20"
	              });
	        };
	        
	        //---- NRT
	        this.getNormalizedRegionTitle = function() {
				return $http({
					method : "GET",
					url : urlConfig.basePath + urlConfig.urls.normalizedRegionTitles
				});
			};
	        this.getRegionFilter = function(regionTitle) {
				return $http({
					method : "GET",
					url : urlConfig.basePath + urlConfig.urls.regionFilter+regionTitle
				});
			};
	        
	        this.regSave = function(payloads) {
				  
	            return $http({
					method : "POST",
					url : urlConfig.basePath + urlConfig.urls.regionsSave,
					data : angular.toJson(payloads),
					headers : {
						'Content-Type' : 'application/json'
					}
				});
			};
	        
	       
	        
	    };
	    
	    var regionAppModule = angular.module('RegionApp');
	    regionAppModule.service('regionSearchService',['$http','urlConfig','$httpParamSerializer',regionSearchService]);
	}());


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	(function() {
	    <!-- getBranchilist,getBranchRevert & getBranchStatus belongs to PBI-worspacepage -->
	    var branchService = function($http,urlConfig) {
	// alert(window.location.host);
	// alert(window.location.hostname);
	        // console.log(urlConfig.basePath);
	        this.getBranchList = function(branchName) {
	            var request = {
	                name: branchName,
	                type: 'regions',
	                userId: 1,
	                
	            };
	            
	            // console.log(request);
	          return $http({
	                method : "POST",
	                url : urlConfig.basePath + urlConfig.urls.branchlist,
	                data : angular.toJson(request),
	                headers : { 'Content-Type': 'application/json' }
	            });
	        };
	        
	        this.getBranchStatus = function(name,seclectedoption,branchId) {
	            var branchid =parseInt(branchId);
	            var request ={
	                 name: name,
	                status: seclectedoption};
	            
	           // console.log(request);
	          return $http({
	                method : "PUT",
	                url : urlConfig.basePath + urlConfig.urls.status+branchid,
	                data : angular.toJson(request),
	              headers : { 'Content-Type': 'application/json' }
	            });
	            
	        };
	        this.updateBranchStatus = function(seclectedoption,branchId) {
	            var branchid =parseInt(branchId);
	            var request ={
	                 
	                status: seclectedoption};
	            
	           // console.log(request);
	          return $http({
	                method : "PUT",
	                url : urlConfig.basePath + urlConfig.urls.UpStatus+branchid,
	                data : angular.toJson(request),
	              headers : { 'Content-Type': 'application/json' }
	            });
	            
	        };
	        // getTestId
	        this.delWrokSpace = function(deleteId) {
	            
	          return $http({
	                method : "DELETE",
	                url : urlConfig.basePath + urlConfig.urls.deleteworkspace+deleteId
	              
	               
	            });
	        };
	        <!--invokeTest belongs to test API-->
	        this.invokeTest = function(testId,finalJson) {
	            // console.log(JSON.stringify(finalJson));
	            // var testid =parseInt(testId);
	             console.log(testId);
	          return $http({
	                method : "PUT",
	                url : urlConfig.basePath + urlConfig.urls.test+testId+"?type=text",
	              data :JSON.stringify(finalJson)
	              // data : angular.toJson(finalJson),
	            // headers : { 'Content-Type': 'application/json' }
	              
	               
	            });
	        };
	        
	        
	        
	        
	        
	        this.getBranchRevert = function() {
	            var retriveid='1&userid=1';
	            return $http({
	                  method : "GET",
	                  url : urlConfig.basePath + urlConfig.urls.branchretrive
	              });
	        };
	        <!--getBranchRevision,delWrokSpace belongs to workspace page -->
	        this.getBranchRevision = function(getid)
	        {
	           $("#spinLoader").show();
	             var request = getid;
	            // console.log(request);
	          return $http({
	                  method : "POST",
	                  url : urlConfig.basePath + urlConfig.urls.branchRevision,
	              data : angular.toJson(request),
	                headers : { 'Content-Type': 'application/json' }
	              });
	        };
	    };
	    angular.module('RegionApp').service('branchService',['$http','urlConfig',branchService]);
	}());

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }
]);