sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/FilterType"
], (Controller) => {
    "use strict";

    return Controller.extend("masterdetail.controller.View1", {
        onListPress:function(oEvent) {
            var orderID = oEvent.getParameter("ListItem").getBindingContext().getProperty("OrderID");  
         var oFilter = new Filter("OrderID",FilterOperator.EQ,orderID);
this.getView().byId("orderTable").getBinding("items").filter(oFilter, FilterType.Application);
        }
    });
});