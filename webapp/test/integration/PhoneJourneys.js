/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"ertsample1/ERTSample1/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ertsample1/ERTSample1/test/integration/pages/App",
	"ertsample1/ERTSample1/test/integration/pages/Browser",
	"ertsample1/ERTSample1/test/integration/pages/Master",
	"ertsample1/ERTSample1/test/integration/pages/Detail",
	"ertsample1/ERTSample1/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ertsample1.ERTSample1.view."
	});

	sap.ui.require([
		"ertsample1/ERTSample1/test/integration/NavigationJourneyPhone",
		"ertsample1/ERTSample1/test/integration/NotFoundJourneyPhone",
		"ertsample1/ERTSample1/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});