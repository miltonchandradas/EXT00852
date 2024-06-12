sap.ui.define(
  ["sap/ui/core/mvc/ControllerExtension"],
  function (ControllerExtension) {
    "use strict";

    return ControllerExtension.extend("project1.ext.controller.ListReportExt", {
      // this section allows to extend lifecycle hooks or hooks provided by Fiori elements
      override: {
        /**
         * Called when a controller is instantiated and its View controls (if available) are already created.
         * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
         * @memberOf com.sap.productsui.ext.controller.ListReportExt
         */
        onInit: function () {
          console.log("ON INIT: Extension controller is being called...");

          sap.ui
            .getCore()
            .byId(
              "project1::sap.suite.ui.generic.template.ListReport.view.ListReport::Employees--listReport"
            )
            .attachBeforeExport(function (oEvent) {
              oEvent.mParameters.exportSettings.dataSource.sizeLimit = 5000;
            });
        },
      },
    });
  }
);
