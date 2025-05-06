sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";
  
  return Controller.extend("smarttabledemoapp.controller.View1", {
    onInit: function () {
      var oModel = this.getOwnerComponent().getModel();
      this.getView().setModel(oModel);
    },
    onSelectionChange(oEvent){
      console.log("Row clicked");
      var item = oEvent;


    }
  });
});
