sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("sap.ui.demo.nav.controller.Home", {

		onNavToUserOverview : function (oEvent) {
			this.getRouter().navTo("userOverview");
		}

	});

});
